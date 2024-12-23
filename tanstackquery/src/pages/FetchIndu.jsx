import { useEffect, useState } from "react"
import { fetchIndividualData } from "../API/Api"
import { NavLink, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

export const FetchIndu = () => {

    // const [ data, setData] = useState([])
    
    let { id } = useParams()

    const handleData = async () => {
        return await fetchIndividualData(id)
        
    }





    

    // useEffect(()=> {
    //     handleData()
    // },[])

    let {data} = useQuery(
        {
            queryKey : ['fetchIndividual'], // useState
            queryFn : handleData ,      // useEffect

        }
    )
    

    console.log(data);
    
   
    
    


    return(
        <>
        <h1>
            {
                data ?? <li>
                    {
                        data.body
                    }
                </li>
            }
        </h1>
        </>
    )
}


