import React, { Component } from 'react';
import './BannerItem.css';

export class BannerItem extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let url = ("url"+"("+this.props.details.pic_id+")").toString();
    let styles = {
         backgroundImage: url
    };
    return <div className='banneritem' style ={styles}>
        <div className = "banner-details">
            <span className = "banner-text">
                {this.props.details.banner_text}
            </span>
            <span className = "banner-underline">
                {this.props.details.banner_underline}
            </span>
        </div>
    </div>;
  }
}

export default BannerItem;
