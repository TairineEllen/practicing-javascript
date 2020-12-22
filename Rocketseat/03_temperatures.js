/*
 
Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

C = (F - 32) * 5 / 9

F = C * 9 / 5 + 32

*/

const convertTemperature = (temperature) => {
  if (temperature.toUpperCase().includes('C')) {
    const C = Number(temperature.split('°')[0]);
    const F = C * 9 / 5 + 32;
    return `A temperatura ${temperature} em Fahrenheit é ${F.toFixed(2)} °F`;
  } else if (temperature.toUpperCase().includes('F')) {
    const F = Number(temperature.split('°')[0]);
    const C = (F - 32) * 5 / 9;
    return `A temperatura ${temperature} em Celsius é ${C.toFixed(2)} °C`;
  } else {
    return 'Temperatura não identificada';
  };  
 };

 console.log(convertTemperature('-100 °c'))