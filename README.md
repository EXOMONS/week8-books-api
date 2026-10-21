# Week 8 Assignment: Books

## Requirements
- Node.js installed
- Internet connection for the first Express installation

## Run Part 1 (file handling)
In this folder's terminal, run:
```bash
npm run files
```
This creates `book.json` and `books.json`, reads them back, and prints the results.

## Run Part 2 (Express server)
Install dependencies once:
```bash
npm install
```
Start the server:
```bash
npm start
```
Keep the terminal open while testing in your browser.

## Test these URLs
- http://localhost:3000/ — welcome message
- http://localhost:3000/books — all six books as JSON
- http://localhost:3000/books/1 — one book
- http://localhost:3000/books/999 — 404 JSON error
- http://localhost:3000/books?genre=Fantasy — filter by genre
- http://localhost:3000/books?genre=NoSuchGenre — empty array `[]`
- http://localhost:3000/books/count — count JSON

The `/books/count` route is intentionally placed before `/books/:id`.
