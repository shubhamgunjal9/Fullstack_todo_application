import React from 'react';
import { Component } from 'react';


class ThirdComponent extends Component{
    render() {
      return(
        <div className="my-sec-comp">
          <h1>class component</h1>
        </div>
      )
    }
}

export class FifthComponent extends Component {
    render(){
        return(
            <>
                <h1>Fifth class component</h1>
            </>
        )
    }
}
export default ThirdComponent;  