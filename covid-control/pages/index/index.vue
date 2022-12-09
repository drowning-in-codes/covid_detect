<template>
	<view class="container">
		<view class="top-container">
			<view class="title"><text>新冠信息查询</text></view>
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
					:interval="interval" :duration="duration">
					<swiper-item v-for="(item,index) in imgs" :key="index">
						<image class="swiper-item" :src="item" mode="aspectFill">
						</image>
					</swiper-item>
				</swiper>
			</view>
			<view class="covid-data">
				<view class="data-1">
					<text>无症状感染者</text>
					<view>
						<text class="nosym">
							{{noSymptom}}
						</text>
						<view>
								较昨日<text class="nosymadd">+{{incrNoSymptom}}</text>
						</view>
					</view>
				</view>
				<view class="data-2">
					<text>累计确诊</text>
					<view>
						<text class="confirm">
							{{confirm}}
						</text>
						<view>
								较昨日<text class="confirmadd">+{{confirmAdd}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<covInfo />
		<tabBar />
	</view>
</template>

<script>
	import tabBar from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-curtain.vue" //导入插件
	import covInfo from "@/components/covid-info.vue"
	export default {
		data() {
			return {
				confirmAdd: 1,
				confirm: 1,
				incrNoSymptom: 1,
				noSymptom: 1,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				imgs: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/kangjiyiqing.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/daniel-schludi-ZeMRI9vO71o-unsplash.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/mika-baumeister-uz_T7h8ds04-unsplash.jpg',
				],
			}
		},
		components: {
			tabBar,
			covInfo
		},
		onLoad() {
			console.log('你好')
			this.fetchCovData();
		},
		methods: {
			fetchCovData() {
				uni.request({
					url: 'https://c.m.163.com/ug/api/wuhan/app/data/list-total',
					success: (res) => {
						let result = res.data.data;
						// 累计确诊
						this.confirm = result.chinaTotal.total.confirm;
						this.confirmAdd = result.chinaTotal.today.confirm;
						// 无症状感染者
						this.incrNoSymptom = result.chinaTotal.extData.incrNoSymptom;
						this.noSymptom = result.chinaTotal.extData.noSymptom;


					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.confirm {
		color:#a31d13;
		font-size: 24px;
	}
	.confirmadd {
		color:#a31d13;
	}
		.nosymadd {
			color:#791618;
		}
	.nosym {
		color:#791618;
		font-size: 24px;
	}
	.covid-data {
		display: flex;
		justify-content: space-between;
		gap:40rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
		border-bottom: black solid;
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
		margin-top: 10rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		width: 100%;
		margin: 0 auto;
	}

	.top-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
