import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { POST_USER_PENDING } from '../../../redux-saga/User/action/Action'

const UserHome = () => {

  const email = useRef()
  const password = useRef()
  let dispatch = useDispatch()
  let Login = () => {
    let data = {
      email: email.current.value,
      password: password.current.value
    }
    dispatch({ type: POST_USER_PENDING, payload: data })
  }
  return (
    <>

      <div className="login-form">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label" >Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label" >Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" ref={password} />
        </div>
        <button type="submit" class="btn btn-primary" onClick={Login}>Login</button>
      </div>

    </>
  )
}

export default UserHome