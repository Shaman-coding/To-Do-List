const ALL_TUSK = 'ALL-TUSK';
const CURENT_TUSK = "CURENT-TUSK";
const FINISHED_TASKS = 'FINISHED-TUSKS';
const ADD_NEW_TUSK = 'ADD-NEW-TUSK';
const REMOVE_TUSK = 'REMOVE-TUSK';

const defaultState = {
    finishedTasks: [],
    Alltusk: [],
    tusks: ''

}


const RedusersTusk = (state = defaultState, action ) => {

    switch (action.type){
        case ADD_NEW_TUSK:
            if(state.tusks) {
                return {
                    ...state,
                    Alltusk: [...state.Alltusk, {tusk: state.tusks, id: new Date().getTime()}],
                    tusks: ''
                }
            } else {
                alert("Заполните поле....")
                return state
            }
        case CURENT_TUSK:
            return {
                ...state, tusks: action.value
            }
        case REMOVE_TUSK:
            return {
                ...state,
                Alltusk: state.Alltusk.filter(task => task.id !== action.id) // Фильтруем массив и возвращаем все id которые не совподают с переданным id, а который совпал мы его убираем
            }
        default:
            return state
    }
}



export let CurentTusks = (value) => ({type: CURENT_TUSK, value})
export let addNewTusk = () => ({type: ADD_NEW_TUSK})
export let removeTusk = (id) => ({type: REMOVE_TUSK, id})
export default RedusersTusk;