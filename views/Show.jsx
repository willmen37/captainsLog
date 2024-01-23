import React from 'react'

const Show = ({logs, index}) => {
    console.log(logs, "SHOW")
    // {log.title}
    // {log.entry}
    // {log.shipIsBroken? "ALERT!!! SHIP DAMAGE": "No damage reported"}
  return (
    <div>
        Show
        {logs.title}
        <br/>
        <a href='/index'>Back to index</a>
    
    </div>
  )
}

export default Show