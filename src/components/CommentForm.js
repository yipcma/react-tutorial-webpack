import React from 'react'

const CommentForm = React.createClass({
  render() {
    return (
      <div className="commentForm">
        <form className="commentForm">
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Say something..." />
          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }
})

export default CommentForm
