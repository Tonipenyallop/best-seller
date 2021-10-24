// creator is Taesu Kim hahah

import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state = {
      lists: [], // this holds the name of each list
      items: {}, // this property names of this object are the names of the lists; their values are arrays of the items in each list
      input: "" // i added
    };
  }

  /**
   * This function takes the state of an AddList component as its parameter
   * and updates the state of this App component by adding a new entry to the "lists"
   * array and then adding a new property in the "items" object that has the same name
   * as the value put into the "lists" array. It should then re-render this App component.
   */
  handleAddList(s) {
    // Implement this function!

    var newItems = s.items;
    var newLists = s.lists;
    // console.log(s.items);

    if (!this.state.lists.includes(s.in)) {

      this.setState({
        //items: [s.items],
        items: newItems,
        lists: newLists,
        input: s.in
      },
        // () => console.table(this.state)
      )
    }


    // works fine till it's here



  }


  /**
   * This function takes the state of an AddItem component as its parameter
   * and updates the state of this App component by adding a new value to the 
   * appropriate array in the "items" property of the state. Keep in mind that
   * the property names of "items" are the names of each list, which is mapped
   * to an array of the items in that list. After updating the "items" part of 
   * the state, this function  should then re-render this App component.
   */
  handleAddItem(s) {
    // Implement this function!
    var originalInput = s.org;

  

    this.state.items[originalInput].push({name : [s.in]});
    // console.log(this.state.items);
    this.setState({
      items : this.state.items
    },
    // () => console.table(this.state)
    )





  }

  /**
   * Renders the component.
   */
  render() {

    // console.log("here must work:"+this.state.lists);
    // console.log("items in APP:"+ this.state.items);
    // console.log("lists in APP:"+ this.state.lists);

    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)} />
        </div>
      </div>
    );
  }

}

export default App;
