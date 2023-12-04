import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetails } from "api";
import { Container, Img, Item, Link, LinkBack, Infobox } from "./moviedet.styled";

const MovieDetailsPage = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { movieID } = useParams();
  const backLink = location.state?.from;

  useEffect(() => {
    setIsLoading(true);
    fetchDetails(movieID)
      .then(response => {
        setMovies(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieID]);

  const movieYear = () => new Date(movies.release_date).getFullYear();

    return (<>
      {isLoading && 'Loading , please wait...'}
      <LinkBack to={backLink}>Go back</LinkBack>
      <Container>
        <Img
          src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
          alt={movies.title}
        />
        <div>
          <h3>
            {movies.title} ({movieYear()})
          </h3>
          <p>User Score: {movies.vote_average} / 10 stars</p>
          <h4>Overview</h4>
          <p>{movies.overview}</p>
        </div>
      </Container>
      <Container>
        <Infobox>
      <h4>Additional information</h4>
      <ul>
        <Item>
          <Link to="reviews">
          Reviews
          </Link>
        </Item>
        <Item>
          <Link to="cast">
          Cast
          </Link>
        </Item>
      </ul>
      </Infobox>
      </Container>
      <Outlet />
    </>);
}

export default MovieDetailsPage;