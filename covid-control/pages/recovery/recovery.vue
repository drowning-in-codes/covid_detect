<template>
	<view class="container" :style="{height:screenHeight+'px'}">
		<view style="text-align: center; font-size: 28px; padding: 37px; padding-top: 20%;">健康风险提醒</view>
		<view class="grid-contrainer">
			<u-grid :col="3" :border="false">
				<u-grid-item :custom-style="customStyle" @click="tipOpen(0)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/danger.jpg" mode="scaleToFill">
					</image>
					<view class="grid-text">危险信号</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(1)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/breathe.png" mode="scaleToFill">
					</image>
					<view class="grid-text">呼吸管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(2)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/energy.jpg" mode="scaleToFill">
					</image>
					<view class="grid-text">体力活动</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle" @click="tipOpen(3)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/tired.jpg">
					</image>
					<view class="grid-text">疲劳管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(4)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/vioce.jpg">
					</image>
					<view class="grid-text">声音管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(5)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/swallow.jpg">
					</image>
					<view class="grid-text">吞咽管理</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle" @click="tipOpen(6)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/nurture.jpg">
					</image>
					<view class="grid-text">营养及嗅觉</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(7)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/brain.jpg">
					</image>
					<view class="grid-text">脑力管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(8)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/stress.jpg">
					</image>
					<view class="grid-text">压力管理</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle" @click="tipOpen(9)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/hurt.jpg">
					</image>
					<view class="grid-text">疼痛管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(10)" bg-color="rgba(255,255,255,0.2)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/work.jpg">
					</image>
					<view class="grid-text">重返工作</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(11)" bg-color="rgba(255,255,255,0.2)">
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
				screenHeight: '',
				customStyle: {
					padding: '20rpx',
					width: '150rpx',
					// background: 'rgba(16, 16, 16, 1)'
				},
				tipList: [
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E5%91%BC%E5%90%B8%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E4%BD%93%E5%8A%9B%E6%B4%BB%E5%8A%A8%E4%B8%8E%E9%94%BB%E7%82%BC.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E4%BF%9D%E5%AD%98%E4%BD%93%E5%8A%9B%E5%92%8C%E7%96%B2%E5%8A%B3%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E5%A3%B0%E9%9F%B3%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E5%90%9E%E5%92%BD%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E8%90%A5%E5%85%BB%E9%97%AE%E9%A2%98%EF%BC%8C%E5%8C%85%E6%8B%AC%E5%97%85%E8%A7%89%E5%92%8C%E5%91%B3%E8%A7%89.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E8%84%91%E5%8A%9B%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E5%8E%8B%E5%8A%9B%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E7%96%BC%E7%97%9B%E7%9A%84%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E9%87%8D%E8%BF%94%E5%B7%A5%E4%BD%9C%E5%B2%97%E4%BD%8D.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/%E7%97%87%E7%8A%B6%E8%BF%BD%E8%B8%AA%E8%AE%B0%E5%BD%95.png",
				],

			}

		},
		onLoad() {
			this.screenHeight = uni.getSystemInfoSync().windowHeight;
			console.log(this.screenHeight)
		},
		methods: {
			tipOpen(index) {
				uni.setStorageSync('index', this.tipList[index])

				uni.navigateTo({
					url: "/pages/recoverymanual/tipSign",
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
		// background:  rgba(16, 16, 16, 1);
	}

	.container {
		background-image: url('http://rmkt29hqy.hn-bkt.clouddn.com/%E8%83%8C%E6%99%AF%E5%9B%BE.vector_00.png');
	}

	.grid-img {
		height: 120rpx;
		width: 120rpx;
	}
</style>
