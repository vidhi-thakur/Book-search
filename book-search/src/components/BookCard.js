import React from 'react'
import "./BookCard.css"

function BookCard({title, image, author, url}) {
    return (
        <div className="bookCard">
            <div>
                <img className="bookCard__img" src={image} alt="book_image" />
            </div>
            <div className="bookCard__info">
                <h4 className="m-1">{title}</h4>
                <p className="m-1">{author}</p>
                <a className="bookCard__link m-1" href={url}>Know more</a>
            </div>
        </div>
    )
}

export default BookCard
