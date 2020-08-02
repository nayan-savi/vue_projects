var app = new Vue({
	el: '#form-id',
	data: {
		firstName: '',
    lastName: ''
	},
  methods: {
    save() {
      alert(this.firstName+" "+this.lastName);

    }
  }
})
