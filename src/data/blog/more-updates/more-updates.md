---
path: "/blog/more-updates"
date: "2014-12-09"
title: "More updates!"
---
Need to be more creative with these titles, stuff is going well. Uni is getting a bit tougher towards the end and my financial situation is bad as usual.

I fixed a bug relating to InTheBottle that I hadn't noticed since I've been so busy, the previous feature (week's worth of upvotes) had a fundamental flaw in the calculation bit. It converts the database value to day format and does the same with current date, however if you crossover month it fails to calculate the correct date and returns minus numbers, this happens during a month transition and the transition between years. I've fixed it now by working out how many days difference there is between the two and then converting them to a date format.

I have an urge to work on Darkness Exhumed a little bit, as a new game really. Same graphics, similar idea but done in a way I can achieve. Like Sol or Jealous Rectangle, which I also want to work on. I've got so little time though to do these things I really love.

I haven't contributed anything recently to the world and it feels funny. Even if only one person sees it, its worth making.

I guess that's part of the reason behind this blog post. I feel like its going somewhere.

Another thing! All of my Slick2D games run terribly on Linux. Not sure why this is, but I see a drop of at least half in the framerate and it sucks. Going to look into that before I go much further.
