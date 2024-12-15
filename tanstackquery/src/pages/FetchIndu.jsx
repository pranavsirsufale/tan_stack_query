import { useEffect, useState } from "react"
import { fetchIndividualData } from "../API/Api"
import { NavLink, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

export const FetchIndu = () => {

    // const [ data, setData] = useState([])

    const handleData = async () => {
        const data = await fetchIndividualData(id)
        console.log(data.data);
        
    }


    // useEffect(()=> {
    //     handleData()
    // },[])

    const {data,id} = useQuery(
        {
            queryKey : ['fetchIndividual'], // useState
            queryFn : handleData ,      // useEffect

        }
    )
    console.log(data);
    


    return(
        <>
        <h1>
            hellow everyone
        </h1>
        </>
    )
}


