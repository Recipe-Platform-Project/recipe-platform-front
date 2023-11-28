import { ChefItem } from "Types";
import chefListMock from "./chef-list.mock";

const chefSearchListMock = (word:string): ChefItem[] => {
    const list = chefListMock.filter(boardItem => boardItem.nickname.includes(word));
    return list;
}

export default chefSearchListMock;