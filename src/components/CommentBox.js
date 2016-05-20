import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
//import $ from 'jquery'
import axios from 'axios'

const CommentBox = React.createClass({
  getInitialState() {
    return {data: []}
  },

  loadCommentsFromServer() {
    axios.get(this.props.url).then(response => this.setState({data: response.data}))
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
        <CommentForm />
      </div>
    )
  }
})

export default CommentBox
