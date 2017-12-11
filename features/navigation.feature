Feature: Navigate to the major pages of the site::

    As a visitor to the site
    I want to click on the main navigation links at the top
    So I can see all the major pages

    Background: I am on the home page

        Given I navigate to the "Home" page

    Scenario: When I click "Videos" I am taken to the Videos page

        When I click "Videos"
        Then I should be on the "Videos" page

    Scenario: When I click "Destinations" I am taken to the Destinations page

        When I click "Destinations"
        Then I should be on the "Destinations" page