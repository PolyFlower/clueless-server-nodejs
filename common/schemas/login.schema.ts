import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class LoginRequest {
  @IsNotEmpty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'password must be longer than 8 characters' })
  @Matches(/^(?=.*[A-Z].*[A-Z]).{2,}$/m, {
    message: 'password must contain minimum 2 uppercase letters',
  })
  @Matches(/^(?=.*[@!$&#=+-].*[@!$&#=+-]).{2,}$/m, {
    message: 'password must contain minimum 2 special case letter',
  })
  @Matches(/^(?=.*[0-9].*[0-9]).{2,}$/m, {
    message: 'password must contain minimum 2 digits',
  })
  @Matches(/^(?=.*[a-z].*[a-z]).{2,}$/m, {
    message: 'password must contain minimum 2 lowercase letters',
  })
  password: string;
}
