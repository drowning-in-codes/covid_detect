<template>
	<view class="feedback-container">
		<!-- <text class="feedback-title">反馈界面</text> -->
		<view class="info-box">
			<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
				<image class="avatar" :src="avatarUrl"></image>
			</button>

			<view class="name-wrapper">
				<view class="weui-input">
					<input type="nickname" placeholder="微信用户" />
				</view>
				<image class="resizeimg"
					src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTkzMi45ODEgNjQ0LjUzOGMtMTYuMzc5IDAtMzUuMjkgMTMuNDAxLTM1LjI5IDI5Ljc4djEyMC4xNjVjMCA1Ny4wMy00Ni4wMTEgMTAzLjE4OS0xMDIuNTk0IDEwMy4xODlIMjI1Ljk5MWMtNTYuNzMyIDAtMTAyLjU5NC00Ni4xNTktMTAyLjU5NC0xMDMuMTg5VjIyNi41NjljMC01Ny4wMyA0NS44NjItMTAzLjE4OSAxMDIuNTk0LTEwMy4xODloMjUyLjA5MWMxNi4zNzkgMCAyOS42MzIgMS40ODkgMjkuNjMyLTE0Ljg5cy0xMy4yNTItNDQuNjctMjkuNjMyLTQ0LjY3aC0yOTUuODdjLTY1LjM2OCAwLTExOC4zNzcgNTMuMzA3LTExOC4zNzcgMTE5LjEyMnY2NTUuMTcxYzAgNjUuODE1IDUzLjAwOSAxMTkuMTIyIDExOC4zNzcgMTE5LjEyMmg2NTYuNjZjNjUuMzY4IDAgMTE4LjM3Ny01My4zMDcgMTE4LjM3Ny0xMTkuMTIyVjY3NC4zMmMuMDAxLTE2LjM3OS03Ljg5MS0yOS43OC0yNC4yNy0yOS43OHptLTY4NS4yNSA5OC40MjVjLTQuNzY1IDMyLjQ2IDE3LjQyMiA1NC4yIDQ5LjU4NCA0OC4yNDVsMTg4LjgwOC0zNC4wOTlMMjc2LjkxNSA1NDYuNTYgMjQ3LjczIDc0Mi45NjN6bTM5MS45MTItNDYyLjkzOWE1OC44NzEgNTguODcxIDAgMCAxIDgzLjgzMiAwbDQxLjg0MiA0MS45OWMyMy4wOCAyMy4zNzcgMjMuMDggNjEuMDUgMCA4NC4yNzhMNTc2Ljk1NCA1OTUuODQ2Yy0yMy4wOCAyMy4yMjktNjAuNjAzIDIzLjIyOS04My42ODMgMGwtNDEuODQyLTQyLjE0Yy0yMy4wOC0yMy4yMjktMjMuMDgtNjAuOTAxIDAtODQuMjc4bDE4OC4yMTQtMTg5LjQwNXptLTEwNC41MyA0NDIuMjRsMzU1LjcyOC0zNTguMTEtMjA5LjIwOC0yMTAuNTQ4LTM1NS43MjggMzU3Ljk2MiAyMDkuMjA4IDIxMC42OTd6bTQwMC42OTYtNDE3LjY3YzM0LjY5NC0zNC44NDQgMjQuNDItODEuMTUyLTEwLjI3NC0xMTUuOTk1bC04My42ODMtODQuMjc5Yy0zNC42OTQtMzQuODQ0LTkwLjgzMS0zNC44NDQtMTI1LjUyNSAwbDIwOS4yMDggMjEwLjU0OCAxMC4yNzQtMTAuMjc0eiIvPjwvc3ZnPg==" />
			</view>
		</view>
		<view class="covid-results">
			<view>我的情况</view>
			<u-cell-group>
				<u-cell-item icon="volume-fill" title="风险提醒" @click="topredict"></u-cell-item>
				<u-cell-item icon="integral-fill" title="症状对比" @click="todetect"></u-cell-item>

				</u-cell-item>
			</u-cell-group>
		</view>
		<view class="mention">
			<view>其他</view>
			<u-collapse :item-style="itemStyle" event-type="close" arrow="true" accordion="true" @change="change">
				<u-collapse-item @change="itemChange">
					<view class="collapseCell" slot="title">
						<u-icon class="cellIcon" name="more-circle"></u-icon>
						<view>如何避免感染</view>
						
					</view>
					<view class="collapse-item">
						<view class="subtitle">1、勤洗手和保持良好的呼吸道卫生习惯</view>
						使用肥皂或洗手液并用流动水洗手，用一次性纸巾或干净毛巾擦手。双手接触呼吸道分泌物后（如打喷嚏后）应立即洗手。

						保持良好的呼吸道卫生习惯。咳嗽或打喷嚏时，用纸巾、毛巾等遮住口鼻，咳嗽或打喷嚏后洗手，避免用手触摸眼睛、鼻或口
						<view class="subtitle">2、增强体质、免疫力，保持环境清洁和通风</view>
						增强体质和免疫力，均衡饮食、适量运动、作息规律，避免过度疲劳。
						每天开窗通风次数不少于3次，每次20~30分钟。户外空气质量较差时，通风换气频次和时间应适当减少。
						<view class="subtitle">3、尽量减少到人群密集场所活动并且关注症状</view>
						尽量减少到人群密集场所活动，避免接触呼吸道感染患者。
						出现呼吸道感染症状如咳嗽、流涕、发热等，应居家隔离休息，持续发热不退或症状加重时及早就诊。
						<view class="subtitle">4、洗手在预防呼吸道传播疾病中的作用</view>
						正确洗手是预防腹泻和呼吸道感染的最有效措施之一。中国疾病预防控制中心、世界卫生组织等权威机构均推荐用肥皂和清水（流水）充分洗手。
						<view class="subtitle">5、正确洗手需掌握六步洗手法</view>
						①双手手心相互搓洗（双手合十搓五下）；

						②双手交叉搓洗手指缝（手心对手背，双手交叉相叠，左右手交换各搓洗五下）；

						③手心对手心搓洗手指缝（手心相对十指交错，搓洗五下）；

						④指尖搓洗手心，左右手相同（指尖放于手心相互相互搓各洗搓五下）；

						⑤一只手握住另一只手的拇指搓洗，左右手相同各搓五下；

						⑥弯曲手指使关节在另一手掌心旋转揉搓，交换进行各搓五下。。
					</view>
				</u-collapse-item>

				<u-collapse-item @change="itemChange">
					<view class="collapseCell" slot="title">
						<u-icon class="cellIcon" name="more-circle-fill"></u-icon>
						<view>如果感染了怎么办</view>
						
					</view>
					<view class="collapse-item">
						<view class="subtitle">1.保持良好的心态</view>
						当接到防疫中心打来的通知电话时，任谁都会手抖，但是心态一定要平和。大多数时候，我们在家里接到防疫中心的电话通知，多半是被检测为无症状感染者了。所谓无症状感染者就是没有产生发烧咳嗽等症状，但是携带了新冠病毒，如果继续与人接触依然会传播病毒，所以也需要隔离。
						<view class="subtitle">2.着手收拾一些未来两周使用的日常物品</view>
						由于确诊后紧接着就会被转送至隔离点，因此先跟通知人员确认车辆运力，从而推测出转运时间，快则两个小时，多则一天，我们需要在这段时间尽快准备行囊。
						要尽可能地缩减需要准备的东西，保障未来14天的生活基本正常即可.
						<view class="subtitle">3.接听流调电话</view>
						因为已经确诊，在挂断确诊通知的电话后，紧接着就会有相关的工作人员联系到我们，确认最近前往的地方、接触的人，以便勾勒出个人最近的行踪，完善抗疫大数据。
						<view class="subtitle">4.抵达隔离点</view>
						接送转运的车辆一般是负压救护车，在有条件的情况下是一车一人，但是，大多数情况都是坐大巴车前往。抵达隔离点前，可能会有很长的等待时间，因为需要协调人员和床位，耐心一点、平和一点就好。
					</view>
				</u-collapse-item>
			</u-collapse>

			<view class="contact">
				<button open-type="contact">实时反馈</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
					head: "赏识在于角度的转换",
					body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来",
					open: true,
					disabled: true
				}, {
					head: "生活中不是缺少美，而是缺少发现美的眼睛",
					body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
					open: false,
				}, {
					head: "周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧",
					body: "但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美",
					open: false,
				}],
				authorizeflag: false,
				avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
				openid: null,
			};
		},
		onShow() {
			this.openid = uni.getStorageSync('openid');
			console.log('信息页面获取', this.openid)
		},
		methods: {
			onChooseAvatar(e) {
				const {
					avatarUrl
				} = e.detail
				this.avatarUrl = avatarUrl
			},
			getuserinfo(e) {
				console.log(e);
			},
			topredict() {
				uni.navigateTo({
					url: "/pages/predictionresult/predictionresult?" + `openid=${this.openid}`
				})
			},
			todetect() {
				uni.navigateTo({
					url: "/pages/recoveryresult/recoveryresult?" + `openid=${this.openid}`
				})
			},
			change() {

			},
			itemChange() {

			}
		},

	}
</script>

<style lang="scss" scoped>
	.covid-result-button {
		background-color: white;
		text-align: left;
		font-size: 28rpx;
	}

	.covid-result-button::after {
		border: none;
	}

	.covid-predict,
	.covid-detect {
		border-bottom: 3rpx solid #F2F2F7;
		padding-bottom: 15rpx;
	}

	.covid-results {
		padding-left: 15rpx;
		margin-top: 60rpx;
		display: flex;
		flex-direction: column;
		gap: 30rpx;
	}

	.weui-input {
		margin-right: -30rpx;
	}

	.name-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.resizeimg {
		width: 30rpx;
		height: 30rpx;
		margin-right: 60rpx;
		margin-left: -100rpx;
	}

	.info-box {
		margin-top: 50rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-radius: 16rpx;
		box-shadow: 0px 2px 8px 0px rgba(136, 136, 136, 40);
	}

	.feedback-title {
		font-size: 40rpx;
		border-bottom: black solid;
	}

	.avatar {
		width: 160rpx;
		height: 160rpx;
		border-radius: 100rpx;
	}

	.avatar-wrapper::after {
		border: none;
	}

	.avatar-wrapper {
		background-color: white;
		border: none;
		width: 240rpx;
		height: 200rpx;
		display: flex;
		align-items: center;
	}

	.feedback-container {
		width: 85%;
		margin: 20rpx auto;
	}

	.subtitle {
		font-size: 30rpx;
		font-weight: 600;
	}

	.mention {
		margin-top: 55rpx;
		padding-left: 15rpx;
		padding-right: 15rpx;
		gap: 30rpx;
	}

	.title {
		font-weight: 700;
		font-size: 40rpx;
	}

	.contact {
		margin: 0 auto;
		margin-top: 50rpx;
		width: 70vw;
	}

	.cellIcon {
		margin-right: 10rpx;
	}
	.collapseCell {
		display: flex;
		flex-direction: row;
		margin: 5rpx 10rpx;
	}
</style>
