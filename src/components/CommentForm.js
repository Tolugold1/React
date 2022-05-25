import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Input, FormGroup, Form, Label, FormFeedback } from 'reactstrap';


class CommentForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = { 
      form : {
        rating: '',
        author: '',
        comment: ''
      },
      isCommentModalOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleModal() {
    this.setState({
      isCommentModalOpen: !this.state.isCommentModalOpen
    })
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      form: {
        ...this.state.form, [name]: value
      }
    })
  }

  handleFormSubmit(values) {
    this.toggleModal();
    this.props.add_Comment(this.props.dishId, values.rating, values.author, values.comment)
  };

  validator(author) {
    const errors = {
      author: ''
    }

    if (this.state.author && author.length < 3) {
      errors.author = "Must be greater than two character";
    } else if (this.state.author && author.length > 15) {
      errors.author = "Must be 15 characters or less";
    }
    return (errors);
  }

  render() {

    const errors = this.validator(this.state.author)

    return(
      <div>
        <Button type='Button' className='btn-outline-secondary' onClick={this.toggleModal}><span className='fa fa-pencil'></span> Submit Comment</Button>
        <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <Form onSubmit={() => this.handleFormSubmit(this.state.form)}>
              <FormGroup row>
                <Col md={12}>
                  <Label  htmlFor='rating'>Rating</Label>
                  <Input type='select' id="rating" name='rating' className='custom-select' value={this.props.rating} onChange={this.handleChange} md={12}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={12}>
                  <Label htmlFor='author'>Your Name</Label>
                  <Input type='text' name='author' id='author' value={this.props.author}
                  valid={errors.author === ''}
                  invalid={errors.author !== ''}
                  onChange={this.handleChange}
                  >
                  </Input>
                  <FormFeedback>{errors.author}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={12}>
                  <Label htmlFor='comment'> Comment</Label>
                  <Input type='textarea'  id='comment' rows='4' name='comment' value={this.props.comment} onChange={this.handleChange}></Input>
                </Col>
              </FormGroup>
              <Button type='submit'>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default CommentForm;