import React, { Component } from 'react'
import SingleBook from "./SingleBook"
import { Container,Row,Col } from 'react-bootstrap'

 class Homepage extends Component {
  state ={
      books:[]
  }


  componentDidMount = async ()=>{
      let response = await fetch ("http://localhost:3000/books")
      console.log(response)
      if (response.ok){
          let books = await response.json()
          this.setState({
              books:books.data.slice(0,50)
          })
      }

  }
    render() {
        return (
            
            <Container>
                <Row>
             {this.state.books.map(book=>
                <Col md={4} sm={6} lg={2}>
                <SingleBook item ={book}/>
                </Col>
                )}
                </Row>   
                </Container>
            
        )
    }
}


export default Homepage