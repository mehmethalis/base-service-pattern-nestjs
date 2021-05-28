import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const configureDb = () => {
  return <TypeOrmModuleOptions>{
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'country',
    autoLoadEntities: true,
    synchronize: true,
  };
};