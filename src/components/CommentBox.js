import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    )
  }
})

export default CommentBox
