

import React, { useState, useEffect } from "react";

function MyCount(){


    // state

    const [counter, setCounter] = useState(0);
    const [demo, setDemo] = useState([1,2,3,3]);





    // func

    

    const handleClick = () => {
        setCounter(counter+1)


        setTimeout(() => {

            let newArray = [...demo]
            newArray[1]='ashu'
            setDemo(newArray)
        }, 5000);

        console.log(counter)

    }




    // use effect
    useEffect(()=>{

        console.log("USE EFFECT 1")

    },[demo ])

    return (
    <div>

        <h1>{counter } {demo}</h1>
        <button onClick={handleClick}> click me    </button>

    </div>


    )

}


export default MyCount;