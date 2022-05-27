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
        <div class="card max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <div className="flex justify-between">
          <div class="avatar">
            <div class="w-12 rounded-full mr-2">
              <img src="https://api.lorem.space/image/face?hash=91831" />
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.🤗</p>
      </div>
    </div>
        <div class="card max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <div className="flex justify-between">
          <div class="avatar">
            <div class="w-12 rounded-full mr-2">
              <img src="https://api.lorem.space/image/face?hash=53273" />
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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.👍</p>
      </div>
    </div>
        <div class="card max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <div className="flex justify-between">
          <div class="avatar">
            <div class="w-12 rounded-full mr-2">
              <img src="https://api.lorem.space/image/face?hash=26448" />
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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores cum necessitatibus impedit error nisi expedita.👌</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Reviews;
