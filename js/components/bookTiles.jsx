import React from 'react';


class BookTiles extends React.Component{
    constructor(props){
        super(props);
        this.state={
             nrOfPages:'',
             nrOfPagesRead: '',
             bookCoverUrl: '',
        }
    }
    handleBookCoverUrl = (event)=>{
        let newCoverUrl = event.target;
        this.setState({
            bookCoverUrl: newCoverUrl,
        })
    }

    handleTileClick=(event)=>{
        const currentTile = event.target;

    }
    handleBookEdit = (e, id)=>{

        if (typeof this.props.handleBookEdit === 'function'){
                this.props.handleBookEdit(e, id);
            }

    }
    handleBookDelete = (e, id)=>{
        if (typeof this.props.handleBookDelete === 'function'){
                this.props.handleBookDelete(e, id);
            }
    }
    handleBookRead = (e, BookId)=>{
        if (typeof this.props.handleBookRead === 'function'){
                this.props.handleBookRead(e, BookId);
            }
    }
    handleBookTileChanges=(event, bookId, key)=>{
        let newValue = event.target.value;

        if (typeof newValue !== 'string'){
            newValue = parseInt(event.target.value);
        }



        if (typeof this.props.handleBookTileChanges === 'function'){
                this.props.handleBookTileChanges(newValue, bookId, key);
            }

    }

    render(){
        let bookTiles = this.props.booksInfo.map((item, id)=>{
            let bookReadClass = " book-tile-content " + item.bookRead;

            let bookReadBtnText = "Mark as read";
            if(item.bookRead === 'book-read'){
                bookReadBtnText = "Mark as unread";
            }else{
                bookReadBtnText = "Mark as read";
            }

            if(item.editable){
                return<div className={bookReadClass} key={id} onClick={this.handleTileClick}>
                    <div className="editable-tile">
                            <button
                            className="edit-book-tile-btn"
                            onClick={e => this.handleBookEdit(e, id)}>Done</button>
                            <div className="book-tile-text">
                                <label>Author:
                                    <input
                                        type="text"
                                        className="book-author"
                                        value={item.author}
                                        placeholder="Author" onChange={e=>this.handleBookTileChanges(e, id, "author")}>
                                    </input>

                                    </label>

                                <label>Title:
                                    <input type="text"
                                        className="book-title"
                                        value={item.title}
                                        placeholder="Title" onChange={e=>this.handleBookTileChanges(e, id, "title")}>

                                    </input>
                                </label>

                                <label>Nr of pages:
                                    <input
                                        type="text"
                                        className="book-nr-of-pages" value={item.nrOfPages}
                                        placeholder="Nr of pages" onChange={e=>this.handleBookTileChanges(e, id, "nrOfPages")}>
                                    </input>
                                    Pages read:
                                    <input
                                        type="text"
                                        className="book-nr-of-pages" value={item.handleBookTileChanges} placeholder="Nr of pages read" onChange={e=>this.handleBookTileChanges(e, id, "nrOfPagesRead")}>

                                    </input>

                                </label>
                            </div>
                        </div>
                </div>
            }else{
                return <div className={bookReadClass} key={id} onClick={this.handleTileClick}>
                    <div>
                            <button
                                className="edit-book-tile-btn"
                                onClick={e => this.handleBookEdit(e, id)}>Edit Book</button>
                            <div className="book-tile-text">
                                <div>Author: {item.author}</div>
                                <div>Title: {item.title}</div>
                                <div>Nr of pages: {item.nrOfPages}</div>
                                <div>Pages read: {item.nrOfPagesRead}</div>
                            </div>
                    </div>
                            <div className="book-tile-bottom-btns">
                                <button className="book-read-btn" onClick={e=>this.handleBookRead(e, id)}>{bookReadBtnText}</button>
                                <button className="delete-book-btn" onClick={e=> this.handleBookDelete(e, id)}>Delete Book</button>
                            </div>
                </div>
            }

        })
        return <div className="main-section">
            <h3 className="books-total"><span>Reading Goal: {this.props.booksDeclaredFinal}</span> <span>Total Books: {bookTiles.length}</span> <span>Books Read: {this.props.booksRead} </span></h3>
            <div className="book-tiles-section">
                {bookTiles}
            </div>
            <h3 className="books-total"><span>Reading Goal: {this.props.booksDeclaredFinal}</span> <span>Total Books: {bookTiles.length}</span> <span>Books Read: {this.props.booksRead} </span></h3>
            </div>
    }
}

export default BookTiles;
