import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';

function RenderCard({item}) {
  return(
    <Card>
      <CardImg src={item.image} alt={item.name}></CardImg>
      <CardBody>
        <CardTitle header={item.name}>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle className='visually hidden'>{item.designation}</CardSubtitle> : null}
        <CardText>{item.description}</CardText> 
      </CardBody>
    </Card>
  )
}


const Home = (props) => {
  return(
    <div className='container'>
      <div className='row align-items-start mt-3'>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.dish} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.promotion} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.leaders} />
        </div>
      </div>
    </div>
  )
}

export default Home;