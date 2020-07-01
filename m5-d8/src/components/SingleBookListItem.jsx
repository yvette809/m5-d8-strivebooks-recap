import React from "react"
import {Media,Button} from "react-bootstrap"



 class SingleBookListItem extends React.Component{


    deleteBook = async(asin)=>{
        let response = await fetch ("http://localhost:3000/books" + asin,{
            method: "DELETE"
        })
        
          if (response.ok){
               this.props.onDelete(asin)
            // this.setState({books:this.state.books.filter(b=> b.asin!== asin)})
    }
}
    

    render(){
        return(
            <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src={this.props.item.img}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>{this.props.item.title}</h5>
    <p>
      {this.props.item.category} - {this.props.item.price}
      <Button variant="danger" className = "ml-5" onClick = {()=>this.deleteBook(this.props.item.asin)}>X</Button>
    </p>
    
  </Media.Body>
</Media>
        )


    }
}



export default SingleBookListItem