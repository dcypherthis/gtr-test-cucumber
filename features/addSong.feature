Feature: Add A New Song::

    As a logged-in user
    I want to add a song
    So I can start practicing it.

    Background: Logging In & Navigating to "Songs"

        Given   I am logged in as a "default" user
        And     I navigate to the "Songs" page

    Scenario: Adding a Song:

        When    I click the "Plus Sign"
        And     I enter "St Lucia" for the "Artist" input
        And     I enter "Elevate" for the "Song Title" input
        And     I enter "https://open.spotify.com/track/5BxVRqpZi6tIhAap1ZjzVD" for the "Spotify Url" input
        And     I click "Save"
        Then    I should be on the "Songs" page
        And     I should see the "Song Added Message"
