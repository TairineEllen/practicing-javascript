/*

Baseador no array de livros abaixo, faça os seguintes desafios:

1. Contar o número de categorias e o número de livros em cada categoria
2. Contar o número de autores
3. Mostrar os livros do autor Augusto Cury
4.Transformar a função acima em uma que irá receber o nome do autor e devolver os livros dele

 */

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os  hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
];

// Desafio 1

const totalCategories = booksByCategory.length;
console.log(`${totalCategories} categorias de livros`)

for (let category of booksByCategory) {
  const totalBooks = category.books.length
  console.log(`A categoria ${category.category} tem ${totalBooks} livros`);
};

// Desafio 2

const countAuthors = (obj) => {
  let authors = [];
  for (let category of obj) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      };
    };
  }
  return console.log(`Total de autores: ${authors.length}`);
};

countAuthors(booksByCategory);

// Desafio 3

const booksOfAugustoCury = (obj) => {
  let books = [];
  for (let category of obj) {
    for (let book of category.books) {
      if (book.author == 'Augusto Cury') {
        books.push(book.title);
      };
    };
  }
  return console.log(`Livros de Augusto Cury: ${books.join(', ')}`);
};

// Desafio 4

const booksOfAuthor = (obj, author) => {
  let books = [];
  for (let category of obj) {
    for (let book of category.books) {
      if (book.author == author) {
        books.push(book.title);
      };
    };
  }
  return console.log(`Livros de ${author}: ${books.join(', ')}`);
};

booksOfAuthor(booksByCategory, 'Augusto Cury');
