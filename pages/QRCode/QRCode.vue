<template>
	<view class="content">
		<view class="title-box" @click="back">
			<uni-icon class="icon" type="arrowleft" size="30" color="#2973E3"></uni-icon>
			<text class="title">二维码名片</text>
		</view>
		<view class="main-content">
			<view class="content-title">
				<text>二维码推荐名片</text>
			</view>
			<text class="eName">vera</text>
			<text class="cName">陈瑶瑶</text>
			<view class="img">
				<image src="../../static/vera.png" mode=""></image>
			</view>
			<text class="find">扫一扫</text>
	
			
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		components: {uniIcon},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.content
		width 100%
		margin-top 70upx
		background-color #fff
		.title-box
			width 100%
			height 60px
			padding-left 15px
			line-height 60px
			background #fff
			border-bottom 1px solid #ccc
			.icon 
				margin-top -5px
			
		.main-content
			width calc(90% - 2upx)
			height 460px
			margin 0 auto
			background-color #fff
			border-right 1upx solid #ccc
			border-left 1upx solid #ccc
			border-bottom 1px solid #ccc
			.content-title
				width calc(100% - 20upx)
				height 60px
				margin 20px 0
				line-height 60px
				color #fff
				padding-left 20upx
				background-color #2973E3
			.eName
				background-color #fff
				display block
				width 120px
				height 120px
				line-height 120px
				font-size 28px
				color #fff
				text-align center
				margin 0 auto
				border-radius 50%
				border 1px solid #ccc
				background-color orange
			.cName
				display block
				font-size 28px
				width 100%
				height 40px
				color #2973E3
				margin 10px auto
				text-align center
			.img
				width 140px
				margin 0 auto
				image
					width 140px
					height 140px
			.find
				display block
				width 100%
				text-align center
				margin 10px
				font-size 14px
				
</style>
