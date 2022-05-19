import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Input, FormGroup, Form, Label, FormFeedback } from 'reactstrap';


class CommentForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = { 
      isCommentModalOpen: false,
      rate: '',
      name: '',
      message: ''
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
      [name]: value,
    })
  }

  handleFormSubmit = (event) => {
    this.toggleModal();
    alert("Your name: " + JSON.stringify(this.state));
    event.preventDefault();
  };

  validator(name) {
    const errors = {
      name: ''
    }

    if (this.state.name && name.length < 3) {
      errors.name = "Must be greater than two character";
    } else if (this.state.name && name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }
    return (errors);
  }

  render() {
    const errors = this.validator(this.state.name)
    return(
      <div>
        <Button className='btn-outline-secondary' onClick={this.toggleModal}><span className='fa fa-pencil'></span> Submit Comment</Button>
        <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup row>
                <Col md={12}>
                  <Label  htmlFor='rate'>Rating</Label>
                  <Input type='select' id="rate" name='rate' className='custom-select' value={this.state.rate} md={12}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={12}>
                  <Label htmlFor='YourName'>Your Name</Label>
                  <Input type='text' name='name' id='name' value={this.state.name}
                  valid={errors.name === ''}
                  invalid={errors.name !== ''}
                  onChange={this.handleChange}
                  >
                  </Input>
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={12}>
                  <Label htmlFor='message'> Comment</Label>
                  <Input type='textarea'  id='message' rows='4' name='message' value={this.state.message} onChange={this.handleChange}></Input>
                </Col>
              </FormGroup>
              <Button type='submit' value='submit' btn-sm>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default CommentForm;