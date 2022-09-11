import { useState } from "react";
import "./styles.css";

export default function App() {
  const [set, newset] = useState({
    Fname: "",
    Mname: "",
    Lname: ""
  });
  // const[set1,newset1]=useState();
  // const[set2,newset2]=useState();
  const [setfetch, newfetch] = useState([]);
  // const[setfetch1,newfetch1]=useState(set1);
  // const[setfetch2,newfetch2]=useState(set2);
  const rese1 = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    console.log(name);
    newset({ ...set, [name]: value });
  };
  const fetchdata = (e) => {
    e.preventDefault();
    const newObj = { ...set };
    console.log(setfetch);
    newfetch([newObj]);
    newset({ Fname: "", Mname: "", Lname: "" });
    console.log(setfetch);
  };
  return (
    <>
      <form on onSubmit={fetchdata}>
        <input onChange={rese1} id="Fname" value={set.Fname}></input>
        <input onChange={rese1} id="Mname" value={set.Mname}></input>
        <input onChange={rese1} id="Lname" value={set.Lname}></input>
        <button>fetch data</button>
        {/* <h1>{setfetch}{setfetch1}{setfetch2}</h1> */}
      </form>
      {setfetch.map((currelm) => {
        return (
          <>
            <p> {currelm.Fname}</p>

            <p>{currelm.Mname}</p>
            <p>{currelm.Lname}</p>
          </>
        );
      })}
    </>
  );
}
