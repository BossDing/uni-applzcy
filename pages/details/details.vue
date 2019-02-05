<template>
	<view class="content">
		<!-- 分类导航页面头部信息 -->
		<view class="title">
			<uni-icon class="back" type="back" size="30" @click="back"></uni-icon>
			<text class="title-word">日用品频道</text>
			<view class="operateBox">
				<uni-icon class="redo" type="redo" size="30"></uni-icon>
				<uni-icon class="more" type="more-filled" size="30"></uni-icon>
			</view>
		</view>
		<!-- 搜索框 -->
		<view class="input-box" @click="openDetails">
			<uni-icon type="search" size="30" class="search" style="color: #8e8e8e"></uni-icon>
			<input type="text" value="" placeholder="输入关键字搜索" class="input"/>
		</view>
		<!-- 轮播图区域 -->
		<view class="casual">
			<swiper class="swiper-box" indicator-dots="true" autoplay="true" interval="3000" duration="500">
		
				<swiper-item class="swiper" v-for="(item, index) in itemList" :key="index">
					<image :src="item" class="image"></image>
				</swiper-item>
				
			</swiper>
		</view>
		<!-- 商品分类导航 -->
		<view class="navBox">
			<view class="nav-item" @click="enterBrand">
				<image src="../../static/raw_1521984866.png" mode=""></image>
				<text>进口用品</text>
			</view>
			<view class="nav-item" @click="enterBrand">
				<image src="../../static/raw_1523148297.png" mode=""></image>
				<text>日杂用品</text>
			</view>
			<view class="nav-item" @click="enterBrand">
				<image src="../../static/raw_1523148325.png" mode=""></image>
				<text>养生保健</text>
			</view>
			<view class="nav-item" @click="enterBrand">
				<image src="../../static/raw_1521976677.png" mode=""></image>
				<text>家纺针织</text>
			</view>
			<view class="nav-item" @click="enterBrand">
				<image src="../../static/raw_1521984049.png" mode=""></image>
				<text>口腔护理</text>
			</view>
		</view>
		<!-- 今日好货版块 -->
		<view class="goodgoods">
			<text class="title">今日好货</text>
			<text class="subTitle">每天10点上新 错过不再有</text>
			<view class="recomend-goods-item2" @click="enterDetailsPage">
				<view class="img-box">
					<image src="../../static/raw_1521984570.png" mode=""></image>
				</view>
				<text class="des">MEDIHEAL美迪尔惠</text>
				<text class="price">$ 310</text>
				
			</view>
			<view class="recomend-goods-item2" @click="enterDetailsPage">
				<view class="img-box">
					<image src="../../static/raw_1523148325.png" mode=""></image>
				</view>
				<text class="des">MEDIHEAL美迪尔惠</text>
				<text class="price">$ 310</text>
				
			</view>
			<view class="recomend-goods-item2" @click="enterDetailsPage">
				<view class="img-box">
					<image src="../../static/raw_1521984866.png" mode=""></image>
				</view>
				<text class="des">爱他美精装奶粉进口配房</text>
				<text class="price">$ 310</text>
				
			</view>
			<view class="recomend-goods-item2" @click="enterDetailsPage">
				<view class="img-box">
					<image src="../../static/raw_1522116065.png" mode=""></image>
				</view>
				<text class="des">爱他美精装奶粉进口配房</text>
				<text class="price">$ 310</text>
				
			</view>
			<view class="getMoreGoods">
				<view class="button">查看更多 > </view>
			</view>
		</view>
		<!-- 今日秒杀版块 -->
		<view class="goodgoods special">
			<text class="title">今日秒杀</text>
			<text class="subTitle">每天10点上新 秒杀美妆好物</text>
			<view class="recomend-goods-item2" @click="enterDetailsPage">
				<view class="img-box">
					<image src="../../static/raw_1521984570.png" mode=""></image>
				</view>
				<text class="des">MEDIHEAL美迪尔惠</text>
				<text class="price">$ 310</text>
				
			</view>
			<view class="recomend-goods-item2" @click="enterDetailsPage">
				<view class="img-box">
					<image src="../../static/raw_1523148325.png" mode=""></image>
				</view>
				<text class="des">MEDIHEAL美迪尔惠</text>
				<text class="price">$ 310</text>
				
			</view>
			<view class="recomend-goods-item2" @click="enterDetailsPage">
				<view class="img-box">
					<image src="../../static/raw_1521984866.png" mode=""></image>
				</view>
				<text class="des">爱他美精装奶粉进口配房</text>
				<text class="price">$ 310</text>
				
			</view>
			<view class="recomend-goods-item2" @click="enterDetailsPage">
				<view class="img-box">
					<image src="../../static/raw_1522116065.png" mode=""></image>
				</view>
				<text class="des">爱他美精装奶粉进口配房</text>
				<text class="price">$ 310</text>
				
			</view>
			<view class="getMoreGoods">
				<view class="button">查看更多 > </view>
			</view>
		</view>
		<!-- 猜你喜欢版块 -->
		<view class="guess special">
			<!-- 猜你喜欢版块   标题 -->
			<text class="title">猜你喜欢</text>
			<text class="subTitle">小仙女最爱的美妆好物</text>
			<!-- 猜你喜欢版块   内容-->
			<view class="guessGoodsBox">
				<!-- tab选项切换-->
				<view class="topBar">
					<text class="active">热销推荐</text>
					<text class="normal">人气新品</text>
				</view>
				<!-- 商品信息框 -->
				<view class="goodsContentBox">
					<view class="goods-items">
						<image src="../../static/raw_1523148325.png" mode=""></image>
						<view class="des-box">
							<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
							<view class="price">
								<text class="now-price">￥85</text>
								<text class="pre-price">￥195</text>
							</view>
							<view class="addShoppingCar">
								<text>加入购物车</text>
							</view>
						</view>
					</view>
					<view class="goods-items">
						<image src="../../static/raw_1523148325.png" mode=""></image>
						<view class="des-box">
							<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
							<view class="price">
								<text class="now-price">￥85</text>
								<text class="pre-price">￥195</text>
							</view>
							<view class="addShoppingCar">
								<text>加入购物车</text>
							</view>
						</view>
					</view>
					<view class="goods-items">
						<image src="../../static/raw_1523148325.png" mode=""></image>
						<view class="des-box">
							<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
							<view class="price">
								<text class="now-price">￥85</text>
								<text class="pre-price">￥195</text>
							</view>
							<view class="addShoppingCar">
								<text>加入购物车</text>
							</view>
						</view>
					</view>
					<view class="goods-items">
						<image src="../../static/raw_1523148325.png" mode=""></image>
						<view class="des-box">
							<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
							<view class="price">
								<text class="now-price">￥85</text>
								<text class="pre-price">￥195</text>
							</view>
							<view class="addShoppingCar">
								<text>加入购物车</text>
							</view>
						</view>
					</view>
					<view class="goods-items">
						<image src="../../static/raw_1523148325.png" mode=""></image>
						<view class="des-box">
							<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
							<view class="price">
								<text class="now-price">￥85</text>
								<text class="pre-price">￥195</text>
							</view>
							<view class="addShoppingCar">
								<text>加入购物车</text>
							</view>
						</view>
					</view>
					<view class="goods-items">
						<image src="../../static/raw_1523148325.png" mode=""></image>
						<view class="des-box">
							<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
							<view class="price">
								<text class="now-price">￥85</text>
								<text class="pre-price">￥195</text>
							</view>
							<view class="addShoppingCar">
								<text>加入购物车</text>
							</view>
						</view>
					</view>
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
				itemList: [
					'../../static/raw_1523518942.png',
					'../../static/raw_1523518452.png',
					'../../static/raw_1523518942.png',
					'../../static/raw_1523518452.png'
				],
			};
		},
		components: {
			uniIcon,
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			enterDetailsPage() {
				uni.navigateTo({
					url: '../goodsDetails/goodsDetails'
				});
			},
			enterBrand() {
				uni.navigateTo({
					url: '../brand-pages/brand-pages'
				});
			}
		}
	}
</script>
	
<style scoped lang="stylus" ref="stylesheet/stylus">
	.content
		width 100%
		margin-top 70upx
		.title
			width 100%
			height 80upx
			position relative
			display flex
			justify-content center   // 水平居中
			align-items center       
			.back
				width 60upx
				position absolute
				top 10upx
				left 10upx
			.title-word
				display block
				width 100%
				text-align center
			.operateBox
				width 120upx
				position absolute
				top 10upx
				right 5upx
				.redo
					width 50%
		.input-box
			height 100%
			position relative
			margin 10upx 10upx
			background-color #f4f3f3
			border-radius 10upx
			flex 3
			.search
				display inline-block
				position absolute
				top 5upx
				left 0upx
			.input
				display inline-block
				font-size 28upx
				text-align left
				margin-left 50upx
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
		.navBox
			width 100%
			margin 0 auto
			display flex
			justify-content center   // 水平居中
			align-items center       // 垂直居中
			flex-direction row
			.nav-item
				width 17%
				height 100%
				padding 10upx 20upx
				image
					width 100upx
					height 100upx
					margin-top 20upx
					border-radius 50%
					background-color lightblue
					display block
				text
					font-size 24upx
					color #333
		.goodgoods
			width 100%
			.title
				margin-top 20upx
				font-size 40upx
				font-weight 600
				color #333
				letter-spacing 8upx
			.subTitle
				display block
				font-size 24upx
				color #ccc
				text-align center
				margin-bottom 38upx
			.recomend-goods-item2
				display inline-block
				width 22%
				height 240upx
				margin 20upx 10upx
				.img-box
					width 100%
					height 50%
					display flex
					justify-content center
					align-items center
					image
						width 150upx
						height 150upx
				.des
					display block
					font-size 28upx
					margin 30upx 0 5upx
					color #666
				.price
					font-size 32upx
					color red
			.getMoreGoods
				width 100%
				height 220upx
				display flex
				justify-content center
				align-items center  
				.button
					width 35%
					height 80upx
					margin 0 auto
					border-radius 40upx
					font-size 24upx
					letter-spacing 4upx
					border 1px solid #ccc
					display flex
					justify-content center
					align-items center 
		.special
			margin-top 40upx
		.guess
			width 100%
			.title
				margin-top 40upx
				font-size 40upx
				font-weight 600
				color #333
				letter-spacing 8upx
			.subTitle
				display block
				font-size 24upx
				color #ccc
				text-align center
				margin-bottom 38upx
			.guessGoodsBox
				width 100%
				height 100%
				.topBar
					width 100%
					height 78upx
					background-color #ccc
					text
						display inline-block
						text-align center
						line-height 78upx
						width 50%
						height 100%
					.active
						background-color #e44545
						color #fff
					.normal
						background-color #e49a9a
				.goodsContentBox
					width 100%
					height 800upx
					display flex
					justify-content center   // 水平居中
					align-items center       // 垂直居中
					flex-direction column
					flex-wrap wrap
					background-color #f4f3f3
					.goods-items
						width 32%
						height 47%
						margin-bottom 10upx
						background-color #fff
						image
							width 70%
							height 35%
							margin-left 15%
						.des-box
							width 100%
							height 60%
							display flex
							justify-content center
							align-items center 
							flex-direction column
							flex-wrap wrap
							font-size 24upx
							border-top 1px solid #f4f3f3
							.goods-name
								width 95%
								padding-top 8upx
							.price
								width 95%
								margin-top 10upx
								.now-price
									color red
									font-weight 600
									margin-right 20upx
								.pre-price
									color #ccc
									text-decoration line-through
							.addShoppingCar
								width 95%
								height 30%
								background-color #e44545
								display flex
								justify-content center
								align-items center 
								border-radius 10upx
								margin-top 30upx
								color #fff
					
</style>
