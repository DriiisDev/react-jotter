import React from 'react'

const Book = ({img, title, author}) => {
  // attribute, eventhandler
  // onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const moreExample = (author) =>{
    console.log(author);
  }
  return(
    <article className="book-card" onMouseOver={() => {
      console.log(title);
      }}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* <button type="button" onClick={()=> alert ("hello world")}>say something</button> */}
      <button type="button" onClick={clickHandler}>say something</button>
      <button type="button" onClick={moreExample(author)}>more example</button>
    </article>
  )
}

export default Book