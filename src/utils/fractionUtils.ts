/**
 * Finds the greatest common divisor (GCD) of two numbers
 */
const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

/**
 * Converts a decimal number to a fraction string representation
 * @param decimal The decimal number to convert
 * @returns A string with the fraction representation
 */
export const decimalToFraction = (decimal: number): string => {
  // Handle whole numbers
  if (decimal % 1 === 0) {
    return decimal.toString();
  }

  // Handle negative numbers
  const sign = decimal < 0 ? "-" : "";
  const absDecimal = Math.abs(decimal);

  // Extract whole number part
  const wholePart = Math.floor(absDecimal);
  const decimalPart = absDecimal - wholePart;

  if (decimalPart === 0) {
    return `${sign}${wholePart}`;
  }

  // Common cooking fractions mapping
  // This maps decimal values to common cooking fractions
  const commonDecimalToFraction: Record<string, string> = {
    // Thirds
    "0.33": "1/3",
    "0.67": "2/3",
    // Quarters
    "0.25": "1/4",
    "0.5": "1/2",
    "0.75": "3/4",
    // Eighths
    "0.125": "1/8",
    "0.375": "3/8", 
    "0.625": "5/8",
    "0.875": "7/8",
  };

  // Unicode representations for common fractions
  const commonFractions: Record<string, string> = {
    "1/4": "¼",
    "1/2": "½",
    "3/4": "¾",
    "1/3": "⅓",
    "2/3": "⅔",
    "1/8": "⅛",
    "3/8": "⅜",
    "5/8": "⅝",
    "7/8": "⅞",
  };

  // Find the closest common fraction
  // Round to 3 decimal places to handle floating point precision issues
  const roundedDecimal = Math.round(decimalPart * 1000) / 1000;
  const roundedDecimalStr = roundedDecimal.toFixed(3);
  
  // Find the closest match from our common fractions
  let bestMatch = "";
  let minDifference = 1;  // Initialize with the maximum possible difference
  
  for (const [decStr, fracStr] of Object.entries(commonDecimalToFraction)) {
    const dec = parseFloat(decStr);
    const diff = Math.abs(roundedDecimal - dec);
    
    // If this is a closer match than what we've seen so far
    if (diff < minDifference) {
      minDifference = diff;
      bestMatch = fracStr;
    }
  }
  
  // If we found a close enough match (within 0.05)
  if (bestMatch && minDifference <= 0.05) {
    const fractionDisplay = commonFractions[bestMatch] || bestMatch;
    return wholePart ? `${sign}${wholePart} ${fractionDisplay}` : `${sign}${fractionDisplay}`;
  }
  
  // Fallback to a more precise calculation if we don't have a common fraction
  // Use continued fraction expansion for better approximation
  const getApproximateFraction = (decimal: number, maxDenominator = 8) => {
    let bestNumerator = 1;
    let bestDenominator = 1;
    let bestError = Math.abs(decimal - bestNumerator / bestDenominator);
    
    for (let denominator = 1; denominator <= maxDenominator; denominator++) {
      const numerator = Math.round(decimal * denominator);
      const error = Math.abs(decimal - numerator / denominator);
      
      if (error < bestError) {
        bestNumerator = numerator;
        bestDenominator = denominator;
        bestError = error;
      }
    }
    
    return { numerator: bestNumerator, denominator: bestDenominator };
  };
  
  const { numerator, denominator } = getApproximateFraction(decimalPart);
  const fractionPart = `${numerator}/${denominator}`;
  const niceFormat = commonFractions[fractionPart] || fractionPart;
  
  return wholePart ? `${sign}${wholePart} ${niceFormat}` : `${sign}${niceFormat}`;
};

/**
 * Formats a quantity with its unit for display in recipes
 * @param quantity The numerical quantity
 * @param unit Optional unit of measurement
 * @returns Formatted string with fraction display and unit
 */
export const formatQuantity = (quantity: number, unit?: string): string => {
  const fractionDisplay = decimalToFraction(quantity);
  return unit ? `${fractionDisplay} ${unit}` : fractionDisplay;
}; 