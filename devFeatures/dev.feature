Feature: DEV: Add A New Song::

    As a logged-in user
    I want to add a song
    So I can start practicing it.

    Background: Logging In & Navigating to "Songs"

        Given   I am logged in as a "default" user
        And     I navigate to the "Songs" page

    Scenario: Logging In with an existing account:

        When    I click "Logout"
        Then    I should be on the "Home" page
