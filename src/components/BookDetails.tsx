import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Book {
  isbn: string | number;
  name: string;
  author: string;
  genre: string;
  rating: number;
  local_img_isbn: string;
}

const BookDetails: React.FC = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/book/${isbn}`)
      .then((res) => res.json())
      .then((data) => setBook(data[0])) // data είναι array με 1 βιβλίο
      .catch((err) => console.error(err));
  }, [isbn]);

  if (!book) return <p>Loading book details...</p>;

  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(book.rating))
      return <i key={i} className="bi bi-star-fill text-warning me-1"></i>;
    else if (i < book.rating)
      return <i key={i} className="bi bi-star-half text-warning me-1"></i>;
    else return <i key={i} className="bi bi-star text-warning me-1"></i>;
  });

  return (
    <div className="container">
      <header className="mb-5">
        <img
          src={`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`} // -L για μεγαλύτερη
          className="img-fluid"
          alt={book.name}
          style={{
            width: "50%",
            height: "auto",

            maxHeight: "500px",
          }}
        />
        <div className="p-4 p-md-5 m-4 rounded text-body-emphasis bg-body-secondary">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-4 fw-bold">{book.name}</h1>
              <p className="lead mb-0">by {book.author}</p>
              <p>{stars}</p>
            </div>
          </div>
        </div>
      </header>

      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Review</h2>
        <hr />
        <p className="lead">
          Opinions still loading... Please wait while brain buffers :)
        </p>
        <h2>Notes</h2>
        <ul>
          <li>
            <blockquote className="blockquote">
              <p>Words of wisdom... once I find them</p>
            </blockquote>
          </li>
          <li>
            <blockquote className="blockquote">
              <p>More words of wisdom... Buffering at 99%</p>
            </blockquote>
          </li>
          <li>
            <blockquote className="blockquote">
              <p>Just pretend there's something deep and meaningful here...</p>
            </blockquote>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default BookDetails;
