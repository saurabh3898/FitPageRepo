import { Given, When, Then } from "@cucumber/cucumber";
import NavigationPage from "../../pages/navigationPage";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import * as data from "../../helper/util/test-data/registerUser.json";

let navigationPage: NavigationPage;
let assert: Assert;

Given('the user is on the homepage', async function () {
    navigationPage = new NavigationPage(fixture.page);
    assert = new Assert(fixture.page);
    await navigationPage.navigateToHomePage();
});

When('the user can see All Events link', async function () {
     const allEventsLink = await navigationPage.allEventsLink();
    await allEventsLink.isVisible();
});

Then('All Events link should be enable', async function () {
    const allEventsLink = await navigationPage.allEventsLink();
    await allEventsLink.isEnabled();
});

Then('the user can see Training link', async function () {
    const trainingLink = await navigationPage.trainingLink();
    await trainingLink.isVisible();
});

Then('Training link should be enable', async function () {
    const trainingLink = await navigationPage.trainingLink();
    await trainingLink.isEnabled();
});

When('the user can see Shop link', async function () {
    const shopLink = await navigationPage.shopLink();
    await shopLink.isVisible();
});

Then('Shop link should be enable', async function () {
    const shopLink = await navigationPage.shopLink();
    await shopLink.isEnabled();
});

When('the user can see Create Event link', async function () {
    const createEventLink = await navigationPage.createEventLink();
    await createEventLink.isVisible();
});

Then('Create Event link should be enable', async function () {
    const createEventLink = await navigationPage.createEventLink();
    await createEventLink.isEnabled();
});

When('the user can see Log In link', async function () {
    const loginLink = await navigationPage.loginLink();
    await loginLink.isVisible();
});

Then('Log In link should be enable', async function () {
    const loginLink = await navigationPage.loginLink();
    await loginLink.isEnabled();
});

When('the user can see Sign Up link', async function () {
    const signUpLink = await navigationPage.signUpLink();
    await signUpLink.isVisible();
});

Then('Sign Up link should be enable', async function () {
    const signUpLink = await navigationPage.signUpLink();
    await signUpLink.isEnabled();
});

When('the user clicks on Log In link', async function () {
    const loginLink = await navigationPage.loginLink();
    await loginLink.click();
});

Then('the user should be navigated to Login page', async function () {
    const loginPage = await navigationPage.loginPageLink();
    await loginPage.isVisible();
});

When('user enters a mobile number', async function () {
    const userMobileNumber = await navigationPage.userMobileNumber();
    await userMobileNumber.fill('7066737409')
});

When('click on get otp button', async function () {
    const otpButton = await navigationPage.otpButton();
    await otpButton.click();
});

When('the user clicks on Sign Up link', async function () {
    const signupLink = await navigationPage.signUpLink();
    await signupLink.click();
});

When('the user should be navigated to Sign Up page', async function () {
    const signUpLink = await navigationPage.signUpPageLink();
    await signUpLink.isVisible();
});

When('the user hovers on Event by distance link', async function () {
    const eventByDistance = await navigationPage.eventByDistance();
    await eventByDistance.hover();
});

When('the user should see a list of events by distance', async function () {
    const eventByDistanceList = await navigationPage.eventByDistanceList();
    await eventByDistanceList.isVisible();
});

When('User clicks on <5k distance', async function () {
    const eventByDistanceList = await navigationPage.eventByDistance5k();
    await eventByDistanceList.click();
});

When('the user should be navigated to <5k distance page', async function () {
    const eventByDistanceList = await navigationPage.eventByDistance5kPage();
    await eventByDistanceList.isVisible();
});

When('the user hovers on Event by city link', async function () {
    const eventByLocation = await navigationPage.eventByLocation();
    await eventByLocation.first().hover();
})

When('the user should see a list of events by city', async function () {
    const eventByLocationList = await navigationPage.eventByCityList();
    await eventByLocationList.isVisible();
});

When('User clicks on Mumbai city', async function () {
    const eventByLocationList = await navigationPage.eventByCityMumbai();
    await eventByLocationList.click();
});

When('the user should be navigated to Mumbai city page', async function () {
    const eventByLocationList = await navigationPage.eventByCityMumbaiPage();
    await eventByLocationList.isVisible();
});

