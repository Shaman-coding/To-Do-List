import {connect} from "react-redux";
import {addNewTusk, CurentTusks, removeTusk} from "../../redux/redusers/redusersTusk";
import MainFile from "./mainFiles";


const mapStateToProps = (state) => {
    return {
        Alltusk: state.tuskPage.Alltusk,
        tusks: state.tuskPage.tusks
    }
}


const mapDispatchToProp = (dispatch) => {
    return {
        addNewTusk: () => {
            dispatch(addNewTusk())
        },
        currentTusks: (value) => {
            dispatch(CurentTusks(value))
        },
        removeTusk: (id) => {
            dispatch(removeTusk(id))
        }

    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProp)(MainFile);
export default MainContainer;