import {test as base,expect} from "@playwright/test";
import { SearchPage } from "../pages/SearchPage";
type fixtures={
    searchpage:SearchPage;
}
export const test=base.extend<fixtures>({
    searchpage:async({page},use)=>{
        await use(new SearchPage(page));
    }


})
export{expect}