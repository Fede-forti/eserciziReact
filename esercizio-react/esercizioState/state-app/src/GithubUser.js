import React from "react";
import { useGithubUsers } from "./useGithubUsers";

export function GithubUser({ username }) {
  const { data, loading, error  } = useGithubUsers(username);

/*   function handleGetUserData() {
    onFetchUser(username)
  } */

  return (
    <div>
        {loading && <h1>Loading ...</h1>}
        {error && <h1>There has been an error </h1>}
        { data && <h1>{data.login}</h1> }
    </div>
  )
    
}
