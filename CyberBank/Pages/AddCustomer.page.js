require('../Utilities/CustomLocators.js');
var BankManagerPage = require('./BankManager.page.js'); //./direct parent(basically same folder);

var AddCustomerPage = function() {
    this.customerForm = element(by.name('myForm'));
    this.formLabels = $$('.form-group>label');
    this.firstNameLabel = this.formLabels.get(0);
    this.lastNameLabel = this.formLabels.get(1);
    this.postCodeLabel = this.formLabels.get(2);
    this.firstNameInputBox = element(by.model('fName'));
    this.lastNameInputBox = element(by.model('lName'));
    this.postCodeInputBox = element(by.model('postCd'));
    this.formRequiredFields = element.all(by.css("input:required"));
    this.formAddCustomerSubmit = $('.btn-default');

    this.goToAddCustomer = function() {
        BankManagerPage.addCustomerButton.click();
    }
};
module.exports = new AddCustomerPage();