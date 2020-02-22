import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'
import withLoader from '../HOC/withLoader'

class UsersGrid extends Component {
  render() {
    const { users } = this.props

    return (
      <section className="py-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        { 
          users.map(user => (
            <UserCard
              key={user.id}
              username={user.username}
              email={user.email}
              name={user.name}
            />
          ))
        }
      </section>
    )
  }
}

export default withLoader('users', UsersGrid)
