import React from "react"
import {Card,Button} from "react-bootstrap"


function SingleBook (props){
    return(
        <Card >
  <Card.Img src = {props.item.img} />
  <Card.Body>
    <Card.Title>{props.item.title}</Card.Title>
    <Card.Text>
      {props.category}
    </Card.Text>
    <Button variant="primary">Details</Button>
  </Card.Body>
</Card>
    )
}


export default SingleBook