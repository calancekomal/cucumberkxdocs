$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\calance\\kxdocs\\login\\kxdocsLogin.feature");
formatter.feature({
  "id": "i-want-to-login-to-kxdocs",
  "description": "\nIn order to access application\nAs a admin\nI want to login to Kxdocs",
  "name": "I want to login to Kxdocs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1950586,
  "status": "passed"
});
formatter.scenario({
  "id": "i-want-to-login-to-kxdocs;i-want-to-login-to-kxdocs-application",
  "tags": [
    {
      "name": "@KxdocsLogin",
      "line": 7
    }
  ],
  "description": "",
  "name": "I want to login to kxdocs application",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I want to login to kxdocs on \"Chrome\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I enter \"WelcomeKxDocsEmail\" as \"kxdocsapp@onirvana.com\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I click on \"WelcomeKXdocsBtnSubmit\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I enter \"BoxLoginEmailId\" as \"kxdocsapp@onirvana.com\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I enter \"BoxLoginPassword\" as \"oNirvana20140501\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I click on \"BoxLoginAuthorizeBtn\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click on \"GrantAccessToBoxBtn\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "login should be \"success\"",
  "keyword": "Then ",
  "line": 16
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 30
    }
  ],
  "location": "KxdocsLogin.gotokxdocs(String)"
});
formatter.result({
  "duration": 35338632776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WelcomeKxDocsEmail",
      "offset": 9
    },
    {
      "val": "kxdocsapp@onirvana.com",
      "offset": 33
    }
  ],
  "location": "KxdocsLogin.input(String,String)"
});
formatter.result({
  "duration": 815390528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WelcomeKXdocsBtnSubmit",
      "offset": 12
    }
  ],
  "location": "KxdocsLogin.click(String)"
});
formatter.result({
  "duration": 150867358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoxLoginEmailId",
      "offset": 9
    },
    {
      "val": "kxdocsapp@onirvana.com",
      "offset": 30
    }
  ],
  "location": "KxdocsLogin.input(String,String)"
});
formatter.result({
  "duration": 11336283635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoxLoginPassword",
      "offset": 9
    },
    {
      "val": "oNirvana20140501",
      "offset": 31
    }
  ],
  "location": "KxdocsLogin.input(String,String)"
});
formatter.result({
  "duration": 373338496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoxLoginAuthorizeBtn",
      "offset": 12
    }
  ],
  "location": "KxdocsLogin.click(String)"
});
formatter.result({
  "duration": 5163928472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GrantAccessToBoxBtn",
      "offset": 12
    }
  ],
  "location": "KxdocsLogin.click(String)"
});
formatter.result({
  "duration": 10270232268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "KxdocsLogin.verifyLogin(String)"
});
formatter.result({
  "duration": 132952301,
  "status": "passed"
});
formatter.uri("com\\calance\\kxdocs\\login\\kxdocsLogout.feature");
formatter.feature({
  "id": "i-want-to-logout-from-kxdocs",
  "description": "",
  "name": "I want to logout from Kxdocs",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "i-want-to-logout-from-kxdocs;i-want-to-logout-from-kxdocs-application",
  "description": "",
  "name": "I want to logout from kxdocs application",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I am logged in KXdocs",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "click on button \"UserSettingsLink\"",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "click on button \"UserSettingLogoutBtn\"",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "logout should be \"success\"",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "KxdocsLogout.VerifyKXDocsHomePageLoaded()"
});
formatter.result({
  "duration": 1082582026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserSettingsLink",
      "offset": 17
    }
  ],
  "location": "KxdocsLogout.clickById(String)"
});
formatter.result({
  "duration": 326379607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserSettingLogoutBtn",
      "offset": 17
    }
  ],
  "location": "KxdocsLogout.clickById(String)"
});
formatter.result({
  "duration": 194187927,
  "status": "failed",
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d39.0.2171.65)\n  (Driver info: chromedriver\u003d2.10.267521,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 73 milliseconds\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027calance9\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.7.0_71\u0027\nSession ID: 1812ba8dc966ae4879b350e116f14b6b\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dWIN8_1, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\Admin\\AppData\\Local\\Temp\\scoped_dir6208_9465}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d39.0.2171.65, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:79)\r\n\tat com.calance.kxdocs.login.WebConnector.clickById(WebConnector.java:55)\r\n\tat com.calance.kxdocs.login.KxdocsLogout.clickById(KxdocsLogout.java:37)\r\n\tat ✽.And click on button \"UserSettingLogoutBtn\"(com\\calance\\kxdocs\\login\\kxdocsLogout.feature:6)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 18
    }
  ],
  "location": "KxdocsLogout.verifyLogin(String)"
});
formatter.result({
  "status": "skipped"
});
});