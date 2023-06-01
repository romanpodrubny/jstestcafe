import LoginPage from "./LoginPage";
import ManifestPage from "./ManifestPage";
import PSDPage from "./PSDPage";
import fs from 'fs';



fixture `PSD`
    .page ``
    .beforeEach( async t => {
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
            .wait(5000)
            .click(ManifestPage.SimpleFullSearch)
            .typeText(ManifestPage.SimpleFullSearch, "acetone")
            .pressKey('enter')
            .wait(1000)
    });

    
    test(`Print List FS`, async t => {
        await t
            .click(PSDPage.PrintTab)
            .wait(1000)
            .click(PSDPage.PrintBtn)
            .wait(5000)
            .expect(PSDPage.PrePrintWindow.visible).ok();
            
    });

    test(`Print SDS FS`, async t => {
        await t
            .click(ManifestPage.CheckBoxAcetoneFS)
            .wait(1000)
            .click(PSDPage.PrintTab)
            .wait(1000)
            .click(PSDPage.PrintSDSTab)
            .wait(1000)
            .click(PSDPage.CheckBoxSDSPrint)
            .wait(1000)
            .click(PSDPage.PrintBtn)
            .wait(7000)
            .expect(PSDPage.PrePrintWindow.visible).ok();
            
    });

    test(`Print MiniSDS FS`, async t => {
        await t
            .click(ManifestPage.CheckBoxAcetoneFS)
            .wait(1000)
            .click(PSDPage.PrintTab)
            .wait(1000)
            .click(PSDPage.PrintSDSTab)
            .wait(1000)
            .click(PSDPage.CheckBoxMiniPrint)
            .wait(1000)
            .click(PSDPage.PrintBtn)
            .wait(7000)
            .expect(PSDPage.PrePrintWindow.visible).ok();
            
    });

    test(`Download List FS`, async t => {
        await t
            .click(PSDPage.DownloadTab)
            .wait(1000)
            .click(PSDPage.DownloadBtn)
            .wait(10000)
    });

    test(`Download SDS FS`, async t => {
        await t
            .click(ManifestPage.CheckBoxAcetoneFS)
            .wait(1000)
            .click(PSDPage.DownloadTab)
            .wait(1000)
            .click(PSDPage.PrintSDSTab)
            .wait(1000)
            .click(PSDPage.CheckBoxSDSPrint)
            .wait(1000)
            .click(PSDPage.DownloadBtn)
            .wait(10000)
    });


    test(`Share List FS`, async t => {
        await t
            .click(PSDPage.ShareTab)
            .wait(1000)
            .click(PSDPage.ShareInputEmail)
            .typeText(PSDPage.ShareInputEmail,"")
            .wait(1000)
            .click(PSDPage.ShareInputSubject)
            .typeText(PSDPage.ShareInputSubject,"asd")
            .wait(1000)
            .click(PSDPage.ShareBtn)
            .wait(1000)
            .expect(PSDPage.ShareOkMessage.visible).ok();
    });

    test(`Share SDS FS`, async t => {
        await t
            .click(ManifestPage.CheckBoxAcetoneFS)
            .wait(1000)
            .click(PSDPage.ShareTab)
            .wait(1000)
            .click(PSDPage.PrintSDSTab)
            .wait(1000)
            .click(PSDPage.CheckBoxSDSPrint)
            .wait(1000)
            .click(PSDPage.ShareInputEmail)
            .typeText(PSDPage.ShareInputEmail,"")
            .wait(1000)
            .click(PSDPage.ShareInputSubject)
            .typeText(PSDPage.ShareInputSubject,"asd")
            .wait(1000)
            .click(PSDPage.ShareBtn)
            .wait(1500)
            .expect(PSDPage.ShareOkMessage.visible).ok();
    });


    fixture `Check PDF Doc`
    .page ``;

    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + (month+1)*1;

    
    test(`Check List FS`, async t => {
        await t
            .expect(fs.existsSync(`C:/Users/PC/Downloads/Search List_${year}_${month}_${day}.pdf`)).ok();
    }); 

    test(`Check SDS FS`, async t => {
        await t
            .expect(fs.existsSync(`C:/Users/PC/Downloads/${year}_${month}_${day}.pdf`)).ok();
    }); 