
export const useNumberFormat = (number: number, options = {}) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0, // Setting minimum fraction digits to 0
    maximumFractionDigits: 0, // Setting maximum fraction digits to 0
    ...options
  }).format(number);
};
