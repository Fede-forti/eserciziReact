import React from "react";
import { useState, useEffect } from "react";

export function Githubuser({ username }) {
  const [data, setData] = useState();

  async function fetchGithubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const json = await response.json();
    console.log(json)
    setData(json);
  }

  useEffect(() => {
    fetchGithubUser(username)
  }, [username])

  return <div>{data && <h1>{data.login}</h1>}</div>;
}
