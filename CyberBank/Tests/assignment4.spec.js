// Write a GENERAL function that works on every website and clicks on specific item in dropdown.
// Your function should accept parameters about the dropdown list and the value you want to click, and in return it should click on that dropdown.
describe("Assignment 4", () => {
    function dropdownClick(listLocatorKey,listLocatorValue,optionLocatorKey,optionLocatorValue) {
        function selected(listLocatorKey,listLocatorValue) {
            switch(listLocatorKey) {
                case "id":
                    return element.all(by.id(listLocatorValue));
                case "name":
                    return element.all(by.name(listLocatorValue));
                case "className":
                    return element.all(by.className(listLocatorValue));
                case "tagName":
                    return element.all(by.tagName(listLocatorValue));
                case "xpath":
                    return element.all(by.xpath(listLocatorValue));
                case "css":
                    return element.all(by.css(listLocatorValue));
                case "model":
                    return element.all(by.model(listLocatorValue));
                case "options":
                    return element.all(by.options(listLocatorValue));
                case "repeater":
                    return element.all(by.css(listLocatorValue));
            }
        }
        function optionList(optionLocatorKey,optionLocatorValue) {
            switch(optionLocatorKey) {
                case "id":
                    return element(by.id(optionLocatorValue));
                case "name":
                    return element(by.name(optionLocatorValue));
                case "className":
                    return element(by.className(optionLocatorValue));
                case "tagName":
                    return element(by.tagName(optionLocatorValue));
                case "xpath":
                    return element(by.xpath(optionLocatorValue));
                case "css":
                    return element(by.css(optionLocatorValue));
                case "model":
                    return element(by.model(optionLocatorValue));
                case "options":
                    return element(by.options(optionLocatorValue));
                case "repeater":
                    return element(by.css(optionLocatorValue));
            }
        }
        let selectList = selected(listLocatorKey,listLocatorValue);
        // selectList.click();
        let optionSelected = optionList(optionLocatorKey,optionLocatorValue);
        optionSelected.click();
    }
    it('should click super calculator operator', () => {
        browser.waitForAngularEnabled(false);
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(5);
        dropdownClick('model','operator','css','option[value="MULTIPLICATION"]');
        element(by.id('gobutton')).click();
        browser.sleep(2000);
        element(by.model('first')).sendKeys(3);
        element(by.model('second')).sendKeys(4);
        dropdownClick('model','operator','css','option[value="ADDITION"]');
        element(by.id('gobutton')).click();
        browser.sleep(2000);
   });
});