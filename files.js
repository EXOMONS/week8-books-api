const fs = require("fs");

// Part 1.1: Create one book object and save it to a file.
const oneBook = {
  id: 1,
  title: "The Little Prince",
  author: "Antoine de Saint-Exupery",
  genre: "Fantasy"
};

fs.writeFileSync("book.json", JSON.stringify(oneBook, null, 2));

// Part 1.2: Read the file and display the book in one readable line.
const savedBook = JSON.parse(fs.readFileSync("book.json", "utf8"));
console.log("One book:", `${savedBook.id} - "${savedBook.title}" by ${savedBook.author} (${savedBook.genre})`);

// Part 1.3: Create at least 6 books and save them to a file.
const books = [
  { id: 1, title: "The Little Prince", author: "Antoine de Saint-Exupery", genre: "Fantasy" },
  { id: 2, title: "Things Fall Apart", author: "Chinua Achebe", genre: "Fiction" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", genre: "Technology" },
  { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { id: 5, title: "Atomic Habits", author: "James Clear", genre: "Self-help" },
  { id: 6, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" }
];

fs.writeFileSync("books.json", JSON.stringify(books, null, 2));

// Part 1.4: Read the array file, show count, and display each book on its own line.
const savedBooks = JSON.parse(fs.readFileSync("books.json", "utf8"));
console.log(`\nTotal books: ${savedBooks.length}`);
savedBooks.forEach(book => {
  console.log(`${book.id} - "${book.title}" by ${book.author} (${book.genre})`);
});
