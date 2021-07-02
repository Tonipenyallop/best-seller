import React, { Component } from 'react';

class ListItem extends Component {

  constructor (props) {
    super(props);
    this.state = { color: 'black' };
  }

  handleClick() {
    // Implement this function!
    // console.log('handleClick is activated');
    var c = (this.state.color=='black') ? 'gray' : 'black';
    this.setState({
      color : c
    })



  }

  render() {
    var item = this.props.item;
    var name = item.name;
    

    return (
      <span onClick={this.handleClick.bind(this)} style={{ color: this.state.color }}>
        <strong style={{textAlign : "left"}}  >• {name}</strong>
      </span>
    );

  }

}
export default ListItem;

