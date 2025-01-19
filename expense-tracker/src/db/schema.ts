import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const Budget = pgTable('budgets', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar('name').notNull(),
  amount: varchar('amount').notNull(),
  icon: varchar('icon').notNull(),
  createdBy: varchar('createdBy').notNull()
});

