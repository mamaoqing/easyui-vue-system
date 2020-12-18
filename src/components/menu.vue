<template>
    <div>
        <SideMenu :style="{width:width+'px'}"
                  :data="menus"
                  :collapsed="collapsed"
                  @selectionChange="selectMenus=$event">
        </SideMenu>
        <p v-if="selectMenus">You selected: {{selectMenus.url}}</p>
    </div>
</template>

<script>
    import {listMenu,getMenuListUser} from './init'
    export default {
        data() {
            return {
                menus:[],
                width: 200,
                collapsed: false,

                query:{
                    pageNo:1,
                    size:10,
                }
            };
        },
        props:{
            selectMenus: null
        },
        watch:{
            selectMenus:function (newdata,oldData) {
                this.$emit('router',newdata.url);
            }
        },
        created() {
            this.init();
            listMenu({}).then(res=>{
                this.menus = this.menu(res.data);
            })
        },
        methods: {
            toggle() {
                this.collapsed = !this.collapsed;
                this.width = this.collapsed ? 50 : 200;
            },
            init(){
                getMenuListUser(this.query).then(res=>{
                })
            },
            menu(arr){
                var menus = new Array();
                for(var i=0;i<arr.length;i++){
                    var pmenu = {};
                    pmenu.text = arr[i].name;
                    pmenu.iconCls = arr[i].icon;
                    pmenu.url = arr[i].url;
                    if(arr[i].chirldMenuList.length >0){
                        pmenu.children = this.menu(arr[i].chirldMenuList)
                    }
                    menus.push(pmenu);
                }
                return menus;
            },
            selectMenu(event){
                this.$emit('router','/table');
                // this.$emit('router',event.url);
            }
        }
    };
</script>

<style scoped>
    @import "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

    .sidemenu .accordion .panel-title {
        color: #b8c7ce;
    }
    .sidemenu .accordion .accordion-header {
        background: #222d32;
        color: #b8c7ce;
    }
    .sidemenu .accordion .accordion-body {
        background: #2c3b41;
        color: #8aa4af;
    }
    .sidemenu .accordion .accordion-header-selected {
        background: #1e282c;
    }
    .sidemenu .tree-node-hover {
        background: #2c3b41;
        color: #fff;
    }
    .sidemenu .tree-node-selected {
        background: #2c3b41;
        color: #fff;
    }
    .sidemenu .accordion-header .panel-tool {
        display: none;
    }
    .sidemenu .accordion-header::after,
    .sidemenu .tree-node-nonleaf::after {
        display: inline-block;
        vertical-align: top;
        border-style: solid;
        transform: rotate(45deg);
        width: 4px;
        height: 4px;
        content: "";
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -3px;
        border-width: 0 1px 1px 0;
    }
    .sidemenu .accordion-header-selected::after {
        transform: rotate(-135deg);
    }
    .sidemenu .tree-node-nonleaf::after {
        transform: rotate(-135deg);
    }
    .sidemenu .tree-node-nonleaf-collapsed::after {
        transform: rotate(45deg);
    }
    .sidemenu-collapsed .accordion-header::after {
        display: none;
    }
    .sidemenu-tooltip .accordion {
        border-color: #1e282c;
    }
</style>