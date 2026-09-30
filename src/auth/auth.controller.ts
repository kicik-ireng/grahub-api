import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login to the application' })
  @ApiResponse({ status: 200, description: 'Successful login' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.login(loginDto);
    return {
      message: 'Login successful',
      data: result,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiOperation({ summary: 'Get current user profile and permissions' })
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
  })
  async getProfile(@Request() req: any) {
    const user = await this.authService.me(req.user.userId);
    return {
      message: 'User profile retrieved',
      data: user,
    };
  }
}
