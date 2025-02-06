# Explation of HTTP AND HTTPS 

This is an article about the explanation of HTTP and HTTPS so just look in to HTTP first 

## HTTP stands for HyperText Transfer Protocol

let's break these into smaller chuncks first 


### Protocol 

Protocol is nothing but set of rules/procedures/processes that are ment to perform specific task 

eg : if you enter a hotel the host of the hotel arranges a table for you and a waiter takes your order passes it to the chef and when the food is prepared it is given back to you and when you are done with your meal then waiter gets you your check 

### HyperText 

HyperText is just a text document,web page that has links (you can call it as references that support the statement or give credits to original writer) to the other texts and may have links to other text document so on 

so now let's combine the above two topics to explain HTTP

HTTP is a method where a text document,web page is transfered from one computer to other computer as per specified set of rules


The transferd text/web page is compleatly human readable,stateless protocol(i,e every time you visit a web page you are a new user)

so if you are a new user for the web page every time how can you see your activity of your google might be your next question 

this is nothing rocket science your intertions on a web page can be stored in browser in form of cookies(Just information) or sent it to backend and when you enter it into the same website your activity will be loaded

so we can say that storage of state/ information is not and will not be a part of HTTP 

if you need to send information to client(Browsers) from server it is sent via HTTP Headers (nothing but more information) which consist of client , browser info , date time , cookie to store this information can be used to give better experience 

eg: if your product has an extension then you can recommned browser specific extension


### Request-Response model

It is a process where two diffrent computers connect over each other with the help of internet 

just imagine that you are watching a movie on netflix and you remember a important work that you should do you pause turnoff the t.v and move on todo your work when your work is done you can view at the point where you exactly turned off but as per HTTP  your state doesn't get stored then how do you think that you can play movie at that point 

It is because of this exactly request-response model 

when you pause the video the time stamp is stored in client or server as per the website creator and when you play that video that time stamp is brought from server and played from that point exactly 

there are diffrent types of response i,e get, post, delete

these responses can be understood by simple analogies of social media post 

imagnine that you want to see a specific post by a specific user then you search the post then you `get` request comes into action so that you get that specific post 

now immagine you want to post something you want to share to the workd now `post` request comes into the picture you enter what you want to post and post it to the server then it pushes it into the server once after post request is compleated who ever wants to see it can search it to view it then the `get` method comes into the picture again

just like there are protocol for HTTP request there are portocals for response-request model

There are few important things that has to be discussed that are

what action to perform : `get` `post` `delete`

where to perform : which URL to perform Eg `google.com`

was it done : `200` , `404` ...


## HTTP-2

Most of the web traffic runs through HTTP/2 and it is very powerfull and HTTP(which is HTTP/1.1) used as fall back 

It has compression i,e it can compress the file in less space or bandwidth eg zoom compress vidoes above full hd to full hd to save bandwidth

It support multiplexing eg: if you have a file and it has multiple dependencies all those dependencies can be sent together in order to load together 

It supports encryption (HTTPS) . when in initial days there was no encryption therewre notorius people who exploted this so encryption was brought 

but https is not used for internal communication in AWS because it is trusted network and encryption takes time and cost so it is avoided

another word for HTTPS is TLS (Transport Layer Security) when a client and server connection is to be established it is encrypted when connection is established via HTTPS with the help of certificate 