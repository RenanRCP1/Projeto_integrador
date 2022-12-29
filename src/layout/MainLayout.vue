<template>
    <q-layout view="hHh LpR fFf">

        <q-header elevated class="glossy bg-dark text-white q-mx-none " height-hint="98">
            <q-toolbar class="col-12 q-py-sm ">
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />


                <q-toolbar-title class="col-md-2  ">
                    <!-- <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar> -->
                    Banca Cambauba
                </q-toolbar-title>

                <q-input class=" bg-white col-xs-4 col-md-6 q-mr-xl q-pa-none" dense v-model="search" type="search">
                    <template v-slot:append>
                        <q-icon color="white" class="bg-orange-5" name="search" size="40px" />
                    </template>
                </q-input>

                <q-tabs class="col-md-3 col-xs-1 text-white " align="left">
                    <q-icon size="25px" color="orange-5" name="favorite" />
                    <q-route-tab class="q-pl-sm " to="/page6" label="Favoritos" />
                    <font-awesome-icon class="text-orange-5 text-h5" :icon="['fas', 'user']" />
                    <q-route-tab class="q-pl-sm" to="/page7" label="Entrar" />
                    <font-awesome-icon class="text-orange-5 text-h5" :icon="['fas', 'bag-shopping']" />
                    <q-route-tab class="q-pl-sm" to="/page8" label="Sacola" />
                </q-tabs>
            </q-toolbar>


            <q-tabs outlined class=" bg-orange-5 text-white" align="justify">
                <q-route-tab class="glossy " to="/page1" label="Todas as categorias" />
                <q-route-tab class="glossy" to="/page2" label="Revistas" />
                <q-route-tab class="glossy" to="/page3" label="Mangás" />
                <q-route-tab class="glossy" to="/page3" label="HQS" />
            </q-tabs>
        </q-header>

        <q-drawer show-if-above class="text-dark" v-model="leftDrawerOpen" side="left" elevated>
            <!-- drawer content -->
            <q-scroll-area class="fit">
                <q-list padding class="menu-list">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="inbox" />
                        </q-item-section>

                        <q-item-section>
                            Inbox
                        </q-item-section>
                    </q-item>

                    <q-item active clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="star" />
                        </q-item-section>

                        <q-item-section>
                            Star
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="send" />
                        </q-item-section>

                        <q-item-section>
                            Send
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="drafts" />
                        </q-item-section>

                        <q-item-section>
                            Drafts
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer elevated class=" glossy bg-dark text-white">
            <q-toolbar>
                <q-toolbar-title class="text-center text-subtitle1">
                    Banca Cambauba <br />
                    Rua Cambaúba, 1051 - Jardim Guanabara, Rio de Janeiro - RJ, 21940-005
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {

    setup() {
        const leftDrawerOpen = ref(false)

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
}
</script>

<style scoped>

</style>