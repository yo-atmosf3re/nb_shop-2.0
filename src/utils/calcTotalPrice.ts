import { ItemsInitialType } from "../@types/types";

export const calcTotalPrice = (items: ItemsInitialType[]) => {
   return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};