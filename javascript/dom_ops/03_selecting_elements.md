# Selecting Elements

>## getElementByID():
>```html
>
>    <div>
>        <p id="message">JavaScript DOM</p>
>    </div>
>
>    <script>
>        let msg = document.getElementgetElementById("message");
>        console.log
>    </script>
>```
>## getElementByName():
>
>```html
>   <div>
>        <h1>first heading</h1>
>        <h1>second heading</h1>
>        <h1>thrid heading</h1>
>        <h1>fourth heading</h1>
>    </div>
>
>    <script>
>        let heading = document.getElementsgetElementByTagName("h1");
>        console.log(heading);
>    </script>
>
>```
>**NAME**
>
>## getElementByTagName():
>
>This method accepts a tag name and returns a live HTMLCOllection of elements():
>```html
>   <div>
>       <h1>first heading</h1>
>        <h1>second heading</h1>
>        <h1>thrid heading</h1>
>        <h1>fourth heading</h1>
>    </div>
>
>    <script>
>        let heading = document.getElementByTagName("h1");
>        console.log(heading);
>    </script>
>
>```
>## getElementByClassName():
>
>This method returns an array-like of objects of the child elements with a specified name:
>
>```html
>
>    <h1 class="message">first heading</h1>
>    <h1 class="message">second heading</h1>
>
>    <div id="container">
>        <h1 class="message">third heading</h1>
>        <h1 class="message">fourth heading</h1>
>    </div>
>
>    <script>
>        let cont = document.getElementsgetElementById("id");
>
>        // Applying it to any other element.
>        let msg = cont.getElementsgetElementByClassName("message");
>        console.log(msg);
>    </script>
>```
>## querySelector() & querySelectorAll():
>This method allows you to select the method that matches one or more CSS selectors. `querySelector()` only applies to the first >match while `querySelectorAll()` applies to all matches.:
>
>```html
>    <h1 class="message">first heading</h1>
>    <h1 class="message">second heading</h1>
>    <div id="container">
>        <h1 class="message">third heading</h1>
>        <h1 class="message">fourth heading</h1>
>    </div>
>
>    <script>
>
>        let cont = document.getElementById("container");
>
>        // Applying it to another element.
>        let msg = cont.querySelectorAll(".message");
>
>        // Or applying to the element directly;
>        let msg = document.querySelectorAll("#container");
>        console.log(msg);
>    </script>
>```
>We can also select specific elements within an element and mutliple elements as well :
>```html
>
>  <h1 class="message">second heading</h1>
>    <div id="container">
>        <h1 class="message">third heading</h1>
>        <h1 class="message">fourth heading</h1>
>    </div>
>    <script>
>        // All div and h1 elements
>        let msg = cont.querySelectorAll("div, h1");
>        console.log(msg)
>        // All h1 elements within the div element
>        let result = cont.querySelectorAll("div h1");
>        console.log(result)
>    </script>
>```
