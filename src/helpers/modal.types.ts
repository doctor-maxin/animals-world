export type ModalScreen = "screen1" | "screen2" | "screen3";

export interface IModal {
    activeScreen: Ref<ModalScreen>;
    isOpen: Ref<boolean>;
    openModal: () => void;
    closeModal: () => void;
    switchScreen: (screen: ModalScreen) => void;
}

