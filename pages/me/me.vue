<template>
	<view class="content">
		<view class="topBox">
			<view class="setUp">
				<image src="../../static/setting.png" @click="enterSettingPage" class="gear" ></image>
				<image src="../../static/news.png"  class="chatboxes" ></image>
			</view>
			<view class="user">
				<view class="userInfor">
					<image src="../../static/user.png" mode="" class="userImg"></image>
					<text class="userNmae">用户名称</text>
					<view class="collectionBox">
						<view class="userCon">
							<text class="topNum">3</text>
							<text class="userContext">收藏</text>
						</view>
						<view class="userCon">
							<text class="topNum">3</text>
							<text class="userContext">关注</text>
						</view>
						<view class="userCon">
							<text class="topNum">3</text>
							<text class="userContext">足迹</text>
						</view>
						<view class="userCon">
							<text class="topNum">3</text>
							<text class="userContext">已分享</text>
						</view>
					</view>
				</view>
				<image src="../../static/vip(1).png" mode="" class="goldVipImage"></image>
				<text class="goldVip">黄金会员</text>
			</view>
		</view>
		<view class="myOrder">
			<view class="orderTitle" @click="enterOrdersPage">
				<text class="orderTitleLeft">我的订单</text>
				<text class="orderTitleRight">查看全部></text>
			</view>
			<view class="orderContentBox">
				<view class="orderContent">
					<image src="../../static/moneyR.png" mode="" class="orderImage"></image>
					<text class="orderText">待付款</text>
				</view>
				<view class="orderContent">
					<image src="../../static/card.png" mode="" class="orderImage"></image>
					<text class="orderText">待发货</text>
				</view>
				<view class="orderContent">
					<image src="../../static/giftR.png" mode="" class="orderImage"></image>
					<text class="orderText">待收获</text>
				</view>
				<view class="orderContent">
					<image src="../../static/record.png" mode="" class="orderImage"></image>
					<text class="orderText">评价</text>
				</view>
				<view class="orderContent">
					<image src="../../static/return.png" mode="" class="orderImage"></image>
					<text class="orderText">退换货</text>
				</view>
			</view>
		</view>
		<view class="advertisement">
			<image src="../../static/raw_1523521108.png" mode="" class="advertisementImage"></image>
		</view>
		<view class="myService">
			<text class="myServiceTitle">我的服务</text>
			<view class="modularTitleBox">
				<text class="modularTitle">系统上一天分享</text>
			</view>
			<view class="serviceBox">
				<view class="modular">
					<view class="serviceImageBox red">
						<image src="../../static/msg.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">23456</text>
					<text class="balanceName">积分总数</text>
				</view>
				<view class="modular">
					<view class="serviceImageBox yellow">
						<image src="../../static/extend.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">5.01</text>
					<text class="balanceName">转换率</text>
				</view>
				<view class="modular">
					<view class="serviceImageBox orange">
						<image src="../../static/extend.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">5467544</text>
					<text class="balanceName">共享金</text>
				</view>
			</view>
			<view class="modularTitleBox">
				<text class="modularTitle">积分账户</text>
			</view>
			<view class="serviceBox">
				<view class="modular">
					<view class="serviceImageBox orange">
						<image src="../../static/giftw.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">23456</text>
					<text class="balanceName">消费积分</text>
				</view>
				<view class="modular">
					<view class="serviceImageBox purple">
						<image src="../../static/extend.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">￥0.00</text>
					<text class="balanceName">交易账户</text>
				</view>
				<view class="modular" @click="enterIntegral">
					<view class="serviceImageBox yellow">
						<image src="../../static/moneyW.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">123456</text>
					<text class="balanceName">库存积分</text>
				</view>
			</view>
			<view class="modularTitleBox">
				<text class="modularTitle">资金账户</text>
			</view>
			<view class="serviceBox">
				<view class="modular">
					<view class="serviceImageBox green" @click="my">
						<image src="../../static/pre.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">￥0.00</text>
					<text class="balanceName">预付款</text>
				</view>
				<view class="modular">
					<view class="serviceImageBox yellow">
						<image src="../../static/extend.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">￥0.00</text>
					<text class="balanceName">消费共享金</text>
				</view>
				<view class="modular">
					<view class="serviceImageBox yellow">
						<image src="../../static/authW.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">￥0.00</text>
					<text class="balanceName">扶贫资金</text>
				</view>
				<view class="modular">
					<view class="serviceImageBox purple">
						<image src="../../static/oldMan.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">￥0.00</text>
					<text class="balanceName">养老资金</text>
				</view>
				<view class="modular">
					<view class="serviceImageBox yellow">
						<image src="../../static/getMW.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">￥0.00</text>
					<text class="balanceName">服务费</text>
				</view>
				<view class="modular" @click="present">
					<view class="serviceImageBox red">
						<image src="../../static/RATE.png" mode="" class="serviceImage"></image>
					</view>
					<text class="balance">￥0.00</text>
					<text class="balanceName">赠送收益</text>
				</view>
			</view>
			<view class="sginInBox">
				<view class="sginInCon">
					<image src="../../static/signB.png" mode="" class="sginInImage"></image>
					<text>签到</text>
				</view>
				<view class="sginInCon">
					<image src="../../static/getM.png" mode="" class="sginInImage"></image>
					<text>商家收款</text>
				</view>
				<view class="sginInCon">
					<image src="../../static/authR.png" mode=""  class="sginInImage"></image>
					<text>认证</text>
				</view>
				<view class="sginInCon">
					<image src="../../static/getM.png" mode=""  class="sginInImage"></image>
					<text>我的推广</text>
				</view>
				<view class="sginInCon">
					<image src="../../static/account.png" mode=""  class="sginInImage"></image>
					<text>线下订单</text>
				</view>
			</view>
		</view>
		<view class="brandDynamics">
			<view class="brandTitle">
				<image src="../../static/方点.png" class="brandTitleImage"></image>
				<text>品牌动态</text>
				<image src="../../static/方点.png" class="brandTitleImage"></image>
			</view>
			<view class="brandBox">
				<view class="brandCon">
					<image src="../../static/f27da758a86543d7.jpg" class="brandLeftImage"></image>
					<text class="brandName">Aptamil</text>
					<text class="promotion">促销</text>
				</view>
				<image src="../../static/raw_1522116070.png" mode="" class="brandImage"></image>
				<image src="../../static/raw_1522116070.png" mode="" class="brandImage"></image>
				<image src="../../static/raw_1522116070.png" mode="" class="brandImage"></image>
			</view>
			<view class="brandBox">
				<view class="brandCon">
					<image src="../../static/f27da758a86543d7.jpg" class="brandLeftImage"></image>
					<text class="brandName">Aptamil</text>
					<text class="promotion">促销</text>
				</view>
				<image src="../../static/raw_1522116070.png" mode="" class="brandImage"></image>
				<image src="../../static/raw_1522116070.png" mode="" class="brandImage"></image>
				<image src="../../static/raw_1522116070.png" mode="" class="brandImage"></image>
			</view>
			<view class="more">
				<text>更多感兴趣的品牌动态 > </text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			uniIcon	
		},
		methods: {
			enterSettingPage() {
				uni.navigateTo({
					url: '../setting/setting'
				})
			},
			enterIntegral() {
				uni.navigateTo({
					url: '../integral/integral'
				})
			},
			enterOrdersPage() {
				uni.navigateTo({
					url: '../my-order/my-order'
				})
			},
			my() {
				uni.navigateTo({
					url: '../account/account'
				})
			},
			present() {
				uni.navigateTo({
					url: '../profit/profit'
				})
			}
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.content
		overflow hidden
		color 333
		.topBox
			background #A3162E
			height 400upx
			.setUp
				text-align right
				
				.gear
					margin 40upx 10upx
					width 60upx
					height 60upx
					color #fff
				.chatboxes
					margin 40upx 10upx
					width 60upx
					height 60upx
			.user
				margin-top 200upx
				width 90%
				height 380upx
				background #121212
				margin 0 auto
				border-radius 20upx
				position relative
				.userInfor
					background #fff
					border-radius 20upx
					width 100%
					height 300upx
					text-align center
					position relative
					.userImg
						position absolute
						top -50upx
						left 50upx
						width 160upx
						height 160upx
						border-radius 50%
					.userNmae
						display block
						padding 20upx 0
					.collectionBox
						margin-top 80upx
						display flex
						align-items center   
						justify-content center// 垂直居中
						flex-direction row
						color #333
						font-size 30upx
					
						.userCon
							width 25%
							text-align center
							border-left 1px solid #333
							.topNum
								display block
								font-weight 600
								color #6B6B6B 100%
							.userContext
								font-size 25upx
								color #B3B3B3
				.goldVipImage
					
					width 60upx
					height 60upx
					position absolute
					bottom 20upx
					left 20upx
				.goldVip
					position absolute
					bottom 20upx
					left 80upx
					color #E3D7BF
					font-size 28upx
					font-weight 600
		.myOrder
			width 100%
			height 200upx
			padding-top 200upx
			.orderTitle
				margin 0 40upx
				border-bottom 1upx solid #B3B3B3
				padding-bottom 20upx
				color #333
				font-size 26upx
				.orderTitleRight
					color #B3B3B3
					float right
			.orderContentBox
				display flex
				align-items center   
				justify-content center// 垂直居中
				flex-direction row
				padding 20upx 0
				.orderContent
					text-align center
					width 20%
					font-size 25upx
					.orderImage
						margin 5upx auto
						display block
						width 50upx
						height 50upx
					.orderText
						color #5C5C5C 100%
						font-weight 500
		.advertisement
			width 100%
			height 150upx
			.advertisementImage
				width 100%
				height 100%
		.myService
			font-size 28upx
			.myServiceTitle
				display block
				margin-left 40upx
				margin-top 50upx
				margin-bottom 20upx
				font-weight 600
				font-size 30upx
			.modularTitleBox
				border-bottom 1upx solid #d3d3d3
				border-top 1upx solid #d3d3d3
				.modularTitle
					padding 5upx 0
					display block
					margin-left 40upx
					font-weight 600
					width 100%
					color #AE9999
			.serviceBox
				width 100%
				// margin 40upx 0
				display flex
				align-items center   
				justify-content center
				flex-direction row
				flex-wrap wrap
				.modular
					width 33%
					height 100%
					margin 40upx 0
					display inline-block
					display flex
					align-items center 
					flex-direction column
					.serviceImageBox
						width 80upx
						height 80upx
						border-radius 50%
						display flex
						align-items center   
						justify-content center
						.serviceImage
							width 50upx
							height 50upx
					.purple
						background #A589E0
					.orange
						background #F1A161
					.yellow
						background #EDD764
					.red
						background #F25422
					.green
						background #A6C979
					.balance
						display block
					.balanceName
						color #BBBBBB
			.sginInBox
				width 100%
				height 170upx
				border-bottom 1upx solid #d3d3d3
				border-top 1upx solid #d3d3d3
				display flex
				align-items center   
				justify-content center
				font-size 28upx
				.sginInCon
					width 20%
					display flex
					align-items center 
					flex-direction column
					.sginInImage
						display block
						width 70upx
						height 70upx
		.brandDynamics
			font-size 28upx
			padding 0 40upx
			.brandTitle
				margin-top 50upx
				padding-bottom 20upx
				text-align center
				width 100%
				font-size 30upx
				font-weight 600
				border-bottom 1px solid #d3d3d3
				.brandTitleImage
					width 20upx
					height 20upx
			.brandBox
				width 100%
				height 250upx
				display flex
				align-items center   
				justify-content center
				flex-direction row
				border-bottom 1px solid #d3d3d3
				.brandCon
					height 100%
					width 25%
					display flex
					align-items center   
					justify-content center
					flex-direction column
					.brandLeftImage
						box-sizing: border-box
						height 100upx
						width 100upx
						border 1upx solid #E3E3E3
					.brandName
						font-size 28upx
						font-weight 550
						display block
					.promotion
						display block
						padding 0 8upx
						border-radius 20upx
						color #d62f2f
						border 1upx solid #d62f2f
				.brandImage
					width 150upx
					height 200upx
			.more
				text-align center
				color #999999 
				margin-top 30upx
				margin-bottom 20upx
	</style>
