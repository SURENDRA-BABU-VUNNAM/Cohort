# HTML for beginners : Building the Skeleton of Web Page

Have you ever wondered why the strucure of wikipedia and or other web pages is the way it is.

It is because of HTML i,e. Hyper Text Markup Language to explain it in simple terms it is a standard of writing the website structure so that it can be displayed in your web browser

It is similar to the foundation, pillars and beams of a building it might look unsexy especially in the absence of CSS (cascading style sheet to increase the visual appeal of the website) this comes with it's own set of pro's i,e. is stability, reliability, readbility 

Now that you have known the importance of the HTML, it's time to learn the basic rules or say tags of HTML but before that you have to know the two important terms : 
1. Tag
2. Element

**_Tag_**: it is a fundamental building block of HTML, you can think of it like cement that holds the building together and it's content (and content is a piece of information that is required to be present in a tag, it acts like a brick) you can understand tag more about the tag in below example

eg: `<h1>your required content</h1>` 

in the above example also gives syntax of tags i,e. `<h1>` is opening of the tag `</h1>` and content is in the between, of course there are exceptions in the tag that are self closing but we shall deal with it later

**_Element_**: both opening and closing tag along with the content inside the tag forms the element 

now that you now know two important terms of the HTML you can dive deep into the diffrent types of tags used in HTML 

## Non-self closing tags

These are mostly and primaryly text releated tags

### **_Header tags_**
The heading elements in HTML are `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`. These elements are used to define headings of different levels, with `<h1>` being the highest level and `<h6>` being the lowest.

### **_Paragraph tags_**
The` <p> `element of HTML is used to represent the paragraph.

### **_Pre tag_**

- The `<pre>` tag is an HTML element that is used to define preformatted text. Preformatted text is displayed in a fixed-width font and preserves spaces and line breaks.

- The `<pre>` tag is often used to display code examples or other content that needs to be displayed exactly as written, without any additional formatting being applied by the browser.

### **_Format related tags_** 
####  **_strong and bold and their difference_**

    Before going to these tags let's know what are the screen readers.

    Screen readers are software programs that assist users with visual impairments in accessing the content of websites and other digital media. They do this by converting the text on a webpage or document into synthetic speech, which the user can then listen to through their computer's speakers or a set of headphones.

    now let's go to these tags

- **_strong tag_**:
    The `<strong>` tag is used to indicate that the text has strong importance or emphasis. It is typically rendered as bold text, but the meaning of the tag goes beyond just the visual appearance. Screen readers, for example, may announce the text as being "strongly emphasized" or "important".

    - **_bold tag_**:
    The `<b>` tag, on the other hand, is used to format text as bold without any particular meaning or emphasis. It is purely a visual formatting element and does not convey any semantic information to screen readers or other assistive technologies.

    In general, it is recommended to use the `<strong>` tag for indicating strong emphasis or importance, and to use the `<b>` tag only for visual formatting purposes. This helps to ensure that the content of your website is properly conveyed to all users, including those who rely on assistive technologies.

#### **_emphasis and italic and their difference_**

The `<em>` tag is used to indicate that the text has emphasis or stress. It is typically rendered as italic text, but the meaning of the tag goes beyond just the visual appearance. Screen readers, for example, may announce the text as being "emphasized" or "stressed".

The `<i>` tag, on the other hand, is used to format text as italic without any particular meaning or emphasis. It is purely a visual formatting element and does not convey any semantic information to screen readers or other assistive technologies.

In general, it is recommended to use the `<em>` tag for indicating emphasis or stress, and to use the `<i>` tag only for visual formatting purposes. This helps to ensure that the content of your website is properly conveyed to all users, including those who rely on assistive technologies.

#### **_small tag_**:

- The `<small>` tag in HTML is used to format small text. It is typically rendered as a smaller font size than the surrounding text, and is often used for disclaimers, legal text, or other fine print.

- small tag  is intended only for small text that is part of the regular flow of the document, and not for structural or organizational purposes.

#### **_sub-script tag_**:

- The `<sub>` tag in HTML is used to format text as subscript. Subscript text is smaller than the surrounding text and is typically lowered below the baseline.

#### **_super-script tag_**:

- The `<sup>` tag in HTML is used to format text as superscript. Superscript text is smaller than the surrounding text and is typically raised above the baseline.

both sub and super script tags are used often used in scientific or technical documents to indicate subscripts or footnotes. It can also be used for other purposes, such as to indicate trademark or copyright symbols.

#### **_insert and delete tags_**:

- insert tag: The `<ins>` tag is used to mark text that has been inserted into a document. The text within the tags is typically rendered with a line under it, to indicate that it is new or added content.

- delete tag: The `<del>` tag is used to mark text that has been deleted from a document. The text within the tags is typically rendered with a line through it, to indicate that it has been removed.

- The `<ins>` and `<del>` tags are often used to show the changes that have been made to a document, such as in a version control system or a collaborative document editor. They can also be used for other purposes, such as to highlight new or updated content on a website.

#### **_mark tag_**:

- The `<mark>` tag in HTML is used to highlight text that is relevant to the context of the surrounding text. The text within the `<mark>` tags is typically rendered with a background color or other highlighting effect, to draw the reader's attention to it.

- The `<mark>` tag is often used to highlight key terms or phrases in a document, or to draw the reader's attention to specific passages of text. It can also be used for other purposes, such as to highlight search results or to indicate recently updated content on a website.

### **citation related tags**:

**_cite tag_**:  This tag is used to indicate the title of a work, such as a book, article, or website. The text within the `<cite>` tags is typically rendered in italic or with a different font style to indicate that it is a citation.

**_quotation tag_**: The `<q>` element in HTML represents a short inline quotation. It is used to mark a section of text as a quotation, and is typically rendered in quotation marks. 

**_blockquote tag_**:The `<blockquote>` element in HTML represents a long quotation that is set apart from the rest of the text. It is typically rendered as indented text.

## Self closing tag 

These tags do not require any closing tag as they close all by themself

Popular examples are line break tag (`<br>`), horizontal line tag(`<hr>`), image tag(`<img>`) and many more

## HTML tag nesting

You can also nest the HTML tag that is use a HTML tag inside a tag to any degree possible 

Eg : `<h1>hello world, I am <strong><em>Surendra Babu Vunnam</em></strong> </h1>`

as shown in the above example we have nested strong tag inside h1 tag and emphasis tag inside strong tag

on a final note to the article there are many tags in HTML but these are the major tags that you require if you want to create a web page with articles that you want to show the world



