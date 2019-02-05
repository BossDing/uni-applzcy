<template>
	<view>
		<view class="content">
			<!-- 头部 -->
			<view class="title-box">
				<uni-icon type="scan" size="28" class="scan" color="#8e8e8e"></uni-icon>
				<!-- <view class="input-box" @click="openSearch">
					<uni-icon type="search" size="30" class="search" color= "#8e8e8e"></uni-icon>
					<input type="text" value="" placeholder="输入关键字搜索" placeholder-style="font-size:15px" class="input"/>
				</view> -->
				<view class="search-box" @click="openSearch">
					<uni-icon type="search" size="30" class="search" color= "#8e8e8e"></uni-icon>
					<input type="text" value="" placeholder="在千万海外商品中搜索" placeholder-style="font-size:15px" class="input"/>
				</view>
				<uni-icon type="chat" size="30" class="chat" color="#8e8e8e"></uni-icon>
			</view>
			<!-- 轮播图区域 -->
			<view class="casual">
				<swiper class="swiper-box" indicator-dots="true" autoplay="true" interval="3000" duration="500">
			
					<swiper-item class="swiper" v-for="(item, index) in itemList" :key="index">
						<image :src="item" class="image"></image>
					</swiper-item>
					
				</swiper>
			</view>
			<!-- 商品导航区域 -->
			<view class="nav-box">
				<nav-center></nav-center>
			</view>
			<!-- 今日推荐区域 -->
			<view class="recomend-box">
				<view class="top">
					<!-- 限时购 -->
					<view class="buy">
						<text class="title">限时购</text>
						<text class="time-item">00</text>
						<text class="time-item">88</text>
						<text class="time-item">88</text>
						<text class="time-zone">9点场</text>
						<view class="goods-list">
							<image src="../../static/raw_1521976314.png"></image>
							<text class="nowSalePrice">￥166</text>
							<text class="normalSalePrice">￥288</text>
						</view>
						<view class="goods-list smallBox">
							<image src="../../static/raw_1521976348.png" class="smallImage"></image>
							<text class="nowSalePrice">￥166</text>
							<text class="normalSalePrice">￥288</text>
						</view>
					</view>
					<!-- 每日上新 -->
					<view class="new">
						<text class="title spectial">每日上新</text>
						<text class="time-zone spectial spectialTime">每日9点前折扣超前</text>
						<view class="goods-list smallBox">
							<image src="../../static/raw_1521976632.png" class="smallImage"></image>
						</view>
						<view class="goods-list smallBox">
							<image src="../../static/raw_1521976677.png" class="smallImage"></image>
						</view>
						
					</view>
				</view>
				<!-- 国家地区馆、家居生活、网易严选 -->
				<view class="bottom">
					<goods-show></goods-show>
				</view>
			</view>
			<!-- 明星精选活动 -->
			<view class="selected-activities-content">
				<view class="selected-activities">
					<text class="selected-activities-text">明星精选活动</text>
				</view>
				<view class="recomend-goods-box">
					
					<view class="uni-padding-wrap uni-common-mt">
						<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
							<view id="demo1" class="scroll-view-item_H">
								<view class="recomend-goods-item1" v-for="(item, index) in recomendGoods" :key="index">
									<text>{{item.kinds}}</text>
									<text>{{item.infor}}</text>
									<!-- <text>{{item.price}}</text> -->
									<view class="img-box">
										<image :src="item.img1" mode=""></image>
										<image :src="item.img2" mode=""></image>
									</view>
								</view>
							</view>
							<!-- see more -->
							
						</scroll-view>
					</view>
					
					<view class="uni-padding-wrap uni-common-mt">
						<view>
							<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
							<view id="demo1" class="scroll-view-item_H  recomend-goods-item2">
								<view class="img-box">
									<image src="../../static/raw_1522116065.png" mode=""></image>
								</view>
								<text class="des">1件装 | 爱他美</text>
								<text class="price">$ 310</text>
								
							</view>
							<view id="demo2" class="scroll-view-item_H  recomend-goods-item2">
								<view class="img-box">
									<image src="../../static/raw_1522116065.png" mode=""></image>
								</view>
								<text class="des">1件装 | 爱他美</text>
								<text class="price">$ 310</text>
							</view>
							<view id="demo3" class="scroll-view-item_H  recomend-goods-item2">
								<view class="img-box">
									<image src="../../static/raw_1522116065.png" mode=""></image>
								</view>
								<text class="des">1件装 | 爱他美</text>
								<text class="price">$ 310</text>
							</view>
							<view id="demo4" class="scroll-view-item_H  recomend-goods-item2">
								<view class="img-box">
									<image src="../../static/raw_1522116065.png" mode=""></image>
								</view>
								<text class="des">1件装 | 爱他美</text>
								<text class="price">$ 310</text>
							</view>
							<view id="demo5" class="scroll-view-item_H  recomend-goods-item2">
								<view class="img-box">
									<image src="../../static/raw_1522116065.png" mode=""></image>
								</view>
								<text class="des">1件装 | 爱他美</text>
								<text class="price">$ 310</text>
							</view>
							<view id="demo6" class="scroll-view-item_H  recomend-goods-item2">
								<view class="img-box">
									<image src="../../static/raw_1522116065.png" mode=""></image>
								</view>
								<text class="des">1件装 | 爱他美</text>
								<text class="price">$ 310</text>
							</view>
							<view id="demo7" class="scroll-view-item_H  recomend-goods-item2">
								<view class="img-box">
									<image src="../../static/raw_1522116065.png" mode=""></image>
								</view>
								<text class="des">1件装 | 爱他美</text>
								<text class="price">$ 310</text>
							</view>
							<view id="demo8" class="scroll-view-item_H  recomend-goods-item2">
								<view class="img-box">
									<image src="../../static/raw_1522116065.png" mode=""></image>
								</view>
								<text class="des">1件装 | 爱他美</text>
								<text class="price">$ 310</text>
							</view>
							</scroll-view>
						</view>
					</view>
				</view>
			</view>
			<!-- 上拉加载 -->
			<view class="getMore">
				<text>加载更多 >></text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				// 轮播图图片
				itemList: [
					'../../static/1.jpeg',
					'../../static/2.jpeg',
					'../../static/3.jpeg',
					'../../static/4.jpeg'
				],
				// 限时购、每日上新数据
				"recomendGoods": [
					{
						"kinds": "实用券攻略",
						"infor": "礼盒券后直减",
						"price": 130,
						"img1": "../../static/raw_1521984018.png",
						"img2": "../../static/raw_1521984049.png"
					},
					{
						"kinds": "神价热销榜",
						"infor": "礼盒券后直减",
						"price": 130,
						"img1": "../../static/raw_1521984121.png",
						"img2": "../../static/raw_1521984152.png"
					},
					{
						"kinds": "人气护肤榜",
						"infor": "礼盒券后直减",
						"price": 130,
						"img1": "../../static/raw_1521984271.png",
						"img2": "../../static/raw_1521984290.png"
					},
					{
						"kinds": "人气护肤榜",
						"infor": "礼盒券后直减",
						"price": 130,
						"img1": "../../static/raw_1521984271.png",
						"img2": "../../static/raw_1521984290.png"
					},
					{
						"kinds": "人气护肤榜",
						"infor": "礼盒券后直减",
						"price": 130,
						"img1": "../../static/raw_1521984271.png",
						"img2": "../../static/raw_1521984290.png"
					},
					{
						"kinds": "人气护肤榜",
						"infor": "礼盒券后直减",
						"price": 130,
						"img1": "../../static/raw_1521984271.png",
						"img2": "../../static/raw_1521984290.png"
					},
					{
						"kinds": "人气护肤榜",
						"infor": "礼盒券后直减",
						"price": 130,
						"img1": "../../static/raw_1521984271.png",
						"img2": "../../static/raw_1521984290.png"
					}
				],
					scrollTop: 0,
					old: {
						scrollTop: 0
					}
			}
		},
		components: {
			uniIcon,
		},
		onLoad() {

		},
		methods: {
			openSearch() {
				uni.navigateTo({
					url: '../search/search'
				});
			},
			openNews() {
				uni.navigateTo({
					url: '../news/news'
				});
			},
			openNearby() {
				uni.navigateTo({
					url: '../nearbyBusiness/nearbyBusiness'
				});
			},
			openshoppingCar() {
				uni.navigateTo({
					url: '../shoppingCar/shoppingCar'
				});
			},
			openMe() {
				uni.navigateTo({
					url: '../register/register'
				});
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.content
		width 100%
		text-align center
		margin-top 70upx
		overflow-y sroll
		.title-box
			display flex
			justify-content center   // 水平居中
			align-items center       // 垂直居中
			flex-direction row
			width 100%
			height 100upx
			.scan
				flex 1
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
					// padding-left 30upx
					// width 80%
					font-size 28upx
			.chat
				flex 1
		.casual
			width 100%
			height 400upx
			.swiper-box
				width 100%
				height 100%
				.swiper
					width 100%
					height 100%
					.image
						width 100%
						height 100%
		.nav-box
			display flex
			flex-wrap wrap
			width 100%
			height 300upx
			.nav-item
				display flex
				flex-direction column
				justify-content center
				align-items center
				width 24%
				height 50%
				font-size 30upx
				.image
					width 70upx
					height 70upx
					background-color lightblue
					border-radius 50%
					margin 8upx 0
		.recomend-box
			width 100%
			height 600upx
			// background-color #ccc
			.top
				display flex
				justify-content center   // 水平居中
				align-items center       // 垂直居中
				flex-direction row
				width 100%
				height 50%
				background-color #fff
				border-bottom 1px solid #d0d0d0
				.buy, .new
					width 50%
					height 100%
					.title
						font-size 40upx
						font-weight 600
						margin-right 10upx
					.spectial
						display block
						text-align left
					.spectialTime
						margin-top 5upx
					.time-item
						width 20upx
						height 20upx
						color #fff
						font-size 30upx
						margin-right 8upx
						background-color #333
					.time-item::after
						content ":"
						background-color #fff
						color #333
					.time-zone
						font-size 24upx
					.goods-list
						width 50%
						height 70%
						margin-top 36upx
						display inline-block
						image
							width 100upx
							height 100upx
						.nowSalePrice
							font-size 24upx
							color red
							margin-right 10upx
						.normalSalePrice
							font-size 18upx
							color #ccc
				.new
					width 50%
					height 100
	.selected-activities-content
		width 100%
		height 100%
		.selected-activities
			width 100%
			height 150upx
			background-color #f4f3f3
			display flex
			flex-direction row
			justify-content center
			align-items center
			.selected-activities-text

				font-size 40upx
				font-weight 600
		.recomend-goods-box
			width 100%
			background-color #fff
			.recomend-goods-item1
				display inline-block
				width 30%
				height 240upx
				margin 20upx 10upx
				background-color #f4f3f3
				text
					display block
					font-size 24upx
					text-align center
					margin-bottom 5upx
				text:nth-child(1)
					padding-top 10upx
				.img-box
					width 100%
					height 50%
					display flex
					justify-content center
					align-items center
					image
						width 80upx
						height 80upx
						margin 0 auto
// 			.recomend-goods-item2
// 				display inline-block
// 				width 30%
// 				height 240upx
// 				margin 20upx 10upx
// 				.img-box
// 					width 100%
// 					height 50%
// 					display flex
// 					justify-content center
// 					align-items center
// 					image
// 						width 150upx
// 						height 150upx
// 				.des
// 					display block
// 					font-size 28upx
// 					margin 30upx 0 5upx
// 					color #666
// 				.price
// 					font-size 32upx
// 					color red
.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 149px;
		line-height: 80upx;
		text-align: center;
		font-size: 17px;
	} 
	.recomend-goods-item2{
		display: inline-block;
		width: 30%;
		height: 240upx;
		margin: 20upx 10upx;
	}
	.img-box{
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.img-box image{
		width: 105px;
		height: 98px;
		margin: 0 0 0 5px;
	}
	.recomend-goods-item2 .des{
		display: block;
		font-size: 17px;
		margin: 17px 0 7px;
		color: #666;
	}
	.recomend-goods-item2 .price{
		font-size: 18px;
		color: red;
	}
						
	.getMore
		width 100%
		height 150upx
		align-items center
		background-color #f4f3f3
		font-size 28upx
		line-height 100upx
</style>
