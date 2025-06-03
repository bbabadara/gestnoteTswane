export interface OnInit {
    render(): void;
    activateEvents(): void;
    update(data: any): void;
    get element(): HTMLElement;
}