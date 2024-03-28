import React from 'react'

type GreetProps = {
    name: string
    message: number 
    isLoggedIn: boolean
}
const Greet = ( props: GreetProps) => {
  return (
    <div className="text-3xl font-bold">
          <h2>
              {props.isLoggedIn ? `${props.message} ${props.name}`: "Welcome Guest"}
         </h2>
    </div>
  )
}

export default Greet
