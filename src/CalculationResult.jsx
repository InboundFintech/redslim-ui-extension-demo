import React from 'react';

export default function CalculationResult({ result }) {
  if (!result) {
    return null;
  }

  const { price, deliverables } = result;

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '20px auto',
        padding: 10,
        border: '1px solid #ccc',
      }}
    >
      <h3>Proposal Summary</h3>
      <p>
        <strong>Price:</strong> ${price.toFixed(2)}
      </p>
      <p>
        <strong>Deliverables:</strong>
      </p>
      <ul>
        {deliverables.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
