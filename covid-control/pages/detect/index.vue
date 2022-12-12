<template>
	<view class="detect-container">
		<form  @reset="formReset" class="detect-form">
			<view class="basic-info">
				<view class="basic-info-top">
					<view class="basic-info-left">
						<view class="uni-column">
							<view class="title">年龄</view>
							<picker @change="bindageChange" :value="ageindex" :range="agerange" range-key="val">
								<view v-if="ageindex!=null" class="picker">
									{{ agerange[ageindex].val }}(岁)
								</view>
								<view class="picker" v-else>请选择年龄</view>
							</picker>
						</view>
						<view class="uni-column">
							<view class="title">性别</view>
							<picker @change="handleSexchange" :value="sexindex" :range="sexrange" range-key="val">
								<view v-if="sexindex" class="picker">
									{{ sexrange[sexindex].val }}
								</view>
								<view class="picker" v-else>请选择性别</view>
							</picker>
						</view>
					</view>
					<view class="basic-info-right">
						<view class="geo-top">
							<view class="img-box">
								<image class="geoimg"
									src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQyIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik0yNC40ODUgMjMuMTUyTDE2IDMxLjYzN2wtOC40ODUtOC40ODVBMTEuOTYyIDExLjk2MiAwIDAgMSA0IDE0LjY2N2MwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyYzAgMy4zMTQtMS4zNDMgNi4zMTQtMy41MTUgOC40ODV6TTE2IDE3LjMzM2EyLjY2NyAyLjY2NyAwIDEgMCAwLTUuMzM0IDIuNjY3IDIuNjY3IDAgMSAwIDAgNS4zMzR6IiBmaWxsPSJyZ2JhKDU1LjA4LDEyNi45OSwxMjYuOTksMSkiLz48L3N2Zz4=">
								</image>
							</view>
							<view>地理位置</view>
						</view>
						<view class="geo-bottom" v-if="flag">
							<view class="center">国家:{{country}}</view>
							<view class="center">{{province}}<text class="iconfont icon-youjiantou"></text>{{city}}<text
									class="iconfont icon-youjiantou"></text>{{district}}</view>
						</view>
						<view class="geo-bottom" v-else>
							<view class="center">已拒绝获取地理位置授权</view>
						</view>
					</view>
				</view>

				<view class="basic-info-bottom">
					<view class="bottom-left">
						<image src="../../static/temperature.png" class="tmpimg"></image>
					</view>
					<view class="bottom-right">
						<view class="tmptitle">今日体温:</view>
						<picker @change="bindPickerChange" class="showtemp" :value="index" :range="temperature"
							range-key="val">
							<view class="wrapper">
								<view class="picker temp-show">{{ temperature[index].val}}</view>
								<image style="width: 120rpx;height: 120rpx;"
									src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiBzdHlsZT0iYm9yZGVyLWNvbG9yOiNiYmI7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik02IDEzLjMzM2E0LjY2NyA0LjY2NyAwIDAgMSAwLTkuMzM0IDQuNjY3IDQuNjY3IDAgMCAxIDAgOS4zMzR6bTAtMi42NjZhMiAyIDAgMSAwIDAtNCAyIDIgMCAxIDAgMCA0em0yMy4zMzMgMi42NjZoLTIuNjY3YTUuMzMzIDUuMzMzIDAgMSAwLTEwLjY2NiAwVjIwYTUuMzMzIDUuMzMzIDAgMSAwIDEwLjY2NiAwaDIuNjY3YTggOCAwIDAgMS0xNiAwdi02LjY2N2E4IDggMCAwIDEgMTYgMHoiIGZpbGw9InJnYmEoNTUuMDgsMTI2Ljk5LDEyNi45OSwxKSIvPjwvc3ZnPg==">
								</image>
							</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="wrapper">
				<text class="query">是否有如下情况</text><image @click="showmsg" class="resizeimg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBzdHlsZT0iYm9yZGVyLWNvbG9yOiNiYmI7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik0xMSAxOGgydi0yaC0ydjJ6bTEtMTZDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0wLTE0YTQgNCAwIDAgMC00IDRoMmMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgMi0zIDEuNzUtMyA1aDJjMC0yLjI1IDMtMi41IDMtNWE0IDQgMCAwIDAtNC00eiIgZmlsbD0icmdiYSg1NS4wOCwxMjYuOTksMTI2Ljk5LDEpIi8+PC9zdmc+"></image>
			</view>
			<view class="ext-info">
				<view class="uni-list">
					<checkbox-group @change="checkboxChange" class="checkgroups">
						<view class="uni-list-cell" v-for="item in symptoms" :key="item.value">
							<view>
								<checkbox :value="item.value" :checked="item.checked" />
							</view>
							<view class="box-label">{{item.name}}</view>
						</view>
					</checkbox-group>
				</view>
			</view>
			<view class="form-item">
				<view>
					<text>最近一次核酸检测结果</text>
				</view>
				<picker @change="bindresultChange" class="form-item-picker" :value="resultindex" :range="results"
					range-key="val">
					<view v-if="resultindex!=null" class="picker">
						{{ results[resultindex].val }}
					</view>
					<view class="picker" v-else>请选择阳性,阴性或未知</view>
				</picker>
			</view>
			<view class="form-item">
				<view>
					<text>症状出现天数</text>
				</view>
				<picker @change="binddayChange" class="form-item-picker" :value="dayindex" :range="days" range-key="val">
					<view v-if="dayindex!=null" class="picker">
						{{ days[dayindex].val }}(天)
					</view>
					<view class="picker" v-else>请选择第几天</view>
				</picker>
			</view>
			<view class="uni-btn-v">
				<button  type="primary" @click="submit" class="uni-button">感染预测</button>
				<!-- <button type="default" form-type="reset" @click="reset">重置</button> -->
			</view>
		</form>
	</view>
</template>

<script>
	import QQMapWX from '@/libs/qqmap-wx-jssdk.min.js';
	export default {
		data() {
			return {
				dayindex: null,
				days: [],
				day: null,
				results: [{
					val: "阳性"
				}, {
					val: '阴性'
				}, {
					val: "未知"
				}],
				resultindex: null,
				result: null,
				symptoms: [{
					value: "头痛",
					name: "头痛"
				}, {
					value: "气喘",
					name: "气喘"
				}, {
					value: "咽干喉痛",
					name: "咽干喉痛"
				}, {
					value: "流涕鼻塞",
					name: "流涕鼻塞"
				}, {
					value: "身体乏力",
					name: "身体乏力"
				}, {
					value: "肠胃不适",
					name: "肠胃不适"
				}, {
					value: "咽痒咳嗽",
					name: "咽痒咳嗽"
				}, {
					value: "无以上症状",
					name: "无以上症状"
				}, ],
				currSymptoms: [],
				sex: "男",
				age: 1,
				sexindex: null,
				sexrange: [{
					val: "男"
				}, {
					val: "女"
				}],
				agerange: [],
				ageindex: null,
				qqmapsdk: null,
				temperature: [{
					val: '35.7以下'
				}, {
					val: '35.7'
				}, {
					val: '35.8'
				}, {
					val: '35.9'
				}, {
					val: '36.0'
				}, {
					val: '36.1'
				}, {
					val: '36.2'
				}, {
					val: '36.3'
				}, {
					val: '36.4'
				}, {
					val: '36.5'
				}, {
					val: '36.6'
				}, {
					val: '36.7'
				}, {
					val: '36.8'
				}, {
					val: '36.9'
				}, {
					val: '37.0'
				}, {
					val: '37.1'
				}, {
					val: '37.2'
				}, {
					val: '37.3'
				}, {
					val: '37.4'
				}, {
					val: '37.5'
				}, {
					val: '37.6'
				}, {
					val: '37.7'
				}, {
					val: '37.8'
				}, {
					val: '37.9'
				}, {
					val: '38.0'
				}, {
					val: '38.0以上'
				}],
				index: 16,
				currTemp: '37.2',
				country: null,
				province: null,
				city: null,
				district: null,
				sex: null,
				flag:false,
			};
		},
		onLoad() {
			this.agerange = new Array();
			this.days = new Array();
			this.days.push({val:"0"});
			for (let i = 1; i < 100; i++) {
				let ageobj = {
					val: i,
				}
				if(i<=10)
				{
				this.days.push(ageobj);
				}
				this.agerange.push(ageobj);
			}
			this.agerange.push({
				val: "100及以上"
			});
			this.days.push({val:"10天及以上"})
			console.log('加载表格页面');
			this.qqmapsdk = new QQMapWX({
				key: 'L32BZ-VJSCU-INJVN-4CIEX-XWUVS-CHF7Q'
			});
			this.getUserLocation();
		},
		methods: {
			showmsg()
			{
				uni.showModal({
					title: '提示',
					content: '填写情况填写您的症状.若无,则选择无以上症状',
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			getUserLocation() {
				uni.getSetting({
					success: (res) => {
						if (res.authSetting && res.authSetting.hasOwnProperty("scope.userLocation")) {
							if (res.authSetting["scope.userLocation"]) {
								this.getCityInfo();
							} else {
								uni.showModal({
									title: "提示",
									content: "请重新授权获取你的地理位置，否则部分功能将无法使用",
									success: (res) => {
										if (res.confirm) {
											uni.openSetting({
												success: () => this.getCityInfo()
											});
										} else {
											reject("请授权获取你的地理位置，否则部分功能将无法使用！");
										}
									},
								});
							}
						} else {
							console.log('正确')
							console.log(res)
							this.getCityInfo();
						}
					}
				})
			},
			getCityInfo() {
				console.log('调用getCityInfo')
				uni.authorize({
					scope: "scope.userLocation",
					success: () => {
						console.log('授权')
						uni.getLocation({
							type: "gcj02", //  wgs84: 返回GPS坐标，gcj02: 返回国测局坐标
							success: res => {
								console.log('获取位置')
								const {
									latitude,
									longitude
								} = res;
								const location = {
									latitude,
									longitude
								};
								this.qqmapsdk.reverseGeocoder({
									location,
									success: (res) => {
										let loginAddress = res.result.ad_info.name
										console.log(loginAddress)
										this.flag = true;
										// 获取信息
										this.country = loginAddress.split(',')[0];
										this.province = loginAddress.split(',')[1];
										this.city = loginAddress.split(',')[2];
										this.district = loginAddress.split(',')[3];
									},
									fail: (res) => {
										uni.showModal({
											title: '错误',
											content: '获取地理位置错误,请刷新重试',
											showCancel: true,
											confirmText: '确定'
										});
										console.log(res)
									},
								});
							},
							fail: () => {
								uni.showModal({
									title: '错误',
									content: '获取地理位置错误,请刷新重试',
									showCancel: true,
									confirmText: '确定'
								});
							}
						});
					},
					fail: () => reject("请授权获取你的位置，否则部分功能将无法使用！")
				})
			},
			submit() {
				
			},
			reset() {
				// 重置年龄
				this.ageindex = null;
				this.age = null;
				// 重置性别
				this.sex = null;
				this.sexindex = null;
				// 重置体温
				this.index = 16;
				this.currTemp = '37.2';
				//重置症状
				this.currSymptoms = [];
				// 重置剩余项
				this.result = null;
				this.resultindex = null;
				this.day = null;
				this.dayindex = null;
			},
			bindresultChange(e) {
				this.resultindex = e.detail.value;
				this.result = this.results[this.resultindex].val;
			},
			checkboxChange(e) {
				// console.log(e.detail.value)
				this.currSymptoms = e.detail.value;
			},
			bindageChange(e) {
				this.ageindex = e.detail.value;
				this.age = this.agerange[this.ageindex].val;
			},
			bindPickerChange(e) {
				this.index = e.detail.value;
				this.currTemp = this.temperature[this.index].val;
			},
			handleSexchange(e) {
				this.sexindex = e.detail.value;
				this.sex = this.sexrange[this.sexindex].val;
			},
			binddayChange(e)
			{
				this.dayindex = e.detail.value;
				this.day = this.days[this.dayindex].val;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont.css';
	.resizeimg {
		width: 80rpx;
		height: 80rpx;
		margin-left: 10rpx;
	}
	.form-item-picker {
		width: 60vw;
	}
	.form-item {
		margin-bottom: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 20rpx;
	}

	.block {
		display: block;
	}

	.wrapper {
		display: flex;
		align-items: center;
	}

	.temp-show {
		min-height: 50rpx;
		color: #1C1F23;
		font-size: 60rpx;
		font-weight: 700;
		font-family: SourceHanSansSC-regular;
	}
		
	.uni-button {
		width: 70vw;
	}
	.checkgroups {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.red {
		color: red;
		font-weight: 700;
		margin-left: 5rpx;
	}

	.query {
		font-weight: 700;
		font-size: 35rpx;
	}

	.title {
		margin-bottom: 10rpx;
		font-weight: 700;
	}

	.basic-info {
		margin-bottom: 25rpx;
	}

	.tmptitle {
		color: rgb(189, 49, 36);
		font-weight: 700;
		margin-bottom: 20rpx;
	}

	.center {
		margin-top: 15rpx;
		text-align: center;
	}

	.basic-info-bottom {
		display: flex;
		gap: 40rpx;
		align-items: center;
		margin-top: 35rpx;
		box-shadow: 0px 2px 8px 0px rgba(136, 136, 136, 40);
		padding: 15rpx;
		border-radius: 15rpx;
	}

	.geo-top {
		display: flex;
		justify-content: center;
		gap: 35rpx;
		align-items: center;
		border-bottom: #F2F2F7 solid;
	}

	.tmpimg {
		width: 300rpx;
		height: 300rpx;
	}

	.geoimg {
		width: 120rpx;
		height: 120rpx;
	}

	.picker {
		padding: 20rpx;
		background-color: #ededed;
		border: #C1C2C5 solid;
	}

	.basic-info-top {
		display: flex;
		justify-content: space-around;
	}

	.basic-info-right {
		width: 50vw;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 2px 8px 0px rgba(136, 136, 136, 40);
		padding: 15rpx;
		border-radius: 15rpx;
	}

	.basic-info-left {
		display: flex;
		flex-direction: column;
	}

	.sex-label {
		margin-top: 8rpx;
		display: flex;
		gap: 60rpx;
	}

	.uni-column+.uni-column {
		margin-top: 20rpx;
	}

	.detect-title {
		font-size: 36rpx;
		color: #8f8f94;
		border-bottom: black solid;
	}

	.uni-list {
		margin: 0 auto;
	}

	.box-label {
		margin-left: 30rpx;
	}

	.uni-list-cell {
		flex: 1 0 50%;
		display: flex;
		align-items: center;
		margin-top: 15rpx;
	}

	.ext-info {
		padding: 30rpx;
		border-radius: 15rpx;
		box-shadow: 0px 2px 8px 0px rgba(136, 136, 136, 40);
		margin-top: 30rpx;
		margin-bottom: 40rpx;
	}


	.uni-btn-v {
		display: flex;
		// justify-content: space-between;
		// gap: 20rpx;
		margin: 0 auto;
	}

	.uni-input {
		background-color: white;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		min-height: 60rpx;
		background-color: #ededed;
	}

	.age-choose {
		display: flex;
	}

	.detect-form {
		width: 90%;
		margin: 10rpx auto;
		padding: 10rpx;
		min-height: 80vh;
	}

	.detect-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.label {
		display: inline;
	}
</style>
