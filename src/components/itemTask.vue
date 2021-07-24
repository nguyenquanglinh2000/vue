<template>
    <div class="itemTask">
        <li :class="{checkCompleted: task.completed}">
            <div class="row justify-content-center">
                <div class="col-8">
                    <span>{{task.title}}</span>
                </div>
                <div class="col-1">
                    <!-- <mdb-btn color="default" v-show="!task.completed" @click="task.completed = !task.completed">Completed</mdb-btn> -->
                    <mdb-input type="checkbox" id="checkbox1" name="check1" v-model="task.completed" />
                </div> 
                <div class="col-2">
                    <mdb-btn color="danger" @click="deleteTask(task.id)" >Delete</mdb-btn>
                </div>
                  
            </div>
            
            
        </li>
    </div>
</template>

<script>
 import { mdbBtn,mdbInput } from 'mdbvue';
 import {mapState} from 'vuex';
    export default {
        name: 'task',
        data () {
            return {

            }
        },
        props:{
            task:{
                type:Object,
                default:null
            },
           
        },
        components:{
            mdbBtn,
            mdbInput
        },
        methods:{
            deleteTask(deleteidx){
                this.$emit('deleteTask', deleteidx);
                // console.log('Run function itemTask', deleteidx);
            }
        },
        computed: mapState([
            'toodo'
        ]),

    }
</script>
    
<style>
.itemTask li {
        list-style-type:decimal-leading-zero;
    }
.itemTask li span{
        font-size: 30px;
    }
.itemTask li button{
    float:right;
}
.checkCompleted span{
    text-decoration-line: line-through;

}
.titleTask{
    /* max-width: 70%; */
    display: inline-block;
}
.buttonChange{
    float:right;
    /* max-width: 20%;  */
}

</style>