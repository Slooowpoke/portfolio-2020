---
path: "/blog/dissertation-is-done"
date: "2016-04-19"
title: "Dissertation is done!"
---
So I finished my dissertation, I learnt a lot of lessons from it. 
I handed in at 4 minutes to midnight after throwing together an abstract and probably not proof-reading it enough but I think overall it went pretty well.

My biggest problem was the [adjusted rand index](https://en.wikipedia.org/wiki/Rand_index#Adjusted_Rand_index), I don't have enough of a background in formal maths and implementing it in time just wasn't working.
I did manage to calculate it by hand a couple times I think, but the program I made was returning wild results that didn't seem right.

I ended up obsessing over this metric and had to come up with a qualitative measure really close to the deadline. 
Comparisons between the ground truth and the output are made between all clusters and whichever output cluster contains the most inputs from a given cluster is counted. 

Any extras included in the cluster are dismissed as not being part of that cluster. Any clusters with even numbers of inputs inside a cluster are declared unusable.

If that makes any sense at all, it still gave okay results. The threshold value for separating each flood-fill of the SOM might have been a bit off and could have done with more fine tuning but its done now.

Only thing left is the user experience coursework, a little bit of programming and the viva are left. Before sitting down to really get into revision for Computer Vision and Image Processing.

Glad its over, I would do it again and I would love to do further research towards it but I need a stronger background in Maths before I dive deeper into Neural Networks.
