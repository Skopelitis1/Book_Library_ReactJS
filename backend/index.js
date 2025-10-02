import express from "express";
import pool from "./db.js";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

async function fetchBooks(res, query, params = []) {
  try {
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
}

app.get("/", (req, res) => {
  fetchBooks(res, "SELECT isbn, name, author, rating, genre, local_img_isbn FROM books");
});

app.get("/rating", (req, res) => {
  fetchBooks(res, "SELECT isbn, name, author, rating, genre, local_img_isbn FROM books ORDER BY rating DESC");
});

app.get("/alphabetically", (req, res) => {
  fetchBooks(res, "SELECT isbn, name, author, rating, genre, local_img_isbn FROM books ORDER BY name ASC");
});

app.get("/genre/:genre", (req, res) => {
  fetchBooks(
    res,
    "SELECT isbn, name, author, rating, genre, local_img_isbn FROM books WHERE genre ILIKE $1 ORDER BY rating DESC",
    [req.params.genre]
  );
});


app.get("/search", (req, res) => {
  fetchBooks(
    res,
    "SELECT isbn, name, author, rating, genre, local_img_isbn FROM books WHERE name ILIKE $1 OR author ILIKE $1 ORDER BY rating DESC",
    [`%${req.query.q}%`]
  );
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});



app.get("/book/:isbn", (req, res) => {
  fetchBooks(
    res,
    "SELECT isbn, name, author, rating, genre, local_img_isbn FROM books WHERE isbn = $1",
    [req.params.isbn]
  );
});
