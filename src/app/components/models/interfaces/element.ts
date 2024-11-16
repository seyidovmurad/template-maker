import { Style } from "./style";

export interface Element {
    isSelected: boolean;
    getStyles(): Style[];
}