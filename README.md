<div align="center">
<img src="https://millenia.tech/logo.png">
<h1 align="center">Loadless.js</h1>
<br />
<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" /><br>
<br>
loadless is a javascipt library that allows you to make reactive SinglePage Applications  without ever reloading the page
</div>

***
![Loadless.js](https://us-east-1.tixte.net/uploads/img.dhravya.dev/l15fdjrdd0a.gif)

# 👀 Why Loadless?

<font align="left" size="3">
  <ul>
    <li>Create pages that do not load or refresh the page without writing any javascript code.</li>
    <li>Modals and popups that normally require DOM manipulation can now be created without ever writing a line of javascript.</li>
    <li>Use transitions and animations to load pages without writing CSS.</li>
    <li>Loadless can be customized to meet your needs (no javascript knowledge required).</li>
    <li>Easy setup: you just need to add 2 CDN links.</li>
  </ul>
</font>

<br>

# 🛠 Setup
Add this script tag in your HTML's header (make sure to `defer` it)
```html
<script src="https://cdn.jsdelivr.net/gh/loadless/loadless@main/dist/loadless.min.js" defer></script>
```

If you want to make the best out of loadless, link this CSS cdn. It's optional though and the library would work even without it
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/loadless/loadless@main/dist/animations.css">
```

# Usage
So basically to let the javascript code know what is a page and what is not, you need to give the page an attribute 
<br> 
```html
data-page = "number or word here"
```
<br>
Make sure to give an id to the div too as that is what would appear in the URL
<br>
Then all you need to do is to link the page to an <a> tag or whatever.
<br> 
```html
data-loadless-btn="value of the page"
```
<br>
Also give the link an href set to the ID you provided above.

# Example
Here is some demo code to help you get started
```html
  <a data-loadless-btn="1" href="#hello">Click here to say Hello</a> <br>
    <a data-loadless-btn="two" href="#world">Click here to say world</a>

    <div data-loadless-parent>
        <div id="hello"
            data-page="1"
            data-animate="left">
            Hello
        </div>
        <div id="world"
            data-page="two"
            data-animate="left fadein">
            World
        </div>
        <div>
            another div 
        </div>
    </div>
 ```

#animations
To add animations just link the CDN provided at the top and write the animation name in the data-animate attribute. Have a look at animations available
  <font align="left" size="2">
  <ul>
    <li>top</li>
    <li>left</li>
    <li>bottom</li>
    <li>right</li>
    <li>fadein</li>
  </ul>
</font>

***
Readme made with 💖 using [README Generator by Dhravya Shah](https://github.com/Dhravya/readme-generator)
