import { RecentlyItme } from "types";
import { create } from "zustand";

interface RecentlyBoardStore{
    recentlyList: RecentlyItme[],
    setRecentlyList: (recentlyList: RecentlyItme[]) => void,
}

// recentlyList : 초기값 []
const useRecentlyBoardStore = create<RecentlyBoardStore>((set) => ({
    recentlyList: [],
    setRecentlyList: (recentlyList: RecentlyItme[]) => {set((state) => ({...state, recentlyList}))}
}))

export default useRecentlyBoardStore;