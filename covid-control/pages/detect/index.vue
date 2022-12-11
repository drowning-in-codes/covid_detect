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
								<view style="padding: 20rpx;background-color: #ededed;">{{ agerange[index].val }}</view>
							</picker>
						</view>
						<view class="uni-column">
							<view class="title">性别</view>
							
						</view>
					</view>
					
					<view class="basic-info-right">
					</view>
				</view>
			
				<view class="basic-info-bottom">
					<view class="title">请选择您的体温(℃)</view>
					<picker @change="bindPickerChange" :value="index" :range="temperature" range-key="val">
						<view style="padding: 20rpx;background-color: #ededed;">{{ temperature[index].val }}</view>
					</picker>
				</view>
			</view>
			<view class="ext-info">
				<text>选择您24过去小时以内感染的症状</text>
				<view class="uni-list">
					<checkbox-group @change="checkboxChange">
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
	export default {
		data() {
			return {
				symptoms:[{value:"咳嗽",name:"咳嗽"},{value:"呼吸困难",name:"呼吸困难"},{value:"发烧",name:"发烧"},{value:"喉咙疼痛",name:"喉咙疼痛"},{value:"头痛",name:"头痛"},{value:"与阳性患者接触过",name:"与阳性患者接触过"},],
				currSymptoms:[],
				ismale: 1,
				age:1,
				agerange: [],
				ageindex:20,
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
				currTemp: '37.2'
			};
		},
		onLoad()
		{
			this.agerange = new Array();
			for(let i=1;i<100;i++)
			{
				let ageobj = {
					val:i,
				}
				this.agerange.push(ageobj);
			}
			this.agerange.push({val:"100及以上"});
			console.log('加载表格页面')
		}
		,
		methods: {
			submit() {},
			reset() {
				this.index = 16;
				this.currTemp = '37.2';
				this.currSymptoms = [];
			},
			checkboxChange(e)
			{
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
	.sex-label {
		margin-top: 8rpx;
		display: flex;
		gap: 60rpx;
	}
	.uni-column + .uni-column {
		margin-top: 20rpx;
	}
	.detect-title {
		font-size: 36rpx;
		color: #8f8f94;
		border-bottom: black solid;
	}
	.uni-list {
		margin: 0 auto;
		width: 90%;
	}
	.box-label {
		margin-left: 50rpx;
	}
	.uni-list-cell {
		display: flex;
		justify-items: center;
	}
	 .uni-list-cell {
		margin-top: 15rpx;
	}
	.basic-info,.ext-info {
		padding: 30rpx;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	}
	.ext-info {
		margin-top: 50rpx;
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
