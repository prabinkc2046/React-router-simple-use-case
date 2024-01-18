import React from 'react'
import BookList from './components/BookList'
import Book from './components/Book'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/books' element={<BookList/>}/>
        <Route path='/books/:id'element={<Book/>}/>
      </Routes>
    </div>
  )
}
