import { useEffect, useState } from "react"
import { fetchPosts } from "../API/Api"
import { useQuery } from "@tanstack/react-query"


export const FetchOld = () =>{
    // const [ posts, setPosts] = useState([])


    const getPostData = async () => {
        try {   
            const res = await fetchPosts()
            // console.log(res)
            return res.data 
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(()=> {
    //     getPostData()
    // },[])


    const{ data } = useQuery({
        queryKey : ['posts'],     //? useState
        queryFn : getPostData,    //? useEffect
    })

    console.log(data);
    



    return (
        <h1>
            <ul>
                {
                    data?.map((curruentElem,index)=> {
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