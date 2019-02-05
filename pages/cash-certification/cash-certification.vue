<template>
	<view class="content">
		<view class="name">
			<text class="nameLeft">姓名</text>
			<input type="text" placeholder="  请输入姓名"  placeholder-style="font-size:15px" class="nameRight" />
		</view>
		<view class="name">
			<text class="nameLeft">身份证号码</text>
			<input type="text" placeholder="  请输入身份证号码" placeholder-style="font-size:15px"  class="nameRight" />
		</view>
		<view class="note">
			<text>身份证号码不合法</text>
		</view>
		<view class="name">
			<text  class="nameLeft">住宅地址</text>
			<view class="county">
				<text>四川省</text>
				<image src="../../static/lower.png" class="point"></image>
			</view>
			<view class="county">
				<text>绵阳市</text>
				<image src="../../static/lower.png" class="point"></image>
			</view>
			<view class="county">
				<text>涪城区</text>
				<image src="../../static/lower.png" class="point"></image>
			</view>
		</view>
		<view class="home">
			<text class="homeLeft"></text>
			<textarea type="text" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元室等" placeholder-style="font-size:15px" class="homeRight"></textarea>
		</view>
		<button type="primary" class="primary">确认提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style  scoped lang="stylus" ref="stylesheet/stylus">
	.content
		font-size 27upx
		.name
			height 45px
			display flex
			justify-content center  
			align-items center       
			flex-direction row
			border-bottom 1px solid #d3d3d3
			.county
				width 20%
				text-align center
				border 1px solid #d3d3d3
				border-radius 5px
				margin 0 2%
				padding 3px 0 
				color #888888
				.point
					width 10px
					height 10px
			.nameLeft
				width 25%
				text-align right
			.nameRight
				width 70%
				margin 0 2%
				border 1px solid #d3d3d3
		.note
			display flex
			justify-content center  
			align-items center       
			flex-direction row
			height 30px
			color #E51C23
			border-bottom 1px solid #d3d3d3
		.home
			display flex
			justify-content center  
			align-items center       
			flex-direction row
			border-bottom 1px solid #d3d3d3
			.homeLeft
				width 25%
			.homeRight
				width 70%
				display inline-block
				height 70px
		.primary
			width 90%
			margin 60px auto
			color #fff
			background #F8A0A0
</style>
