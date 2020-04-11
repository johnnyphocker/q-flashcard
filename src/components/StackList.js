import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import stacks from '../data/stacks.json';
import { setStack, loadStacks } from '../actions';

class StackList extends Component {

    componentDidMount() {
        if(this.props.stacks.length === 0) this.props.loadStacks(stacks);
    }
    
    render() {

        let { setStack } = this.props;
        
        return (
            <div>
                {
                    this.props.stacks.map((e, i) => {
                        return (
                            <Link
                                key={i}
                                to='/stack'
                                onClick={() => setStack(e)}
                            >
                                <h4>{e.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

let mapStateToProps = state => {
    return { stacks: state.stacks}
}

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);