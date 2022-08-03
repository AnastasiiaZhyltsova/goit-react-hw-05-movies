import { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchForm;
