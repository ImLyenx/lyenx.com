---
layout: ../../layouts/PostLayout.astro
title: Miscellaneous
tags: [
    { "name": "PHP", "color": "#797ab2", icon: "simple-icons:php" },
    { "name": "C#", "color": "#690081", icon: "simple-icons:csharp" },
    { "name": "Go", "color": "#00ADD8", icon: "simple-icons:go" },
    { "name": "Unity", "color": "#333333", icon: "simple-icons:unity" },
    { "name": "MySQL", "color": "#4479A1", icon: "simple-icons:mysql" },
    { "name": "Discord", "color": "#5865F2", icon: "simple-icons:discord" },
    { "name": "Slack", "color": "#4A154B", icon: "simple-icons:slack" },
]
description: All my random little side-projects that are not big enough to fill a whole post.
github: ImLyenx
---

## About this page

This article will be a collection of all the small projects I've made that are not big enough to have their own post. They are all school or personal side-projects, made to learn something new, or to test a new technology.
The vast majority of these projects are closed-source, since they might contain personal information or are simply not worth sharing. If one of them is open-source, you'll find a link to the repository at the end of the project description.

## Harry Potter Trading Card Game

For a school project, I made a Harry Potter-themed trading card game with HTML, CSS, JS for the front-end and an Express.js API that uses Prisma and a MySQL database with JWT based authentication for the back-end. You can sign up, open card boosters, see the cards you own, and trade them with other players. For the cards, I used the original Harry Potter TCG cards, that I downloaded from [accio.cards](https://accio.cards). I learned a lot about JWT, Prisma, password storage with bcrypt and MySQL.

## Slack and Discord bots

I made a few bots for my friend group's Discord server, and a Slack bot that can manage tickets and support requests for a small company. The bots are made with Node.js and use the Discord.js and Slack Bolt API libraries.

## Go Terminal User Interface

I made a simple TUI using Go and the `charmbracelet/bubbletea` library. I initially planned to make a version of my portfolio website that anyone could access _via_ SSH. I was heavily inspired by [terminal.shop](https://terminal.shop), a coffee shop that you can only purchase from using SSH. You can try it by running `ssh terminal.shop` in your terminal.

## C# Platformer

A simple platformer game made with Unity in C#. It is meant to be a "boilerplate" for future games, with a player that can move, jump, dash, multi-jump, wall-jump. I also implemented a complete camera system, with a "follow" mode and a "cinematic" mode. I learned a lot about Unity's physics engine, and how to make a game feel good to play with jump buffering, coyote time, and more. I learned a lot about C# and OOP in general.

## Twitter clone in PHP

I made a very simple website using PHP and MySQL that has all the "basic" features of Twitter. You can sign up, log in, post, and delete tweets, search for Tweets and search by username. It was my first real PHP and SQL experience, and I learned a lot from it. I also implemented basic security like SQL sanitization.

## GreenGuard

Made for school, this is a "landing page" type website about eco-friendly ways to play golf. Another part of the project that I did not work on was to make a Unity game that could send data (e.g. a leaderboard) to the website. I had to make a simple back-end that allowed the game to store data in a MySQL database, and the website to display it.

## Pages Jaunes Scraper

I made a simple web scraper in Javascript that scrapes the French Yellow Pages website for businesses in a specific category and location. It uses Puppeteer to navigate the website.
