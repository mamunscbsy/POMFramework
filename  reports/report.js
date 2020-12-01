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
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
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
formatter.step({
  "name": "close browser",
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
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChromeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.itsNavigatedHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLogoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.close_browser()"
});
formatter.result({
  "status": "passed"
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
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChromeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoCSR",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.itsNavigatedHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLogoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC002_Login and Logout for failure",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@functional"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChromeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as ssssss",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigate same Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.samePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error msg",
  "keyword": "But "
});
formatter.match({
  "location": "LoginTest.verifyErrMsg()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC003_CreateLead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.step({
  "name": "click createLead",
  "keyword": "When "
});
formatter.step({
  "name": "enter the company as \u003ccompany\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter the firstname as \u003cfirstname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter the lastname as \u003clastname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "choose source as Website",
  "keyword": "And "
});
formatter.step({
  "name": "click the create lead button",
  "keyword": "And "
});
formatter.step({
  "name": "its navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the firstname",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "company",
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "TCS",
        "Hema",
        "Mali"
      ]
    },
    {
      "cells": [
        "ABC",
        "Raj",
        "Kumar"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC003_CreateLead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChromeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_leads_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click createLead",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the company as TCS",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterTheCompanyAsTCS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the firstname as Hema",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterTheFirstNameAsGopi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the lastname as Mali",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterTheLastNameAsJ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose source as Website",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.chooseSourceAsWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheCreateLeadButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.itsNavigatedViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the firstname",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.verify_the_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC003_CreateLead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChromeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_leads_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click createLead",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the company as ABC",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterTheCompanyAsTCS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the firstname as Raj",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterTheFirstNameAsGopi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the lastname as Kumar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterTheLastNameAsJ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose source as Website",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.chooseSourceAsWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheCreateLeadButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.itsNavigatedViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the firstname",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.verify_the_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC004_EditLead",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChromeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_leads_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Find Leads",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter firstname",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enter_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Find Leads button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click first resulting lead",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_first_resulting_lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.navigated_ViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.verify_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Edit",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_on_Edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigated Edit Lead page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.navigated_Edit_Lead_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change the company name",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.change_the_company_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click update",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_update()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirm changed name appears",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.confirm_changed_name_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC005_DeleteLead",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChromeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_leads_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Find Leads",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on phone",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_on_phone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enter_phone_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click find leads button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_find_leads_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "capture lead ID of first resulting lead",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.capture_lead_ID_of_first_resulting_lead()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d87.0.4280.66)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONH3S9L\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\mamun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61785}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8c7d94a02991f95ad45a6ff70d6f79bf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat steps.LoginTest.capture_lead_ID_of_first_resulting_lead(LoginTest.java:202)\r\n\tat ✽.capture lead ID of first resulting lead(file:src/test/java/features/doc.feature:88)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click first resulting lead",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_first_resulting_lead()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Delete",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_Delete()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigated MyLeadsPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.navigated_MyLeadsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Find Leads",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter captured lead ID",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enter_captured_lead_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.verify_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/java/features/editlead.feature");
formatter.feature({
  "name": "Automate Leaftaps Application EditLead",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC004_EditLead",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChromeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_leads_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Find Leads",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter firstname",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enter_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Find Leads button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click first resulting lead",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_first_resulting_lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.navigated_ViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.verify_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Edit",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_on_Edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigated Edit Lead page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.navigated_Edit_Lead_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change the company name",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.change_the_company_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click update",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_update()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirm changed name appears",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.confirm_changed_name_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.close_browser()"
});
formatter.result({
  "status": "passed"
});
});