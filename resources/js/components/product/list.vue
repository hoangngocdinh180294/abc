<template>
    <div>
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pro of product">
                        <td scope="row">{{ pro.id }}</td>
                        <td>{{ pro.name }}</td>
                        <td>{{ pro.content }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data:function() {
        return{
            product:[],
        }
    },
    mounted() {
            var app = this;
            axios.get('/product')
                .then(function (resp) {
                    app.product = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load product");
                });
        },
}
</script>
