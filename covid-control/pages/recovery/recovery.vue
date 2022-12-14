<template>
	<view>
		<view style="text-align: center; font-size: 28px; margin: 37px;">新冠康复手册</view>
		<view class="grid-contrainer">
			<u-grid :col="3" :border="false">
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/danger.jpg" mode="scaleToFill">
					</image>
					<view class="grid-text">危险信号</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="breatheTipOpen">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/breathe.png" mode="scaleToFill">
					</image>
					<view class="grid-text">呼吸管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/energy.jpg" mode="scaleToFill">
					</image>
					<view class="grid-text">体力活动</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/tired.jpg">
					</image>
					<view class="grid-text">疲劳管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/vioce.jpg">
					</image>
					<view class="grid-text">声音管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/swallow.jpg">
					</image>
					<view class="grid-text">吞咽管理</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/nurture.jpg">
					</image>
					<view class="grid-text">营养及嗅觉</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/brain.jpg">
					</image>
					<view class="grid-text">脑力管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/stress.jpg">
					</image>
					<view class="grid-text">压力原理</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/hurt.jpg">
					</image>
					<view class="grid-text">疼痛管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/work.jpg">
					</image>
					<view class="grid-text">重返工作</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/diary.jpg">
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
					url: "/pages/recoverymanual/breatheManage/index"
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
