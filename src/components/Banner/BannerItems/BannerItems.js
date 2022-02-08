import React, { Component } from 'react';
import BannerItem from './BannerItem/BannerItem';
import './BannerItems.css'

export class BannerItems extends Component {
  
    constructor(props)
    {
        super(props);
        this.banneritems = [
            {
                id: 1,
                details:
                {
                banner_text: "Grab 60% off on Fresh Flavours",
                banner_underline: "Explore an array of treats to burst your cravings",
                pic_id:"https://media.glamour.com/photos/5f0ded3c6ebfe4554e35b781/master/w_2160,h_1500,c_limit/Freshly-MealGroup_2160x1500.jpg"
                },
            },
            {
                id: 2,
                details:
                {
                banner_text: "Grab 20% off! Use Coupon 'Party'",
                banner_underline: "Auntie Fungs",
                pic_id:"https://www.bigbasket.com/media/uploads/recipe/w-l/1357_1_1.jpg"
                },
            },
            {
                id: 3,
                details:
                {
                banner_text: "Grab 20% off! Use Coupon 'Swiggy It'",
                banner_underline: "The Soup Project",
                pic_id: "https://www.whiskaffair.com/wp-content/uploads/2020/03/mayonnaise-Sandwich-3.jpg"
                },
            },
            {
                id: 4,
                details:
                {
                banner_text: "Enjoy 50% off! Use Coupon 'TryNew'",
                banner_underline: "Biryani Blues",
                pic_id:"https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg"
                },
            },
            {
                id: 5,
                details:
                {
                banner_text: "Enjoy 20% off! Use Coupon 'TryNew'",
                banner_underline: "Bangalore Thindies",
                pic_id:"https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg"
                }
            }
       /*     {
                id: 6,
                details:
                {
                banner_text: "Chai and Chaats, A Match Made in Heaven",
                banner_underline: "Chaat Street"
                }
            }*/
        ]
    }

  render() {
    return <div className="banner_items">
        {this.banneritems.map((banner_item)=>
        {
            return (<BannerItem key={banner_item.id} details = {banner_item.details}/>)
        })}
    </div>;
  }
}

export default BannerItems;
