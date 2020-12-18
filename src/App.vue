<template>
    <div class="home">
        <!--    <img alt="Vue logo" src="../assets/logo.png">-->
        <zyhome/>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from "@/components/HelloWorld.vue";
    import zyhome from "@/components/layout.vue";

    export default {
        name: "home",
        components: {
            zyhome
        }
    };
</script>