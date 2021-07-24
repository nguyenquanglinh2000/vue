import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const storeData = {
    state:{
        todo:[
            {id:1, title:"Ăn sáng", completed:false},
            {id:2, title:" Code", completed:false},
            {id:3, title:"Tắm rửa", completed:false},
            {id:4, title:"Call video với người yêu", completed:false},
            {id:5, title:"Làm công việc partime", completed:false},
        ]
    },
    getters:{
        addTodo: state =>{
            return state.todo;
        },
        completedList: state =>{
            return state.todo.filter(task => task.completed === true);
        }
    }
}

const store = new Vuex.Store(storeData)
export default store

