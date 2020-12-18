<template>
    <div>
        <Layout style="width:100%;height:950px;">
            <LayoutPanel region="north" style="height:50px;">
                <div class="title">North Region</div>
            </LayoutPanel>
            <LayoutPanel region="south" style="height:50px;">
                <div class="title">South Region</div>
            </LayoutPanel>
            <LayoutPanel region="west" style="width:203px;">
                <zymenu @router="router" select-menus="selectMenus"></zymenu>
            </LayoutPanel>
            <LayoutPanel region="east" style="width:120px;">
                <div class="title">East Region</div>
                <router-link to="/table">table</router-link>
                <router-link to="/easyui">easyui</router-link>
                <router-link to="/menu">menu</router-link>
            </LayoutPanel>
            <LayoutPanel region="center" style="height:100%">
                <router-view></router-view>
            </LayoutPanel>
        </Layout>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                selectMenus:null,
            }
        },
        methods:{
          router(url){
              console.log(url)
              this.$router.push({path:url})
          },
        },
    };
</script>
<style>
    .title {
        text-align: center;
        margin-top: 10px;
    }
</style>