---
date: 2026-03-01
thumbnail:
description:
tags:
status: under-construction
---
# Motivation
Upon realising that any 2d surface that has been partitioned into areas by a set curves(with even intersections) can be 2-coloured such that each region can be coloured black or white such that no 2 bordering regions share the same colour much like a chessboard, I realised that we can generalise the game of checkers to these weirder boards, given the same assumptions of how the game can be played (pieces move diagonally forward, pieces can be attacked by 'hoping' over enemy pieces to a new empty square, when pieces reach the end they can move backwards). Therefore I wanted to code something graphical which lets you draw your own weird board, place the pieces then play on it.
# What I learnt
I ended using the pygame module to render my project, it was my first time using this or any rendering and so some essential knowledge on the architecture of such programs, such as the setting up, looping, rendering and input worked in conjunction.

I also did a lot of the computational geometry myself, which I found fun solving certain problems in relation to finding bordering regions, finding the area of regions, etc. Some of which was quite mathematical and related back to graph theory.

# How it works(computer science view)
1. [[#Rendering architecture (how pygame works)]]
2.  [[#Drawing]]
3. [[#Computational Geometry]]
## Rendering architecture (how pygame works)
## Drawing
## Computational Geometry
## 