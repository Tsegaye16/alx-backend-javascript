const updateUniqueItems = (results) => {
  if (!(results instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of results.entries()) {
    if (value === 1) {
      results.set(key, 100);
    }
  }
  return results;
};

export default updateUniqueItems;
