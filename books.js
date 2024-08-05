const express = require('express');
const { Pool } = require('pg');

// Initialize Express app (and testing 1/2)
const app = express();
const port = process.env.PORT || 3000;

// Configure PostgreSQL client
const pool = new Pool({
  user: 'moradebaid',
  host: '37.27.44.92', // e.g., 'db.hetzner.example.com'
  database: 'postgres',
  password: 'RAFrafRAF01@3',
  port: 5432,
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Endpoint to get data from table
app.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
