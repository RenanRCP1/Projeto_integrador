<template>
    <q-layout view="hHh LpR fFf">

        <q-header elevated class=" bg-dark text-white q-mx-none " height-hint="98">
            <q-toolbar class="col-12 q-py-sm ">
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />


                <q-toolbar-title class="col-md-2  ">
                    <!-- <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar> -->
                    Banca Cambauba
                </q-toolbar-title>

                <q-input class="bg-white col-xs-4 col-md-6 q-mr-xl " dense v-model="search" type="search">
                    <template v-slot:append>
                        <q-icon color="white" class="bg-orange-5" name="search" size="40px" />
                    </template>
                </q-input>

                <q-tabs class="col-md-3 text-white full-width " align="left">
                    <q-icon size="25px" color="orange-5" name="favorite" />
                    <q-route-tab class="q-pl-sm" to="/page6" label="Favoritos" />
                    <font-awesome-icon class="text-orange-5 text-h5" :icon="['fas', 'user']" />
                    <q-route-tab class="q-pl-sm" to="/page7" label="Entrar" />
                    <font-awesome-icon class="text-orange-5 text-h5" :icon="['fas', 'bag-shopping']" />
                    <q-route-tab class="q-pl-sm" to="/page8" label="Sacola" />
                </q-tabs>
            </q-toolbar>


            <q-tabs class="bg-orange-5 text-white" align="left">
                <q-route-tab to="/page1" label="Todas as categorias" />
                <q-route-tab to="/page2" label="Revistas" />
                <q-route-tab to="/page3" label="Mangás" />
                <q-route-tab to="/page3" label="HQS" />
            </q-tabs>
        </q-header>

        <q-drawer class="text-dark" show-if-above v-model="leftDrawerOpen" side="left" behavior="desktop" elevated>
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

        <q-footer elevated class="bg-dark text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
                <q-toolbar-title>
                    Banca Cambauba
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