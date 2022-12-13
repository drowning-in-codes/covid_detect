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
				<view class="left-button" @click="showmsg1">
					<image class="img-resize"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjM1IiBoZWlnaHQ9IjM1IiBzdHlsZT0iYm9yZGVyLWNvbG9yOiNiYmI7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE3aC0ydi0yaDJ2MnptMi4wNy03Ljc1bC0uOS45MkMxMy40NSAxMi45IDEzIDEzLjUgMTMgMTVoLTJ2LS41YzAtMS4xLjQ1LTIuMSAxLjE3LTIuODNsMS4yNC0xLjI2Yy4zNy0uMzYuNTktLjg2LjU5LTEuNDEgMC0xLjEtLjktMi0yLTJzLTIgLjktMiAySDhjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNGMwIC44OC0uMzYgMS42OC0uOTMgMi4yNXoiIGZpbGw9InJnYmEoMTMzLjExLDI0OC44OCwyMjYuOTUwMDAwMDAwMDAwMDIsMSkiLz48L3N2Zz4=">
					</image>
					<text class="button-info">阳了么</text>
				</view>
				<view class="right-button">
					<button type="primary" @click="topredict">新冠感染预测</button>
				</view>
			</view>
			<view class="covid-button">
				<view class="left-button" @click="showmsg2">
					<image class="img-resize"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjM1IiBoZWlnaHQ9IjM1IiBzdHlsZT0iYm9yZGVyLWNvbG9yOiM4NWY5ZTM7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik0xMiAxTDMgNXY2YzAgNS41NSAzLjg0IDEwLjc0IDkgMTIgNS4xNi0xLjI2IDktNi40NSA5LTEyVjVsLTktNHptLTIgMTZsLTQtNCAxLjQxLTEuNDFMMTAgMTQuMTdsNi41OS02LjU5TDE4IDlsLTggOHoiIGZpbGw9InJnYmEoMTMzLjExLDI0OC44OCwyMjYuOTUwMDAwMDAwMDAwMDIsMSkiLz48L3N2Zz4=">
					</image>
					<text class="button-info">阳了</text>
				</view>
				<view class="right-button">
					<button type="primary" @click="torecovery">新冠病程监测</button>
				</view>
			</view>
		</view>
		<view class="covid-infos">
			<text class="covid-info-title">抗疫指南</text>
			<view class="covid-info">
				<view class="info-title">
					<icon type="waiting" size="20" /><text class="info-title-text">人民日报 2022-12</text>
				</view>
				<uni-link href="http://www.gov.cn/xinwen/2022-12/08/content_5730664.htm" text="关于印发新冠病毒感染者居家治疗指南的通知">
				</uni-link>
			</view>
			<view class="covid-info">
				<view class="info-title">
					<icon type="waiting" size="20" /><text class="info-title-text">河北日报 2022-12</text>
				</view>
				<uni-link href="https://rmh.pdnews.cn/Pc/ArtInfoApi/article?id=32731419" text="是否需要储备药品？权威回应！">
				</uni-link>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// appId:'wxf2ff04695fb4db53',
				// appsecret:'5adc8870c93e92aeabb23625ae50ab38',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				imgs: [
					'http://rmkt29hqy.hn-bkt.clouddn.com/logo%E9%85%8D%E8%89%B2%E5%9B%BE.png',
					'http://rmkt29hqy.hn-bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221212201555.png',
					'http://rmkt29hqy.hn-bkt.clouddn.com/kangjiyiqing.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/daniel-schludi-ZeMRI9vO71o-unsplash.jpg',
					'http://rmkt29hqy.hn-bkt.clouddn.com/mika-baumeister-uz_T7h8ds04-unsplash.jpg',
				],
			}
		},
		components: {},
		onLoad() {
			this.wxlogin();
		},
		methods: {
			wxlogin()
			{
				uni.login({
				  success: res => {
				    //code值(5分钟失效)
				    console.info(res.code);
					// https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
				  }
				});
			},
			showmsg1() {
				uni.showModal({
					title: '提示',
					content: '填写症状预测您是否阳性',
				});
			},
			showmsg2() {
				uni.showModal({
					title: '提示',
					content: '填写情况监测您的病程',
				});
			},
			// 传递openid
			topredict() {
				uni.navigateTo({
					url: "/pages/detect/index"
				})
			},
			// 传递openid
			torecovery() {
				uni.navigateTo({
					url: "/pages/prediction/index"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.img-resize {
		width: 80rpx;
		height: 80rpx;
	}

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
		padding: 30rpx;
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
		padding: 30rpx;
		width: 90%;
		display: flex;
		margin: 0 30rpx;
		justify-content: space-evenly;
		height: 200rpx;
		margin-top: 60rpx;
		border: 1px solid rgba(190, 190, 190, 1);
		border-radius: 16rpx;
	}

	.covid-button+.covid-button {
		margin-top: 100rpx;
	}

	.covid-buttons {
		display: flex;
		flex-direction: column;
	}

	.left-button {
		display: flex;
		justify-content: center;
		align-items: center;
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
