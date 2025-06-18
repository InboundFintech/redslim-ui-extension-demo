import React, { useState } from 'react';

export default function ProposalForm({ onCalculate }) {
  const [dataVolume, setDataVolume] = useState('');
  const [serviceLevel, setServiceLevel] = useState('basic');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (optional)
    if (!dataVolume || !duration) {
      alert('Please fill in all required fields.');
      return;
    }

    onCalculate({
      dataVolume: Number(dataVolume),
      serviceLevel,
      duration: Number(duration),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="proposal-form">
      <h2>Create Proposal</h2>

      <label>
        Data Volume (GB):
        <br />
        <input
          type="number"
          value={dataVolume}
          onChange={(e) => setDataVolume(e.target.value)}
          min="1"
          required
        />
      </label>

      <br />
      <br />

      <label>
        Service Level:
        <br />
        <select
          value={serviceLevel}
          onChange={(e) => setServiceLevel(e.target.value)}
        >
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="enterprise">Enterprise</option>
        </select>
      </label>

      <br />
      <br />

      <label>
        Duration (months):
        <br />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          min="1"
          required
        />
      </label>

      <br />
      <br />

      <button type="submit">Calculate Proposal</button>
    </form>
  );
}
