<template>
	<view>
		<view class="send">
			<text>验证码已发送至</text>
			<text>177 0000 0000</text>
		</view>
		<view class="datas">
			<text>60</text>
			<text>秒</text>
			<text>后重新获取</text>
		</view>
		<view class="inputBox">
			<input type="text" class="input"/>
			<input type="text" class="input"/>
			<input type="text" class="input"/>
			<input type="text" class="input"/>
			<input type="text" class="input"/>
			<input type="text" class="input"/>
		</view>
		<view class="active">
			<button type="primary" class="activeBtn" @click="next">下一步</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			next(){
				uni.reLaunch({
					url: '../me/me'
				})
			}
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.send
		padding 10upx 15upx
		margin-top 30upx
	.datas
		padding 10upx 15upx
		margin 10upx 0
		font-size 28upx
	.inputBox
		display flex
		align-items center   
		justify-content space-around
		flex-direction row
		.input
			width 80upx
			height 80upx
			border 1upx solid #BBBBBB
	.active
		width 90%
		height 100upx
		margin 80upx auto
		.activeBtn
			width 100%
			background #F76968
			color #fff
</style>
