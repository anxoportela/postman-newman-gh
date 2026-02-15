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

  // Get executions
  const executions = run.executions || [];
  
  // Calculate stats from executions
  let totalAssertions = 0;
  let passedAssertions = 0;
  let failedAssertions = 0;
  
  executions.forEach(exec => {
    const assertions = exec.assertions || [];
    totalAssertions += assertions.length;
    assertions.forEach(a => {
      if (a.error) {
        failedAssertions++;
      } else {
        passedAssertions++;
      }
    });
  });

  const passRate = totalAssertions > 0 ? ((passedAssertions / totalAssertions) * 100).toFixed(1) : 0;

  return (
    <Layout title="Test Results">
      <div className="container" style={{padding: '2rem'}}>
        <h1>📊 Test Results</h1>
        
        {/* Summary Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
          <div className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
            <h3>Total Assertions</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', margin: 0}}>{totalAssertions}</p>
          </div>
          <div className="card card--success" style={{padding: '1.5rem', textAlign: 'center'}}>
            <h3>✅ Passed</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'var(--ifm-color-success)'}}>{passedAssertions}</p>
          </div>
          <div className="card card--danger" style={{padding: '1.5rem', textAlign: 'center'}}>
            <h3>❌ Failed</h3>
            <p style={{fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'var(--ifm-color-danger)'}}>{failedAssertions}</p>
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
              <tr><td>Total Requests</td><td>{executions.length}</td></tr>
              <tr><td>Test Suites</td><td>{run.stats?.testSuites?.total || executions.length}</td></tr>
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
                  const assertions = exec.assertions || [];
                  const assertionCount = assertions.length;
                  const passedCount = assertions.filter(a => !a.error).length;
                  
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{name}</td>
                      <td>
                        {statusOk ? (
                          <span style={{color: 'var(--ifm-color-success)'}}>✅ {status}</span>
                        ) : (
                          <span style={{color: 'var(--ifm-color-warning)'}}>⚠️ {status}</span>
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
