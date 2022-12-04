import useSWR from 'swr'


const fetcher = url => fetch(url).then(response => response.json())

export function UseGithubUsers(username) {
    const { data, error, mutate } = useSWR(
        username ? `https://api.github.com/users` : null, 
        fetcher )

    function handleRefetchUser(){
        mutate()
    }

    return{
        users: data,
        error,
        isLoading: !data && !error,
        onRefresh: handleRefetchUser,
    }
}

    export function GitHubUser({ username }) {
        const { data, onRefresh } = UseGithubUsers(username);  
        
        return (
                <div>
                  <button onClick={onRefresh}>Refresh users</button>
                  {data && (
                    <div>
                      <h1>{data.name}</h1>
                      <img src={data.avatar_url} alt="user" className="avatar" />
                    </div>
                  )}
                </div>
              );
            }
  