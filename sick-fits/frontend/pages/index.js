import { useState } from "react";

const Home = () => {
  const [id, setId] = useState(0);
  return (
    <h1>
      Hello index {id}
      <button onClick={() => setId(id + 2)}>+</button>
    </h1>
  );
};
export default Home;
