Feature: Homepage

    I want to see the page has the correct content and functionality

    Scenario: Opening the homepage
        Given I open the website
        And I see "schmelto" in the title

    Scenario: Check the content in the footer
        Given I see "schmelto" in "footer"