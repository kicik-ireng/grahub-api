import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'warga1@grahub.local' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({ example: ['ROLE_ID_1', 'ROLE_ID_2'] })
  @IsOptional()
  roleIds?: string[];

  @ApiPropertyOptional({ example: 'RESIDENT_ID_1' })
  @IsOptional()
  @IsString()
  residentId?: string;
}
