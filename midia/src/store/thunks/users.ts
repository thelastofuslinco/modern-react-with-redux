import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserModel } from '../../model/userModel'
import axios from 'axios'

export const getUsers = createAsyncThunk<Array<UserModel>>(
  'user/get',
  async () => {
    const response = await axios.get('http://localhost:3001/users')

    return response.data
  }
)

export const addUser = createAsyncThunk<UserModel, string>(
  'user/add',
  async (name) => {
    const response = await axios.post('http://localhost:3001/users', { name })

    return response.data
  }
)

export const deleteUser = createAsyncThunk<number, number>(
  'user/delete',
  async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`)

    return id
  }
)
