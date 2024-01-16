import React from "react";
// import './components/componentsAct/ListStyle.css'

const BookList = () =>{
    return(
        <div className="list-container">
            <h2>Book List</h2>
            <ol>
                <li>To kill a Mockingbird by Harper Lee</li>
                <li>Educated by Tara Westover</li>
                <li>The Hitchker's Guide to the Galaxy by Douglas Adams</li>
            </ol>
            <div class="gallery">
                <img src="https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg"/>
                <img src="https://cdn.kobo.com/book-images/44f0dcb3-0b39-43bd-b802-202b5f9ed32f/353/569/90/False/educated-4.jpg"/>
                <img src="https://cdn.kobo.com/book-images/ab95a58c-cacf-405b-9dde-76bdae980af1/353/569/90/False/the-hitchhiker-s-guide-to-the-galaxy-the-illustrated-edition.jpg"/>
            </div>
        </div>
    )
}

export default BookList;