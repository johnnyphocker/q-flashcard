import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';

export class Stack extends Component {

    render() {
        let { title, cards } = this.props.stack;
        return (
            <div>
                <Link className='link-home' to='/'><h4>Home</h4></Link>
                <h3>{title}</h3>
                <br/>
                {
                    cards !== undefined ? cards.map((e, i) => {
                        return <Card key={i} card={e} />
                    }) : 'No hay datos.'
                }
            </div>
        )
    }
}

let mapStateToProps = state => ({
    stack: state.stack
})

export default connect(mapStateToProps, null)(Stack);