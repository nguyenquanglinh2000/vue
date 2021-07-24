<template>
    <div class="listTask">
        <ul>
            <item-task v-for="(task, index) in todo" :key="index" :task="task" @deleteTask="deleteTask"/>
        </ul>
    </div>
</template>

<script>
import itemTask from "./itemTask.vue"
import {mapState} from 'vuex'
// import func from 'vue-editor-bridge'
    export default {
        name: '',
        data () {
            return {

            }
        },
        components:{
            itemTask ,
        },
        computed: mapState([
            'todo'
        ]),
        methods:{
            deleteTask(deleteidx){
                var indexDelete =-1;
                console.log('run list Task');
                this.todo.forEach((task, idx) => {
                    console.log('run for');
                    if(task.id === deleteidx){
                        indexDelete = idx;
                        console.log('run if');
                    }
                });
                if(indexDelete != -1){
                    this.todo.splice(indexDelete,1);
                }
            }
        }
    }   
</script>

<style>

</style>