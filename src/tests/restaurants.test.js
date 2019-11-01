import {initializeBrowser, initializePage} from './utils/initialize'
import {apiCalls} from './utils/apiCalls'
import {restaurantListNames,restaurantListNamesWithBiriyaniCuisine} from './utils/responses'
import _ from 'lodash'

describe('Restaurants page', () => {

    let page
    let browser

    beforeAll(async () => {
        browser = await initializeBrowser()
        page = await initializePage(browser)
    })

    afterAll(async () => {
        browser.close()
    })

    beforeEach(async () => {
        await page.close();
        page = await initializePage(browser)
    })

    it('Should display restaurants returned from the API correctly', async () => {

        await page.setRequestInterception(true)
        apiCalls(page)

        await page.goto('http://localhost:3000')

        await page.waitForSelector('#restaurants')
        await page.click('#restaurants')

        let _restaurantsListNames = await page.$$eval('.ant-card-head-title', restaurants => restaurants.map(res => res.innerText))
        let doRestaurantsNameMatches = _.isEqual(_restaurantsListNames, restaurantListNames)
        expect(doRestaurantsNameMatches).toBe(true)

    }, 1000000)

    it('Should be able to search for a cuisines and display the related restaurants', async () => {

        await page.setRequestInterception(true)
        apiCalls(page)

        await page.goto('http://localhost:3000/restaurants')

        await page.waitForSelector('#restaurant_search')
        await page.click('#restaurant_search')
        await page.type('#restaurant_search', 'biriyani')
        await page.click('.ant-input-search-icon')

        let _restaurantsListNamesWithBiriyaniCuisine = await page.$$eval('.ant-card-head-title', restaurants => restaurants.map(res => res.innerText))
        let doRestaurantsNameMatches = _.isEqual(_restaurantsListNamesWithBiriyaniCuisine, restaurantListNamesWithBiriyaniCuisine)
        expect(doRestaurantsNameMatches).toBe(true)

    }, 1000000)
})