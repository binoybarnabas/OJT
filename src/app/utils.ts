import axios from 'axios'
import { cache } from 'react'
 
export const getData = cache(async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data
})
