# Manipulating HTML Elements

>## createElement()
>
>This is used to create HTML element `document.createElement()`. It accepts a HTML tag name and returns a new Node with the Element >type.:
>
>```html
>    <script>
>    let div = document.createElement("div");
>
>    // add html code
>    div.innerHTML = "<p>Welcome to OnohLabs</p";
>    // print code
>    console.log(div);
>
>    // add any attribute
>    div.id = "heading"
>    div.className = "title"
>    div.role = "alert"
>
>    // display on webpage
>    document.body.appendChild(div);
>    </script>
>```
>
>## appendChild():
>
>This is used to add a node to the end of the list of child nodes of a specific parent node. An existing child node can be moved >to the new position within the document.
>
>```html
>    <ul id="menu">
>        <li>Home</li>
>        <li>About</li>
>        <li>Blog</li>
>        <li>Project</li>
>        <!-- list item will appended here -->
>    </ul>
>    <script>
>        let menu = document.getElementById("menu");
>
>        let list = document.createElement("li");
>        list.innerHTML = "Contact";
>
>        menu.appendChild(list);
>    </script>
>
>```
>
>  
>## textContent():
>
>This is used to get the text content of a node and its descendants. We can also insert texts as well.
>```html
>    <ul id="menu">
>        <li>Home</li>
>        <li>About</li>
>        <li>Blog</li>
>        <li>Project</li>
>        <!-- list item will appended here -->
>    </ul>
>    <script>
>        let menu = document.getElementById("menu");
>
>        console.log(menu.textContent);
>    </script>
>
>```
>
>It ignores the `<li>` tag and shows only the contents in the console.
>
><p align="right"><u>index.html</u></p>
>
>```                               
>            Home
>            About
>            Blog
>            Project
>```
>
>
>## innerHTML():
>
>This function is used to add the HTML code on the webpage.
>```html
>    <ul id="menu">
>        <li>Home</li>
>        <li>About</li>
>        <li>Blog</li>
>        <!-- innerText won't display this item on the webpage -->
>        <li style="display: none;">Project</li>
>
>    </ul>
>    <script>
>        let menu = document.getElementById("menu");
>
>        menu.innerHTML = `<p>"Oh my God!" was the lady's reaction to the news.</p>`
>
>    </script>
>```
>## after():
>
>Inserts one or more nodes after the element. It can also accept mutliple strings as arguments:
>
>```html
>
>    <script>
>        let menu = document.getElementById("menu");
>
>        // multiple nodes
>        menu.after(node, node2, ... nodeN)
>        // multiple strings
>        menu.after(str1, str2)
>        
>    </script>
>```
>## append():
>
>Similar to appendChild but differs in the sense that it allows us to add multiple elements/nodes and strings:
>
>```html
>
>    <script>
>        // Syntax
>        parentNode.append(newNodes);
>        parentNode.append(str);
>        
>    </script>
>```
>## prepend()
>
>Adds a new node as the first child in the parentnode.
>
>```html
>    <script>
>        // Syntax
>        parentNode.prepend(newNode);      
>```
>
>
>## insertAdjacentHTML()
>
>This inserts an HTML element is a specified position (`"beforebegin", "beforeend", "afterbegin", "afterend"`):
>
>```html
>    <script>
>        // Syntax
>        element.insertAdjacentHTML(positionName, text);
>        // OR
>        element.insertAdjacentHTML(where , element);
>    <script>
>        
>```
>## replaceChild()
>
>Replaces a child element with a new one. It takes two arguments:
>
>```html
>    <script>
>        // syntax
>        element.replaceChild(newChild , oldChild);
>    <script>
>```
>## cloneNode()
>
>Clones an element;
>
>```js
>// Syntax
>
>let menu = document.getElementById("menu");
>
>let newNode = menu.cloneNOde();
>console.log(newNode)
>
>```
>## removeChild()
>
>Removes the child element of a node:
>```js
>let menu = document.getElementById("menu");
>
>// remove the last child element of menu
>menu.removeChild(menu.lastElementChild); 
>
>```
>
>## insertBefore():
>
>The `insertBefore()` method of the Node interface inserts a node before a reference node as a child of a specified parent node.
>
>```js
>let menu = document.getElementById("menu");
>
>menu.insertBefore(newNode, menu.firstElementChild); 
>```