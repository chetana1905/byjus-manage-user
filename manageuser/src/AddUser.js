import { useState } from "react";
import Modal from '@material-ui/core/Modal';


function AddUser({modal_open , setModal , err_msg ,user, addFormHandler, inputChangeHandler}){

   
    return(
          <div className='add_user_btn'>
            <button className='btn btn-success' onClick={()=>{setModal(true)}}>Add User</button>
            <Modal onClose={() => {setModal(false)}} open={modal_open}  className='modalClass'  >
               
                <form onSubmit={addFormHandler} className="add-form">
                    <div ref={err_msg} className="err_msg_div"></div>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" placeholder="Enter Name" name='name' value={user.name} type="text" onChange={inputChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input  className="form-control"  placeholder="Enter email" name='email' value={user.email} type="text"  onChange={inputChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input  className="form-control" placeholder="Address" name='address' value={user.address} type="text"  onChange={inputChangeHandler}/>
                    </div>
                    <div>
                        <label>Joining Date</label>
                        <input  className="form-control"  name='joining_date' value={user.joining_date}  onChange={inputChangeHandler} type="date"/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="button" onClick={() => {setModal(false)}} className="btn btn-danger close-btn">Close</button>
                </form>
               
                
            </Modal>
        </div>      
    )
}

export default AddUser;