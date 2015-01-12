Feature: I want to login to Kxdocs

In order to access application
As a admin
I want to login to Kxdocs


@web
Scenario Outline: I want to login to kxdocs application
Given I want to login to kxdocs on "Chrome"
And I enter "WelcomeKxDocsEmail" as "<email>"
And I click on "WelcomeKXdocsBtnSubmit"
And I enter "BoxLoginEmailId" as "<username>"
And I enter "BoxLoginPassword" as "<password>"
And I click on "BoxLoginAuthorizeBtn"
And I click on "GrantAccessToBoxBtn"
Then login should be "<success>"

Examples:
|  email     			  |  username                 |  password          | success  |
|  kxdocsapp@onirvana.com |  kxdocsapp@onirvana.com   |  oNirvana20140501  | pass     |
|  abc@um.com             |  abc@um.com               |  oNirvana20140501  | fail     |


