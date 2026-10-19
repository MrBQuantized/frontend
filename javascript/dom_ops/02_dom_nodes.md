# DOM & Nodes

>## What is DOM?
>The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documnets. It provides functions that allow you to add, remove, and modify parts of the document effectively.
>
>The DOM represents the HTML documents as a tree of nodes.
>
>## Nodes
>A DOM node is ay single point or objecct in the DOM tree, representing elements, text, comments, or the document itself.
>
>### Types
>Common types of Nodes are:
>- **Element Node** (`nodeType` **1**): Represents HTML tags like `<body>`, `,a>`. These build the structural skeleton of the >page.
>- **Text Node** (`nodeType` **3**): Contains the actuaal text content inside an HTML tag.
>- **Comment Node** (`nodeType` **8**): Represents comments written in HTML (`<!-- comment -->`). They exist in the DOM but do >not show up in the screen.
>- **Document Node** (`nodeType` **9**):  Represents the entire page or document itself and serves as the entry point to the DOM >tree.
>- **Document Type Node** (`nodeType` **10**): Represents the `<!DOCTYPE html>` declaration at the top of the file.
>- **Document Fragment Node** (`nodeType` **11**): A lightweight container used to hold a batch of nodes off-screen for efficient >manipulation before updating the live page.
>
>### Node Relationsship
>
>Any node has relationships to other nodes in the DOM tree, and it is same as described in the traditional tree. For instance, in >a HTML code below, the `<html>` node is the parent of `<body>` node and vice-versa,  `<head>` and `<body>` are sibling nodes >(because the share the same immediate parent note,`<html>`).
>And in the `div` element, the children nodes have sibling relationships 
>
>```html
><!DOCTYPE html>
><html>
>    <head>
>        <title>GreatStrack</title>
>    </head>
>    <body>
>        <!-- comment -->
>         <div>
>         <p>JavaScript DOM</p>
>         <p>JavaScript DOM</p>
>         <p>JavaScript DOM</p>
>         <p>JavaScript DOM</p>
>         </div>
>    </body>
></html>
```
