/*

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

* receitas: []
* despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família estiver com saldo positivo ou negativo, seguido do valor do saldo.

*/

const cashFlow = {
  incomes: [20.5, 20, 40],
  expenses: [100, 5, 10]
};

const calculateBalance = (obj) => {
  const totalIncome = obj.incomes.reduce((total, num) => total + num, 0);
  const totalExpense = obj.expenses.reduce((total, num) => total + num, 0);
  const balance = (totalIncome - totalExpense).toFixed(2);

  if (balance >= 0) {
    return `Saldo positivo: R$ ${balance}`;
  } else {
    return `Saldo negativo: R$ ${balance}`;
  };
};


console.log(calculateBalance(cashFlow))

