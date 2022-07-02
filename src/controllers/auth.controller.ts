import { BadRequestException } from '@common/exceptions/bad-request.exception';
import { User } from '@entities/user.entity';
import { hashing } from '@utils/hashing';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    const userRepo = getRepository(User);
    const { username, password } = req.body;
    const foundUser = await userRepo.findOne({ where: { username } });
    if (!foundUser) {
      return next(new BadRequestException('Username not found'));
    }
    hashing.compare(password, foundUser.password).then(match => {
      if (!match) {
        return next(new BadRequestException('Password is incorrect'));
      }
      const payload = { id: foundUser.id, username: foundUser.username };
      const token = jwt.sign(payload, process.env['JWT_SECRET']!, {
        expiresIn: process.env['JWT_EXPIRY'],
      });
      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000,
      });
      return res.status(200).send('Logged in succesfully');
    });
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
    entity.password = await hashing.hash(password);
    const newUser = await userRepo.save(entity);
    return res.json(newUser);
  }
}

export const authController = new AuthController();
