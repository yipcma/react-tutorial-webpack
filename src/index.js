import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox'


// Render the main component into the dom
// AMAZING BUG: add http:// to url to prevent CORS errors

ReactDOM.render(<CommentBox url="http://localhost:3000/db" pollInterval={2000} />, document.getElementById('app'));
