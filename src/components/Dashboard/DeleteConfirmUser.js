import React from 'react';

const DeleteConfirmUser = ({deleteAdmin,deletingUser}) => {
    const {email} =deletingUser
    return (
        <div>
           {/* <!-- The button to open modal --> */}


<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
        <h3 className="font-bold text-lg text-red-600">Are your sure to delete User </h3>
    <div className="modal-action">
    <button onClick={()=>deleteAdmin(email)} htmlFor="my-modal" className="btn btn-error">Remove</button>
      <label htmlFor="my-modal" className="btn">Cancel</label>
    </div>
  </div>
</div> 
        </div>
    );
};

export default DeleteConfirmUser;