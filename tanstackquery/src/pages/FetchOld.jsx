import { useEffect, useState } from "react"
import { fetchPosts } from "../API/Api"


export const FetchOld = () =>{
    const [ posts, setPosts] = useState([])


    const getPostData = async () => {
        try {   
            const res = await fetchPosts()
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getPostData()
    },[])


    return (
        <h1>
            Hellow FetchOld
        </h1>
    )


}