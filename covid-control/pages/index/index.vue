<template>
	<view class="container">
		<view class="top-container">
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
					:interval="interval" :duration="duration">
					<swiper-item v-for="(item,index) in imgs" :key="index">
						<image class="swiper-item" :src="item" mode="aspectFill">
						</image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="covid-buttons">
			<view class="covid-button">
				<view class="left-button"><view class="icon-text"><icon type="info" size="36"/><text class="button-info">阳了么?</text></view></view>
				<view class="right-button">
					<button type="primary">新冠感染预测</button>
				</view>
			</view>
			<view class="covid-button">
				<view class="left-button"><view class="icon-text"><icon type="info" size="36"/><text class="button-info">阳了</text></view></view>
				<view class="right-button">
					<button type="primary">新冠康复预测</button>
				</view>
			</view>
		</view>
	<view class="covid-infos">
		<text class="covid-info-title">抗疫指南</text>
		<view class="covid-info"> 
			<view class="info-title"><icon type="waiting" size="20"/><text class="info-title-text">人民日报 2022-12</text></view>
			<uni-link href="http://www.gov.cn/xinwen/2022-12/08/content_5730664.htm" text="关于印发新冠病毒感染者居家治疗指南的通知"></uni-link>
		</view>
		<view class="covid-info">
			<view class="info-title"><icon type="waiting" size="20"/><text class="info-title-text">河北日报 2022-12</text></view>
			<uni-link href="https://rmh.pdnews.cn/Pc/ArtInfoApi/article?id=32731419" text="是否需要储备药品？权威回应！"></uni-link>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				imgs: [
					'http://rmkt29hqy.hn-bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221211124823.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/kangjiyiqing.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/daniel-schludi-ZeMRI9vO71o-unsplash.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/mika-baumeister-uz_T7h8ds04-unsplash.jpg',
				],
				// tmplIds: ['0_8dChLWolTY82j-r8oBRgbOlC-n6SgnuciKU37cBTA'],
				// AppId: 'wxf2ff04695fb4db53',
				// AppSecret: '3656299fd4ae977e0de01XXXXXXXXX',
			}
		},
		components: {
		},
		onLoad() {
		},
		methods: {
		
	
		}
	}
</script>

<style lang="scss" scoped>
	.info-title-text {
		margin-left: 25rpx;
		font-size: 30rpx;
	}
	.info-title {
		display: flex;
		align-items: center;
	}
	.covid-info {
		margin-top: 40rpx;
		margin-left: 15rpx;
		padding: 25rpx;
		box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
		border-radius: 15rpx;
	}
	.covid-infos {
		margin-top: 30rpx;
		padding:30rpx;
	}
	.covid-info-title {
		font-weight: 600;
		margin-left: 25rpx;
	}
	.button-info {
		margin-left: 30rpx;
		font-weight: 700;
		font-size: 42rpx;
	}
	.icon-text {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.covid-button {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		width:80%;
		display: flex;
		margin:0 auto;
		justify-content: space-evenly;
		height: 200rpx;
		margin-top:60rpx;
	}
		
	.covid-button + .covid-button {
		margin-top:100rpx;
	}
	.covid-buttons {
		display: flex;
		flex-direction: column;
	}
	.left-button {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.right-button {
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;
	}
	.tip-bar {
		margin-top: 5rpx;
	}

	.data-1,
	.data-2 {
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
		padding: 30rpx;
		background-color: #ededed;
	}

	.add {
		font-size: 14px;
		color: #a9a9a9;
	}

	.data-title {
		margin-top: 20rpx;
		color: #a9a9a9;
	}

	.confirm {
		color: #a31d13;
		font-size: 24px;
	}

	.confirmadd {
		color: #a31d13;
	}

		.nosymadd {
		color: #791618;
	}

	.nosym {
		color: #791618;
		font-size: 24px;
	}

	.covid-data {
		display: flex;
		justify-content: space-between;
		gap: 40rpx;
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
