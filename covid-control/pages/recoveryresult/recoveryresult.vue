<template>
	<view class="container">
		<view class="recovery-title">七日病程对比情况</view>
		<view class="r-result-container">
			<view class="echart_panel1">
				<l-echart ref="chart1" @finished="chart1init" beforeDelay="150"></l-echart>
			</view>
			<view class="echart_panel2">
				<l-echart ref="chart2" @finished="chart2init" beforeDelay="150"></l-echart>
				<view class="tips"><text class="red">*</text>此图是已接种疫苗、无基础疾病中青年患者常见病程</view>
			</view>
		</view>
		<button class="back-button" @click="toHome">返回首页</button>
	</view>
</template>

<script>
	import * as echarts from '@/uni_modules/lime-echart/static/echarts';
	export default {
		data() {
			return {
				temp_min: null,
				temp_max: null,
				schema1: [],
				my_state1: null,
				myData2: [],
				ave_state1: null,
				contrast: null,
				option1: null,
				option2: null,
				openid: null,
				resultData: null,
				itemStyle1: null,
				loading: true,
			}
		},
		onLoad(params) {
			// onLoad函数中获取结果,并在这里设置值
			console.log('------onLoad--');
			console.log('openid', params.openid);
			this.openid = params.openid;
			// 获取用户数据 resultData
			this.fetchUserData();
		},
		onPullDownRefresh() {
			// 加载
			console.log('下拉加载');
			this.chart1init();
			this.chart2init();
		
		},
		methods: {
			checkUser(value) {
				if (value == null) {
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
					return true;
				}
			},
			loadError() {
				uni.showModal({
					title: '错误',
					content: '展示结果失败,请刷新后重试',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.fetchUserData();
						} else if (res.cancel) {
							uni.navigateBack({
								delta: 1
							})
						}
					}
				});
			},
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

			getData(data_get) { // 对后端数据的处理，都写在这里了，目前使用的是模拟数据
				var date_list = []
				for (var i in data_get.value) {
					date_list.push(data_get.value[i].date)
				}
				// 先对日期升序排序，然后挑出距离第一次填报最多 7 日内的填报信息，返回至多 7 日内的数据
				date_list.sort(function(a, b) { // 日期升序排序
					if (a[0] != b[0]) {
						return a[0] - b[0]
					} else if (a[1] != b[1]) {
						return a[1] - b[1]
					} else {
						return a[2] - b[2]
					}
				});
				// 挑出 7 日体温时间范围
				var date_start = date_list[0]
				var date_end_year = date_start[0]
				var date_end_month = date_start[1]
				var date_end_day = date_start[2] + 6

				function isLeapYear(year) {
					return ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0))
				}
				switch (date_end_month) {
					case 1:
					case 3:
					case 5:
					case 7:
					case 8:
					case 10:
					case 12:
						if (date_end_day > 31) {
							date_end_day %= 31;
							date_end_month += 1;
							if (date_end_month > 12) {
								date_end_month = 1;
								date_end_year += 1;
							}
						}
						break;
					case 4:
					case 6:
					case 9:
					case 11:
						if (date_end_day > 30) {
							date_end_day %= 30;
							date_end_month += 1;
						}
						break;
					case 2:
						if (isLeapYear(date_end_year)) {
							if (date_end_day > 29) {
								date_end_day %= 29;
								date_end_month += 1;
							}
						} else {
							if (date_end_day > 28) {
								date_end_day %= 28;
								date_end_month += 1;
							}
						}
						break;
					default:
						console.log("月份输入错误");
				}
				console.log(date_end_year, date_end_month, date_end_day)
				var tmp = []
				for (var i = 0; i < date_list.length & i < 7; i++) { // 7日时间范围比较
					if (date_list[i][0] > date_end_year) {
						break;
					}
					if (date_list[i][1] > date_end_month) {
						break;
					}
					if (date_list[i][2] > date_end_day) {
						break;
					}
					if (date_list[i][1] > 9 && date_list[i][2] > 9) { // 日期格式转换
						tmp.push(date_list[i][0] + '-' + date_list[i][1] + '-' + date_list[i][2])
					}
					if (date_list[i][1] > 9 && date_list[i][2] <= 9) {
						tmp.push(date_list[i][0] + '-' + date_list[i][1] + '-0' + date_list[i][2])
					}
					if (date_list[i][1] <= 9 && date_list[i][2] > 9) {
						tmp.push(date_list[i][0] + '-0' + date_list[i][1] + '-' + date_list[i][2])
					}
					if (date_list[i][1] <= 9 && date_list[i][2] <= 9) {
						tmp.push(date_list[i][0] + '-0' + date_list[i][1] + '-0' + date_list[i][2])
					}
				}
				date_list = tmp
				console.log(date_list)
				var res = []
				var daysBetweenDates = function(date1, date2) { // 计算与第date_list[0]天相比，date_list[i]是第几天
					return Math.abs((+new Date(date1)) - (+new Date(date2))) / (24 * 60 * 60 * 1000);
				};
				for (var i = 0; i < date_list.length; i++) {
					var val = data_get.value[date_list[i]]
					res.push([
						daysBetweenDates(date_list[i], date_list[0]),
						val.temp,
						val.nc_test, // 核酸结果
						val.symptom.yt, // 咽干咽痛
						val.symptom.fl, // 身体乏力
						val.symptom.ks, // 咽痒咳嗽
						val.symptom.lt, // 流涕鼻塞
						val.symptom.cw, // 肠胃不适
						val.symptom.tt, // 头痛
						val.symptom.qc, // 气喘
					])
				}
				return res;
			},
			lazyLoading()
			{
				setTimeout(()=>{
					this.hideLoading();
					this.chart1init();
					this.chart2init();
				},800)
			}
			,
			fetchUserData() {
				let data = {
					type: "full_records",
					table: "table_v1",
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
						console.log(res);
						this.hideLoading();
						if (this.checkUser(res.data.value)) {
							if (res.data.status == 1) {
								// 获取到数据
								this.resultData = res.data;
								this.processChart1();
								this.processChart2();
								// this.lazyLoading();
							} else {
								this.loadError();
							}
						}

					},
					fail: (err) => {
						this.hideLoading();
						this.loadError();
					}
				})
			},
			toHome() {
				console.log('返回');
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			processChart1() {
				console.log('处理图表1')
				this.temp_min1 = 35;
				this.temp_max1 = 43;
				this.schema1 = [{
						name: 'date',
						index: 0,
						text: '日'
					},
					{
						name: 'temp',
						index: 1,
						text: '体温'
					},
					{
						name: 'test_res',
						index: 2,
						text: '核酸结果'
					},
					{
						name: 'throat',
						index: 3,
						text: '咽干咽痛'
					},
					{
						name: 'weakness',
						index: 4,
						text: '身体乏力'
					},
					{
						name: 'cough',
						index: 5,
						text: '咽痒咳嗽'
					},
					{
						name: 'nose',
						index: 6,
						text: '流涕鼻塞'
					},
					{
						name: 'stomach',
						index: 7,
						text: '肠胃不适'
					},
					{
						name: 'headache',
						index: 8,
						text: '头痛'
					},
					{
						name: 'asthma',
						index: 9,
						text: '气喘'
					}
				];
				this.my_state1 = this.getData(this.resultData);
				this.ave_state1 = [
					[0, 36.8, '阳', 1, 1, 0, 0, 0],
					[1, 37.3, '阳', 1, 1, 0, 0, 0],
					[2, 39, '阳', 1, 1, 1, 0, 1],
					[3, 40, '阳', 1, 1, 1, 1, 1],
					[4, 37.5, '阳', 1, 1, 1, 1, 1],
					[5, 37.3, '阳', 1, 1, 1, 1, 1],
					[6, 36.8, '阴', 0, 0, 0, 0, 0],
				];
				this.itemStyle1 = {
					// item 阴影设置
					// opacity: 0.8,
					shadowBlur: 50,
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					shadowColor: 'rgba(0,0,0,0.2)',
					borderColor: '#fff',
					borderWidth: 100
				};
			},
			processChart2() {
				console.log('处理图表2');
				this.contrast = [ // 红框中的文字
					['轻微', '加重', '加剧', '持续', '持续', '减轻', '明显好转'], // 咽干咽痛
					['轻微', '加重', '加剧', '持续', '持续', '减轻', '明显好转'], // 身体乏力
					['尚无', '尚无', '出现', '出现', '持续', '加重', '明显好转'], // 咽痒咳嗽
					['尚无', '尚无', '尚无', '出现', '持续', '加重', '明显好转'], // 流涕鼻塞
					['尚无', '尚无', '出现', '出现', '减轻', '减轻', '明显好转'], // 肠胃不适
					['阳性', '阳性', '阳性', '阳性', '阳性', '可能转阴', '很大可能转阴'] // 核酸检测
				].map(function(item) {
					return [item[0], item[1], item[2], item[3], item[4], item[5], item[6]];
				});
				for (var i = 0; i < this.my_state1.length; i++) { // 第几天
					for (var j = 3; j < this.my_state1[i].length - 2; j++) { // 症状
						if (this.my_state1[i][j]) {
							this.myData2.push([this.my_state1[i][0], j - 3, this.my_state1[i][j], this.contrast[j - 3][i],
								this
								.contrast[5][i]
							])
						}
					}
				}
				this.myData2.map(function(item) {
					return [item[0], item[1], item[2]];
				});
				console.log('表格2结果' + JSON.parse(JSON.stringify(this.myData2)))
			},
			setchart1Option() {
				this.option1 = { // 图的样式设计
					color: ['#377E47', '#FF6159', ], // 图中点的颜色,不知道怎么调成实心的
					legend: {
						top: 10,
						data: ['我的病程', '平均病程'],
						textStyle: {
							fontSize: 16
						}
					},
					grid: { // 表格布局位置
						left: '10%',
						right: '15%',
						top: '20%',
						bottom: '8%'
					},
					tooltip: { // 弹出框的格式
						backgroundColor: 'rgba(255,255,255,0.7)',
						position: function(pos, params, dom, rect, size) {
							// 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
							var obj = {
								top: 60
							};
							obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
							return obj;
						},
						formatter: (param) => {
							var value = param.value;
							// prettier-ignore
							return this.schema1[1].text + '：' + (value[1]) + ' ℃\n' // 体温
								// + schema[2].text + '：' + value[2] + '性' + '\n' // 核酸结果
								+
								this.schema1[3].text + ':' + (value[3] ? '是' : '否') + '\n' // 咽干咽痛
								+
								this.schema1[4].text + ':' + (value[4] ? '是' : '否') + '\n' // 身体乏力
								+
								this.schema1[5].text + ':' + (value[5] ? '是' : '否') + '\n' // 咽痒咳嗽
								+
								this.schema1[6].text + ':' + (value[6] ? '是' : '否') + '\n' // 流涕鼻塞
								+
								this.schema1[7].text + ':' + (value[7] ? '是' : '否') // 肠胃不适
							// +
							// this.schema1[8].text + ':' + (value[8] ? '是' : '否') + '\n'// 肠胃不适
							// +
							// this.schema1[9].text + ':' + (value[9] ? '是' : '否') // 肠胃不适
						}
					},
					xAxis: {
						type: 'category',
						name: '日期',
						data: [
							'第1天', '第2天', '第3天', '第4天', '第5天', '第6天', '第7天',
						],
						nameTextStyle: {
							fontSize: 16 // 日期两个字的大小
						},
						splitArea: { // 竖着的条纹
							show: true
						},
						axisLabel: {
							fontSize: 12,
							show: true,
							interval: 0, //使x轴横坐标全部显示
						},
					},
					yAxis: {
						type: 'value',
						name: '体温',
						nameLocation: 'end',
						nameTextStyle: {
							fontSize: 16
						},
						splitLine: {
							show: true // 横着的线
						},
						min: this.temp_min1
					},
					visualMap: { // 控制圆圈大小样式
						show: false,
						calculable: false,
						dimension: 1,
						min: this.temp_min1,
						max: this.temp_max1,
						itemWidth: 30,
						itemHeight: 50,
						precision: 0.1,
						text: ['圆形大小：体温'],
						textGap: 30,
						inRange: {
							symbolSize: [10, 50]
						},
						outOfRange: {
							symbolSize: [10, 70],
							color: ['rgba(255,255,255,0.4)']
						},
						// controller: {
						//   inRange: {
						//     color: ['#C3C3C3']
						//   },
						//   outOfRange: {
						//     color: ['#999']
						//   }
						// }
					},

					series: [{
							name: '平均病程',
							type: 'line',
							itemStyle: this.itemStyle1,
							data: this.ave_state1
						},
						{
							name: '我的病程',
							type: 'line',
							itemStyle: this.itemStyle1,
							data: this.my_state1
						},
					]
				};

			},
			setchart2Option() {
				this.option2 = {
					tooltip: {
						backgroundColor: 'rgba(255,255,255,0.7)',
						formatter: function(param) {
							var value = param.value;
							return '其他患者在今天：\n'
								// + value[0] + ' ' + value[1] + ' ' + value[2] + ' ' 
								+
								'该症状' + value[3] + '\n' +
								'核酸检测结果' + value[4]
						}
					},
					grid: {
						left: '10%',
						right: '15%',
						top: '5%',
						bottom: '10%'
					},
					xAxis: {
						type: 'category',
						name: '日期',
						data: [
							'第1天', '第2天', '第3天', '第4天', '第5天', '第6天', '第7天',
						],
						splitArea: {
							show: true // 竖着的条纹
						},
						nameTextStyle: {
							fontSize: 16 // 日期两个字的大小
						},
						textStyle: { // 没用，不会调
							fontSize: 1600000
						},
						axisLabel: {
							fontSize: 12,
							show: true,
							interval: 0, //使x轴横坐标全部显示
						},
						// position: 'top'
					},
					yAxis: {
						type: 'category',
						name: '出现症状',
						data: [
							'咽干\n咽痛', '身体\n乏力', '咽痒\n咳嗽', '流涕\n鼻塞', '肠胃\n不适',
						],
						nameTextStyle: {
							fontSize: 16 // 出现症状4个字的大小
						},
						splitArea: {
							// show: true // 横着的条纹
						},
						axisLabel: {
							fontSize: 12,
						},
						offset: 1,
					},
					visualMap: {
						show: false,
						calculable: false,
						orient: 'horizontal',
						inRange: {
							// color: ['#EB3324']
							// color: ['#77FF90', '#377E47', '#F09B59', '#EB3324']
						}
					},
					series: [{
						name: 'Punch Card',
						type: 'heatmap',
						// data: [dat, contrast],
						data: JSON.parse(JSON.stringify(this.myData2)),
						label: {
							show: false // 控制是否显示数字
						},
						itemStyle: {
							shadowBlur: 10, // 这块控制阴影
							shadowColor: 'rgba(25, 100, 150, 0.5)',
							shadowOffsetY: 5,
							color: new echarts.graphic.RadialGradient(0.5, 0.2, 0.9, [ // 这块控制颜色
								{
									offset: 0,
									color: 'rgb(245, 96, 81)'
								},
								{
									offset: 0,
									color: 'rgb(215, 66, 51)'
								}
							]),
						}

					}]
				};
			},
			chart1init() {
				this.$refs.chart1.init(echarts, chart => {
					console.log('1finished')
					this.setchart1Option();
					chart.setOption(this.option1);
				});
			},
			chart2init() {
				this.$refs.chart2.init(echarts, chart => {
					console.log('2finished');
					this.setchart2Option();
					chart.setOption(this.option2);
				});
			}
		}
	}
</script>

<style scoped>
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

	.tips {
		margin-top: 25rpx;
	}

	.red {
		color: red;
		margin-right: 5rpx;
	}

	.back-button {
		width: 80vw;
		margin: 30rpx auto;
	}

	.r-result-container {
		background-color: white;
		display: flex;
		width: 95vw;
		margin: 0 auto;
		padding: 10rpx;
		box-shadow: 0px 2px 8px 0px rgba(136, 136, 136, 40);
		border-radius: 16rpx;
		flex-direction: column;
		justify-content: center;
		gap: 50rpx;
	}

	.echart_panel1 {
		widht: 100%;
		height: 600rpx
	}
</style>
