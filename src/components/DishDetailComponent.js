import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to='/Menu'> Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dishSelected.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'>
              <h3>{props.dishSelected.name}</h3>
              <hr/>
            </div>
          </div>
          <div className='row mt-3 mb-3'>
            <div className='col-12 col-md-5'>
              {RenderDish(props.dishSelected)}
            </div>
            <div className='col-12 col-md-5'>
              {RenderComments(props.comments)}
            </div>
          </div>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }


export default DishDetailComponent;
