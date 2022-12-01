import React from 'react'
import {Card,Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowData.css'

function ShowData(props) {
  return (
    <Container>
    <Row>
    {props.need.map((item)=>{
      return(
        <Col xs={4} key={item.id} >
        <Card style={{ width: '18rem' }} className="card">
        <Card.Body>
          <Card.Title><b>User_Id </b>: {item.userId}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><b>title </b>: {item.title}</Card.Subtitle>
          <Card.Text>
            <b>body </b>: {item.body}
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
       
        
      )
  })}
    </Row>
    </Container>
  )
}

export default ShowData
