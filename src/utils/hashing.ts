import argon from 'argon2';

class Hashing {
  async compare(plain: string, hash: string) {
    const match = await argon.verify(hash, plain);
    return match;
  }

  async hash(plain: string) {
    const hash = await argon.hash(plain);
    return hash;
  }
}

export const hashing = new Hashing();
