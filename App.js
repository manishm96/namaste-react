import react from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

/*
Design - FOOD DELIVERY APP
Components:
1. Header
    * Logo
    * Navigation items
2. Body
    * Search bar
    * Cards container
        * Card
            * Image
            * Name
            * Price
            * Rating
3. Footer
    * Social media links
    * CC info
 */

// Swiggy mock data

const resLogoImageUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const mockData = {
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
      layout: {
        columns: 4,
      },
      id: "restaurant_grid_listing",
      gridElements: {
        infoWithStyle: {
          "@type":
            "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
          restaurants: [
            {
              info: {
                id: "337335",
                name: "Kannur food kitchen",
                cloudinaryImageId: "a27weqanhnszqiuzsoik",
                locality: "1st Stage",
                areaName: "BTM Layout",
                costForTwo: "₹200 for two",
                cuisines: ["Kerala", "Biryani", "Beverages"],
                avgRating: 4.1,
                parentId: "114756",
                avgRatingString: "4.1",
                totalRatingsString: "20K+",
                sla: {
                  deliveryTime: 30,
                  lastMileTravel: 7.9,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "7.9 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-04 04:00:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-c484a053-3cff-46a9-b843-2f9c155c3aea",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/kannur-food-kitchen-1st-stage-btm-layout-rest337335",
                text: "RESTAURANT_MENU",
                type: "WEBLINK",
              },
              widgetId:
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
            },
            {
              info: {
                id: "770772",
                name: "Olio - The Wood Fired Pizzeria",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/19/a371ff07-4e0e-448c-acea-498d618be877_770772.jpg",
                locality: "Ali Askar Road",
                areaName: "R.T. Nagar",
                costForTwo: "₹300 for two",
                cuisines: [
                  "Pizzas",
                  "Pastas",
                  "Fast Food",
                  "Snacks",
                  "Beverages",
                ],
                avgRating: 4.4,
                parentId: "11633",
                avgRatingString: "4.4",
                totalRatingsString: "621",
                sla: {
                  deliveryTime: 29,
                  lastMileTravel: 3,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "3.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-04 05:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "₹125 OFF",
                  subHeader: "ABOVE ₹249",
                  discountTag: "FLAT DEAL",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-c484a053-3cff-46a9-b843-2f9c155c3aea",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-ali-askar-road-r-t-nagar-rest770772",
                text: "RESTAURANT_MENU",
                type: "WEBLINK",
              },
              widgetId:
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
            },
            {
              info: {
                id: "405105",
                name: "Leon's - Burgers & Wings (Leon Grill)",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_405105.jpg",
                locality: "Rajajinagar",
                areaName: "Rajajinagar",
                costForTwo: "₹300 for two",
                cuisines: [
                  "American",
                  "Snacks",
                  "Turkish",
                  "Portuguese",
                  "Continental",
                ],
                avgRating: 4.5,
                parentId: "573259",
                avgRatingString: "4.5",
                totalRatingsString: "11K+",
                sla: {
                  deliveryTime: 36,
                  lastMileTravel: 7.6,
                  serviceability: "SERVICEABLE",
                  slaString: "35-40 mins",
                  lastMileTravelString: "7.6 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-04 04:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹99",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-c484a053-3cff-46a9-b843-2f9c155c3aea",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-rajajinagar-rest405105",
                text: "RESTAURANT_MENU",
                type: "WEBLINK",
              },
              widgetId:
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
            },
            {
              info: {
                id: "468221",
                name: "AL-Arabic Shawarma",
                cloudinaryImageId: "vfvqc04xichrloipqz3t",
                locality: "New Thippasandra",
                areaName: "Indiranagar",
                costForTwo: "₹200 for two",
                cuisines: ["Arabian", "Snacks"],
                avgRating: 4.2,
                parentId: "396951",
                avgRatingString: "4.2",
                totalRatingsString: "1.2K+",
                sla: {
                  deliveryTime: 34,
                  lastMileTravel: 9.3,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "9.3 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-04 05:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-c484a053-3cff-46a9-b843-2f9c155c3aea",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/al-arabic-shawarma-new-thippasandra-indiranagar-rest468221",
                text: "RESTAURANT_MENU",
                type: "WEBLINK",
              },
              widgetId:
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
            },
            {
              info: {
                id: "709119",
                name: "Irani Std. Tea",
                cloudinaryImageId: "1e756ee8d230b65d570f7e8e70f7062c",
                locality: "6th Main Rd",
                areaName: "Indiranagar",
                costForTwo: "₹200 for two",
                cuisines: ["Beverages", "Snacks", "Fast Food"],
                avgRating: 4.2,
                parentId: "374583",
                avgRatingString: "4.2",
                totalRatingsString: "718",
                sla: {
                  deliveryTime: 29,
                  lastMileTravel: 6.8,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "6.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-11 00:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹79",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-c484a053-3cff-46a9-b843-2f9c155c3aea",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/irani-std-tea-6th-main-rd-indiranagar-rest709119",
                text: "RESTAURANT_MENU",
                type: "WEBLINK",
              },
              widgetId:
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
            },
            {
              info: {
                id: "291456",
                name: "The Fritter Company",
                cloudinaryImageId: "3660c857274de528702f316b4a7a1996",
                locality: "2nd Stage",
                areaName: "Btm Layout",
                costForTwo: "₹200 for two",
                cuisines: [
                  "Burgers",
                  "American",
                  "shawarma",
                  "Rolls & Wraps",
                  "Beverages",
                  "Fast Food",
                  "Continental",
                ],
                avgRating: 4.4,
                parentId: "21135",
                avgRatingString: "4.4",
                totalRatingsString: "4.0K+",
                sla: {
                  deliveryTime: 30,
                  lastMileTravel: 9.2,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "9.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-04 06:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "15% OFF",
                  subHeader: "ABOVE ₹900",
                  discountTag: "FLAT DEAL",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-c484a053-3cff-46a9-b843-2f9c155c3aea",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/the-fritter-company-2nd-stage-btm-layout-rest291456",
                text: "RESTAURANT_MENU",
                type: "WEBLINK",
              },
              widgetId:
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
            },
            {
              info: {
                id: "151076",
                name: "Captain Olive",
                cloudinaryImageId: "f5f9d4821b9c667a424d971079f95815",
                locality: "2nd Stage",
                areaName: "BTM Layout",
                costForTwo: "₹350 for two",
                cuisines: [
                  "Burgers",
                  "American",
                  "shawarma",
                  "Rolls & Wraps",
                  "Beverages",
                  "Fast Food",
                  "Continental",
                ],
                avgRating: 4.4,
                parentId: "21078",
                avgRatingString: "4.4",
                totalRatingsString: "9.2K+",
                sla: {
                  deliveryTime: 30,
                  lastMileTravel: 9.2,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "9.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-04 06:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "15% OFF",
                  subHeader: "ABOVE ₹900",
                  discountTag: "FLAT DEAL",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-c484a053-3cff-46a9-b843-2f9c155c3aea",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/captain-olive-2nd-stage-btm-layout-rest151076",
                text: "RESTAURANT_MENU",
                type: "WEBLINK",
              },
              widgetId:
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
            },
            {
              info: {
                id: "562630",
                name: "Temperature",
                cloudinaryImageId: "yz7ffjxfwmgwgukp4w9w",
                locality: "HAL 3rd Stage",
                areaName: "Indiranagar",
                costForTwo: "₹400 for two",
                cuisines: ["Beverages", "American", "Snacks", "Ice Cream"],
                avgRating: 4.3,
                parentId: "203067",
                avgRatingString: "4.3",
                totalRatingsString: "2.1K+",
                sla: {
                  deliveryTime: 33,
                  lastMileTravel: 7.7,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "7.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-11-11 00:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹99",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {
                context: "seo-data-c484a053-3cff-46a9-b843-2f9c155c3aea",
              },
              cta: {
                link: "https://www.swiggy.com/city/bangalore/temperature-hal-3rd-stage-indiranagar-rest562630",
                text: "RESTAURANT_MENU",
                type: "WEBLINK",
              },
              widgetId:
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
            },
          ],
          theme: "SeoRestaurantListingGridWidget",
        },
      },
    },
  },
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://blog.slantco.com/wp-content/uploads/2024/03/grubhub-logo-history-evolution.jpeg"
          alt="logo-image"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  // Get restaturants from mock data
  const { restaurants } = mockData?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="body">
      <div className="search">
        <h3>search</h3>
      </div>
      <div className="res-container">
        {restaurants.map((res) => {
          return <RestaurantCard key={res?.info?.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={`${resLogoImageUrl}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <p>{costForTwo}</p>
      <p>{avgRating} stars</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

/**
 * Key Points:
 * 1. Created Header, Body and RestaurantCard components
 * 2. Used mock data to display restaurant cards in the app.
 * 3. Used props to pass data to RestaurantCard component. Props are just like function arguments that are used to pass data from parent to child components in React.
 * 4. Made App.js as a module type file.
 */
