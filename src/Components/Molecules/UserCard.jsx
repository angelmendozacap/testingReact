import React, { Component } from 'react'

export default class UserCard extends Component {
  render() {
    const { username, name, email } = this.props

    return (
      <article className="p-4 rounded shadow-md bg-white hover:bg-gray-100">
        <h3 className="text-blue-500 font-bold text-xl">{username}</h3>
        <small className="text-gray-900">{name}</small>
        <p className="text-gray-600">{email}</p>
      </article>
    )
  }
}
