import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Row, Label, FormFeedback } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => (val && val.length);
const MaxLength = (len) => (val) => !(val) || (val.length <= len);
const MinLength = (len) => (val) => (val && val.length >= len);
class CommentForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      rating: '',
      author: '',
      comment: '',
      isCommentModalOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isCommentModalOpen: !this.state.isCommentModalOpen
    })
  }
  

  handleFormSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)
  };


  render() {

    return(
      <div>
        <Button type='Button' outline onClick={this.toggleModal}><span className='fa fa-pencil'></span> Submit Comment</Button>
        <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleFormSubmit(values)}>
              <Row className='form-group'>
                <Col md={12}>
                  <Label  htmlFor='rating'>Rating</Label>
                  <Control.select model='.rating' id="rating" name='rating' className='custom-select form-control'  md={12}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className='form-group'>
                <Col md={12}>
                  <Label htmlFor='author'>Your Name</Label>
                  <Control.text model='.author' name='author' id='author' className='form-control'
                  validators={{required, MaxLength: MaxLength(15), MinLength: MinLength(3)}}
                  >
                  </Control.text>
                  <Errors 
                  className='text-danger'
                  model='.author'
                  show='touched'
                  messages={{
                    required: 'Fill in your name',
                    MaxLength: 'Character must be 15 or less',
                    MinLength: 'Character must the more than 2'
                  }}
                  />
                </Col>
              </Row>
              <Row className='form-group'>
                <Col md={12}>
                  <Label htmlFor='comment'> Comment</Label>
                  <Control.textarea model='.comment'  id='comment' rows='4' name='comment' className='form-control'></Control.textarea>
                </Col>
              </Row>
              <Button type='submit'>Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default CommentForm;