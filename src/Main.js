import React from 'react'
import { Link } from 'react-router-dom';
import LoggedIn from './LoggedIn';

export function renderMain(user, logOut) {
  return (
    <React.Fragment>
      <div>
        <h2>Welcome, {user.first_name} {user.last_name}</h2>
        <img src={user.gravatar_url} alt="" />
      </div>

      <Link to="/create_account"><button type="button">Create Account</button></Link>
      <button onClick={logOut}>Log Out</button>
    </React.Fragment>
  )
}

export default function Main() {
  return (
    <LoggedIn token={sessionStorage.getItem("token")}>{renderMain}</LoggedIn>
  )
}
