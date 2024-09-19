---
layout: ../../layouts/PostLayout.astro
title: Hosting my projects
tags:
  [
    { "name": "Linux", "color": "#eebd1b", icon: "simple-icons:linux" },
    { "name": "Coolify", "color": "#8c52ff", icon: "simple-icons:c" },
  ]
description: The Server™
---

## Context

In January 2024, I had a project at school that used an API hosted by the teacher. The only issue was, the way the API was made did not match my existing project, so I forked their API and adapted it to my needs. Then, came the issue of hosting it.

## The Server™

Until now, all  my sites were hosted on Netlify or Vercel, but they didn't support Node.js apps, so not possible. I tried a bunch of free providers, but none were exactly what I needed. \
Then, I found Cyclic.sh (and I found out they shut it down in April while writing this), and it worked flawlessly. Until it didnt. Due to a bug in my app (that I found in production), it made like 200 requests to the API every time I refreshed the landing page. And Cyclic had a hard limit of 1000 requests per month. I deleted my account and started looking for something else. Something free, that would allow me to host my *extremely lightweight* Express.js app. \
I started looking towards VPS providers, and I quickly found out that Oracle Cloud had a "free forever" and extremely generous plan. 4 CPUs, 24 GBs of RAM and 200 GBs of storage. I created my VM, pointed my domain name to it and installed [Coolify](https://coolify.io), but we'll get back to it later. I uninstalled it because it was full of bugs, I had to click everything 4 times for it to register. Anyways, I downloaded [Easypanel](https://easypanel.io), a *closed-source freemium* server control panel. The UI was great, but it had a few problems. I couldn't easily manually edit the labels of my Docker containers, nor have more than 3 "projects" *aka groups of apps*. \
I stuck with it for 8 months, but a few weeks ago, I switched back to Coolify, fundamentally the same software but free, open-source, and extremely popular since February 2024, when [some guy was sent a $104,000 (one hundred and four thousand dollars) bill by Netlify](https://old.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/). The "just use a $5 VPS" community has been growing a lot since then, and I'm one of its most fervent members, *except mine is free*. \
Anyways, Coolify, that has improved **a lot** since January ([@heyandras](https://x.com/heyandras) you're the goat) + Cloudflare (DDoS protection, DNS, email routing and a lot more random useful things) is basically the perfect setup for any indie developer, but also for high-traffic applications (don't believe me? ask [@levelsio](https://x.com/levelsio)), while also being almost completely free (only thing I pay for is the domain name, and you can get a .com one for like $10 a year).

*PS: Yeah I know the icon on the project card is the C programming language logo, but Simple Icons sadly does not include the real Coolify logo.*