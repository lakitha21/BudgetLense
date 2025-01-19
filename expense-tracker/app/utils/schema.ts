/*import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable, PgTable } from "drizzle-orm/pg-core"; 

    export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
})*/

import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const Budget = pgTable('budgets', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar('name').notNull(),
  amount: varchar('amount').notNull(),
  icon: varchar('icon').notNull(),
  createdBy: varchar('createdBy').notNull()
});