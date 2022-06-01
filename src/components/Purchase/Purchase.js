import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
const Purchase = () => {
    const {
        register,
        handleSubmit,
        reset,
      } = useForm();
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const {
    data: product
  } = useQuery("purchase", () =>
    fetch(`http://localhost:5000/products/${id}`).then((res) => res.json())
  );
  if (loading) {
    return <Loading />;
  }
  const imageStorageKey = "29db80accb34a1bf315a1b4ad410b337";
  const onsubmit = data => {
      const pricePerUnit = product?.price;
      const totalPrice = parseInt(data.orderQuantity) * parseInt(pricePerUnit);
      const formData = new FormData();
      const photoURL = product.img;
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
                const img = result.data.url
           const order = {
             email:user?.email,
             totalPrice,
             pricePerUnit,
             displayName: user?.displayName,
             name: product?.name,
             orderQuantity: data.orderQuantity,
               address:data.location,
               phone:data.phone,
               img
           }
           fetch(`http://localhost:5000/orders`,{
               method:"POST",
               headers:{
                   'content-type':'application/json',
               },
               body:JSON.stringify(order)
           }).then(res=>res.json())
           .then(data =>{
             console.log(data)
             if(data.insertedId){
               reset()
              }else{
                toast.error('failed to purchase',{id:'err'})
              }
           })
       }
      });
  };
  return (
    <div className="container mx-auto flex justify-evenly flex-col md:flex-row items-center md:h-screen gap-4">
      <div className="card rounded-none card-compact w-80 lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product?.img} alt={product?.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>{product?.description}</p>
          <div className="flex justify-between">
            <p>Minimum-Order: {product?.minimum}</p>
            <p>Price: ${product?.price} per pieces</p>
          </div>
          <p>Available-Quantity: {product?.available_quantity}</p>
        </div>
      </div>
      <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold">
            Purchase now: 
            <span className="text-purple-500 p-1 border rounded">{product?.name}</span>
          </h2>
          <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(onsubmit)}>
        <div className="card-body w-80">
          <div className="form-control">
            <input
              type="text"
              placeholder="email"
              value={user?.email}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              value={user?.displayName}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              className="input input-bordered"
              value={product?.name}
              disabled
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              {...register("location")}
              placeholder="give your location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              {...register("phone")}
              placeholder="phone number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Order Quantity</span>
            </label>
            <input
              type="text"
              {...register("orderQuantity")}
              placeholder="order quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary text-white font-bold"
              type="submit"
              value="Purchase Now"
            />
          </div>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
