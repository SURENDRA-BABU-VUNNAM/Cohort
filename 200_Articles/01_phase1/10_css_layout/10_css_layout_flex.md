# CSS layout Flex-box

Flexbox is a tool for arranging the elements of the web page. 

when dealing with the flexbox there are two things that should be kept in mind the two axes of the flexbox and whether the property is being applied to the flex-container or flex-item

## Two axes of the flexbox

While working with Flexbox, we deal with 2 axes:

- Main Axis: By default, the main axis runs from left to right.

- Cross Axis: By default, Cross Axis runs perpendicular to the Main Axis i.e. from top to bottom.

main Axis can be changed by the property of flex-direction and it is to be noted that all the flexbox properties can be applied only to the parent element of whose elements to be arranged is given a display property of flex

left to right:

`flex-direction: row;`

right to left:

`flex-direction: row-reverse;
`
top to bottom:

`flex-direction: column;`

bottom to top:

`flex-direction: column-reverse;`

**flex container**: Flex containers are responsible for aligning and distributing the space available to their child elements

Flex containers have a number of properties that can be used to control the alignment and distribution of flex items, such as `justify-content`, `align-items`, and `align-content`. 

**flex items**: Flex items are aligned and distributed within the flex container along the main axis.

Flex items have a number of properties that can be used to control their size, alignment, and order within the flex container, such as `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, and `order`. 

## flex container properties**

### 1. justify-content**
The justify-content property is used to align flex items along the main axis of a flex container.

The justify-content property takes one of several values that specify the alignment of flex items within the flex container:

- **flex-start**: Flex items are aligned to the start of the main axis. It is the default  

- **flex-end**: Flex items are aligned to the end of the main axis.

code:

`.container {
  display: flex;
  justify-content: flex-end;
  border :2px solid red;
}`

result:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w3h5yz96n8bf57oei6j8.png)

- **center**: Flex items are centered along the main axis.

code:

`.container {
  display: flex;
  justify-content: center;
  border :2px solid red;
}`

result:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w04n2okzt91w15200lhc.png)

- **space-between**: Flex items are evenly distributed along the main axis, with the first flex item aligned to the start of the main axis and the last flex item aligned to the end.

code:

`.container {
  display: flex;
  justify-content: space-between;
  border :2px solid red;
}`


result:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gqpxy6wzxdw71uh2kpwd.png)

- **space-around**: Flex items are evenly distributed along the main axis, with equal space around each flex item.

code:

`.container {
  display: flex;
  justify-content: space-around;
  border :2px solid red;
}`

result:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qj9wk9gb622uofc3vhae.png)

- **space-evenly**:items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same.

code:

`.container {
  display: flex;
  justify-content: space-evenly;
  border :2px solid red;
}`

result:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nxifm8nf8fni8ahablkl.png)

### **align-items**

The align-items property is used to align flex items along the cross axis of a flex container.

The align-items property takes one of several values that specify the alignment of flex items within the flex container:

- flex-start: Flex items are aligned to the start of the cross axis. This is default value

- flex-end: Flex items are aligned to the end of the cross axis.

code:

`.container {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  border :2px solid red;
  height:500px;
}`

result:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aziyxpmv7i8rdy91pr7d.png)


- center: Flex items are centered along the cross axis.

code:

`.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border :2px solid red;
  height:500px;
}`

result:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vfq88kdevpwqtfofrey2.png)

- **baseline**: Flex items are aligned along their baselines.

code:

`.container {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  border :2px solid red;
  height:500px;
}`

result:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x6dvbvx90nkkm6wgea32.png)

### **align-content**: 
the align-content property is used to align flex lines within a flex container when the flex items are wrapped onto multiple lines. The align-content property only applies when the flex-wrap property is set to wrap or wrap-reverse, and determines the alignment of the flex lines along the cross axis of the flex container.

The align-content property takes one of several values that specify the alignment of flex lines within the flex container:

- **flex-start**: Flex lines are aligned to the start of the cross axis.

code: 
`.container{
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            border :2px solid red;
            height: 500px;
        }`

result: 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0llbdty7d0qt83d3c5f1.png)

- **flex-end**: Flex lines are aligned to the end of the cross axis.

code: 
`.container{
            display: flex;
            flex-wrap: wrap;
            align-content: flex-end;
            border :2px solid red;
            height: 500px;
        }`


result:
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/my384r6613m314yusu47.png)

- **center**: Flex lines are centered along the cross axis.

code: 
`.container{
            display: flex;
            flex-wrap: wrap;
            align-content: flex-end;
            border :2px solid red;
            height: 500px;
        }`


result:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zovcik2gg6xmp0cmnkmf.png)

- **space-between**: Flex lines are evenly distributed along the cross axis, with the first flex line aligned to the start of the cross axis and the last flex line aligned to the end.

code: 
`.container{
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            border :2px solid red;
            height: 500px;
        }`

result:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pk0wu2qcl8053190g9id.png)

- **space-around**: Flex lines are evenly distributed along the cross axis, with equal space around each flex line.

`.container{
            display: flex;
            flex-wrap: wrap;
            align-content: space-around;
            border :2px solid red;
            height: 500px;
        }`

result:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/36k9yjnln0zpb8gyabem.png)

## **flex item properties**

the majorly used properties of flex items are : 1)align-self 

### **align-self** 
the align-self property is a flex item property that overrides the align-items property for a specific flex item, allowing it to be aligned differently within a flex container. 

The align-self property takes one of several values that specify the alignment of the flex item within the flex container:

-flex-start: The flex item is aligned to the start of the cross axis. This is default from start

- flex-end: The flex item is aligned to the end of the cross axis.
center: The flex item is centered along the cross axis.

code:

        #box-4 {
            align-self: flex-end;
        }

result:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xk1dzbjyq1txadrjd2uo.png)

center: The flex item is centered along the cross axis.

code:

        #box-4 {
            align-self: center;
        }

result:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cwqcuwmn6cpv3lvu4bjv.png)
