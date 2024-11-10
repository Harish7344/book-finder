import React from 'react';
import { TextField, Box, Button } from '@mui/material';

const Search = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setSearchQuery(event.target.value);
    }
  };

  return (
    <Box display="flex" justifyContent="center" my={3}>
      <TextField
        label="Search for books by Title, Author, or ISBN"
        variant="outlined"
        fullWidth
        onKeyDown={handleSearch}
        sx={{ marginRight: 2 }}
      />
      <Button variant="contained" color="primary" onClick={() => setSearchQuery()}>
        Search
      </Button>
    </Box>
  );
};

export default Search;
