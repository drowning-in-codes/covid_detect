<template>
	<view class="detect-container">
		<u-form :model="formvalue" ref="uForm" class="detect-form">
			<view class="basic-info">
				<view class="basic-info-top">
					<view class="basic-info-left">
						<view class="uni-column">
							<u-form-item prop="age" label="年龄" required="true" label-position="top"
								:border-bottom="false">
								<view class="input-area">
									<u-input v-model="formvalue.age" placeholder="请选择" type="select" border="true"
										@click="ageShow = true" />
								</view>
								<u-select v-model="ageShow" mode="single-column" :list="agerange"
									@confirm="handAgeChange">
								</u-select>
							</u-form-item>
						</view>
						<view class="uni-column">
							<u-form-item prop="sex" label="性别" required="true" label-position="top"
								:border-bottom="false">
								<view class="input-area">
									<u-input class="input-area" placeholder="请选择" v-model="formvalue.sex" type="select"
										border="true" @click="sexShow = true" />
								</view>
								<u-select v-model="sexShow" mode="single-column" :list="sexrange"
									@confirm="handleSexchange">
								</u-select>
							</u-form-item>
						</view>
					</view>
					<view class="basic-info-right">
						<view class="geo-top">
							<view class="wrapper covid-gap" @click="showdatamsg">
								<view v-if="!flag">全国疫情数据</view>
								<view v-else>{{province}}疫情数据</view>
								<view class="tip-img-box">
									<image class="miniimg"
										src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBzdHlsZT0iYm9yZGVyLWNvbG9yOiNiYmI7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik0xMSAxOGgydi0yaC0ydjJ6bTEtMTZDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0wLTE0YTQgNCAwIDAgMC00IDRoMmMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgMi0zIDEuNzUtMyA1aDJjMC0yLjI1IDMtMi41IDMtNWE0IDQgMCAwIDAtNC00eiIgZmlsbD0icmdiYSg1NS4wOCwxMjYuOTksMTI2Ljk5LDEpIi8+PC9zdmc+">
									</image>
								</view>
							</view>
							<view class="geo-top-wrapper">
								<view class="covid-confirm">
									<view class="covid-bold">累计确诊</view>
									<view class="covid-confirm-total boldred">{{totalConfirm}}</view>
									<view class="covid-confirm-add">较昨日<text
											class="add-confirm">+{{todayConfirm}}</text></view>
								</view>
								<view class="covid-heal">
									<view class="covid-bold">累计治愈</view>
									<view class="covid-heal-total green">{{todayHeal}}</view>
									<view class="covid-heal-add">较昨日<text class="add-heal">+{{todayHeal}}</text></view>
								</view>
							</view>
						</view>
						<view class="geo-bottom">
							<u-line :hair-line="false" />
							<view class="geo-wrapper-mini">
								<view>地理位置</view>
								<view class="img-box">
									<image class="geoimg"
										src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQyIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik0yNC40ODUgMjMuMTUyTDE2IDMxLjYzN2wtOC40ODUtOC40ODVBMTEuOTYyIDExLjk2MiAwIDAgMSA0IDE0LjY2N2MwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyYzAgMy4zMTQtMS4zNDMgNi4zMTQtMy41MTUgOC40ODV6TTE2IDE3LjMzM2EyLjY2NyAyLjY2NyAwIDEgMCAwLTUuMzM0IDIuNjY3IDIuNjY3IDAgMSAwIDAgNS4zMzR6IiBmaWxsPSJyZ2JhKDU1LjA4LDEyNi45OSwxMjYuOTksMSkiLz48L3N2Zz4=" />
								</view>
							</view>
							<u-form-item class="geo-form-item" :border-bottom="false" prop="region" label-width="150"
								v-if="flag">
								<u-input class="regionText" type="select" :select-open="positionShow"
									v-model="formvalue.location" placeholder="请选择地区" @click="positionShow = true">
								</u-input>
								<u-picker mode="region" v-model="positionShow" @confirm="regionConfirm"></u-picker>
							</u-form-item>
							<view class="geo-bottom" v-else>
								<view class="center">已拒绝获取地理位置授权</view>
							</view>
						</view>

					</view>
				</view>

				<view class="basic-info-bottom">
					<view class="bottom-left">
						<image src="http://rmkt29hqy.hn-bkt.clouddn.com/temperature.png" class="tmpimg"></image>
					</view>
					<view class="bottom-right">
						<u-form-item required="true" prop="temp" label-width="190" label="今日体温:" :border-bottom="false"
							label-position="top">
							<u-input :border="true" v-model="formvalue.temp" :custom-style="temperatrueStyle"
								type="select" @click="temperatrueShow = true"></u-input>
							<u-select v-model="temperatrueShow" mode="mutil-column" :list="temperatrueList"
								@confirm="confirmTemperatrue">
							</u-select>
						</u-form-item>
						<image class="tmp-img-r"
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiBzdHlsZT0iYm9yZGVyLWNvbG9yOiNiYmI7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik02IDEzLjMzM2E0LjY2NyA0LjY2NyAwIDAgMSAwLTkuMzM0IDQuNjY3IDQuNjY3IDAgMCAxIDAgOS4zMzR6bTAtMi42NjZhMiAyIDAgMSAwIDAtNCAyIDIgMCAxIDAgMCA0em0yMy4zMzMgMi42NjZoLTIuNjY3YTUuMzMzIDUuMzMzIDAgMSAwLTEwLjY2NiAwVjIwYTUuMzMzIDUuMzMzIDAgMSAwIDEwLjY2NiAwaDIuNjY3YTggOCAwIDAgMS0xNiAwdi02LjY2N2E4IDggMCAwIDEgMTYgMHoiIGZpbGw9InJnYmEoNTUuMDgsMTI2Ljk5LDEyNi45OSwxKSIvPjwvc3ZnPg==">
						</image>
					</view>
				</view>
			</view>

			<view class="wrapper">
				<text class="query">是否有如下情况</text>
				<u-icon class="right-icon" name="question-circle" color="#377F7F" size="45" @click="tipShow = true">
				</u-icon>
				<u-modal v-model="tipShow" content="填写您的症状.若无,则选择无以上症状"></u-modal>
			</view>
			<view class="ext-info">
				<u-form-item :border-bottom="false" prop="symptom">
					<u-checkbox-group width="50%" @change="handleSymptomChange" shape="circle">
						<u-checkbox @change="disableOtherCondition" v-model="item.checked"
							v-for="(item, index) in symptomsList" :key="index" :name="item.name" label-size="16px"
							icon-size="12px">{{item.value}}</u-checkbox>
					</u-checkbox-group>
				</u-form-item>
			</view>
			<u-form-item label-width="190" required="true" prop="nc_test" label="最近一次核酸检测结果" :border-bottom="false"
				:label-style="labelStyle">
				<view class="input-area">
					<u-input placeholder="请选择(阳性、阴性、未知)" :border="true" v-model="formvalue.nc_test" type="select"
						@click="resultShow = true"></u-input>
				</view>
				<u-select v-model="resultShow" mode="single-column" :list="resultList" @confirm="handleResultChange">
				</u-select>
			</u-form-item>
			<u-form-item label-width="190" required="true" prop="days_symp" label="症状出现天数" :border-bottom="false"
				:label-style="labelStyle">
				<view class="input-area">
					<u-input class="input-area" placeholder="请选择(第几天)" :border="true" v-model="formvalue.days_symp"
						type="select" @click="dayShow = true"></u-input>
				</view>
				<u-select v-model="dayShow" mode="single-column" :list="dayList" @confirm="handleDayChange"></u-select>
			</u-form-item>
			<view class="uni-btn">
				<u-button :ripple="true" :custom-style="customStyle" ripple-bg-color="#E9F8F5" @click="submit">感染风险提示
				</u-button>
			</view>
		</u-form>
	</view>
</template>

<script>
	import QQMapWX from '@/libs/qqmap-wx-jssdk.min.js';
	export default {
		data() {
			return {
				formRules: {
					age: [{
						required: true,
						message: '请选择年龄',
						trigger: ['change', 'blur']
					}],
					sex: [{
						required: true,
						message: '请选择性别',
						trigger: ['change', 'blur']
					}],
					nc_test: [{
						required: true,
						message: '请选择最近一次核酸检测结果',
						trigger: ['change', 'blur']
					}],
					days_symp: [{
						required: true,
						message: '请选择症状出现天数',
						trigger: ['change', 'blur']
					}],
					symptom: [{
						// 自定义验证函数
						validator: (rule, value, callback) => {
							// 上面有说，返回true表示校验通过，返回false表示不通过
							// this.$u.test.mobile()就是返回true或者false的
							if (value.length == 0) {
								return false;
							} else {
								return true;
							}
						},
						message: '请选择症状',
						trigger: ['change', 'blur'],
					}],
				},
				temperatrueStyle: {
					fontSize: '72rpx',
					width: '160rpx',
					padding: '10rpx',
				},
				customStyle: {
					height: '80rpx',
					'margin-top': '10rpx',
					'margin-left': '120rpx',
					'margin-right': '120rpx',
					'margin-bottom': '40rpx'
				},
				labelStyle: {
					width: '190rpx',
					'line-height': '32rpx'
				},
				formvalue: {
					age: "",
					sex: "",
					temp: '36.7',
					location: "",
					nc_test: "",
					days_symp: "",
					symptom: [],
				},
				temperatrueShow: false,
				dayShow: false,
				resultShow: false,
				tipShow: false,
				ageShow: false,
				sexShow: false,
				positionShow: false,
				flag: false,
				lastUpdateTime: null,
				totalConfirm: null,
				totalHeal: null,
				todayConfirm: null,
				todayHeal: null,
				days: [],
				dayList: [{
						value: '1',
						label: '第一天',
					},
					{
						value: '2',
						label: '第二天',
					},
					{
						value: '3',
						label: '第三天',
					},
					{
						value: '4',
						label: '第四天',
					},
					{
						value: '5',
						label: '第五天',
					},
					{
						value: '6',
						label: '第六天',
					},
					{
						value: '7',
						label: '第七天',
					},
					// {
					// 	value: '7+',
					// 	label: '7天以上',
					// },
				],
				resultList: [{
						value: '阳性',
						label: '阳性'
					},
					{
						value: '阴性',
						label: '阴性'
					},
					{
						value: '未知',
						label: '未知',
					}
				],
				symptomsList: [{
					name: "tt",
					value: "头痛",
					checked: false,
				}, {
					name: "qc",
					value: "气喘",
					checked: false,
				}, {
					name: "yt",
					value: "咽干喉痛",
					checked: false,
				}, {
					name: "lt",
					value: "流涕鼻塞",
					checked: false,
				}, {
					name: "fl",
					value: "身体乏力",
					checked: false,
				}, {
					name: "cw",
					value: "肠胃不适",
					checked: false,
				}, {
					name: "ks",
					value: "咽痒咳嗽",
					checked: false,
				}, {
					name: "null",
					value: "无以上症状",
					checked: false,
				}, ],
				sexrange: [{
					value: "男",
					label: "男",

				}, {
					value: "女",
					label: "女"
				}],
				agerange: [],
				qqmapsdk: null,
				temperatrueList: [
					[{
							value: '34',
							label: '34'
						},
						{
							value: '35',
							label: '35'
						},
						{
							value: '36',
							label: '36'
						},
						{
							value: '37',
							label: '37'
						},
						{
							value: '38',
							label: '38'
						},
						{
							value: '39',
							label: '39'
						},
						{
							value: '40',
							label: '40'
						},
						{
							value: '41',
							label: '41'
						},
						{
							value: '42',
							label: '42'
						}
					],
					[{
							value: '.0',
							label: '.0'
						},
						{
							value: '.1',
							label: '.1'
						},
						{
							value: '.2',
							label: '.2'
						},
						{
							value: '.3',
							label: '.3'
						},
						{
							value: '.4',
							label: '.4'
						},
						{
							value: '.5',
							label: '.5'
						},
						{
							value: '.6',
							label: '.6'
						},
						{
							value: '.7',
							label: '.7'
						},
						{
							value: '.8',
							label: '.8'
						},
						{
							value: '.9',
							label: '.9'
						}

					]
				],
				country: null,
				province: null,
				city: null,
				district: null,
			};
		},
		onReady() {
			this.$refs.uForm.setRules(this.formRules);
		},
		onLoad() {
			this.agerange = new Array();
			for (let i = 1; i < 100; i++) {
				let ageobj = {
					value: "" + i,
					label: "" + i,
				}
				if (i <= 10) {
					this.days.push(ageobj);
				}
				this.agerange.push(ageobj);
			}
			this.agerange.push({
				value: "100及以上",
				label: "100及以上"
			});
			console.log('加载表格页面');
			this.qqmapsdk = new QQMapWX({
				key: 'L32BZ-VJSCU-INJVN-4CIEX-XWUVS-CHF7Q'
			});
			this.getUserLocation();
		},
		// 观察值变化 获取数据
		watch: {
			province: {
				handler(newVal, oldVal) {
					if (oldVal != null) {
						this.getCovidData();
					}
				}
			}
		},
		methods: {
			disableOtherCondition(e) {
				if (e.name == "null") {
					for (let item in this.symptomsList) {
						if (this.symptomsList[item].name != "null") {
							this.symptomsList[item].checked = false;
						}
					}
				} else this.symptomsList[7].checked = false;
			},
			regionConfirm(e) {
				this.province = e.province.label;
				this.city = e.city.label;
				this.district = e.area.label;
				this.formvalue.location = this.province + '>' + this.city + '>' + this.district;
			},
			showdatamsg() {
				uni.hideLoading();
				uni.showModal({
					title: '数据信息',
					content: '1.数据来源:国家卫健委、各省市区卫健委公开数据\n\r2.数据更新时间' + this.lastUpdateTime,
				});
			},
			loadError() {
				uni.hideLoading();
				uni.showModal({
					title: '出错了',
					content: '疫情数据加载失败,请尝试刷新',
				});
			},
			processCityData(city) {
				let index = 0,
					result = city;
				if (city.indexOf("省") != -1) {
					index = city.indexOf('省');
					result = city.substring(0, index);
				}
				if (city.indexOf("市") != -1) {
					index = city.indexOf('市');
					result = city.substring(0, index);
				}
				return result;
			},
			getCovidData() {
				let requesturl = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total';
				let failflag = true;
				uni.request({
					url: requesturl,
					dataType: "json",
					success: (res) => {
						if (!this.flag) {
							let result = res.data.data.chinaTotal;
							// 获取累计数据
							this.totalConfirm = result.total.confirm;
							this.totalHeal = result.total.heal;
							// 获取新增数据
							this.todayConfirm = result.today.confirm;
							this.todayHeal = result.today.heal;
							// 更新时间
							this.lastUpdateTime = res.data.data.lastUpdateTime;
							failflag = false;
							console.log('完成')
							uni.hideLoading();
						} else {
							let result = res.data.data.areaTree;
							for (let country of result) {
								if (country.name == this.country) {
									for (let province of country.children) {
										if (province.name == this.processCityData(this.province)) {
											// 获取累计数据
											this.totalConfirm = province.total.confirm;
											this.totalHeal = province.total.heal;
											// 获取新增数据
											this.todayConfirm = province.today.confirm;
											this.todayHeal = province.today.heal;
											// 更新时间
											this.lastUpdateTime = province.lastUpdateTime;
											failflag = false;
											console.log('完成')
											uni.hideLoading();
											break;
										} else {
											continue;
										}
									}
									break;
								} else {
									continue;
								}
							}
						}
						if (failflag) {
							this.loadError();
						}
					},
					fail: (res) => {
						this.loadError();
						console.log(res);
					}
				})
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
										this.formvalue.location = this.province + '>' +
											this.city + '>' + this.district;
										uni.showLoading({
											title: '加载疫情数据中'
										});
										this.getCovidData();
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
			getDate() {
				let d = new Date();
				let year = d.getFullYear();
				let month = d.getMonth() + 1;
				let day = d.getDate();
				let result = [];
				result.push(year);
				result.push(month);
				result.push(day);
				return result;
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						// 获取表格信息并进行转换
						let timestamp = Date.parse(new Date());
						console.log('--------表格信息------')
						console.log('时间戳', timestamp)
						let table = "table_v1";
						// let uuid = userOpenid;
						let uuid = 'userOpenid';
						let date = this.getDate();
						console.log('date时间', date);
						let stamp = timestamp;
						let location = "";
						if (this.flag) {
							location = this.country + this.province + this.city;
						}
						console.log('位置', location);
						let symptom = this.transformSymptom();
						console.log('症状',symptom);

					} else {
						console.log('验证失败');
					}
				});
			},
			transformSymptom() {
				let symptom = {
					"tt": false,
					"qc": false,
					"yt": false,
					"lt": false,
					"fl": false,
					"cw": false,
					"ks": false
				};
				for (let i of this.formvalue.symptom) {
					if (i in symptom) {
						symptom[i] = true;
					}
					if (i == "null") {
						console.log('无症状')
						symptom = {
							"tt": false,
							"qc": false,
							"yt": false,
							"lt": false,
							"fl": false,
							"cw": false,
							"ks": false
						};
						break;
					}
				}
				return symptom;
			}
			,
			// 下拉刷新数据
			// 需要增加刷新 位置改变后的疫情数据
			onPullDownRefresh() {
				console.log('下拉刷新');
				// 已授权
				this.getUserLocation();
			},
			handleResultChange(e) {
				this.formvalue.nc_test = e[0].value;
			},
			handleSymptomChange(e) {
				console.log(e);
				this.formvalue.symptom = e;
			},
			handAgeChange(e) {
				this.formvalue.age = e[0].value;

			},
			confirmTemperatrue(e) {
				this.formvalue.temp = '';
				e.map((val, index) => {
					this.formvalue.temp += val.label
				})
			},
			handleSexchange(e) {
				this.formvalue.sex = e[0].value;
			},
			handleDayChange(e) {
				this.formvalue.days_symp = e[0].value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont.css';
	.covid-confirm-add,.covid-heal-add {
		text-align: center;
	}
	.tmp-img-r {
		width: 120rpx;
		height: 120rpx;
		margin-left: 10rpx;
		margin-bottom: 12rpx;
	}

	.bottom-right {
		display: flex;
		align-items: flex-end;
	}

	.right-icon {
		margin-left: 10rpx;
	}

	.geo-form-item {
		padding: 10rpx;
	}

	.geo-form-item /deep/ .u-form-item {
		padding-top: 0;
		padding-bottom: 0;
	}

	.geo-form-item {
		padding-top: 0;
		padding-bottom: 0;
	}

	.tip-img-box {
		display: flex;
		align-items: center;
	}

	.geo-wrapper-mini {
		margin-top: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10rpx;
	}

	.covid-confirm,
	.covid-heal {
		border-radius: 16rpx;
		border: 3rpx solid rgba(187, 187, 187, 1);
		padding: 12rpx;
	}

	.covid-gap {
		margin-bottom: 8rpx;
	}

	uni-modal .uni-modal__bd {
		white-space: pre-wrap;
	}

	.miniimg {
		margin-left: 7rpx;
		width: 40rpx;
		height: 40rpx;
	}

	.geo-bottom-bottom {
		margin-bottom: 10rpx;
	}

	.geo-bottom {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.add-confirm {
		color: #a31d13;
	}

	.add-heal {
		color: #34aa70;
	}

	.covid-bold {
		color: #333;
		font-weight: 600;
		text-align: center;
	}

	.boldred {
		text-align: center;
		color: #a31d13;
		font-size: 40rpx;
	}

	.green {
		text-align: center;
		color: #34aa70;
		font-size: 40rpx;
	}

	.resizeimg {
		width: 80rpx;
		height: 80rpx;
		margin-left: 10rpx;
	}


	.form-item {
		margin-left: 22rpx;
		margin-right: 15rpx;
		margin-bottom: 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.block {
		display: block;
	}

	.geo-wrappr {
		margin-top: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 25rpx;
	}

	.wrapper {
		display: flex;
		align-items: center;
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
		background-color: white;
		display: flex;
		gap: 15rpx;
		align-items: center;
		margin-top: 35rpx;
		box-shadow: 0px 2px 8px 0px rgba(136, 136, 136, 40);
		padding: 15rpx;
		border-radius: 15rpx;
	}

	.geo-top {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 15rpx;
	}

	.geo-top-wrapper {
		display: flex;
		justify-content: center;
		gap: 40rpx;
		align-items: center;
		padding-bottom: 10rpx;
		margin-top: 5rpx;
	}

	.tmpimg {
		width: 230rpx;
		height: 250rpx;
	}

	.geoimg {
		width: 60rpx;
		height: 60rpx;
	}

	.detect-container /deep/ .input-area {
		background-color: white;
	}

	.basic-info-top {
		display: flex;
		justify-content: space-between;
	}

	.basic-info-right {
		background-color: white;
		width: 50vw;
		display: flex;
		flex-direction: column;
		// justify-content: space-around;
		justify-content: center;
		box-shadow: 0px 2px 8px 0px rgba(136, 136, 136, 40);
		padding: 15rpx;
		border-radius: 15rpx;
	}

	.basic-info-left {
		display: flex;
		width: 40%;
		flex-direction: column;
		justify-content: space-around;
	}

	.uni-column+.uni-column {
		margin-top: 20rpx;
	}

	.ext-info {
		background-color: white;
		padding: 20rpx;
		padding-left: 50rpx;
		border-radius: 15rpx;
		box-shadow: 0px 2px 8px 0px rgba(136, 136, 136, 40);
		margin-top: 30rpx;
		margin-bottom: 40rpx;
	}

	.uni-btn {
		margin: 0 auto;
		margin-top: 30rpx;
		width: 100%;
		height: 100%;
	}

	.uni-input {
		background-color: white;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		min-height: 60rpx;
		background-color: #ededed;
	}

	.detect-form {
		width: 90%;
		margin: 10rpx auto;
		padding: 10rpx;
		min-height: 80vh;
	}

	.detect-container {
		background-color: #E9F8F5;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
