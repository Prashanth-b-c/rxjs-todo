import axios from "axios";
import React, { useEffect, useState } from "react";
import { prodSubject } from "./subject";
import "./App.css";
import GetTodo from "./GetTodo";
import Status from "./Status";

function App() {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const result = response.data;
        setTodo(result.slice(0, 15));
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  useEffect(()=>{
    prodSubject.subscribe(data=> {
        console.log("data received in prod list", data);
    });
}, []);



  // const handleChange = (id) => {
  //   const list = [...todo];
  //   console.log("**", list)
  //   const result = list.map((ele) => {
  //     if (ele.id === id) {
  //       return { ...ele, completed: !ele.completed };
  //     } else {
  //       return ele;
  //     }
  //   });
  //   setTodo(result);
  // };

  const handleChange = (id) => {
    const list = [...todo];
    console.log("**", list)
    const result = list.map((ele) => {
      if (ele.id === id) {
        return { ...ele, completed: !ele.completed };
      } else {
        return ele;
      }
    });

    prodSubject.next(setTodo(result));
  };



  return (
    <div className="" style={{background:' #6f42c1'}}>
      <h1>Jsonplaceholder Todo</h1>
      <div style={{ marginTop: "40px" }} className="container-lg">
        <div className="row">
          {/* <h3>Active Todo</h3> */}
          <div className="col-md-6" style={{background:'#f8f9fa'}}>
            <GetTodo todo={todo} handleChange={handleChange} />
          </div>
          {/* <h3>Complted Todo</h3> */}
          <div className="col-md-6" style={{background:'#f8f9fa'}}>
            <Status todo={todo} handleChange={handleChange} />
          </div>
        </div>
      </div>
     <br></br> 
    </div>
  );
}

export default App;
