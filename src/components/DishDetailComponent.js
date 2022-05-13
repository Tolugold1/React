import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetailComponent extends React.Component {


  render() {
    const commentsDisplay = this.props.dishSelected.comments.map((comments) => {
      return(
        <div key={comments.id}>
          <div>
            <ul className='list-unstyled'>
              <li><p>{comments.comment}</p></li>
              <li><p>--{comments.author} {comments.date}</p></li>
            </ul>
          </div>
        </div>
      )
    })

    return(
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          <Card>
            <CardImg width='100%' src={this.props.dishSelected.image} alt={this.props.dishSelected.name}></CardImg>
            <CardBody>
              <CardTitle header={this.props.dishSelected.name}>{this.props.dishSelected.name}</CardTitle>
              <CardText>{this.props.dishSelected.description}</CardText>
            </CardBody>
          </Card>
        </div>
        
        <div className='col-12 col-md-5'>
          <div><h4>Comments</h4></div>
          { commentsDisplay }
        </div>
      </div>
    )
  }
}

export default DishDetailComponent;
