import { create } from "zustand";

interface BoardStore {
    title: string;
    contesnts: string;
    boardImages: File[];

    setTitle: (title: string) => void;
    setContents: (contents: string) => void;
    setBoardImages: (boardImages: File[]) => void;

    resetBoard: () => void;
}

const useBoardStore = create<BoardStore>((set)=> ({
    title: '',
    contesnts: '',
    boardImages: [],

    setTitle: (title: string) => {set((state) => ({ ...state, title }))},
    setContents: (contents: string) => {set((state) => ({ ...state, contents }))},
    setBoardImages: (boardImages: File[]) => {set((state) => ({ ...state, boardImages}))},

    resetBoard: () => {set((state) => ({ ...state, title: '', contesnts: '', boardImages: [] }))}
}));

export default useBoardStore;