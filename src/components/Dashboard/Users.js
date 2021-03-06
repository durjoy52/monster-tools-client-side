import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import DeleteConfirmUser from './DeleteConfirmUser';

const Users = () => {
    const [deletingUser,setDeletingUser] = useState(null)
    const {data:users,isLoading,refetch} = useQuery('allUsers',()=>fetch(`https://dry-reef-40220.herokuapp.com/users`,{
        method:'GET',
        headers:{
            'content-type':'application/json',
        }
    }).then(res=>res.json()))

    if(isLoading){
        return <Loading/>
    }
    const makeAdmin =(email)=>{
        fetch(`https://dry-reef-40220.herokuapp.com/users/admin/${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>{
            if(res.status === 403){
                toast.error('Failed to Make an admin')
            }
        })
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                toast.success('successfully made an admin',{id:'err'})
                refetch()
            }
        })
    }
    const deleteAdmin =(email)=>{
        fetch(`https://dry-reef-40220.herokuapp.com/user/${email}`,{
            method:'DELETE',
            headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                setDeletingUser(null)
                toast.success('successfully Deleted an User',{id:'set'})
                refetch()
            }
        })
    }


    return (
        <div>
            <h1>All users: {users?.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>N</th>
        <th>User Email</th>
        <th>Admin</th>
        <th>Remove Admin</th>
      </tr>
    </thead>
    <tbody>
        {
            users?.map((user,index)=><tr key={user._id}>
                <th>{index}</th>
                <td>{user.email}</td>
                <td>
                    {
                        user.role !== 'admin'?<button onClick={()=>makeAdmin(user.email)} className='btn btn-xs'>Make Admin</button> : <button className="btn btn-xs btn-disabled" disabled='disabled'>Already an Admin</button>
                    }
                </td>
                    <td>
                        {
                        user.role !== 'admin' && <label onClick={()=>setDeletingUser(user)} htmlFor="my-modal" className="btn btn-xs btn-error">Remove User</label>
                        }
                    </td>
              </tr>)
        }
    </tbody>
  </table>
</div>
{
    deletingUser && <DeleteConfirmUser deletingUser={deletingUser} deleteAdmin={deleteAdmin}></DeleteConfirmUser>
}
        </div>
    );
};

export default Users;