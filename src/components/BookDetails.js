import React from 'react';

const BookDetail = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="book-detail-overlay" onClick={onClose}>
      <div className="book-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="book-cover">
          <img src={`https://picsum.photos/200?random=${book.isbn}`} alt={book.title} />
        </div>
        <div className="book-info">
          <h2>{book.title}</h2>
          <p><strong>Author(s):</strong> {book.author}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Likes:</strong> {book.likes}</p>
          <p><strong>Reviews:</strong> {book.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
