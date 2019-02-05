<template>
	<view class="content">
		<view class="kinds" v-for="(item , index) in goodsShow" :key="index">
			<text clas="title">{{item.title}}</text>
			<text class="subTitle">{{item.subTitle}}</text>
			<image :src="item.img" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "GoodsShow",
		data() {
			return {
				"goodsShow": [
					{
						"title": "国家地区馆",
						"subTitle": "逛遍全球",
						"img": "../../static/raw_1521976910.png",
					},
					{
						"title": "家居生活",
						"subTitle": "居住指南",
						"img": "../../static/raw_1521976910.png",
					},
					{
						"title": "网易严选",
						"subTitle": "甄选只为你",
						"img": "../../static/raw_1521976943.png",
					}
				]
			};
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.content
		display flex
		flex-direction row
		width 100%
		margin 0 !important
		.kinds
			width: 33%
			height 300upx
			text-align center
			border-right 1px solid #d2d2d2
			.title
				display block
				font-size 40upx
				font-weight 600
			.subTitle
				display block
				font-size 24upx
				margin 10upx 0 40upx
			image
				width 150upx
				height 150upx
		
		
</style>
