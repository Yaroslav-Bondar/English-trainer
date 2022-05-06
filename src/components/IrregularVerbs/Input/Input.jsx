import React from 'react';

class Input extends React.Component {
    // constructor() {
    //     super(props);
    // }
    render() {
        console.log(this.props);
        return (
                    <>input</>
                    // <input 
                    //     type = "text"
                    //     value = {value}
                    //     disabled = {disabled}
                    //     onChange = {(e) => {handler(e)}}
                    //     className={style}
                    // />    
        )
    }
}

export default Input;
