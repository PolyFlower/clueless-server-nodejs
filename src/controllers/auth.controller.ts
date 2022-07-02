import { BadRequestException } from '@common/exceptions/bad-request.exception';
import { User } from '@entities/user.entity';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    const userRepo = getRepository(User);
    const { username, password } = req.body;
    const foundUser = await userRepo.findOne({ where: { username } });
    if (!foundUser) {
      return next(new BadRequestException('Username not found'));
    }
    if (foundUser.password !== password) {
      return next(new BadRequestException('Password is incorrect'));
    }
    res.send('Logged in');
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const userRepo = getRepository(User);
    const { username, password } = req.body;
    const foundUser = await userRepo.findOne({ where: { username } });
    if (foundUser) {
      return next(new BadRequestException('Username already taken'));
    }
    const entity = userRepo.create({
      username: username,
      password: password,
    });
    const newUser = await userRepo.save(entity);
    res.json(newUser);
  }
}

export const authController = new AuthController();