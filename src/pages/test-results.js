import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function TestResults() {
  return (
    <Layout title="Test Results">
      <div className="container" style={{padding: '2rem'}}>
        <h1>Test Results</h1>
        
        <h2>Summary</h2>
        <table>
          <tbody>
            <tr><td>Total Assertions</td><td>90</td></tr>
            <tr><td>Failed</td><td>0</td></tr>
            <tr><td>Passed</td><td>90</td></tr>
            <tr><td>Requests</td><td>15</td></tr>
          </tbody>
        </table>

        <h2>Test Categories</h2>
        <ul>
          <li><strong>Characters</strong> - 30 assertions</li>
          <li><strong>Locations</strong> - 18 assertions</li>
          <li><strong>Episodes</strong> - 24 assertions</li>
          <li><strong>Error Handling</strong> - 10 assertions</li>
          <li><strong>Performance</strong> - 8 assertions</li>
        </ul>

        <h2>View Full Report</h2>
        <p>The complete HTML report is generated after running tests.</p>
        <Link className="button button--primary" to="/docs/newman-report.html">
          View Newman Report
        </Link>
      </div>
    </Layout>
  );
}
