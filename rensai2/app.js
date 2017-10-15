const vm = new Vue({
	el: '#app',
	template: `<div>
		<input v-model="message">
		<button @click="increment">increment</button>
		<div v-if="count % 2 !== 0">{{messageAndCount}}</div>
		<div v-else>この要素はcountが偶数の時に表示されます</div>
		<div :style="styleObject">{{messageAndCount}}</div>
		<div>users:
		  <div v-for="user in users">
			  {{user.id}}:{{user.name}}
			</div>
		</div>
		</div>`,
	data() {
		return {
			message: 'Hello Vue.js !!',
			count: 0,
			users: [
				{id: 1, name: 'user1'},
				{id: 2, name: 'user2'}
			]
		}
	},
	methods: {
		increment() {
			this.count += 1
		}
	},
	computed: {
		messageAndCount() {
			return `${this.message}:${this.count}`
		},
		styleObject() {
			return {
				color: this.count % 2 !== 0 ? 'red' : 'blue',
				fontSize: '16px'
			}
		}
	}
})
