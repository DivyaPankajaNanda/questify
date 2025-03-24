/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import * as AuthAPI from '../api/authApi';

interface User {
	userId: string;
	name: string;
}

interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	signin: (email: string, password: string) => Promise<void>;
	signup: (name: string, email: string, password: string) => Promise<void>;
	signout: () => Promise<void>;
	me: () => Promise<void>;
}

// export const useAuthStore = create<AuthState>((set) => ({
// 	user: null,
// 	isAuthenticated: false,
// 	signin: async (email: string, password: string) => {
// 		await AuthAPI.signin(email, password);
// 		await useAuthStore.getState().me();
// 	},
// 	signup: async (name: string, email: string, password: string) => {
// 		await AuthAPI.signup(name, email, password);
// 		await useAuthStore.getState().me();
// 	},
// 	signout: async () => {
// 		await AuthAPI.signout();
// 		set((state) => ({ ...state, user: null, isAuthenticated: false }));
// 	},
// 	me: async () => {
// 		try {
// 			const user = await AuthAPI.me();
// 			if (!user) throw Error('User undefined');
// 			set((state) => ({ ...state, user: user as User, isAuthenticated: true }));
// 		} catch (error) {
// 			set((state) => ({ ...state, user: null, isAuthenticated: false }));
// 			console.log(error);
// 		}
// 	},
// }));

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			isAuthenticated: false,
			signin: async (email: string, password: string) => {
				await AuthAPI.signin(email, password);
				await useAuthStore.getState().me();
			},
			signup: async (name: string, email: string, password: string) => {
				await AuthAPI.signup(name, email, password);
				await useAuthStore.getState().me();
			},
			signout: async () => {
				await AuthAPI.signout();
				set((state) => ({ ...state, user: null, isAuthenticated: false }));
			},
			me: async () => {
				try {
					const user = await AuthAPI.me();
					if (!user) throw Error('User undefined');
					set((state) => ({ ...state, user: user as User, isAuthenticated: true }));
				} catch (error) {
					set((state) => ({ ...state, user: null, isAuthenticated: false }));
					console.log(error);
				}
			},
		}),
		{
			name: 'user-storage',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
