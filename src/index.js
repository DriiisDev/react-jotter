import React from "react";
import ReactDom from "react-dom";

import {books} from "./books";

import Book from "./Book";

// CSS
import './static/index.css';

//lesson 1:
// stateless functional component
// always return JSX

//lesson 2:
// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// lesson 3:
// Nested Components, React Tools

// // declaring vars
// const title = 'I Love You to the Moon and Back';
// const author = 'Amelia Hepworth';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg';

// const Photo = () => <img src="./img/project4.jpg" alt="" />

// const firstBook = {
//   img: 'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg',
//   title: 'I Love You to the Moon and Back',
//   author: 'Amelia Hepworth'
// }

// const secondBook = {
//   img: 'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg',
//   title: 'connect 4 template',
//   author: 'driiisdev'
// }

// function BookList() {
//   return(
//     <section className="booklist">
//       <Book 
//       img={firstBook.img} 
//       title={firstBook.title} 
//       author={firstBook.author}>
//       </Book>

//       <Book 
//       img={secondBook.img} 
//       title={secondBook.title} 
//       author={secondBook.author}>
//       </Book>
//     </section>
//   );
// }

// const books = [
//   {
//     id: 1,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg',
//     title: 'I Love You to the Moon and Back',
//     author: 'Amelia Hepworth'
//   },

//   {
//     id: 2,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg',
//     title: 'connect 4 template',
//     author: 'driiisdev'
//   },
  
//   {
//     id: 3,
//     img: 'https://m.media-amazon.com/images/P/1593279507.01._SCLZZZZZZZ_SX500_.jpg',
//     title: 'eloquent javascript',
//     author: 'majiri onazofe'
//   }
// ];  

// const names = ['john', 'peter', 'susan'];
// const newName = names.map((name)=>{
//   return(<h1>{name}</h1>);
// })

// console.log(newName);

// function BookList() {
//   return(
//     <section className="booklist">
//       {books.map((iwe)=>{
//         return(
//           <Book key={iwe.id} book={iwe}></Book>
//         );
//       })}
//     </section>
//   );
// }

function BookList() {
  return(
    <section className="booklist">
      {books.map((iwe)=>{
        return(
          <Book key={iwe.id} {...iwe}></Book>
        );
      })}
    </section>
  );
}

// destructuring . props
// const Book = ({img, title, author}) => {
//   // attribute, eventhandler
//   // onClick, onMouseOver

//   const clickHandler = (e) => {
//     console.log(e);
//     console.log(e.target);
//     alert("hello world");
//   };

//   const moreExample = (author) =>{
//     console.log(author);
//   }
//   return(
//     <article className="book-card" onMouseOver={() => {
//       console.log(title);
//       }}>
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {/* <button type="button" onClick={()=> alert ("hello world")}>say something</button> */}
//       <button type="button" onClick={clickHandler}>say something</button>
//       <button type="button" onClick={moreExample(author)}>more example</button>
//     </article>
//   )
// }

// const Book = (props) => {
//   // destructuring props
//   // const{img, title, author} = props.book;
//   const{img, title, author} = props;
//   console.log(props);
//   return(
//     <article className="book-card">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// function BookList() {
//   return(
//     <section className="booklist">
//       <Book job='developer'></Book>
//       <Book title='random title' number={22}></Book>
//     </section>
//   );
// }
// const Book = (props) => {
//   console.log(props);
//   return(
//     <article className="book">
//       <img src={firstBook.img} alt="" />
//       <h1>{firstBook.title}</h1>
//       <h4>{firstBook.author}</h4>
//       <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p>
//     </article>
//   )
// }
// const Image = () => {
//   return(
  
//   )}

// const Author = () => {
//   return(
    
//   )
// }

// const Title = () => {
//   return(
    
//   )
// }

// const Greeting = () =>  {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//     );
// }

ReactDom.render(<BookList></BookList>, document.getElementById("root"));