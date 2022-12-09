<template>
	<view class="info-container">
		<view class="covid-data">
			
			
		</view>
		<view v-for="(item,index) in info" :key="index" class="info-view">
			<text>{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "covid-info",
		data() {
			return {
				info: [
					"新消息",
					"旧消息"
				],
			
			};
		},
		onLoad()
		{
			
		},
		methods:{
		
		}
	}
</script>

<style lang="scss" scoped>
	.info-container {
		margin-top: 20rpx;
		border: solid;
		width: 100%;
	}

	.info-view + .info-view {
		border-top: #ededed solid;
	}
</style>
