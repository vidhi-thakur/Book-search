import React from 'react'
import "./Body.css"
import books from "../books.json"
import BookCard from './BookCard'

function Body() {
    return (
        <div className="body">
            <BookCard />
        </div>
    )
}

export default Body
