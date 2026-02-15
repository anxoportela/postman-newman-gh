import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function TestResults() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/postman-newman-gh/docs/newman-report.json')
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Layout title="Test Results">
        <div className="container" style={{padding: '2rem', textAlign: 'center'}}>
          <h1>📊 Test Results</h1>
          <p>Loading test results...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Test Results">
        <div className="container" style={{padding: '2rem'}}>
          <h1>📊 Test Results</h1>
          <div className="alert alert--warning">
            <p>Could not load test results: {error}</p>
          </div>
          <p>View the full report: <Link href="/postman-newman-gh/docs/newman-report.html">Newman HTML Report</Link></p>
        </div>
      </Layout>
    );
  }

  const run = results.run;
  const stats = run.stats;
  const executions = run.executions || [];

  // Calculate pass rate
  const total = stats.assertions.total;
  const passed = stats.assertions.passed;
  const failed = stats.assertions.failed;
  const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : 0;

  return (
    <Layout title="Test Results">
      <div className="container" style={{padding: '2rem'}}>
        <h1>📊 Test Results</h1>
        
        {/* Summary Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
          <div className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
            <h3>Total Assertions</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', margin: 0}}>{total}</p>
          </div>
          <div className="card card--success" style={{padding: '1.5rem', textAlign: 'center'}}>
            <h3>✅ Passed</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'green'}}>{passed}</p>
          </div>
          <div className="card card--danger" style={{padding: '1.5rem', textAlign: 'center'}}>
            <h3>❌ Failed</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'red'}}>{failed}</p>
          </div>
          <div className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
            <h3>📈 Pass Rate</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', margin: 0}}>{passRate}%</p>
          </div>
        </div>

        {/* Timing Info */}
        <div className="card" style={{padding: '1.5rem', marginBottom: '2rem'}}>
          <h2>⏱️ Timing</h2>
          <table>
            <tbody>
              <tr><td>Total Duration</td><td>{stats.tests.total > 0 ? (run.timing?.started || 0) + 'ms' : 'N/A'}</td></tr>
              <tr><td>Requests</td><td>{stats.requests.total}</td></tr>
              <tr><td>Test Suites</td><td>{stats.testSuites.total}</td></tr>
              <tr><td>Test Scripts</td><td>{stats.tests.total}</td></tr>
            </tbody>
          </table>
        </div>

        {/* Failed Tests */}
        {failed > 0 && (
          <div className="card card--danger" style={{padding: '1.5rem', marginBottom: '2rem'}}>
            <h2>❌ Failed Tests</h2>
            {executions.filter(e => e.assertions?.some(a => !a.error)).length > 0 && (
              <ul>
                {executions.map((exec, i) => (
                  exec.assertions?.filter(a => a.error).map((assertion, j) => (
                    <li key={`${i}-${j}`} style={{marginBottom: '0.5rem'}}>
                      <strong>{exec.item?.name || 'Unknown'}</strong>: {assertion.assertion}
                    </li>
                  ))
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Request Results */}
        <div className="card" style={{padding: '1.5rem'}}>
          <h2>📝 Request Results</h2>
          <table>
            <thead>
              <tr>
                <th>Request</th>
                <th>Status</th>
                <th>Assertions</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {executions.map((exec, i) => (
                <tr key={i}>
                  <td>{exec.item?.name || 'Unknown'}</td>
                  <td>
                    {exec.response?.status === 'OK' || exec.response?.statusCode === 200 ? (
                      <span style={{color: 'green'}}>✅ OK</span>
                    ) : (
                      <span style={{color: 'red'}}>❌ {exec.response?.status || 'Error'}</span>
                    )}
                  </td>
                  <td>
                    {exec.assertions?.filter(a => !a.error).length}/{exec.assertions?.length || 0}
                  </td>
                  <td>{exec.response?.responseTime ? `${exec.response.responseTime}ms` : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Full Report Link */}
        <div style={{marginTop: '2rem', textAlign: 'center'}}>
          <Link className="button button--primary button--lg" href="/postman-newman-gh/docs/newman-report.html">
            📄 View Full HTML Report
          </Link>
        </div>
      </div>
    </Layout>
  );
}
