import { defineStore } from "pinia";
import { APISignInResult } from "~~/src/helpers/auth.types";

interface AuthState {}

export const useAuthStore = defineStore("auth", {
	state: (): AuthState => ({}),
	actions: {
		async signInGetCode(login?: string) {
			const { client } = useAPI();

			return client.post<APISignInResult>("/auth", {
				login,
			});
		},
	},
});
