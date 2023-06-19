import { create } from 'zustand';

interface UserState {
  user?: UserT;
  setUser: (by: UserT) => void;
}

export const useUserState = create<UserState>()((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
}));
