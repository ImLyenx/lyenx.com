---
layout: ../../layouts/PostLayout.astro
title: VALORANT Clone
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

In VALORANT, there is a lot of information that is available *via* the API but hidden to the player in the game client, or not accessible outside of the game itself, which makes it very difficult to access that data without giving third-party apps access to your account, which means trusting some random developer with your whole Riot Games account. I wanted to change that (for myself only, this wasn't meant to be a public project), so I built a full website allowing me to sign in with my Riot Games account, with the exact same inteface as the official game client, and it was way more difficult than I thought it'd be.

## The project

I needed to be able to sign in with my Riot Games account's credentials, get the data from the ~~unofficial~~ VALORANT API, and display it in a copy of the in-game interface.

These are the features I was planning to implement :
- Get your account stats (level, wallet, name, uuid)
- See your personal store (random set of purchasable in-game weapons skins that rotates every day).
- See your personal collection (the skins you own).
- See your career (your in-game rank, game history).
- See the current game you're playing. (map, agents, other players' stats, equipped skins)

I managed to successfully implement the first three, but gave up before the last two. Why? The VALORANT API sucks. A lot. It's the worst API I've ever seen/used. Weird JSON data schemas that make no sense, random value naming, no consistency whatsoever. And since it's unofficial (and not supposed to be used by anything other than the official client), there is no documentation other than an out-of-date community-made list of endpoints and methods.

To make a request, you need at least an Authorization Token, but sometimes also an Entitlements token, Cookies, an ID token, and 2 mystic values, with the first being a Base-64 encoded JSON string with your Operating System version (or you can just hardcode a specific value and it will always work no matter what), and the second being the client version, that you can get with an external community-made API that documents the build versions of the game. Sometimes you can use an old one, sometimes not. RNG-based API.

The API itself is also protected by Cloudflare, so no attempt at accessing it will work if you don't use a specific set of TLS ciphers, the Riot Client User-Agent (or a completely random set of numbers as UA ???), and maybe, if you're REALLY unlucky, a residential IP address since some cloud providers are banned.

So when I had my humble Python API working and Riot suddenly decided to nuke it by changing the Authentication methods on every single endpoint, I gave up. My app would now only be a React SPA that displays dummy data.

If you want to see half of my work, you can do so [here](https://val.lyenx.com). You don't need a Riot account, simply press the red button without filling the input fields. Enjoy!
