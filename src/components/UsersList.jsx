import React, { Component } from 'react'
import { connect } from 'react-redux'

export class UsersList extends Component {
  render() {
    return (
      <div>UsersList</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)