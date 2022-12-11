<template>
	<view class="detect-container">
		<view class="detect-title">
			请填写您的信息
		</view>
		<form @submit="formSubmit" @reset="formReset" class="detect-form">
			<view class="basic-info">
				<view class="basic-info-top">
					<view class="basic-info-left">
						<view class="uni-column">
							<view class="title">年龄</view>
							<picker @change="bindageChange" :value="ageindex" :range="agerange" range-key="val">
								<view v-if="ageindex!=null" class="picker">
									{{ agerange[ageindex].name }}
								</view>
								<view class="picker" v-else>请选择年龄</view>
							</picker>
						</view>
						<view class="uni-column">
							<view class="title">性别</view>
							<picker @change="bindsexChange" :value="sexindex" :range="sexrange" range-key="val">
								<view v-if="sexindex!=null" class="picker">
									{{ sexrange[sexindex].name }}
								</view>
								<view class="picker" v-else>请选择性别</view>
							</picker>
						</view>
					</view>
					<view class="basic-info-right">
						<view class="geo-top"><view class="img-box"><image class="geoimg" src="../../static/geo.png"></image></view><text>地理位置</text></view>
						<view class="geo-bottom">
							<view class="center">国家:{{country}}</view>
							<view>{{province}}<text class="iconfont icon-youjiantou"></text>{{city}}<text class="iconfont icon-youjiantou"></text>{{district}}</view>
						</view>
					</view>
				</view>

				<view class="basic-info-bottom">
					<view class="bottom-left">
						<image src="../../static/temperature2.png" class="tmpimg"></image>
					</view>
					<view class="bottom-right">
					<view class="tmptitle">今日体温(℃)</view>
					<picker @change="bindPickerChange" :value="index" :range="temperature" range-key="val">
						<view style="padding: 20rpx;background-color: #ededed;">{{ temperature[index].val }}</view>
					</picker>
					</view>
				</view>
			</view>
			<text class="query">是否有如下情况<text class="red">*</text></text>
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
			<view class="uni-btn-v">
				<button form-type="submit" type="primary" @click="submit">提交</button>
				<button type="default" form-type="reset" @click="reset">重置</button>
			</view>
		</form>
	</view>
</template>

<script>
	import QQMapWX from '@/libs/qqmap-wx-jssdk.min.js';
	export default {
		data() {
			return {
				symptoms: [{
					value: "咳嗽",
					name: "咳嗽"
				}, {
					value: "呼吸困难",
					name: "呼吸困难"
				}, {
					value: "发烧",
					name: "发烧"
				}, {
					value: "喉咙疼痛",
					name: "喉咙疼痛"
				}, {
					value: "头痛",
					name: "头痛"
				}, {
					value: "与阳性患者接触过",
					name: "与阳性患者接触过"
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
				country:null,
				province:null,
				city:null,
				district:null,
			};
		},
		onLoad() {
			this.agerange = new Array();
			for (let i = 1; i < 100; i++) {
				let ageobj = {
					val: i,
				}
				this.agerange.push(ageobj);
			}
			this.agerange.push({
				val: "100及以上"
			});
			console.log('加载表格页面');

			this.qqmapsdk = new QQMapWX({
				key: 'L32BZ-VJSCU-INJVN-4CIEX-XWUVS-CHF7Q'
			});
			this.getUserLocation();
		},
		methods: {
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
			submit() {},
			reset() {
				this.index = 16;
				this.currTemp = '37.2';
				this.currSymptoms = [];
			},
			bindsexChange(e) {
				this.sex = this.sexrange[e.detail.value].val;
			},
			checkboxChange(e) {
				this.currSymptoms = e.detail.value;
			},
			bindageChange(e) {
				this.age = this.ageindex[e.detail.value].val;
			},
			bindPickerChange(e) {
				this.index = e.detail.value;
				this.currTemp = this.temperature[this.index].val;
			},
			handleSexchange(e) {
				this.ismale = e.detail.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont.css';
	
	.red {
		color: red;
		font-weight: 700;
		margin-left: 5rpx;
	}
	.query {
		font-weight: 700;
		font-size: 50rpx;
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
		margin-bottom: 10rpx;
	}
	.center {
		margin-top: 15rpx;
		text-align: center;
	}
	.basic-info-bottom {
		display: flex;
		gap: 50rpx;
		align-items: center;
		margin-top: 15rpx;
		box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
		padding: 15rpx;
		border-radius: 15rpx;
	}
	.geo-top {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: #8f8f94 solid;
	}
	.tmpimg {
		width: 350rpx;
		height: 350rpx;
	}
	.geoimg {
		width: 150rpx;
		height: 150rpx;
	}
	.picker {
		padding: 20rpx;
		background-color: #ededed;
	}

	.basic-info-top {
		display: flex;
		justify-content: space-around;
	}
	.basic-info-right {
		width:50vw;
		display: flex;
		flex-direction: column;
		box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
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
		display: flex;
		align-items: center;
		margin-top: 15rpx;
		width: 50%;
	}

	.ext-info {
		padding: 30rpx;
		border-radius: 15rpx;
		box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
		margin-top: 30rpx;
		margin-bottom: 40rpx;
	}


	.uni-btn-v {
		display: flex;
		justify-content: space-between;
		gap: 20rpx;
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
