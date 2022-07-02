import CONFIG from '../../globals/config';
import {
  templateListData,
  templateListDataReviews,
} from './functions';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src=" ${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__drinks">
    <h3>Daftar Menu Minuman</h3>
    <ul>
      ${templateListData(restaurant.menus.drinks)}
    </ul>
  </div>
  <div class="restaurant__foods">
    <h3>Daftar Menu Makanan</h3>
    <ul>
      ${templateListData(restaurant.menus.foods)}
    </ul>
  </div>
  <div class="customer-reviews">
    <div class="review-wrapper">
      <h3>Reviews :</h3>
        <ul class="reviews">
          ${templateListDataReviews(restaurant.customerReviews)}
        </ul>
    </div>
  </div>
`;

const createRestaurantsItemTemplate = (restaurants) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurants.name || '-'}"
          data-src = "${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" >
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurants.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurants.id}">${restaurants.name || '-'}</a></h3>
      <p>${restaurants.description || '-'}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};