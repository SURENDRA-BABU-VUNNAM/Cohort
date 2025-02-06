# How to create forms using HTML : A Beginners guide

when ever you have entered in your google account you may have encountered a sign-in form, if you want to create a new google account you will encounter a sign-up form, after reading this article you will be able to create a signup form of your own let's dive in 

In signup form there are input fields and there is a submit button

## Input fields

Input fields are created using input tags and there are different input tags that are wrapped/nested inside form tag to get a sign-up form

### Text input fields 

These are input fields which is present to enter a text, which is mostly used to enter a users name

eg: `<input type="text">`

### Date input fields

These are input fields which are used to enter a data, like date of birth for age validation 

eg: `<input type="Date">`

### Tel input Fields

These are input fields which are used to enter number, like phone no for OTP validation

eg: `<input type="tel">`

### Password input Fields

This field is used to enter a password so that no other person can enter into your account 

eg: `<input type="password" required>`

### Checkbox input 

This field is used to as form of declaration when checked user accepts the terms and conditions 

eg: `<input type="checkbox">`

## submit button

This button is used to submit the data to the form it is like putting your letter inside a postbox 

## Input attributes

The same tags used for the sign-up form can be used to create a sign-in form and another important thing to note that is if there is a field requirement is compulsary there you should add a required attribute

You can also add placeholder attribute to inside a input tag to give an hint to user what to fill

You can use maxlength and minlength attributes to input tags so that user does not enter less/more than the number of specified characters 

Eg: `<input type="text" placeholder="enter your name" minlength="8" maxlength="64">`

## Increasing accessiblity of the forms 

The increase of accessibility is done via the aria label aria-* attributes in this case to increase the form accessability there are two attributes aria-placeholder, aria-required they function same functionailty as placeholder, required attribute but to the screen reader software

Eg: `<input type="text" placeholder="enter your name" required aria-placeholder="enter your name" aria-required="true">`


Now in the bellow example you can see the entire form that is accessable and readable 

```
 <form action="">     
        <div>
            <input type="text" placeholder="Enter your name" required aria-placeholder="Enter your name" aria-required="true">
        </div>
        <div>
            <input type="date" required aria-placeholder="Enter Your Date-of-Birth" aria-required="true">
        </div>
        
        <div>
            <input type="tel" placeholder="Enter Your Mobile Number" required aria-placeholder="Enter Your Mobile Number" aria-required="true">
        </div>
        <div>
            <input type="password" placeholder="Enter Your Password" required aria-placeholder="Enter Your Password"
                aria-required="true" minlength="8" maxlength="64">
        </div>
        <div>
            <label for="">By checking this checkbox you accept our terms</label>
            <input type="checkbox" name="" id="">
        </div>
    </form>
```
## Form Action

Action attribute tells the way the browser should send the user data to the backend of the application and two methods are 
1)GET, 2)POST

* GET: This method sends the data as the part of the url, this is visible and suitable for non-sensitive data

* POST: This method sends the data in the background, which is not visible in the URL and used to send the sensitive data like passwords etc or just large amount of data

