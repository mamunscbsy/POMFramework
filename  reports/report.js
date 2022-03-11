$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/doc.feature");
formatter.feature({
  "name": "Automate Leaftaps Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter username as \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa"
      ]
    },
    {
      "cells": [
        "DemoCSR",
        "crmsfa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:53)\r\n\tat ✽.enter username as DemoSalesManager(file:src/test/java/features/doc.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.itsNavigatedHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLogoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter username as DemoCSR",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:53)\r\n\tat ✽.enter username as DemoCSR(file:src/test/java/features/doc.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.itsNavigatedHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLogoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "TC002_Login and Logout for failure",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter username as \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "name": "its navigate same Page",
  "keyword": "Then "
});
formatter.step({
  "name": "verify error msg",
  "keyword": "But "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Mamun",
        "crmsfa"
      ]
    },
    {
      "cells": [
        "DemoCSR",
        "crmsfa1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC002_Login and Logout for failure",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter username as Mamun",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:53)\r\n\tat ✽.enter username as Mamun(file:src/test/java/features/doc.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "its navigate same Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.samePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error msg",
  "keyword": "But "
});
formatter.match({
  "location": "LoginTest.verifyErrMsg()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC002_Login and Logout for failure",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter username as DemoCSR",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:53)\r\n\tat ✽.enter username as DemoCSR(file:src/test/java/features/doc.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter password as crmsfa1",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "its navigate same Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.samePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error msg",
  "keyword": "But "
});
formatter.match({
  "location": "LoginTest.verifyErrMsg()"
});
formatter.result({
  "status": "skipped"
});
});