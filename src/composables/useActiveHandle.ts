export const useActiveHandle = () => {
	const handle: Ref<string> = ref("");

	const route = useRoute();

	watch(
		() => route.params,
		() => {
			if (route.params.handle) {
				handle.value = Array.isArray(route.params.handle)
					? route.params.handle.join("/")
					: route.params.handle;
			} else handle.value = "";
		},
		{
			immediate: true,
			deep: true,
		}
	);

	return {
		handle,
	};
};
