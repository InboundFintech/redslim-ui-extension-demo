import React, { useState } from 'react';
import ProposalForm from './ProposalForm';
import CalculationResult from './CalculationResult';
import './App.css';
import { calculateProposal } from './services/calculateProposal';

function App() {
  const [proposal, setProposal] = useState(null);

  const handleCalculate = (inputData) => {
    calculateProposal(inputData).then(setProposal);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Redslim Proposal Builder</h1>
      <ProposalForm onCalculate={handleCalculate} />
      <CalculationResult result={proposal} />
    </div>
  );
}

export default App;
