$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\calance\\kxdocs\\login\\kxdocsLogin.feature");
formatter.feature({
  "line": 1,
  "name": "I want to login to Kxdocs",
  "description": "\r\nIn order to access application\r\nAs a admin\r\nI want to login to Kxdocs",
  "id": "i-want-to-login-to-kxdocs",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1333082,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I want to login to kxdocs application",
  "description": "",
  "id": "i-want-to-login-to-kxdocs;i-want-to-login-to-kxdocs-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I want to login to kxdocs on \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"WelcomeKxDocsEmail\" as \"kxdocsapp@onirvana.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on \"WelcomeKXdocsBtnSubmit\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"BoxLoginEmailId\" as \"kxdocsapp@onirvana.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"BoxLoginPassword\" as \"oNirvana20140501\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \"BoxLoginAuthorizeBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"GrantAccessToBoxBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "login should be \"pass\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
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
  "duration": 11629474351,
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
  "duration": 395297150,
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
  "duration": 121051641,
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
  "duration": 3826044713,
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
  "duration": 298278054,
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
  "duration": 2298470205,
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
  "duration": 6669164628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 17
    }
  ],
  "location": "KxdocsLogin.verifyLogin(String)"
});
formatter.result({
  "duration": 88913406,
  "status": "passed"
});
formatter.before({
  "duration": 534830,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I want to login to kxdocs application",
  "description": "",
  "id": "i-want-to-login-to-kxdocs;i-want-to-login-to-kxdocs-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I want to login to kxdocs on \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"WelcomeKxDocsEmail\" as \"abc@um.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on \"WelcomeKXdocsBtnSubmit\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"BoxLoginEmailId\" as \"abc@um.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"BoxLoginPassword\" as \"oNirvana20140501\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \"BoxLoginAuthorizeBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"GrantAccessToBoxBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "login should be \"fail\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
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
  "duration": 11018041657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WelcomeKxDocsEmail",
      "offset": 9
    },
    {
      "val": "abc@um.com",
      "offset": 33
    }
  ],
  "location": "KxdocsLogin.input(String,String)"
});
formatter.result({
  "duration": 368149706,
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
  "duration": 134351676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoxLoginEmailId",
      "offset": 9
    },
    {
      "val": "abc@um.com",
      "offset": 30
    }
  ],
  "location": "KxdocsLogin.input(String,String)"
});
formatter.result({
  "duration": 20070271349,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d39.0.2171.95)\n  (Driver info: chromedriver\u003d2.10.267521,platform\u003dWindows NT 6.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.01 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027calance_123\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_25\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\KOMALM~1\\AppData\\Local\\Temp\\scoped_dir5652_22825}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d39.0.2171.95, platform\u003dWIN8, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4e11929ff3ab63617106f416fc75d1a5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.calance.kxdocs.login.WebConnector.input(WebConnector.java:56)\r\n\tat com.calance.kxdocs.login.KxdocsLogin.input(KxdocsLogin.java:36)\r\n\tat ✽.And I enter \"BoxLoginEmailId\" as \"abc@um.com\"(com\\calance\\kxdocs\\login\\kxdocsLogin.feature:12)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "fail",
      "offset": 17
    }
  ],
  "location": "KxdocsLogin.verifyLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("com\\calance\\kxdocs\\login\\test.feature");
formatter.feature({
  "line": 1,
  "name": "I want to test kxdocs",
  "description": "",
  "id": "i-want-to-test-kxdocs",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "I want to login to kxdocs application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I want to login to kxdocs on \"Chrome\"",
  "keyword": "Given "
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
  "duration": 9977465889,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I want to test kxdocs application",
  "description": "",
  "id": "i-want-to-test-kxdocs;i-want-to-test-kxdocs-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I want to get title",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I get title",
  "keyword": "And "
});
formatter.match({
  "location": "test.gettitle()"
});
formatter.result({
  "duration": 495488,
  "status": "passed"
});
formatter.match({
  "location": "test.get()"
});
formatter.result({
  "duration": 76974,
  "status": "passed"
});
});