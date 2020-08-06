const { createApp, ref } = Vue;

const App = {
    setup() {
        const name = ref("Nayan Kumar");
        return { name }
    },

    template: `
        <h1>Hello {{name}}</h1>
    `
};

createApp(App).mount('#app');