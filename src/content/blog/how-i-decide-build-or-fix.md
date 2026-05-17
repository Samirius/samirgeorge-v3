---
title: "How I Decide Whether to Build or Fix"
description: "Every founder faces this question: do we rebuild from scratch or fix what we have? Here's the framework I use to make the call — and why getting it wrong is expensive."
pubDate: 2026-04-15
tags: ["Product Strategy", "Build vs Buy", "Technical Decisions", "MENA"]
draft: false
---

One of the most common conversations I have with founders goes like this:

"We have this system. It kind of works. But it's painful. Should we fix it or start over?"

It's a loaded question. The wrong answer can cost you months of time and tens of thousands of dollars. And most people make this decision based on emotion, not logic. They're either attached to what they've already built or frustrated enough to burn it all down.

Over years of working with businesses across the Middle East, I've developed a framework for making this call. It comes down to three questions.

## Question 1: Is the Core Solid?

Every system has a core — the fundamental thing it does. For an e-commerce store, the core is "show products, take orders, process payments." For an operations platform, the core is "track things, assign tasks, move work forward."

Ask yourself: does the core function work? Not perfectly. Not beautifully. Does it fundamentally do the job?

If the answer is yes, you probably don't need to rebuild. If the answer is no — if the core is broken — no amount of fixing will save it.

I worked with a KSA-based logistics company that had a custom tracking system. The tracking itself worked fine. Packages moved, status updated, customers got notifications. But the reporting was terrible, the mobile experience was unusable, and adding new routes required a developer.

The core was solid. Everything around it was a mess. We fixed the surrounding issues without touching the core. Saved them 80% of what a rebuild would have cost.

Another company had an inventory management system where the actual inventory counts were consistently wrong. The core — knowing what you have in stock — was broken. We rebuilt it. There was no point patching a system that couldn't do its one job.

## Question 2: Is the Problem Structural or Superficial?

This is where it gets nuanced.

**Superficial problems** are things like: the UI is ugly, the mobile experience is bad, specific features are missing, some workflows are clunky, performance is slow in certain areas.

**Structural problems** are things like: the database schema can't support what you need, the architecture doesn't scale, security is fundamentally flawed, the codebase is so tangled that every change breaks something else, the technology stack is deprecated.

Superficial problems get fixed. Structural problems often require rebuilding — at least the affected components.

The trick is being honest about which category your problems fall into. I've seen founders convince themselves that deep architectural issues were "just UI problems" because they didn't want to face the cost of rebuilding. And I've seen founders nuke functional systems because they were tired of dealing with superficial annoyances.

Here's a practical test: make a list of everything that's wrong with your system. For each item, estimate how long it would take to fix independently. If most items are independent fixes under a week, you have superficial problems. If fixing one thing keeps breaking another, you have structural problems.

## Question 3: What's the Cost of Not Fixing?

This is the question most people skip. They compare the cost of building new vs. fixing existing. But they forget to factor in the cost of doing nothing.

What happens if you don't fix the system and don't rebuild? How much time does your team waste on workarounds? How many customers have a bad experience? How much revenue do you lose because you can't scale?

Sometimes the answer is "not much." The system is annoying but functional, and the cost of change outweighs the cost of staying. In that case, don't do anything right now. Wait until the pain is big enough to justify the investment.

But sometimes the cost of inaction is massive and invisible. I worked with a company where the team was spending 3 hours a day on manual data entry because their system couldn't import data properly. Three hours. For a team of 8 people. That's 24 hours a day of wasted productivity.

They'd been "living with it" for 18 months because the system "basically worked." The cost of inaction was enormous. They just hadn't calculated it.

## Signs You Should Fix

Fix your existing system when:

- **The core works.** The fundamental job gets done, even if it's ugly.
- **Problems are specific and isolated.** Not everything is broken — there are 3-5 specific pain points.
- **Your team knows the system.** They've built muscle memory. A new system means retraining everyone.
- **You've invested heavily.** Not just money — data, integrations, processes, tribal knowledge.
- **The problems are UX-related.** Bad interfaces can be fixed without touching the backend.
- **Your tech stack is still viable.** If the underlying technology is still supported and maintained, there's life left.

A Dubai retail brand came to me wanting a complete rebuild of their online store. I asked why. They said the checkout was confusing, mobile was broken, and they couldn't add new product types easily.

The checkout was a UX fix. Mobile was a CSS issue. New product types required adding a custom post type in WordPress. We fixed all three in two weeks. They'd been quoted 3 months and $15K for a rebuild.

## Signs You Should Rebuild

Rebuild when:

- **Everything is patched together.** Your system is 5 plugins, 3 custom scripts, a Zapier integration, and a prayer. Every new feature requires a workaround.
- **New features require hacks.** If adding something basic takes 5x longer than it should because you're working around the architecture, the architecture is the problem.
- **Your team hates it.** Not "it's annoying." Active hatred. When your team dreads using the system, adoption is already dead.
- **The tech is dead.** Flash, jQuery-era spaghetti code, platforms that are no longer supported. You're building on a crumbling foundation.
- **You can't hire for it.** If finding developers who can work on your system is getting harder, you're accumulating technical debt that compounds over time.

A Saudi operations company was running on a system built in 2018 by a developer who'd used a custom PHP framework nobody else knew. The original developer had moved on. Every change required reverse-engineering the codebase. Adding a simple approval workflow took 3 weeks.

We rebuilt it in 6 weeks. The new system was standard WordPress + React. Their existing team could maintain it. New features went from weeks to days.

## The Sunk Cost Trap

"We already paid $50K for this system" is the most expensive sentence in business software.

Sunk cost is money you can't get back. It should have zero influence on your next decision. But emotionally, it's hard to walk away from a big investment.

Here's how I think about it: that $50K bought you learning. You now know what works, what doesn't, and what your team actually needs. That knowledge is valuable. The system itself might not be.

I've seen companies spend $100K "enhancing" a broken system over 3 years when a $30K rebuild would have solved everything in 2 months. They kept pouring money into a bad investment because they'd already poured so much in.

The best financial decision isn't always to protect your existing investment. Sometimes it's to cut your losses and build something that actually works.

## Sometimes You Just Need a Spreadsheet

Here's the honest truth that most consultants won't tell you: sometimes you don't need custom software at all.

I've had conversations where a founder described their "software problem" and what they actually needed was a well-structured Google Sheet with some data validation and conditional formatting. Or an Airtable base with a few automations. Or just better processes documented in a Notion page.

Not every business problem requires a software solution. And not every software problem requires a custom build.

If your workflows are standard, your team is small, and your budget is limited, look at existing tools first. Shopify instead of custom e-commerce. Monday.com instead of custom project management. Zoho instead of custom CRM.

The right tool is the one your team will actually use. Sometimes that's a $200K custom platform. Sometimes it's a $20/month SaaS subscription. And sometimes it's a spreadsheet.

## Making the Call

If you're facing the build vs. fix decision, here's my process in a nutshell:

1. **List every problem** with your current system. Be specific. Not "it's bad" but "the checkout takes 8 clicks on mobile."
2. **Rate each problem** as structural or superficial.
3. **Estimate the cost of inaction** — time wasted, revenue lost, team frustration.
4. **Get honest estimates** for both fixing and rebuilding.
5. **Factor in adoption cost** — retraining your team, migrating data, the transition period.

Then make the decision based on the numbers, not the emotions. It's not about what you've already invested. It's about what gets you to a working system fastest with the least risk.

And if you're not sure? Get a second opinion from someone who doesn't have a financial incentive to recommend one path over the other. The best technical decisions are made with clear eyes and honest numbers.

---

*Not sure whether to build, buy, or fix? Check out my [Build vs Buy guide](/build-vs-buy) — or [tell me about your problem](/contact) and I'll give you an honest answer.*
