<template>
	<view class="container">
		<view class="recovery-title">健康风险提醒</view>
		<view class="p-result-container">
			<view class="echart_panel1">
				<l-echart ref="chart1" @finished="chart1init"  beforeDelay="80"></l-echart>
				<view class="tips"><text class="red">*</text>注意:值越大表示风险越高.
				</view>
				<view class="tips-2">此结果为仅考虑用户输入症状下的整体健康风险预估值，仅供个人参考，不能用作任何医学指导或医学用途.
				</view>
			</view>
			<view class="echart_panel2">
				<l-echart ref="chart2" @finished="chart2init" beforeDelay="80"></l-echart>
			</view>
			<view class="echart_panel3">
				<l-echart ref="chart3" @finished="chart3init" beforeDelay="80"></l-echart>
				<view><text class="red">*</text>柱状图中绿色代表用户当前尚无的症状,橙色是用户已有症状.百分数代表该症状出现的统计频率</view>
			</view>
		</view>
		<button class="back-button" @click="toHome">返回首页</button>
	</view>
</template>

<script>
	import * as echarts from '@/uni_modules/lime-echart/static/echarts';
	import * as liquidFill from '@/uni_modules/lime-echart/static/echarts-liquidfill.min.js';
	export default {
		data() {
			return {
				option1: null,
				option2: null,
				option3: null,
				loading: true,
				// getrisk 请求服务器得到感染风险
				getrisk: 0.2,
				// getzz 请求服务器得到用于填写的症状数据
				getzz: [100, 30, 30, 100, 30, 30, 100, 100],
				zz: [],
				risk: null,
				zzrisk: [8.7, 13.6, 13.9, 18.6, 38.1, 50, 67.7, 87.9],
				exist: [],
				notexist: [],
				datashow: [],
				openid: null,
				orderbar: ['ks', 'fl', 'lt', 'qc', 'yt', 'tt', 'cw'],
				orderradar: ["qc", "fl", "yt", "ks", "cw", "lt", "tt"],

			}
		},
		onLoad(params) {
			// onLoad函数中获取结果,并在这里设置值
			console.log('onLoad');
			console.log('openid', params.openid);
			this.openid = params.openid;
			this.fetchUserData();
		},
		onPullDownRefresh() {
			// 加载
			console.log('下拉加载');
			this.chart1init();
			this.chart2init();
			this.chart3init();
		
		},
		methods: {

			hideLoading() {
				if (!this.loading) {
					uni.hideLoading();
					this.loading = !this.loading;
				}
			},
			showLoading() {
				if (this.loading) {
					uni.showLoading({
						title: '加载中'
					});
					this.loading = !this.loading;
				}
			},
			fetchUserData() {
				let data = {
					type: "predict_result",
					uuid: this.openid
				}
				this.showLoading();
				// 获取用户数据
				uni.request({
					url: "https://api.easybioai.com:4001/query",
					method: "POST",
					header: {
						'Content-Type': 'application/json'
					},
					data,
					success: (res) => {
						this.hideLoading();
						console.log(res);
						if (res.data.status == 1) {
							this.resultData = res;
							this.init_data(this.resultData.data);
							this.processChart2();
							this.processChart3();
						} else if (res.data.status == 0) {
							uni.showModal({
								title: '提示',
								content: '请通过提交最近的症状记录查看情况',
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');
										uni.switchTab({
											url: "/pages/index/index"
										})
									} else if (res.cancel) {
										console.log('用户点击取消');
										return false;
									}
								}
							});
						} else {
							this.loadError();
						}
					},
					fail: (err) => {
						this.hideLoading();
						this.loadError();
					}
				})
			},
			init_data(get_data) {
				var symptom = get_data['value']['record']['symptom'];
				var temp = get_data['value']['record']['temp'];
				this.risk = get_data['value']['result'];
				if (temp >= 37.3)
					this.zz.push(100);
				else
					this.zz.push(25);
				for (var i = 0; i < 7; i++) {
					if (symptom[this.orderradar[i]]) {
						this.zz.push(100);
					} else {
						this.zz.push(25)
					}
					if (symptom[this.orderbar[6 - i]] == true) {
						this.datashow.push({
							value: this.zzrisk[i + 1],
							itemStyle: {
								color: '#FDB72F'
							}
						});
					} else {
						this.datashow.push({
							value: this.zzrisk[i],
							itemStyle: {
								color: '#4DBE61'
							}
						});
					}
				}
				if (temp >= 37.3) {
					this.datashow.push({
						value: this.zzrisk[7],
						itemStyle: {
							color: '#FDB72F'
						}
					})
				} else {
					this.datashow.push({
						value: this.zzrisk[7],
						itemStyle: {
							color: '#4DBE61'
						}
					});
				}
			},
			loadError() {
				uni.showModal({
					title: '错误',
					content: '展示结果失败,请刷新后重试',
					success: (res) => {
						if (res.confirm) {
							console.log(this)
							this.fetchUserData();
						} else if (res.cancel) {
							uni.navigateBack({
								delta: 1
							})
						}
					}
				});
			},
			toHome() {
				console.log('返回');
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			processChart1(value) {
				// 设置水球的属性
				if (value < 0.25) {
					return '#00FF00';
				} else if (value < 0.5) {
					return '#4DBE61';
				} else if (value < 0.75) {
					return '#FDB72F';
				} else {
					return '#FF0000';
				}
			},
			processChart2() {
				// 雷达图处理
				return;
			},
			processChart3() {
				// 柱状图参数初始化
				for (let i = 0; i < 8; i++) {
					if (this.zz[i] == 100) {
						this.datashow.push({
							value: this.zzrisk[i],
							itemStyle: {
								color: '#FDB72F'
							}
						})
						this.exist.push(this.datashow[i]);
					} else {
						this.datashow.push({
							value: this.zzrisk[i],
							itemStyle: {
								color: '#4DBE61'
							}
						});
						this.notexist.push(this.datashow[i]);
					}
				}
			},
			setchart1Option(value) {
				this.option1 = {
					title: {
						text: '风险指数',
					},
					grid: {
						left: 0,
						top: 0,
						bottom: 0
					},
					series: [{
						type: 'liquidFill',
						waveAnimation: true,
						animation: true,
						// color: '#ff8',
						radius: '80%',
						center: ['50%', '50%'],
						data: [{
							value: value,
							direction: "left",
							itemStyle: {
								normal: {
									//这里就是根据不同的值显示不同球体的颜色
									color: this.processChart1(value),
								},
							},
						}, ],
						label: {
							formatter: value, //  值
							fontSize: 20,
							fontFamily: 'Lobster Two',
						},
						backgorundStyle: {
							color: this.processChart1(value)
						},
						outline: {
							borderDistance: 0,
							itemStyle: {
								borderWidth: 5,
								borderColor: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: 'rgba(69, 73, 240, 0)'
									}, {
										offset: 0.5,
										color: 'rgba(69, 73, 240, .25)'
									}, {
										offset: 1,
										color: 'rgba(69, 73, 240, 1)'
									}],
									globalCoord: false
								},
								shadowBlur: 10,
								shadowColor: '#ffffff',
							}
						},
					}]
				};
			},
			setchart2Option() {
				this.option2 = {
					color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
					title: {
						text: '我的症状'
					},
					legend: {},
					radar: [{
						indicator: [{
								text: '发烧',
								max: 100
							},
							{
								text: '气喘',
								max: 100
							},
							{
								text: '身体乏力',
								max: 100
							},
							{
								text: '咽干咽痛',
								max: 100
							},
							{
								text: '咽痒咳嗽',
								max: 100
							},
							{
								text: '肠胃不适',
								max: 100
							},
							{
								text: '流涕鼻塞',
								max: 100
							},
							{
								text: '头痛',
								max: 100
							},
						],
						center: ['50%', '50%'],
						radius: 70,
						startAngle: 90,
						splitNumber: 4,
						shape: 'circle',
						axisName: {
							formatter: '[{value}]',
							color: '#428BD4'
						},
						splitArea: {
							areaStyle: {
								// ['#FFFFFF', '#26C3BE', '#64AFE9', '#428BD4'],
								color: ['#FFFFFF', '#4DBE61', '#FDB72F', '#FF0000'],
								shadowColor: 'rgba(0, 0, 0, 0.2)',
								shadowBlur: 10
							}
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(211, 253, 250, 0.8)'
							}
						},
						splitLine: {
							lineStyle: {
								color: 'rgba(211, 253, 250, 0.8)'
							}
						}
					}],
					series: [{
						type: 'radar',
						emphasis: {
							lineStyle: {
								width: 4
							}
						},
						data: [{
							value: this.zz,
							areaStyle: {
								color: 'rgba(255, 228, 52, 0.6)'
							}
						}]
					}]
				};
			},
			setchart3Option() {
				this.option3 = {
					title: {
						text: '感染者症状频率'
					},
					grid: {
						left: '20%',
						right: '15%'
					},
					xAxis: {
						name: '频率',
						type: 'value'
					},
					yAxis: {
						name: '症状',
						type: 'category',
						data: [
							'肠胃不适',
							'头痛',
							'咽干咽痛',
							'气喘',
							'身体乏力',
							'流涕鼻塞',
							'咽痒咳嗽',
							'发烧'
						]
					},
					series: [{
							data: this.datashow,
							type: 'bar',
							label: {
								show: true,
								precision: 1,
								position: 'right',
								formatter: '{c}%'
							}
						},

					]
				};
			},
			chart1init() {
				this.$refs.chart1.init(echarts, chart => {
					console.log('finished')
					this.setchart1Option(this.risk);
					chart.setOption(this.option1);
				});
			},
			chart2init() {
				this.$refs.chart2.init(echarts, chart => {
					this.setchart2Option();
					chart.setOption(this.option2);
				});
			},
			chart3init() {
				this.$refs.chart3.init(echarts, chart => {
					this.setchart3Option();
					chart.setOption(this.option3);
				});
			}
		}
	}
</script>

<style scoped>
	.tips-2 {
		margin: 10rpx;
	}
	.recovery-title {
		color: #101010;
		text-align: center;
		margin-bottom: 40rpx;
		background-color: #E3FFFA;
		font-size: 40rpx;
		font-weight: 700;
	}

	.container {
		padding-bottom: 5rpx;
		padding-top: 20rpx;
		background-color: #E3FFFA;
	}

	.red {
		color: red;
		margin-left: 5rpx;
		margin-right: 10rpx;
	}

	.p-result-container {
		background-color: white;
		display: flex;
		width: 95vw;
		margin: 0 auto;
		padding: 10rpx;
		padding-top: 30rpx;
		padding-bottom: 20rpx;
		box-shadow: 0px 2px 8px 0px rgba(136, 136, 136, 40);
		border-radius: 16rpx;
		flex-direction: column;
		justify-content: center;
		gap: 50rpx;
	}

	.back-button {
		width: 80vw;
		margin: 30rpx auto;
	}
</style>
