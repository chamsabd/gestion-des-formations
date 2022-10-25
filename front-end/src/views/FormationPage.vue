<template>
  <div id="app">
     <v-data-table
        :headers="headers"
        :items="formations"
        :items-per-page="10"
        class="elevation-1"
    ></v-data-table>
    <!-- <DataTable/> -->
  </div>
</template>

<script>
//import DataTable from '@/components/DataTable.vue'
import "@/store/index";
export default {
  name: 'FormationPage',
   data() {
        return {
            headers: [
                {
                    text: "Title",
                    align: "left",
                    value: "title",
                },
                { text: "Body", value: "body" },
                { text: "Published", value: "published" },
                { text: "Actions", value: "actions" },
            ],
            formations: [],
        };
    },
     created() {
        this.getformations();
    },
    methods: {
        getformations() {
            this.$store.dispatch("fetchformations").then(() => {
                this.formations = this.$store.getters.formations;
            });
        },
    },
  components: {
  //  DataTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
