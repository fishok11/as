import { useEffect } from "react";

const Congradulations = () => {
  useEffect(() => {
    async function loadData(){
      const res = await fetch("http://localhost:3002/group");
      const data = await res.json();
      console.log(data)
      return data;
    };
    loadData();
  }); 

  return (
    <h1>Готово!!!</h1>
  )
};

export default Congradulations;