import { useState, useEffect } from "react";
function Task({ name, completed }){

  const [isCompleted, setIsCompleted] = useState(false)

  const [btnDeshabilitado, setBtnDeshabilitado] = useState(false)
  useEffect(()=> {
    if(isCompleted == true){
      setBtnDeshabilitado(true)
    }else{
      setBtnDeshabilitado(false)
    }
  }, [isCompleted])

  return (
    <div>
      <span>{name}</span>
      <button disabled={btnDeshabilitado} onClick={()=>setIsCompleted(true)}>completed</button>
    </div>
  );
};

export default Task;
