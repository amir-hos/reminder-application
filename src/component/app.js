import React , {Component}from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-date-picker';
import {add , remove , clear} from '../actions/action';
import note from './note.jpg';
import '../index.css';
 class App extends Component {
     state ={
         text : '',
         date : new Date()
     }
    new_reminder =()=>{
        const {remindernew} =this.props;
        return(
            <ul className="list-group text-center">
                    {
                        remindernew.map(rem=>{
                            return(
                                <li key={rem.id} className="list-group-item">
                                    <div>{rem.text}</div>
                                    <div>{moment(new Date(rem.date)).fromNow()}</div>
                                    <div><button onClick={()=>this.props.remove(rem.id)} className="btn-danger">+</button></div>
                                </li>
                            )
                        })
                    }
            </ul>
        )
     }
     render(){
         
         return(
            <form className="text-center" onSubmit={(e)=>e.preventDefault()}>
                <img src={note} alt=""></img>
                <div className="reminder-title">
                <h2>What you will do it..?</h2>
                </div>
                <input value={this.state.text}
                 onChange={(e)=>this.setState({text :e.target.value})}
                  className="form-control t1" type="text" placeholder="enter what you will do">

                  </input>
                
                <DatePicker
                    className="form-control time"
                    value={this.state.date}
                    selected={this.state.date}
                    onChange={(date) => {this.setState({date: date})}}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
                <button onClick={()=>{
                    this.props.add(this.state.text , this.state.date)
                    this.setState({text:'' , date :''})
                }}
                 className="form-control btn-primary mb-3">ADD REMINDER
                 </button>
                {this.new_reminder()}
                <button onClick={()=>this.props.clear()} className="form-control btn-danger ">clear</button>
            </form>
         )
     }
 }
 /*const mapDispatchToProps =(dispatch)=>{
    return{
        addR : ()=> dispatch(add())
    }
 }*/
// bdl mnktb ely fo2 dah kolo bn impord el function we n7otah t7t we 5las

const mapStateToProps =(state)=>{
    return{
        remindernew : state
    }
}
 export default connect(mapStateToProps , {add,remove,clear})(App);