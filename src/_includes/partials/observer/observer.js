// Options docs: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
const options = {
    root: null, // use the document's viewport as the container
    rootMargin: '0px', // % or px - offsets added to each side of the intersection 
    threshold: 0.5 // percentage of the target element which is visible
}
// Callback docs: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Targeting_an_element_to_be_observed
let callbackentries = (entries) => {
    entries.forEach(entry => {
        // If entry (interceptor) is visible - according with the params set in `options`
        // then adds `intercepted` class to interceptor
        // otherwise removes `intercepted` class
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
        } else {
            entry.target.classList.remove('fadeIn');
        }
    });
}
// Create the intersection observer instance by calling its constructor and passing it a
// callback function to be run whenever a threshold is crossed in one direction or the other:
let observer = new IntersectionObserver(callbackentries, options);
// Get all the `.interceptor` from DOM and attach the observer to these
document.querySelectorAll('.onscroll').forEach(interceptor => {
    observer.observe(interceptor)
});
