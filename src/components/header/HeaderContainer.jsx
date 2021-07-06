import {connect} from "react-redux";
import Header from "./header";

const mapStateToProps = (state) => {
    return {
        finishedTasks: state.tuskPage.finishedTasks
    }
}


const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;