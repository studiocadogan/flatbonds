export function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min)) + min;
}

export function randomStatus() {
  const statuses = [
    'Creating',
    'Pending Tenant Action',
    'Active',
    'Charge Negotiation Active',
    'Closed'

  ];

  return statuses[Math.floor(Math.random() * statuses.length)];
}
