<template>
	<view class="feedback-container">
		<!-- <text class="feedback-title">反馈界面</text> -->
		<view class="mention">
			<uni-collapse accordion>
				<uni-collapse-item title="如何避免感染" :open="true">
					<view>
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
				</uni-collapse-item>
				<uni-collapse-item title="如果感染了怎么办">
					<view>
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
				</uni-collapse-item>

			</uni-collapse>
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

			};
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.feedback-title {
		font-size: 40rpx;
		border-bottom: black solid;
	}
	.feedback-container {
		width: 85%;
		margin: 20rpx auto;
	}

	.subtitle {
		font-size: 30rpx;
		font-weight: 600;
	}
	.mention{
		margin-top: 35rpx;
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
</style>
