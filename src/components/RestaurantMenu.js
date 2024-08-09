import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RatingStar from "./RatingStar";
// import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantData, setRestaurantData] = useState();
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchMenuData(resId);
  }, []);

  const fetchMenuData = async (id) => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    console.log("json", json);
    const { itemCards } =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    console.log(itemCards);
    setRestaurantMenu(itemCards);
    setRestaurantData(json?.data?.cards[2]?.card?.card?.info);
  };

  console.log("restaurantMenu", restaurantMenu);

  const formatPrice = (price) => {
    let str = price.toString().split("");
    return "₹" + str.slice(0, 3).join("") + "." + str.slice(3).join("");
  };

  return restaurantData?.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="restaurant-wrapper">
      <h1 className="restaurant-name">{restaurantData?.name}</h1>
      <div className="restaurant-data">
        <h5 className="rating">
          <RatingStar />
          {restaurantData?.avgRating} ( {restaurantData?.totalRatingsString} )
        </h5>
        <span>•</span>
        <h5>{restaurantData?.cuisines.join(", ")}</h5>
        <span>•</span>
        <h5>{restaurantData?.costForTwoMessage}</h5>
      </div>
      <ul className="restaurant-menu-list">
        {restaurantMenu?.map(({ card }) => (
          <li key={card.info.id}>
            <div className="restaurant-menu-wrapper">
              <div className="restaurant-dec-wrapper">
                <div className="restaurant-desc">
                  <div>
                    {card.info.itemAttribute.vegClassifier === "VEG" ? (
                      <span>🟢</span>
                    ) : (
                      <span>🔴</span>
                    )}
                  </div>
                  <h4>{card.info.name}</h4>
                  <h4 className="highlight">
                    {card.info.price
                      ? formatPrice(card.info.price)
                      : formatPrice(card.info.defaultPrice)}
                  </h4>
                </div>
                <p>{card.info.description}</p>
              </div>
              <div className="menu-img-wrapper">
                <img
                  className="menu-img"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${card.info.imageId}`}
                />
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// // import Shimmer from "./Shimmer";
// import { MENU_API } from "../utils/constants";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   // const [restaurantData, setRestaurantData] = useState();
//   // const [restaurantMenu, setRestaurantMenu] = useState([]);
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(MENU_API + resId);

//     const json = data.json();
//     console.log("json", json);

//     setResInfo(json.data);

//     // setRestaurantMenu(itemCards);
//     // setRestaurantData(json?.data?.cards[2]?.card?.card?.info);
//   };

//   const { itemCards } =
//     resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card;

//   // console.log("itemCards", itemCards);
//   // console.log("restaurantMenu", restaurantMenu);

//   // if (resInfo === null) return <Shimmer />;

//   // const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;

//   return (
//     <div>
//       {/* <h1>{name}</h1>
//       <h2>{cuisines}</h2> */}
//       {/* <h5>{restaurantData?.sla?.deliveryTime} mins</h5> */}
//       <span>•</span>
//       {/* <h5>{costForTwoMessage}</h5> */}
//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name}
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
