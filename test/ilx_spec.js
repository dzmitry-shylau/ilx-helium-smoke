describe ("smoke test ILX", function(){

    var login_page = require('../page/login_page.js');
    var dashboard_page = require('../page/dashboard_page.js');
    var register_page = require('../page/register_page.js');
    var checkout_page = require('../page/checkout_page.js');

    xit ("should be able to register and purchase a package with fake Visa", function() {
    browser.get('https://my.staging.insurancelicenseexpress.com/addtocart/' + browser.params.arizonaDiamond);
        register_page.enterEmail();
        register_page.enterPassword("tester123");
        register_page.enterFirstName("Tester");
        register_page.enterMiddleName("T");
        register_page.enterLastName("Tester");
        register_page.enterAddress("123 Main St");
        register_page.enterCity("Redwood City");
        register_page.selectState("California");
        register_page.enterZip("94587");
        register_page.enterPhone("6504567890");
        register_page.createAccount();
    expect(browser.getCurrentUrl()).toContain("checkout");
        checkout_page.selectPaymentMethod();
        checkout_page.selectCardMethod();
        checkout_page.enterCreditCard("4111111111111111");
        checkout_page.enterSecCode("123");
        checkout_page.selectExpMonth("12");
        checkout_page.selectExpYear("2018");
        checkout_page.clickContinue();
        checkout_page.clickCompleteCheckout();
    expect(browser.getCurrentUrl()).toContain("thankyou");
        checkout_page.clickGoToMyHomepage();
    expect(browser.getCurrentUrl()).toContain("dashboard");
        dashboard_page.clickMyAccount();
        dashboard_page.clickLogOut();
        });

    xit ("should be able to register and purchase a package with fake Amex", function() {
    browser.get('https://my.staging.insurancelicenseexpress.com/addtocart/' + browser.params.kansasSilver);
        register_page.enterEmail();
        register_page.enterPassword("tester123");
        register_page.enterFirstName("Tester");
        register_page.enterMiddleName("T");
        register_page.enterLastName("Tester");
        register_page.enterAddress("123 Main St");
        register_page.enterCity("Redwood City");
        register_page.selectState("California");
        register_page.enterZip("94587");
        register_page.enterPhone("6504567890");
        register_page.createAccount();
    expect(browser.getCurrentUrl()).toContain("checkout");
        checkout_page.selectPaymentMethod();
        checkout_page.selectCardMethod();
        checkout_page.enterCreditCard("378282246310005");
        checkout_page.enterSecCode("1234");
        checkout_page.selectExpMonth("12");
        checkout_page.selectExpYear("2018");
        checkout_page.clickContinue();
        checkout_page.clickCompleteCheckout();
        checkout_page.clickGoToMyHomepage();
    expect(browser.getCurrentUrl()).toContain("dashboard");
        dashboard_page.clickMyAccount();
        dashboard_page.clickLogOut();
        });
    
    xit ("should be able to register and purchase a package with fake MasterCard", function() {
    browser.get('https://my.staging.insurancelicenseexpress.com/addtocart/' + browser.params.newyorkGold);
        register_page.enterEmail();
        register_page.enterPassword("tester123");
        register_page.enterFirstName("Tester");
        register_page.enterMiddleName("T");
        register_page.enterLastName("Tester");
        register_page.enterAddress("123 Main St");
        register_page.enterCity("Redwood City");
        register_page.selectState("California");
        register_page.enterZip("94587");
        register_page.enterPhone("6504567890");
        register_page.createAccount();
    expect(browser.getCurrentUrl()).toContain("checkout");
        checkout_page.selectPaymentMethod();
        checkout_page.selectCardMethod();
        checkout_page.enterCreditCard("5555555555554444");
        checkout_page.enterSecCode("123");
        checkout_page.selectExpMonth("12");
        checkout_page.selectExpYear("2018");
        checkout_page.clickContinue();
        checkout_page.clickCompleteCheckout();
        checkout_page.clickGoToMyHomepage();
    expect(browser.getCurrentUrl()).toContain("dashboard");
        dashboard_page.clickMyAccount();
        dashboard_page.clickLogOut();
        });
    
    xit ("should be able to register and purchase a package with E-Check and verify invoice", function() {
    browser.get('https://my.staging.insurancelicenseexpress.com/addtocart/' + browser.params.wisconsinSilver);
        register_page.enterEmail();
        register_page.enterPassword("tester123");
        register_page.enterFirstName("Tester");
        register_page.enterMiddleName("T");
        register_page.enterLastName("Tester");
        register_page.enterAddress("123 Main St");
        register_page.enterCity("Redwood City");
        register_page.selectState("California");
        register_page.enterZip("94587");
        register_page.enterPhone("6504567890");
        register_page.createAccount();
    expect(browser.getCurrentUrl()).toContain("checkout");
        checkout_page.selectPaymentMethod();
        checkout_page.selectECheckMethod();
        checkout_page.enterRoutingNumber("011000028");
        checkout_page.enterAccountNumber("0011111111111");
        checkout_page.enterBankName("Chase");
        checkout_page.clickAuthorize();
        checkout_page.clickContinue();
        checkout_page.clickCompleteCheckout();
    expect(browser.getCurrentUrl()).toContain("thankyou");
        checkout_page.clickPrint();
        browser.ignoreSynchronization = true;
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
    expect(browser.getCurrentUrl()).toContain("invoices");
                });
            });
        browser.driver.close();
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[0]).then(function(){
        dashboard_page.clickMyAccount();
        dashboard_page.clickLogOut();
                });
        });
        
        });
    
    xit ("should be able to log in as registered user and log out", function(){
        browser.get("https://my.staging.insurancelicenseexpress.com/");
        register_page.goToLogin();
        login_page.enterLogin('rstlpnr+0602@gmail.com');
        login_page.enterPassword('tester123');
        login_page.clickLogIn();
        element.all(by.css("h2")).then(function(items) {
    expect(items[0].getText()).toBe('MY HOME PAGE');
        });
        dashboard_page.clickMyAccount();
        dashboard_page.clickAccountInformation();
        element(by.model("account.email")).getAttribute('value').then(function(value){
    expect(value).toEqual("rstlpnr+0602@gmail.com");
            });
        dashboard_page.clickMyAccount();
        dashboard_page.clickLogOut();
    expect(browser.getCurrentUrl()).toEqual("https://beta.insurancelicenseexpress.com/");
        });
        
           
    xit ("should be able to open course page and access VC5", function(){
        browser.get("https://my.staging.insurancelicenseexpress.com/");
        register_page.goToLogin();
        login_page.enterLogin('testmckqa1+1203ca@gmail.com');
        login_page.enterPassword('tester123');
        login_page.clickLogIn();
        dashboard_page.openCourse();
    expect (browser.getCurrentUrl()).toContain('runner');
        dashboard_page.openVC5();
        browser.ignoreSynchronization = true;
    expect (browser.getCurrentUrl()).toContain('vc5');
        });
        
    xit ("should be able to view certificate", function(){
        browser.get("https://my.staging.insurancelicenseexpress.com/");
        register_page.goToLogin();
        login_page.enterLogin('rstlpnr+0602@gmail.com');
        login_page.enterPassword('tester123');
        login_page.clickLogIn();
        dashboard_page.viewCertificate();
        browser.ignoreSynchronization = true;
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
    expect(browser.getCurrentUrl()).toContain("certificates");
                });
        });
        browser.driver.close();
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[0]).then(function(){
        dashboard_page.clickMyAccount();
        dashboard_page.clickLogOut();
                });
            });
        });
    
    it ("should be able to view invoice on invoices page", function(){
        browser.get("https://my.staging.insurancelicenseexpress.com/");
        register_page.goToLogin();
        login_page.enterLogin('testmckqa1+1203ca@gmail.com');
        login_page.enterPassword('tester123');
        login_page.clickLogIn();
        dashboard_page.clickMyAccount();
        dashboard_page.clickInvoices();
    expect (browser.getCurrentUrl()).toContain('invoices');
        dashboard_page.viewInvoice();
        browser.ignoreSynchronization = true;
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
    var pre = element(by.css('pre'));
        expect(pre.isPresent()).toBeFalsy();
        /*pre.getText().then(function(text) {
        expect(text).not.toContain('error');
        });*/
                });
            });
        browser.driver.close();
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[0]).then(function(){
        dashboard_page.clickMyAccount();
        dashboard_page.clickLogOut();
                });
        });
        
        });

    });