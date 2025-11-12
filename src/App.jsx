import React from 'react'

function App() {
  const Name ="karan sharma";
  const Obj = {
    name:"karan",
    email:"rahulSharma202005@gmail.com"
  }

  const UserArray =['sam','peter','bruce']
  let X= 10;
  let Y=20;
  function fruit(){
    return "Apple"
  }
  function Sum(a,b){
    return a+b

  }

  function Operation(A,B,o_p){
    
    if(o_p=="+"){
      return A+B;
    }else if(o_p=="-"){
      return A-B;
    }else{
      return A*B
    }
    
  }

  function Cliclme(){
    alert("hhehehhe")
  }

  const Fruit=(fruitname)=>{
    alert(fruitname)

  }
  return (
    <div>
      <h1>{Name?Name:"user not found"}</h1>
      <h2>{X+Y}</h2>
      {fruit()}
      <h3>{Sum(10,20)}</h3>
      <h1>{Operation(20,30,"+")}</h1>
      <h2>{Obj.name}</h2>
      <h3>{UserArray[0]}</h3>
      <button onClick={Cliclme} >click me</button>
      <button onClick={()=>{
        Fruit("apple")
      }} >Apple</button>
    </div>
  )
}

export default App
