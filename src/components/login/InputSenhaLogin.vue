<template>
    <div class="q-pa-md bg-orange-4">
        <div class="q-gutter-md ">
            <q-input class="bg-white" color="primary" v-model="password" :type="isPwd ? 'password' : 'text'"
                label="Senha" filled>
                <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                        @click="isPwd = !isPwd" />
                </template>
            </q-input>
        </div>
    </div>

</template>

<script>


export default {
    setup() {
        return {
            password: '',
            isPwd: true,


        }
    }
}
</script>


