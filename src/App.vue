<template>
  <div id="app">
    <mdb-container>
      <h1>My Todo List</h1>
      <navbar-header/>
      <list-task/>
    </mdb-container>
  </div>
</template>

<script>
 import {mdbContainer} from 'mdbvue';

import navbarHeader from './components/navbarHeader.vue'
import listTask from './components/listTask.vue'

export default {
  name: 'App',
  components: {
    navbarHeader,
    mdbContainer,
    listTask

  }
}
</script >

<style lang="scss"scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap');
$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

#app {
  font-family: 'Otomanopee One', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
