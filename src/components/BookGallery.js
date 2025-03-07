import React from 'react';

const BookGallery = ({ books }) => {
  return (
    <div className="row">
      {books.map((book) => (
        <div key={book.isbn} className="col-sm-6 col-md-4 col-lg-3 mb-4">
<div 
  className="card h-100 border border-3 shadow-lg transition rounded" 
  style={{ backgroundColor: "#C599B6" , transition: "transform 0.3s ease" }} 
  onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.07)"}
  onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
>
            <img
              src={`https://picsum.photos/200/300?random=${book.isbn}`}
              className="card-img-top"
              alt={book.title}
              style={{ objectFit: 'cover', height: '300px' }}
            />
            <div className="card-body">
              <h5 className="card-title" title={book.title}>
                {book.title.length > 30 ? `${book.title.substring(0, 27)}...` : book.title}
              </h5>
              <p className="card-text mb-1">
                <small className="text-muted">{book.author}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{book.publisher}</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGallery;


