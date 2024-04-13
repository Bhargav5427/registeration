import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER_PENDING, UPDATE_USER_PENDING } from '../../../redux-saga/User/action/Action';

const Home = () => {

  let user = useSelector((state) => state.userReducer)
  let dispatch = useDispatch();
  const [view, setview] = useState({})


  // delete
  let handleDelete = (id) => {
    dispatch({ type: DELETE_USER_PENDING, payload: id })
  }


  // Update
  let viewModal = (id) => {
    let userData = user.user.find((user) => user.id == id)
    setview(userData)
  }
  let handleUpdate = (e) => {
    setview({ ...view, [e.target.name]: e.target.value })
  }
  let updateHandler = () => {
    dispatch({ type: UPDATE_USER_PENDING, payload: view })
  }
  return (
    <>
      <table class="table text-center">
        <thead className='table-dark'>
          <tr>
            <th scope="col">id</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
            <th scope="col">update</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {
            user.user?.map((val, ind) => {
              return (
                <>
                  <tr>
                    <th scope="row">{val.id}</th>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => viewModal(val.id)}>Update</button></td>
                    <td><button className='btn btn-danger' onClick={() => handleDelete(val.id)}> Delete</button></td>
                  </tr>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="card" style={{ width: "100%" }}>
                            <div class="card-body">
                              <form>
                                <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                                  <input type="email" name='email' class="form-control" value={view.email} onChange={handleUpdate} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                  <label for="exampleInputPassword1" class="form-label">Password</label>
                                  <input type="text" name='password' class="form-control" value={view.password} onChange={handleUpdate} id="exampleInputPassword1" />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>

              )
            })
          }
        </tbody>
      </table >
    </>
  )
}

export default Home