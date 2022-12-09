<template>
	<view class="detect-container">
		<form @submit="formSubmit" @reset="formReset" class="detect-form">
			<view class="uni-form-item uni-column">
				<view class="title">请选择您的性别</view>
				<radio-group name="radio">
					<label>
						<radio value="male" /><text>男</text>
					</label>
					<label>
						<radio value="female" /><text>女</text>
					</label>
				</radio-group>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">请输入您的年龄</view>
				<input class="uni-input" type="number" name="input" placeholder="输入您的年龄" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">请输入您的体温</view>
				<picker @change="bindPickerChange" :value="index" :range="temperature" range-key="val">
							<view style="padding: 20rpx;background-color: white;">{{ array[index].name }}</view>
						</picker>
			</view>
			<view class="uni-btn-v">
				<button form-type="submit">Submit</button>
				<button type="default" form-type="reset">Reset</button>
			</view>
		</form>
	<!-- 	<view class="form">
			<view class="basic-info">
				<view class="age-choose">
					<text class="label">输入您的年龄</text>
					<input class="uni-input" focus placeholder="输入年龄" />
				</view>

				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index === current" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>


				<view class="label">选择您现在的体温</view>
			</view>


		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ismale: 1,
				temperature: [{ val: '35.7' }, { val: '35.8' }, { val: '35.8' }, { val: '36.0' }],
				index: 2,
			};
		},
		methods:{
			bindPickerChange(){
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-input {
		margin-left: 30rpx;
		background-color: white;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		min-height: 60rpx;
	}

	.age-choose {
		display: flex;
	}
	.detect-form {
		width: 90%;
		margin: 10rpx auto;
		padding: 40rpx;
		min-height:100vh;
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
