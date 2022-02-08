import React, { Component } from 'react';
import './Banner.css';
import BannerItems from './BannerItems/BannerItems';

export class Banner extends Component {
  render() {
    return <div className='banner'>
        <BannerItems/>
    </div>;
  }
}

export default Banner;
