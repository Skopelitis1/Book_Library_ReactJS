const Header: React.FC = () => {
  return (
    <header className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <i className="bi bi-book-half fs-2 text-danger me-2"></i>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <span className="nav-link text-secondary">Sort by:</span>
            </li>
            <li className="nav-item">
              <a
                href="/?endpoint=/rating"
                className="nav-link link-body-emphasis"
              >
                Rating
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/?endpoint=/alphabetically"
                className="nav-link link-body-emphasis"
              >
                Title (A-Z)
              </a>
            </li>
            <li className="dropdown text-end nav-link px-2 link-body-emphasis">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle header_pop"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genre
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/?endpoint=/genre/fiction" className="dropdown-item">
                    Fiction
                  </a>
                </li>
                <li>
                  <a
                    href="/?endpoint=/genre/nonfiction"
                    className="dropdown-item"
                  >
                    Non-Fiction
                  </a>
                </li>
                <li>
                  <a
                    href="/?endpoint=/genre/autobiography"
                    className="dropdown-item"
                  >
                    Autobiography
                  </a>
                </li>
                <li>
                  <a
                    href="/?endpoint=/genre/selfhelp"
                    className="dropdown-item"
                  >
                    Self-help
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 header_pop d-flex"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = (
                e.currentTarget.elements.namedItem("search") as HTMLInputElement
              )?.value;
              if (input) window.location.href = `/?endpoint=/search?q=${input}`;
            }}
          >
            <div className="input-group">
              <input
                type="search"
                name="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
