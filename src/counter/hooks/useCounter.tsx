import { useState } from "react"

export const useCounter = () => {

    const [counter, setcounter] = useState(5)
 
    const handleAdd = () => {
        setcounter(counter + 1)
    }
    const handleSubstract = () =>
         {setcounter(counter - 1)}

    const handleReset = () =>
         {setcounter(5)}
    
  return {
    //Values
    counter,

    //Methods / Actions
    handleAdd,
    handleSubstract,
    handleReset,
  }
}
