import { useState } from "react";
import Modal from '@material-ui/core/Modal';

function RemoveUser({modal_open, setModal, user_id ,removeHandler, inputChangeHandler}){
   
    return(
          <div className='remove_btn'>
            <button className='btn btn-danger' onClick={()=>{setModal(true)}}>Remove User</button>
            <Modal onClose={() => {setModal(false)}} open={modal_open}  className='modalClass'  >
                <form onSubmit={removeHandler} className="add-form">
                    <div className="form-group">
                        <label>User Id</label>
                        <input name='id' className="form-control" value={user_id} type="text" onChange={inputChangeHandler}/> 
                    </div>
                    <button type="submit" className="btn btn-success">Delete</button>
                    <button type="button" onClick={() => {setModal(false)}} className="btn btn-danger close-btn">Close</button>
                </form>
            </Modal>
        </div>      
    )
}

export default RemoveUser;