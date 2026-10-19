# Attribute Methods:

>Attributes provide additional information about HTML elements. In the example is provided below, `type`, `id`, and `placeholder` >are all attributes of the `<input>` element:
>
>```html
>    <input type="text" id="username" placeholder="username">
>    <script>
>        let inputBox = document.getElementById("username");
>
>        // return all the attributes in the console
>        console.log(inputBox.attributes);
>    
>    </script
>
>```
>## getAttribute():
>
>Returns the value of a specified attribute on the element
>
>```html
>    <input type="text" id="username" placeholder="username">
>
>    <script>
>
>        let inputBox = document.getElementById("username");
>
>        // return the username of the element
>        console.log(inputBox.getAttribute("username"));
>    </script>
>
>
>```
>## setAttribute()
>
>Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new >attribute is added with the specified name and value.
>
>```html
>
>    <input type="text" id="username" placeholder="username">
>    <script>
>        let inputBox = document.getElementById("username");
>
>        // get Attributes
>        inputBox.setAttribute("class", "user");
>        console.log(inputBox); 
>    </script>
>
>```
>
>## hasAttribute()
>
>Returns a Boolean value indicating whether the specified element has the specified attribute or not.
>
>```html
>
>    <input type="text" id="username" placeholder="username">
>    <script>
>        let inputBox = document.getElementById("username");
>
>        // Check if "class" is an attribute
>        console.log(inputBox.hasAttribute("class"));  // false
>
>    </script>
>
>```
>
>## removeAttribute()
>
>Removes the attribute with the specified name from the element.:
>
>```html
>
>    <input type="text" id="username" placeholder="username">
>    <script>
>        let inputBox = document.getElementById("username");
>
>        // remove "placeholder"
>        inputBox.removeAttribute("placeholder")
>        console.log(inputBox); 
>    </script>
>```