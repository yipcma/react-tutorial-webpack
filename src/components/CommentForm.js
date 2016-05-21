import React from 'react'

const CommentForm = React.createClass({
  getInitialState() {
    return {author: '', text: ''}
  },

  // this uses events, could have used refs, and no need for state in form
  handleAuthorChange(e) {
    this.setState({author: e.target.value})
  },

  handleTextChange(e) {
    this.setState({text: e.target.value})
  },

  render() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
        <input type="submit" value="Post" />
      </form>
    )
  }
})

export default CommentForm
