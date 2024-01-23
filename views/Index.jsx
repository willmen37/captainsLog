import React from 'react'

const Index = () => {
  return (
    <div>
    <nav>
        <a href="/new">New log</a>
    </nav>
    <h1>Index Page</h1>
    
    <ul>
      {logs.map((log, i)=>{
        <li key={i}>
        {log.title}
        </li>


      })}  
    </ul>
    
    </div>
  )
}

export default Index
