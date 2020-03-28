---
path: "/blog/three-million-page-requests"
date: "2016-02-11"
title: "Three million page requests."
---
It's been two years and three months since I started InTheBottle.

InTheBottle now has now served three million page requests, most of these requests come from the drawing section where people submit/view drawings. **A big three million.**
It continues to grow daily, albeit at a much slower pace but nonetheless 80% of the views on InTheBottle are new visitors (according to my analytics). A lot of these users are still coming from VSauce3 from the DONG's video (go back far enough and you'll find it).

There's over 116,000 drawings on InTheBottle and recently I tried to convert some of the newer drawings into something I could use. I gave people a random word (from a set of predefined objects) to draw. I've got quite a lot now and I've been using them in my dissertation.

**No classification?**

I started off with larger ambitions for my dissertation, hoping to be able to classify the drawings (and mark some of them as not suitable for work) but since I've had absolutely zero experience with artificial intelligence (on a complex scale such as this) it was unlikely to happen. Unsupervised learning on something as complicated as a 250x200 drawing would need a lot more thought and experience than my broken path-finders.

However this doesn't mean that I can't do some very cool things with these drawings, I can't do much with the categories people have labeled for me at the moment, but I'm sure in a years time I'll reflect and might be able to.

**What is my dissertation?**

The project that me and my supervisor settled on was a collection of learning algorithms demo'd alongside each other to see which would be best for my purpose.

The project will attempt to cluster images and then segment these clusters, leaving just the clusters on their own without labels but in groups of item similarity. One of the main parts to this is a self-organising map.

The main parts of the SOM are my inputs, which are images, shrunk down and 806 of the pixels (31x26) become weightings for that input. A grid is then created, otherwise known as a lattice. This lattice contains Neurons (essentially the same as images, same weightings/size) except these Neurons can adjust their weightings and change. 

The program loops through all of my inputs (in this case, each input is an image and in the case of the program, each pixel is one double/Weighting), finds the closest (closest meaning image similarity), created using Euclidean distance between the weightings of each image and  Neuron in the map (the grid at the start), then adjusts the weightings in the map around that closest Neuron. It's hard to explain in words, but I hope I explained the general gist. You can change the values for this program and it produces slightly different results and SOM's have been widely used before fizzling out bit. The maps created are nice, but aren't particularly useful until segmented.

That's the second part of the dissertation.

The extra learning algorithms that I'll be looking into will involve K-Means and Earth Movers Distance.

**How can you help?**

Well I still need drawings, if you click "Help me with my dissertation" you probably ended up here. If you follow the instructions on that page and do the doodle requested you might even see your drawing in the web-based version of this.

If you've come here from somewhere other than InTheBottle, please check out this [video](https://www.youtube.com/watch?v=HZR0mjr8nbo) and ~~this page~~* (Dissertation is now complete).

So far I have a dozen or so nice images to use, try and draw some boots I don't have enough in my data set yet!




