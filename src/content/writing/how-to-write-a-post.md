---
title: How to write a post
description: A sample draft showing the format. It only appears in the dev server.
date: 2026-10-25
draft: true
---

This is a **sample draft**. It shows up when you run `npm run dev`, but it is
never built or published because `draft: true` is set at the top. Delete this
file once you've written your first real post.

## Writing a new post

1. Create a file in `src/content/writing/`. The file name becomes the URL, so
   `protein-diffusion.md` is published at `/writing/protein-diffusion/`.
2. Start it with the front matter block (the part between the `---` lines):
   a `title`, a one-sentence `description`, and a `date`.
3. Write in Markdown. Leave `draft: true` while you work on it.
4. When it's ready, remove the `draft` line, commit, and push.

## What Markdown looks like here

Text can be *italic*, **bold**, or a [link](https://astro.build). Inline code
looks like `torch.compile(model)`.

> Block quotes are good for pulling out a key idea.

```python
def score(x, t):
    """Code blocks get syntax highlighting."""
    return model(x, t)
```

- Bulleted lists
- work like this

---

Questions to get started: what did you learn this week that surprised you?
What would you explain to a friend in the next lab over?
