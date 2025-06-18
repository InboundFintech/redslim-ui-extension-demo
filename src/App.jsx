import React, { useState } from 'react';
import ProposalForm from './ProposalForm';
import CalculationResult from './CalculationResult';

function App() {
  const [proposal, setProposal] = useState(null);

  const handleCalculate = ({ dataVolume, serviceLevel, duration }) => {
    // Simple pricing logic:
    let basePricePerGB = 5;
    if (serviceLevel === 'premium') basePricePerGB = 8;
    else if (serviceLevel === 'enterprise') basePricePerGB = 12;

    const price = dataVolume * basePricePerGB * duration;

    // Example deliverables based on input:
    const deliverables = [
      `${dataVolume} GB of data storage`,
      `${serviceLevel} support package`,
      `${duration} month(s) subscription`,
    ];

    setProposal({ price, deliverables });
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
