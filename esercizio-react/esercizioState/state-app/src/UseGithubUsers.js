import useSWR from 'swr'


const fetcher = url => fetch(url).then(response => response.json())

export function UseGithubUsers(username) {
    const { data, error } = useSWR(`https://api.github.com/users`, fetcher )
    

  return (
    <div>
        { !data && !error && <h3>Loading</h3>}
        { error && <h3>An error is occurred</h3>}
        { data && !error && <ul>
                {data.map(user => (
                    <li key={user.login}>{user.login}</li>
                )) }
            </ul>}
    </div>
  )
  
  }
  