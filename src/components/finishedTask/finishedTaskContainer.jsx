import {connect} from "react-redux";
import FinishedTask from "./finishedTask";
import {finOnId} from "../../redux/redusers/redusersTusk";



const mapStateToProps = (state) => {
    return {
        finishedTasks: state.tuskPage.finishedTasks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        RemoveTusk: (id) => {
            dispatch(finOnId(id))
        }
    }
}

const FinishedTuskContainer = connect(mapStateToProps, mapDispatchToProps)(FinishedTask)

export default FinishedTuskContainer