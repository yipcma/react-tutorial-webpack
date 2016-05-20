import React from 'react'
import Comment from './Comment'

const CommentList = React.createClass({
  render() {
    return (
      <div className="commentList">
        <Comment author="John">This is one comment</Comment>
        <Comment author="Mary"> This is comment number two. </Comment>
      </div>
    )
  }
})

export default CommentList
