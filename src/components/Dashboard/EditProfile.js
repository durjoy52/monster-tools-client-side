import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsFillImageFill } from "react-icons/bs";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
const EditProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = useAuthState(auth);
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  if (updating) {
    return <Loading />;
  }
  if (error) {
    toast.error(error?.message, { id: "error" });
  }

  const imageStorageKey = "29db80accb34a1bf315a1b4ad410b337";
  const onsubmit = async (data) => {
      const displayName = data.displayName
      const formData = new FormData();
      const photoURL = data.photoURL[0];
      formData.append("image", photoURL);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      toast('please wait',{id:'id'})
      fetch(url,{
          method:'POST',
          body:formData
        })
        .then(res=>res.json())
        .then(result=>{
          if(result.success){
                const photoURL = result.data.url
                updateProfile({displayName,photoURL})
           const profile = {
             email:user?.email,
             displayName: data.displayName,
               education: data.education,
               linkedin:data.linkedin,
               location:data.location,
               phone:data.phone,
               photoURL:photoURL
           }
           fetch(`https://dry-reef-40220.herokuapp.com/userProfile/${user?.email}`,{
               method:"PUT",
               headers:{
                   'content-type':'application/json',
               },
               body:JSON.stringify(profile)
           }).then(res=>res.json())
           .then(data =>{
             console.log(data)
             if(data.modifiedCount > 0 ){
               toast.success('profile update successfully',{id:'err'})
               reset()
              }else{
                toast.error('failed to update profile',{id:'err'})
              }
           })
       }
      });
  };
  return (
    <div>
      <h3 className="text-3xl text-center text-blue-600">
        Update your profile
      </h3>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="card-body w-80">
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              value={user?.email}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">new name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("displayName")}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control" required>
            <label className="label">
              <span className="label-text">education</span>
            </label>
            <input
              type="text"
              {...register("education")}
              placeholder="education"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin</span>
            </label>
            <input
              type="text"
              {...register("linkedin")}
              placeholder="give linkedin link"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">location</span>
            </label>
            <input
              type="text"
              {...register("location")}
              placeholder="location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">phone number</span>
            </label>
            <input
              type="text"
              {...register("phone")}
              placeholder="phone number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label
              htmlFor="img"
              className="bg-slate-300  flex justify-center input-bordered input items-center rounded"
            >
              <span className="text-xl">Choose image </span>{" "}
              <BsFillImageFill className="text-5xl" />
            </label>
            <input
              id="img"
              {...register("photoURL", {
                required: { value: true, message: "image is required" },
              })}
              type="file"
              placeholder="image"
              className="input input-bordered hidden"
            />
            <label className="label">
              {errors.photoURL?.type === "required" && (
                <span className="text-red-500">{errors.photoURL.message}</span>
              )}
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="update profile"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
