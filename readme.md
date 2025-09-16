

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  <br>

1 no. answer: <br>  
They all are DOM mathods and they are applied to select element.<br>  
(a) getElementById is used for a single element and selected by its id.it should be unique.Returns a elements itself and returns null if not found.<br>  

(b) getElementByClassName is used for selecting all elements with a given class and returns a Htmlcollection with matched class.Htmlcollection is an Array-like, but not an Array.It is live.if Dom change,it updsates automatically.<br>  

(c) querySelector is used for select first element that match a css selector.Returns a elements itself and returns null if not found.<br>  

(d) querySelectorAll is used for select all elements that match a CSS selector and returns a Nodelist.it is Array-like,but not Array.<br>

2. How do you **create and insert a new element into the DOM**? <br>

2 no Answer: To create and insert a new element into the DOM ,here are some process. <br>

option-1 :  Create a new html element using  createdElement = document.createElement('element type');<br>

option-2: To fix html using  createdElement.innerHTML = ` write what you want to set with html tag in the new createdElement  `; <br>

option-3 : Declare a variable for its parent, where you want to put this new element.like:  const parent = document.getElementByid(''). <br>

option-4 : And now its time to append in this parent. <br>

parent.appendChild(createdElement). <br>

thats all of how i create and insert a new element into the DOM.<br>


3. What is **Event Bubbling** and how does it work? <br>

3 NO. Answer :  Events bubbling is a way event propogates in the DOM.When events happen in the element (like a 'click'),it bubbles-up from the target elements to its ancestors in the DOM tree.<br>
In other words : events starts at the inner most element and move outward to the parent, then the grandparent and so on.<br>

example: i took a section and its child is a div and div's child is a h2.<br>


If you click h2 ,that mean you also click on div and section.so event happend on target but bubbling to the parent, grandparent, and so on.<br>

If you want to stop bubbling you have use :  event.stopPropogation();<br>
this function stop bubbling.<br>


4. What is **Event Delegation** in JavaScript? Why is it useful?<br>

4 no Answer : Event Delegation is a technique  in javascript where you attach a single eventListener to a parent instead of adding separate listener to each child element.<br>
With this mathod you can handle all child element by adding a eventlistener in parent.It works because of event bubbling.When a child is clicked,the event bubbles up to the parent.<br>


The usefull things are below:<br>
1.One listener instead of improves many perfomance, especially large list or table.<br>

2.If you add new element after the page load,the parent listener still work.where direct listener on new element won't work automatically.<br>

3.No need to loop through to child element to attach listener.<br>




5. What is the difference between **preventDefault() and stopPropagation()** methods?<br>

5 no Answer : These Two mathods are very difference things in javascript.<br>

1.PreventDefault() :<br>
  (a)It prevents the default action of an elements from happenning.<br>
  (b)doesn't stop the event bubbling.<br>
  (c)Commonly used for forms,links,buttons.<br>

2.stopPropagation():<br>
1.stop the event from bubbling.<br>
2.doesn't stop the default action of an element.<br>