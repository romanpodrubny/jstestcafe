import { Selector } from 'testcafe';

class OutbackPage{
    constructor(){
        this.domainInput = Selector("#domain");
        this.btnLogin = Selector("#root span").withText('Login'); 
        this.outSearch = Selector(".main_search_field__79vwN");
        this.showOwn = Selector(".main_show_own_link__7lRpA");
        this.outGrid = Selector(".ant-spin-container");
        this.btnSearch = Selector('#root div div').nth(1).find('div div div button svg')
        this.resSearch = Selector(".grid_material_name__dpH7w");
        this.pageOne = Selector('#root a').withText('1');
        this.pageTwo = Selector('#root a').withText('2');
        this.pageThree = Selector('#root a').withText('3');
        this.pageFour = Selector('#root a').withText('4');
        this.sds = Selector(".ant-modal-body");
        this.openSds = Selector('#root span').withText('View');
        this.vendorFilter = Selector("#rc_select_2");
        this.vendorName = Selector(".grid_vendor_name__QOZ2N");
        this.countryFilter = Selector("#rc_select_0");
        this.languageFilter = Selector("#rc_select_1");
        this.countryData = Selector(".grid_aditional_info__zIq7P");
    }
}
export default OutbackPage = new OutbackPage();