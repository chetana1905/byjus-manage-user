// import logo from './logo.svg';
// import './App.css';
import './user.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddUser from "./AddUser";
import RemoveUser from './RemoveUser';

import  React, { useEffect, useState } from "react";
import Axios from 'axios';


function App() {
  
  const user_details = {
    id:'',
    name : "",
    email :"",
    address:'',
    joining_date:''
  }
  const [users , setUsers] = useState([]);
  const [user, setUser] = useState(user_details);
  const err_msg = React.createRef();
  const [add_modal ,setAddModal ] = useState(false);
  const [remove_modal ,setRemModal ] = useState(false);

  useEffect(()=>{ 
    Axios.get('http://localhost:8080').then(res => {
        setUsers(res.data.users);
    }).catch(err => {
       console.log(err);
    })
    
  }, []);


  const inputChangeHandler = (e)=>{
     console.log(e.target);
    const user_data = {...user};
    user_data[e.target.name] =  e.target.value;
    setUser(user_data);
  }

  const  addFormHandler = (e) => {
      e.preventDefault();
     // send server request to save data
        Axios.patch('http://localhost:8080/create-user',user).then(res => {
          
          setAddModal(false);
          setUser(user_details);
         if(res.data.success == true){
              setUsers(res.data.users);
         }else{
            err_msg.current.innerText = res.data.message;
         }
        console.log(res.data.success);
      }).catch(err => {
        setUser(user_details);
        setAddModal(false);
        console.log(err);   
      });
  }

  const removeHandler = (e) => {
      e.preventDefault();
      Axios.delete(`http://localhost:8080/${user.id}`).then(res => {

          setUser(user_details);
          setRemModal(false);
         if(res.data.success == true){
              setUsers(res.data.users);
         }else{
            err_msg.current.innerText = res.data.message;
         }
        console.log(res.data.success);
      }).catch(err => {
        setUser(user_details);
        setRemModal(false);
        console.log(err);   
      });
      
  }

  return (
    <div className="App">
      <AddUser modal_open= {add_modal} setModal = {setAddModal} err_msg = {err_msg} user={user} addFormHandler={addFormHandler} inputChangeHandler={inputChangeHandler}/>
      <RemoveUser modal_open= {remove_modal} setModal = {setRemModal} user_id={user.id} removeHandler ={removeHandler} inputChangeHandler={inputChangeHandler}/>
      <div className='table_div'>
        <table className='table'>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Joining Date</th>
            </tr>   
          </thead>
          <tbody>
            {users.map((ele, index) => { 
                
                return( 
                    <tr key={index}>
                      <td>{ele._id}</td>
                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>{ele.address}</td>     
                      <td>{ele.joining_date}</td>
                  </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default App;
