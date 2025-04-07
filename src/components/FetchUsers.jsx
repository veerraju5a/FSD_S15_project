import { useEffect, useState } from "react";
import axios from "axios";

function FetchUsers() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:7070/user/userinfo", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div><h1>Unauthorized User to fetch Please Login ...</h1></div>;
  }

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default FetchUsers;
