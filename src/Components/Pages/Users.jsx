import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'

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
        <h1 className="text-2xl text-gray-700">Home</h1>
        <section className="py-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          { users.map(user => <UserCard key={user.id} username={user.username} email={user.email} name={user.name} />) }
        </section>
      </>
    )
  }
}

export default Users
