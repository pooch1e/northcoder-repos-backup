import {db}  from './db.ts';
import format from 'pg-format';

interface Country {
  name: string;
  flag_url: string;
  capital: string;
  currency: string;
  language: string;
}

export const seed = async ({ countries }: { countries: Country[] }) => {
  try {
    // Drop table if exists
    await db.query(`DROP TABLE IF EXISTS countries`);

    // Create table
    await db.query(`
      CREATE TABLE IF NOT EXISTS countries (
        country_id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(400),
        flag_url VARCHAR(400),
        capital VARCHAR(1000),
        currency VARCHAR(400),
        language VARCHAR(400)
      )
    `);

    
    const formattedCountries = countries.map(({ name, flag_url, capital, currency, language }) => [
      name,
      flag_url,
      capital,
      currency,
      language,
    ]);

    const sqlFormattedCountries = format(
      `INSERT INTO countries (name, flag_url, capital, currency, language) VALUES %L`,
      formattedCountries
    );

    await db.query(sqlFormattedCountries);
  } catch (err) {
    console.error('Seeding error:', err);
  }
};
