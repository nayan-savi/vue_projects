<template>
    <div class="hello">
        <h1>{{ name }}</h1>
    </div>
</template>

<script>
    import {ref} from 'vue';

    export default {
        setup() {
            const name = ref("Nayan Kumar");
            return {name}
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
