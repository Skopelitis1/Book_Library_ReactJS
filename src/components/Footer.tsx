interface FooterProps {
  totalBooks?: number;
}

const Footer: React.FC<FooterProps> = ({ totalBooks = 0 }) => {
  return (
    <footer className="bg-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5 className="mb-3">About</h5>
            <p className="mb-1">My personal journey through literature.</p>
            <p className="mb-0">Total books showcased: {totalBooks}</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="mb-3">Contact</h5>
            <p className="mb-2">
              <a
                href="mailto:stavroskope@gmail.com"
                className="text-decoration-none"
              >
                stavroskope@gmail.com
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-1">
              © {new Date().getFullYear()} Stavro's Book Showcase. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
