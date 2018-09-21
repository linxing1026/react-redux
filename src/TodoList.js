import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';
import { getInputChangeAction, addItemAction, deleteItemAction } from './store/actionCreators';

const TodoList = (props) =>{
    const { inputValue, handleInputChange, handleClick, list, handleDelete } = props;
    return (
        <div>
            <div>
                <input 
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
               {
                    list.map((item,index) => {
                       return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
                   })
               }
            </ul>
        </div>
    )
}

// class TodoList extends Component {

//     // constructor(props) {
//     //     super(props);
//     //     this.state = store.getState();
//     // }
//     render() {
//         const { inputValue, handleInputChange, handleClick, list, handleDelete } = this.props;
//         return (
//             <div>
//                 <div>
//                     <input 
//                         value={inputValue}
//                         onChange={handleInputChange}
//                     />
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                    {
//                         this.props.list.map((item,index) => {
//                            return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
//                        })
//                    }
//                 </ul>
//             </div>
//         )
//     }
    
// }

const mapStateToProps = (state) =>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

//store.dispatch props
const mapDispatchProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = addItemAction();
            dispatch(action);
        },
        handleDelete(index) {
            const action = deleteItemAction(index);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(TodoList);