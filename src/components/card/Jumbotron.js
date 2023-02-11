import React from 'react'

const Jumbotron = ({
    title,
    subTitle = "Welcome to React E-commerce"
}) => {
  return (
    <div>
        <div className="row">
            <div className="col">
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default Jumbotron