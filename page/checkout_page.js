var checkout_page = function() {
    
    this.selectPaymentMethod = function() {
        element(by.model("checkout.paymentMethod")).click();
        };
    
    this.selectCardMethod = function() {
        element(by.cssContainingText('option', "Credit Card")).click();
        };
	
    this.enterCreditCard = function(value) {
        element(by.model("card.number")).sendKeys(value);
        };
                
    this.enterSecCode = function(value) {
        element(by.model("card.cvc")).sendKeys(value);
        };
    
    this.selectExpMonth = function(value) {
        element(by.model("card.month")).click();
        element(by.cssContainingText('option', value)).click();
        };
        
    this.selectExpYear = function(value) {
        element(by.model("card.year")).sendKeys(value);
        element(by.cssContainingText('option', value)).click();
        };
        
    this.selectECheckMethod = function() {
        element(by.cssContainingText('option', "E-Check")).click();
        };
        
    this.enterRoutingNumber = function(value) {
        element(by.model("check.aba")).sendKeys(value);
        };
        
    this.enterAccountNumber = function(value) {
        element(by.model("check.acc")).sendKeys(value);
        };
    
    this.enterBankName = function(value) {
        element(by.model("check.bn")).sendKeys(value);
        };
    
    this.clickAuthorize = function() {
        element(by.model("ACHVerified")).click();
        };
    
    this.clickContinue = function() {
        element(by.css(".btn.btn-success")).click();
        };
        
    this.clickCompleteCheckout = function() {
        element(by.css(".btn.btn-success")).click();
        };
        
    this.clickPrint = function() {
        element(by.css(".pull-right.btn-link")).click();
        };
        
    this.clickGoToMyHomepage = function() {
        element(by.css(".btn.btn-success")).click();
        };
        
};
module.exports = new checkout_page();