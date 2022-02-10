import React, { Component } from "react";
import _ from "lodash";

import Cart from "./Cart";
import RestroDetailList from "./RestroDetailList";
import "./RestroDetailsLists.css";
import { Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Checkout from "../../Checkout/Checkout";

class RestroDetailsLists extends Component {
  constructor(props) {
    super(props);
    this.restroDishes = this.props.restroDishes;
    this.state = {
      cart: [],
      ItemCount: 0,
      restro_dishes: [
        {
          id: 1,
          details: {
            Name: "Premium Kadhai Chicken Pulao Thali",
            Description:
              "Kadhai Chicken , Pulao served with pickle , raita ,gulab jamun ,2 Pcs Chicken Tikka",
            Price: "₹289",
            Choice: "Non Veg",
            Pic_Id:
              "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
          },
        },
        {
          id: 2,
          details: {
            Name: "Premium Paneer Butter Masala Roti Thali",
            Description:
              "Paneer Butter Masala , 2 Nos Roti , 2 pcs Paneer Tikka served with pickle , raita ,gulab jamun , Green Chutney & Salad",
            Price: "₹279",
            Choice: "Veg",
            Pic_Id:
              "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
          },
        },
        {
          id: 3,
          details: {
            Name: "Dhaniya Chicken Tikka",
            Description:
              "Succulent chicken marinated & flavoured with fresh coriander, grilled to perfection",
            Price: "₹249",
            Choice: "Non Veg",
            Pic_Id:
              "https://www.whiskaffair.com/wp-content/uploads/2020/03/mayonnaise-Sandwich-3.jpg",
          },
        },
        {
          id: 4,
          details: {
            Name: "Shahi Chicken Tikka Patiala",
            Description: "Spicy chicken Tikka prepped Patiala-style.",
            Price: "₹249",
            Choice: "Non Veg",
            Pic_Id:
              " https://www.bigbasket.com/media/uploads/recipe/w-l/1357_1_1.jpg",
          },
        },
        {
          id: 5,
          details: {
            Name: "Half Tandoori Chicken - Bathinda Style",
            Description: "Bathinda-style spicy-charred Tandoori chicken.",
            Price: "₹299",
            Choice: "Non Veg",
            Pic_Id:
              "https://media.glamour.com/photos/5f0ded3c6ebfe4554e35b781/master/w_2160,h_1500,c_limit/Freshly-MealGroup_2160x1500.jpg",
          },
        },
        {
          id: 6,
          details: {
            Name: "Methi Chicken Tikka Barnala",
            Description:
              "Barnala-style tender chicken Tikka flavoured with aromatic Methi.",
            Price: "₹249",
            Choice: "Non Veg",
            Pic_Id:
              "https://media.glamour.com/photos/5f0ded3c6ebfe4554e35b781/master/w_2160,h_1500,c_limit/Freshly-MealGroup_2160x1500.jpg",
          },
        },
      ],
      checkoutClick: false,
    };
  }

  checkoutClicked = () => {
    this.setState({ ...this.state, checkoutClick: true });
  };

  render() {
    console.log("while rendereing....");
    console.log(
      "in Cart, this.state.cart=>" + JSON.stringify(this.props.restroDishes)
    );
    return (
      <div className="restrolists">
        <div className="restrolists-left">Left-section</div>
        <div className="restrolists-main">
          <div className="search-and-filter">
            <div className="search">
              <TextField
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                onChange={(event) =>
                  this.props.searchFunctionality(event.target.value)
                }
              />
            </div>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
              onChange={(event) => {
                this.props.filterFunctionality(event.target.checked);
                // return event.target.value
              }}
            />
            Veg Only
          </div>
          {_.map(this.props.restroDishes, (dish) => {
            return (
              <RestroDetailList
                key={dish.id}
                details={dish.details}
                dishClicked={this.props.dishClicked}
              />
            );
          })}
        </div>
        <div className="restrolists-right">
          <Cart
            cartDetails={this.props.cartDetails}
            checkoutClicked={this.props.checkoutClicked}
          />
        </div>
      </div>
    );
  }
}

export default RestroDetailsLists;
