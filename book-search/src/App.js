import React, { useState } from 'react'
import './App.css';
import { BiSearchAlt } from 'react-icons/bi'
import books from "./books.json"
import Fuse from "fuse.js";
import BookCard from "./components/BookCard"

function App() {

  const [data, setData] = useState(books)

  const searchInput = (input) => {

    if (!input) {
      setData(books)
    }
    const fuse = new Fuse(data, {
      keys: ["title", "author"]
    });

    console.log("fuse value >>>> ", fuse.keys)

    let result = fuse.search(input);
    const match = [];

    console.log("input value >>>> " + input)
    console.log("result value >>>> " + result)

    if (!result.length) {
      setData(books)
    } else {
      result.forEach(({ item }) => {
        match.push(item)
      })
      setData(match)
    }
  };


  return (
    <div className="app">
      {/* header */}

      <div className="header">
        <h1 className="header__title">Welcome to the library</h1>
        <div className="header__searchfield">
          <BiSearchAlt className="header__searchIcon" />
          <input placeholder="Search Books" onChange={(e) => searchInput(e.target.value)} className="header__searchInput" />
        </div>
      </div>

      {/* body */}
      <div className="body">
        {
          data.map((item) => (
            <BookCard {...item} key={item.title} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
