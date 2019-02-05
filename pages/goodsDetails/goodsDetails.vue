<template>
	<view class="content">
		<!-- 头部图片展示页面 -->
		<view class="mianImageBox">
			<!-- 返回按钮、分享按钮 -->
			<view class="operateBox">
				<uni-icon class="titleIcon" type="arrowleft" size="30" @click="back"></uni-icon>
				<uni-icon class="titleIcon right" type="upload" size="30"></uni-icon>
			</view>
			<!-- 商品轮播图片展示区域 -->
			<view class="casual">
				<swiper class="swiper-box" indicator-dots="true" autoplay="true" interval="3000" duration="500">
			
					<swiper-item class="swiper" v-for="(item, index) in itemList" :key="index">
						<image :src="item" class="image"></image>
					</swiper-item>
					
				</swiper>
			</view>
			<!-- 价格栏 -->
			<view class="price">
				<text>￥169.00</text>
				<text>单价￥56.4</text>
				<text>特价</text>
			</view>
			<!-- 商品信息栏 -->
			<view class="goodsInfor">
				<view class="discountCard">
					<text>V</text>
					<text>96折扣</text>
					<text>黑卡下单再享96折</text>
					<text>开卡 ></text>
				</view>
				<view class="goodsdes">
					<view class="choose-kinds">
						<text>1件装 | 单价79元</text>
						<text class="ex">3件装 | 单件56.4元</text>
					</view>
					<view class="goods-name">
						<text class="self">自营</text>
						<text clas="all-name">3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂量水库保湿面膜 10片/盒</text>
						<text class="details-des">韩国MBS/KBS/SBS三大电视台共同推荐！赴韩必买！NMF天然保湿因子强力补水，每敷一篇相当于做一次深层补水SPA。收缩毛孔，保湿锁水，晒后镇静都需要它！</text>
					</view>
					<view class="other-des">
						<view class="origin">
							<image class="img" src="../../static/raw_1522223516.png" mode=""></image>
							<text>韩国品牌</text>
						</view>
						<view class="method">
							<image src="../../static/fly.png" mode=""></image>
							<text>跨境商品</text>
						</view>
					</view>
				</view>
				<view class="deliverInfor">
					<view class="to">
						<text class="first">配送</text>
						<text class="to">至</text>
						<text>广州荔湾区</text>
						<text class="icon"> ></text>
					</view>
					<view class="freight">
						<text class="first">运费</text>
						<text>免运费</text>
						<text class="icon"> ></text>
						
					</view>
					<view class="intro">
						<text class="first">说明</text>
						<text class="des">假一赔十 | 7天无忧退货 | 自营保税仓发货 | 黑卡会员96折</text>
						<text class="icon"> ></text>
					</view>
				</view>
				<!-- 商品评价 -->
				<view class="remark">
					<view class="remark-title">
						<text>商品评价 (38925)</text>
						<text>好评 98.7%</text>
						<text class="icon"> ></text>
					</view>
					<view class="remark-box">
						<view class="remark-item">
							<view class="left">
								<view class="user-infor">
									<image src="../../static/raw_1523146001.jpeg" mode=""></image>
									<text class="user-name">用户昵称</text>
								</view>
								<text class="thought">心得</text>
								<text class="thought-des">对于面膜来说，我一直觉得只要做好补水就是好的面膜了，这个面膜补水非常好！</text>
							</view>
							<view class="img-box">
								<image src="../../static/raw_1523146543.jpeg" mode=""></image>
							</view>
						</view>
						
						<view class="remark-item">
							<view class="left">
								<view class="user-infor">
									<image src="../../static/raw_1523146001.jpeg" mode=""></image>
									<text class="user-name">用户昵称</text>
								</view>
								<text class="thought">心得</text>
								<text class="thought-des">对于面膜来说，我一直觉得只要做好补水就是好的面膜了，这个面膜补水非常好！</text>
							</view>
							<view class="img-box">
								<image src="../../static/raw_1523146543.jpeg" mode=""></image>
							</view>
						</view>
					</view>
				</view>
				<!-- 问大家 -->
				<view class="ask">
					<text class="ask-title">
						<text>问大家 (84)</text>
						<text class="icon"> ></text>
					</text>
					
					<view class="ask-item">
						<view class="text">
							<text class="askS">问</text>
							<text class="askW">为什么和我在韩国买的不一样，面膜布质地...</text>
							<text class="reply">1个回答</text>
						</view>
						
						<view class="text">
							<text class="askS">问</text>
							<text class="askW">这个价格是三盒？</text>
							<text class="reply">1个回答</text>
						</view>
						
						<view class="text">
							<text class="askS">问</text>
							<text class="askW">这个质量到底好不好？请告知一下</text>
							<text class="reply">1个回答</text>
						</view>
					</view>
				</view>
				<!-- 进入品牌专区 -->
				<view class="brandStore">
					<view class="brand-title">
						<image src="../../static/f27da758a86543d7.jpg" mode=""></image>
						<view class="good-items">
							<text>MEDIHEAL 美迪惠尔</text>
							<text>在售商品 69件</text>
						</view>
						<text class="enter">进入品牌</text>
						<text class="icon"> ></text>
					</view>
					<!-- 商品版块1 -->
					<view class="goodgoods">
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
								<image src="../../static/raw_1523148325.png" mode=""></image>
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
					</view>
					<!-- 商品版块2 -->
					<view class="guessGoodsBox">
						<!-- tab选项切换-->
						<view class="topBar">
							<view class="active">
								<text class="active">相似推荐</text>
							</view>
							<view class="normal">
								<text class="normal">同类热销排行</text>
							</view>
						</view>
						<!-- 商品信息框 -->
						<view class="goodsContentBox">
							<view class="goods-item">
								<image src="../../static/raw_1523148325.png" mode=""></image>
								<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
								<text class="now-price">￥85</text>
							</view>
							<view class="goods-item">
								<image src="../../static/raw_1523148325.png" mode=""></image>
								<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
								<text class="now-price">￥85</text>
							</view>
							<view class="goods-item">
								<image src="../../static/raw_1523148325.png" mode=""></image>
								<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
								<text class="now-price">￥85</text>
							</view>
							<view class="goods-item">
								<image src="../../static/raw_1523148325.png" mode=""></image>
								<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
								<text class="now-price">￥85</text>
							</view>
							<view class="goods-item">
								<image src="../../static/raw_1523148325.png" mode=""></image>
								<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
								<text class="now-price">￥85</text>
							</view>
							<view class="goods-item">
								<image src="../../static/raw_1523148325.png" mode=""></image>
								<text class="goods-name">美迪尔惠 N.M.F水润保湿面膜-玄彬面</text>
								<text class="now-price">￥85</text>
							</view>
						</view>
						<view class="button-box">
							<text class="details">图文详情</text>
							<text>购买咨询</text>
						</view>
						<view class="imgDetails">
							<view class="imgDetails-title">
								<text>图文详情</text>
							</view>
							<view class="productsBox">
								<text class="infor">产品信息</text>
								<view class="origin">
									<view class="infor-items">
										<text>质地</text>
										<text>水状</text>
									</view>
									<view class="infor-items">
										<text>品名</text>
										<text>蜂蜜补水保湿面膜</text>
									</view>
									<view class="infor-items">
										<text>保质期</text>
										<text>3年</text>
									</view>
									<view class="infor-items">
										<text>试用部位</text>
										<text>面部</text>
									</view>
									<view class="infor-items">
										<text>试用群体</text>
										<text>中性</text>
									</view>
									<view class="infor-items">
										<text>功能</text>
										<text>补水温润 湿润</text>
									</view>
									
								</view>
							</view>
							<view class="getMore">
								<text>展开</text>
								<uni-icon type="arrowdown" size="30"></uni-icon>
							</view>
							<view class="brandAuth">
								<text>品牌</text>
								<text>授权</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 底部购物车功能 -->
			<view class="shoppingCarBox">
				<view class="collection">
					<image src="../../static/like.png" mode=""></image>
					<text class="collection-text">收藏</text>
				</view>
				<view class="shoppingCar">
					<image src="../../static/shoppingCar.png" mode=""></image>
					<text class="shoppingCar-text">购物车</text>
				</view>
				<text class="add">加入购物车</text>
				<text class="buy">立即购买</text>
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
					'../../static/raw_1522116065.png',
					'../../static/raw_1522116070.png',
					'../../static/raw_1522116062.png'
				],
			};
		},
		components: {
			uniIcon
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.content
		width 100%
		margin-top 70upx
		.mianImageBox
			width 100%
			height 100%
			background-color #fff
			display flex
			align-items center       // 垂直居中
			flex-direction column
			position relative
			.operateBox
				width 95%
				height 10%
				.titleIcon
					width 49%
				.right
					text-align right
					margin-right 5upx
			.casual
				width 100%
				height 600upx
				.swiper-box
					width 100%
					height 100%
					.swiper
						width 100%
						height 100%
						display flex
						justify-content center
						align-items center
						.image
							width 280upx
							height 300upx
			.price
				width 100%
				height 45px
				background-color #fff
				text:nth-child(1)
					font-size 44upx
					color red
					font-weight 600
					margin-right 24upx
				text:nth-child(2)
					font-size 24upx
					color #7c7c7c
				text:nth-child(3)
					display inline-block
					padding 5upx 15upx
					font-size 24upx
					color #fff
					background-color #e44545
					margin-left 15upx
			.goodsInfor
				width 95%
				// height 1000upx
				display flex
				justify-content center
				align-items center
				flex-wrap wrap
				.discountCard
					padding-left 20upx
					width 100%
					height 60upx
					background-color #f4f3f3
					text:nth-child(1)
						font-size 22upx
						color #fff
						background-color #333
						padding 5upx 10upx
					text:nth-child(2)
						font-size 22upx
						color #fff
						background-color #666
						padding 5upx 10upx
					text:nth-child(3)
						font-size 24upx
						color #333
						letter-spacing 3upx
						margin-left 20upx
						margin-right 240upx
					text:nth-child(4)
						display inline-block
						font-size 24upx
						line-height 60upx
						text-align center
						width 80upx
						height 60upx
						padding 0 12upx
						background-color #ccc
				.goodsdes
					width 100%
					height 420upx
					padding-top 30upx
					.choose-kinds
						width 100%
						height 68upx
						font-size 24upx
						text
							padding 10upx 20upx
							border-radius 20upx
							background-color #fff
						text:nth-child(1)
							border 1px solid #ccc
						.ex
							color #e44545
							margin-left 20upx
							border 1px solid #e44545
					.goods-name
						width 100%
						height 250upx
						font-size 32upx
						background-color #fff
						line-height 45upx
						.self
							color #e44545
							font-size 24upx
							padding 3upx 12upx
							border 1px solid #e44545
							margin-right 20upx
						.details-des
							display block
							margin 10upx 0
							font-size 24upx
							color #7c7c7c
							letter-spacing 2upx
					.other-des
						width 100%
						height 80upx
						font-size 24upx
						color #333
						background-color #f4f3f3
						display flex
						justify-content left
						align-items center
						.origin, .method
							width 30%
							image
								width 40upx
								height 30upx
								margin -2upx 20upx
							.img
								background-color #fff
							text
								display inline-block
								line-height 80upx
								
				.deliverInfor
					width 100%
					height 330upx
					font-weight 600
					.to
						width 100%
						height 110upx
						line-height 110upx
						font-size 28upx
						border-top 1px solid #f4f3f3
						border-bottom 1px solid #f4f3f3
						position relative
						.first
							margin 0 22upx
						.to
							border none
							margin-right 15upx
						.icon
							font-size 32upx
							position absolute
							top 3upx
							right -2upx
					.freight
						width 100%
						height 110upx
						line-height 110upx
						font-size 28upx
						background-color #fff
						position relative
						.first
							margin 0 22upx
						.icon
							font-size 32upx
							position absolute
							top 3upx
							right -2upx
					.intro
						width 100%
						height 110upx
						line-height 110upx
						font-size 28upx
						border-top 1px solid #f4f3f3
						position relative
						.first
							margin 0 18upx
						.des
							display inline-block
							font-size 24upx
							font-weight 400
							height 60upx
							color #ccc
						.icon
							font-size 32upx
							position absolute
							top 3upx
							right -2upx
				.remark
					width 100%
					height 400upx
					overflow-x scroll
					border-bottom 1px solid #f4f3f3
					.remark-title
						width 100%
						height 80upx
						display flex
						font-size 24upx
						align-items center
						position relative
						text:nth-child(1)
							font-weight 600
							width 50%
							text-align left
						text:nth-child(2)
							font-weight 550
							width 50%	
							color #e44545
							text-align right
							letter-spacing 3upx
							margin-right 20upx
						.icon
							font-weight 600
							font-size 32upx
							position absolute
							top 24upx
							right -2upx
					.remark-box
						width 1200upx
						height 280upx
						background-color #ccc
						display flex
						flex-wrap nowrap
						.remark-item
							width 600upx
							height 100%
							background-color #fff
							display flex
							flex-wrap nowrap
							.left
								padding-left 20upx
								width 50%
								.user-infor
									width 100%
									padding-top 10upx
									display flex
									justify-content left
									align-items center
									image
										width 50upx 
										height 50upx
										border-radius 50%
									.user-name
										font-size 24upx
										margin-left 20upx
										color #7c7c7c
								.thought
									border 1px solid #e44545
									font-size 24upx
									color #e44545
									padding 1upx 20upx
								.thought-des
									font-size 24upx
									margin-left 25upx
							.img-box
								width 50%
								image
									width 100%
									height 280upx
				.ask
					width 100%
					height 280upx
					.ask-title
						width 100%
						height 80upx
						display flex
						font-size 24upx
						align-items center
						position relative
						background-color #fff
						text:nth-child(1)
							font-weight 600
							width 100%
							text-align left
						.icon
							font-weight 600
							font-size 32upx
							position absolute
							top 24upx
							right -2upx
					.ask-item
						width 100%
						height 200upx
						.text
							width 100%
							display flex
							justify-content left   // 水平居中
							align-items center       // 垂直居中
							flex-direction row
							font-size 24upx
							margin-bottom 20upx
							background-color #fff
							.askS
								flex 0.5
								color #e44545
								padding 2upx
								border 1px solid #e44545
							.askW
								flex 13
								margin-left 15upx
							.reply
								flex 2						
				.brandStore
					width 100%
					height 2000upx
					.brand-title
						width 100%
						display flex
						justify-content center   // 水平居中
						align-items center       // 垂直居中
						flex-direction row
						margin-bottom 30upx
						image
							flex 1.2
							height 100upx
						.good-items
							flex 6
							color #333
							margin-left 20upx
							font-size 24upx
							text
								width 100%
								display block
							
						.enter
							font-size 24upx
							letter-spacing 2upx
							color #e44545
							margin-right 10upx
					.goodgoods
						width 100%
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
					.guessGoodsBox
						width 100%
						height 1500upx 
						margin-top 70upx
						background-color #fff
						.topBar
							width 100%
							height 80upx
							display flex
							justify-content left   // 水平居中
							align-items center       // 垂直居中
							flex-direction row
							text-align center
							font-size 24upx
							font-weight 600
							border-bottom 1px solid #f4f3f3
							.active
								flex 1
								.active
									height 100%
									padding-bottom 20upx
									border-bottom 3px solid #333
							.normal
								flex 1
						.goodsContentBox
							width 100%
							height 720upx
							margin-bottom 20upx
							display flex
							justify-content center   // 水平居中
							align-items center     // 垂直居中
							flex-direction column
							flex-wrap wrap
							.goods-item
								width 32%
								height 47%
								margin-bottom 10upx
								display flex
								justify-content center   // 水平居中
								align-items center 
								flex-direction column
								image
									width 150upx
									height 200upx
								.goods-name
									display block
									font-size 24upx
									width 200upx
								.now-price
									color #e44545
									margin 10upx 0
									font-size 24upx
						.button-box	
							width 100%
							height 60upx
							display flex
							justify-content center   // 水平居中
							align-items center       // 垂直居中
							flex-direction row
							text-align center
							text
								flex 1
								border 1px solid #333
								font-size 24upx
								padding 15upx
								letter-spacing 2upx
							.details
								color #fff
								background-color #333
						.imgDetails
							width 100%
							height 800upx
							.imgDetails-title
								width 100%
								height 100upx
								font-size 24upx
								font-weight 600
								letter-spacing 2upx
								display flex
								justify-content center   // 水平居中
								align-items center       // 垂直居中
								flex-direction row
							.productsBox
								.infor
									display block
									width 100%
									height 80upx
									color #333
									font-size 32upx
									font-weight 600
								.origin
									width 98%
									margin 0 auto
									border 1px solid #f4f3f3
									background-color #fff
									.infor-items
										width calc(100% - 20upx)
										text-align left
										
										padding-left 20upx
										font-size 24upx
										border-bottom 1px solid #f4f3f3
										text:nth-child(1)
											display inline-block
											width 20%
											padding 23upx 0 
											border-right 1px solid #f4f3f3
											
										text:nth-child(2)
											display inline-block
											width 65%
											font-wight 600
											padding 23upx 0 
											margin-left 20upx
							.getMore
								width 100%
								height 80upx
								line-height 80upx
								text-align center
								font-size 24upx
								margin-bottom 40upx
							.brandAuth
								width 120upx
								height 120upx
								margin 20upx auto
								border-radius 50%
								text-align center
								margin-top 60upx
								border 1px solid #ccc
								margin-bottom 200upx
								
								text
									display flex
									margin-top 17upx
									justify-content center
									align-items center
									line-height 30upx
									color #333
									font-size 32upx
											
			.shoppingCarBox	
				width 100%
				height 100upx
				display flex
				justify-content center
				align-items center
				font-size 24upx
				position fixed
				bottom 0 
				left 0
				.collection
					flex 1
					height 100%
					display flex
					justify-content center
					align-items center
					flex-direction column
					background-color #fff
					border-right 1px solid #f4f3f3
					border-top 1px solid #f4f3f3
					image
						width 40upx
						height 40upx
				.shoppingCar
					flex 1
					height 100%
					flex-direction column
					display flex
					justify-content center
					align-items center
					border-top 1px solid #f4f3f3
					background-color #fff
					image
						width 40upx
						height 40upx
				.add
					flex 3
					height 100%
					display flex
					color #fff
					font-size 28upx
					justify-content center
					align-items center
					background-color #333
				.buy
					flex 3
					height 100%
					display flex
					font-size 28upx
					justify-content center
					align-items center
					color #fff
					background-color #E60B30
						
							
								
							
								
								
							
								
								
</style>
