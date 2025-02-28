// filepath: /d:/GUI_Project/BudgetLense/expense-tracker/src/db.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma as db };