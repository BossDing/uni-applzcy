<template>
	<view class="content">
		<view class="phoneNumber">
			<view class="phoneNumberTitle">
				<text>+86</text>
			</view>
			<input type="text" class="input"  placeholder="请输入手机号"  placeholder-style="font-size:26upx" />
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
				uni.navigateTo({
					url: '../Verification/Verification'
				});
			}
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.content
		margin-top 80upx
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
		.active
			width 90%
			height 100upx
			margin 30upx auto
			.activeBtn
				width 100%
				background #F76968
				color #fff
</style>
