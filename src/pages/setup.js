import React from 'react';
import Layout from '@theme/Layout';

export default function Setup() {
  return (
    <Layout title="Setup">
      <div className="container" style={{padding: '2rem'}}>
        <h1>Setup Guide</h1>
        <h2>Prerequisites</h2>
        <ul>
          <li>Node.js 18+</li>
          <li>npm or yarn</li>
          <li>Docker (optional)</li>
        </ul>
        <h2>Local Installation</h2>
        <pre><code>npm install --legacy-peer-deps
npm test</code></pre>
        <h2>Docker</h2>
        <pre><code>make docker-build
make docker-test</code></pre>
        <h2>Commands</h2>
        <ul>
          <li><code>npm install</code> - Install dependencies</li>
          <li><code>npm test</code> - Run Newman tests</li>
          <li><code>make docker-test</code> - Run tests in Docker</li>
        </ul>
      </div>
    </Layout>
  );
}
