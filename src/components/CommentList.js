import React from 'react'
import Comment from './Comment'

const CommentList = React.createClass({
  renderComment(comment) {
    return (
      <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
    )
  },

  render() {
    return (
      <div className="commentList">
        {this.props.data.map(this.renderComment)}
      </div>
    )
  }
})

export default CommentList
