import { db } from './db.ts';
import { countries } from '../../database/data/test-data/index.js';
import { seed } from './seed.ts';

const runSeed = async () => {
  try {
    await seed({ countries });
  } finally {
    await db.end();
  }
};

runSeed();
