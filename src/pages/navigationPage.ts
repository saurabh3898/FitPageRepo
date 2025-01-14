import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class NavigationPage {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async navigateToHomePage() {
        await this.base.goto("https://www.indiarunning.com/")
    }

    async allEventsLink() {
        return this.page.getByRole('button', { name: 'All Events' })
    }

    async trainingLink() {
        return this.page.getByRole('link', { name: 'Training' })
    }

    async shopLink() {
        return this.page.getByRole('link', { name: 'Shop' })
    }

    async createEventLink(){
        return this.page.getByRole('link', { name: 'Create Event' })
    }

    async loginLink(){
        return this.page.locator("//span[normalize-space()='Log In']")
    }

    async signUpLink(){
        return this.page.locator("//span[normalize-space()='Sign Up']")
    }

    async signUpPageLink(){
        return this.page.locator('//*[@id="__next"]/div[2]/div[1]/div/h2')
    }

    async loginPageLink(){
        return this.page.locator("//h2[text()='Login/SignUp']")
    }

    async userMobileNumber(){
        return this.page.locator('//*[@id="__next"]/div[2]/div[1]/div/form/div/div/input')
    }
    
    async otpButton(){
        return this.page.locator("//span[text()='Get OTP']")
    }

    async eventByDistance(){
        return this.page.locator("//p[text()='Events by Distance']")
    }

    async eventByLocation(){
        return this.page.locator("//p[text()='Events by City']")
    }

    async eventByDistanceList(){
        return this.page.locator('//*[@id="main-container"]/div[2]/div/div/div[1]/div/div/div/div')
    }

    async eventByDistance5k(){
        return this.page.locator("//a[normalize-space()='<5k']")
    }

    async eventByDistance5kPage(){
        return this.page.locator("//h1[text()='<5K RUNS']")
    }

    async eventByCityList(){
        return this.page.locator('//*[@id="main-container"]/div[2]/div/div/div[2]/div/div/div/div')
    }

    async eventByCityMumbai(){
        
        return this.page.locator('//*[@id="main-container"]/div[2]/div/div/div[2]/div/div/div/div/ul[1]/li[1]/a')
    }

    async eventByCityMumbaiPage(){
        return this.page.locator("//h1[text()='Mumbai']")
    }
}

