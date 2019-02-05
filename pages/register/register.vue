<template>
	<view>
		<view class="topText">
			<text class="topTitle">请输入您的手机号,登录或注册你的账号</text>
		</view>
		<view class="phoneNumber">
			<view class="phoneNumberTitle">
				<text>+86</text>
			</view>
			<input type="text" value=""  placeholder="请输入手机号"  placeholder-style="font-size:14px" />
		</view>
		<view class="verificationBox">
			<view class="verificationCon">
				<text class="verificationLeft">验证码</text>
				<input type="text" value=""  placeholder="请输入验证码"  placeholder-style="font-size:14px" class="verificationInput" />
			</view>
			<button type="primary" class="button">获取验证码</button>
		</view>
		<view class="recommend">
			<uni-icon type="checkbox-filled" size="25" class="checkbox-filled"  color="#8e8e8e"></uni-icon>
			<view class="recommendNumber">
				<text class="recommendText">推荐人</text>
				<input type="text" placeholder="请输入手机号码"  placeholder-style="font-size:14px" />
			</view>
			<uni-icon type="scan" size="25" class="scan"  color="#8e8e8e"></uni-icon>
		</view>
		<view class="recommend1">
			<uni-icon type="checkbox-filled" size="25" class="checkbox-filled"  color="#8e8e8e"></uni-icon>
			<text>注册即同意</text>
			<text class="colori" @click="nexti">《用户注册协议》</text>
		</view>
		<view class="active">
			<button type="primary" class="activeBtn"  @click="next">开始</button>
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
		methods:{
			next(){
				uni.navigateTo({
					url: '../sigin/sigin'
				});
			},
			nexti(){
				uni.navigateTo({
					url: '../protocol/protocol'
				});
			}
		},
		components:{
			uniIcon,
			
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.topText
		height 100upx
		margin-left 40upx
		.topTitle
			line-height 100upx
			font-size 30upx
			font-weight 550
	.phoneNumber
		width 90%
		height 80upx
		margin 20upx auto
		background #F2F2F2
		border-radius 10upx
		display flex
		align-items center 
		.phoneNumberTitle
			width 130upx
			text-align center
			font-size 28upx
	.verificationBox
		width 90%
		height 80upx
		margin 20upx auto
		display flex
		align-items center   
		justify-content center// 垂直居中
		flex-direction row
		.verificationCon
			height 100%
			width 65%
			background #F2F2F2
			display flex
			align-items center   
			justify-content center// 垂直居中
			flex-direction row
			border-radius 10upx
			.verificationLeft
				width 200upx
				font-size 28upx
				font-weight 550
				text-align center
			.verificationInput
				display inline-block
		.button
			height 100%
			width 33%
			background #F76968
			font-size 28upx
	.recommend
		display flex
		align-items center   
		justify-content center// 垂直居中
		flex-direction row
		margin 50upx 0
		.checkbox-filled
			width 150upx
			text-align center
		.scan
			width 150upx
			text-align center
		.recommendNumber
			display flex
			align-items center   
			justify-content center// 垂直居中
			flex-direction row
			width 500upx
			background #F2F2F2
			padding 10upx 0
			border-radius 10upx
			.recommendText
				font-size 28upx
				width 150upx
				text-align center
				font-weight 550
	.active
		width 90%
		height 100upx
		margin 30upx auto
		.activeBtn
			width 100%
			background #F76968
			color #fff
	.recommend1{
		margin-left: 80upx;
		text{
			left: 53px;
			top: 321px;
			width: 60px;
			height: 17px;
			line-height: 17px;
			color: rgba(16, 16, 16, 1);
			font-size: 12px;
			text-align: center;
			font-family: PingFangSC-regular;
		}
		.colori{
			left: 115px;
			top: 321px;
			width: 96px;
			height: 17px;
			line-height: 17px;
			color: rgba(102, 190, 255, 1);
			font-size: 12px;
			text-align: center;
			font-family: PingFangSC-regular;
		}
	}
</style>
