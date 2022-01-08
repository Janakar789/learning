import React, { Component } from 'react';


class Learning extends React.Component {

    state = {
        count: 0,
        //imageUrl: 'https://picsum.photos/200'
    };

    render() { 
        return (  
            <div>    
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }

    formatCount() {
        const {count} = this.state;
        const x = 'Zero'
        return count == 0 ? x : count;
    }
}
 
export default Learning;