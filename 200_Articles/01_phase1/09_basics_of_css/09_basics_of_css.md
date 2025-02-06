# Basics of CSS

If you are reading this article there is most likely chance that you are familiar with HTML  and how it gives structure to our web page but in modren age of interent just structure of web page is not enough you need more than that your webpage should be beautifull that is where CSS comes into the picture

if the HTML is the skeleton of the web page then css forms the skin and muscles that hold from skeleton from falling apart and gives the structure the load carrying featrure

it works by applying rules on HTML this can be explained using common analogiy of cosplay covention of a specific theme where you can dress like a character of certain franchise 

when this rule is applied is looks just in a certain way (just like the rule applied) eg: if the css rule says that an element(tag+content inside opening and closing tag) should be pink then it is pink

## Inline VS Internal VS External

there are three ways that you can apply css to the HTML elements of a web page

### Inline: 

It is written inside the HTML element with style attribute and can be shown bellow using the example

`<h1 style="color:red;">this is heading tag</h1>`

### Internal

It is inside the style tag which is nested inside the head tag bellow the title tag. and can be shown bellow using the example

`<style>
  h1 {
    background-color:black;
  }
</style>`

### External

Here the CSS is writen inside a separate file called style-sheet inside the head tag of the HTML file

`<link rel="stylesheet" href="styles.css" />`

Now that you have understood the basics of CSS it time to undestand the another important concept that is Box model of CSS

## Box model of CSS

The CSS box model is a fundamental concept in web design that describes the way that the dimensions and layout of a web page element are calculated. It consists of four main parts:

- Content: This is the element's content, such as text or images.

- Padding: This is the space between the content and the border.

- Border: This is a line that surrounds the content and padding.

- Margin: This is the space between the border and the next element

The dimensions of an element in the CSS box model are calculated based on the size of its content, plus any padding, border, and margin that has been added.

**Padding**: padding is the space between an element's content and its border. Padding is an important aspect of the CSS box model.

To set the padding of an element in CSS, you can use the padding property.  To understand the padding property let us use an example:

`div {
  padding: 20px;
}
`

as seen in the above example 20 pixels of padding to all four sides of the div element (top, right, bottom, and left) is applied.

You can also specify different padding values for each side of the element using the padding-top, padding-right, padding-bottom, and padding-left properties. For example:

`div {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
`
This will apply 10 pixels of padding to the top and bottom of the `<div>` element, and 20 pixels of padding to the right and left.

Padding is often used to add space around the content of an element, which can help to improve the layout and readability of a web page.

**Border**: border is a line that surrounds an element and separates it from other elements on the web page. 

To set the border of an element in CSS, you can use the border property. The border property takes one or more values that specify the characteristics of the border, such as its width, style, and color.

let us learn with example how to set a border.

`div {
  border: 2px solid black;
}`

from the above example we can see that a border of 2pixel solid black is created around the element `<div>`.

You can also specify different border characteristics for each side of the element using the border-top, border-right, border-bottom, and border-left properties. For example:

`div {
  border-top: 1px dashed red;
  border-right: 2px solid green;
  border-bottom: 3px dotted blue;
  border-left: 4px double purple;
}
`

This will create a 1-pixel-wide dashed red border at the top of the div element, a 2-pixel-wide solid green border at the right, a 3-pixel-wide dotted blue border at the bottom, and a 4-pixel-wide double purple border at the left.

Borders are often used to add visual interest to web page elements, to separate elements from one another.

**Margin**: margin is the space between an element and the other elements around it.

To set the margin of an element in CSS, you can use the margin property. Let us see the margin property using following example:

`div {
  margin: 20px;
}`

This rule will apply 20 pixels of margin to all four sides of the `<div>` element.

You can also specify different margin values for each side of the element using the margin-top, margin-right, margin-bottom, and margin-left properties. 

`div {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}
`
This will apply 10 pixels of margin to the top and bottom of the div element, and 20 pixels of margin to the right and left.

Margin is often used to add space around the outside of an element, which can help to improve the layout and readability of a web page. 


