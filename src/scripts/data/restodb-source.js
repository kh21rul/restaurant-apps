import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
    static async home() {
        const response = await fetch(API_ENDPOINT.HOME);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }
}

export default RestoDbSource;