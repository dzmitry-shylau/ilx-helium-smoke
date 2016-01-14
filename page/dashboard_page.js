var dashboard_page = function() {
    
    this.clickMyAccount = function(value) {
        element(by.linkText("My Account")).click();
        };
    
    this.clickMyHomePage = function(value) {
        element(by.linkText("My Home Page")).click();
        };
    
    this.clickAccountInformation = function(value) {
        element(by.linkText("Account Information")).click();
        };
        
    this.clickInvoices = function(value) {
        element(by.linkText("Invoices")).click();
        };
    
    this.clickLogOut = function() {
        element(by.linkText("Log Out")).click();
        };	
        
    this.viewCertificate = function() {
        browser.waitForAngular();
        element.all(by.buttonText("VIEW CERTIFICATE")).get(0).click();
        };
    
    this.viewInvoice = function() {
        browser.waitForAngular();
        element.all(by.buttonText("View Invoice")).get(0).click();
        };    
                
    this.openCourse = function() {
        element.all(by.linkText("OPEN")).get(0).click();
        };
                
    this.openVC5 = function() {
        element.all(by.linkText("OPEN")).get(0).click();
        };
};
module.exports = new dashboard_page();