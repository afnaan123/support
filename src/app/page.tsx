"use client"
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Root CA Setup Instructions</title>
        <meta
          name="description"
          content="Follow these instructions to install the Root CA on your device."
        />
      </Head>
      <main>
        <h1>Root CA Setup Instructions</h1>
        <p>
          Welcome! Use the command below that corresponds to your operating system.
          This will automatically install the Root CA certificate.
        </p>

        <section>
          <h2>Ubuntu</h2>
          <p>Open your terminal and run:</p>
          <pre>
            <code>
              curl -fsSL http://baseer-ai.leejam.local/scripts/install-ca-ubuntu.sh | sudo bash
            </code>
          </pre>
        </section>

        <section>
          <h2>Windows</h2>
          <p>
            Open <strong>PowerShell as Administrator</strong> and run:
          </p>
          <pre>
            <code>
              iwr -useb http://baseer-ai.leejam.local/scripts/install-ca.ps1 | iex
            </code>
          </pre>
        </section>

        <section>
          <h2>macOS</h2>
          <p>
            For macOS users, open your Terminal and run the command (same as Ubuntu):
          </p>
          <pre>
            <code>
              curl -fsSL http://baseer-ai.leejam.local/scripts/install-ca-ubuntu.sh | sudo bash
            </code>
          </pre>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Baseer-Leejam-Support</p>
      </footer>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9f9f9;
          color: #333;
        }
        main {
          background: #fff;
          padding: 30px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        h1 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
        }
        h2 {
          color: #34495e;
          margin-top: 30px;
          margin-bottom: 10px;
        }
        p {
          line-height: 1.6;
          font-size: 1.1rem;
        }
        pre {
          background: #ecf0f1;
          padding: 15px;
          border-radius: 5px;
          overflow-x: auto;
          font-size: 1rem;
          margin: 10px 0;
        }
        code {
          font-family: 'Courier New', Courier, monospace;
          color: #e74c3c;
        }
        footer {
          text-align: center;
          margin-top: 40px;
          padding: 20px;
          font-size: 0.9rem;
          color: #777;
        }
      `}</style>
    </div>
  );
}
