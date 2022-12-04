import { useParams } from "react-router-dom";
import GitHubUserList from "./GithubUserList";

export function ShowGithubUsers() {
    const {username} = useParams()
    return (
        <>
            <GitHubUserList username={username} />  
        </>
      
    )
}