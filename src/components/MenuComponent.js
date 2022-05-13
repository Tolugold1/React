import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';


class Menu extends React.Component {

  constructor(props) {
    super(props)

    this.state = { selectedDish: null}
  }

  onSelectedDish(dish) {
    this.setState({selectedDish: dish})
  }

  renderDish(dish) {
    if (dish != null)
    {
      return(
        <DishDetailComponent dishSelected={this.state.selectedDish} />
      )
    } else {
      return(<div></div>)
    }
  }

  render() {

    const menu = this.props.dishes.map((dish) => {
      return(
        <div key={ dish.id } className='col-12 col-md-5 m-1'>
          <Card key={ dish.id } onClick={() => this.onSelectedDish(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle header={dish.name}>{dish.name}</CardTitle>
              </CardImgOverlay>
          </Card>
        </div>
      )
    });

    return(
      <div className='container'>
        <div className='row'>
          { menu }
        </div>
        <div className='row'>
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    )
  }
}

export default Menu;