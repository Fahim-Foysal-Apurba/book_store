import React, { useState, useEffect, useCallback } from "react";
import { faker } from "@faker-js/faker";
import { saveAs } from "file-saver";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "@/components/ui/card";

// Function to generate book data
const LocalPage = (index, seed) => {
  faker.seed(seed + index);
  return {
    index: index + 1,
    isbn: faker.number.int({ min: 1000000000000, max: 9999999999999 }),
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    publisher: faker.company.name(),
  };
};

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [seed, setSeed] = useState(100);
  const [hasMore, setHasMore] = useState(true);
  const [view, setView] = useState("table");

  const fetchBooks = useCallback(() => {
    const newBooks = Array.from({ length: 10 }, (_, i) =>
      LocalPage((page - 1) * 10 + i, seed)
    );
    setBooks((prev) => [...prev, ...newBooks]);
    setPage((prev) => prev + 1);
    if (books.length >= 200) setHasMore(false);
  }, [page, seed, books.length]);

  useEffect(() => {
    fetchBooks();
  }, [seed]);

  const exportToCSV = () => {
    const headers = ["Index", "ISBN", "Title", "Author", "Publisher"];
    const data = books.map((book) => [book.index, book.isbn, book.title, book.author, book.publisher]);
    const csvContent = [headers, ...data].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "books.csv");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <button onClick={() => setView(view === "table" ? "gallery" : "table")}>
          Toggle View
        </button>
        <button onClick={exportToCSV}>Export CSV</button>
      </div>

      <InfiniteScroll
        dataLength={books.length}
        next={fetchBooks}
        hasMore={hasMore}
        loader={<p>Loading more books...</p>}
      >
        {view === "table" ? (
          <table className="w-full border">
            <thead>
              <tr>
                <th>Index</th>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publisher</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.index}>
                  <td>{book.index}</td>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {books.map((book) => (
              <Card key={book.index} className="p-4">
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.publisher}</p>
              </Card>
            ))}
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
};

// Only one default export allowed
export default BookList;
