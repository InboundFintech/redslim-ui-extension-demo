export function calculateProposal({ dataVolume, serviceLevel, duration }) {
  return new Promise((resolve) => {
    let basePricePerGB = 5;
    if (serviceLevel === 'premium') basePricePerGB = 8;
    else if (serviceLevel === 'enterprise') basePricePerGB = 12;

    const price = dataVolume * basePricePerGB * duration;

    const deliverables = [
      `${dataVolume} GB of data storage`,
      `${serviceLevel} support package`,
      `${duration} month(s) subscription`,
    ];

    setTimeout(() => {
      resolve({ price, deliverables });
    }, 300); // simulate latency
  });
}
