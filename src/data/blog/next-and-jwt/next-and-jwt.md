---
path: "/blog/next-and-jwt"
date: "2018-11-02"
title: "Next.js and JWT"
---
In pursuit of SSR (Server side rendering for TTPB, making a React app good for SEO), I found a tool called Next.JS

There was a bit of fiddling with it first, but I grasped it eventually. It has code-splitting (making the React bundle smaller and load just the data it needs for each page), easy peasy SSR and a bunch of other useful features.

I converted the existing project over to [Next.js](https://nextjs.org/), however I hit a few roadblocks.

The main one was a mis-understanding on my behalf as to how Next.JS fits in. It's essentially like a server specifically for your front-end. The user hits the page, Next.js renders the React app and sends it down in a neat small package and the user can click links and interact as normal.

However I couldn't figure out where the database fits in, the trick: it doesn't. Next.js encourages you to call your API routes via a special lifecycle method called getInitialProps.

Once past this, I had my old Koa API server still connected up. But the next roadblock was how do I fit authentication in, if I can't access a database in Next.JS.

You are discouraged from doing so, but I went against it a little tiny bit. (I'm still not sure if I'm doing this entirely correctly, but it's not slow and it doesn't seem to backwards).

You can serve you Next.JS pages via a Koa server, which is what I ended up doing. I smooshed Passport.js in, setup my previous OAuth routes inside the Next.js server, had it store only new users and a JWT in the database and hey presto.

The process I had before was a bit more contrived:

A user hits the page with auth links
The user clicks it and is sent to the API server
The API server sends them to Facebook or Google
Which sends them back to the API server
Stores the user or fetches the user
Creates a short lived token
Sends the token back to Next.js
Next.js sends the token in getInitalProps to the API server
Next.js receives the JWT and can communicate
Instead of that whole mess, I broke the rule about not including a database:

A user hits the page with auth links
The user clicks the link and is sent to a route within Next.js
Next.js sends them to Facebook or Google
Which sends them back to Next.js routes
Stores the user or fetches the user
Next.js creates and stores the JWT
JWT is shared through the shared database and can now be used to send to the API server.
I still think maybe some of these steps could be removed, if I had them both running on the same port perhaps it might be different or a reverse proxy could help share the cookie token, but this works. I'm happy with it.
