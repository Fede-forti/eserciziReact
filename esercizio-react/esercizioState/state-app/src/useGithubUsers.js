import { useState, useEffect } from "react";

export function useGithubUsers(username) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function fetchGithubUser(username) {
    setLoading(true);
    setError();

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();
        console.log(json);

        if (response.status !== 200){
          setError(new Error())
        }

        setData(json);
    } catch (error) {
        setError(error);
        setData(null);
    } finally {
        setLoading(false)
    }
  }

   useEffect(() => {
      fetchGithubUser(username)
    }, [username])

    return { data, error, loading}
   
  
}
