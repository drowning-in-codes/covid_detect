<template>
	<view style="width: 100%; height: 100%;">
		<u-image :fade="true" height="100%" duration="450" :src="src" mode="widthFix">
			<u-loading mode="flower" size="36" slot="loading"></u-loading>
		</u-image>
	</view>
</template>

<script>
	export default {
		name: "DetailTip",
		data() {
			return {

			}
		},
		props: {
			src: String,
		},
		methods: {

		}
	}
</script>

<style>

</style>
