<template>
	<view>
		<form @submit="formSubmit">
			<view class="section">
				<input name="account"  password="true"  maxlength="32"  placeholder="  请输入密码" placeholder-style="font-size:14px" class="password"/>
				<view class="eyesBox">
					<image src="../../static/eyes.png" mode="" class="eyes"></image>
				</view>
			</view>

			<view class="section">
				<input name="password" password="true"  maxlength="32"  placeholder="  请确认密码" placeholder-style="font-size:14px" class="password"/>
				<view class="eyesBox"  @click="eyes">
					<image src="../../static/eyes.png" mode="" class="eyes"></image>
				</view>
			</view>
			<view class="remind">
				<text class="remindText">密码长度8~24位,必须包含数字/字母/符号至少2种以上元素</text>
			</view>
			<view class="btn-area">
				<button formType="submit" class="button" @click="next">确认提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			formSubmit: function (e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			},
			eyes:function(){
				let pass = document.getElementsByClassName("password")
				console.log(pass.password)
			},
			next(){
				uni.navigateBack({
					delta: 3
				});
			}
		}
	}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
	.section
		width 90%
		// height 80upx
		margin 20upx auto
		padding 18upx 0
		background #F2F2F2
		border-radius 10upx
		position relative
		top 5px
		.eyesBox
			position absolute
			right 10upx
			top 25upx
			height 100%
			width 60upx
			.eyes
				width 40upx
				height 40upx
				position absolute
				right 10upx
				top 25upx
	.remind
		width 90%
		height 80upx
		margin 20upx auto
		font-size 26upx
		color #A9A9A9
		.remindText
			height 80upx
			line-height 80upx
	.btn-area
		width 90%
		margin 10upx auto
		.button
			color #fff
			background #F76968
</style>
