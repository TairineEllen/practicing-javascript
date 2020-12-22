/*

Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A, B e C.

* de 90 para cima - A
* entre 80 e 89 - B
* entre 70 e 79 - C
* entre 60 e 69 - D
* menor que 60 - F

*/

const convertGrades = (grade) => {
  if (grade >= 90 && grade <= 100 ) {
    return 'Nota A';
  } else if (grade >= 80 && grade < 90) {
    return 'Nota B';
  } else if (grade >= 70 && grade < 80) {
    return 'Nota C';
  } else if (grade >= 60 && grade < 70) {
    return 'Nota D';
  } else if (grade >= 0 && grade < 60) {
    return 'Nota F'
  } else {
    return 'Nota inválida'
  };
};

console.log(convertGrades(102));
