import RestoDbSource from '../../data/restodb-source';
import {
    createRestaurantsItemTemplate,
} from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <div class="content">
                <h2 class="content__heading">Daftar Restaurant</h2>
                <div id="restaurants" class="restaurants">

                </div>
            </div>
        `;
    },

    async afterRender() {
        const restaurantsContainer = document.querySelector('#restaurants');

        const restaurants = await RestoDbSource.home();
        restaurants.forEach((restaurantItem) => {
            restaurantsContainer.innerHTML +=
                createRestaurantsItemTemplate(restaurantItem);
        });
    },
};

export default Home;