import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories({ setData }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
         console.log(data)
        setCategories(data.items);
      })

      .catch((error) => console.log(error));
  }, []);

  function getCatData(idx) {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${idx}&regionCode=US&maxResults=20&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.items)).catch((error) => console.log(error));;
  }

  return (
    <div className="categories">
      {categories
        .filter((cat) => cat.snippet.assignable)
        .map((category) => (
          <button
            key={category.snippet.title}
            className="cat-btn"
            onClick={() => {
              getCatData(category.id);
            }}
          >
            {category.snippet.title}
          </button>
        ))}
    </div>
  );
}




