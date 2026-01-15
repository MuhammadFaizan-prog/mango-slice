 

🚀 Locomotive Scroll v5 Beta Release

Try out the beta version of Locomotive Scroll v5!

🔗 Click here to try Locomotive Scroll v5 Beta

Your feedback is valuable during this beta testing phase. If you encounter any issues or have suggestions, please open an issue.

Happy scrolling! 😄



Locomotive Scroll
Detection of elements in viewport & smooth scrolling with parallax effects.

Installation
⚠️ Scroll-hijacking is a controversial practice that can cause usability, accessibility, and performance issues. Please use responsibly.

npm install locomotive-scroll
Usage
Basic
With simple detection.

HTML
<h1 data-scroll>Hey</h1>
<p data-scroll>👋</p>
CSS
Add the base styles to your CSS file.

locomotive-scroll.css

JS
With a bundler
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
Or without
<script src="locomotive-scroll.min.js"></script>
<script>
    (function () {
        var scroll = new LocomotiveScroll();
    })();
</script>
Get the JS file.

Smooth
With smooth scrolling and parallax.

<div data-scroll-container>
    <div data-scroll-section>
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
    </div>
    <div data-scroll-section>
        <h2 data-scroll data-scroll-speed="1">What's up?</h2>
        <p data-scroll data-scroll-speed="2">😬</p>
    </div>
</div>
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
Note: scroll-sections are optional but recommended to improve performance, particularly in long pages.

Advanced
Make it do what you want.

With methods
<section id="js-target">Come here please.</section>
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
const target = document.querySelector('#js-target');

scroll.scrollTo(target);
With events
<!-- Using modularJS -->
<div data-scroll data-scroll-call="function, module">Trigger</div>
<!-- Using jQuery events -->
<div data-scroll data-scroll-call="EVENT_NAME">Trigger</div>
<!-- Or do it your own way 😎 -->
<div data-scroll data-scroll-call="{y,o,l,o}">Trigger</div>
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();

scroll.on('call', func => {
    // Using modularJS
    this.call(...func);
    // Using jQuery events
    $(document).trigger(func);
    // Or do it your own way 😎
});
Instance options
Option	Type	Default	Description
el	object	document	Scroll container element.
name	string	'scroll'	Data attribute prefix (data-scroll-xxxx).
offset	array(2)	[0,0]	Global in-view trigger offset : [bottom,top]
Use a string with % to use a percentage of the viewport height.
Use a numeric value for absolute pixels unit.
E.g. ["30%",0], [100,0], ["30%", 100]
repeat	boolean	false	Repeat in-view detection.
smooth	boolean	false	Smooth scrolling.
initPosition	object	{ x: 0, y: 0 }	Smooth only
An object defining the initial scroll coordinates on a smooth instance. For example: { x: 0, y: 1000 }
direction	string	vertical	Smooth only
Scroll direction: vertical or horizontal
lerp	number	0.1	Smooth only
Linear interpolation (lerp) intensity. Float between 0 and 1.
This defines the "smoothness" intensity. The closer to 0, the smoother.
getDirection	boolean	false	Add direction to scroll event.
getSpeed	boolean	false	Add speed to scroll event.
class	string	is-inview	Element in-view class.
initClass	string	has-scroll-init	Initialize class.
scrollingClass	string	has-scroll-scrolling	Is scrolling class.
draggingClass	string	has-scroll-dragging	Is dragging class.
smoothClass	string	has-scroll-smooth	Has smooth scrolling class.
scrollbarContainer	object	false	Smooth only
Specifies the container element for the scrollbar to be appended in. If false, scrollbar will be appended to the body.
scrollbarClass	string	c-scrollbar	Smooth only
Scrollbar element class.
multiplier	number	1	Smooth only
Factor applied to the scroll delta, allowing to boost/reduce scrolling speed (regardless of the platform).
firefoxMultiplier	number	50	Smooth only
Boost scrolling speed of Firefox on Windows.
touchMultiplier	number	2	Smooth only
Multiply touch action to scroll faster than finger movement.
scrollFromAnywhere	boolean	false	Smooth only
By default locomotive-scroll listens for scroll events only on the scroll container (el option). With this option set to true, it listens on the whole document instead.
gestureDirection	string	vertical	Smooth only
Defines which gesture direction(s) scrolls in your instance. You can use :
vertical
horizontal
both
tablet & smartphone	object		Object allowing to override some options for a particular context. You can specify:
smooth
direction
horizontalGesture
For tablet context you can also define breakpoint (integer, defaults to 1024) to set the max-width breakpoint for tablets.
reloadOnContextChange	boolean	false	Allows to reload the page when switching between desktop, tablet and smartphone contexts. It can be useful if your page changes a lot between contexts and you want to reset everything.
resetNativeScroll	boolean	true	Sets history.scrollRestoration = 'manual' and calls window.scrollTo(0, 0) on locomotive-scroll init in Native Class. Useful if you use transitions with native scrolling, otherwise we advise to set it to false if you don't want to break History API's scroll restoration feature.
Element attributes
Attribute	Values	Description
data-scroll		Detect if in-view.
data-scroll-id	string	(Optional) Useful if you want to scope your element and get the progress of your element in the viewport for example.
data-scroll-container		Defines the scroll container. Required for basic styling.
data-scroll-section		Defines a scrollable section. Splitting your page into sections may improve performance.
data-scroll-class	string	Element in-view class.
data-scroll-offset	string	Element in-view trigger offset : bottom,top
First value is bottom offset, second (optional) is top offset.
Percent is relative to viewport height, otherwise it's absolute pixels.
E.g. "10", "100,50%", "25%, 15%"
data-scroll-repeat	boolean	Element in-view detection repeat.
data-scroll-call	string	Element in-view trigger call event.
data-scroll-position	string	top, bottom, left or right
Window position of in-view trigger.
data-scroll-speed	number	Smooth only
Element parallax speed. A negative value will reverse the direction.
data-scroll-delay	number	Smooth only
Element's parallax lerp delay.
data-scroll-direction	string	Smooth only
Element's parallax direction. vertical or horizontal
data-scroll-sticky		Smooth only
Sticky element. Starts and stops at data-scroll-target position.
data-scroll-target	string	Smooth only
Target element's in-view position.
Instance methods
Method	Description	Arguments
init()	Reinitializes the scroll.	
on(eventName, function)	Listen instance events ⬇.	
update()	Updates all element positions.	
destroy()	Destroys the scroll events.	
start()	Restarts the scroll events.	
stop()	Stops the scroll events.	
scrollTo(target, options)	Scroll to a target.	
target: Defines where you want to scroll. Available values types are :
node : a dom element
string : you can type your own selector, or use values "top" and "bottom" to reach scroll boundaries
int : An absolute scroll coordinate in pixels
options (optional, object) : Settings object. Available values are:
offset (integer) : Defines an offset from your target. E.g. -100 if you want to scroll 100 pixels above your target
callback (function) : Called when scrollTo completes (note that it won't wait for lerp to stabilize)
duration (integer) : Defines the duration of the scroll animation in milliseconds. Defaults to 1000
Smooth only
easing (array) : An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing.
Defaults to [0.25, 0.00, 0.35, 1.00]
See https://greweb.me/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation
Keep in mind this will also be affected by the lerp unless you set disableLerp to true.
Smooth only
disableLerp (boolean) : Lerp effect won't be applied if set to true
Smooth only
Instance events
Event	Arguments	Description
scroll	obj	Returns scroll instance (position, limit, speed, direction and current in-view elements).
call	func	Trigger if in-view. Returns your string or array if contains ,.
Progressive playing animations example (like gsap)
All data-scroll elements have a progress value. In the on scroll event you can get all current in-view elements.

HTML
<h1 data-scroll data-scroll-id="hey">Hey</h1>
JS
scroll.on('scroll', (args) => {
    // Get all current elements : args.currentElements
    if(typeof args.currentElements['hey'] === 'object') {
        let progress = args.currentElements['hey'].progress;
        console.log(progress);
        // ouput log example: 0.34
        // gsap example : myGsapAnimation.progress(progress);
    }
});
Dependencies
Name	Description
Virtual Scroll	Custom scroll event with inertia/momentum.
modularScroll	Elements in viewport detection. Forked from it, not a dependency.
bezier-easing	Allows to define an easing to scrollTo movement
Browser support
Works on most modern browsers. Chrome, Firefox, Safari, Edge...

To get IE 11 support, you need polyfills. You can use your own or include these before our script.

<script nomodule src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js" crossorigin="anonymous"></script>
<script nomodule src="https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll" crossorigin="anonymous"></script>
Who's using Locomotive Scroll?
thierrychopain.com
clmt.paris
miragefestival.com/2020
mazellier.design
ccccontemple.com
abhishekjha.me/muteza
normal.studio
mixlegno.com
nfq.group
works.studio
beangels.eu
izakaya-caen.fr
white-elephant.fr
henge07.com
loirevalleylodges.com
Related
Locomotive Boilerplate 🚂