import React, { Component } from 'react'
import UsersGrid from '../Organisms/UsersGrid'

class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const users = await res.json()

    this.setState({ users })
  }

  render() {
    const { users } = this.state
    return (
      <>
        <h1 className="text-2xl text-gray-700">Usuarios</h1>
        <UsersGrid users={users} />
      </>
    )
  }
}

export default Users
