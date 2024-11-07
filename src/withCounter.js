import React,{ useState } from "react"

 const withCounter = (EnhanceCoponent, intialvalue) => {
  return function NewComponent (props) {
    const [counter, setCounter] = useState(intialvalue)

    return (
        <div>
            <EnhanceCoponent counter={counter}/>
        </div>
    )
  }
} 

export default withCounter