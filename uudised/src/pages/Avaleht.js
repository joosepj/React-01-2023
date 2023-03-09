import { useEffect, useState } from "react";

function Avaleht() {
  const [postitused, uuendaPostitused] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => uuendaPostitused(data))
  }, []);



  return (
  <div>
    <div>Avaleht</div>
    <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="" />
    {postitused.map(element =>
      <div>
       <div><u>{element.userId}</u></div>
       <div><b>{element.id}</b></div>
       <div>{element.title}</div>
       <div>{element.body}</div>
      </div>
       )}
  </div>  );
}

export default Avaleht