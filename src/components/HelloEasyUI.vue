<template>
    <div>
        <h2>Basic TreeGrid</h2>
        <TreeGrid style="height: 100%"
                  :data="data" idField="id" treeField="name">
            <GridColumn field="name" title="Name"></GridColumn>
            <GridColumn field="id" title="id"></GridColumn>
            <GridColumn field="url" title="url"></GridColumn>
            <GridColumn field="icon" title="icon"></GridColumn>
            <GridColumn field="parentId" title="parentId"></GridColumn>
            <GridColumn field="parentIdList" title="parentIdList"></GridColumn>
            <GridColumn field="remark" title="remark"></GridColumn>
        </TreeGrid>
    </div>
</template>

<script>
    import {listMenu,getMenuListUser} from './init'
    export default {
        data() {
            return {
                data:[],
                width: 200,
                collapsed: false,
                selection: null,
                menus: [
                    {
                        text: "Forms",
                        iconCls: "fa fa-wpforms",
                        children: [
                            {
                                text: "Form Element"
                            },
                            {
                                text: "Wizard"
                            },
                            {
                                text: "File Upload"
                            }
                        ]
                    },
                    {
                        text: "Mail",
                        iconCls: "fa fa-at",
                        selected: true,
                        children: [
                            {
                                text: "Inbox"
                            },
                            {
                                text: "Sent"
                            },
                            {
                                text: "Trash",
                                children: [
                                    {
                                        text: "Item1"
                                    },
                                    {
                                        text: "Item2"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: "Layout",
                        iconCls: "fa fa-table",
                        children: [
                            {
                                text: "Panel"
                            },
                            {
                                text: "Accordion"
                            },
                            {
                                text: "Tabs"
                            }
                        ]
                    }
                ],
                query:{
                    pageNo:1,
                    size:10,
                }
            };
        },
        created() {
            this.init();
            listMenu({}).then(res=>{
                var arr = new Array();
                console.log(res.data);
                res.data.forEach(function (item,index) {

                })
                this.data = this.menu(res.data);
                console.log(this.menu(res.data))
            })
        },
        methods: {
            toggle() {
                this.collapsed = !this.collapsed;
                this.width = this.collapsed ? 50 : 200;
            },
            init(){
                getMenuListUser(this.query).then(res=>{
                    console.log(res)
                })
            },
            menu(arr){
                var menus = new Array();
                for(var i=0;i<arr.length;i++){
                    var pmenu = {};
                    pmenu.name = arr[i].name;
                    pmenu.id = arr[i].id;
                    pmenu.url = arr[i].url;
                    pmenu.icon = arr[i].icon;
                    pmenu.parentId = arr[i].parentId;
                    pmenu.parentIdList = arr[i].parentIdList;
                    pmenu.remark = arr[i].remark;
                    if(arr[i].chirldMenuList){
                        pmenu.children = this.menu(arr[i].chirldMenuList)
                    }
                    menus.push(pmenu);
                }
                return menus;
            },
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