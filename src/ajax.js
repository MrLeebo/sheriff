import axios from 'axios';

const client = axios.create({ baseURL: "http://localhost:4001" })

client.interceptors.request.use(config => ({
  ...config,
  params: {
    ...config.params,
    app: 'test'
  },
  headers: {
    ...config.headers,
    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
  }
}));

export const logIn = async user => client.post("/users/login", user)
export const current = async user => client.get("/users/current")
export const forgotPassword = user => client.post("/users/reset_password", { user })
export const resetPassword = user => client.put("/users/reset_password", { user })
export const createAccount = user => client.post("/users", { user })
export const confirm = (confirmation_token, user) => client.patch("/users/confirmation", { confirmation_token, user })
