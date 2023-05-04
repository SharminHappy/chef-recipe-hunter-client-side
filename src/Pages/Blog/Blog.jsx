import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h3>Difference Between Controlled and Uncontrolled Components?</h3>
                <span className='fs-5'>Answer-1:</span>
                <p>Controlled Components:Managed by React state,Parent component updates state on user interaction,Data flows from parent component to component,Easier to debug and Less complex code</p>
                <p>Uncontrolled Component:Managed by component's own internal state,Component updates own internal state on user interaction,Data flows within the component,More difficult to debug and More complex code</p>

            </div>
            <div>
                <h3>How to validate React props using props Types?</h3>
                <span className='fs-5'>Answer-2:</span>
                <p>The PropTypes utility exports a wide range of validators for configuring type definitions. Below, we’ll list the available validators for basic, renderable, instance, multiple, collection, and required prop types.</p>
                <p>Types:</p>
                <ol>
                    <li>PropTypes.any: The prop can be of any data type</li>
                    <li>PropTypes.bool: The prop should be a Boolean</li>
                    <li>PropTypes.symbol: The prop should be a symbol</li>
                    <li>PropTypes.string: The prop should be a string</li>
                    <li>PropTypes.func: The prop should be a function</li>

                </ol>
            </div>
            <div>
            <h3>Difference Between nodeJs and expressJs?</h3>
                <span className='fs-5'>Answer-3:</span>
                <p>Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.</p>
                <p>Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.</p>

            </div>
            <div>
            <h3>What is a custom hook, and why will you create a custom hook?</h3>
                <span className='fs-5'>Answer-4:</span>
                <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.</p>
                <p>Custom React JS hooks offer three major benefits over standard library hooks: Reusability, readability, and testability. that why i will used custom hook.</p>
            </div>
        </div>
    );
};

export default Blog;