import React from 'react'

export class Container extends React.Component{

    state = {
        title: 'La mia applicazione',
        id: 1
    }

    render() {
        return (
            <div className='container'>
                <div> {this.props.children(this.state.title)}</div>
            </div>
        )
    }
}