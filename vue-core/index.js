var app = new Vue({
	el: '#app',
	data: {
		message: 'Welcome to Vue JS'
	}
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		isSeen: true
	}
})

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			'Learn JS',
			'Learn Vue',
			'Build soming awesome'
		],
		message: 'Hello Nayan'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app5 = new Vue({
	el: '#app-5',
	data: {
		username: ''
	},
	methods: {
		sayHi: function() {
			alert('Hi '+ this.username);
		}
	}
})

var app6 = new Vue({
	el: '#app-6',
	data: {
		counter: 0
	},
	methods: {
		increment: function() {
			this.counter += 1;
		},

		decrement: function() {
			this.counter -= 1;
		},

		increment10: function() {
			this.counter += 10;
		}
	}
})
