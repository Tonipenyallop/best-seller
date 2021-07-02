import React, { Component } from 'react';
import App from './App';
class AddList extends Component {

  constructor (props) {
    super(props);
    this.state = { lists: [], items: {} , in : ""};
    // this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

    // Implement the rest of this function here!

    // update its state 
    // and use app.handleAddList function 
    var input = this.refs.id.value;
    var animalObj = {
      [input]: []
    }
    var newState = Object.assign(animalObj, this.state.items);
    // console.log("input:" + input);
if(!this.state.lists.includes(input)){
  // console.log('yo  here');
  this.setState({
    in : input,
    // items:  { [input]: [] },
    items : newState,
    lists: this.state.lists.concat(input),
  },
  // () => console.table(this.state)
    () => this.props.addList(this.state),
  );
}
    
    // document.getElementById("newID").innerHTML = "";
  }

  render() {
    // console.log('after in AddList:' + this.state.lists);
    // console.log('after in AddList:' + this.state.items);

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
