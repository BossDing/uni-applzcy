<template>
	<view class="content">
		<!-- 页面头部 -->
		<view class="setting-tittle-box" @click="back">
			<uni-icon class="arrow_right" type="arrowleft" size="30"></uni-icon>
			<text>设置</text>
		</view>
		<view class="main-content">
			<!-- 头像 -->
			<view class="photo-box">
				<text class="photo">头像</text>
				<image src="../../static/user.png" mode=""></image>
				<uni-icon class="arrowRight" type="arrowright" size="30"></uni-icon>
			</view>
			<!-- 昵称 -->
			<view class="nickname-box">
				<text class="nickname">昵称</text>
				<text class="nickname_">xxxxx</text>
				<uni-icon class="arrowRight" type="arrowright" size="30"></uni-icon>
			</view>
			<!-- 姓名 -->
			<view class="name-box">
				<text class="name">姓名</text>
				<text class="name_">xxxxx</text>
				<uni-icon class="arrowRight" type="arrowright" size="30"></uni-icon>
			</view>
			<!-- ID Card -->
			<view class="ID-box">
				<text class="ID">身份证号码</text>
				<text>61232XXXXXXXXX0145</text>
				<uni-icon class="arrowRight" type="arrowright" size="30"></uni-icon>
			</view>
			<!-- 手机号 -->
			<view class="phone-box">
				<text class="phone">手机号</text>
				<text>13111111111</text>
				<uni-icon class="arrowRight" type="arrowright" size="30"></uni-icon>
			</view>
			<!-- 推送消息设置 -->
			<view class="news-box">
				<text class="news">消息推送设置</text>
				<view class="btn-box">
					<text class="btnB"></text>
					<text class="btnS"></text>
				</view>
			</view>
			<!-- 我的记录 -->
			<view class="record-box">
				<text class="record">我的记录</text>
				<uni-icon class="arrowRight" type="arrowright" size="30"></uni-icon>
			</view>
			<!-- 已分享分数 -->
			<view class="share-box">
				<view class="share">
					<text class="share">已分享人数</text>
				</view>
				<view class="num">
					<text class="num">55人</text>
				</view>
				
			</view>
			<!-- 推荐给朋友 -->
			<view class="recommend-box" @click="toRecommend">
				<text class="recommend">推荐给朋友</text>
				<uni-icon class="arrowRight" type="arrowright" size="30"></uni-icon>
			</view>
			<!-- 修改登录密码 -->
			<view class="alter-box" @click="alterPassword">
				<text class="alter">修改登录密码</text>
				<uni-icon class="arrowRight" type="arrowright" size="30"></uni-icon>
			</view>
			<!-- 关于我们 -->
			<view class="about-me-box">
				<text class="about">关于我们</text>
				<text>版本1.0.1</text>
				<uni-icon class="arrowRight" type="arrowright" size="30"></uni-icon>
			</view>
		</view>
		<view class="log-out-box" @click="logOut">
			<text>退出登录</text>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		components: {
			uniIcon
		},
		methods: {
			toRecommend() {
				uni.navigateTo({
					url: '../QRCode/QRCode'
				})
			},
			alterPassword() {
				uni.navigateTo({
					url: '../phone-verification/phone-verification'
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			logOut() {
				uni.navigateTo({
					url: '../register/register'
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
		display flex
		justify-content center
		align-items center
		flex-direction column
		.setting-tittle-box
			width 95%
			height 55px
			display flex
			justify-content center
			align-items center
			.arrow_right
				flex 3
			text
				flex 4
				font-size 20px
		.main-content
			width 95%
			height 650px
			font-size 16px
			display flex
			justify-content center
			align-items center
			flex-direction column
			.photo-box
				flex 1
				width 100%
				display flex
				justify-content center
				align-items center
				flex-direction row
				border-bottom 1px solid #ccc
				.photo
					flex 6
				image
					width 40px
					height 40px
					border-radius 50%
			.nickname-box
				flex 1
				width 100%
				display flex
				justify-content center
				align-items center
				flex-direction row
				border-bottom 1px solid #ccc
				.nickname
					flex 6
			.name-box
				flex 1
				width 100%
				display flex
				justify-content center
				align-items center
				flex-direction row
				border-bottom 1px solid #ccc
				.name
					flex 6
			.ID-box
				display flex
				justify-content center
				align-items center
				width 100%
				border-bottom 1px solid #ccc
				flex 1
				.ID
					flex 6
			.phone-box
				flex 1
				width 100%
				display flex
				justify-content center
				align-items center
				border-bottom 1px solid #ccc
				.phone
					flex 6
			.news-box
				display flex
				justify-content center
				align-items center
				width 100%
				border-bottom 1px solid #ccc
				flex 1
				.news
					flex 6
			.record-box
				flex 1
				width 100%
				display flex
				justify-content center
				align-items center
				border-bottom 1px solid #ccc
				position relative
				.record
					width 100%
					height 100%
					line-height 60px
					
				.arrowRight
					position absolute
					top 15px 
					right 0
			.share-box
				flex 1
				width 100%
				display flex
				line-height 60px
				justify-content center
				border-bottom 1px solid #ccc
				.share
					flex 9
				.num
					flex 2
			.recommend-box
				flex 1
				width 100%
				display flex
				justify-content center
				align-items center
				border-bottom 1px solid #ccc
				position relative
				.recommend
					width 100%
					height 100%
					line-height 60px
					
				.arrowRight
					position absolute
					top 15px 
					right 0
			.alter-box
				flex 1
				width 100%
				display flex
				justify-content center
				align-items center
				border-bottom 1px solid #ccc
				.alter
					flex 6
			.about-me-box
				flex 1
				width 100%
				display flex
				justify-content center
				align-items center
				border-bottom 1px solid #ccc
				.about
					flex 6
		.log-out-box
			width 100%
			height 60px
			font-size 14px
			color #E51C23
			margin-top 40px
			background-color #EEE8E8
			display flex
			justify-content center
			align-items center
</style>
