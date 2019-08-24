import {initializeBrowser, initializePage} from './utils/initialize'
import {apiCalls} from './utils/apiCalls'
import {assertion} from './utils/helpers'
import _ from 'lodash'

describe('Single restaurant page', () => {

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

    it('Goto a first restaurant and check if the details are correct', async () => {

        await page.setRequestInterception(true)
        apiCalls(page)

        await page.goto('http://localhost:3000')

        await page.waitForSelector('#restaurants')
        await page.click('#restaurants')

        await page.waitForSelector('.ant-card-extra')
        let restaurant = (await page.$$('.ant-card-extra'))[0]
        restaurant.click()

        await assertion(page, '#address','📬   4/581 A, Velachery Main Road, Senthamizh Nagar, Medavakkam, Chennai')
        await assertion(page, '#cuisines','😋   North Indian, Chinese, Arabian')
        await assertion(page, '#timings','⏰   11:30 AM – 11:30 PM')
        await assertion(page, '#average_cost_for_two','💰   700')
        await assertion(page, '#user_rating','⭐   4.8')
        await assertion(page, '#all_reviews_count','👩‍   673')

    }, 1000000)
})