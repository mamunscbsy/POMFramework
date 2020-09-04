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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:32)\r\n\tat ✽.enter username as DemoSalesManager(file:src/test/java/features/doc.feature:7)\r\n",
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:32)\r\n\tat ✽.enter username as DemoCSR(file:src/test/java/features/doc.feature:7)\r\n",
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:32)\r\n\tat ✽.enter username as ssssss(file:src/test/java/features/doc.feature:23)\r\n",
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
formatter.scenario({
  "name": "TC003_CreateLead",
  "description": "",
  "keyword": "Scenario",
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:32)\r\n\tat ✽.enter username as demosalesmanager(file:src/test/java/features/doc.feature:34)\r\n",
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
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickCRMSFA()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_leads_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click createLead",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickCreateLead()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the company as TCS",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterTheCompanyAsTCS()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the first name as Gopi",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterTheFirstNameAsGopi()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the last name as J",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose source as Website",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click the create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheCreateLeadButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "its navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.itsNavigatedViewLeadPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the firstname",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.verify_the_firstname()"
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:32)\r\n\tat ✽.enter username as demosalesmanager(file:src/test/java/features/doc.feature:52)\r\n",
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
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickCRMSFA()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_leads_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Find Leads",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter firstname",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enter_firstname()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Find Leads button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads_button()"
});
formatter.result({
  "status": "skipped"
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
  "name": "navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.navigated_ViewLeadPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.verify_title_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Edit",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_on_Edit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigated Edit Lead page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.navigated_Edit_Lead_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change the company name",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.change_the_company_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click update",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_update()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "confirm changed name appears",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.confirm_changed_name_appears()"
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:32)\r\n\tat ✽.enter username as demosalesmanager(file:src/test/java/features/doc.feature:73)\r\n",
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
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickCRMSFA()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_leads_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Find Leads",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on phone",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_on_phone()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter phone number",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enter_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click find leads button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_find_leads_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "capture lead ID of first resulting lead",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.capture_lead_ID_of_first_resulting_lead()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginTest.enterUsernameAsDemosalesmanager(LoginTest.java:32)\r\n\tat ✽.enter username as demosalesmanager(file:src/test/java/features/editlead.feature:5)\r\n",
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
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickCRMSFA()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_leads_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Find Leads",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter firstname",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enter_firstname()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Find Leads button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_Find_Leads_button()"
});
formatter.result({
  "status": "skipped"
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
  "name": "navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.navigated_ViewLeadPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.verify_title_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Edit",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_on_Edit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigated Edit Lead page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.navigated_Edit_Lead_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change the company name",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.change_the_company_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click update",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.click_update()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "confirm changed name appears",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.confirm_changed_name_appears()"
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
});