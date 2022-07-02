const assert = require('assert');
const {
    async
} = require('regenerator-runtime');

Feature('Liking Restaurants');

Before(({
    I
}) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({
    I
}) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking and unliking one restaurant ', async ({
    I
}) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');

    I.seeElement('.restaurant__title a');
    const firstRestaurant = locate('.restaurant__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    // unliking the restaurant
    I.waitForElement('.restaurant-item', 5);
    I.seeElement('.restaurant-item');
    I.click('.restaurant__title a');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item__not__found');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});