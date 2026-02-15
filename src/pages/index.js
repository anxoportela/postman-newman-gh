import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Rick and Morty API Test Suite">
      <div style={{padding: '2rem', textAlign: 'center'}}>
        <h1>Rick and Morty API Test Suite</h1>
        <p>Comprehensive API testing with Postman and Newman</p>
        
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem'}}>
          <Link className="button button--primary" to="/docs/">
            API Docs
          </Link>
          <Link className="button button--secondary" to="/test-results">
            Test Results
          </Link>
          <Link className="button button--secondary" to="/setup">
            Setup
          </Link>
        </div>

        <h2 style={{marginTop: '3rem'}}>Test Coverage</h2>
        <table style={{margin: '0 auto', textAlign: 'left'}}>
          <tbody>
            <tr><td>Characters</td><td>30 tests</td></tr>
            <tr><td>Locations</td><td>18 tests</td></tr>
            <tr><td>Episodes</td><td>24 tests</td></tr>
            <tr><td>Error Handling</td><td>10 tests</td></tr>
            <tr><td>Performance</td><td>8 tests</td></tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
