import React, { Component } from 'react'

export default class Discord extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col min-h-screen">
          <div className="bg-red-500 flex">
            <div className="bg-red-300 w-56 flex-none">Tailwind css</div>
            <div>rest of top bar</div>
          </div>
          <div className="flex-1 bg-blue-500 flex">
            <div className="bg-green-300 w-56 flex-none">Hashtag</div>
            <div className="bg-green-500 flex-1 flex justify-between">
              <div className="bg-indigo-300 flex-1">Display chat contents</div>
              <div className="bg-indigo-600">Users sidebar</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
