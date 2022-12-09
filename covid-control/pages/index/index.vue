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
			<view class="tip-bar">
				<uni-notice-bar text="数据来源:国家卫健委以及各省市卫健委.如有不符,请在官方网站查看最新数据."></uni-notice-bar>
			</view>
			<view class="data-title">数据截至{{upDatetime}}</view>
			<view class="covid-data">
				<view class="data-1">
					<text>无症状感染者</text>
					<view>
						<text class="nosym">
							{{noSymptom}}
						</text>
						<view class="add">
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
						<view class="add">
								较昨日<text class="confirmadd">+{{confirmAdd}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<covInfo />
	</view>
</template>

<script>
	import covInfo from "@/components/covid-info.vue"
	export default {
		data() {
			return {
				upDatetime:undefined,
				confirmAdd: 1,
				confirm: 1,
				incrNoSymptom: 1,
				noSymptom: 1,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				imgs: [
					'http://rmkt29hqy.hn-bkt.clouddn.com/kangjiyiqing.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/daniel-schludi-ZeMRI9vO71o-unsplash.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/mika-baumeister-uz_T7h8ds04-unsplash.jpg',
				],
			}
		},
		components: {
			covInfo
		},
		onLoad() {
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
						this.upDatetime = result.lastUpdateTime;
	
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tip-bar {
		margin-top: 5rpx;
	}
	.data-1,.data-2 {
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
		padding: 30rpx;
		background-color: #ededed;
	}
	.add {
		font-size: 14px;
		color:#a9a9a9;
	}
	.data-title {
		margin-top: 20rpx;
		color:#a9a9a9;
	} 
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
