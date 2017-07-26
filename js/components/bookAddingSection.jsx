import React from 'react';

class BookAddingSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nrOfBooks: 0,
            additionalBooks:0,
            counter: 0,
        }
    }

    handleReadingGoal=(event)=>{
        let newBooksnr = parseInt(event.target.value);
        if(isNaN (newBooksnr)){
            this.setState({
                nrOfBooks: '',
            })
        }else{
            this.setState({
                nrOfBooks: newBooksnr,
            })
        }

        if (typeof this.props.onAddGoal === 'function' && !isNaN (newBooksnr)){
                this.props.onAddGoal(newBooksnr);
            }


    }
    handleSingleAdd=(event)=>{
        event.preventDefault();
        let counter = 0;
        counter++
        this.setState({
            counter: counter,
        })
        if (typeof this.props.onAddSingle === 'function'){
                this.props.onAddSingle(counter);
            }

    }

    render(){
        return <div>
            <form>
                <label>Declare how many books you want to read this year<input type="text" placeholder="number" value={this.state.nrOfBooks} onChange={this.handleReadingGoal}></input></label>
                <br></br>Finished with your goal already?
                <br></br>
                <label>Just add more books<button onClick={this.handleSingleAdd} className='single-book-add-btn'>Add</button></label>
            </form>
        </div>
    }
}
export default BookAddingSection;
