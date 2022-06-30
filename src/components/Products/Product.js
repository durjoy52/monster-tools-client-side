
import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Product = ({product,refetch}) => {
    const {img,name,description,available_quantity,price,_id,order_quantity} = product
    refetch()
    return (
        <div className="card rounded-none bg-base-100 shadow-xl mb-6 border border-success">
  <figure className="px-10 pt-10 bg-success pb-5">
    <img src={img} alt={name} className="rounded-xl h-60" />
  </figure>
  <div className="card-body font-serif">
    <h2 className="card-title text-neutral mb-[-8px]">{name}</h2>
    <div className="divider my-0"></div>
    <p>{description}</p>
    <div className='grid lg:grid-cols-2 gap-3 font-bold font-mono'>
    <p className='text-md'>Price(per unit): <span className='border p-1 text-violet-500 font-bold rounded-xl'>${price}</span></p>
    <p className='text-md'>Available: <span className='border p-1 text-cyan-500 rounded-xl'>{available_quantity}</span> pieces</p>
    <p className='text-md'>Minimum-order:<span className='border p-1 text-cyan-500 rounded-xl'>{order_quantity}</span> pieces</p>
    </div>
    <div className="card-actions flex justify-end">
    <Link className="btn btn-error rounded-none text-white" to={`/purchase/${_id}`}>Order Now <AiFillShopping fontSize={20}/></Link>
    </div>
  </div>
</div>
    );
};

export default Product;