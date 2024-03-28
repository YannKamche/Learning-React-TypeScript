import React from 'react'

type GreetProps = {
    name: string
}
const Greet = ( props: GreetProps) => {
  return (
    <div className="text-3xl font-bold">
          <h2>I am learning { props.name }</h2>
    </div>
  )
}

export default Greet
