import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  success: boolean;
  message: string;
  data?: T;
  meta?: any;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((res) => {
        // If the controller already returned a properly formatted response, just return it
        if (res && res.hasOwnProperty('success')) {
          return res;
        }

        const message = res?.message || 'Operation successful';
        if (res && res.message) {
          delete res.message;
        }
        
        const meta = res?.meta || undefined;
        if (res && res.meta) {
          delete res.meta;
        }

        // If response is just data (like an array or object) without message/meta wrapper
        return {
          success: true,
          message,
          data: res?.data ? res.data : res,
          meta,
        };
      }),
    );
  }
}
