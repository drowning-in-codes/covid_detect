<template>
	<view class="result-container">
		<view class="echart_panel1">
			<l-echart ref="chart1" @finished="chart1init"></l-echart>
		</view>
		<view class="echart_panel2">
			<l-echart ref="chart2" @finished="chart2init"></l-echart>
		</view>
		<view class="echart_panel3">
			<l-echart ref="chart3" @finished="chart3init"></l-echart>
			<view><text class="red">*</text>柱状图中绿色代表用户当前尚无的症状，橙色是用户已有症状</view>
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
				option3:null,
				loading:true,
				// getrisk 请求服务器得到感染风险
				getrisk:0.2,
				// getzz 请求服务器得到用于填写的症状数据
				getzz:[100, 30, 30, 100, 30, 30, 100, 100],
				zz:[100, 25, 100, 25, 25, 100, 100, 25],
				risk:0.1,
				zzrisk:[8.7, 13.6, 13.9, 18.6, 38.1, 50, 67.7, 87.9],
				exist:[],
				notexist:[],
				datashow:[],
				openid:null,
			}
		},
		onLoad(params) {
			// onLoad函数中获取结果,并在这里设置值
			console.log('onLoad');
			console.log('openid',params.openid);
			this.openid = params.openid;
			this.fetchUserData();
		},
		methods: {
			showOrhideLoading()
			{
				if(this.loading)
				{
					uni.showLoading({
						title: '加载中'
					});
					this.loading = !this.loading;
				}
				else
				{
					uni.hideLoading();
					this.loading = !this.loading;
				}
			},
			fetchUserData()
			{
				let data = {
					type: "predic_result",
					uuid: this.openid
				}
				this.showOrhideLoading();
				// 获取用户数据
				uni.request({
					url: "https://api.easybioai.com:4001/query",
					method: "POST",
					header: {
						'Content-Type': 'application/json'
					},
					data,
					success: (res) => {
						this.showOrhideLoading();
						console.log(res);
						if(res.data.status == 1)
						{
							this.resultData = res;
							this.processChart2();
							this.processChart3();
						}
						else
						{
							this.loadError();

						}
					},
					fail: (err) => {
						this.loadError();
					}
				})
			},
			loadError()
			{
				uni.showModal({
					title: '错误',
					content: '展示结果失败,请刷新后重试',
					success: (res)=> {
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
			toHome()
			{
				console.log('返回');
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			processChart1(value) {
				// 设置水球的属性
				 if(value < 0.25){
				    return '#00FF00';
				  }
				  else if (value < 0.5){
				    return '#4DBE61';
				  }
				  else if (value < 0.75){
				    return '#FDB72F';
				  }
				  else{
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
				      text: '健康风险',
				    },
				    grid:{
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
				      data: [
				        {
				          value: value,
				          direction: "left",
				          itemStyle: {
				            normal: {
				            //这里就是根据不同的值显示不同球体的颜色
				              color: this.processChart1(value),
				            },
				          },
				        },
				      ],
				      label: {
				        formatter: value,    //  值
				        fontSize: 20,
				        fontFamily: 'Lobster Two',
				      },
				      backgorundStyle:{
				        color:this.processChart1(value)
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
				    radar: [
				      {
				        indicator: [
				          { text: '发烧', max: 100},
				          { text: '气喘', max: 100},
				          { text: '身体乏力', max: 100 },
				          { text: '咽干咽痛', max: 100 },
				          { text: '咽痒咳嗽', max: 100 },
				          { text: '肠胃不适', max: 100},
				          { text: '流涕鼻塞', max: 100},
				          { text: '头痛', max: 100},
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
				      }
				    ],
				    series: [
				      {
				        type: 'radar',
				        emphasis: {
				          lineStyle: {
				            width: 4
				          }
				        },
				        data: [
				          {
				            value: this.zz,
				            areaStyle: {
				              color: 'rgba(255, 228, 52, 0.6)'
				            }
				          }
				        ]
				      }
				    ]
				  };
			},
			setchaty3Option()
			{
				this.option3 = {
				    title: {
				      text: '感染者症状频率'
				    },
				    grid:{
				      left: '20%',
				      right: '15%'
				    },
				    xAxis: {
				      name:'频率',
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
				    series: [
				      {
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
			setchart3Option()
			{
				 this.option3 = {
				    title: {
				      text: '感染者症状频率'
				    },
				    grid:{
				      left: '20%',
				      right: '15%'
				    },
				    xAxis: {
				      name:'频率',
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
				    series: [
				      {
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
			chart3init(){
				this.$refs.chart3.init(echarts, chart => {
					this.processChart3();
					this.setchart3Option();
					chart.setOption(this.option3);
				});
			}
		}
	}
</script>

<style scoped>

	.red {
		color:red;
		margin-left: 5rpx;
		margin-right: 10rpx;
	}
	.result-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 20rpx auto;
		width: 95vw;
	}
	.back-button {
		width:80vw;
		margin: 30rpx auto;
	}

</style>
