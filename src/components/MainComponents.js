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
import { sendFeedback, postComment, fetchDishes, fetchPromotion, fetchComments, fetchLeaders } from '../Redux/ActionCreator';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotion: state.promotion,
    comments: state.comments
  }
};

const mapDispatchToProps = dispatch => ({
  postComment: (DishId, rating, author, comment) => dispatch(postComment(DishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchPromotion: () => {dispatch(fetchPromotion())},
  fetchComments: () => {dispatch(fetchComments())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  resetFeedBackForm: () => {dispatch(actions.reset('Feedback'))},
  postFeedBack: (firstName, lastName, telnum, email, agree, contactType, messages) => dispatch(sendFeedback(firstName, lastName, telnum, email, agree, contactType, messages))
});

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromotion();
    this.props.fetchComments();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      return(
        <Home 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}

          promotion={this.props.promotion.promotion.filter((promo) => promo.featured)[0]}
          promotionIsLoading={this.props.promotion.promoIsLoading}
          promotionErrMess={this.props.promotion.promoErrMess}

          leaders={this.props.leaders.leaders.filter((Leaders) => Leaders.featured)[0]}
          leaderIsLoading={this.props.leaders.leaderIsLoading}
          leaderErrMess={this.props.leaders.leaderErrMess}
        />
      )
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetailComponent dishSelected={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        />
      )
    }
  
    return(
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames='page' timeout={2000}>
            <Switch>
              <Route path="/Home" component={HomePage} />
              <Route exact path="/Menu" component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/Menu/:dishId' component={DishWithId} />
              <Route path="/Aboutus" component={() => <About leaders={this.props.leaders} leaderIsLoading={this.props.leaders.leaderIsLoading}
              leaderErrMess={this.props.leaders.leaderErrMess}/>} />
              <Route path="/Contactus" component={() => <Contact resetFeedBackForm={this.props.resetFeedBackForm} postFeedBack={this.props.postFeedBack}/>} />
              <Redirect to='/Home'/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));