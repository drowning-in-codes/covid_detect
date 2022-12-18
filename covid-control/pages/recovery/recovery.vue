<template>
	<view class="container" :style="{height:screenHeight+'px'}">
		<view style="text-align: center; font-size: 28px; padding: 37px; padding-top: 16%; padding-bottom: 0%;">康复指导手册</view>
		<view style="text-align: center; font-size: 14px; padding: 37px; padding-top: 3%; padding-bottom: 3%; color: #909399;">covid-19 rehabilitation manual</view>
	
		<view class="grid-contrainer">
			<u-grid :col="3" :border="false">
				<u-grid-item :custom-style="customStyle" @click="tipOpen(0)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7.png" mode="scaleToFill">
					</image>
					<view class="grid-text">危险信号</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(1)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E5%91%BC%E5%90%B8%E7%AE%A1%E7%90%86.png" mode="scaleToFill">
					</image>
					<view class="grid-text">呼吸管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(2)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E8%BF%90%E5%8A%A8%E7%AE%A1%E7%90%86.png" mode="scaleToFill">
					</image>
					<view class="grid-text">运动管理</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle" @click="tipOpen(3)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E7%96%B2%E5%8A%B3%E7%AE%A1%E7%90%86.png">
					</image>
					<view class="grid-text">疲劳管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(4)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E5%A3%B0%E9%9F%B3%E7%AE%A1%E7%90%86.png">
					</image>
					<view class="grid-text">声音管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(5)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E5%90%9E%E5%92%BD%E7%AE%A1%E7%90%86.png">
					</image>
					<view class="grid-text">吞咽管理</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle" @click="tipOpen(6)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E8%90%A5%E5%85%BB%E7%AE%A1%E7%90%86.png">
					</image>
					<view class="grid-text">饮食管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(7)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E8%84%91%E5%8A%9B%E7%AE%A1%E7%90%86.png">
					</image>
					<view class="grid-text">脑力管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(8)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E5%8E%8B%E5%8A%9B%E7%AE%A1%E7%90%86.png">
					</image>
					<view class="grid-text">压力管理</view>
				</u-grid-item>

				<u-grid-item :custom-style="customStyle" @click="tipOpen(9)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E7%96%BC%E7%97%9B%E7%AE%A1%E7%90%86.png">
					</image>
					<view class="grid-text">疼痛管理</view>
				</u-grid-item>
				<u-grid-item :custom-style="customStyle" @click="tipOpen(10)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E9%87%8D%E8%BF%94%E5%B7%A5%E4%BD%9C.png">
					</image>
					<view class="grid-text">重返工作</view>
				</u-grid-item>
				<!-- <u-grid-item :custom-style="customStyle" @click="tipOpen(11)" bg-color="rgba(255,255,255,0)">
					<image class="grid-img" src="http://rmkt29hqy.hn-bkt.clouddn.com/manual/%E7%97%87%E7%8A%B6%E8%BF%BD%E8%B8%AA.png">
					</image>
					<view class="grid-text">症状追踪</view>
				</u-grid-item> -->


			</u-grid>
			</u-grid>
			
			
		</view>
		<view style="text-align: center; font-size: 11px; padding: 37px; padding-top: 3%; padding-bottom: 0%;">内容来源：世卫组织《新冠肺炎康复指导手册（第二版）》</view>
		

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
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E5%91%BC%E5%90%B8%E6%80%A5%E4%BF%83.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E4%BD%93%E5%8A%9B%E6%B4%BB%E5%8A%A8%E4%B8%8E%E9%94%BB%E7%82%BC.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E4%BF%9D%E5%AD%98%E4%BD%93%E5%8A%9B%E5%92%8C%E7%96%B2%E5%8A%B3%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E5%A3%B0%E9%9F%B3%E9%97%AE%E9%A2%98%E7%9A%84%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E5%90%9E%E5%92%BD%E9%97%AE%E9%A2%98%E7%9A%84%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E8%90%A5%E5%85%BB%E9%97%AE%E9%A2%98%EF%BC%8C%E5%8C%85%E6%8B%AC%E5%97%85%E8%A7%89%E5%92%8C%E5%91%B3%E8%A7%89.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E6%B3%A8%E6%84%8F%E5%8A%9B%E3%80%81%E8%AE%B0%E5%BF%86%E5%92%8C%E6%80%9D%E7%BB%B4%E6%B8%85%E6%99%B0%E5%BA%A6%20%E9%97%AE%E9%A2%98%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E5%8E%8B%E5%8A%9B%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E7%96%BC%E7%97%9B%E7%9A%84%E7%AE%A1%E7%90%86.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E9%87%8D%E8%BF%94%E5%B7%A5%E4%BD%9C%E5%B2%97%E4%BD%8D.png",
					"http://rmkt29hqy.hn-bkt.clouddn.com/content/%E7%97%87%E7%8A%B6%E8%BF%BD%E8%B8%AA%E8%AE%B0%E5%BD%95.png",
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
		font-size: 28rpx;
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
