import React from 'react'
import Header from './HeaderComponents';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotion';
import { LEADERS } from '../shared/Leaders';
import Home from './HomeComponent';
import { Switch, Route } from 'react-router-dom';


class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = { dishes: DISHES,
      leaders: LEADERS,
      promotion: PROMOTIONS,
      comments: COMMENTS
    }
  }

  onSelectedDish(DishId) {
    this.setState({selectedDish: DishId})
  }
  

  render() {
    const HomePage = () => {
      return(
        <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotion.filter((promo) => promo.featured)[0]}
          leaders={this.state.leaders.filter((Leaders) => Leaders.featured)[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetailComponent dishSelected={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      )
    }

    return(
      <div>
        <Header />
        <Switch>
          <Route path="/Home" component={HomePage} />
          <Route exact path="/Menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path='/Menu/:dishId' component={DishWithId} />
          <Route path="/Aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Route path="/Contactus" component={Contact} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main;