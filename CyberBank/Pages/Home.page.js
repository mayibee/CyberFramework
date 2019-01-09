//page object model
require('../Utilities/CustomLocators.js');
var HomePage = function() {
    this.homeButton = $('button.home');
    this.pageHeader = $('.mainHeading');
    this.bankManagerLoginButton = element(by.ngClick('manager()'));
    this.addCustomerButton = element(by.ngClick('addCust()'));
};
module.exports = new HomePage();