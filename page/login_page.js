var login_page = function() {
    
    this.enterLogin = function(value) {
        element(by.model("login")).sendKeys(value);
        };
    
    this.enterPassword = function(value) {
        element(by.model("password")).sendKeys(value);
        };
    
    this.clickLogIn = function() {
        element(by.buttonText("Log in")).click();
        };	
};
module.exports = new login_page();