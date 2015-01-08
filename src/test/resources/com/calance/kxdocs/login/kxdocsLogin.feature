Feature: I want to login to Kxdocs

In order to access application
As a admin
I want to login to Kxdocs

Scenario: I want to login to kxdocs application
Given I want to login to kxdocs on "Chrome"
And I enter "WelcomeKxDocsEmail" as "kxdocsapp@onirvana.com"
And I click on "WelcomeKXdocsBtnSubmit"
And I enter "BoxLoginEmailId" as "kxdocsapp@onirvana.com"
And I enter "BoxLoginPassword" as "oNirvana20140501"
And I click on "BoxLoginAuthorizeBtn"
And I click on "GrantAccessToBoxBtn"
Then login should be "success"
