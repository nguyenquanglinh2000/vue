<template>
<div class="navbarHeader">
  <mdb-navbar expand="large" dark color="stylish">
            <mdb-navbar-brand href="#">
                Todo List
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                <mdb-navbar-nav>
                    <mdb-nav-item >All task(<span style="color:#cc9900">{{todo.length}}</span>)</mdb-nav-item>
                    <mdb-nav-item >Task completed(<span style="color:#00ff00">{{completedList.length}}</span>)</mdb-nav-item>
                </mdb-navbar-nav>
                <mdb-input label="Add task" v-model="newTask" id="addtask" />
                <mdb-btn color="info" type="submit" style="margin-left:30px" @click="addTask(newTask)">Add</mdb-btn>  
            </mdb-navbar-toggler>
        </mdb-navbar>
</div>
        
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput,mdbBtn } from 'mdbvue';
  export default {
    name: 'HelloWorld',
    data(){
      return{
        newTask:''
      }
    },
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput,
      mdbBtn
    },
    computed:{
      ...mapState([
        'todo'
      ]),
      ...mapGetters([
        'addTodo',
        'completedList'
      ])
    },
    methods:{
      addTask(newTask ){
        console.log('run add');
        // event.defaultPrevented();
        this.addTodo.push({id:Math.random()*100, title:newTask, completed:false});
        this.newTask ='';
      }
    }
  }
</script>
<style>
   input[type=text]:focus{
    color:snow;
  }
</style>