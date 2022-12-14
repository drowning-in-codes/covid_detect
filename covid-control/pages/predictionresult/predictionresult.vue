<template>
	<view>
		<view class="echart_panel1">
			<l-echart ref="chart1" @finished="chart1init"></l-echart>
		</view>
		<view class="echart_panel2">
			<l-echart ref="chart2" @finished="chart2init"></l-echart>
		</view>

	</view>
</template>

<script>
	import * as echarts from '@/uni_modules/lime-echart/static/echarts'
	export default {
		data() {
			return {
				option1: {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						},
						confine: true
					},
					legend: {
						data: ['热度', '正面', '负面']
					},
					grid: {
						left: 20,
						right: 20,
						bottom: 15,
						top: 40,
						containLabel: true
					},
					xAxis: [{
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#999999'
							}
						},
						axisLabel: {
							color: '#666666'
						}
					}],
					yAxis: [{
						type: 'category',
						axisTick: {
							show: false
						},
						data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
						axisLine: {
							lineStyle: {
								color: '#999999'
							}
						},
						axisLabel: {
							color: '#666666'
						}
					}],
					series: [{
							name: '热度',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							data: [300, 270, 340, 344, 300, 320, 310],
						},
						{
							name: '正面',
							type: 'bar',
							stack: '总量',
							label: {
								normal: {
									show: true
								}
							},
							data: [120, 102, 141, 174, 190, 250, 220]
						},
						{
							name: '负面',
							type: 'bar',
							stack: '总量',
							label: {
								normal: {
									show: true,
									position: 'left'
								}
							},
							data: [-20, -32, -21, -34, -90, -130, -110]
						}
					]
				},
			}
		},
	methods: {
		chart1init() {
			this.$refs.chart1.init(echarts, chart => {
				chart.setOption(this.option1);
			});
		},
		chart2init() {
		this.$refs.chart2.init(echarts, chart => {
			chart.setOption(this.option1);
		});
		}
	}
	}
</script>

<style>
	.echart_panel1 {
		widht: 100%;
		height: 600rpx
	}
</style>
