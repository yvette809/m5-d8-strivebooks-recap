import React, { Component } from 'react'
import SingleBookListItem from "./SingleBookListItem"
import { Container,Row,Col } from 'react-bootstrap'

 class Backoffice extends Component {
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
            
             {this.state.books.map(book=> 
                <SingleBookListItem item ={book}
                 onDelete = {(asin)=> 
                    this.setState({
                    books:this.state.books.filter(book=>book.asin!==asin)})}
                
                />
              
                )}
                
                </Container>
            
        )
    }
}


export default Backoffice