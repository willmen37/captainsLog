import React from 'react'

const New = () => {
  return (
    <div>New Log
      <br/>
      <br/>
      <form action='/create' method='POST'>
       Title: <input type="text" name='title'/>
       <br/>
       <br/>
       Entry: <input type="text" name='entry'/>
       <br/>
       <br/>
       Is ship broken?: <input type="checkbox" name="shipIsBroken" />
       <br/>
       <br/>
       <button>SUBMIT</button>
      </form>
    
    
    </div>
  )
}

export default New