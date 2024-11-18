import { Style } from "./style";

export interface Element {
    isSelected: boolean;
    styles: Style[];
    getStyles(): Style[];
    updateStyle(style: Style): void;
}