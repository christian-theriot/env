import { config } from 'dotenv';

config();

export function get(key: string): string {
  return `${process.env[key]}`;
}

export default { get };
