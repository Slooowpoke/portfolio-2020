---
path: "/blog/chunks-and-what-ive-been-doing"
date: "2015-07-18"
title: "Chunks and what I've been doing"
---
So I haven't really "worked" on anything for a while over this summer. I've been to NASS festival (was aweeeeeeeeeeeeeeeeeeesome) and a bunch of moving around the country to see lot's of different friends.

I've been fiddling around with projects on/off but nothing seemed to sit well with me after Reclaimed tanked. It's crazy demoralising but I think every developer sees a fair share of their loved projects fade out of existence. I can't afford to keep Reclaimed's server running, since its the summer I'm running off of my student loan and a bit extra from here and there. The game also got accepted to alpha-funding on Desura, three months late though. I might pick it up, I might not.

Chunks. Two years back I gave it a go, very quickly while working on Darkness Exhumed. I couldn't quite work out how I'd handle everything in my head and was struggling to find the right words to search for. Over the last couple days I've been fiddling around with a chunk based map for a new project. It's going well. If anyone wants to know how I handle the chunks or if you have any changes that would speed up the process let me know:



Each "chunk" contains a startX and startY value, which determines where in the world the chunk is and where it should be rendered. The data for the chunk is stored in a 2-dimensional integer array currently, but this might change for a structure that suites my maps better.

A player joins, it attempts to load the chunk they are in if it fails then it generates a new chunk and saves that. When the chunk is generated or loaded it is put into an ArrayList of "working" chunks. The "working" set of chunks gets checked to see if they are within range of any players if not then they are unloaded, chunks are only sent to a player if the player is within range of the chunk.



This seems to work fairly fast and runs fine locally. I have no idea how it'll perform later. Currently I'm trying to get perlin noise to work correctly with chunks, the current library for it only generates for large arrays, instead of being able to sample from x, and y. I need to understand the noise class more for me to fix this.

Here's a little picture of what I have at the moment. No world generation yet, just fiddling with chunks in a multiplayer environment.

(Warning poor quality?)

`youtube: https://www.youtube.com/watch?v=l7SSuGY1HJk` 

That's all I'll show for now. More on its way.
