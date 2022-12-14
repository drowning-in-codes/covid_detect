<template>
	<view>
		<view style="text-align: center; font-size: 28px; margin: 37px;">新冠康复手册</view>
		<view class="grid-contrainer">
			<u-grid :col="3" :border="false">
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/danger.jpg" mode="scaleToFill">
					</image>
					<view class="grid-text">危险信号</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="breatheTipOpen">
					<image class="grid-img" src="../../static/breathe.png" mode="scaleToFill">
					</image>
					<view class="grid-text">呼吸管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/energy.jpg" mode="scaleToFill">
					</image>
					<view class="grid-text">体力活动</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/tired.jpg">
					</image>
					<view class="grid-text">疲劳管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/vioce.jpg">
					</image>
					<view class="grid-text">声音管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/swallow.jpg">
					</image>
					<view class="grid-text">吞咽管理</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/nurture.jpg">
					</image>
					<view class="grid-text">营养及嗅觉</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/brain.jpg">
					</image>
					<view class="grid-text">脑力管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/stress.jpg">
					</image>
					<view class="grid-text">压力原理</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/hurt.jpg">
					</image>
					<view class="grid-text">疼痛管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/work.jpg">
					</image>
					<view class="grid-text">重返工作</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="../../static/diary.jpg">
					</image>
					<view class="grid-text">症状追踪日记</view>
				</u-grid-item>


			</u-grid>
			</u-grid>
		</view>

	</view>

</template>


<script>
	export default {
		data() {
			return {
				customStyle: {
					padding: '20rpx',
					width: '150rpx',
				}
			}
		},
		methods: {
			breatheTipOpen() {
				uni.navigateTo({
					url: "/pages/recoverymanual/recoverymanual"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.grid-text {
		font-size: 22rpx;
		margin-top: 8rpx;
		color: rgba(16, 16, 16, 1);
		height: 30px;
		text-align: center;
		width: 150rpx;
	}

	.grid-contrainer {
		padding-left: 49px;
		padding-right: 49px;
	}

	.grid-img {
		height: 120rpx;
		width: 120rpx;
	}
</style>
