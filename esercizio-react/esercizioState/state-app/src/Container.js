import React from 'react'
import { DisplayLanguage } from './LanguageContext '

const Strings = {
    en: {
        current_language: 'Current title is: '
    },
    it: {
        current_language: 'Il titolo corrente è:'
    }
}

export class Container extends React.Component{

    state = {
        title: 'La mia applicazione',
        id: 1
    }

    render() {
        return (
            <div className='container'>
                <DisplayLanguage.Consumer>
                    { (language) => {
                        return (
                            <div>{Strings[language].current_language} {this.props.children(this.state.title)}</div>
                        )
                    }}
                </DisplayLanguage.Consumer>
            </div>
        )
    }
}