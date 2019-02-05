<template>
	<view class="nav-box">
		<view class="nav-item" v-for="(item, index) in navList" :key="index" @click="enterDetailsPage">
			<view class="image"></view>
			<text>{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "NavCenter",
		data() {
			return {
				navList: [
					"食品",
					"日用品",
					"母婴",
					"家电",
					"数码",
					"服饰",
					"汽车",
					"房产",
					"生活服务",
					"商务服务"
				],
			};
		},
		methods: {
			enterDetailsPage() {
				uni.navigateTo({
					url: '../../pages/details/details'
				});
			}
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
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
			width 20%
			height 50%
			font-size 30upx
			.image
				width 70upx
				height 70upx
				background-color lightblue
				border-radius 50%
				margin 8upx 0
</style>
