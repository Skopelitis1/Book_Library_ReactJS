import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

interface Book {
  isbn: string | number;
  name: string;
  author: string;
  genre: string;
  rating: number;
  local_img_isbn: string;
}

const BookGrid: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = new URLSearchParams(window.location.search);
  const endpoint = searchParams.get("endpoint") || "/";

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000${endpoint}`)
      .then((res) => res.json())
      .then((data: Book[]) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [endpoint]);

  if (loading) return <p>Loading books...</p>;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {books.map((book) => (
        <div key={book.isbn}>
          <BookCard
            isbn={book.isbn}
            name={book.name}
            author={book.author}
            genre={book.genre}
            rating={book.rating}
            local_img_isbn={book.local_img_isbn}
          />
        </div>
      ))}
    </div>
  );
};

export default BookGrid;
