<template>
	<view class="content">
		<view class="topTitle">
			<view class="select " :class="{show:!isShowAll}"  @click="all">
				<text>全部</text>
			</view>
			<view class="select" :class="{show:isShowAll}" @click="nonepay">
				<text>待付款</text>
			</view>
			<view class="select">
				<text>待发货</text>
			</view>
			<view class="select">
				<text>待收货</text>
			</view>
			<view class="select">
				<text>评价</text>
			</view>
		</view>
		<view class="item"  v-if="!isShowAll">
			<view class="commodity">
				<view class="commodityTitle">
					<text class="TitleLeft">2018-12-24</text>
					<view class="commodityTitleRight">
						<text>交易成功|</text>
						<uni-icon type="trash" size="25" class="trash" color="#737373"></uni-icon>
					</view>
				</view>
				<view class="commodityCon">
					<view class="imgBox">
						<image src="../../static/raw_1521984570.png" class="commodityImg"></image>
					</view>
					<view class="commodityConText">
						<view class="ConText">
							<view class="commodityName">
								<text>3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒</text>
							</view>
							<view class="commodityNum">
								<text>￥169.00</text>
								<text class="commodityNumBlock">x 2</text>
							</view>
						</view>
						<view class="ConTextBottom">
							<text>查看产品使用说明</text>
						</view>
					</view>
				</view>
				<view class="commodityPrice">
					<text>共2件 </text>
					<text>应付总额 : </text>
					<text class="priceRed">￥169.00</text>
				</view>
				<view class="commodityBtn">
					<text class="paybtn">再次购买</text>
					<text class="paybtn">查看物流</text>
				</view>
			</view>
			<view class="commodity">
				<view class="commodityTitle">
					<text class="TitleLeft">2018-12-24</text>
					<view class="commodityTitleRight">
						<text>待付款</text>
						<uni-icon type="trash" size="25" class="trash" color="#737373"></uni-icon>
					</view>
				</view>
				<view class="commodityCon">
					<view class="imgBox">
						<image src="../../static/raw_1521984152.png" class="commodityImg"></image>
					</view>
					<view class="commodityConText">
						<view class="ConText">
							<view class="commodityName">
								<text>SK-II/SK2护肤精华露神仙水75ml+大红瓶15ml+卸妆+洁面 套装</text>
							</view>
							<view class="commodityNum">
								<text>￥720.00</text>
								<text class="commodityNumBlock">x 1</text>
							</view>
						</view>
						<view class="ConTextBottom">
							<text>查看产品使用说明</text>
						</view>
					</view>
				</view>
				<view class="commodityPrice">
					<text>共1件 </text>
					<text>应付总额 : </text>
					<text class="priceRed">￥720.00</text>
				</view>
				<view class="commodityBtn">
					<text class="paybtn">取消订单</text>
					<text class="paybtn nowPay">立即付款</text>
				</view>
			</view>
			<view class="commodity">
				<view class="commodityTitle">
					<text class="TitleLeft">2018-12-24</text>
					<view class="commodityTitleRight">
						<text>待发货</text>
						<uni-icon type="trash" size="25" class="trash" color="#737373"></uni-icon>
					</view>
				</view>
				<view class="commodityCon">
					<view class="imgBox">
						<image src="../../static/raw_1521976632.png" class="commodityImg"></image>
					</view>
					<view class="commodityConText">
						<view class="ConText">
							<view class="commodityName">
								<text>欧美时尚细跟夜店鞋 2018夏季新款丁字带漆皮铆钉饰凉鞋 淑女范儿 女神必备</text>
							</view>
							<view class="commodityNum">
								<text>￥369.00</text>
								<text class="commodityNumBlock">x 1</text>
							</view>
						</view>
						<view class="ConTextBottom">
							<text>查看产品使用说明</text>
						</view>
					</view>
				</view>
				<view class="commodityPrice">
					<text>共1件 </text>
					<text>应付总额 : </text>
					<text class="priceRed">￥369.00</text>
				</view>
				<view class="commodityBtn">
					<text class="paybtn">再次购买</text>
					<text class="paybtn">查看物流</text>
				</view>
			</view>
		</view>
		<view class="item"  v-if="isShowAll">
			<view class="commodity">
				<view class="commodityTitle">
					<text class="TitleLeft">2018-12-24</text>
					<view class="commodityTitleRight">
						<text>待付款</text>
						<uni-icon type="trash" size="25" class="trash" color="#737373"></uni-icon>
					</view>
				</view>
				<view class="commodityCon">
					<view class="imgBox">
						<image src="../../static/raw_1521984152.png" class="commodityImg"></image>
					</view>
					<view class="commodityConText">
						<view class="ConText">
							<view class="commodityName">
								<text>SK-II/SK2护肤精华露神仙水75ml+大红瓶15ml+卸妆+洁面 套装</text>
							</view>
							<view class="commodityNum">
								<text>￥720.00</text>
								<text class="commodityNumBlock">x 1</text>
							</view>
						</view>
						<view class="ConTextBottom">
							<text>查看产品使用说明</text>
						</view>
					</view>
				</view>
				<view class="commodityPrice">
					<text>共1件 </text>
					<text>应付总额 : </text>
					<text class="priceRed">￥720.00</text>
				</view>
				<view class="commodityBtn">
					<text class="paybtn">取消订单</text>
					<text class="paybtn nowPay">立即付款</text>
				</view>
			</view>
			<view class="wantBuy">
				<text class="wantBuyText">你可能还想买</text>
			</view>
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
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				isShowAll:false,
			};
		},
		components: {
			uniIcon,
		},
		methods:{
			all(){
					this.isShowAll = !this.isShowAll
			},
			nonepay(){
					this.isShowAll = !this.isShowAll
			},
		}
	}
</script>

<style  scoped lang="stylus" ref="stylesheet/stylus">
	.content
		
		.topTitle
			border-top 1px solid #d3d3d3
			border-bottom 1px solid #d3d3d3
			display flex
			justify-content center 
			align-items center   
			flex-direction row
			height 50px
			.select
				width 25%
				height 100%
				text-align center
				font-size 30upx
				line-height 50px
			.show
				color #E82050
				border-bottom 3px solid #E82050
		.item
			width 95%
			margin 0 auto
			.commodity
				margin-bottom 30px
				font-size 26upx
				color #444444
				.commodityTitle
					display flex
					justify-content center 
					align-items center   
					flex-direction row
					margin 13px
					.TitleLeft
						width 50%
						text-align left
					.commodityTitleRight
						width 50%
						text-align right
				.commodityCon
					display flex
					justify-content center 
					align-items center   
					flex-direction row
					height 80px
					border-bottom 1px solid #e3e3e3
					border-top 1px solid #e3e3e3
					.imgBox
						height 80px
						width 80px
						display flex
						justify-content center 
						align-items center   
						flex-direction row
						.commodityImg
							width 50px
							height 50px
					.commodityConText
						width calc(100% - 100px)
						.ConText
							display flex
							justify-content center 
							align-items center   
							flex-direction row
							.commodityName
								font-size 25upx
							.commodityNum
								color #858585
								text-align right
								.commodityNumBlock
									display block
						.ConTextBottom
							margin-top 7px
							color #E82050
							font-size 23upx
							text-align right
				.commodityPrice
					color #5C5C5C
					text-align right
					margin 15px 10px
					.priceRed
						color #E82050
						font-size 29upx
						font-weight 550
				.commodityBtn
					color #5E5E5E
					text-align right
					.paybtn
						border 1px solid #BBBBBB
						padding 3px 7px
						border-radius 11px
						margin 0 5px
					.nowPay
						background #E82050
						color #fff
						border none
			.wantBuy
				text-align center
				position relative
				border-bottom 1px solid #d3d3d3
				font-size 24upx
				margin 40px 20px
				.wantBuyText
					transform translate(-50%,0)
					position absolute
					bottom -10px
					left 50%
					color #5E5E5E
					background #fff
					padding 0 5px
					
					
			.selected
				display flex
				align-items center   
				justify-content center
				flex-wrap wrap 
				flex-direction row
				margin 20px 0
				.selectedItem
					width 50%
					color #ABABAB
					font-size 23upx
					margin 10px 0
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
			
</style>
