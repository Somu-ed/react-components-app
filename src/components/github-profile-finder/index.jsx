import { useEffect, useState } from "react";
import UserCard from "./userCard";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("Somu-ed");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function handleSubmit() {
		fetchGithubUserData();
	}

  async function fetchGithubUserData() {
    // setIsLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data) {
        setUserData(data);
        setIsLoading(false);
				setUsername('');
    }

    console.log(data);
  }

  useEffect(() => {
    fetchGithubUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if (isLoading) {
    return <div>Please wait... Loading Data!</div>
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Enter Github Username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
			{
				userData !== null ? 
				<UserCard user={userData}/>
				: null
			}
    </div>
  );
}
