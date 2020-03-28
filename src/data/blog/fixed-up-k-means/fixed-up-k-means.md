---
path: "/blog/fixed-up-k-means"
date: "2016-02-25"
title: "Fixed up K-Means"
---
So the simplest part of my program, the K-Means section was broken. My inputs were strangely linked to the centroids output and were changing a lot, they're not su``pposed to change at all. Sorted it now and added a few more methods of visualising whats going on.

In the top left you'll see the inputs and cycling through in red is the current input which is being checked.

To the right you'll see the additional "Total changed and Percentage changed", these both just refer to how many inputs change cluster per iteration. Hopefully I'll plot this on a graph to show how K-means adjusts over time.

That's pretty much it really, glad its fixed. Time to add some buttons for changing parameters, eg size of inputs and distance algorithm to use for image comparison.

`youtube: https://www.youtube.com/watch?v=aKEccrjO4js` 



