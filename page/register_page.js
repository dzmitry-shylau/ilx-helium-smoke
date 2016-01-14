var register_page = function() {

    this.enterEmail = function() {
        var date = new Date();
        var time = date.getTime();
        var email = 'testmckqa1+'+time+'@gmail.com';
        console.log('email: ' + email );
        element(by.model("account.email")).sendKeys(email);
        };
    
    this.enterPassword = function(value) {
        element.all(by.model("account.password")).get(0).sendKeys(value);
        };
    
    this.showPassword = function() {
        element(by.model("showPass")).click();
        };
    
     this.enterFirstName = function(value) {
        element(by.model("account.firstName")).sendKeys(value);
        };
  
     this.enterMiddleName = function(value) {
        element(by.model("account.middleName")).sendKeys(value);
        };
  
     this.enterLastName = function(value) {
        element(by.model("account.lastName")).sendKeys(value);
        };
        
     this.enterAddress = function(value) {
        element(by.model("account.address")).sendKeys(value);
        };
        
     this.enterCity = function(value) {
        element(by.model("account.city")).sendKeys(value);
        };

     this.selectState = function(value) {
        element(by.cssContainingText('option', value)).click();
        };
     
    this.enterZip = function(value) {
        element(by.model("account.zip")).sendKeys(value);
        };
    
    this.enterPhone = function(value) {
        element(by.model("account.telephone")).sendKeys(value);
        };
        
    this.createAccount = function() {
        element(by.buttonText("CREATE ACCOUNT")).click();
        };
                       
    this.goToLogin = function(value) {
        element(by.linkText("Are you an existing customer?")).click();
        };
};
module.exports = new register_page();