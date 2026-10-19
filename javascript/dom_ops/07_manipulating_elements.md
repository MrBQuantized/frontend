# Manipulating Element's Styles

## style property

This property is used to get or set the inline style of an HTML element:

```html

    <input type="text" id="username" placeholder="username" style="background-color: red; color: aliceblue; font-style: italic; font-size: 20px;">

    <script>
        let inputBox = document.getElementById("username");

        //return the value of the background color
        console.log(inputBox.style.backgroundColor)

        // set CSS properties
        inputBox.style.padding = "10px";
        inputBox.style.cssText = "width:200px"; // overrides existing inline CSS
        // or concatenate properties using (+=)
        inputBox.style.cssText += "width:200px; height:100px"; // 
        console.log(inputBox)
    </script>

```

## cssText

```html
    <script>
        let inputBox = document.getElementById("username");

        //return the value of the background color
        console.log(inputBox.style.backgroundColor)

        // overiding existing inline CSS
        inputBox.style.cssText = "width:200px"; 

        // or concatenate properties using (+=)
        //includes the existing and new (multiple) properties
        inputBox.style.cssText += "width:200px; height:100px"; 
        console.log(inputBox)
    </script>
```
## getComputedStyle()
## className property
## classList property