import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function TestResults() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/postman-newman-gh/docs/newman-report.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        console.log('Newman JSON data:', data);
        setResults(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading results:', err);
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

  // Handle different JSON structures
  const run = results.run || results;
  if (!run) {
    return (
      <Layout title="Test Results">
        <div className="container" style={{padding: '2rem'}}>
          <h1>📊 Test Results</h1>
          <div className="alert alert--warning">
            <p>Invalid data format</p>
          </div>
          <p>View the full report: <Link href="/postman-newman-gh/docs/newman-report.html">Newman HTML Report</Link></p>
        </div>
      </Layout>
    );
  }

  // Get stats safely
  const stats = run.stats || {};
  const assertions = stats.assertions || {};
  const requests = stats.requests || {};
  const tests = stats.tests || {};
  const testSuites = stats.testSuites || {};

  // Calculate pass rate
  const total = assertions.total || 0;
  const passed = assertions.passed || 0;
  const failed = assertions.failed || 0;
  const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : 0;

  // Get executions
  const executions = run.executions || [];

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
            <p style={{fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'var(--ifm-color-success)'}}>{passed}</p>
          </div>
          <div className="card card--danger" style={{padding: '1.5rem', textAlign: 'center'}}>
            <h3>❌ Failed</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'var(--ifm-color-danger)'}}>{failed}</p>
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
              <tr><td>Requests</td><td>{requests.total || 0}</td></tr>
              <tr><td>Test Suites</td><td>{testSuites.total || 0}</td></tr>
              <tr><td>Tests</td><td>{tests.total || 0}</td></tr>
            </tbody>
          </table>
        </div>

        {/* Request Results */}
        <div className="card" style={{padding: '1.5rem'}}>
          <h2>📝 Request Results</h2>
          {executions.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Request</th>
                  <th>Status</th>
                  <th>Assertions</th>
                </tr>
              </thead>
              <tbody>
                {executions.map((exec, i) => {
                  const name = exec.item?.name || exec.name || `Request ${i + 1}`;
                  const status = exec.response?.status || exec.response?.statusCode || 'N/A';
                  const statusOk = status === 200 || status === 'OK' || status === 201;
                  const assertionCount = exec.assertions?.length || 0;
                  const passedCount = exec.assertions?.filter(a => !a.error).length || 0;
                  
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{name}</td>
                      <td>
                        {statusOk ? (
                          <span style={{color: 'var(--ifm-color-success)'}}>✅ {status}</span>
                        ) : (
                          <span style={{color: 'var(--ifm-color-danger)'}}>❌ {status}</span>
                        )}
                      </td>
                      <td>{passedCount}/{assertionCount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>No request data available</p>
          )}
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
