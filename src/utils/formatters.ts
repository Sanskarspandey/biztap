/**
 * Formats a number as Indian Rupee (INR) currency representation
 */
export function formatINR(amount: number | string): string {
  if (typeof amount === 'string') {
    if (amount.toLowerCase().includes('custom') || isNaN(Number(amount.replace(/[^0-9]/g, '')))) {
      return amount;
    }
    amount = Number(amount.replace(/[^0-9]/g, ''));
  }

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
