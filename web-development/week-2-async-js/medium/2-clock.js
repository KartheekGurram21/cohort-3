// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

// //  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


// const updateSetIntervalCounter = () => {
//     const date = new Date();
//     const hrs = date.getHours();
//     const mins = date.getMinutes();
//     const secs = date.getSeconds();
//     const hrs12 = hrs%12 || 12;
//     const amorpm = hrs>=12 ? "PM" : "AM";
//     console.log(`24hrs format: ${hrs}:${mins}:${secs}`);
//     console.log(`12hrs format: ${hrs12}:${mins}:${secs} ${amorpm}`);
// }

// setInterval(updateSetIntervalCounter, 1000);


const updateSetTimeoutCounter = () => {
    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const hrs12 = hrs%12 || 12;
    const amorpm = hrs>=12 ? "PM" : "AM";
    console.log(`24hrs format: ${hrs}:${mins}:${secs}`);
    console.log(`12hrs format: ${hrs12}:${mins}:${secs} ${amorpm}`);
    setTimeout(updateSetTimeoutCounter, 1000);
}

updateSetTimeoutCounter();