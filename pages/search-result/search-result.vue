<template>
	<view class="background">
		<view class="status-contents">
			<view class="status top-view"></view>
		</view>
		<view class="searchBox">
			<view class="backLast" @click="back">
				<image src="../../static/left.png" class="back"></image>
			</view>
			<view class="searchCon">
				<image src="../../static/search.png" class="searchImage"></image>
				<input type="text" placeholder="面膜" />
				<image src="../../static/delet.png" class="searchImage"></image>
			</view>
			<image src="../../static/lattice.png" class="selectedStyle"></image>
		</view>
		<view class="choiceTop">
			<view class="choiceText show">
				<text>综合</text>
				<image src="../../static/bottom.png" class="choiceImg"></image>
			</view>
			<view class="choiceText">
				<text>销量</text>
			</view>
			<view class="choiceText">
				<text>价格</text>
				<view class="choiceImg choiceImgbox">
					<image src="../../static/top.png" class="choiceImage"></image>
					<image src="../../static/bottom.png" class="choiceImage"></image>
				</view>
			</view>
			<view class="choiceText">
				<text>逛超市</text>
			</view>
			<view class="choiceText">
				<text>筛选</text>
				<image src="../../static/screen.png" class="choiceImg"></image>
			</view>
		</view>
		<view class="main">
			<view class="commodity">
				<view class="commodityLeft">
						<image src="../../static/raw_1521984570.png" class="commodityImage"></image>
				</view>
				<view class="commodityRight">
					<view class="commodityBrand">
						<image src="../../static/raw_1522223516.png" class="brandImage"></image>
						<text>韩国直采 品牌直采</text>
					</view>
					<view class="name">
						<text>3件装|MEDIHEAL 美迪惠尔N.M.F针剂水库保湿面膜 10片/盒</text>
					</view>
					<view class="type">
						<text>收敛毛孔|任何肤质|贴片式</text>
					</view>
					<view class="price">
						<text class="allPrice">￥169</text>
						<text class="onePrice">￥单件56.3</text>
					</view>
					<view class="commodityType">
						<text class="business">自营</text>
						<text class="special ">特价</text>
						<text class="evaluate">3000条评价</text>
						<text class="goodEvaluate">97.8%好评</text>
					</view>
				</view>
			</view>
			<view class="commodity">
				<view class="commodityLeft">
						<image src="../../static/raw_1521984570.png" class="commodityImage"></image>
				</view>
				<view class="commodityRight">
					<view class="commodityBrand">
						<image src="../../static/raw_1522223516.png" class="brandImage"></image>
						<text>韩国直采 品牌直采</text>
					</view>
					<view class="name">
						<text>3件装|MEDIHEAL 美迪惠尔N.M.F针剂水库保湿面膜 10片/盒</text>
					</view>
					<view class="type">
						<text>收敛毛孔|任何肤质|贴片式</text>
					</view>
					<view class="price">
						<text class="allPrice">￥169</text>
						<text class="onePrice">￥单件56.3</text>
					</view>
					<view class="commodityType">
						<text class="business">自营</text>
						<text class="special ">特价</text>
						<text class="evaluate">3000条评价</text>
						<text class="goodEvaluate">97.8%好评</text>
					</view>
				</view>
			</view>
			<view class="commodity">
				<view class="commodityLeft">
						<image src="../../static/raw_1521984570.png" class="commodityImage"></image>
				</view>
				<view class="commodityRight">
					<view class="commodityBrand">
						<image src="../../static/raw_1522223516.png" class="brandImage"></image>
						<text>韩国直采 品牌直采</text>
					</view>
					<view class="name">
						<text>3件装|MEDIHEAL 美迪惠尔N.M.F针剂水库保湿面膜 10片/盒</text>
					</view>
					<view class="type">
						<text>收敛毛孔|任何肤质|贴片式</text>
					</view>
					<view class="price">
						<text class="allPrice">￥169</text>
						<text class="onePrice">￥单件56.3</text>
					</view>
					<view class="commodityType">
						<text class="business">自营</text>
						<text class="special ">特价</text>
						<text class="evaluate">3000条评价</text>
						<text class="goodEvaluate">97.8%好评</text>
					</view>
				</view>
			</view>
			<view class="commodity">
				<view class="commodityLeft">
						<image src="../../static/raw_1521984570.png" class="commodityImage"></image>
				</view>
				<view class="commodityRight">
					<view class="commodityBrand">
						<image src="../../static/raw_1522223516.png" class="brandImage"></image>
						<text>韩国直采 品牌直采</text>
					</view>
					<view class="name">
						<text>3件装|MEDIHEAL 美迪惠尔N.M.F针剂水库保湿面膜 10片/盒</text>
					</view>
					<view class="type">
						<text>收敛毛孔|任何肤质|贴片式</text>
					</view>
					<view class="price">
						<text class="allPrice">￥169</text>
						<text class="onePrice">￥单件56.3</text>
					</view>
					<view class="commodityType">
						<text class="business">自营</text>
						<text class="special ">特价</text>
						<text class="evaluate">3000条评价</text>
						<text class="goodEvaluate">97.8%好评</text>
					</view>
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
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	.background{
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
<style  scoped lang="stylus" ref="stylesheet/stylus">
	.searchBox
		width 100%
		height 50px
		background #fff
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
			height 40px
			background #EAEBED
			border-radius 15upx
			display flex
			align-items center   
			justify-content center
			flex-direction row
			.searchImage
				width 25px
				height 20px
				padding 0 20upx
		.selectedStyle
			width 25px
			height 20px
	.choiceTop
		height 50px
		width 100%
		display flex
		align-items center   
		justify-content center
		flex-direction row
		background #fff
		border-bottom 1upx solid #B3B3B3
		border-top 1upx solid #B3B3B3
		.choiceText
			width 25%
			height 100%
			font-size 28upx
			color #B3B3B3 
			font-weight 600
			display flex
			align-items center   
			justify-content center
			flex-direction row
			.choiceImg
				width 20upx
				height 20upx
			.choiceImgbox
				width 20upx
				height 40upx
				display flex
				align-items center   
				justify-content center
				flex-direction column
				.choiceImage
					width 20upx
					height 20upx
		.show
			color #E60B30
	.main
		width 100%
		background #fff
		.commodity
			width 100%
			height 135px
			display flex
			align-items center   
			justify-content center
			flex-direction row
			.commodityLeft
				width 135px
				height 135px
				display flex
				align-items center   
				justify-content center
				flex-direction row
				.commodityImage
					width 100px
					height 100px
			.commodityRight
				width calc(100% - 135px)
				height 100%
				border-bottom 1upx solid #B3B3B3
				.commodityBrand
					margin 3px 0
					color #ABABAB
					display flex
					align-items center   
					justify-content flex-start
					flex-direction row
					font-size 23upx
					.brandImage
						width 15px
						height 15px
				.name
					font-size 30upx
					font-weight 600
				.type
					font-size 23upx
					height 16px
					margin 3px 0
					color #ABABAB
				.price
					font-size 23upx
					color #ABABAB
					height 16px
					.allPrice
						font-size 28upx
						font-weight 600
						color #E60B30
				.commodityType
					height 16px
					margin 5px 0
					font-size 23upx
					display flex
					color #ABABAB
					// align-items center   
					// justify-content flex-start
					flex-direction row
					.business
						padding 0 2px
						color #E60B30
						border 1px solid #E60B30
					.special
						color #fff
						padding 0 2px
						background #E60B30
						margin 0 3px
</style>
