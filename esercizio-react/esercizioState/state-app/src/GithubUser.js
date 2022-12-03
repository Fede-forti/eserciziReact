import React from "react";
import { useGithubUsers } from "./useGithubUsers";

export function GithubUser({ username }) {
  const { data } = useGithubUsers(username);

  return <div>{data && <h1>{data.login}</h1>}</div>;
}
