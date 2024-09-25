---
layout: ../../layouts/PostLayout.astro
title: My Portfolio
tags:
  [
    { "name": "Astro", "color": "#e54097", icon: "simple-icons:astro" },
    { "name": "Tailwind CSS", "color": "#38bdf8", icon: "simple-icons:tailwindcss" },
  ]
description: The website you're on right now, with information about me and my projects
demo: https://lyenx.com
github: ImLyenx/lyenx.com
---

## Context

I made the first version of this site back in 2022. It didn't really change much, except I redesigned it 4 times, never to be satisfied. I suck at design.

## The project

It's made with Astro, IMHO the best way to make *almost* any website. I also decided to use Tailwind CSS because I'd rather blow my computer up than use vanilla CSS, and DaisyUI to make up for my lack of design skills. The "projects" section is powered by Astro's Content Collections (a fancy way to say Markdown files). The "Contact" page's email form uses Astro Actions (a fancy way to say API Endpoints) and sends me an email *via* [Plunk](https://useplunk.com). I eventually plan on self-hosting my own SES wrapper (either Plunk or alternatives like [Unsend](https://unsend.dev) or [00](https://double-zero.cloud)), but for now Plunk works great. \

## What I learned

I basically started my web development journey (and passion for it) with this project, and it helped me hone my HTML/CSS/JS (or in this case, Tailwind) skills, I also learned what a framework is, and how to use them.
