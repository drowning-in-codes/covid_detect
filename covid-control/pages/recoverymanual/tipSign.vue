<template>
	<view style="width: 100%; height: 100%;">
		<DetailTip :src="imgSrc"></DetailTip>
	</view>
</template>

<script>
	import DetailTip from './components/DetailTip.vue'
	export default {

		data() {
			return {
				imgSrc: '',
			}
		},
		onLoad() {
			this.imgSrc = uni.getStorageSync('index');
			console.log(this.imgSrc);
		},
		components: {
			DetailTip
		},
		methods: {

		}
	}
</script>

<style>

</style>
