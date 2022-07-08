<template>
	<view>
		<Parser class="parse" :tag-style="tagStyle" :html="inputHTML" show-with-animation>
			<!-- <view class="loading">
				<view class="loading_wrap">
					<text>加载中...</text>
				</view>
			</view> -->
		</Parser>
	</view>
</template>

<script>
import marked from './assets/marked.min.js';
import hljs from './highlight.js/lib/index.js';
import Parser from "./parser/parser.vue";

	export default {
		props:{
			resource:{
				type:String,
				default:"**请输入markdown内容**"
			}
		},
		components:{
			Parser
		},
		data() {
			return {
				tagStyle: {
				    // 代码块
				    pre: 'font-size:26rpx;border-radius: 12rpx;color:#fff;overflow-x:scroll;background: #000;padding: 20rpx;white-space: pre;margin:0em;',
				},
			}
		},
		computed:{
			inputHTML(){
				return marked(this.resource);
			}
		},
		created(){
			// 初始化markdown高亮效果
			this.initHighLight();
		},
		methods: {
			initHighLight(){
				hljs.configure({useBR: true,tabReplace:' '});
				marked.setOptions({
					gfm: true,
					tables: true,
					breaks: false,
					pedantic: false,
					highlight: function (code, lang) {
						if (lang && hljs.getLanguage(lang)) {
							// TODO 代码块 使其高亮
							return hljs.highlight(lang, code, true).value;
						} else {
							return hljs.highlightAuto(code).value;
						}
					}
				});
			},
		}
	}
</script>

<style >
	// @import url('./highlight.js/styles/nnfx.css');
	@import url('./assets/default.css');
</style>
