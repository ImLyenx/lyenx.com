---
title: Valorant Clone
image: "/assets/thumbnails/minesweeper.png"
tags:
  [
    { "name": "Vite", "color": "#ffab03", icon: "simple-icons:vite" },
    { "name": "React", "color": "#06bfef", icon: "simple-icons:react" },
    { "name": "Python", "color": "#4584b6", icon: "simple-icons:python" },
    { "name": "AIOHTTP", "color": "#2c5bb4", icon: "simple-icons:aiohttp" },
  ]
description: Recreation of the VALORANT in-game interface (Main menu, Store, Collection)
demo: https://val.lyenx.com
---

## Context

I play VALORANT, and the store in VALORANT works in a particular way. Every day, you will get 4 random skins available in your personal shop and there is no way to know or influence what skins will pop up. And at some point, I wanted to be able to know what skins were available on my account but I didnt want to have to go through the process of starting my PC, signing into the Riot Client, launching the game, and finally check the store tab. And I built this.

## Features

In the process of finishing the project, Riot Games decided to change the way their _unofficial and unsupported_ API works, so A LOT of the features I had planned were scrapped. Anyways, here's the list of the originally planned features :

- Log into your own VALORANT account.
  - See your personal store.
  - See your personal collection. (the skins you own)
  - See your career. (your rank, game history)
  - See the current game you're playing. (map, agents, other players' equipped skins)

As of writing this, the Python AIOHTTP API I originally wrote is still somewhat functionnal but since some endpoints can no longer provide the necessary data, the interface is completely broken, and I will not be fixing it in the near future.

Good news is, I made a 'local' version of the interface that displays dummy data so you can see half of my work. You can check it out [here](https://val.lyenx.com).

## Technical details

### Tech stack

- Backend:

  - A simple Python API with the AIOHTTP library

- Frontend:
  - Vite + React SPA
