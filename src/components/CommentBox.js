import React from 'react'
import axios from 'axios'
import CommentList from './CommentList'
import CommentForm from './CommentForm'


const CommentBox = React.createClass({

  loadCommentsFromServer() {
    axios.get(this.props.url).then(response => this.setState({data: response.data}))
  },

// be super careful about the type in setState. It should be array.
  handleCommentSubmit(data) {
    axios.post(this.props.url, data).then(response => this.setState({data: this.state.data.concat([response.data])}))
  },

  getInitialState() {
    return {data: []}
  },

  componentDidMount() {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },



  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    )
  }
})

export default CommentBox
