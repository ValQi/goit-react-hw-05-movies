import { Form, useSearchParams } from "react-router-dom";
import { Button, Input } from "./moviesearchbar.styled";

export const MovieSearch = () => {

const [searchParams, setSearchParams] = useSearchParams();
const searchMovie = searchParams.get('searchQuery');

const handleSubmit = e => {
  e.preventDefault();
  setSearchParams({ searchQuery: e.target.elements.searchQuery.value });
  e.currentTarget.reset();
}

    return (
      <>
      <Form onSubmit={handleSubmit}>
        <Input
        type="text"
        name="searchQuery"
        autoFocus
        defaultValue={searchMovie}
        />
        <Button type="submit">Search</Button>
      </Form>
      </>
    );
  };

export default MovieSearch;