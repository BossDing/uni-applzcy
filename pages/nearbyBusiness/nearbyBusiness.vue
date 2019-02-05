<template>
	<view class="content">
		<!-- 顶部搜索 -->
		<view class="titleBox">
			<uni-icon type="scan" size="25" class="scan" color="8e8e8e"></uni-icon>
			<!-- <view class="inputBox">
				<uni-icon type="search" size="15" class="search" color="8e8e8e"></uni-icon>
				<input type="text" value="" placeholder="输入关键字搜索" placeholder-style="font-size:15px" class="input"/> 
			</view> -->
			<view class="search-box">
				<uni-icon type="search" size="30" class="search" color= "#8e8e8e"></uni-icon>
				<input type="text" value="" placeholder="在千万海外商品中搜索" class="input"/>
			</view>
			<uni-icon type="chat" size="20" class="chat" color="8e8e8e"></uni-icon>
		</view>
		<view class="topTitle">
			<view class="allStore">
				<uni-icon type="star" size="35" class="star" color="8e8e8e"></uni-icon>
				<text>全部商家</text>
			</view>
			<view class="discountStore">
				<text>活动商家</text>
			</view>
			<view class="leftBox">
				<uni-icon type="location-filled" size="30" class="location-filled" style="color: #e7313a"></uni-icon>
				<uni-icon type="search" size="30" class="searchStore" color="8e8e8e"></uni-icon>
			</view>
			
		</view>
		<view class="classification">
			<view class="allClassification typeList">
				<uni-icon type="bars" size="25" class="bars" color="8e8e8e"></uni-icon>
				<text>全部分类</text>
			</view>
			<view class="city typeList">
				<uni-icon type="location-filled" size="25" class="filled" color="8e8e8e"></uni-icon>
				<text>全城</text>
			</view>
			<view class="IntelligentSorting typeList">
				<uni-icon type="list" size="25" class="list" color="8e8e8e"></uni-icon>
				<text>智能排序</text>
			</view>
		</view>
		<view class="place">
			<text>成都市成华区猛追湾</text>
			<uni-icon type="refreshempty" size="25" class="refreshempty" color="8e8e8e"></uni-icon>
		</view>
		<view class="shop">
			<image src="../../static/shop.jpg" mode="" class="image"></image>
			<view class="shopText">
				<text class="name">猫咪咖啡店</text>
				<view class="evaluate">
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<text class="garde">170评价</text>
					<text class="consumption"> 人均120元</text>
				</view>
				<view class="bottomInformation">
					<text class="crux">标签 关键词</text>
					<text class="distance"> 小于 500m</text>
				</view>
			</view>
		</view>
		<view class="shop">
			<image src="../../static/shop.jpg" mode="" class="image"></image>
			<view class="shopText">
				<text class="name">猫咪咖啡店</text>
				<view class="evaluate">
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<text class="garde">170评价</text>
					<text class="consumption"> 人均120元</text>
				</view>
				<view class="bottomInformation">
					<text class="crux">标签 关键词</text>
					<text class="distance"> 小于 500m</text>
				</view>
			</view>
		</view>
		<view class="shop">
			<image src="../../static/shop.jpg" mode="" class="image"></image>
			<view class="shopText">
				<text class="name">猫咪咖啡店</text>
				<view class="evaluate">
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<uni-icon type="star-filled" size="15" class="star-filled" color="8e8e8e"></uni-icon>
					<text class="garde">170评价</text>
					<text class="consumption"> 人均120元</text>
				</view>
				<view class="bottomInformation">
					<text class="crux">标签 关键词</text>
					<text class="distance"> 小于 500m</text>
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
				
			};
		},
		components:{
			uniIcon
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.content
		width 100%
		overflow hidden
		.titleBox
			display flex
			justify-content center   // 水平居中
			align-items center       // 垂直居中
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
// 				border-radius 5upx
// 				display flex
// 				margin 0 5px
// 				justify-content center   // 水平居中
// 				align-items center       // 垂直居中
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
		.topTitle
			width 100%
			height 100upx
			display flex
			align-items center   
			justify-content center// 垂直居中
			flex-direction row
			padding 0 20upx
			color #333
			font-size 30upx
			.allStore
				vertical-align middle
				line-height 100upx
				color #e7313a
			.discountStore
				line-height 100upx
				padding-left 20upx
			.leftBox
				width 300upx
				text-align center
		.classification	
			height 100upx
			display flex
			align-items center   
			justify-content center// 垂直居中
			flex-direction row
			font-size 30upx
			.typeList
				text-align center
				line-height 100upx
				border 1px solid #d3d3d3
				width 33%
				height 100%
		.place
			font-size 30upx
			height 100upx
			text-align center
			line-height 100upx
		.shop
			height 250upx
			border 1px solid #d3d3d3
			display flex
			align-items center   
			justify-content flex-start
			flex-direction row
			.image
				width 180upx
				height 180upx
				margin-left 25upx
			.shopText
				width 500upx
				height 250upx
				padding 10upx 0
				margin-left 25upx
				.name
					color #333
					font-weight 600
					font-size 30upx
				.evaluate
					font-size 20upx
					margin 50upx 0
				.bottomInformation
					align-items center   
					justify-content space-between
					flex-direction row
					width 100%
					color #333
					font-size 30upx
					.crux
						width 200upx
						display inline-block
					.distance
						width calc(100% - 200upx)
						float right
						text-align right
</style>
