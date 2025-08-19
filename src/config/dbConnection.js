import { PrismaClient } from '../../prisma/generated/prisma/index.js';

export const prisma = new PrismaClient()

// export async function dbConnection() {
//   try {
//     await prisma.$connect()
//     console.log('Database connected successfully')
//   } catch (error) {
//     console.error('Database connection failed:', error)
//     throw error
//   }
// }

// dbConnection()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

export const connectWithRetry = async () => {
  let connected = false;
  let retries = 5;

  while (!connected && retries > 0) {
    try {
      await prisma.$connect();
      console.log('Database connected successfully');
      connected = true;
    } catch (error) {
      console.error('Database connection failed, retrying in 5 seconds...', error);
      retries--;
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }

  if (!connected) {
    console.error('Could not connect to database after multiple retries');
    process.exit(1);
  }
};