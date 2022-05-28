import React from "react";

const Blogs = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 container mx-auto my-auto p-3">
      <div>
        <h3 className='text-3xl font-bold'>1. Improve the performance of a React Application.</h3>
        <p>
          To optimize React rendering, you need to make sure that components
          receive only necessary props. It will let you control the CPU
          consumption and avoid over-rendering unnecessary features. The
          solution is to create a functional component that will collect all
          props and redistribute them to other components.
        </p>
      </div>
      <div>
        <h3 className='text-3xl font-bold'>2. The different ways to manage a state in a React application.</h3>
        <p>
          5 Types of Application State in React and How They Help in State
          Management.
        </p>
        <ol className="list-decimal ml-4">
          <li>Communication State</li>
          <li>Data State</li>
          <li> Control State</li>
          <li>Session State</li>
          <li>Location State</li>
        </ol>
      </div>
      <div>
        <h3 className='text-3xl font-bold'>3. How does prototypical inheritance work?</h3>
        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
      </div>
      <div>
          <h3 className='text-3xl font-bold'>4. Why you do not set the state directly in React?</h3>
          <p>
          One should never update the state directly because of the following reasons:

If you update it directly, calling the setState() afterward may just replace the update you made.
When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
You will lose control of the state across all components.
          </p>
      </div>
      <div>
          <h3 className='text-3xl font-bold'>5. What is a unit test? Why should write unit tests?</h3>
          <p>
          Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.
          </p>
      </div>
    </div>
  );
};

export default Blogs;
