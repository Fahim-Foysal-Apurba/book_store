import React, { useState, useEffect, useCallback } from 'react';
import Filters from './components/Filters';
import BookTable from './components/BookTable';
import BookGallery from './components/BookGallery';
import Navbar from './components/Navbar';
import { generateBooks } from './utils/dataGenerator';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [region, setRegion] = useState('USA');
  const [language, setLanguage] = useState('en');
  const [seed, setSeed] = useState(28259);
  const [likes, setLikes] = useState(2.7);
  const [reviews, setReviews] = useState(0);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [view, setView] = useState('table');

  // Memoize fetchMoreBooks to avoid re-creation on each render.
  const fetchMoreBooks = useCallback((currentPage) => {
    const newBooks = generateBooks({
      region,
      language,
      seed,
      likes,
      reviews,
      page: currentPage,
    });
    setBooks((prevBooks) => [...prevBooks, ...newBooks]);
    setPage(currentPage + 1);
  }, [region, language, seed, likes, reviews]);

  // Reset books and page when any filter changes.
  useEffect(() => {
    setBooks([]);
    setPage(0);
    fetchMoreBooks(0);
  }, [region, language, seed, likes, reviews, fetchMoreBooks]);



  return (
    <div className="container mt-4" style={{backgroundColor:"#F6F0F0"}}>
      <Navbar books={books} />
      <Filters 
        region={region}
        setRegion={setRegion}
        language={language}
        setLanguage={setLanguage}
        seed={seed}
        setSeed={setSeed}
        likes={likes}
        setLikes={setLikes}
        reviews={reviews}
        setReviews={setReviews}
        setView={setView}
      />
      <InfiniteScroll
        dataLength={books.length}
        next={() => fetchMoreBooks(page)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {view === 'table' ? (
          <BookTable books={books} />
        ) : (
          <BookGallery books={books} />
        )}
      </InfiniteScroll>
    </div>
  );
};

export default App;


