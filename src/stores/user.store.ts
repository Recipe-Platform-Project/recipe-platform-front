import { LoginUser } from "types";
import { create } from "zustand";

<<<<<<< HEAD
interface UserStore{
    user: LoginUser | null;
    setUser: (user: LoginUser | null) => void;

=======
interface UserStore {
  user: LoginUser | null;
  setUser: (user: LoginUser | null) => void;
>>>>>>> 74f0e88ecc6abd13ac555197e69d895ddcfecc9d
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
<<<<<<< HEAD
    setUser: (user: LoginUser | null) => {set((state) => ({ ...state, user}))},
}));
=======
    setUser: (user: LoginUser | null) => {set((state) => ({ ...state, user}))}
}))
>>>>>>> 74f0e88ecc6abd13ac555197e69d895ddcfecc9d

export default useUserStore;