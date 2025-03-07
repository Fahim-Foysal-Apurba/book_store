export const exportToCSV = (books) => {
    const header = ['Index', 'ISBN', 'Title', 'Author(s)', 'Publisher'];
    const rows = books.map((book, index) => [
      index + 1,
      book.isbn,
      book.title,
      book.author,
      book.publisher,
    ]);
  
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += header.join(',') + '\n';
    rows.forEach((row) => {
      csvContent += row.join(',') + '\n';
    });
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'books_data.csv');
    document.body.appendChild(link);
    link.click();
  };
  