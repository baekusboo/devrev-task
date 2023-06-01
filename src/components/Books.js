import React from 'react';
import { useState } from 'react';


import {
  BooksViewList,
  Title,
  BookCard,
  BookBody,
  BookImage,
  BookName,
  BookDescription,
  Button
} from './Styles';

import book1 from "../images/age-of-vice-book.png";
import book2 from "../images/city-under-one-roof-book.png";
import book3 from "../images/the-world-and-all-that-it-holds-book.png";
import book4 from "../images/maame-book.png";
import book5 from "../images/essex-dogs-book.png";
import book6 from "../images/what-happened-to-ruthy-ramirez-book.png";
import book7 from "../images/a-death-at-the-party-book.png";
import book8 from "../images/the-god-of-endings-book.png";
import book9 from "../images/now-you-see-us-book.png";
import book10 from "../images/dust-child-book.png";
import book11 from "../images/the-mostly-true-story-of-tanner-and-louise-book.png";
import book12 from "../images/homecoming-book.png";
import book13 from "../images/symphony-of-secrets-book.png";
import book14 from "../images/silver-alert-book.png";
import book15 from "../images/only-love-can-hurt-like-this-book.png";
import book16 from "../images/paper-names-book.png";
import book17 from "../images/the-collected-regrets-of-clover-book.png";
import book18 from "../images/yellowface-book.png";
import book19 from "../images/the-second-ending-book.png";
import book20 from "../images/the-wishing-game-book.png";
import book21 from "../images/same-time-next-summer-book.png";
import book22 from "../images/banyan-moon-book.png";

const booksPerPage = 9;

const bookData = [
  {
    id: 1,
    title: "Age of Vice",
    author: "Deepti Kapoor",
    image: book1,
    releasedate: "Jan 3, 2023",
  },
  {
    id: 2,
    title: "City Under One Roof",
    author: "Iris Yamashita",
    image: book2,
    releasedate: "Jan 10, 2023",
  },
  {
    id: 3,
    title: "The World and All That It Holds",
    author: "Aleksandar Hemon",
    image: book3,
    releasedate: "Jan 24, 2023",
  },
  {
    id: 4,
    title: "Maame",
    author: "Jessica George",
    image: book4,
    releasedate: "Jan 31, 2023",
  },
  {
    id: 5,
    title: "Essex Dogs",
    author: "Dan Jones",
    image: book5,
    releasedate: "Feb 7, 2023",
  },
  {
    id: 6,
    title: "What Happened to Ruthy Ramirez",
    author: "Claire Jiménez",
    image: book6,
    releasedate: "March 7, 2023",
  },
  {
    id: 7,
    title: "A Death at the Party",
    author: "Amy Stuart",
    image: book7,
    releasedate: "March 7, 2023",
  },
  {
    id: 8,
    title: "The God of Endings",
    author: "Jacqueline Holland",
    image: book8,
    releasedate: "March 7, 2023",
  },
  {
    id: 9,
    title: "Now You See Us",
    author: "Balli Kaur Jaswal",
    image: book9,
    releasedate: "March 7, 2023",
  },
  {
    id: 10,
    title: "Dust Child",
    author: "Nguyễn Phan Quế Mai",
    image: book10,
    releasedate: "March 14, 2023",
  },
  {
    id: 11,
    title: "The Mostly True Story of Tanner & Louise",
    author: "Colleen Oakley",
    image:book11,
    releasedate: "March 28, 2023",
  },
  {
    id: 12,
    title: "Homecoming",
    author: "Kate Morton",
    image: book12,
    releasedate: "April 4, 2023",
  },
  {
    id: 13,
    title: "Symphony of Secrets",
    author: "Brendan Slocumb",
    image: book13,
    releasedate: "April 18, 2023",
  },
  {
    id: 14,
    title: "Silver Alert",
    author: "Lee Smith",
    image: book14,
    releasedate: "April 18, 2023",
  },
  {
    id: 15,
    title: "Only Love Can Hurt Like This",
    author: "Paige Toon",
    image: book15,
    releasedate: "April 25, 2023",
  },
  {
    id: 16,
    title: "Paper Names",
    author: "Susie Luo",
    image: book16,
    releasedate: "May 2, 2023",
  },
  {
    id: 17,
    title: "The Collected Regrets of Clover",
    author: "Mikki Brammer",
    image: book17,
    releasedate: "May 9, 2023",
  },
  {
    id: 18,
    title: "Yellowface",
    author: "R.F. Kuang",
    image: book18,
    releasedate: "May 16, 2023",
  },
  {
    id: 19,
    title: "The Second Ending",
    author: "Michelle Hoffman",
    image: book19,
    releasedate: "May 30, 2023",
  },
  {
    id: 20,
    title: "The Wishing Game",
    author: "Meg Shaffer",
    image: book20,
    releasedate: "May 30, 2023",
  },
  {
    id: 21,
    title: "Same Time Next Summer",
    author: "Annabel Monaghan",
    image: book21,
    releasedate: "June 6, 2023",
  },
  {
    id: 22,
    title: "Banyan Moon",
    author: "Thao Thai",
    image: book22,
    releasedate: "June 27, 2023",
  },

];

const Books = () => {   

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate indexes for pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = bookData.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Title style={{ marginLeft: '50px', marginTop: '40px' }}>All Books</Title>

      <BooksViewList>
        {currentBooks.map((book) => (
          <BookCard key={book.id}>
            <BookImage src={book.image} alt={book.title} />
            <BookBody>
              <BookName>{book.title}</BookName>
              <BookDescription>By {book.author}</BookDescription>
              <BookDescription>Release Date: {book.releasedate}</BookDescription>
            </BookBody>
          </BookCard>
        ))}
      </BooksViewList>
      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '50px', marginTop: '20px'}}>
        {Array.from({ length: Math.ceil(bookData.length / booksPerPage) }).map((_, index) => (
          <Button style={{ margin: '0 4px', marginBottom: "10px" }} key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Books;
