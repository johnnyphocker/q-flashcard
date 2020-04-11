import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, FormControl, FormGroup, Button, FormLabel } from 'react-bootstrap';
import { addStack } from '../actions';

class StackForm extends Component {

    state = {
        title: '',
        cards: []
    }

    addCard = () => {
        const { cards } =  this.state;
        cards.push({id: cards.length, prompt: '', answer: ''});
        this.setState({ cards });
    }

    updateCardPart = (e, i, part) => {
        const { cards } = this.state;
        cards[i][part] = e.target.value;
        this.setState({cards});
    }

    addStack = () => {
        this.props.addStack(this.state)
    }

    render() {

        return (
            <div>
                <Link className='link-home' to='/'><h4>Home</h4></Link>
                <h4>Create a new stack</h4>
                <hr/>
                <Form>
                    <FormGroup>
                        <FormLabel>Title</FormLabel>
                        <FormControl onChange={e => this.setState({title: e.target.value})} />
                    </FormGroup>
                    {
                        this.state.cards.map((e, i) => {
                            return (
                                <div key={i}>
                                    <br/>
                                    <FormGroup>
                                        <FormLabel>Prompt</FormLabel>
                                        <FormControl onChange={event => this.updateCardPart(event, i, 'prompt')} />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Answer</FormLabel>
                                        <FormControl onChange={event => this.updateCardPart(event, i, 'answer')} />
                                    </FormGroup>
                                </div>
                            )
                        })
                    }
                </Form>
                <br/>
                <Button onClick={() => this.addCard()}>Add card</Button>{' '}
                <Button onClick={() => this.addStack()}>Add stack</Button>
            </div>
        )
    }
}

export default connect(null, {addStack})(StackForm);