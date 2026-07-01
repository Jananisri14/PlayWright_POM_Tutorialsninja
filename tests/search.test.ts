import {test,expect} from "../Fixtures/basefixtures";
import { SearchPage } from "../pages/SearchPage";
import searchData from "../test-data/searchData.json";
test.describe("Search Product",()=>{
    test.beforeEach(async ({searchpage})=>{
        await searchpage.navigate();

    })
    test("Valid Search",async({searchpage})=>{
        await searchpage.searchproduct(
            searchData.ValidSearch.data

        );
        await expect(searchpage.product).toContainText("HP LP3065")
    })
    test("InValid Search",async({searchpage})=>{
        await searchpage.searchproduct(
            searchData.InValidSearch.data

        );
        await expect(searchpage.noprd).toBeVisible();
    })
})
