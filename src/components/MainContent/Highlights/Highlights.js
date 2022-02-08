import React, { Component } from 'react';
import Highlight from './Highlight/Highlight';

import './Highlights.css';

export class Highlights extends Component {
  constructor()
  {
      super();
      this.highlights = [
          {
              id: 1,
              details:
              {
                  title: "Offers Near You",
                  options : "323 Options",
                  icon_class : "fi fi-rr-earnings"
              }
          },
          {
            id: 2,
            details:
            {
                title: "Top Picks",
                options : "107 Options",
                icon_class : "fi fi-rr-flame"
            }
          },
          {
            id: 3,
            details:
            {
                title: "What's New",
                options : "177 Options",
                icon_class : "fi fi-rr-noodles"
            }
          },
          {
            id: 4,
            details:
            {
                title: "Premium",
                options : "106 Options",
                icon_class : "fi fi-rr-diamond"
            }
          },
          {
            id: 5,
            details:
            {
                title: "See All",
                options : "1410 Options",
                icon_class : "fi fi-rr-arrow-down"
            }
          }        
      ]
  }  
  render() {
    return <div className='highlights-inside'>
        {this.highlights.map((highlight)=>
        {
            return (<Highlight key = {highlight.id} details = {highlight.details}/>)
        })}
    </div>;
  }
}

export default Highlights;
