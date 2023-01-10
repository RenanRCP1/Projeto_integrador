<template>
    <div class="q-pa-md bg-orange-4">
        <div class="q-gutter-md ">

            <q-input class="bg-white" v-model="email" filled type="email" label="Usuário" />
        </div>
    </div>

</template>

<script>


export default {

    setup() {
        return {
            email: ''


        }
    }
}
</script>


