const express = require("express");
const app = express();
const PORT = 3000;

// The server reads its books from an array in this code.
const books = [
  { id: 1, title: "The Little Prince", author: "Antoine de Saint-Exupery", genre: "Fantasy" },
  { id: 2, title: "Things Fall Apart", author: "Chinua Achebe", genre: "Fiction" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", genre: "Technology" },
  { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { id: 5, title: "Atomic Habits", author: "James Clear", genre: "Self-help" },
  { id: 6, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" }
];

// GET / : welcome message
app.get("/", (req, res) => {
  res.type("text").send("Welcome to the Books API");
});

// IMPORTANT: Put /books/count before /books/:id,
// otherwise Express may treat "count" as an ID.
app.get("/books/count", (req, res) => {
  res.json({ count: books.length });
});

// GET /books : all books, or books filtered by genre (e.g. ?genre=Fantasy)
app.get("/books", (req, res) => {
  const { genre } = req.query;

  if (genre) {
    const filteredBooks = books.filter(
      book => book.genre.toLowerCase() === String(genre).toLowerCase()
    );
    return res.json(filteredBooks);
  }

  res.json(books);
});

// GET /books/:id : one matching book, or 404 if not found
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
});

app.listen(PORT, () => {
  console.log(`Books API running at http://localhost:${PORT}`);
});
