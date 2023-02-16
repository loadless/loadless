<img src="https://millenia.tech/logo.png" alt="Loadless Logo" style="float: left; margin: 0 10px 0 0;" align="left" height="150" width="150">

## LoadLess

Loadless is a javascipt library that allows you to make reactive SinglePage Applications  without ever reloading the page

***
<br><br>
![loadless](https://user-images.githubusercontent.com/69644334/219372319-a5b423f4-0525-4e74-99cc-fa72d9b753e7.gif)

***


# 👀 Why Loadless?

<font align="left" size="3">
  <ul>
    <li>Create pages that do not load or refresh the page without writing any javascript code.</li>
    <li>Modals and popups that normally require DOM manipulation can now be created very easily, right in HTML.</li>
    <li>Use transitions and animations to load pages without writing CSS.</li>
    <li>Loadless can be customized to meet your needs.</li>
    <li>Easy setup: you just need to add 2 CDN links (one optional CSS animations file).</li>
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

data-loadless-btn="value of the page"
```

The parent div needs to have the `data-loadless-parent` attribute

<br>
If you want to make the page "linkable" (make it a URL), make sure to give it an ID. 
<br>
Then link the page to an <a> tag or whatever.


# Example
Here is some demo code to help you get started
```html
  <!--  Href is given so that the page jumps to the link  -->
  <a data-loadless-btn="1" href="#hello">Click here to say Hello</a> <br>
    <a data-loadless-btn="two" href="#world">Click here to say world</a>

    <div data-loadless-parent>
        <!--  When Hello is visible, world will be hidden  -->
        <div id="hello" data-page="1" data-animate="left">
            Hello
        </div>
       <!-- add data-animate to animate. you can also add your own CSS file with animations starting with `animate-name` -->
        <div id="world" data-page="two" data-animate="left fadein">
            World
        </div>
       <!-- This is the div that won't disappear -->
        <div>
            another div 
        </div>
    </div>
 ```

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
