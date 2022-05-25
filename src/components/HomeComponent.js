import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({item, isLoading, errMess, promoErrMess, promoIsLoading}) {
  if (isLoading || promoIsLoading) {
    return(
      <Loading />
    )
  } else if (errMess || promoErrMess) {
    return(
      <h4>{errMess}</h4>
    );
  } else if (item) {
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
};


const Home = (props) => {
  return(
    <div className='container'>
      <div className='row align-items-start mt-3'>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.promotion} promoIsLoading={props.promotionIsLoading} errMess={props.promotionErrMess}/>
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.leaders} />
        </div>
      </div>
    </div>
  )
}

export default Home;