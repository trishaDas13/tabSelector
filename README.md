# tabSelector

Hosting Link: https://trishadas13.github.io/tabSelector/

<hr>

<h2> 🟡 HTML code description: </h2>

1. [div class="container"]: This [div] element likely serves as the main container for the content.
2.	[div class="img animate__animated animate__zoomIn"][/div]: Inside the container, there's another [div] element with the class "img." It has the classes "animate__animated" and "animate__zoomIn," which suggest that it might be animated with a zoom-in effect using CSS animations. This could be an image or an element with background imagery.
3.	[div class="tabs animate__animated animate__zoomIn"]: Another [div] element with the class "tabs" is present. Similar to the "img" element, it also has the classes "animate__animated" and "animate__zoomIn," indicating potential CSS animations.
      •	[div class="tab-container"]: Inside the "tabs" [div], there's a "tab-container" element.
      •	[div class="tab live"]Ayase Chihaya[/div]: This represents a tab labeled "Ayase Chihaya" with the class "live," suggesting that it might be the active or selected tab.
      •	[div class="tab"]Wataya Arata[/div]: Another tab labeled "Wataya Arata."
      •	[div class="tab"]Mashima Taichi[/div]: A third tab labeled "Mashima Taichi."
      •	[div class="content"]: This [div] element is associated with the content to be displayed when one of the tabs is selected.
      •	[h1]Chihaya-Furu[/h1]: An [h1] heading with the text "Chihaya-Furu" is inside the "content" [div]. This is likely the content that will be shown when the "Ayase Chihaya" tab is active.
  	
<hr>

<h2> 🟡 CSS code description: </h2>

1.	The universal selector * is used to apply the following styles to all elements:
    •	margin: 0; removes any margin space around elements.
    •	padding: 0; removes any padding within elements.
    •	box-sizing: border-box; sets the box-sizing model to border-box, which includes padding and borders within the element's total width and height.
2.	The body element is styled:
    •	width: 100%; sets the width of the body to 100%.
    •	height: 100vh; sets the height of the body to 100% of the viewport height.
    •	background color: black; sets the background color of the body to black.
    •	display: flex; uses flexbox for layout.
    •	justify-content: center; horizontally centers its child elements.
    •	align-items: center; vertically centers its child elements.
    •	font-family: 'Rubik', sans-serif; sets the font family for the text.
3.	The .container class styles a container element:
    •	display: flex; uses flexbox for layout.
    •	justify-content: space-between; evenly distributes child elements horizontally.
    •	width: 90%; sets the width of the container to 90% of its parent's width.
    •	height: 80%; sets the height of the container to 80% of its parent's height.
4.	The .img and .tabs classes style two sections within the container:
    •	width: 48.5%; sets the width of each section to 48.5% of the container's width.
    •	border-radius: 15px; rounds the corners of the sections.
    •	-webkit-box-reflect: adds a reflection effect to the sections.
    •	.img class sets a background image, position, and size.
    •	.tab-container class is used to wrap the tabs.
5.	The .tab class styles individual tabs:
    •	font-size: 20px; sets the font size of the tab text.
    •	background-color: rgb(182, 201, 240); sets the background color of the tabs.
    •	padding: 0.7rem; adds padding to the tabs.
    •	width: 100%; ensures the tabs occupy the full width.
    •	text-align: center; centers the text within the tabs.
    •	cursor: pointer; changes the cursor to a pointer when hovering over the tabs.
    •	border-top-left-radius and border-top-right-radius are used to round the corners of the first and last tabs.
6.	The .tabs class styles the content of the tabs:
    •	background-color: rgb(255, 229, 226); sets the background color of the content.
    •	line-height: 25px; defines the line height.
7.	The .content class styles the content section:
    •	margin: 2rem; adds margin to the content section.
    •	margin-top: 1rem; adds margin to the top of paragraphs.
    •	ul li styles list items within an unordered list.
    •	h1 styles an absolute-positioned heading.
8.	The .active class styles the active tab with a background color and a transition effect.
9.	The .tab:hover:not(.active) class styles tabs when hovered, changing their background and text color.
10.	In a media query for screens with a maximum width of 1024px, the layout is adjusted for responsiveness:
    •	The .container becomes a single column layout.
    •	The .content h1 is hidden.
    •	The .img and .tabs elements adjust their widths.
    •	Padding is added to the body.
   	
<hr>

<h2> 🟡 JavaScript code description: </h2>

1.	It selects three elements with the class "tab" and stores them in an array-like NodeList called tab. It also selects an element with the class "content" and an element with the class "img" and stores them in variables content and img, respectively.
2.	Event listeners are added to each of the three tabs (tab[0], tab[1], and tab[2]), and each listener responds to a click event by executing a function.
3.	When the first tab (tab[0]) is clicked:
    •	It adds the class "active" to the first tab and removes it from the other tabs, indicating which tab is currently active.
    •	It updates the content element's innerHTML with information about a character named Chihaya, including details about her birthday, blood             type, height, weight, hobbies, and a description.
    • It sets the background image of the img element to an image of Chihaya and specifies a transition duration and timing function for the             image.
4.	When the second tab (tab[1]) is clicked:
    •	It adds the class "active" to the second tab and removes it from the other tabs.
    •	It updates the content element's innerHTML with information about a character named Arata, including details about his birthday, blood type,        height, weight, hobbies, and a description.
    •	It sets the background image of the img element to an image of Arata and specifies a transition duration and timing function for the image.
5.	When the third tab (tab[2]) is clicked:
    •	It adds the class "active" to the third tab and removes it from the other tabs.
    •	It updates the content element's innerHTML with information about a character named Taichi, including details about his birthday, blood             type, height, weight, hobbies, and a description.
    •	It sets the background image of the img element to an image of Taichi and specifies a transition duration and timing function for the image.

<hr>

<h2> 🟡 Summary</h2>

In summary, this code creates a tabbed interface where clicking on different tabs displays information and images related to different characters. The active tab is visually indicated by the "active" class, and the background image transitions smoothly when switching between tabs. This CSS code creates a responsive layout with tabs that change appearance when hovered or activated. If you have any specific questions or need further assistance, please let me know!
<hr>
<h2> 🟡 UI </h2>

[tabSelector.webm](https://github.com/trishaDas13/tabSelector/assets/126088849/a1830df9-5c31-4cc0-8841-39591d4f7238)
