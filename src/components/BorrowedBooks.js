import React, { useState, useEffect } from 'react';

import {
  BooksViewList,
  BookCard,
  BookBody,
  BookImage,
  BookName,
  BookDescription,
  Title,
  Button,
} from './Styles';

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  
  console.log('Books Borrowed - ',borrowedBooks);

  useEffect(() => {
    // Retrieve borrowed books from local storage
    const storedBorrowedBooks = localStorage.getItem('borrowedBooks');
    if (storedBorrowedBooks) {
      setBorrowedBooks(JSON.parse(storedBorrowedBooks));
    }
  }, []);


  const handleRemoveBook = (bookId) => {
    setBorrowedBooks((prevBorrowedBooks) => {
      const updatedBorrowedBooks = prevBorrowedBooks.filter((book) => book.id !== bookId);
      localStorage.setItem('borrowedBooks', JSON.stringify(updatedBorrowedBooks));
      return updatedBorrowedBooks;
    });
  };
  

if (borrowedBooks.length === 0) {
    console.log('No books borrowed');
    return (
      <div style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '10px' }}>
        <BookName>No Books Borrowed.</BookName>
      </div>
    );
  }

    return (
      <div>
        <Title style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '10px' }}>Borrowed Books</Title>
        <BooksViewList>
          {borrowedBooks.map((book) => (
            <BookCard key={book.id}>
            <BookImage src={book.image} alt={book.title} />
            <BookBody>
              <BookName>{book.title}</BookName>
              <BookDescription>By {book.author}</BookDescription>
              <BookDescription>Genre: {book.subject}</BookDescription>
              <BookDescription>Release Date: {book.releasedate}</BookDescription>
              <Button onClick={() => handleRemoveBook(book.id)}>Remove Book</Button>
            </BookBody>
            </BookCard>
          ))}
        </BooksViewList>
        </div>
    );
  };

export default BorrowedBooks;