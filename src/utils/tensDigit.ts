export default function tensDigit(num: number) {
    const formatDigits = num < 10 ? '0' + num : '' + num;
    return formatDigits;
  }