import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export default function GitHubUserList() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  function handleInputChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  function handleButton() {
    setArray([...array, input]);
  }

  useEffect(() => {
    console.log(array);
  }, [array]);

  return (
    <div>
      <input name="input" value={input} onChange={handleInputChange} />
      <button onClick={handleButton}>search</button>
      <div>
        {array.map((user, index) => (
          <GithubUser key={index} username={user} />
        ))}
      </div>
    </div>
  );
}
