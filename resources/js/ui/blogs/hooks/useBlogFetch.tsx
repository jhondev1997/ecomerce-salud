import axios from "axios"
import { useEffect, useState } from "react"
import { PropsBlogs } from "@/interfaces/PropsBlogs"

export const useBlogFetch = () => {

  const [datas, setDatas] = useState<PropsBlogs[]>()
  const [stateFetch, setStateFetch] = useState<unknown>()

  const getData = async()=>{

    try {
      // const {data} = await axios.get('http://localhost:8000/api/blogs')
      const {data} = await axios.get('/api/blogs')
      setDatas(data.data)
    } catch (error) {
      setStateFetch(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return {datas, stateFetch}
}

export const useOneBlogFetch = (id:number)=> {
  const [datas, setDatas] = useState<PropsBlogs>();
  const [stateFetch, setStateFetch] = useState<unknown>()

  const getBlog = async()=>{

    if(!id) return


    try {
      const {data} = await axios.get(`/api/blog/${id}`);
      setDatas(data.data)
    } catch (error) {
      setStateFetch(error);
    }
  }

  useEffect(() => {
    getBlog();
  }, [id])


  return {datas, stateFetch}
}
