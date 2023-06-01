import OutbackPage from "./OutbackPage";

fixture `Outback`
    .page ``;

const domainName = "";
    
test(`Login with correct creds`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, domainName)
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .wait(3000)
        .expect(OutbackPage.outSearch.visible).ok()
});

test(`Login with incorrect creds`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, "")
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .expect(OutbackPage.outSearch.visible).notOk()
});

test(`Show own`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, domainName)
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .wait(3000)
        .click(OutbackPage.showOwn)
        .wait(1000)
        .expect(OutbackPage.outGrid.visible).ok()
});

test(`Search`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, domainName)
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .wait(3000)
        .click(OutbackPage.showOwn)
        .wait(1000)
        .click(OutbackPage.outSearch)
        .typeText(OutbackPage.outSearch,"acid")
        .click(OutbackPage.btnSearch)
        .wait(1000)
        .expect(OutbackPage.resSearch.innerText).match(/acid/i)
});

test(`Page nav`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, domainName)
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .wait(3000)
        .click(OutbackPage.showOwn)
        .wait(1000)
        .click(OutbackPage.pageTwo)
        .wait(1000)
        .click(OutbackPage.pageThree)
        .wait(1000)
        .click(OutbackPage.pageFour)
        .wait(1000)
        .click(OutbackPage.pageOne)
        .wait(1000)
});

test(`Gold sds`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, domainName)
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .wait(3000)
        .click(OutbackPage.showOwn)
        .wait(1000)
        .click(OutbackPage.openSds)
        .wait(5000)
        .expect(OutbackPage.sds.visible).ok()
});

test(`click on material name`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, domainName)
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .wait(3000)
        .click(OutbackPage.showOwn)
        .wait(1000)
        .click(OutbackPage.resSearch)
        .wait(5000)
        .expect(OutbackPage.sds.visible).ok()
});

test(`Country filter`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, domainName)
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .wait(3000)
        .click(OutbackPage.showOwn)
        .typeText(OutbackPage.countryFilter, "Spain")
        .wait(1000)
        .pressKey('enter')
        .wait(1000)
        .expect(OutbackPage.countryData.innerText).match(/spain/i)
});

test(`Language filter`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, domainName)
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .wait(3000)
        .click(OutbackPage.showOwn)
        .typeText(OutbackPage.languageFilter, "Spanish")
        .wait(1000)
        .pressKey('enter')
        .wait(1000)
        .expect(OutbackPage.countryData.innerText).match(/spanish/i)
});

test(`Vendor filter`, async t => {
    await t
        .click(OutbackPage.domainInput)
        .typeText(OutbackPage.domainInput, domainName)
        .wait(1000)
        .click(OutbackPage.btnLogin)
        .wait(3000)
        .click(OutbackPage.showOwn)
        .typeText(OutbackPage.vendorFilter, "")
        .wait(3000)
        .pressKey('enter')
        .expect(OutbackPage.vendorName.innerText).match(/ricca chemical/i)
});
