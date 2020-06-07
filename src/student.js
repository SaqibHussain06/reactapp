import React from 'react';

function Student (props){
return(
    <div>
        <h1>I am student of {props.course} </h1>
        <h1>This is my 3rd assignment of {props.task} </h1>
    </div>
);

}

export default Student;