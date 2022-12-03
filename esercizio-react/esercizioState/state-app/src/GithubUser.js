import React from "react";
import { useState, useEffect } from "react";

export function Githubuser ({ username }) {

const [data, setData]= useState()



    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json)
            setData(json)
        })
    }, [username])

    return (
        <div>
            { data && <h1>{data.login}</h1>}
        </div>
    )
}