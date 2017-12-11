Feature: Navigate to the major pages of the site::

    As a visitor to the site
    I want to click on the main navigation links at the top
    So I can see all the major pages

    Background: I am on the home page

        Given I am on the "home" page

    Scenario: When I click "Videos" I am taken to the Videos page

        When I click on the "Videos" links
        Then I should see the "videos grid"