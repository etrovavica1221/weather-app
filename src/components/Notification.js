import React from 'react';

const Notification = (props) => {

    console.log(props);
    if (!props.isVisible) return null;

    let message;
    if (props.error === 404) {
        message='The location is not found.';
    } else if (props.error === 500) {
        message='Sorry! The Weather App is down. Please try later.';
    } else {
        message='Ooops.Something went wrong!';
    }    

    return(
        <>
            <div>{message}</div>
        </>
    )
}
export default Notification;