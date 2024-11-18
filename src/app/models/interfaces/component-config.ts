
export interface ComponentConfig {
    label: string;
    type: any;
    data?: any;
    isSelected?: boolean;
    onSelect?(): void;
}