import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookGrid from "./components/BookGrid";
import BookDetails from "./components/BookDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<BookGrid />} />
          <Route path="/details/:isbn" element={<BookDetails />} />
        </Routes>
      </main>
      <Footer totalBooks={10} />
    </Router>
  );
};

export default App;
