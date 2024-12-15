import { useEffect, useState } from "react"
import { fetchPosts } from "../API/Api"
import { useQuery } from "@tanstack/react-query"
import { NavLink } from "react-router-dom"

export const FetchOld = () =>{
   
    const getPostData = async () => {
        try {   
            const res = await fetchPosts()

            return res.data 
        } catch (error) {
            console.log(error)
        }
    }


    const{ data , isLoading, isError , error } = useQuery({
        queryKey : ['posts'],     //? useState
        queryFn : getPostData,    //? useEffect
        staleTime: 10000
    })


    if ( isLoading ) return <p> Loading... </p>
    if ( isError ) return <p> Error :  { error.message || 'Something Went Wrong' } </p>
    
    



    return (
        <h1>
            <ul>
                {
                    data?.map((curruentElem,index)=> {
                      const {id , title ,body} = curruentElem

                     return (
                        <NavLink to={`/data/using/rq/${id}`} >

                        <li key={id} >
                            { body}
                        </li>

                        </NavLink>
                     )
                    })
                }
            </ul>
        </h1>
    )


}