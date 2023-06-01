import LoginPage from "./LoginPage";
import ManifestPage from "./ManifestPage";

fixture `Login Page`
    .page ``;
    
test(`Login with correct creds`, async t => {
    await t
        .wait(20000)
        .click(LoginPage.domainNameInput)
        .typeText(LoginPage.domainNameInput, "")
        .wait(1000)
        .click(LoginPage.userNameInput)
        .typeText(LoginPage.userNameInput, '')
        .wait(1000)
        .click(LoginPage.passwordInput)
        .typeText(LoginPage.passwordInput, '')
        .wait(1000)
        .click(LoginPage.buttonLogin)
        .wait(10000)
        .expect(ManifestPage.folderTree.visible).ok("Видим дерево папок")
});

test( `Login with incorrect domainName`, async t => {
    await t
        .wait(20000)
        .click(LoginPage.domainNameInput)
        .typeText(LoginPage.domainNameInput, "")
        .wait(1000)
        .click(LoginPage.userNameInput)
        .typeText(LoginPage.userNameInput, '')
        .wait(1000)
        .click(LoginPage.passwordInput)
        .typeText(LoginPage.passwordInput, '')
        .wait(1000)
        .click(LoginPage.buttonLogin)
        .expect(ManifestPage.folderTree.visible).notOk();

});

test( `Login with incorrect userName`, async t => {
    await t
        .wait(20000)
        .click(LoginPage.domainNameInput)
        .typeText(LoginPage.domainNameInput, "")
        .wait(1000)
        .click(LoginPage.userNameInput)
        .typeText(LoginPage.userNameInput, '')
        .wait(1000)
        .click(LoginPage.passwordInput)
        .typeText(LoginPage.passwordInput, '')
        .wait(1000)
        .click(LoginPage.buttonLogin)
        .expect(ManifestPage.folderTree.visible).notOk();

});

test( `Login with incorrect password`, async t => {
    await t
        .wait(20000)
        .click(LoginPage.domainNameInput)
        .typeText(LoginPage.domainNameInput, "")
        .wait(1000)
        .click(LoginPage.userNameInput)
        .typeText(LoginPage.userNameInput, '')
        .wait(1000)
        .click(LoginPage.passwordInput)
        .typeText(LoginPage.passwordInput, '')
        .wait(1000)
        .click(LoginPage.buttonLogin)
        .expect(ManifestPage.folderTree.visible).notOk();

});

test( `Login withOut creds`, async t => {
    await t
        .wait(20000)
        .click(LoginPage.buttonLogin)
        .expect(ManifestPage.folderTree.visible).notOk();
        
});

test(`Login Logout Login`, async t => {
    await t
        .wait(20000)
        .click(LoginPage.domainNameInput)
        .typeText(LoginPage.domainNameInput, "")
        .wait(1000)
        .click(LoginPage.userNameInput)
        .typeText(LoginPage.userNameInput, '')
        .wait(1000)
        .click(LoginPage.passwordInput)
        .typeText(LoginPage.passwordInput, '')
        .wait(1000)
        .click(LoginPage.buttonLogin)
        .wait(10000)
        .click(LoginPage.buttonLogout)
        .wait(2000)
        .click(LoginPage.domainNameInput)
        .typeText(LoginPage.domainNameInput, "")
        .wait(1000)
        .click(LoginPage.userNameInput)
        .typeText(LoginPage.userNameInput, '')
        .wait(1000)
        .click(LoginPage.passwordInput)
        .typeText(LoginPage.passwordInput, '')
        .wait(1000)
        .click(LoginPage.buttonLogin)
        .wait(10000)
        .expect(ManifestPage.folderTree.visible).ok("Видим дерево папок")
});