import { Selector, ClientFunction } from 'testcafe';

class WeWritePage{
    constructor(){
        this.domainNameInput = Selector("#domainName");
        this.userNameInput = Selector("#userName");
        this.passwordInput = Selector("#password");
        this.buttonLogin = Selector("main button").withText('Login');
        this.buttonLogout = Selector("main button").withText('Logout'); 
        this.isWeWrite = Selector(".material-marker-label-weWrite");
        this.WeWriteOpenDoc = Selector("span").withText('acetone');
        this.DocHeader = Selector("iframe").nth(0);
        this.WeWriteOpenDocOS = Selector("button").withAttribute('title','acetone')
    }
    
    async loginUser(domainName="", userName="",password="") {
        await t
            .typeText(this.domainNameInput, domainName)
            .typeText(this.userNameInput, userName)
            .typeText(this.passwordInput, password)
            .click(buttonLogin)
    }
}

export default WeWritePage = new WeWritePage();