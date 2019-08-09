import React from 'react'
import { Link } from 'react-router-dom';
import A from '../App';

export default function Navbar() {

 const homePath = "/"
 const loginPath = "/login/"
 const getStartedPath = "/register/"

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-700 p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to={homePath}><img className="fill-current h-10 w-10 mr-2" src="https://thelogo.shop/wp-content/uploads/2016/12/09-Letter-B.png" /></Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="text-base block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About us
            </a>
            <a href="#responsive-header" className="text-base block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Learn more
            </a>
            <a href="#responsive-header" className="text-base block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact us
            </a>
          </div>
          <div>
            <Link to={loginPath}> <a className="text-base block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Log In</a></Link>
            <Link to={getStartedPath}><a href="#responsive-header" className="text-base block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Get started</a></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
