import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
    createRestaurantsItemTemplate,
} from '../templates/template-creator';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        new FavoriteRestaurantShowPresenter({
            view,
            favoriteRestaurants: FavoriteRestaurantIdb
        })
        new FavoriteRestaurantSearchPresenter({
            view,
            favoriteRestaurants: FavoriteRestaurantIdb
        })
    },
};

export default Like;