import { useEffect, useState } from "react"
import { fetchPosts } from "../API/Api"


export const FetchOld = () =>{
    const [ posts, setPosts] = useState([])


    const getPostData = async () => {
        try {   
            const res = await fetchPosts()
            console.log(res)
            res.status === 200 ? setPosts(res.data) :  []
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getPostData()
    },[])


    return (
        <h1>
            <ul>
                {
                    posts.map((curruentElem,index)=> {
                      const {id , title ,body} = curruentElem

                     return (
                        <li key={id} >
                            { body}
                        </li>
                     )
                    })
                }
            </ul>
        </h1>
    )


}