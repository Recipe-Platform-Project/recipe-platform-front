import { SearchItem } from "Types";
import { create } from "zustand";

interface SearchBoardListStore{
    searchBoardList: SearchItem[],
    setSearchBoardList: (searchBoardList: SearchItem[]) => void,
}

const useSearchBoardListStore = create<SearchBoardListStore>((set) => ({
    searchBoardList: [],
    setSearchBoardList: (searchBoardList: SearchItem[]) => {set((state) => ({...state, searchBoardList}))}
}))

export default useSearchBoardListStore;