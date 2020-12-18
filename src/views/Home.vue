<template>
    <div>
        <h2>Basic Calendar</h2>
        <Calendar :selection="value" @selectionChange="value=$event" style="width:250px;height:250px"></Calendar>
        <p>{{value | formatDate}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: new Date()
            };
        },
        filters: {
            formatDate(date){
                let y = date.getFullYear();
                let m = date.getMonth()+1;
                let d = date.getDate();
                return [m,d,y].join('/')
            }
        }
    };
</script>