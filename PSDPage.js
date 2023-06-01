import { Selector } from 'testcafe';

class PSDPage{
    constructor(){
        this.PrintTab = Selector("div").withAttribute('title','Print');
        this.PrintBtn = Selector("button").withText('Print');
        this.PrePrintWindow = Selector ("iframe").withAttribute('title','pdf');
        this.PrintSDSTab = Selector("span").withText('Documents');
        this.CheckBoxSDSPrint = Selector("input").withAttribute('name','sds');
        this.DownloadTab = Selector("div").withAttribute('title','Download');
        this.DownloadBtn = Selector("button").withText('Download');
        this.CheckBoxMiniPrint = Selector("input").withAttribute('name','mini');
        this.ShareTab = Selector("div").withAttribute('title','Share');
        this.ShareBtn = Selector("button").withText('Share');
        this.ShareInputEmail = Selector("#share-form_To").nth(1);
        this.ShareInputSubject = Selector("#share-form_Subject").nth(1);
        this.ShareOkMessage = Selector("span").withText('The document has been sent.')
    }
}

export default PSDPage = new PSDPage();