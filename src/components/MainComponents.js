import React from 'react'
import DishDetailComponent from './DishDetailComponent';
import Header from './HeaderComponents';
import Footer from './FooterComponent'
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'

class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = { dishes: DISHES, selectedDish: null }
  }

  onSelectedDish(DishId) {
    this.setState({selectedDish: DishId})
  }

  render() {
    return(
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(DishId) => this.onSelectedDish(DishId)}/>
        <DishDetailComponent dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    )
  }
}

export default Main;