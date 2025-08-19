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
  const maxRetries = 10;
  let retryCount = 0;
  
  while (retryCount < maxRetries) {
    try {
      await prisma.$connect();
      console.log('Database connected successfully');
      
      // Test if the replica set has a primary
      await prisma.$runCommandRaw({ isMaster: 1 });
      console.log('Replica set has a primary');
      
      return;
    } catch (error) {
      retryCount++;
      console.error(`Database connection failed (attempt ${retryCount}/${maxRetries}):`, error.message);
      
      if (retryCount === maxRetries) {
        console.error('Could not connect to database after maximum retries');
        throw error;
      }
      
      // Wait before retrying (exponential backoff)
      const delay = Math.pow(2, retryCount) * 1000;
      console.log(`Retrying in ${delay/1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};