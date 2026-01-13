import mysql, { type Connection } from 'mysql2/promise'

export async function withDatabase<T>(
  callback: (db: Connection) => Promise<T>
): Promise<T> {
  let db: Connection | null = null

  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST as string,
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
    })

    // Initialize the database if needed
    await initializeDatabase(db)

    return await callback(db)
  } catch (error) {
    console.error('DB ERROR: ', error)
    throw error
  } finally {
    // Ensure the connection is always closed
    if (db) {
      await db.end()
    }
  }
}

async function initializeDatabase(db: Connection) {
  // users
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      balance INT NOT NULL DEFAULT 100,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // email verification tokens
  await db.execute(`
    CREATE TABLE IF NOT EXISTS verification_tokens (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      token VARCHAR(255) NOT NULL,
      expires_at DATETIME NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `)

  // predictions
  await db.execute(`
    CREATE TABLE IF NOT EXISTS predictions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      lottery_numbers JSON NOT NULL,
      plan VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `)
}