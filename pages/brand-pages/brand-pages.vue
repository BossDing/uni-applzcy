<template>
	<view>
		<view class="status-contents">
			<view class="status top-view"></view>
		</view>
		<view class="header">
			<image src="../../static/raw_1523520317.png" class="topImg"></image>
			<view class="searchBox">
				<view class="backLast" @click="back">
					<image src="../../static/brand-pages/left.png" class="back"></image>
				</view>
				<view class="searchCon">
					<image src="../../static/brand-pages/search.png" class="searchImage"></image>
					<input type="text" placeholder="搜索品牌类商品" />
					<image src="../../static/delet.png" class="deletImage"></image>
				</view>
				<image src="../../static/brand-pages/share.png" class="selectedStyle"></image>
			</view>
		</view>
		<view class="brandInformation">
			<view class="brandInformationTop">
				<view class="brandInformationImgBox">
					<image src="../../static/raw_1521991518.png" class="brandInformationImg"></image>
				</view>
				<view class="brandInformationNameBox">
					<view class="brandInformationName">
						<text>MEDIHEAL 美</text>
						<text class="brandBackground">品牌官方授权</text>
					</view>
					<view class="brandInformationCountry">
						<text>KOR 韩国</text>
						<text> 27.7万粉丝</text>
					</view>
				</view>
				<view class="follow">
					<text>+关注</text>
				</view>
			</view>
			<view class="brandInformationButtom">
				<text>如果你无法简洁的表达你的想法,那只能说明你还不够了解它.如果你无法间接的表达你的想法.</text>
				<view class="moreThisBrand">
					 <text>更多品牌信息</text>
					 <image src="../../static/bottom.png" class="moreLower"></image>
				</view>
			</view>
		</view>
		
		<view class="tab">
			<view class="tabNav">
				<view class="tabList">
					<image src="../../static/brand-pages/home.png" class="tabListImg"></image>
					<text class="show">首页</text>
				</view>
				<view class="tabList">
					<text>67</text>
					<text>商品</text>
				</view>
				<view class="tabList">
					<text>37</text>
					<text>促销</text>
				</view>
				<view class="tabList">
					<text>20</text>
					<text>种草</text>
				</view>
			</view>
			<view class="tabConBox">
				<view class="tabItem">
					<view class="itemTitleTop">
						<image src="../../static/point.png" class="point"></image>
						<text>实事榜单</text>
						<image src="../../static/point.png" class="point"></image>
					</view>
					<text class="itemTitleTopButtom">「每日10点更新品牌热销榜」</text>
					<view class="tebContent">
						<view class="realTime">
							<image src="../../static/raw_1523148325.png" class="realTimeImg"></image>
							<text class="brandPrice">￥53</text>
							<text class="brandPoint yellow">1</text>
						</view>
						<view class="realTime">
							<image src="../../static/raw_1523148325.png" class="realTimeImg"></image>
							<text class="brandPrice">￥53</text>
							<text class="brandPoint gray">2</text>
						</view>
						<view class="realTime">
							<image src="../../static/raw_1523148325.png" class="realTimeImg"></image>
							<text class="brandPrice">￥53</text>
							<text class="brandPoint brown">3</text>
						</view>
					</view>
					<view class="seeAllBox">
						<text class="seeAll">查看全部</text>
					</view>
				</view>
				<view class="tabItem">
					<view class="itemTitleTop">
						<image src="../../static/point.png" class="point"></image>
						<text>品牌种草</text>
						<image src="../../static/point.png" class="point"></image>
					</view>
					<text class="itemTitleTopButtom">「达人心得 教你买买买」</text>
					<view class="bardendTebContent ">
						<view class="bardendTebCon">
							<view class="bardendTebConLeft">
								<image src="../../static/raw_1523146001.jpeg" class="bardendTebConLeftImg"></image>
							</view>
							<view class="bardendTebConRight">
								<text class="bardendTebConName"> MEDIHEAL美迪惠尔胶原蛋...</text>
								<text class="bardText">如果你无法简洁的表达你的想法那只说明你还不够了解它。如果你无法简洁的表达。表达表达...</text>
								<view class="bardendTebConBottom">
									<view class="bardendTebConBottomLeft">
										<image src="../../static/user.png" class="userImg"></image>
										<text>大葡萄Lucy</text>
									</view>
									<view class="bardendTebConBottomRight">
										<image src="../../static/brand-pages/zan.png"  class="userImg"></image>
										<text>662</text>
									</view>
								</view>
							</view>
						</view>
						<view class="bardendTebCon">
							<view class="bardendTebConLeft">
								<image src="../../static/raw_1523146001.jpeg" class="bardendTebConLeftImg"></image>
							</view>
							<view class="bardendTebConRight">
								<text class="bardendTebConName"> MEDIHEAL美迪惠尔胶原蛋...</text>
								<text class="bardText">如果你无法简洁的表达你的想法那只说明你还不够了解它。如果你无法简洁的表达。表达表达...</text>
								<view class="bardendTebConBottom">
									<view class="bardendTebConBottomLeft">
										<image src="../../static/user.png" class="userImg"></image>
										<text>大葡萄Lucy</text>
									</view>
									<view class="bardendTebConBottomRight">
										<image src="../../static/brand-pages/zan.png"  class="userImg"></image>
										<text>662</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="seeAllBox">
						<text class="seeAll">查看全部</text>
					</view>
				</view>
				<view class="tabItem">
					<view class="itemTitleTop">
						<image src="../../static/point.png" class="point"></image>
						<text>精选商品</text>
						<image src="../../static/point.png" class="point"></image>
					</view>
					<text class="itemTitleTopButtom">「精选专属你口味的商品」</text>
					<view class="selected">
						<view class="selectedItem">
							<view class="selectedImgBox">
								<image src="../../static/raw_1521976314.png" class="selectedImg"></image>
							</view>
							<view class="selectedname">
								<text>如果你无法简洁的表达你的想法，那只说明你还不够</text>
							</view>
							<view class="selectedPrice">
								<text class="selectedRed">￥169</text>
								<text>| 单件 ￥56.3</text>
							</view>
							<view class="selectedItemBottom">
								<text class="border">自营</text>
								<text class="background">特价</text>
								<text>97.8%好评</text>
							</view>
						</view>
						<view class="selectedItem">
							<view class="selectedImgBox">
								<image src="../../static/raw_1521976348.png" class="selectedImg"></image>
							</view>
							<view class="selectedname">
								<text>如果你无法简洁的表达你的想法，那只说明你还不够</text>
							</view>
							<view class="selectedPrice">
								<text class="selectedRed">￥169</text>
								<text>| 单件 ￥56.3</text>
							</view>
							<view class="selectedItemBottom">
								<text class="border">自营</text>
								<text class="background">特价</text>
								<text>97.8%好评</text>
							</view>
						</view>
						<view class="selectedItem">
							<view class="selectedImgBox">
								<image src="../../static/raw_1521976677.png" class="selectedImg"></image>
							</view>
							<view class="selectedname">
								<text>如果你无法简洁的表达你的想法，那只说明你还不够</text>
							</view>
							<view class="selectedPrice">
								<text class="selectedRed">￥169</text>
								<text>| 单件 ￥56.3</text>
							</view>
							<view class="selectedItemBottom">
								<text class="border">自营</text>
								<text class="background">特价</text>
								<text>97.8%好评</text>
							</view>
						</view>
						<view class="selectedItem">
							<view class="selectedImgBox">
								<image src="../../static/raw_1521984866.png" class="selectedImg"></image>
							</view>
							<view class="selectedname">
								<text>如果你无法简洁的表达你的想法，那只说明你还不够</text>
							</view>
							<view class="selectedPrice">
								<text class="selectedRed">￥169</text>
								<text>| 单件 ￥56.3</text>
							</view>
							<view class="selectedItemBottom">
								<text class="border">自营</text>
								<text class="background">特价</text>
								<text>97.8%好评</text>
							</view>
						</view>
					</view>
					<view class="seeAllBox">
						<text class="seeAll">查看全部</text>
					</view>
				</view>
				<view class="like">
					<view class="likeTitle">
						<text>喜欢该品牌的人还喜欢</text>
					</view>
					<view class="likebrand">
						<view class="likeBrandTitle">
							<view class="likeName">
								<view class="likeTitleLeft">
									<image src="../../static/f27da758a86543d7.jpg" class="likeImg"></image>
								</view>
								<view class="likeTitleRight">
									<text class="likeBrandName">SNP</text>
									<image src="../../static/raw_1523200004.png" class="likeContryImg"></image>
									<text>美国</text>
								</view>
							</view>
							<view class="intoBrand">
								<text>进入品牌 ></text>
							</view>
						</view>
						<view class="likeContent">
							<view class="likeItem">
								<view class="likeImgBox">
									<image src="../../static/raw_1523148297.png" class="kikeImg"></image>
								</view>
								<view class="likeItemCon">
									<text>美迪惠尔 N.M.F针剂水库保湿面水...</text>
									<view class="likeItemText">
										<text>￥310</text>
										<text class="decoration">￥159</text>
									</view>
								</view>
							</view>
							<view class="likeItem">
								<view class="likeImgBox">
									<image src="../../static/raw_1523148297.png" class="kikeImg"></image>
								</view>
								<view class="likeItemCon">
									<text>美迪惠尔 N.M.F针剂水库保湿面水...</text>
									<view class="likeItemText">
										<text>￥310</text>
										<text class="decoration">￥159</text>
									</view>
								</view>
							</view>
							<view class="likeItem">
								<view class="likeImgBox">
									<image src="../../static/raw_1523148297.png" class="kikeImg"></image>
								</view>
								<view class="likeItemCon">
									<text>美迪惠尔 N.M.F针剂水库保湿面水...</text>
									<view class="likeItemText">
										<text>￥310</text>
										<text class="decoration">￥159</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="bottom">
					<text>已经到底啦~</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			};
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

<style scoped>
	.header{
		height: 125px;
		width: 100%;
		position: relative;
		background: #ABABAB;
		
	}
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
		.topImg
			width 100%
			height 100%
		.searchBox
			position absolute
			top 20upx
			width 100%
			height 50px
			display flex
			align-items center   
			justify-content space-around
			flex-direction row
			.backLast
				
				.back
					width 20px
					height 20px
			.searchCon
				width 80%
				height 30px
				background #EAEBED
				border-radius 38upx
				opacity 0.5
				display flex
				align-items center   
				justify-content center
				flex-direction row
				.searchImage
					width 30px
					height 20px
					padding 0 20upx
				.deletImage
					width 30px
					height 20px
					padding 0 20upx
			.selectedStyle
				width 20px
				height 20px
	.brandInformation
		height 156px
		width 90%
		margin 0 auto
		.brandInformationTop
			display flex
			align-items center   
			justify-content space-between
			flex-direction row
			.brandInformationImgBox
				width 75px
				height 75px
				position relative
				
				.brandInformationImg
					width 75px
					height 75px
					position absolute
					top -30px
					box-shadow 0 0 20px 0 #BFBFBF
		.brandInformationNameBox
			font-size 30upx
			.brandInformationName
				color #101010
				.brandBackground
					font-size 24upx
					margin-left 5px
					padding 0 2px
					background #333
					color #fff
			.brandInformationCountry
				font-size 24upx
				color #6E6E6E
		.follow
			border 1px solid #BBBBBB
			border-radius 20upx
			color #BBBBBB
			font-size 26upx
			padding 3px 7px
		.brandInformationButtom
			font-size 28upx
			color #6E6E6E
			.moreThisBrand
				margin-top 10px 
				text-align center
				color #C2C2C2
				display flex
				align-items center   
				justify-content center
				flex-direction row
				.moreLower
					width 10px
					height 10px
	
	.tab
		width 95%
		margin 0 auto
		.tabNav
			display flex
			align-items center   
			justify-content center
			flex-direction row
			font-size 26upx
			color #6E6E6E
			.tabList
				width 25%
				display flex
				align-items center   
				justify-content center
				flex-direction column
				.tabListImg
					width 24px
					height 24px
				.show
					color #E51C23
					border-bottom 3px solid #E51C23
		.tabConBox
			.tabItem
				width 90%
				margin 0 auto
				.itemTitleTop
					text-align center
					color #2E2E2E
					margin-top 30px
					font-size 35upx
					.point
						width 10px
						height 10px
				.itemTitleTopButtom
					font-size 24upx
					color #2E2E2E
					display block
					width 100%
					text-align center
					margin-bottom 20px
				.tebContent
					display flex
					align-items center   
					justify-content space-around
					flex-direction row
					.realTime
						text-align center
						position relative
						display flex
						align-items center   
						justify-content center
						flex-direction column
						.brandPoint
							position absolute
							left 5px
							top 5px
							width 20px
							height 20px
							line-height 20px
							border-radius 50%
							color #fff
						.realTimeImg
							width 100px
							height 100px
						.brandPrice
							font-size 24upx
							color #5E5E5E
						.yellow
							background #F2C144
						.gray
							background #DBD8D5
						.brown
							background #B87849
				.bardendTebContent
					.bardendTebCon
						display flex
						align-items center   
						justify-content space-between
						flex-direction row
						height 170px
						border-bottom 1px solid #DEDEDE
						.bardendTebConLeft
							width 140px
							height 140px
							.bardendTebConLeftImg
								width 100%
								height 100%
						.bardendTebConRight
							color #A3A3A3
							font-size 26upx
							width calc(100% - 150px)
							height 140px
							position relative
							.bardendTebConName
								display block
								font-weight 550
								color #333
								overflow hidden
								text-overflow ellipsis
								white-space nowrap
							.bardText
								display block
								margin 10px 0
							.bardendTebConBottom
								width 100% 
								position absolute
								bottom 0
								display flex
								align-items center   
								justify-content space-between
								flex-direction row
								.bardendTebConBottomLeft
									width 60%
									.userImg
										width 20px
										height 20px
								.bardendTebConBottomRight
									width 40%
									text-align right
									.userImg
										width 20px
										height 20px
				.selected
					
					display flex
					align-items center   
					justify-content center
					flex-wrap wrap 
					flex-direction row
					.selectedItem
						width 50%
						color #ABABAB
						font-size 23upx
						.selectedImgBox
							width 128px
							height 128px
							margin 0 auto
							.selectedImg
								width 100%
								height 100%
						.selectedname
							margin-top 10px
							margin-right 10px
							color #101010
							font-size 24upx
						.selectedPrice
							margin 7px 0
							.selectedRed
								color #E60B30
								font-size 28upx
								font-weight 550
						.selectedItemBottom
							.border
								border 1px solid #E60B30
								color #E60B30
								padding 0 2px
								border-radius 2px
							.background
								background #E60B30
								margin-left 4px
								margin-right 14px
								color #fff
								padding 1px 2px
								border-radius 2px
				.seeAllBox
					text-align center
					margin 20px 0
					.seeAll
						color #5E5E5E
						font-size 14px
						padding 2px 8px
						border-radius 22px
						border 1px solid #BBBBBB
		.like
			width 90%
			margin 0 auto
			.likeTitle
				color #666666
				margin-top 40px
				border-bottom 1px solid #DEDEDE
				font-size 26upx
				padding 10px 10px
			.likebrand
				width 100%
				.likeBrandTitle
					width 100%
					margin 15px 0
					display flex
					align-items center   
					justify-content center
					flex-direction row
					.likeName
						width 50%
						display flex
						align-items center   
						justify-content flex-start
						flex-direction row
						text-align left
						.likeTitleLeft
							height 45px
							width 45px
							border 1px solid #d3d3d3
							display flex
							justify-content center
							flex-direction column
							.likeImg
								width 43px
								height 21px
						.likeTitleRight
							margin-left 10px
							color #666666
							font-size 23upx
							.likeBrandName
								display block
								color #333
								font-size 29upx
								font-weight 550
							.likeContryImg
								width 17px
								height 17px
					.intoBrand
						text-align right
						width 50%
						color #666666
						font-size 24upx
				.likeContent
					width 100%
					display flex
					align-items center   
					justify-content center
					flex-wrap wrap
					flex-direction row
					.likeItem
						width 33%
						.likeImgBox
							width 90px
							height 90px
							.kikeImg
								width 100%
								height 100%
						.likeItemCon
							font-size 24upx
							color #101010
							.likeItemText
								text-align center
								color #E31436
								.decoration
									text-decoration line-through
									color #ABABAB
									
		.bottom
			color #A3A3A3
			text-align center
			font-size 24upx
			margin 20px 0
</style>
