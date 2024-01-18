import React from 'react';
import { Link } from 'react-router-dom';

export default function BookList() {
    const books = [
        {id: 1, title: "book 1"},
        {id: 2, title: "book 2"},
        {id: 3, title: "book 3"},
        {id: 4, title: "book 4"},
        {id: 5, title: "book 5"}
    ]
  return (
    <div>
        <h1>Book list</h1>
        <ul>
            {
                books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>
                        {book.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
