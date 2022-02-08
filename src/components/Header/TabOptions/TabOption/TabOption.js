import React, { Component } from 'react';
import './TabOption.css';

export class TabOption extends Component {
  constructor(props)
  {
      super(props);
      //console.log(this.props);
  }
    
  render() {
    console.log(this.props);
    return <div className='tab_option'>
        <span className='tab_icon'><i class={this.props.details.icon_class}></i></span>
        <span className='tab_name'>{this.props.details.name}</span>
    </div>;
  }
}

export default TabOption;
