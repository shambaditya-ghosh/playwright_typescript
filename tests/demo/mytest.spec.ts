import{test, expect} from '@playwright/test';

test('should load home page with correct page title',async({page})=>{

    //  1. Go to the home page
    await page.goto('https://saucedemo.com');

    //  2. Assert if the title is correct
    await expect(page).toHaveTitle('Swag Labs');

    //  3. Assert Header text
    await expect(page.locator("//div[@class='login_logo']")).toHaveText('Swag Labs');

});

test('should have username and password input fields', async({page})=>{
    
    await page.goto('https://saucedemo.com');
    await expect(page.locator("#user-name")).toHaveAttribute('placeholder', 'Username');
    await expect(page.locator("#user-name")).toBeVisible();

    await expect(page.locator("#password")).toHaveAttribute('placeholder', 'Password');
    await expect(page.locator("#password")).toBeVisible();

})