import { Selector } from 'testcafe';

class LoginPage{
    constructor(){
        this.domainNameInput = Selector("#domainName");
        this.userNameInput = Selector("#userName");
        this.passwordInput = Selector("#password");
        this.buttonLogin = Selector("main button").withText('Login');
        this.buttonLogout = Selector("main button").withText('Logout'); 
    }
    
    async loginUser(domainName="", userName="",password="") {
        await t
            .typeText(this.domainNameInput, domainName)
            .typeText(this.userNameInput, userName)
            .typeText(this.passwordInput, password)
            .click(buttonLogin)
    }
}

export default LoginPage = new LoginPage();