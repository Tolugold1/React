import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderItem({dish}) {
  return(
    <Card>
      <Link to={`/Menu/${dish.id}`} >
      <CardImg width="100%" src={ dish.image } alt={ dish.name } />
        <CardImgOverlay>
          <CardTitle header={ dish.name }>{ dish.name }</CardTitle>
        </CardImgOverlay>
        </Link>
    </Card>
  );
}


const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return(
      <div key={ dish.id } className='col-12 col-md-5 m-1'>
        <RenderItem dish={dish} />
      </div>
    );
  });

  return(
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/Home'> Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>Menu</h3>
          <hr/>
        </div>
      </div>
      <div className='row mb-3'>
        { menu }
      </div>
    </div>
  )
}

export default Menu;