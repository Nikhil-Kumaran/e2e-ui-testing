export const assertion = async (page, selector, value) => {
    let text
    await page.waitForSelector(selector)
    text = await page.$eval(selector, e => e.innerText);
    expect(text).toBe(value);
}