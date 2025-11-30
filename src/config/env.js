import dotenv from 'dotenv';
dotenv.config();

const unsafeSecret = '01deadbeef01';

export const config = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET || unsafeSecret
}

if (!process.env.JWT_SECRET || config.JWT_SECRET === unsafeSecret) {
    console.warn('JWT secret not set.');
}