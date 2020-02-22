import React, { Component } from "react"

const withLoader = (propValue, WrappedComponent) => {
  return class WithLoader extends Component {
    render() {

      const data = this.props[propValue]

      return (
        !data.length ? (
          <div className="flex justify-center">
              <p className="shadow-md px-4 py-2 rounded-full text-xl bg-white max-w-sm text-orange-500">Cargando...</p>
            </div>
        ) : (
          <WrappedComponent {...this.props} />
        )
      )
    }
  }
}

export default withLoader
