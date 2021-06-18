import React, { Component } from 'react';
import List from './List.js';

const { v4: uuidv4 } = require('uuid');
// import { v4 as uuid } from 'uuid';
// const uuidv4 = require('uuid');

class Lists extends Component {

  render() {
    // console.log("problem:"+this.props.lists.length);
    // console.log("prob2:"+this.props.lists);
    // if(this.props.lists == 'undefined'){
    //   console.log("yo its undefined ");
    //   return;
    // }
    // If there are no lists, display a relevant message
    if (this.props.lists.length === 0) {
      return (
        <div id="listsDiv" className="List">
          <h2>Add new lists to get started!</h2>
        </div>
      );
    }

    // Otherwise, for each list, create a div
    var items = this.props.items;
    var lists = this.props.lists;
    var addItem = this.props.addItem;
    // console.log("at lists:"+lists.length);
    console.log("at lists:"+ this.props.lists);

    return (
      //<div key = 'uuid.v4'>
      <div key={uuidv4()}>
        {lists.map(function (listName) {
          return (
            <List name={listName} items={items[listName]} addItem={addItem.bind(this)} key={uuidv4()} />
            //key='uuid.v4'
          )
        })}
      </div>
    );
  }
}

export default Lists;
