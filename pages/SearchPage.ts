import {Page,Locator} from "@playwright/test";
export class SearchPage{
    readonly page:Page;
    readonly searchbox:Locator;
    readonly searchbtn:Locator;
    readonly product:Locator;
    readonly noprd:Locator;
    constructor(page:Page){
        this.page=page;
        this.searchbox=page.locator("//input[@placeholder='Search']");
        this.searchbtn=page.locator("//button[@class='btn btn-default btn-lg']");
        this.product=page.locator("//a[normalize-space()='HP LP3065']");
        this.noprd=page.locator("//p[contains(text(),'There is no product that matches the search criter')]")

    }
    async navigate(){
        await this.page.goto("https://tutorialsninja.com/demo/");
    }
    async searchproduct(searchdata:string){
        await this.searchbox.click();
        await this.searchbox.fill(searchdata);
        await this.searchbtn.click();
    }
    async getproduct(){
        return await this.product.textContent()
    }
    async getnoproduct(){
        return await this.noprd.textContent()
    }
}