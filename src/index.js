import React from "react";
import ReactDom from "react-dom"

// CSS
import "./static/style.css";


const Books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51mN3bY0JjL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "the subtle act of not giving a fuck",
    author: "mark mason"
  },

  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51mN3bY0JjL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", 
    title: "the subtle act of not giving a fuck",
    author: "mark mason"
  }
]

function BookList() {
  return (
    <section className="book-section">
      {Books.map((book) => {
        return(
          <Book book={book}></Book>
        );
      })}
    </section>
  );
}
const Book = (props) =>{ 
  const {img, title, author} = props.book;
  return (
    <div className="book-card">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </div>
  );
}

ReactDom.render(<BookList/>, document.getElementById("root"));