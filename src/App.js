import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import BookCard from './components/BookCard';
import Search from './components/Search';
import './styles.css';

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const fetchBooks = async () => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${searchQuery}`);
      setBooks(response.data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    setLoading(false);
  };

  const toggleFavorite = (book) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.key === book.key)
        ? prev.filter((fav) => fav.key !== book.key)
        : [...prev, book]
    );
  };

  useEffect(() => {
    fetchBooks();
  }, [searchQuery]);

  return (
    <Container maxWidth="lg" className="app-container">
      {/* Header Section with Background */}
      <header>
        <Typography variant="h3" className="header">
          Book Finder
        </Typography>
      </header>

      <Search setSearchQuery={setSearchQuery} />
      
      <Grid container spacing={3}>
        {loading ? (
          <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
            <CircularProgress size={50} color="primary" />
          </Grid>
        ) : (
          books.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites.some((fav) => fav.key === book.key)}
            />
          ))
        )}
      </Grid>
    </Container>
  );
}

export default App;
