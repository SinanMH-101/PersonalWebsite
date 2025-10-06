import { useEffect, useState } from "react";
import Header from "./componenets/Heading";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // fetch data from your backend route
    fetch("/api/projects/1") // thanks to the proxy, this will call http://localhost:3001/api/projects/1
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
      });
  }, []);

  return (
    <div>
      <Header />
      <h2>Backend says:</h2>
      <p>{message}</p>
    </div>
  );
};

export default App;