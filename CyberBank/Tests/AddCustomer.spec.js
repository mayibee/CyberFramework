require('../Utilities/CustomLocators.js');
var HomePage = require('../Pages/Home.page.js');
var BankManagerPage = require('../Pages/BankManager.page.js');
var Base = require('../Utilities/Base.js');
var AddCustomerPage = require('../Pages/AddCustomer.page.js');
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');

describe('Add Customer', () => {
    //anything that is test related should stay inside describe. require files go outside.

    describe('Adding a Customer', () => {
        beforeAll(function(){
            Base.navigateToHome();
            HomePage.bankManagerLoginButton.click();
            AddCustomerPage.goToAddCustomer();
        });
        it('should display form for Adding Customer', () => {
            //this checks the color in the button has changed when clicking it. But it won't work once we have the AddCustomerPage.goToAddCustomer() method. 
            // BankManagerPage.addCustomerButton.getCssValue('color').then((color) => {
            //     BankManagerPage.addCustomerButton.click();
            //     expect(BankManagerPage.addCustomerButton.getCssValue('color')).not.toEqual(color);
            // });
            expect(AddCustomerPage.customerForm.isDisplayed()).toBe(true);
            expect(AddCustomerPage.formLabels.count()).toEqual(3);
        });
        it('should list all the labels in the form', () => {
            expect(AddCustomerPage.firstNameLabel.getText()).toEqual('First Name :');
            expect(AddCustomerPage.lastNameLabel.getText()).toEqual('Last Name :');
            expect(AddCustomerPage.postCodeLabel.getText()).toEqual('Post Code :');
        });
        it('should require First Name', () => {
            // AddCustomerPage.firstNameInputBox.sendKeys(protractor.Key.ENTER);
            // expect(BAddCustomerPage.firstNameInputBox.getAttribute('class')).toContain('ng-invalid-required');
            expect(AddCustomerPage.formRequiredFields.get(0).getAttribute('required')).toEqual('true'); //this also works to cover the requirement. we are only checking to see if this field is required or not. required is a boolean attribute. It means an <input> element can not be empty when submitting a form if that <input> element has "required" attribute. If an <input> element has "required" attribute, getAttribute('required') will return 'true'. If it doesn't have the "required" attribute, getAttribute('required') will return 'false'.
        });
        it('should require Last Name', () => {
            AddCustomerPage.lastNameInputBox.sendKeys(protractor.Key.ENTER);
            expect(AddCustomerPage.lastNameInputBox.getAttribute('class')).toContain('ng-invalid-required');
        });
        it('should require Post Code', () => {
            AddCustomerPage.postCodeInputBox.sendKeys(protractor.Key.ENTER);
            expect(AddCustomerPage.postCodeInputBox.getAttribute('class')).toContain('ng-invalid-required');
        });
//         it('should add Customer', () => {
//             for (let i=0; i<BankData.customers.length; i++) {
//                 BankManagerPage.addCustomerButton.click();
//                 AddCustomerPage.firstNameInputBox.sendKeys(BankData.customers[i].fName);
//                 AddCustomerPage.lastNameInputBox.sendKeys(BankData.customers[i].lName);
//                 AddCustomerPage.postCodeInputBox.sendKeys(BankData.customers[i].postCd);
//                 AddCustomerPage.formAddCustomerSubmit.click();
//                 browser.sleep(2000);
//                 expect(browser.switchTo().alert().getText()).toContain('Customer added successfully with customer id :');
//                 browser.switchTo().alert().accept();
//                 BankManagerPage.customersButton.click();
//                 expect(Customers.getLastRowValue(1).getText()).toEqual(BankData.customers[i].fName);
//                 expect(Customers.getLastRowValue(2).getText()).toEqual(BankData.customers[i].lName);
//                 expect(Customers.getLastRowValue(3).getText()).toEqual(BankData.customers[i].postCd);
//             }
//             browser.sleep(2000);
//         });
//         it('should not have new customer account number in list', () => {
//             BankManagerPage.customersButton.click();
//             expect(Customers.getLastRowValue(4).getText()).toEqual('');
//         });
    });
});
