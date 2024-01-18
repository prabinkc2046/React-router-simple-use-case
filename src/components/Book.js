import React from 'react';
import { useParams } from 'react-router-dom';


export default function Book() {
    const {id} = useParams();
  return (
    <div>
        <h1> Book details</h1>
        <p> Fetching the detail of book id {id}</p>
        <p>Book id {id}</p>
    </div>
  )
}
