$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/FbSignUp.feature");
formatter.feature({
  "name": "Fb SignUp Feature to validate the add new user functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that user is able to create the new Account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FbSignUp"
    }
  ]
});
formatter.step({
  "name": "User has launched the FB application",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on the Create New Account Link",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cMobileNum\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cMonth\u003e\" \"\u003cDate\u003e\" and \"\u003cYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click on the SignUp button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be able to see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "MobileNum",
        "Password",
        "Month",
        "Date",
        "Year"
      ]
    },
    {
      "cells": [
        "Raj",
        "Sharma",
        "9999999999",
        "abc123@abc",
        "8",
        "12",
        "1990"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user is able to create the new Account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FbSignUp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the FB application",
  "keyword": "Given "
});
formatter.match({
  "location": "FbSignUpSteps.user_has_launched_the_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Create New Account Link",
  "keyword": "When "
});
formatter.match({
  "location": "FbSignUpSteps.user_clicks_on_the_create_new_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Raj\" \"Sharma\" \"9999999999\" and \"abc123@abc\"",
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpSteps.user_enters_something_something_something_and_something(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"8\" \"12\" and \"1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpSteps.user_selects_something_something_and_something(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the SignUp button",
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpSteps.user_click_on_the_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "FbSignUpSteps.user_should_be_able_to_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});