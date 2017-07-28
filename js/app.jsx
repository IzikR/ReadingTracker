import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import BookTiles from './components/bookTiles.jsx';
import BookAddingSection from './components/bookAddingSection.jsx';
document.addEventListener('DOMContentLoaded', function(){

    class Container extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                nrOfBooks : 0,
                add1More: 0,
                booksInfo:[],
                booksRead: 0,
                booksDeclared: 0,

            };
        }
        componentDidMount(){
            const data = localStorage.getItem("books");
            if (data){
                this.setState(JSON.parse(data))
            }
           }
        handleReadingGoal = (nr) => {
            let booksDeclared = nr;
            this.setState({
                nrOfBooks: nr,
                booksDeclared: booksDeclared,
            },this.prepareBooksInfo);
        }

        prepareBooksInfo = ()=>{
            let nrOfObjects = this.state.nrOfBooks;

            let author = "author"
            let bookData = this.state.booksInfo.slice();
            if (nrOfObjects>this.state.booksInfo.length){
                console.log(nrOfObjects, this.state.booksInfo.length);
                for (var i = this.state.booksInfo.length; i < nrOfObjects; i++) {
                    const singleBookData = {
                        author: '',
                        title: '',
                        nrOfPages: '',
                        nrOfPagesRead:'',
                        editable: false,
                        bookCoverUrl: '',
                        bookRead: 'book-not-read',
                    }
                    bookData.push(singleBookData);
                }
                this.setState({
                    booksInfo: bookData,
                })

            }else if  (nrOfObjects< this.state.booksInfo.length){
                    console.log(nrOfObjects, bookData.slice((bookData.length - nrOfObjects)));
                    this.setState({
                        booksInfo: bookData.slice((bookData.length - nrOfObjects)),
                    })
            }
        }
        handleSingleAdd = (nr)=>{
            let newTilesNr = this.state.nrOfBooks + nr

            this.setState({
                nrOfBooks: newTilesNr,
            },this.prepareBooksInfo);
        }
        handleBookEdit=(e, bookId)=>{
            let newBooksinfo = this.state.booksInfo.slice();
            let newObject = newBooksinfo[bookId];
            if(this.state.booksInfo[bookId].editable === false){
                newObject.editable = true
                this.setState({
                    booksInfo: newBooksinfo,
                })
            }else{
                newObject.editable = false
                this.setState({
                    booksInfo: newBooksinfo,
                })
            }
        }
        handleBookDelete = (e, bookId)=>{
            let newBooksinfo = this.state.booksInfo.slice();
            let booksRead = this.state.booksRead;
            let currentBook = newBooksinfo[bookId]
            if (currentBook.bookRead === 'book-read'){
                booksRead = booksRead - 1
            }
            newBooksinfo.splice(bookId, 1)
            this.setState({
                booksInfo: newBooksinfo,
                booksRead: booksRead,
            })
        }
        handleBookRead = (value, BookId)=>{
            let newBooksinfo = this.state.booksInfo.slice();
            let newObject = newBooksinfo[BookId];
            let counter = this.state.booksRead;
            console.log(newObject.bookRead);
            if( newObject.bookRead === 'book-read'){
                newObject.bookRead = 'book-not-read'

                counter = counter -1
                this.setState({
                    booksInfo: newBooksinfo,
                    booksRead: counter,
                })
            }else{
                newObject.bookRead = 'book-read'
                counter = counter +1
                this.setState({
                    booksInfo: newBooksinfo,
                    booksRead: counter,
                })
            }


        }
        handleBookTileChanges= (value, BookId, key)=>{

            let newBooksinfo = this.state.booksInfo.slice();
            let newObject = newBooksinfo[BookId];
            newObject[key] = value;

            this.setState({
                 booksInfo: newBooksinfo,
            })

        }

        render(){
            if(this.state.booksInfo.length>0){
                localStorage.setItem("books", JSON.stringify(this.state));
            }


            return <div className="container">
                <div className="smaller-container">
                    <Header/>
                    <BookAddingSection
                    onAddGoal={this.handleReadingGoal} onAddSingle={this.handleSingleAdd}/>
                </div>
                <BookTiles
                    readingGoal={this.state.nrOfBooks}
                    booksRead={this.state.booksRead}
                    addOneMore={this.state.add1More} booksInfo={this.state.booksInfo}
                    booksDeclared={this.state.booksDeclared}
                    handleBookEdit={this.handleBookEdit}
                    handleBookDelete={this.handleBookDelete}
                    handleBookTileChanges ={this.handleBookTileChanges}
                    handleBookRead={this.handleBookRead}
                    />
            </div>
        }
    }
    class App extends React.Component {
        render(){
            return <Container/>
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
