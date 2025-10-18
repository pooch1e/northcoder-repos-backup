// db seed script
import {Pool} from 'pg';
import type { PoolConfig } from 'pg';
import * as dotenv from 'dotenv'
import * as path from 'path'

const ENV = process.env.NODE_ENV || 'development';
const envPath = path.join(process.cwd(), `.env.${ENV}`);

// Load the appropriate .env file (same as require.dotenv)
dotenv.config({ path: envPath });

console.log(`Using environment: ${ENV}`);
console.log(`Loaded PGDATABASE: ${process.env.PGDATABASE}`);
console.log(`Loaded DATABASE_URL: ${process.env.DATABASE_URL}`);


// Check env variables
if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error(
    'PGDATABASE or DATABASE_URL environment variable must be set'
  );
}

const config: PoolConfig =
  ENV === 'production'
    ? {
        connectionString: process.env.DATABASE_URL,
        max: 2,
      }
    : {};

console.log(ENV)

export const db = new Pool(config);