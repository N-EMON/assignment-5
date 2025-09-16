

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
1 no. answer: 
They all are DOM mathods and they are applied to select element.
(a) getElementById is used for a single element and selected by its id.it should be unique.Returns a elements itself and returns null if not found.

(b) getElementByClassName is used for selecting all elements with a given class and returns a Htmlcollection with matched class.Htmlcollection is an Array-like, but not an Array.It is live.if Dom change,it updsates automatically.

(c) querySelector is used for select first element that match a css selector.Returns a elements itself and returns null if not found.

(d) querySelectorAll is used for select all elements that match a CSS selector and returns a Nodelist.it is Array-like,but not Array.

2. How do you **create and insert a new element into the DOM**?
2 no Answer: To create and insert a new element into the DOM ,here are some process.

option-1 :  Create a new html element using  createdElement = document.createElement('element type');

option-2: To fix html using  createdElement.innerHTML = ` write what you want to set with html tag in the new createdElement  `;

option-3 : Declare a variable for its parent, where you want to put this new element.like:  const parent = document.getElementByid('').

option-4 : And now its time to append in this parent.

parent.appendChild(createdElement).

thats all of how i create and insert a new element into the DOM.


3. What is **Event Bubbling** and how does it work?
3 NO. Answer :  Events bubbling is a way event propogates in the DOM.When events happen in the element (like a 'click'),it bubbles-up from the target elements to its ancestors in the DOM tree.
In other words : events starts at the inner most element and move outward to the parent, then the grandparent and so on.

example: 

<section>
    <div>
        <h2>This is a title</h2>
    </div>
</section>

If you click h2 ,that mean you also click on div and section.so event happend on target but bubbling to the parent, grandparent, and so on.

If you want to stop bubbling you have use :  event.stopPropogation();
this function stop bubbling.


4. What is **Event Delegation** in JavaScript? Why is it useful?
4 no Answer : Event Delegation is a technique  in javascript where you attach a single eventListener to a parent instead of adding separate listener to each child element.
With this mathod you can handle all child element by adding a eventlistener in parent.It works because of event bubbling.When a child is clicked,the event bubbles up to the parent.


The usefull things are below:
1.One listener instead of improves many perfomance, especially large list or table.

2.If you add new element after the page load,the parent listener still work.where direct listener on new element won't work automatically.

3.No need to loop through to child element to attach listener.




5. What is the difference between **preventDefault() and stopPropagation()** methods?
5 no Answer : These Two mathods are very difference things in javascript.

1.PreventDefault() :
  (a)It prevents the default action of an elements from happenning.
  (b)doesn't stop the event bubbling.
  (c)Commonly used for forms,links,buttons. 

2.stopPropagation(): 
1.stop the event from bubbling.
2.doesn't stop the default action of an element.