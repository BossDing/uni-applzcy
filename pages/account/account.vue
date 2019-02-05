<template>
	<view>
		<view class="status-contents">
			<view class="status top-view"></view>
		</view>
		<view class="myWallet">
			<view class="myWalletTitle">
				<view class="backBtn" @click="back">
					<uni-icon type="back" size="30" class="back"  color="#fff"></uni-icon>
					
				</view>
				<text class="myWalletTitleText">我的钱包</text>
			</view>
			<view class="quotaBox">
				<text class="money">3000</text>
				<text class="allMoney">预付款总额</text>
				<view class="recharge">
					<image src="../../static/money.png" class="rechargeImg"></image>
					<text class="rechargeText">充值</text>
				</view>
			</view>
			<view class="detailedBox">
				<view class="detailed">
					<text class="detailedLfet">账单明细</text>
					<view class="detailedRight">
						<image src="../../static/Arrow_right02.png" class="detailedRightImg"></image>
					</view>
				</view>
			</view>
			
			<view class="payMode">
				<view class="payModeTitle">
					<text>请选择支付方式</text>
				</view>
				<view class="alipay" :class="{active:isAli}" @click="AlipayMethod">
					<image src="../../static/ali_pay.png" class="payImg"></image>
					<text>支付宝</text>
					<image v-if="isAli" class="select" src="../../static/choose.png" mode=""></image>
				</view>
				<view class="WeChat" :class=" {active:isWeCaht}" @click="WePayMethod">
					<image src="../../static/wechat.png" class="payImg"></image>
					<text>微信支付</text>
					<image v-if="isWeCaht" class="select" src="../../static/choose.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				isAli:false,
				isWeCaht: false
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			AlipayMethod() {
					this.isAli = true;
					this.isWeCaht = false;
				},
				WePayMethod() {
					this.isWeCaht = true;
					this.isAli = false;
				}
		},
		components:{
			uniIcon
		}
	}
</script>

<style>
	.status-contents{
		height: var(--status-bar-height);
		background:#FF5252;
	}
	.top-view{
		width: 100%;
		position: fixed;
		top: 0;
	}
	.status{
		height:var(--status-bar-height);
	}
</style>
<style scoped lang="stylus" ref="stylesheet/stylus">
	.myWallet
		.myWalletTitle
			color #fff
			text-align center
			background #FF5252
			height 50px
			position relative
			.backBtn
				position absolute
				top 0
				left 3px
				height 50px
				width 50px
				display inline-block
				display flex
				justify-content center  
				align-items center       
				flex-direction row
			.myWalletTitleText
				line-height 50px
		.quotaBox
			width 100%
			height 167px
			background #FF5252
			display flex
			justify-content center  
			align-items center       
			flex-direction column
			color #fff
			font-weight 600
			position relative
			.money
				font-size 36px
			.allMoney
				margin-top 10px
				margin-bottom 50px
			.recharge
				position absolute
				bottom 0
				background rgba(255,255,255,0.5)
				width 100%
				text-align center
				display flex
				justify-content center  
				align-items center       
				flex-direction row
				height 44px
				.rechargeImg
					width 35px
					height 35px 
				.rechargeText
					margin-left 10px
		.detailedBox
			height 60px
			width 100%
			background #F5F5F5
			position relative
			.detailed
				height 44px
				background #fff
				position absolute
				top 8px
				border-bottom 1px solid #F5F5F5
				position relative
				.detailedLfet
					color #101010
					line-height 44px
					float left
					font-size 30upx
					margin-left 10px
				.detailedRight
					position absolute
					right 20px
					top 10px
					float right
					line-height 44px
					.detailedRightImg
						width 20px
						height 20px
		.payMode
			color #101010
			.payModeTitle
				height 55px
				width 100%
				text-align center
				font-size 28upx
				line-height 55px
				border-bottom 1px solid #F5F5F5
			.alipay
				height 50px
				border-bottom 1px solid #F5F5F5
				line-height 50px
				.select
					position absolute
					top 370px
					right 30px
				image
					width 24px
					height 24px	
				.payImg
					height 20px
					width 20px 
					margin 0 20px
// 				.selectedImgBox
// 					display inline-block
// 					width calc(100% - 130px)
// 					height 50px
// 					text-align right
					.blackImg
						width 20px
						height 20px
						margin-top 15px
			.WeChat
				height 50px
				border-bottom 1px solid #F5F5F5
				line-height 50px
				.select
					position absolute
					top 420px
					right 30px
				image
					width 24px
					height 24px
				.payImg
					height 20px
					width 20px 
					margin 0 20px
			.active{
				background-color #ccc
			}		
</style>