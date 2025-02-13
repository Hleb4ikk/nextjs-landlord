import bcrypt from 'bcrypt';

export const encode_password = (password: string) => bcrypt.hash(password, 10);
export const compare_hash_and_password = (password: string, hashed_password: string) =>
  bcrypt.compare(password, hashed_password);
