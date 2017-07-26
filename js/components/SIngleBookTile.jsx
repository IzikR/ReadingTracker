import React from 'react';

class SingleBookTile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nrOfBooks: this.props.readingGoal,
             nrOfPages:'',
             nrOfPagesRead: '',
             title:'',
             author:'',
             bookCoverUrl: '',

        }
    }
    handleAuthor=(event)=>{
        let newAuthor = event.target.value;
        this.setState({
            author: newAuthor,
        })
        console.log(this.state.author)
    }
    handleTitle=(event)=>{
        let newTitle = event.target.value;
        this.setState({
            title: newTitle,
        })
        console.log(this.state.title)
    }
    handleTileClick=(event)=>{
        const currentTile = event.target;
        console.log(currentTile);
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
    handlenrOfPagesRead=(event)=>{
        let newnrOfPagesRead = parseInt(event.target.value);
        if (isNaN (newnrOfPagesRead)){
            this.setState({
                nrOfPagesRead: '',
            })
        }else{
            this.setState({
                nrOfPagesRead: newnrOfPagesRead,
            })
        }

    }



    render(){
        <div className="book-tile-content" key={i} onClick={this.handleTileClick}>
            <button className="edit-book-tile-btn">Edit Book</button>
                <div className="book-tile-text">
                    <label>Author:<input type="text" className="book-author" value={this.props.booksInfo.author} placeholder="author" onChange={this.handleAuthor}></input></label>

                    <label>Title:<input type="text" className="book-title" value={this.props.booksInfo.title} placeholder="title" onChange={this.handleTitle}></input></label>

                    <label>Nr of pages:
                        <input type="text" className="book-nr-of-pages" value={this.props.booksInfo.nrOfPages} placeholder="pages in book" onChange={this.handleNrPages}>
                        </input>
                        Pages read:<input type="text"className="book-nr-of-pages" value={this.props.booksInfo.nrOfPagesRead} placeholder="pages read" onChange={this.handlenrOfPagesRead}></input>

                    </label>
                </div>
        </div>
}

export default SingleBookTile;
