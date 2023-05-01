import Link from "next/link";
import axios from "axios";

const movies = async () => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://netflix54.p.rapidapi.com/search/",
    params: {
      query: "stranger",
      offset: "0",
      limit_titles: "50",
      limit_suggestions: "20",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "000a846d75msh94e4fbb1650702cp1f6fb7jsnf7b5429b07bb",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <section className={`${styles.movieSection}`}>
        <div className={`${styles.container}`}>
          <h1>Series of Movies</h1>
          {response.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />;
          })}
        </div>
      </section>
    </>
  );
};
export default movies;
