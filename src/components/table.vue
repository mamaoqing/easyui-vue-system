<template>
    <div>
        <div style="margin-bottom:20px">
            <TextBox v-model="username" placeholder="Username" iconCls="icon-man"></TextBox>
            <TextBox v-model="username" placeholder="Username" iconCls="icon-man"></TextBox>
            <TextBox v-model="username" placeholder="Username" iconCls="icon-man"></TextBox>
            <TextBox v-model="username" placeholder="Username" iconCls="icon-man"></TextBox>
            <LinkButton iconCls="icon-add">Add</LinkButton>
            <LinkButton iconCls="icon-remove">Remove</LinkButton>
            <LinkButton iconCls="icon-save">Save</LinkButton>
            <LinkButton iconCls="icon-cut" :disabled="true">Cut</LinkButton>
        </div>
        <DataGrid :data="data" style="height:250px">
            <GridColumn :expander="true" width="30"></GridColumn>
            <GridColumn field="itemid" title="Item ID"></GridColumn>
            <GridColumn field="name" title="Name"></GridColumn>
            <GridColumn field="listprice" title="List Price" align="right"></GridColumn>
            <GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
            <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
            <GridColumn field="status" title="Status" align="center"></GridColumn>
            <template slot="detail" slot-scope="scope">
                <div class="item f-row">
                    <div><img class="item-img" :src="'https://www.jeasyui.com/tutorial/datagrid/images/'+scope.row.itemid+'.png'"></div>
                    <div class="f-column">
                        <DataGrid :data="data" style="height:250px">
                            <GridColumn field="itemid" title="Item ID"></GridColumn>
                            <GridColumn field="name" title="Name"></GridColumn>
                            <GridColumn field="listprice" title="List Price" align="right"></GridColumn>
                            <GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
                            <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
                            <GridColumn field="status" title="Status" align="center"></GridColumn>
                        </DataGrid>
                    </div>
                </div>
            </template>
        </DataGrid>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [],
                username:'',
            };
        },
        created() {
            this.data = [
                {
                    code: "FI-SW-01",
                    name: "Koi",
                    unitcost: 10.0,
                    status: "P",
                    listprice: 36.5,
                    attr: "Large",
                    itemid: "EST-1"
                }
            ];
        }
    };
</script>
<style>
    .item {
        height: 60px;
        margin: 6px 30px;
        text-align: left;
    }
    .item-img {
        width: 60px;
        height: 60px;
    }
    .item-desp {
        line-height: 30px;
    }
</style>