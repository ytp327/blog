<h1>Blogs Website</h1>

This project uses Node.js, Express, MongoDB with Google OAuth to build a Blogs website. <br>
Users can use their Google account to easily login instead of typing tons of information to register. In the Blogs website, user can <b>create</b>, <b>update</b> and <b>delete</b> their blogs. They can set the blogs to either <b>public</b> and <b>private</b>. Only public blogs can be seen by all users. And only the blogs' owners can update and delete their blogs.<br>
I use <code>express-session</code> middleware to persist sessions across stateless HTTP requests. <br>
I use <code>passport</code> module to provide and automate user authentication. This can prevent data tampering and illegal data accessing.<br>
<br>
How to run:
```
# Install dependencies
npm install

# Start server
npm start
```
<br>
<p float="left;center">
	<img src=pics/login.png width="49%" height="45%"> &nbsp; <img src=pics/google.png width="49%">
</p>
<br>
<p float="left;center">
	<img src=pics/public.png width="49%"> &nbsp; <img src=pics/dashboard.png width="49%">
</p>
<br>
<p float="left;center">
	<img src=pics/create.png width="49%"> &nbsp; <img src=pics/update.png width="49%">
</p>
<br>
<p float="left;center">
	<img src=pics/blog_display.png width="49%"> &nbsp; <img src=pics/others_public.png width="49%">
</p>