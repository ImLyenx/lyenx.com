---
layout: ../../layouts/PostLayout.astro
title: Mistral Chat
tags:
  [
    { "name": "Mistral AI", "color": "#ffab03", icon: "logos:mistral-ai-icon" },
    { "name": "Next.js", "color": "#000000", icon: "simple-icons:nextdotjs" },
    { "name": "React", "color": "#06bfef", icon: "simple-icons:react" },
    {
      "name": "Tailwind CSS",
      "color": "#38bdf8",
      icon: "simple-icons:tailwindcss",
    },
  ]
description: A lightweight and minimalist web UI for the Mistral AI API.
github: ImLyenx/mistral-chat
demo: https://chat.lyenx.com
---

## Context

I applied for an internship at [Mistral AI](https://mistral.ai) and one of the requirements for the application was to build a project using either their API & SDK with [Next.js](https://nextjs.org), or anything in Python using vLLM. I opted for the Next project, and built a simple web UI for the Mistral AI API.

## The project

It's really just a simple Next.js app styled with Tailwind CSS and shadcn/ui that allows you to interact with Mistral models (currently `mistral-small-latest`). It supports Markdown and LaTeX rendering, code blocks with syntax highlighting, and saving chats locally in your browser's IndexedDB thanks to [Dexie.js](https://dexie.org).

Building this project was a really fun experience, since I had never worked with LLMs before, nor interacted with IndexedDB. I'm really glad Mistral's job offer required me to build this, because I learned a lot from it and quickly got familiar with their API. I feel like more companies should do this (no need for it to be a big project, just simple stuff to make candidates interact with the company's products).

Anyways...

## What I learned

Basically the fundamentals of LLM APIs and data streaming, and local data storage with IndexedDB. Overall a fun little project I'm really proud of despite its simplicity, 10/10, would recommend. Go try it out [here](https://chat.lyenx.com)! You will simply need a Mistral API key, which you can get for free by signing up on [their website](https://mistral.ai).
