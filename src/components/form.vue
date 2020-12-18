<template>
    <div>
        <h2>Basic Form</h2>
        <Form :model="user">
            <div style="margin-bottom:20px">
                <Label for="name" align="top">Name:</Label>
                <TextBox inputId="name" v-model="user.name"></TextBox>
            </div>
            <div style="margin-bottom:20px">
                <Label for="email" align="top">Email:</Label>
                <TextBox inputId="email" v-model="user.email"></TextBox>
            </div>
            <div style="margin-bottom:20px">
                <Label for="hero" align="top">Select a hero:</Label>
                <ComboBox inputId=hero :data="heroes" v-model="user.hero"></ComboBox>
            </div>
            <div style="margin-bottom:20px">
                <CheckBox inputId="accept" v-model="user.accept"></CheckBox>
                <Label for="accept">Accept Me</Label>
            </div>
            <div style="margin-bottom:20px">
                <LinkButton :disabled="false" @click="submitForm()">Submit</LinkButton>
            </div>
        </Form>
        <p>{{user}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: null,
                    email: null,
                    hero: null,
                    accept: false
                },
                heroes: [
                    { value: 11, text: "Mr. Nice" },
                    { value: 12, text: "Narco" },
                    { value: 13, text: "Bombasto" },
                    { value: 14, text: "Celeritas" },
                    { value: 15, text: "Magneta" },
                    { value: 16, text: "RubberMan" },
                    { value: 17, text: "Dynama" },
                    { value: 18, text: "Dr IQ" },
                    { value: 19, text: "Magma" },
                    { value: 20, text: "Tornado" }
                ]
            };
        },
        methods: {
            submitForm() {
                //submit this.user
            }
        }
    };
</script>
