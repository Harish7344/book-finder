import React from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import '../style/BookCard.css';

const BookCard = ({ book, toggleFavorite, isFavorite }) => {
  // Fallback placeholder image URL (this is just an example, you can change it)
  const placeholderImage = 'https://via.placeholder.com/150x200?text=No+Image';

  // Check if the book has a cover image, otherwise use the placeholder
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : placeholderImage;

  return (
    <Card className="book-card">
      <CardMedia
        component="img"
        height="250"
        image={coverImage}
        alt={`Cover of ${book.title}`}
        className="book-card-image"
      />
      <CardContent>
        <Typography variant="h6" component="div" className="book-card-title">
          {book.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="book-card-author">
          {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </Typography>
      </CardContent>

      {/* Favorite Icon */}
      <IconButton
        className="favorite-icon"
        onClick={() => toggleFavorite(book)}
        color={isFavorite ? 'error' : 'default'}
      >
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
};

export default BookCard;
