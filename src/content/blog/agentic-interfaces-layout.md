---
title: "Where AI Belongs in Agentic Interfaces?"
author: Kumar Ishan
pubDatetime: 2025-06-21T09:12:47Z
slug: agent-interface-layout
featured: true
draft: true
tags: ["agentic interface"]
description: "How chat placement isn’t just UX, it’s a deliberate statement of your AI agent’s maturity and intended role."
---

Whenever I’m designing an AI-native application—balancing its two most important UX elements, chat and canvas—I often spend hours shifting the chat window from left to right (and back again), searching for the spot that feels most natural. This essay traces the thought process, highlights key observations, and invites you to ask: why does placement even matter?

When ChatGPT first hit the scene, the chat interface initially centered itself in the middle of the page. Later when they introduced a canvas, the richer playground where code gets generated and documents get drafted, the designers slid the chat over to the left and the canvas settled on the right. This felt intuitive: write on the left, see the results on the right, an instant visual rhythm that guides our attention.

On the other hand, when embedding chat into existing tools, editors like Cursor or Notion, the logic inverts: your main workspace remains front and center, and chat quietly tucks to the right, almost apologetically: “I’m here, but you do you.” That subtle spatial cue reassures heavy users that their primary workspace won’t move unexpectedly. The chat feels like an add-on, a helper rather than the hero.

But is that all there is? 🤔 I’ve started wondering whether our eyes and hands have a louder voice than convention. Eye-tracking studies (think Nielsen Norman’s F-pattern) remind us that users scan new pages in predictable sweeps ie left edge first, then across. Fitts’s Law tells us that frequently used controls should be larger and closer to where the hand already rests. If chat is your core feature, your main attraction, doesn’t it deserve that prime real estate? Conversely, if it’s a sidekick, shouldn’t it stay out of the way until called upon?

I see placement as a clear fork in the road: chat on the left or chat on the right. If your AI is the star of the show, your users arrive ready to converse and rely on its intelligence to accomplish core tasks, slot it on the left. If, instead, AI plays the role of a supporting actor, helping out occasionally but never dominating the workflow, tuck it to the right. That binary decision signals in an instant how central the AI really is.

This mental model isn’t groundbreaking, but it’s grounded in the idea that **placement isn’t just aesthetic, it’s a statement**. It signals the AI agent’s maturity and your design intent in one stroke: is this AI powerful and polished enough to drive the core workflow, or is it still a casual helper that users summon for quick clarifications?

Still, a lot of questions remain. What does A/B testing tell us when we swap sides for real users? How do users in right-to-left languages respond (do we flip everything, or does chat stay stubbornly on the same side)? On mobile, where the bottom bar is king, does left vs. right even matter? How do accessibility guidelines shift the playing field for keyboard-only users or those using screen readers? And what about cultural variations: do some regions prefer the “assistant” tucked to one side versus another?

I’ve found no single silver bullet, but I’ve learned that the best answer usually starts in the drawing board, sketching out user flows, imagining moments of friction, then asking myself: “Where do I want the user’s focus first, and why?” And then, “How can I measure if that’s actually working?”

So before I drop my chat window onto the UI, I ask myself: am I building an AI-first app, or retrofitting intelligence into something users already know? Because left or right isn’t a matter of taste, it’s a declaration of your AI’s role. It’s an invitation to conversation, or a not-so-subtle nudge to keep working uninterrupted. Either way, that tiny decision could spark big discussions, so let it. ✨
