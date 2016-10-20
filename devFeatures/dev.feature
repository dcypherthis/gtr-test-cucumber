Feature: Login::

    As a returning user
    I want to log into the app
    Because I want to start practicing my guitar

    Scenario: Logging In with an existing account:

        Given   I navigate to the "Home" page
        And     I am not logged in
        When    I click "login"
        Then    I should be on the "Login" page
        And     I log in as a "default" user
        Then    I should be logged in
