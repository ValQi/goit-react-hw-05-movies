import { useState } from 'react';
import { SearchBlok, Button, Form , Input  } from './moviesearchbar.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontSize: '24px',
};
const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      Notify.info('Enter your request, please!', paramsForNotify);
      return;
    }
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <SearchBlok>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            To Search
          </Button>
          <Input
            type="text"
            placeholder="Enter for search movies"
            name="query"
            value={query}
            onChange={changeQuery}
          />
        </Form>
      </SearchBlok>
    </>
  );
};

export default SearchForm;