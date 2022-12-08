<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<tabBar/>
	</view>
</template>

<script>
	import tabBar from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-curtain.vue"//导入插件
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			tabBar
		}
		,
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
