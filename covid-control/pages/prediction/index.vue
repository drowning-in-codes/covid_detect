<template>
	<view class="prediction-container">
		<u-form :model="form" ref="uForm">
			<view class="info">
				<view class="basicInfo">
					<u-form-item :border-bottom="false">
						<view>年龄</view>
						<u-input v-model="form.age" placeholder="请选择" :type="selectType" :border="border"
							@click="ageShow = true" />
						<u-select v-model="ageShow" mode="single-column" :list="sexList" @confirm="confirmSex">
						</u-select>
					</u-form-item>
					<u-form-item :border-bottom="false">
						<view>性别</view>
						<u-input placeholder="男" v-model="form.sex" :type="selectType" :border="border"
							@click="sexShow = true" />
						<u-select v-model="sexShow" mode="single-column" :list="sexList" @confirm="confirmSex">
						</u-select>
					</u-form-item>
				</view>

				<u-card class="positionInfo" :border="true" :head-border-bottom="false"
					box-shadow="0px 2px 8px 0px rgba(136, 136, 136, 40)" padding="25">
					<view class="positionIcon" slot="body">
						<view class="img-box">
							<image class="geoimg"
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQyIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik0yNC40ODUgMjMuMTUyTDE2IDMxLjYzN2wtOC40ODUtOC40ODVBMTEuOTYyIDExLjk2MiAwIDAgMSA0IDE0LjY2N2MwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyYzAgMy4zMTQtMS4zNDMgNi4zMTQtMy41MTUgOC40ODV6TTE2IDE3LjMzM2EyLjY2NyAyLjY2NyAwIDEgMCAwLTUuMzM0IDIuNjY3IDIuNjY3IDAgMSAwIDAgNS4zMzR6IiBmaWxsPSJyZ2JhKDU1LjA4LDEyNi45OSwxMjYuOTksMSkiLz48L3N2Zz4=">
							</image>
						</view>
						<view class="geotext">地理位置</view>
					</view>
					<u-line />
					<view class="positionText" slot="foot">
						<u-form-item :border-bottom="false" prop="region" label-width="150">
							<u-input class="regionText" type="select" :select-open="positionShow"
								v-model="form.position" placeholder="请选择地区" @click="positionShow = true"></u-input>
							<u-picker mode="region" v-model="positionShow" @confirm="regionConfirm"></u-picker>
						</u-form-item>
					</view>


				</u-card>

			</view>


			<u-card :border="false" :foot-border-top="false" :head-border-bottom="false"
				box-shadow="0px 2px 8px 0px rgba(136, 136, 136, 40)" padding="35" margin="10rpx 22px"
				:show-head="false">
				<view class="temperatrueInfo" slot="body">
					<image src="../../static/temperature2.png" class="tmpimg"></image>
					<view style="margin-left: 10px;">
						<u-form-item label-width="190" label="今日体温:" :border-bottom="false" 
							label-position="top">
							<u-input :border="true" v-model="form.temperatrue" :custom-style="temperatrueStyle"
								:type="selectType" @click="temperatrueShow = true"></u-input>
							<u-select v-model="temperatrueShow" mode="mutil-column" :list="temperatrueList"
								@confirm="confirmTemperatrue">
							</u-select>
						</u-form-item>
					</view>
					<image style="width: 100rpx;height: 100rpx; margin-bottom: 20rpx; margin-top: auto;"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiBzdHlsZT0iYm9yZGVyLWNvbG9yOiNiYmI7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkIiBmaWx0ZXI9Im5vbmUiPjxwYXRoIGQ9Ik02IDEzLjMzM2E0LjY2NyA0LjY2NyAwIDAgMSAwLTkuMzM0IDQuNjY3IDQuNjY3IDAgMCAxIDAgOS4zMzR6bTAtMi42NjZhMiAyIDAgMSAwIDAtNCAyIDIgMCAxIDAgMCA0em0yMy4zMzMgMi42NjZoLTIuNjY3YTUuMzMzIDUuMzMzIDAgMSAwLTEwLjY2NiAwVjIwYTUuMzMzIDUuMzMzIDAgMSAwIDEwLjY2NiAwaDIuNjY3YTggOCAwIDAgMS0xNiAwdi02LjY2N2E4IDggMCAwIDEgMTYgMHoiIGZpbGw9InJnYmEoNTUuMDgsMTI2Ljk5LDEyNi45OSwxKSIvPjwvc3ZnPg==">
					</image>

				</view>

			</u-card>

			<view class="conditionText">
				<view class="conditionStyle">是否有如下情况</view>
				<u-icon name="question-circle" color="#377F7F" size="45" @click="tipShow = true"></u-icon>
				<u-modal v-model="tipShow" content="填写情况填写您的症状.若无,则选择无以上症状"></u-modal>
			</view>

			<u-form-item :border-bottom="false" v-model="form.symptom">
				<u-card :border="false" :foot-border-top="false" :head-border-bottom="false"
					box-shadow="0px 2px 8px 0px rgba(136, 136, 136, 40)" padding="35" margin="0rpx 22px"
					:show-head="false">

					<view slot="body">
						<u-checkbox-group @change="checkboxGroupChange" shape="circle" width="50%">
							<u-checkbox @change="checkboxChange" v-model="item.checked"
								v-for="(item, index) in symptomList" :key="index" :name="item.name" label-size="16px"
								icon-size="12px">{{item.name}}</u-checkbox>
						</u-checkbox-group>
					</view>


				</u-card>
			</u-form-item>



			<view class="resultInfo">
				<u-form-item label-width="190" label="最近一次核酸检测结果" :border-bottom="false" :label-style="labelStyle">
					<u-input placeholder="请选择(阳性、阴性、未知)" :border="true" v-model="form.result" :type="selectType"
						@click="resultShow = true"></u-input>
					<u-select v-model="resultShow" mode="single-column" :list="resultList" @confirm="confirmResult">
					</u-select>
				</u-form-item>
			</view>

			<view class="daysInfo">
				<u-form-item label-width="190" label="症状出现天数" :border-bottom="false" :label-style="labelStyle">
					<u-input placeholder="请选择(第几天)" :border="true" v-model="form.countDays" :type="selectType"
						@click="dayShow = true"></u-input>
					<u-select v-model="dayShow" mode="single-column" :list="dayList" @confirm="confirmDay"></u-select>
				</u-form-item>
			</view>
			
			<view class="btn-contrainer">
				<u-button :ripple="true" :custom-style="customStyle" ripple-bg-color="#E9F8F5" @click="submit">病程监测
				</u-button>
			</view>

			


		</u-form>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectType: 'select',
				ageShow: false,
				sexShow: false,
				positionShow: false,
				resultShow: false,
				dayShow: false,
				tipShow: false,
				temperatrueShow: false,
				border: true,
				sexList: [{
						value: '男',
						label: '男'
					},
					{
						value: '女',
						label: '女'
					}
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
				dayList: [{
						value: '1',
						label: '1',
					},
					{
						value: '2',
						label: '2',
					},
					{
						value: '3',
						label: '3',
					},
					{
						value: '4',
						label: '4',
					},
					{
						value: '5',
						label: '5',
					},
					{
						value: '6',
						label: '6',
					},
					{
						value: '7',
						label: '7',
					},
					{
						value: '8',
						label: '8',
					},
					{
						value: '9',
						label: '9',
					},
					{
						value: '10天及以上',
						label: '10+',
					},
				],
				symptomList: [{
						name: '头疼',
						checked: false,
						disabled: false
					},
					{
						name: '气喘',
						checked: false,
						disabled: false
					},
					{
						name: '咽干咽痛',
						checked: false,
						disabled: false
					},
					{
						name: '流涕鼻塞',
						checked: false,
						disabled: false
					},
					{
						name: '身体乏力',
						checked: false,
						disabled: false
					},
					{
						name: '肠胃不适',
						checked: false,
						disabled: false
					},
					{
						name: '咽痒咳痛',
						checked: false,
						disabled: false
					},
					{
						name: '无以上症状',
						checked: false,
						disabled: false
					}
				],
				form: {
					age: '',
					sex: '男',
					position: '湖北省>武汉市>洪山区',
					temperatrue: '36.5',
					result: '',
					countDays: '',
					symptom: [],
				},
				labelStyle: {
					width: '190rpx',
					'line-height': '32rpx'
				},
				conditionStyle: {
					height: '0px',
					'background-color': '#FF377F7F',

				},
				customStyle: {
					height: '40px',
					'margin-top': '5px',
					'margin-left': '60px',
					'margin-right': '60px',
					'margin-bottom': '42px'
				},
				temperatrueStyle: {
					fontSize: '36px',
					width: '80px'
				}
			}
		},
		onLoad() {

		},
		methods: {
			getLocation() {

			},
			confirmSex(e) {
				this.form.sex = '',
					e.map((val, index) => {
						this.form.sex = val.label;
					})
			},
			confirmResult(e) {
				this.form.result = '',
					e.map((val, index) => {
						this.form.result = val.label;
					})
			},
			confirmDay(e) {
				this.form.countDays = '',
					e.map((val, index) => {
						this.form.countDays = val.label;
					})
			},
			regionConfirm(e) {
				this.form.position = e.province.label + '>' + e.city.label + '>' + e.area.label;
			},
			confirmTemperatrue(e) {
				this.form.temperatrue = '',
					e.map((val, index) => {
						this.form.temperatrue += val.label
					})
			},
			checkboxChange(e) {

				if (e.name == "无以上症状") {
					for (let item in this.symptomList) {
						if (this.symptomList[item].name != "无以上症状") {
							this.symptomList[item].checked = false;
						}
					}
				} else this.symptomList[7].checked = false;

			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {},
			submit() {
				console.log(this.form);
			}
		}
	}
</script>

<style>
	.info {
		display: flex;
		flex-direction: row;
	}

	.basicInfo {
		width: 40%;
		height: 100%;
		margin-left: 22px;
		margin-right: 10px;
	}

	.positionInfo {
		width: 60%;
		height: 100%;
		margin-right: 0px;
		display: flex;
		flex-direction: column;
	}

	.positionIcon {
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: row;
	}

	.geoimg {
		width: 42px;
		height: 42px;
		text-align: center;
		vertical-align: middle;
		margin: auto;
		margin-left: 25px;
	}

	.geotext {
		text-align: center;
		margin: auto;
		margin-right: 25px;
	}

	.positionText {
		height: 30%;
	}

	.regionText {
		margin-top: auto;
		margin-bottom: 0px;
	}

	.temperatrueInfo {
		display: flex;
		flex-direction: row;
	}

	.resultInfo {
		margin-left: 22px;
		margin-right: 20px;
	}

	.daysInfo {
		margin-left: 22px;
		margin-right: 20px;
	}

	.conditionStyle {
		margin-left: 22px;
		margin-right: 2px;
		font-size: 20px;
		margin-bottom: 0px;
	}

	.conditionText {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
	}

	.tmpimg {
		width: 35%;
		height: 120px;
	}

	.prediction-container {
		background-color: #E9F8F5;
	}
	
	.btn-contrainer {
		width: 100%;
		height: 80px;
	}
</style>
