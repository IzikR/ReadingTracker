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
    handleNrPages=(event)=>{
        let newnrOfPages = parseInt(event.target.value);
        if (isNaN (newnrOfPages)){
            this.setState({
                nrOfPages: '',
            })
        }else{
            this.setState({
                nrOfPages: newnrOfPages,
            })
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
            if(item.editable){
                return<div className="book-tile-content" key={id} onClick={this.handleTileClick}>
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
                                    placeholder="Nr of pages in book" onChange={e=>this.handleBookTileChanges(e, id, "nrOfPages")}>
                                </input>
                                Pages read:
                                <input
                                    type="text"
                                    className="book-nr-of-pages" value={item.handleBookTileChanges} placeholder="Nr of pages read" onChange={e=>this.handleBookTileChanges(e, id, "nrOfPagesRead")}>

                                </input>

                            </label>
                        </div>
                </div>
            }else{
                return <div className="book-tile-content" key={id} onClick={this.handleTileClick}>
                    <button
                        className="edit-book-tile-btn"
                        onClick={e => this.handleBookEdit(e, id)}>Edit Book</button>
                        <div className="book-tile-text">
                            <p>Author: {item.author}</p>
                            <p>Title: {item.title}</p>
                            <p>Nr of pages: {item.nrOfPages}</p>
                            <p>Pages read: {item.nrOfPagesReads}</p>

                        </div>
                </div>
            }

        })
        return <div className="main-section">
            <h3 className="books-total">Total Books: {bookTiles.length}</h3>
            <div className="book-tiles-section">
                {bookTiles}
            </div>
            </div>
    }
}

export default BookTiles;
