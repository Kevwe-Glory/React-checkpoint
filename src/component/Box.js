import React from 'react'
import {Card, CardGroup } from 'react-bootstrap'



const Box = () => {
  return (
    <>
            <CardGroup>
        <Card>
            <Card.Body>
            <Card.Title>Express.js</Card.Title>
            <Card.Text>
            <p>
            Express.js is a popular web application framework for Node.js, designed to simplify the process of building server-side applications and APIs. It provides a minimal and flexible set of features that allow developers to create robust and scalable web applications.
            </p>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">
                <span>Routing,</span>
                <span>Error,</span>
                <span>Integrating with Database</span>
            </small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Database</Card.Title>
            <Card.Text>
            <p>
            Databases are used to store and manage data for web applications or other software systems. Backend developers work with databases to handle data persistence, retrieval, and manipulation.
            </p>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">
            <    span>DMS,</span>
                <span>Connecting to Databases,</span>
                <span>Querying and Manipulating Data:</span>
            </small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>MongoDB</Card.Title>
            <Card.Text>
            <p>
            MongoDB is a popular open-source NoSQL database that provides a flexible and scalable solution for storing and retrieving data. It is designed to handle large volumes of unstructured and semi-structured data, making it suitable for a wide range of applications.
            </p>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">
            <span>Query Language,</span>
            <span>Document Model,</span>
            <span>Indexes</span>
            </small>
            </Card.Footer>
        </Card>
        </CardGroup>
        </>
    )
}

export default Box