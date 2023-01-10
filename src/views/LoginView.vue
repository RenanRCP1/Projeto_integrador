<template>
    <div class="login  ">
        <q-card class="  outlined  my-card text-white fit row wrap justify-center items-center content-start ">
            <font-awesome-icon style="font-size: 7em" class="q-pt-sm text-dark text-h5 full-width"
                :icon="['fas', 'user']" />
            <div class="q-pt-lg text-h5 text-dark text-weight-bold ">Banca Cambauba</div>
            <q-card-section class="row justify-center">
                <InputUsuarioLogin class="col-12" />
                <InputSenhaLogin class="col-12" />
                <q-btn class="" color="orange-4" label="ENTRAR" @click="onClick" />
            </q-card-section>
        </q-card>
    </div>



</template>

<script>

import InputUsuarioLogin from '/src/components/login/InputUsuarioLogin.vue';
import InputSenhaLogin from '/src/components/login/InputSenhaLogin.vue';

export default {
    components: { InputUsuarioLogin, InputSenhaLogin },
    data() {
        return {



        }
    }
}
</script>

<style scoped>
.my-card {
    width: 100px;
    max-width: 350px;
    background-color: #FFB74D;
}

.login {
    border: 2px solid #FFB74D;
    padding: 10px;
    border-radius: 25px;
}
</style>

