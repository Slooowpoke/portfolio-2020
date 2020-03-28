---
path: "/blog/a-few-fun-things"
date: "2018-09-14"
title: "Fun new technologies"
---
Keep letting this slide, but I'll try and keep at it.

I've been messing about with a new thing this year (I mean it's not too new), but it's called [Koa](https://malicoxon.co.uk/blog/koajs.com). It's similar to express, which I used a tiny bit a few years ago.

It's async, like everything I've been doing with React recently and you compose the application out of middleware.

I've been using it as an API server which has been pretty good, it's easy to get started and running with it. I honestly don't have anything bad to say about it (maybe I haven't used it enough?)

I've been building a little project called TTPB with it (I'll explain more one day soon), using Koa, Typescript and React. I've chosen this time to avoid Redux, as at work a few things got a bit needlessly complicated for what they were. Redux has it's place but in something this small it's not necessary.

Typescript is a joy: no more am I dealing with accidentally fudging my conditionals with type coercion by accident and sitting puzzled. To be fair though, I haven't been doing that as much since forcing myself to use triple equality checks as much as possible.

BUT HEY, YA GET TYPE SAFETY AT COMPILE TIME! There have been a few moments where I've been a bit frustrated with it, but I've needed to change a few settings. I had some issues with some components and export default or something like that (I don't remember now it was minor).

Working with React is the same old, but I did find a fun little thing: It's called Formik and where I was dreading having to worry about form error messages, submission and writing a whole boatload of logic (which I've already written at work for some things), I could just pull this in and bam most of it was done better than what I had previously written. It makes adding new inputs a breeze, and working with it is super easy.

I did look into [Redux-Form](https://redux-form.com/7.4.2/), but as mentioned previously I was trying to steer clear of it (Redux) for this project.

[You can find Formik here.](https://github.com/jaredpalmer/formik)

You can also (as you'll find out if you visit Formik) combine it with this neat thing called [Yup](https://github.com/jquense/yup) and get client side errors straight away. It's based off of [Joi](https://github.com/hapijs/joi) and I ended up using them both for validating stuff going into the form, and then stuff going to the API (using a neat piece of middleware I wrote! Huzzah for the Javascript age).

I'm kinda itching to try more of these things, I wanna see what [Hapi](https://hapijs.com/) is like but I really don't have time at the moment (I've just moved! (god I use brackets so much (jeez)))
