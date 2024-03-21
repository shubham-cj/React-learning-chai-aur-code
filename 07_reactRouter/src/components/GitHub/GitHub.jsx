import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/shubham-cj')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-8 text-3xl'>
        GitHub Repositories: <span className='font-bold'>{data.public_repos}</span>
        <div className='flex justify-center mt-5'>
            <img className='box-border rounded-xl' src={data.avatar_url} alt="profile picture" width={300}/>
        </div>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shubham-cj')
    return response.json()
}
