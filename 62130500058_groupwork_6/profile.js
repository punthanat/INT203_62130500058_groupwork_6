const app = {
    data() {
        return {
            firstName: 'Punthanat',
            lastName: 'Ularnwiriyanont',
            img: "./images/1.jpg",
            date: "Nov 2018",
            shown: true,
            username: null,
            email: null,
            password: null,
            fullName: null,
            age: null,
            title: null,
            nationality: null,
            errors: null,
        }
    },
    methods: {
        checkForm(e) {
            this.errors = validate({
                username: this.username,
                email: this.email,
                password: this.password,
                fullName: this.fullName,
                age: this.age,
                email: this.email,
                title: this.title,
                nationality: this.nationality
            }, constraints)
            if (this.errors) {
                e.preventDefault();
            }
            if (!this.errors) {
                alert("Registered successfully.")
            }
        },
     
        
    }


}
const constraints = {
    username: {
        presence: true,
    },
    email: {
        presence: true,
    },
    password: {
        presence: true,

    },
    fullName: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150,
            message: "Age :1-150"
        }
    },
    email: {
        presence: true,
        email: true
    },
    title: {
        presence: true,

    },
    nationality: {
        presence: true
    }
}
mountedApp = Vue.createApp(app).mount('#app')
