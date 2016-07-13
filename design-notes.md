---
title: Design Notes
layout: page
---

### What is this?

You are in Mekor Habracha's home in the Internet. This is the website's first complete overhaul since the community was established. You can see the previous iteration [here](http://mekorhabracha.org/old/www.ccshul.com/index.html).

If you want to kick the website's tires or learn what websites are made of, you have come to the right page.

### How was it developed?

This website was developed over the course of almost a year and was released into the wild in July 2016. The project was spearheaded by **Andrés Catalán** [<i class="fa fa-linkedin-square" aria-hidden="true"></i>](https://www.linkedin.com/in/catalandres) [<i class="fa fa-twitter" aria-hidden="true"></i>](https://twitter.com/catalandres) under the criteria and supervision of **[Rabbi Eliezer Hirsch](http://mekorhabracha.org/about/our-rabbi.html)** and [the Mekor Habracha board](http://mekorhabracha.org/about/our-leadership.html) and guided by the priceless feedback of several members of our community. It draws on the generous contributions of **Arielle Newcombe** [<i class="fa fa-linkedin-square" aria-hidden="true"></i>](https://www.linkedin.com/in/arielle-newcombe-893bb119), **Barbie Golan** [<i class="fa fa-linkedin-square" aria-hidden="true"></i>](https://www.linkedin.com/in/barbie-golan-62a60915), **Moshe Ort** and **Noah Krug** [<i class="fa fa-linkedin-square" aria-hidden="true"></i>](https://www.linkedin.com/in/arkideas), who helped shape the vision for this website at different points in time.

### What is it built on?

- **[GitHub.](https://github.com/)** It is a repository of code that lets you help us out with the website (e.g. fixing a typo, tweaking HTML code or adjusting the format) and it keeps track of everyone's activity so that rolling back the changes is really easy. [You can check it out](https://github.com/mekorhabracha/mekorhabracha.github.io). But if you prefer not to mess with the code directly, you can always [leave us a note](https://github.com/mekorhabracha/mekorhabracha.github.io/issues/new) and we will fix anything that needs to be fixed. 

    GitHub is free for all organizations that choose to open source their code, so that everyone and anyone can learn from it and improve it. **Mekor Habracha keeps its repositories open for all the projects that do not expose sensitive information.**

- **[Jekyll.](https://jekyllrb.com/)** One additional perk of using GitHub is that they effectively [host this website for free](https://pages.github.com/), and Jekyll makes creating websites for GitHub extremely convenient. In a nutshell, Jekyll is an engine that takes many different inputs (images, blog posts, Markdown files, HTML snipets) and compiles them to create a website that web browsers can read. Every time you push a change into the website's repository on GitHub, it triggers a new compilation of the website and the changes appear online about a minute after.

    Among the many advantages of using Jekyll we could highlight two. First, the user's experience is blazing fast, as GitHub ends up serving only HTML files and there is the web server does not need to compile information or call a database every time the user requests a page (this makes PHP-based systems up to one order of magnitude slower). Second, Jekyll is an open-source project which means that it is backed by a community of contributors that ensure its maintenance and that, last but not least, it is free to use.

- **[Bootstrap.](http://getbootstrap.com/)** Bootstrap is an open-source web design framework that provides a modular layout and multiple components that significantly speed up the development and modification of websites.

- **[Internet Archive.](https://archive.org/)** The audio files with Rabbi Hirsch's sermons and classes are one of the website's most important assets, but, at almost 6.5 Gb at the moment of launching the website, they are too big to be served through GitHub and they will only get bigger. Enter the Internet Archive, a nonprofit dedicated to keep record of everything that at some point in time has existed online. (You may be familiar with one of their most popular services, the [Wayback Machine](https://archive.org/web/).) Using the Internet Archive not only allows Mekor to stream content directly to the website, it is also a guarantee that, even if the website disappeared, the content will always be available for everyone.

- **[Alef.](http://alef.hagilda.com/)** Alef is an open-source typography for digital media that was designed in Israel with the ambitious goal of rendering Roman and Hebrew characters side-by-side in harmony (איזה יופי‫, נכון?‬) while assuring readability, no matter the font size. **The whole website, including Mekor Habracha's logo, is rendered in Alef.** This inventive, opinionated font uniquely embodies Mekor's values and it can tackle whatever the future will bring, both holy and secular, from A to Z and from א to ת.

- **[Font Awesome.](http://fontawesome.io/)** Font Awesome is an open-source project that provides icons in font format, which makes them easy to resize without any loss in the quality of the image. If you are old enough to remember what [Wingdings](https://en.wikipedia.org/wiki/Wingdings) was, you can think of it as "Windgings, but actually useful". Thanks to Font Awesome we can have all those <i class="fa fa-map-marker" aria-hidden="true"></i> and <i class="fa fa-phone" aria-hidden="true"></i> that you will find across the website, as well as <i class="fa fa-cutlery" aria-hidden="true"></i> and <i class="fa fa-certificate" aria-hidden="true"></i>, not to mention the <i class="fa fa-facebook-square" aria-hidden="true"></i> and <i class="fa fa-youtube-play" aria-hidden="true"></i> that you can see in the navigation bar.

- **Coffee and love.** Enjoy!

### Can I use this design for my website?

Yes, you are allowed to "copy and redistribute the material in any medium or format" as long as you follow [the terms of the Creative Commons 4.0 BY-NC-ND license](https://creativecommons.org/licenses/by-nc-nd/4.0/):

> - **Attribution.** You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
> - **Non-commercial.** You may not use the material for commercial purposes.
> - **No derivatives.** If you remix, transform, or build upon the material, you may not distribute the modified material.
> - **No additional restrictions.** You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.


