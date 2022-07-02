import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginRequest {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'password must be longer than 8 characters' })
  password: string;
}
