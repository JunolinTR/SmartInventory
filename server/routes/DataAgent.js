const express = require('express');
const router = express.Router();
const axios=require("axios")
const db = require('../models');
const sequelize = db.sequelize; 

router.post('/ai-query', async (req, res) => {
  const { question } = req.body;
    const schemaInfo = `
Table: Products
Columns:
- name (STRING, NOT NULL)
- category (STRING)
- stock (INTEGER, NOT NULL)
- price (DOUBLE, NOT NULL)
`;
  const prompt = `You are an expert SQL assistant. 
  Convert the following question into a MySQL SQL query. 
  Provide ONLY the SQL query without any markdown or explanations.${schemaInfo} Question: "${question}"`;


  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'gemma:2b',
      prompt: prompt,
      stream: false,
    },
{
    headers: { 'Content-Type': 'application/json' } 
  }
);

    let sql = response.data.response;
    sql = sql.replace(/```sql\n?/, '').replace(/```$/, '').trim();
    console.log("Generated SQL:", sql); 

    const [results, metadata] = await sequelize.query(sql);

    // 3. Send results to frontend
    res.json({ sql, results });

  } catch (error) {
    console.error("Error:", error.message);
    if (error.response) {
      console.error('Ollama error data:', error.response.data);
    }
    res.status(500).json({ error: 'Failed to generate or execute SQL.' });
  }
});

router.post('/execute-query', async (req, res) => {
  const { query } = req.body;

  try {
    const [results, metadata] = await sequelize.query(query);
    res.json({ rows: results });
  } catch (error) {
    console.error("SQL Execution Error:", error.message);
    res.status(500).json({ error: 'Failed to execute query' });
  }
});



module.exports = router;