import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Reviews = () => {
  return (
    <div className="my-4">
        <div className="text-center ">
        <h2 className="text-2xl">COMMENTS</h2>
        <button className="text-2xl bg-black text-white px-6 py-4 mt-2">Client Says</button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 justify-items-center mb-3">
        <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="avatar">
            <div className="w-12 rounded-full mr-2">
              <img src="https://api.lorem.space/image/face?hash=91831"alt='' />
            </div>
            <span className="font-bold">J.K Rowling</span>
          </div>
          <div className="flex text-warning">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
        </div>
        <p>I am happy with this service.Perfect delivery process.🤗</p>
      </div>
    </div>
        <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="avatar">
            <div className="w-12 rounded-full mr-2">
              <img src="https://api.lorem.space/image/face?hash=53273" alt="" />
            </div>
            <span className="font-bold">blake jane</span>
          </div>
          <div className="flex text-warning">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar/>
          </div>
        </div>
        <p>It was easy to purchase.Product quality is really good👍</p>
      </div>
    </div>
        <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="avatar">
            <div className="w-12 rounded-full mr-2">
              <img src="https://api.lorem.space/image/face?hash=26448" alt="" />
            </div>
            <span className="font-bold">jack sparrow</span>
          </div>
          <div className="flex text-warning">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
        </div>
        <p>Best quality with an affordable price.I found every vehicles tools that I needed.👌</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Reviews;
