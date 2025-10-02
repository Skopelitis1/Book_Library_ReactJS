import { Link } from "react-router-dom";

interface BookCardProps {
  isbn: string | number;
  name: string;
  author: string;
  genre: string;
  rating: number;
  local_img_isbn: string;
}

const BookCard: React.FC<BookCardProps> = ({
  isbn,
  name,
  author,
  genre,
  rating,
  local_img_isbn,
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(rating))
      return <i key={i} className="bi bi-star-fill text-warning me-1"></i>;
    else if (i < rating)
      return <i key={i} className="bi bi-star-half text-warning me-1"></i>;
    else return <i key={i} className="bi bi-star text-warning me-1"></i>;
  });

  return (
    <div className="col">
      <div className="card h-100 d-flex flex-column">
        <img
          src={
            isbn && isbn !== -1
              ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
              : `/assets/images/${local_img_isbn}.jpg`
          }
          className="card-img-top flex-grow-1"
          alt={name}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <div className="flex-grow-0">
            <p className="card-text">
              <small className="text-muted">{genre}</small>
            </p>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">By {author}</p>
            <p>{stars}</p>
          </div>
          <Link to={`/details/${isbn}`} className="btn btn-primary mt-auto">
            Read My Take
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
