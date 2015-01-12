Feature: I want to logout from Kxdocs

Scenario: I want to logout from kxdocs application
Given I am logged in KXdocs 
And click on button "UserSettingsLink" 
And click on button "UserSettingLogoutBtn"
Then logout should be "success"