$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/juspay.feature");
formatter.feature({
  "name": "Juspay test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login to flipkart page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_01"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@system"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to flipcart Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefnition.jusypay.navigate_to_flipcart_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter mobile number",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnition.jusypay.enter_mobile_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and click on continue",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnition.jusypay.and_click_on_continue()"
});
formatter.result({
  "status": "passed"
});
});