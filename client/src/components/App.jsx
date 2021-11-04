import React, { useState } from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state={}

  clickAnywhere = (e, widget) => {
    // console.log(widget);
    const data = {};
    data.widget = widget;
    data.time = Date();
    function getMyPathByIndex(element){
      if (element == null){
        return '';
      } else if (element.id) {
        return '#' + element.id
      } else if (element.parentElement == null) {
        return 'html'
      } else if (element.className) {
        return getMyPathByIndex(element.parentElement) + ' > ' + element.nodeName.toLowerCase() + '.' + element.className
      }
      return getMyPathByIndex(element.parentElement) + ' > ' + element.nodeName.toLowerCase() + ':nth-child(' + getMyIndex(element) + ')';
    }
    function getMyIndex(element){
      if(element == null) {
        return -1;
      } else if(element.parentElement == null) {
        return 0;
      }
      let parent = element.parentElement;
      for(var index = 0; index < parent.childElementCount; index++) {
        if(parent.children[index] == element) {
          return index + 1;
        }
      }
    }
    data.element = getMyPathByIndex(e.target);
    axios
      .post('/interactions', data)
      // .then((response) => {
      //   response.end()
      // })
      .catch((err) => {
        console.log(err);
        throw err;
      })
  }

  // delcare state variables
  render() {
    return (
      <React.Fragment>
        {this.props.children(this.clickAnywhere)}
      </React.Fragment>
    );
  }
}

// { /* <div id="mainContainer"> */ }
// { /* </div> */ }
