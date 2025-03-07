import React, { useState } from 'react';

const BookTable = ({ books }) => {
  const [expandedBook, setExpandedBook] = useState(null);

  const toggleExpand = (isbn) => {
    setExpandedBook(expandedBook === isbn ? null : isbn);
  };

  return (
    <div className="book-table-container">
      <table className="book-table">
        <thead>
          <tr>
            <th>#</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author(s)</th>
            <th>Publisher</th>
            <th>Expand</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <React.Fragment key={book.isbn}>
              <tr>
                <td>{index + 1}</td>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>
                  <button className="expand-btn bth-outline" onClick={() => toggleExpand(book.isbn)}>
                    {expandedBook === book.isbn ? '>' : '^'}
                  </button>
                </td>
              </tr>
              {expandedBook === book.isbn && (
                <tr>
                  <td colSpan="6">
                    <div className="book-detail-card">
                      <h3>{book.title}</h3>
                      <p><strong>Author:</strong> {book.author}</p>
                      <p><strong>Publisher:</strong> {book.publisher}</p>
                      <p><strong>ISBN:</strong> {book.isbn}</p>
                      <p><strong>Likes:</strong> {book.likes}</p>
                      <p><strong>Reviews:</strong> {book.reviews}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;


