import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// step-1 : เก็บinput จาก User => React State
// step-2 : handle จังหวะ submit
// step-3 : Make HTTP Request
// step-4 : เอา Data มาแสดงผล เก็บเป็น react State

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzE4ODY3MDQ5OGVjZGExOTE4ZTNlNDMyZDcxMmFkNiIsInN1YiI6IjY0ZjgxODUxZmZjOWRlMDEzOGVhNzVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w0EssouxLFXYPXb7E29Uue9QyggR_1PZkMpI3yJKo_s";

// const API_KEY = "00f833a2d0aba11cb0339ece616ca1ea";

function App() {
  const [keyword, setKeyword] = useState("");
  const [movieLists, setMovieLists] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let url = `${BASE_URL}/search/keyword?query=${keyword}&page=1`;
    let option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    try {
      const response = await fetch(url, option);
      const data = await response.json();
      setMovieLists(data.results);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="App">
      {/* Heder */}
      <div className="header">
        <h1>Movie App</h1>
      </div>

      {/* Input */}

      <form className="search" onSubmit={handleSubmit}>
        <div className="search">
          <input
            type="text"
            placeholder="keyword ?"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">search</button>
        </div>
      </form>

      <div>
        {Array.from(Array(totalPage).keys()).map((n) => (
          <button>{n + 1}</button>
        ))}
      </div>

      {/* Result */}
      <div className="movie-lists">
        {movieLists.map((movie) => (
          <div key={movie.id} className="movie">
            {movie.name}
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
