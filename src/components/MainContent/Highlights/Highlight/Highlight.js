import React, { Component } from 'react';
import './Highlight.css';

export class Highlight extends Component {
  render() {
    return (<div className='highlight'>
       <span className='highlight_logo'><i class={this.props.details.icon_class}></i></span> 
       <span className='highlight_info'>
           <span>{this.props.details.title}</span>
           <span className='highlight_info_options'>{this.props.details.options}</span>
       </span>
    </div>);
  }
}

export default Highlight;
