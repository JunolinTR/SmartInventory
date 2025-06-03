import React, { useState } from 'react';
import axios from 'axios';

function AIQuery() {
  const [question, setQuestion] = useState('');
  const [sql, setSql] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSql('');
    setResults([]);
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/ai-query', {
        question,
      });

      setSql(response.data.sql);

      // Now fetch the actual results from your database using generated SQL
      const resultRes = await axios.post('http://localhost:3001/api/execute-query', {
        query: response.data.sql,
      });

      setResults(resultRes.data.rows || []);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Check the server logs.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Ask in Natural Language</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g., Show me all products with price > 500"
          style={{ width: '70%', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Ask
        </button>
      </form>

      {sql && (
        <>
          <h3>Generated SQL</h3>
          <pre>{sql}</pre>
        </>
      )}

      {results.length > 0 && (
        <>
          <h3>Results</h3>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                {Object.keys(results[0]).map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((val, i) => (
                    <td key={i}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AIQuery;
