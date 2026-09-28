import { createContext, useContext, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
//Prob Drilling
/*function App() {
  const theme='dark';
  return (
    <div style={{border:'yellow 2px solid'}}>
      <h1>Learn Prob Drilling</h1>
      <h2>App(Parent)</h2>
      <ComponentA theme={theme}/>
    </div>
  )
} 

function ComponentA({theme}){
  return (<div style={{border:'red 2px solid'}}>
    <h2>ComponentA</h2>
    <ComponentB theme={theme}/>;
  </div>)
}

function ComponentB({theme}){
   return (<div style={{border:'green 2px solid'}}>
    <h2>ComponentB</h2>
    <ComponentC theme={theme}/>;
  </div>)
}

function ComponentC({theme}){
 return (<div style={{border:'blue 2px solid'}}>
  <h2>ComponentC</h2>
    <ThemedComponent theme={theme}/>;
  </div>)}

function ThemedComponent({theme}){
   return (<div style={{border:'red 2px solid'}}>
    <h2>Themed Component</h2>
    <h1>Themed Component is:{theme}</h1>
  </div>)
}
*/

//Use of useContext
  /*const MyContext=createContext('blue');
function App() {
  //const theme='dark';


  return (
    <div style={{border:'yellow 2px solid'}}>
      <h1>Learn Prob Drilling</h1>
      <h2>App(Parent)</h2>
      <ComponentA/>
    </div>
  )
} 

function ComponentA(){
  return (<div style={{border:'red 2px solid'}}>
    <h2>ComponentA</h2>
    <ComponentB/>;
  </div>)
}

function ComponentB(){
   return (<div style={{border:'green 2px solid'}}>
    <h2>ComponentB</h2>
    <ComponentC/>;
  </div>)
}

function ComponentC(){
 return (<div style={{border:'blue 2px solid'}}>
  <h2>ComponentC</h2>
    <ThemedComponent />;
  </div>)}

function ThemedComponent(){
  const theme=useContext(MyContext)
   return (<div style={{border:'red 2px solid'}}>
    <h2>Themed Component</h2>
    <h1>Themed Component is:{theme}</h1>
  </div>)
}*/


//use of provider
const MyContext=createContext('blue');
function App() {
  //const theme='dark';


  return (

   <MyContext.Provider value='green'>
     <div style={{border:'yellow 2px solid'}}>
      <h1>Learn Prob Drilling</h1>
      <h2>App(Parent)</h2>
      <ComponentA/>
    </div>
   </MyContext.Provider>
  )
} 

function ComponentA(){
  return (<div style={{border:'red 2px solid'}}>
    <h2>ComponentA</h2>
    <ComponentB/>;
  </div>)
}

function ComponentB(){
   return (<div style={{border:'green 2px solid'}}>
    <h2>ComponentB</h2>
    <ComponentC/>;
  </div>)
}

function ComponentC(){
 return (<div style={{border:'blue 2px solid'}}>
  <h2>ComponentC</h2>
    <ThemedComponent />;
  </div>)}

function ThemedComponent(){
  const theme=useContext(MyContext)
   return (
   <div style={{border:'red 2px solid'}}>
    <h2>Themed Component</h2>
    <h1>Themed Component is:{theme}</h1>
  </div>)
}

export default App
