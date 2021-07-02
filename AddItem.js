import React, { Component } from 'react';

class AddItem extends Component {

  constructor () {
    super();
    this.state = {
      newItem: {name : []},
      in : "",// input of this component
      org : ""// input of app component
    }
  }

  handleSubmit(e) {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

    // Implement the rest of this function here!

    

    var input = this.refs.id.value;
    var orgInput = this.props.idName;
   

      this.setState({
        newItem: { name: this.state.newItem.name.concat(input) },
        in : input,
        org : orgInput
      },
        () => this.props.addItem(this.state)
      )
   

  }


  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
        <h4>Add {this.props.idName}</h4>
        <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
          <div id={divName} ref={divName}>
            <label>Name</label><br />
            <input type='text' ref='id' />
          </div>
          <br />
          <input type='submit' value='Submit' />
          <br />
        </form>
      </div>
    );
  }

}

export default AddItem;
