export function percentageCalculation(e, number, percentageValue, setState) {
  const value = e.target.value;
  if (value === 'Aumentar') {
    let sum = (Number(number) * Number(percentageValue)/100) + Number(number);
    setState(sum);
  }
  if (value === 'Diminuir') {
    let sum = Number(number) - (Number(number) * Number(percentageValue)/100);
    setState(sum);
  }
}