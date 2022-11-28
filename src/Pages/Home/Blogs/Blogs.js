import React from 'react';
import img1 from '../../../assets/Blogs-img/React-State-Management.jpg'
import img2 from '../../../assets/Blogs-img/10-08-20-objects-prototype-and-prototypal-inheritance-in-javascript-blog.jpg'
import img3 from '../../../assets/Blogs-img/retina_1708x683_staging.toptal.net_qa_how-to-write-testable-code-and-why-it-matters-25bff356169b7ee5f878b7b591b84afa.png'
import img4 from '../../../assets/Blogs-img/angular-vs-react-vs-vue.png'

const Blogs = () => {
    return (
        <div className='grid w-9/12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className=''>
                    <img className='rounded' src={img1} alt="" />
                </div>
                <div className='w-4/5 '>
                    <h1 className='text-3xl font-bold mb-3'>What are the different ways to manage a state in a React application?</h1>
                    <p className='text-xl'>As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                <div className=''>
                    <img className='rounded' src={img2} alt="" />
                </div>
                <div className='w-4/5 '>
                    <h1 className='text-3xl font-bold mb-3'>How does prototypical inheritance work?</h1>
                    <p className='text-xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                <div className=''>
                    <img className='rounded' src={img3} alt="" />
                </div>
                <div className='w-4/5 '>
                    <h1 className='text-3xl font-bold mb-3'>What is a unit test? Why should we write unit tests?</h1>
                    <p className='text-xl'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-5'>
                <div className=''>
                    <img className='rounded' src={img4} alt="" />
                </div>
                <div className='w-4/5 '>
                    <h1 className='text-3xl font-bold mb-3'> React vs. Angular vs. Vue?</h1>
                    <p className='text-xl'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components</p>
                </div>
            </div>


        </div>
    );
};

export default Blogs;