import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const ONE_MOVIE = gql`
  query MovieQuery($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      rating
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(ONE_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  console.log(data, loading);
  if (loading) {
    return <h1>Fetching movie...</h1>;
  }
  return <div>{data.movie.title}</div>;
};

export default Movie;
