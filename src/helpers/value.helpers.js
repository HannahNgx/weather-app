export const getFixedValue = (newValue, currentValue) => {
  return !!newValue ? newValue.toFixed(2) : currentValue;
};
