import React, { Component } from 'react';
import App from './App';
class AddList extends Component {

  constructor (props) {
    super(props);
    this.state = { lists: [], items: {} };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

    // Implement the rest of this function here!
    console.log('handleSubmit was activated');

    // gotta update states but what kinda states?
    var input = this.refs.id.value;
    console.log("input:"+input);
    
    console.log('before:' +this.state.lists);
    this.setState({

      items: {
        input: []
      },

      lists: this.state.lists.concat(input),




    },
    // () => console.log("inside func after:"+this.state.lists),
    // () => this.props.addList(this.state),
    // () => console.log("yoooo"),

    () =>   this.props.addList(this.state),
    );
    // console.log('after:' + this.state.lists);
    // console.log(this.state.items);
    // console.log(this.state.lists);

    // // calling function 
    // this.props.addList(this.state);




  }

  render() {
    console.log('after in AddList:' + this.state.lists);
    console.log('after in AddList:' + this.state.items);

    return (
      <div id="addListDiv">
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div id='addList'>
            <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID'></input>
            </label>
          </div><br />
          <input type='submit' value='Create List' />
        </form>
      </div>
    );
  }
  
}

export default AddList;
