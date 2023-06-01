import { Selector } from 'testcafe';

class ManifestPage{
    constructor(){
        this.folderTree = Selector(".panel-block");
        this.advancedTab = Selector("#advancedBtn");
        this.listSearch = Selector("#rc_select_4");
        this.vendorOnSearch = Selector("div .ant-select-item-option-content").withText('Vendor');
        this.advSearchInput = Selector("input").nth(2);
        this.OwnSearchTab = Selector("#rc-tabs-1-tab-own");
        this.SimpleFullSearch = Selector("input").nth(1);
        this.CheckBoxAcetoneFS = Selector(".ag-selection-checkbox")
    }
}

export default ManifestPage = new ManifestPage();