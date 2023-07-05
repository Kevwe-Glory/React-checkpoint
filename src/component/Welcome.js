import React from 'react'
import { Alert } from'react-bootstrap'

const Welcome = () => {
    return (
    <>
            <Alert variant="black">
        <Alert.Heading><b>Hey Archers, Nice to see you!!! </b></Alert.Heading>
        <p>
        Backend development refers to the process of building and maintaining the server-side of web applications or software systems. It involves working with server-side programming languages, databases, APIs, and infrastructure to handle data storage, processing, and communication between the application's components.
        </p>
        <hr />
        <p className="mb-0">
        <b>Here are some key aspects of backend development</b>
        </p>
        </Alert>
    </>
    )
}

export default Welcome