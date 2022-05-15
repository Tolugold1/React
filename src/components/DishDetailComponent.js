import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


  function RenderDish(dishSelected) {
    if (dishSelected != null)
    {
      return(
        <Card>
          <CardImg width="100%" src={dishSelected.image} alt={dishSelected.name}></CardImg>
          <CardBody>
            <CardTitle header={dishSelected.name}>{dishSelected.name}</CardTitle>
            <CardText>{dishSelected.description}</CardText>
          </CardBody>
        </Card>
      )
    } else {
      return(<div></div>)
    }
  }

  function RenderComments(array) {
    if (array != null)
    {
      return(
        <div>
          <h4>Comments</h4>
          <ul className='list-unstyled'>
            {array.map((array) => {
              return(
                <li key={array.id}>
                  <p>{array.comment}</p>
                  <p>--{array.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(array.date)))}</p>
                </li>
            )})}
          </ul>
        </div>
      )
    }
  }

  const DishDetailComponent = (props) => {
    if (props.dishSelected != null) {
      return(
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-5'>
              {RenderDish(props.dishSelected)}
            </div>
            <div className='col-12 col-md-5'>
              {RenderComments(props.dishSelected.comments)}
            </div>
          </div>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }


export default DishDetailComponent;
