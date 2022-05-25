import React from 'react'
import Header from './HeaderComponents';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import DishDetailComponent from './DishDetailComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Add_Comment, fetchDishes } from '../Redux/ActionCreator';
import { actions } from 'react-redux-form';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotion: state.promotion,
    comments: state.comments
  }
};

const mapDispatchToProps = dispatch => ({
  add_Comment: (DishId, rating, author, comment) => {dispatch(Add_Comment(DishId, rating, author, comment))},
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedBackForm: () => {dispatch(actions.reset('Feedback'))}
});

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      return(
        <Home 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotion.filter((promo) => promo.featured)[0]}
          leaders={this.props.leaders.filter((Leaders) => Leaders.featured)[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetailComponent dishSelected={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        add_Comment={this.props.add_Comment}
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
          <Route path="/Contactus" component={() => <Contact resetFeedBackForm={this.props.resetFeedBackForm}/>} />
          <Redirect to='/Home'/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));