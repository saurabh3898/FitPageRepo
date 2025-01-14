Feature: Navigation Bar Links Verification
   
Background: Before each scenario
     Given the user is on the homepage

  Scenario: Verify navigation bar links are visible and clickable
    When the user can see All Events link
    Then All Events link should be enable
    When the user can see Training link
    Then Training link should be enable
    When the user can see Shop link
    Then Shop link should be enable
    When the user can see Create Event link
    Then Create Event link should be enable
    When the user can see Log In link
    Then Log In link should be enable
    When the user can see Sign Up link
    Then Sign Up link should be enable

    Scenario: User clicks on Login
    When the user clicks on Log In link
    Then the user should be navigated to Login page
    When user enters a mobile number
    And  click on get otp button

    Scenario: User clicks on Sign Up
    When the user clicks on Sign Up link
    Then the user should be navigated to Sign Up page
    When user enters a mobile number

    Scenario: User hovers on Event by distance
    When the user hovers on Event by distance link
    Then the user should see a list of events by distance
    When User clicks on <5k distance
    Then the user should be navigated to <5k distance page

    Scenario: User hovers on Event by city
    When the user hovers on Event by city link
    Then the user should see a list of events by city
    When User clicks on Mumbai city
    Then the user should be navigated to Mumbai city page

    
    