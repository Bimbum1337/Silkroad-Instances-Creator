
Vue.component('sro-window', {
	template: `
    <div v-show="show"  @mousedown="thisClick" style="position: absolute;top:50%;left:50%;transform: translate(-50%,-50%);" v-bind:style="{ zIndex:zIndex }">
    	<div class="mframe-header" style="display: flex;" v-drag>
    		<div  id="mainWnd" class="mframe-header-cur" style="text-align: center;" v-bind:style="{ width:width+'px' }">
    			<span style="color: white;font-size: 12px;">{{title}}</span>
    		</div>
    		<button @click="hide" class="btn-close"></button>
    	</div>
    	<div class="mframe-content" style="display: flex;" v-bind:style="{ height: height + 'px' }">
    		<div class="mframe-content-cur" style="overflow-y: auto;overflow-x: none;" v-bind:style="{ height: height + 'px',width:width+'px' }">
    		</div>
    	</div>
    	<div class="mframe-footer" style="display: flex;">
    		<div class="mframe-footer-cur" v-bind:style="{ width:width+'px' }">
    		</div>
    	</div>
		<div style="position: absolute;top:50px;left:2.5%;width:95%;height:85%"><slot/></div>
    </div>
    `,
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: '',
		},
		height: {
			type: Number,
			default: 100,
		},
		width: {
			type: Number,
			default: 100,
		}
	},
	data() {
		return {
			show: false,
			zIndex: 999
		}
	},
	watch: {
		visible(val) {
			this.show = val
		}

	},
	computed: {

	},
	created() {
		this.show = this.visible
		Event.$on("focus", (context, zIndex) => {
			if (context !== this) {
				this.zIndex--;
			}
		})
	},
	methods: {
		hide() {
			this.$emit("hide");
		},
		thisClick() {
			this.zIndex = 999;
			Event.$emit("focus", this, this.zIndex)
		}
	}
});
Vue.component('sro-btn', {
	template: `
	<button :id="id"  class="btn-primary" v-bind:style="{ width:width+'px',height:height+'px' }" >{{title}}</button>
    `,
	props: {
		visible: {
			type: Boolean,
			default: true,
		},
		title: {
			type: String,
			default: '',
		},
		height: {
			type: Number,
			default: 100,
		},
		width: {
			type: Number,
			default: 100,
		},
		id: {
			type: String,
			default: '',
		}
	},
	data() {
		return {
			show: false,
			zIndex: 999
		}
	},
	watch: {
		visible(val) {
			this.show = val
		}

	},
	computed: {

	},
	created() {
		this.show = this.visible;
		Event.$on("focus", (context, zIndex) => {
			if (context !== this) {
				this.zIndex--;
			}
		})
	},
	methods: {
		hide() {
			this.$emit("hide");
		},
		thisClick() {
			this.zIndex = 999;
			Event.$emit("focus", this, this.zIndex)
		}
	},
	mounted: function() {
    console.log('mounted')
  },
});
Vue.component('sro-edit', {
	template: `
	<div  class="form-item" v-bind:style="{ width:width+'px',padding:height+'px' }">
			<input :id="id" v-model="title" type="text"></input>
	</div>
    `,
	props: {
		visible: {
			type: Boolean,
			default: true,
		},
		title: {
			type: String,
			default: '',
		},
		height: {
			type: Number,
			default: 100,
		},
		width: {
			type: Number,
			default: 100,
		},
		id: {
			type: String,
			default: '',
		}
	},
	data() {
		return {
			show: false,
			zIndex: 999
		}
	},
	watch: {
		visible(val) {
			this.show = val
		}

	},
	computed: {

	},
	created() {
		this.show = this.visible;
		Event.$on("focus", (context, zIndex) => {
			if (context !== this) {
				this.zIndex--;
			}
		})
	},
	methods: {
		hide() {
			this.$emit("hide");
		},
		thisClick() {
			this.zIndex = 999;
			Event.$emit("focus", this, this.zIndex)
		}
	},
	mounted: function() {
    console.log('mounted')
  },
});
Vue.component('sro-static', {
	template: `
	<div  v-bind:style="{ width:width+'px' }">
			<p :id="id">{{title}}</p>
	</div>
    `,
	props: {
		visible: {
			type: Boolean,
			default: true,
		},
		title: {
			type: String,
			default: '',
		},
		height: {
			type: Number,
			default: 100,
		},
		width: {
			type: Number,
			default: 100,
		},
		id: {
			type: String,
			default: '',
		}
	},
	data() {
		return {
			show: false,
			zIndex: 999
		}
	},
	watch: {
		visible(val) {
			this.show = val
		}

	},
	computed: {

	},
	created() {
		this.show = this.visible;
		Event.$on("focus", (context, zIndex) => {
			if (context !== this) {
				this.zIndex--;
			}
		})
	},
	methods: {
		hide() {
			this.$emit("hide");
		},
		thisClick() {
			this.zIndex = 999;
			Event.$emit("focus", this, this.zIndex)
		}
	},
	mounted: function() {

  },
});
