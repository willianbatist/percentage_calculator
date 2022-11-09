import { removeChangeButtonClass } from '../hooks/buttons';

export function percentageCalculation(e, number, percentageValue, setState, setObj) {
  const value = e.target.value;
  if (value === 'Aumentar') {
    let sum = (Number(number) * Number(percentageValue)/100) + Number(number);
    let sumResult = Number(sum) - Number(number);
    setState(sum);
    setObj({ status: 'Aumento de',  sumResult });
  }
  if (value === 'Diminuir') {
    let sum = Number(number) - (Number(number) * Number(percentageValue)/100);
    let sumResult = Number(number) - Number(sum);
    setState(sum);
    setObj({ status: 'Subtraiu',  sumResult });
  }
  removeChangeButtonClass()
}