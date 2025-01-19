import { db } from './index';
import { migrate } from 'drizzle-orm/neon-serverless';

const main = async () => {
    try {
        await migrate(db, {
            migrationsFolder: './src/db/migrations'
        });
    } catch (error) {
        console.error("Migration failed", error);
    }
}

main().then(() => {
    console.log("Migration complete");
    process.exit(0);
}).catch((err) => {
    console.error(err);
    process.exit(1);
});