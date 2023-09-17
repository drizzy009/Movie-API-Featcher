import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} index /> {/* Display HomePage only on the root URL */}
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/search/:query" element={<SearchResultsPage />} />
    </Routes>
  );
}

export default App;
