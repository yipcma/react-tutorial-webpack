import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox'

const data = [
  {id: 1, author: 'Pete Hunt', text: 'This is one comment'},
  {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
];

// Render the main component into the dom
ReactDOM.render(<CommentBox data={data} />, document.getElementById('app'));
