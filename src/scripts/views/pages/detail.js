import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import {
    createRestaurantDetailTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
    async render() {
        return `
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"> </div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestoDbSource.detailResto(url.id);
        const restaurantContainer = document.querySelector('#restaurant');

        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                pictureId: restaurant.pictureId,
                rating: restaurant.rating,
                city: restaurant.city,
            },
        });
    },
};

export default Detail;