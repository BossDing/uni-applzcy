<template>
	<view class="content">
		<view class="normal_content">
			<!-- 购物车头部信息 -->
			<view class="title">
				<text class="theme">购物车(5)</text>
				<view class="operate">
					<text class="edit">编辑</text>
					<uni-icon class="msg" type="chatboxes" size="30"></uni-icon>
				</view>
			</view>
			<!-- 配送地址选择 -->
			<view class="address">
				<uni-icon class="addressIcon" type="location-filled" size="30"></uni-icon>
				<text class="addressDes font">送至：</text>
				<text class="addressDes">绵阳培城区 ></text>
			</view>
			<!-- 购物车商品信息 -->
			<view class="shoppingCarBox">
				<!-- 店铺抬头 -->
				<view class="storeTitle">
					<text class="empty"></text>
					<text class="store-Kind">自营保税仓</text>
				</view>
				<!-- 商品详情 -->
				<!-- 商品1 -->
				<view class="goodsItem">
					<view class="empty" @click="clickMethods1">
						<image v-if="isclick1" src="../../static/choose.png" mode=""></image>
					</view>
					<view class="img-box">
						<image src="../../static/raw_1521984570.png" mode=""></image>
					</view>
					<view class="infor-des">
						<view class="top">
							<view class="goods-detail">
								<text class="special normal">特价</text>
								<text class="goods-name normal">3件装|MEDIHEAL美迪尔惠</text>
								<text class="price">￥169.00</text>
							</view>
							<view class="goods-detail">
								<text class="goods-content">NMF针剂水库保湿面膜10元/盒</text>
								<text class="reduce-price">已降16</text>
							</view>
						</view>
						<view class="bottom">
							<view class="count">
								<text>x 2</text>
							</view>
							<view class="tax">
								<text>税费：</text>
								<text>￥24.00</text>
								<uni-icon class="arrowdown" type="arrowdown" size="30"></uni-icon>
							</view>
						</view>
					</view>
				</view>
				<!-- 商品2 -->
				<view class="goodsItem">
					<view class="empty" @click="clickMethods2">
						<image v-if="isclick2" src="../../static/choose.png" mode=""></image>
					</view>
					
					<view class="img-box">
						<image src="../../static/raw_1521984570.png" mode=""></image>
					</view>
					<view class="infor-des">
						<view class="top">
							<view class="goods-detail">
								<text class="special normal">特价</text>
								<text class="goods-name normal">3件装|MEDIHEAL美迪尔惠</text>
								<text class="price">￥169.00</text>
							</view>
							<view class="goods-detail">
								<text class="goods-content">NMF针剂水库保湿面膜10元/盒</text>
								<text class="reduce-price">已降16</text>
							</view>
						</view>
						<view class="bottom">
							<view class="count">
								<text>x 2</text>
							</view>
							<view class="tax">
								<text>税费：</text>
								<text>￥24.00</text>
								<uni-icon class="arrowdown" type="arrowdown" size="30"></uni-icon>
							</view>
						</view>
					</view>
				</view>
				<!-- 商品3 -->
				<view class="goodsItem">
					<view class="empty" @click="clickMethods3">
						<image v-if="isclick3" src="../../static/choose.png" mode=""></image>
					</view>
					
					
					
					<view class="img-box">
						<image src="../../static/raw_1521984570.png" mode=""></image>
					</view>
					<view class="infor-des">
						<view class="top">
							<view class="goods-detail">
								<text class="special normal">特价</text>
								<text class="goods-name normal">3件装|MEDIHEAL美迪尔惠</text>
								<text class="price">￥169.00</text>
							</view>
							<view class="goods-detail">
								<text class="goods-content">NMF针剂水库保湿面膜10元/盒</text>
								<text class="reduce-price">已降16</text>
							</view>
						</view>
						<view class="bottom">
							<view class="count">
								<text>x 2</text>
							</view>
							<view class="tax">
								<text>税费：</text>
								<text>￥24.00</text>
								<uni-icon class="arrowdown" type="arrowdown" size="30"></uni-icon>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 底部商品总计 -->
			<view class="total">
				<view class="discount">
					<text>优惠活动：</text>
					<text>-￥0.00</text>
				</view>
				<view class="total-price">
					<text>本仓总计(不含税)：</text>
					<text>￥1600.00</text>
				</view>
			</view>
			<!-- 底部结算 -->
			<view class="chooseAll">
				<view class="all">
					<text class="empty"></text>
					<text>全选</text>
				</view>
				<view class="tax">
					<view class="price">
						<text>总计不含税：</text>
						<text class="price-num">￥169.00</text>
					</view>
					<text class="tax-price">商品税费 ￥55.36</text>
				</view>
				<view class="settlement" @click="enterSbumitPage">
					<text>结算(1)</text>
				</view>
			</view>
		</view>
		<!-- 购物车遮罩页面 -->
		<view class="mask_content" v-if="isBackgroundShow">
			<view class="mask-box" v-if="isShow">
				<view class="mask-item">
					<view class="address"  @click="newAddress">
						<text class="address-item">收货地址</text>
						<text class="add">请添加收货地址</text>
						<uni-icon class="icon" type="arrowdown" size="24"></uni-icon>
					</view>
					<view class="deliver">
						<text class="address-item">配送</text>
						<text class="add">自营 (1单)</text>
						<uni-icon class="icon" type="arrowdown" size="24"></uni-icon>
					</view>
					<view class="ticket">
						<text class="address-item">优惠券</text>
						<text class="add">暂无可用</text>
						<uni-icon class="icon" type="arrowdown" size="24"></uni-icon>
					</view>
					<view class="invoice">
						<text class="address-item">发票</text>
						<text class="add">不支持开发票</text>
						<uni-icon class="icon" type="arrowdown" size="24"></uni-icon>
					</view>
					<view class="luckbag">
						<text class="address-item">红包</text>
						<text class="add">暂无可用</text>
						<uni-icon class="icon" type="arrowdown" size="24"></uni-icon>
					</view>
					<view class="money">
						<text class="address-item">应付金额</text>
						<text class="add">￥169.00</text>
						<text class="tax">(含税费￥0.00)</text>
						<uni-icon class="icon" type="arrowdown" size="24"></uni-icon>
					</view>
					<view class="agree">
						<image class="icon" src="../../static/choose.png" mode=""></image>
						<text class="address-item">本人同意并接受以下协议</text>
						<text class="add">￥0.00</text>
					</view>
				</view>
				<view class="submit-btn" @click="newAddress">
					<text>提交订单</text>
				</view>
			</view>
			<!-- 新建地址页面 -->
			<view class="new-address-box" v-if="isNew">
				<view class="new-address-item_">
					<view class="address_">
						<text class="address-item">新建地址</text>
						<uni-icon class="icon" type="arrowdown" size="24"></uni-icon>
					</view>
					<view class="main-content">
						<view class="name-box">
							<input class="name" type="text" value="" placeholder="收货人姓名(请使用真实姓名)"/>
						</view>
						<view class="phone-box">
							<input class="phone" type="text" value="" placeholder="手机号码"/>
						</view>
						<view class="area-box">
							<input class="area" type="text" value="" placeholder="所在地区"/>
						</view>
						<view class="details-box">
							<input class="details" type="text" value="" placeholder="街道/小区门派等详细地址"/>
						</view>
						
						<view class="selected-box">
							<view class="empty-box">
								<text class="empty"></text>
							</view>
							<text class="selected-address">设为默认地址</text>
						</view>
					</view>
				</view>
				<view class="submit-btn" @click="payMethods">
					<text>提交订单</text>
				</view>
			</view>
			<!-- 支付方式页面 -->
			<view class="pay-methods" v-if="isPay">
				<view class="methods-box">
					<view class="title-box">
						<text class="title">请选择支付方式</text>
						<image src="../../static/closeBtn.png" mode="" @click="colseBtn"></image>
					</view>
					<view class="pay-time-box">
						<text class="text">请在0小时30分钟内完成支付 金额</text>
						<text class="price">￥169.00</text>
						<text class="symbol">元</text>
					</view>
					<view class="ali-pay" :class="{active:isyufu}" @click="yufuMethod">
						<image src="../../static/account.png" mode=""></image>
						<text class="ali">预付款支付</text>
						<image v-if="isyufu" class="select" src="../../static/choose.png" mode=""></image>
					</view>
					<view class="ali-pay" :class="{active:isAli}" @click="AlipayMethod">
						<image src="../../static/ali_pay.png" mode=""></image>
						<text class="ali">支付宝支付</text>
						<image v-if="isAli" class="select" src="../../static/choose.png" mode=""></image>
					</view>
					<view class="weChat-pay"  :class=" {active:isWeCaht}" @click="WePayMethod">
						<image src="../../static/wechat.png" mode=""></image>
						<text>微信支付</text>
						<image v-if="isWeCaht" class="select" src="../../static/choose.png" mode=""></image>
					</view>
				</view>
				<view class="submit-btn">
					<text>提交订单</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				isShow: false,
				isBackgroundShow: false,
				isAli:false,
				isWeCaht: false,
				isNew: false,
				isPay: false,
				isclick1: true,
				isclick2: false,
				isclick3: false,
				isyufu: false
			}
			
		},
		components: {
			uniIcon,
		},
		methods: {
			// 购物车选中
			clickMethods1() {
				this.isclick1 = this.isclick1==true?this.isclick1=false:this.isclick1=true
			},
			clickMethods2() {
				this.isclick2 = this.isclick2==true?this.isclick2=false:this.isclick2=true
			},
			clickMethods3() {
				this.isclick3 = this.isclick3==true?this.isclick3=false:this.isclick3=true
			},
			// 进入提交页面
			enterSbumitPage() {
				this.isShow = !this.isShow;
				this.isBackgroundShow = !this.isBackgroundShow;
			},
			yufuMethod() {
				this.isyufu =true;
				this.isAli = false;
				this.isWeCaht = false;
			},
			AlipayMethod() {
				this.isAli = true;
				this.isWeCaht = false;
				this.isyufu = false;
			},
			WePayMethod() {
				this.isWeCaht = true;
				this.isAli = false;
				this.isyufu = false;
			},
			colseBtn() {
				this.isBackgroundShow = !this.isBackgroundShow;
				this.isAli = !this.isAli
				this.isWeCaht = !this.isWeCaht
				this.isyufu = !this.isyufu;
				this.isNew = !this.isNew;
				this.isPay = !this.isPay;
			},
			newAddress() {
				this.isShow = !this.isShow;
				this.isNew = !this.isNew;
				
			},
			payMethods() {
				this.isNew = !this.isNew;
				this.isPay = !this.isPay;
				this.isyufu = !this.isyufu;
			}
		}
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
	
</style>
<style scoped lang="stylus" ref="stylesheet/stylus">
	.content
		width 100%
		margin-top 70upx
		.normal_content
			width 100%
			position relative
			.title
				display flex
				justify-content center
				align-items center
				width 100%
				height 80upx
				font-size 34upx
				position relative
				.theme
					width 100%
					text-align center
				.operate
					width 150upx
					position absolute
					top 15upx
					right 10upx
					font-size 28upx
					.edit
						margin-right 20upx
			.address
				display flex
				justify-content left
				align-items center
				width 100%
				height 70upx
				// background-color #ccc
				position relative
				border-bottom 1px solid #f4f3f3
				.addressIcon
					// width 20upx
					height 20upx
					position absolute
					left 10upx
					top 8upx
				.addressDes
					font-size 24upx
				.font
					margin 0 10upx 0 70upx
			.shoppingCarBox
				width 100%
				.storeTitle
					width 100%
					height 100upx
					display flex
					justify-content left
					align-items center
					border-bottom 1px solid #f4f3f3
					.empty
						width 40upx
						height 40upx
						border 1px solid #ccc
						border-radius 50%
						margin 0 25upx
					.store-Kind
						font-size 32upx
						color #666
				.goodsItem
					width 100%
					height 180upx
					display flex
					justify-content center   // 水平居中
					align-items center       // 垂直居中
					flex-direction row
					border-bottom 1px solid #f4f3f3
					.empty
						display inline-block
						width 40upx
						height 40upx
						border 1px solid #ccc
						border-radius 50%
						margin 0 25upx
						image
							width 100%
							height 100%
					.img-box
						width 20%
						image
							// width 120upx
							width 51px
							// height 120upx
							height 50px
					.infor-des
						width 70%
						height 100%
						font-size 24upx
						color #333
						.top
							width 100%
							height 50%
							.goods-detail
								width 100%
								height 40%
								margin-top 10upx
								.normal
									margin-right 20upx
								.special
									color red
								.price
									font-weight 600
								.reduce-price
									margin-left 90upx
									text-align right
									color red
						.bottom
							width 100%
							height 50%
							.count
								width 95%
								text-align right
							.tax
								width 98%
								text-align right
								color #ccc
			.total
				width 96%
				height 150upx
				font-size 24upx
				color #333
				text-align right
				.discount
					padding 20upx 0
			.maskd
				width 100%
				.uni-popup
					width 100%
					.IntelligentSorting
						width 100%
						height 400px
				
			.chooseAll
				width 100%
				height 60px
				color #333
				display flex
				justify-content center
				align-items center
				flex-direction row
				font-size 24upx
				position fixed
				bottom 0px
				left 0
				.all
					flex 1
					height 60px
					display flex
					justify-content center
					align-items center
					border-top 1px solid #ccc
					.empty
						display inline-block
						width 40upx
						height 40upx
						border 1px solid #ccc
						border-radius 50%
						margin 0 25upx
				.tax
					flex 2
					height 60px
					border-top 1px solid #ccc
					display flex
					justify-content center
					text-align right
					flex-direction column
					padding-right 5px
					line-height 50upx
					.price
						.price-num
							color #E51C23
						
					.tax-price
						font-size 20upx
						color #ccc
				.settlement
					flex 1.3
					height 60px
					display flex
					justify-content center
					align-items center
					background-color #E51C23
					color #fff
				
		.mask_content
			width 100%
			height 600px
			background-color rgba(0, 0, 0 , 0.5)
			position fixed
			top 0
			left 0
			.mask-box
				position fixed
				bottom 0
				left 0
				font-size 26upx
				width 100%
				height 460px
				background-color #fff
				.mask-item
					width 100%
					height 89%
					display flex
					justify-content center
					align-items center
					flex-direction column
					text-align center
					background-color #fff

					.address, .deliver, .ticket, .invoice, .luckbag, .money, .agree
						flex 1
					.deliver, .ticket, .invoice, .luckbag, .money, .agree
						border-top 1px solid #ccc
					.address
						width 100%
						background-color #fff
						display flex
						justify-content center
						align-items center
						flex-direction row
						.address-item
							flex 4
							text-align left
							padding 10px
						.add
							flex 2
							color #E60B30
						.icon
							flex 1
							color #E60B30
							
					.deliver
						width 100%
						display flex
						justify-content center
						align-items center
						flex-direction row
						.address-item
							flex 4
							text-align left
							padding 10px
						.add
							flex 2
						.icon
							flex 1
					.ticket
						width 100%
						display flex
						justify-content center
						align-items center
						flex-direction row
						.address-item
							flex 4
							text-align left
							padding 10px
						.add
							flex 2
						.icon
							flex 1
					.invoice
						width 100%
						display flex
						justify-content center
						align-items center
						flex-direction row
						.address-item
							flex 4
							text-align left
							padding 10px
						.add
							flex 2
						.icon
							flex 1
					.luckbag
						width 100%
						display flex
						justify-content center
						align-items center
						flex-direction row
						.address-item
							flex 4
							text-align left
							padding 10px
						.add
							flex 2
						.icon
							flex 1
					.money
						width 100%
						display flex
						justify-content center
						align-items center
						flex-direction row
						.address-item
							flex 4
							text-align left
							padding 10px
						.add
							flex 2
							color #E60B30
						.tax
							color #ccc
							font-size 20upx
						.icon
							flex 1
					.agree
						width 100%
						display flex
						justify-content center
						align-items center	
						flex-direction row
						.address-item
							flex 4
							text-align left
							padding 10px
						.add
							flex 2
						.icon
							margin-left 5px
							width 24px
							height 24px
				.submit-btn
					width 100%
					height 60px
					background-color #E60B30
					text-align center
					padding-top 15px
					color #fff
			.new-address-box
				position fixed
				bottom 0
				left 0
				font-size 26upx
				width 100%
				height 325px
				background-color #ccc
				.new-address-item_
					width 100%
					height 275px
					background-color #fff
					.address_
						width 95%
						height 50px
						margin 0 auto
						display flex
						justify-content center
						align-items center
						flex-direction row
						.address-item
							flex 1
							text-align left
						.icon
							flex 1
							text-align right
					.main-content
						width 100%
						height 220px
						display flex
						justify-content center
						align-items center
						flex-direction column
						text-align center
						border-top 1px solid #ccc
						.name-box
							flex 1
							width 100%
							height 100%
							display flex
							text-align left
							align-items center
							background-color #fff
							.name
								width 90%
								height 70%
								padding-left 10px
								background-color #f4f3f3
								margin 0 auto
							
						.phone-box
							flex 1
							width 100%
							height 100%
							display flex
							text-align left
							align-items center
							.phone
								width 90%
								height 70%
								padding-left 10px
								background-color #f4f3f3
								margin 0 auto
						.area-box
							flex 1
							width 100%
							height 100%
							display flex
							text-align left
							align-items center
							background-color #fff
							.area
								width 90%
								height 70%
								padding-left 10px
								background-color #f4f3f3
								margin 0 auto
						.details-box
							flex 1
							width 100%
							height 100%
							display flex
							text-align left
							align-items center
							.details
								width 90%
								height 70%
								padding-left 10px
								background-color #f4f3f3
								margin 0 auto
						.selected-box
							flex 1
							width 90%
							height 100%
							margin 0 auto
							display flex
							align-items center
							text-align left
							background-color #fff
							.empty-box
								flex 1
								height 69%
								display flex
								align-items center
								.empty
									width 20px
									height 20px
									border-radius 50%
									border 1px solid #333
							.selected-address
								flex 9
								height 70%
								display flex
								align-items center
				.submit-btn
					width 100%
					height 50px
					background-color #E60B30
					text-align center
					padding-top 15px
					color #fff
			.pay-methods
				position fixed
				bottom 0
				left 0
				font-size 26upx
				width 100%
				height 300px
				background-color pink
				.methods-box
					width 100%
					height 250px
					background-color #fff
					display flex
					justify-content center
					align-items center
					flex-direction column
					text-align center
					.title-box
						width 100%
						flex 0.9
						display flex
						align-items center
						justify-content center
						border-bottom 1px solid #ccc
						position relative
						.title
							width 100%
						image
							position absolute
							top 18px
							right 10px
							width 25px
							height 25px
					.pay-time-box
						width 100%
						flex 1
						display flex
						align-items center
						justify-content center
						border-bottom 1px solid #ccc
						.text
							flex 5.5
							text-align right
						.price
							flex 1.5
							color #E60B30
							text-align left
						.symbol
							flex 2
					.ali-pay
						width 100%
						flex 0.8
						display flex
						align-items center
						justify-content left
						padding-left 20px
						border-bottom 1px solid #ccc
						position relative
						text
							padding-left 5px
						image
							width 24px
							height 24px
						.select
							position absolute
							top 10px
							right 18px
					.weChat-pay
						width 100%
						flex 0.8
						display flex
						align-items center
						justify-content left
						padding-left 20px
						position relative
						image
							width 24px
							height 24px
						.select
							position absolute
							top 10px
							right 18px
					.active
						background-color #ccc
				.submit-btn
					width 100%
					height 50px
					background-color #E60B30
					text-align center
					padding-top 15px
					color #fff
				
	
</style>
