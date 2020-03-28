---
path: "/blog/redis"
date: "2018-07-02"
title: "Redis and InTheBottle"
---
While re-building [InTheBottle.co.uk](https://inthebottle.co.uk), I had a interesting dilemma.

I wanted to be able to prevent people posting whatever to the drawing saving endpoint. I wanted to stop people being able to hijack the canvas and send whatever.

What I did might be a bit weird and overcomplicated, but it's not too slow and it's working well.

Essentially, when you draw on your local canvas you send a few points to a Node.JS server running Socket.io.

These points draw a drawing for you the user, on the server with [NodeCanvas](https://github.com/Automattic/node-canvas).

When you submit the drawing Socket.io needs to know which drawing has just been saved. I struggled for a while, but then I found [Redis](https://redis.io/).

It has other applications, but I used it as a message broker between the two systems.

Once a drawing was complete, the ID of drawing was sent to Socket.io and Socket.io can label it in a folder to be checked.

There is then a Laravel queue worker running to look at unverified drawings and compare them to what was drawn on the server. It uses a distance similarity metric to check if it is below a threshold (due to lost packets and the sampling rate from the application).

If it it low enough it is approved and will appear moments after the drawing is drawn.

There are other options, like RabbitMQ, but Redis has bindings for Laravel pretty much out of the box.

