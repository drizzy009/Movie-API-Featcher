import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchResults from "../../components/SearchResults/SearchResults";
import { searchMovies } from "../../services/api";
import { handleApiError } from "../../utils/errorHandler";

const SearchResultsPage = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await searchMovies(query);
        if (results.length === 0) {
          // Display the error in an alert box
          alert("Movie not found.");
        } else {
          setSearchResults(results);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        const errorMessage = handleApiError(error);
        alert(errorMessage); // Display the error in an alert box
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      {searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} />
      )}
    </div>
  );
};

export default SearchResultsPage;
