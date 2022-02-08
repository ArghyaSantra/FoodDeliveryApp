import React, { Component } from "react";
import RestroItem from "./RestroItem/RestroItem";
import "./RestroLists.css";

export class RestroLists extends Component {
  constructor(props) {
    super(props);
    this.restrolist = [
      {
        id: 1,
        details: {
          pic_id:
            "https://assets.cntraveller.in/photos/612f08a19fd022fa9f74f1e8/16:9/w_1280,c_limit/The%20Verandah.jpeg",
          Name: "King of Spices",
          Tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          Ratings: "4.1",
          ETA: "32 mins",
          Price: "₹ 500 for two",
          Offers: "Use FREE20 for 20% Off",
        },
      },
      {
        id: 2,
        details: {
          pic_id:
            "https://assets.cntraveller.in/photos/612f033d9fd022fa9f74f1e0/master/w_1600%2Cc_limit/Townsend.jpg",
          Name: "Cardamom",
          Tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          Ratings: "4.0",
          ETA: "32 mins",
          Price: "₹ 500 for two",
          Offers: "Use FREE20 for 20% Off",
        },
      },
      {
        id: 3,
        details: {
          pic_id:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2953%2Ftrend20201009113426.jpg",
          Name: "Goan Cafe",
          Tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          Ratings: "4.3",
          ETA: "28 mins",
          Price: "₹ 500 for two",
          Offers: "Use FREE20 for 20% Off",
        },
      },
      {
        id: 4,
        details: {
          pic_id: "https://images.indianexpress.com/2020/09/restuarant.jpg",
          Name: "The Spice Delight",
          Tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          Ratings: "4.2",
          ETA: "42 mins",
          Price: "₹ 500 for two",
          Offers: "Use FREE20 for 20% Off",
        },
      },
      {
        id: 5,
        details: {
          pic_id:
            "https://media-cdn.tripadvisor.com/media/photo-s/17/bb/3e/4f/taj-indian-restaurant.jpg",
          Name: "The Kebab Island",
          Tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          Ratings: "4.5",
          ETA: "38 mins",
          Price: "₹ 500 for two",
          Offers: "Use FREE20 for 20% Off",
        },
      },
      {
        id: 6,
        details: {
          pic_id:
            "https://www.wallpaperup.com/uploads/wallpapers/2014/11/09/511973/3200799904ca51bf942335d95f790edf-700.jpg",
          Name: "Masala Maarke",
          Tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          Ratings: "4.2",
          ETA: "30 mins",
          Price: "₹ 500 for two",
          Offers: "Use FREE20 for 20% Off",
        },
      },
    ];
  }

  restroClicked = (restro) => {
    console.log("restro=>" + restro);
    this.props.restroClicked(restro);
  };

  render() {
    return (
      <div className="restrolist">
        {this.restrolist.map((restroitem) => {
          return (
            <RestroItem
              key={restroitem.id}
              details={restroitem.details}
              restroClicked={this.restroClicked}
            />
          );
        })}
      </div>
    );
  }
}

export default RestroLists;
