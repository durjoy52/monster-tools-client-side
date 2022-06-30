import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BsFillImageFill } from 'react-icons/bs';

const AddProducts = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    
      const imageStorageKey = "29db80accb34a1bf315a1b4ad410b337";
      const onsubmit = async (data) => {
          const formData = new FormData();
          const photoURL = data.img[0];
          formData.append("image", photoURL);
          const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
          toast('please wait..',{id:'wait'})
          fetch(url,{
              method:'POST',
              body:formData
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.success){
                    const photoURL = result.data.url
               const product = {
                 name: data.name,
                 img:photoURL,
                   description:data.description,
                   order_quantity:data.order_quantity,
                   available_quantity:data.available_quantity,
                   price:data.price,
               }
               fetch(`https://dry-reef-40220.herokuapp.com/products`,{
                   method:"POST",
                   headers:{
                       'content-type':'application/json',
                       'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                   },
                   body:JSON.stringify(product)
               }).then(res=>res.json())
               .then(data =>{
                   console.log(data.insertedId)
                 if(data.insertedId){
                   toast.success('product add successfully',{id:'test'})
                   reset()
                  }else{
                    toast.error('failed to add product',{id:'err'})
                  }
               })
           }
          });
      };
      return (
        <div className='container mx-auto'>
          <h3 className="text-3xl text-center text-blue-600">
            Add Your Product
          </h3>
          <div className="flex justify-center">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="card-body w-80">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">product name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control" required>
                <label className="label">
                  <span className="label-text">Price per unit</span>
                </label>
                <input
                  type="text"
                  {...register("price")}
                  placeholder="price per unit"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  type="text"
                  {...register("available_quantity")}
                  placeholder="available quantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum quantity</span>
                </label>
                <input
                  type="text"
                  {...register("order_quantity")}
                  placeholder="minimum order"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  {...register("description")}
                  placeholder="short description"
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
                  {...register("img", {
                    required: { value: true, message: "image is required" },
                  })}
                  type="file"
                  placeholder="image"
                  className="input input-bordered hidden"
                />
                <label className="label">
                  {errors.img?.type === "required" && (
                    <span className="text-red-500">{errors.img.message}</span>
                  )}
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Add product"
                />
              </div>
            </div>
          </form>
          </div>
        </div>)
};

export default AddProducts;