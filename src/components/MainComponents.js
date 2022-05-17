import React from 'react'
import Header from './HeaderComponents';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import DishDetailComponent from './DishDetailComponent';
import Home from './HomeComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotion: state.promotion,
    comments: state.comments
  }
}

class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = { 

    }
  }

  onSelectedDish(DishId) {
    this.setState({selectedDish: DishId})
  }
  

  render() {
    const HomePage = () => {
      return(
        <Home 
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotion.filter((promo) => promo.featured)[0]}
          leaders={this.props.leaders.filter((Leaders) => Leaders.featured)[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetailComponent dishSelected={this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      )
    }

    return(
      <div>
        <Header />
        <Switch>
          <Route path="/Home" component={HomePage} />
          <Route exact path="/Menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/Menu/:dishId' component={DishWithId} />
          <Route path="/Aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route path="/Contactus" component={Contact} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Main));