import WeWritePage from "./WeWritePage";
import ManifestPage from "./ManifestPage";

fixture `WeWrite`
    .page ``
    .beforeEach( async t => {
        await t
            .wait(20000)
            .click(WeWritePage.domainNameInput)
            .typeText(WeWritePage.domainNameInput, "")
            .wait(1000)
            .click(WeWritePage.userNameInput)
            .typeText(WeWritePage.userNameInput, '')
            .wait(1000)
            .click(WeWritePage.passwordInput)
            .typeText(WeWritePage.passwordInput, '')
            .wait(1000)
            .click(WeWritePage.buttonLogin)
            .wait(5000)
    });
    

test(`WeWrite open FS`, async t => {
    await t
        .click(ManifestPage.advancedTab)
        .wait(1000)
        .click(ManifestPage.listSearch)
        .wait(1000)
        .click(ManifestPage.vendorOnSearch)
        .wait(1000)
        .typeText(ManifestPage.advSearchInput, 'CW Internal')
        .wait(1000)
        .pressKey('enter')
        .wait(1000)
        .expect(WeWritePage.isWeWrite.visible).ok()
        .wait(1000)
        .click(WeWritePage.WeWriteOpenDoc)
        .wait(9000)
        .expect(WeWritePage.DocHeader.visible).ok();
        
});


test(`WeWrite open OS`, async t => {
    await t
        .click(ManifestPage.advancedTab)
        .wait(1000)
        .click(ManifestPage.OwnSearchTab)
        .wait(1000)
        .click(ManifestPage.listSearch)
        .wait(1000)
        .click(ManifestPage.vendorOnSearch)
        .wait(1000)
        .typeText(ManifestPage.advSearchInput, 'CW Internal')
        .wait(1000)
        .pressKey('enter')
        .wait(1000)
        .expect(WeWritePage.isWeWrite.visible).ok()
        .wait(1000)
        .click(WeWritePage.WeWriteOpenDocOS)
        .wait(9000)
        .expect(WeWritePage.DocHeader.visible).ok();
        
});