import React from "react";
import Book from "../book";

import books from '../data'

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

export default BookList;