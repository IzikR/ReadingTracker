import React from 'react';
import ReactDOM from 'react-dom';
import BookTiles from './components/bookTiles.jsx';
import BookAddingSection from './components/bookAddingSection.jsx';

document.addEventListener('DOMContentLoaded', function(){


    class Header extends React.Component{
        render(){
            return <div className="header">
                <div className="main-nav">
                    <form>
                        <label>Log in: <input type="email" placeholder='e-mail'></input><input type="password" placeholder="password"></input></label>
                        <input type="submit" value="Log in"/>
                    </form>

                </div>
                <div className="main-title-section">
                    <h1 className="main-title">Reading Tracker</h1>
                    <h3 className="main-subtitle">Track your reading goals for the year</h3>
                </div>
            </div>

        }
    }
    class Container extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                nrOfBooks : 0,
                add1More: 0,
                booksInfo:[],

            };
        }
        handleReadingGoal = (nr) => {

            this.setState({
                nrOfBooks: nr,
            },this.prepareBooksInfo());
        }

        prepareBooksInfo = ()=>{
            let nrOfObjects = this.state.nrOfBooks;

            let author = "author"
            let bookData = [];

            for (var i = 0; i < nrOfObjects; i++) {
                const singleBookData = {
                    author: '',
                    title: '',
                    nrOfPages: '',
                    nrOfPagesRead:'',
                    editable: false,
                    bookCoverUrl: '',
                }
                bookData.push(singleBookData);
            }

            this.setState({
                booksInfo: bookData,
            })
        }
        handleSingleAdd = (nr)=>{
            let newTilesNr = this.state.nrOfBooks + nr
            this.setState({
                nrOfBooks: newTilesNr,
            },this.prepareBooksInfo());
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
        handleBookTileChanges= (value, BookId, key)=>{

            let newBooksinfo = this.state.booksInfo.slice();
            let newObject = newBooksinfo[BookId];
            newObject[key] = value
            this.setState({
                booksInfo: newBooksinfo,
            })

        }
        render(){

            return <div className="container">
                <Header/>
                <BookAddingSection
                    onAddGoal={this.handleReadingGoal} onAddSingle={this.handleSingleAdd}/>
                <BookTiles
                    readingGoal={this.state.nrOfBooks} addOneMore={this.state.add1More} booksInfo={this.state.booksInfo}
                    handleBookEdit={this.handleBookEdit}
                    handleBookTileChanges ={this.handleBookTileChanges}
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
