title: My first blog article
date: 2/11/2022
author: Tom Schmelzer

# My fist blog article

This is my first blog article on this website and it will explain how this blog website was created and how it works.

## How is a blog article structured?

A blog post is a markdown file with a header that contains the following information:

* **title:** Here my first blog article
* **date:** 2/11/2022
* **author:** Tom Schmelzer

At the fifth line starts the actual content of the blog post.

For example this blog post can be found in the folder `blog\articles\article1.md` of the GitHub repository which can be found [here](https://github.com/schmelto/Portfolio).

## How the website displays the blog posts

In the blog folder there are two files:

* blogposts.json: This file contains a list of all blog posts which should be displayed
* blog.html: This file is the main page of the blog. It contains a list of all blog posts.

The actual rendering of the md files and conversion to html is done in `js/blog.js`.
In here there is a markdown parser that converts the markdown files to html.

## How to add a new blog post?

* Create a new markdown file in the folder `blog\articles`.
* Add the following header to the top of the file:

```md
title: My first blog article <br>
date: 2/11/2022 <br>
author: Tom Schmelzer
```

Than add the content of the blog post to the file. The content can be in multiple lines.

Last but not least, add the blog post to the list of blog posts in the file `blogposts.json`.
