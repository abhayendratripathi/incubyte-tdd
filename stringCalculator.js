class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const customDelimiterMatch = numbers.match(/^\/\/(\[.*?\])+\n/);
      if (customDelimiterMatch) {
        delimiter = new RegExp(
          customDelimiterMatch[1]
            .replace(/\[|\]/g, '')
            .split('][')
            .map(d => d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
            .join('|')
        );
        numbers = numbers.slice(customDelimiterMatch[0].length);
      } else {
        delimiter = numbers[2];
        numbers = numbers.substring(4);
      }
    }

    const numArray = numbers.split(delimiter).map(Number);

    const negatives = numArray.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
