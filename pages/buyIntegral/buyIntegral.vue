<template>
	<view class="content">
		<view class="status-contents">
			<view class="status top-view"></view>
		</view>
		<!-- 页面标题 -->
		<view class="title-box" @click="back">
			<uni-icon class="icon" type="arrowleft" size="28" color="#333"></uni-icon>
			<text class="title">购买积分</text>
		</view>
		<!-- 中间部分 -->
		<view class="buy-box">
			<view class="pay-method">
				<text class="method">支付方式</text>
				<view class="wechat-pay">
					<text>微信支付</text>
					<uni-icon class="icon" type="arrowright" size="28" color="#333"></uni-icon>
				</view>
			</view>
			<view class="buy-count">
				<text class="num">购买数量</text>
				<text class="num_">请输入购买数量</text>
			</view>
			<view class="need-money">
				<text class="need">需付金额</text>
				<view class="input-box">
					<text>￥</text>
					<input type="text" value="" placeholder="0.00"/>
				</view>
			</view>
			<text class="more">本次最多可购买100000积分</text>
			
		</view>
		<view class="confirm-btn">
			<text>确认购买</text>
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
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	.status-contents{
		height: var(--status-bar-height);
		background-color: #f4f3f3;
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
	.content
		width 100%
		// overflow hidden
		.title-box
			width 100%
			height 60px
			color #333
			font-size 18px
			line-height 60px
			background-color #f4f3f3
			.icon
				width 40%
		.buy-box
			width 100%
			height 320px
			background-color #fff
			.pay-method
				width 95%
				height 18%
				margin 0 auto
				font-size 14px
				display flex
				justify-content center   // 水平居中
				align-items center       // 垂直居中
				flex-direction row
				border-bottom 1px solid #ccc
				.method
					flex 4
					display flex
					align-items center 
					color #ccc
					text-align left !important
					height 100%
				.wechat-pay
					flex 2
					display flex
					align-items center 
					height 100%
					text-align right !important
			.buy-count
				width 95%
				height 37%
				color #ccc
				margin 0 auto
				font-size 14px
				display flex
				justify-content center   // 水平居中
				align-items center       // 垂直居中
				flex-direction column
				border-bottom 1px solid #ccc
				text-align left !important
				
				.num
					width 100%
					height 30%
					line-height 40px
					display block
				.num_
					width 100%
					height 70%
					line-height 110px
					font-size 28px
					display block
			.need-money
				width 95%
				height 35%
				margin 0 auto
				font-size 14px
				color #ccc
				display flex
				justify-content center   // 水平居中
				align-items center       // 垂直居中
				flex-direction column
				border-bottom 1px solid #ccc
				text-align left !important
				.need
					width 100%
					height 30%
					line-height 40px
				.input-box
					width 100%
					height 70%
					line-height 110px
					font-size 28px
					display flex
					justify-content center   // 水平居中
					align-items center       // 垂直居中
					flex-direction row
					input
						padding 10px 0
						background-color #EEE8E8
						padding-left 10px
			.more
				display block
				width 95%
				color #ccc
				font-size 14px
				margin 0 auto
		.confirm-btn
			width 95%
			height 55px
			color #fff
			margin 0 auto
			display flex
			justify-content center   // 水平居中
			align-items center
			background-color #F8A0A0
			border-radius 4px

</style>
