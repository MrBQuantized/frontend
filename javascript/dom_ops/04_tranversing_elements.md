# Tranversing Elements

>## Selecting Parent Elements
>We can use the **parentNode** property to get the parent node of a specific node in the DOM tree.
>
>```html
>
>    <div class="title">
>        <p class="text">Welcome to GreatStack</p>
>    </div>
>    <script>
>        let txt = document.querySelector(".text")
>        console.log(txt.parentNode);
>    </script>
>
>```
>## Selecting Child Elements — First, Last and All Child Elements
>
>We can select the first, last or all the child elements.
>```html
><div class="title"></div>
>
>        <p>Welcome to GreatStack 1</p>
>        <p>Welcome to GreatStack 2</p>
>        <p>Welcome to GreatStack 3</p>
>        <p>Welcome to GreatStack 4</p>
>    </div>
>    <script>
>         let msgParent = document.querySelector(".title");
>        // first
>        firstChild = msgParent.firstElementChild;
>        // last
>        lastChild = msgParent.lastElementChild; 
>        // all
>        allChild = msgParent.childNodes;
>        // console.log(firstChild);
>        // console.log(lastChild);
>        console.log(allChild);
>    </script>
>```
>**NOTE**: _The arrange of the elements in a new line creates an additional node (i.e each space/newline is a node). But, if they >are kept in the same line, the number of nodes will only be the number of the child elements._ 
>
>## Selecting Siblings — Next and Previous.
>
>```html
>
>    <div class="title">
>        <p>Welcome to GreatStack 1</p>
>        <p class="second">Welcome to GreatStack 2</p>
>        <p>Welcome to GreatStack 3</p>
>        <p>Welcome to GreatStack 4</p>
>    </div>
>    <script>
>        let second = document.querySelector(".second")
>        
>        previousSibling = second.previousElementSibling;
>        nextSibling = second.nextElementSibling;
>        console.log(previousSibling);
>        console.log(nextSibling);
>
>```
 