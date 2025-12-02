import React, { useState } from 'react';
import Calculator from './components/Calculator';
import NetworkScanner from './components/NetworkScanner'; // Mock scanner
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('calculator'); // Start with the calculator

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Multi-Function Web App</h1>
        <nav>
          <button onClick={() => setActiveTab('calculator')}>Calculator</button>
          <button onClick={() => setActiveTab('networkScanner')}>Network Scanner</button>
          {/* Add more tabs/buttons here for other functionalities */}
        </nav>
      </header>

      <main className="app-main">
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'networkScanner' && <NetworkScanner />}
        {/* Render other components based on the activeTab state */}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 My Awesome App</p>
      </footer>
    </div>
  );
}

export default App;
