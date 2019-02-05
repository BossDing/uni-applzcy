<template>
	<view class="content">
        <view class="status-contents">
        	<view class="status top-view"></view>
        </view>
		<!-- 顶部搜索 -->
		<view class="titleBox">
			<uni-icon type="scan" size="25" class="scan" color="#8e8e8e"></uni-icon>
			<!-- <view class="inputBox">
				<uni-icon type="search" size="15" class="search"  color="#8e8e8e"></uni-icon>
				<input type="text" value="" placeholder="输入关键字搜索" class="input"/> 
			</view> -->
			<view class="search-box">
				<uni-icon type="search" size="30" class="search" color= "#8e8e8e"></uni-icon>
				<input type="text" value="" placeholder="输入关键字搜索" class="input"/>
			</view>
			<uni-icon type="chat" size="20" class="chat" color="#8e8e8e"></uni-icon>
		</view>
		<view class="tabBar">
			<image src="../../static/左.png" class="arrowleft"></image>
			<text>消息中心</text>
		</view>
		<view class="newsContent">
			<view class="newsContentList">
				<view class="newsContentBox red">
					<image src="../../static/星星-线.png" class="allIocn"></image>
				</view>
				<view class="newsContentText">
					<view class="newsContentTextTitle">
						<text>活动精选</text>
						<text class="newsData">2018.02.08</text>
					</view>
					<text>#妈妈不用做超人#创联神助攻,独家揭秘辣妈</text>
				</view>
			</view>
			<view class="newsContentList">
				<view class="newsContentBox purple">
					<image src="../../static/客服.png" class="allIocn"></image>
				</view>
				<view class="newsContentText">
					<view class="newsContentTextTitle">
						<text>客服助手</text>
						<text class="newsData">2018.02.08</text>
					</view>
					<text>#妈妈不用做超人#创联神助攻,独家揭秘辣妈</text>
				</view>
			</view>
			<view class="newsContentList">
				<view class="newsContentBox blue">
					<image src="../../static/铃铛.png" class="allIocn"></image>
				</view>
				<view class="newsContentText">
					<view class="newsContentTextTitle">
						<text>通知消息</text>
						<text class="newsData">2018.02.08</text>
					</view>
					<text>#妈妈不用做超人#创联神助攻,独家揭秘辣妈</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		name:"news",
		data() {
			return {
				
			};
		},
		components:{
			uniIcon
		}
	}
</script>

<style>
	.status-contents{
		height: var(--status-bar-height);
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
		.titleBox
			display flex
			justify-content center  
			align-items center    
			flex-direction row
			width 100%
			height 100upx
			border-bottom 1px solid #d3d3d3
			.scan
				flex 1
				text-align center
// 			.inputBox
// 				flex 5
// 				background #EAEBED
// 				margin 0 5px
// 				border-radius 5upx
// 				display flex
// 				justify-content center   
// 				align-items center     
// 				flex-direction row
// 				.search
// 					font-size 15upx
// 				.input
// 					padding-left 30upx
// 					width 80%
// 					font-size 28upx
			.search-box
				display flex
				align-items center       // 垂直居中
				flex-direction row
				width 85%
				border 1px solid #d3d3d3
				background #e6e6e6
				border-radius 10upx
				.search
					color #d3d3d3
				.input
					padding-left 30upx
					width 80%
					font-size 28upx
			.chat
				flex 1
				text-align center
		.tabBar
			border-bottom 1px solid #d3d3d3
			height 100upx
			text-align center
			line-height 100upx
			position relative
			.arrowleft
				float left
				width 50upx
				height 50upx
				position absolute
				left 10upx
				top 20upx
		.newsContent
			padding 0 40upx
			.newsContentList
				height 150upx
				border-bottom 1px solid #d3d3d3
				display flex
				// justify-content center   
				align-items center     
				flex-direction row
				.red
					background #E8315D
				.blue
					background #8DBAE6
				.purple
					background #7994E7
				.newsContentBox
					display inline-block
					width 60upx
					height 60upx
					border-radius 50%
					display flex
					justify-content center  
					align-items center   
					.allIocn
						width 50upx
						height 50upx
				.newsContentText
					width calc(100% - 60upx)
					display inline-block
					font-size 28upx
					.newsContentTextTitle
						font-size 30upx
						font-weight 600
						.newsData
							float right
							color #BEC2C9
					
						
</style>
