<template>
    <div class="listTask">
        <ul>
            <item-task v-for="(task, index) in todo" :key="index" :task="task" @deleteTask="deleteTask"/>
        </ul>
        <!-- <p v-once>{{thongbao}} - {{test()}}</p> -->
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
                thongbao:"Day la thong bao"
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
            },
            // test:function(){
            //     return this.thongbao = "Day la thong bao update"
            // }
        }
    }   
</script>

<style>

</style>