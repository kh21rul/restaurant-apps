import {
    openDB,
} from 'idb';
import CONFIG from '../globals/config';

const {
    DATABASE_NAME,
    DATABASE_VERSION,
    OBJECT_STORE_NAME,
} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, {
            keyPath: 'id',
        });
    },
});

const FavoriteRestaurantIdb = {
    async getRestaurant(id) {
        if (!id) {
            return;
        }

        // eslint-disable-next-line consistent-return
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },

    async getAllRestaurants() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },

    async putRestaurant(restaurant) {
        // eslint-disable-next-line no-prototype-builtins
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        // eslint-disable-next-line consistent-return
        return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    },

    async deleteRestaurant(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },

    async searchRestaurants(query) {
        return (await this.getAllRestaurants()).filter((restaurant) => {
            const loweredCaseRestaurantTitle = (restaurant.title || '-').toLowerCase();
            const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(/\s/g, '');

            const loweredCaseQuery = query.toLowerCase();
            const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

            return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
        });
    },
};

export default FavoriteRestaurantIdb;