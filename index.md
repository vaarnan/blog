# \[2024-05-04 Sat\] Review Code To Go *Further*…
---
id: why-code-review
---

> *If you want to go fast, go alone. If you want to go far, go together* – African proverb

When you work at Google, it scars you. Not in the way of harm but more like a tattoo; something one brandishes; something one is proud of - **pain turned into life experience**.

My colleagues made me a strict and strong code reviewer. It is common for a new developer to get a review comment from me on nearly every line. I mean no harm 😊

I once stole a talk from another Googler on doing good code reviews and presented it to my team. They became stricter with me in return 💯

Deploying without code reviews is akin to constantly sprinting - you go fast initially but eventually tire out, slow down and burn out. Code reviews set a marathoner's pace and take you further with consistency and endurance.

-   Code reviews ***reduce fire-fighting***
-   Code reviews encourage ***consistency and predictability***
-   Code reviews foster ***collaboration in culture***

I have been breaking systems for a long time, and writing code for an even longer time. I have seen bugs like hidden rocks in an endless stream of runnable prose.

I do thorough reviews because I want to share the burden of those bugs with you. I want us to go far, not only with this piece of code today, but with the code we will write in the future.

I previously talked about testing to go ***faster***. Code reviews make you go ***further***.

Review your own code before you send it off; review other's code with kindness and thoroughness. Don't break head (often).

*Comments on [Twitter](https://twitter.com/vaarnan)*

# \[2024-03-27 Wed\] Test To Go *Faster*…
---
id: why-test
---

Sometimes I dream about the problems I am facing, and sometimes those problems are technical problems; some might say I am strange like that.

Recently, I dreamt that I was arguing with an ex-colleague, saying that "Testing my code is slowing me down" while I extolled the virtues of testing.

I woke up in a daze and jotted down this note, combining my dream with half-asleep reasoning (Dec 3,2023):

-   Test to go ***faster***
-   Test for ***confidence*** - deploy to production knowing that the same bug can't break you twice. The happy path is tested so an empty list cannot be returned by a new incorrect if condition. That bug you spent 4h tracking down on thanksgiving is also tested.
-   Test for ***accumulating effects*** - the tests being there bring accumulating benefits once written. Hours and days and weeks and months of the tests running with code changes, is immeasurable saved engineering effort.

I write automated tests for my code because I don't want to test the same features again and again, I'd rather be writing new features, new bugs and new problems.

Hope some of this helps you with the next, "Testing is slowing us down" conversation.

*Comments on [Twitter](https://twitter.com/vaarnan)*

# \[2023-10-05 Thu\] The Lean Startup
---
id: lean-startup
---

![](https://vaarnan.com/img/lean_startup.jpeg)

I'm obsessively re-reading Eric Ries' "The Lean Startup" ([summary](https://alumni.lincolncollege.ac.uk/files/2016/11/The-Lean-Startup-by-Eric-Ries-Book-Summary.pdf)). All I remember from the RedBull-fuelled haze during university is that you should always build an MVP, then give it to users and see if they use it.

Don't waste time building the whole solution, **build-pivot,build-pivot,build-pivot**.

I'm glad to read it now to see a whole new side to "lean startups", after a decade at an innovation company and years of engineering management behind me.

1.  Eric argues **entrepreneurship is a form of "management"**, and uni V would not have agreed with this sentiment one bit (personal growth 😅). Startups are chaotic and non-hierarchical but they need a process too.
2.  **Value creation hypothesis and growth hypothesis** - we constantly talked about creating value but that did not come with the humility of calling them assumptions. We needed to go out and validate them.
3.  **Validated learning** - crunch deadlines to submit our final projects meant we focused too hard on the MVP being the product. The **MVP was merely our tool** to understand what product to create.
4.  **Learn-Measure-Build Cycle** - we should have listed our assumptions, decided what to measure and then built the MVP 🔄 But we did more building than anything else.
5.  **Pivot (or Persevere)** - lack of learning prevented making good judgement calls and we were either constantly pulled across competing priorities or building a product no one wanted; net wasted effort 🫠
6.  **Accelerate with small batches** - the quick boom-bust cycle of university projects didn't force me to appreciate this. Years later at Google, we improved our release process infrastructure to push out our app monthly, and I saw our team move from fire-fighting anxiety to peaceful predictable feature development.
7.  **Growth engine** - everything I have done has been sticky or viral. In Google Search we develop features without any mention of monetization. *"It's our job to make great products, the Ads team's job to make the money"*. Works well when laser-focused on the user but fails spectacularly when only looking at vanity metrics.
8.  **Innovation accounting** - you need baselines, continuous measurement and tuning to successfully setup accounting. FOR SALE🪧 – plot in Vanity metrics purgatory
9.  **5 Whys** - Google had a great process of postmortems to deep-dive and root cause issues. The overhead of these documents and enhanced negative visibility have made them rare, so there isn't a feedback loop after faults to improve.

Hopefully I make new and better mistakes in my future projects.

**Glossary of terms**

*Value creation hypothesis* tests whether a product or service really delivers value to customers once they are using it.

*Growth hypothesis* tests how new customers will discover a product or a service.

*MVP* is that version of the product that enables a full turn of the Build-Measure Learn loop with a minimum amount of effort and the least amount of development time.

*Vanity metrics* make you feel good but do not inform strategy. These metrics are aren't actionable unrelated to anything you can control or repeat in a meaningful way.

*5 Whys* tie investments directly to prevent the most problematic symptoms by asking Why five times.

*Comments on [Twitter](https://twitter.com/vaarnan)*

# \[2021-12-28\] Coding the Brew puzzle (24th Dec)
---
id: coding-the-brew-puzzle-24th-december
---

![](https://vaarnan.com/img/brew_1.jpeg)

Was catching up on the only newsletter I read everyday, the [Morning Brew](https://morningbrew.com/daily/r/?kid=7fe756), and came across their puzzle.

I got the correct answer in my second attempt but wasn't sure it was the "least number" of symbols, so I wrote some code to check it 😆🤓

[**Code here**](https://github.com/vellvisher/random/blob/main/brew_symbols_puzzle.swift)

*Disclaimer: Probably has bugs and can be written better, PRs and comments on [Twitter](https://twitter.com/vaarnan) welcome!*

# \[2013-12-10 Tue\] Bloom Filters for the Common Man (or CS Undergrad)
---
id: bloom-filters
---

There are a ton of CS grads sneaking out of college without learning about this amazing invention and I thought I'd write the layman's guide to Bloom Filters.

The example is obviously contrived so bear with me :-)

## Amy's Party

Let's say Amy is organizing a party for everyone in the Accounts department and she wants to know the people who plan to go for the party.

The ideal solution would be to leave a clipboard outside her office and ask everyone to write their names on it.

Unfortunately, Amy does not have enough paper and comes up with a very quick solution instead. She writes down all the alphabets from **"A-Z"** and leaves it outside her office with instructions to everyone that they should circle just a single letter with the following rule-

1.  Take the first letter of your first name and look at the list of alphabets.
    -   If the letter is not circled, circle it.
    -   Otherwise, don't do anything.

So let's say, the company is a really small company and has the following people:

<figure class="responsive">
<img src="https://vaarnan.com/img/accounts_dept.png" />
<figcaption>Accounts Department</figcaption>
</figure>

The ones in yellow are planning on going for the party so this is what the list looks like after they have followed Amy's instructions:

<figure class="responsive">
<img src="https://vaarnan.com/img/first_round.png" />
<figcaption>First Round of List</figcaption>
</figure>

To be nice to Amy, I wrote a small program which will go through the Accounts department and find the people probably going for the party. It does the following-

1.  Take each person's first name,
    -   Take the first letter of the first name and check if it is circled on the list.
        -   If it is circled, add the name to the party list.
        -   Ignore it otherwise.

The list of people generated by the program is the following:

<figure class="responsive">
<img src="https://vaarnan.com/img/assumed_list.png" />
<figcaption>Assumed List</figcaption>
</figure>

Alice, Eric and Louis are definitely going for the party, while we can be absolutely sure the people not on the list will not go. This is the, **no false negatives** property of Bloom filters.

John, Jacob and James, all start with the letter "J" and the party list has all three of their names.

Amy knows for sure that atleast one of them is going for the party but not much more than that. This is, what we call a **false positive**.

Amy cannot determine who actually wants to go for the party and has to call all three of them to check! What a **terribly useless system**!

Well, it does seem to be quite pointless which might be the reason that Bloom filters were not widely used apart from databases for several years.

However, there is a subtle advantage even for the simple example above. The basic premise of bloom filters is to be able to eliminate a large number of false negatives, that is, to find out for sure, people who cannot possibly be going for the party.

This is the main efficiency of bloom filters and the whole point is to be able to eliminate as large a number of people possible with absolute certainty and in very little space!

Another detail - what we basically used is a hash function, a funky black box which converts a really long first name into just a single letter as so:

<figure class="responsive">
<img src="https://vaarnan.com/img/hash_function.png" />
<figcaption>Hash Function</figcaption>
</figure>

## A Smarter System

The previous example only used one letter, so let's get a bit smarter and see if we can deal with those pesky **J's**.

Amy instead updates the instruction so that anyone who wants to go for the party will do the following-

1.  Take the first letter of your first name and look at the list of alphabets.
    -   If the letter is not circled, circle it.
    -   Otherwise, don't do anything.
2.  Take the first letter of your last name and look at the list of alphabets.
    -   If the letter is not circled, circle it.
    -   Otherwise, don't do anything.

Thus, this is a system using **two** hash functions like so:

<figure class="responsive">
<img src="https://vaarnan.com/img/two_hash_functions.png" />
<figcaption>Two Hash Functions</figcaption>
</figure>

This is what the list looks like after they have followed Amy's newer instructions:

<figure class="responsive">
<img src="https://vaarnan.com/img/second_round.png" />
<figcaption>Second Round</figcaption>
</figure>

And my awesome (slightly modified) program gives the likely list of people going for the party as:

<figure class="responsive">
<img src="https://vaarnan.com/img/assumed_list_2.png" />
<figcaption>Assumed List 2</figcaption>
</figure>

Now, we can decide that James Morris is not going. Of course, John Doe and Jacob Delany still cannot be distinguished and Amy still has to talk to both of them. Nonetheless, this is lesser than the original.

We are getting somewhere now! It's intuitive to see that using more parameters for deciding the mapping, the better the chances of eliminating more names.

However, it also has the drawback that it might highlight more letters and lead to more false positives as well.

In the worst case, all the letters are highlighted and Amy has to call up each and every person to confirm. This is a delicate balance and deciding the size of the list and number of hash functions have some nice proofs behind them.

Another drawback is that, let's say, Jacob decides not to go anymore and goes back to Amy's list. Due to the problem of multiple names mapping to the same letter, he cannot just erase the letters he circled. This makes deletion a problem for Bloom Filters.

## CS Bridge

For an actual implementation, we will have a huge bit array, and each hash function would take an element and return a position on the bit array.

The final result of adding the element will be the bitwise OR of each hash function result.

An illustration, the name James Morris with three hash functions for a bit array of size 8 might give the result below:

<figure class="responsive">
<img src="https://vaarnan.com/img/k_hash_functions.png" />
<figcaption>K-Hash Functions</figcaption>
</figure>

This will be OR'ed into the main bloom filter and checking can later be done using a bitwise AND.

## Summary

So, to summarize-

-   Bloom Filters are useful to tell you what is **not** there in the filter because of its **no false negatives** property
-   Bloom Filters can be used to **save space**
-   Deletion is a problem (though there are solutions like [Counting Bloom Filters](http://pages.cs.wisc.edu/~jussara/papers/00ton.pdf))
-   False positives may increase with more hash functions (need math to figure out optimum)

There is a lot more to talk about Bloom Filters and maybe I will, if my obsession with them continues.

## Google Chrome

Last I checked, Google Chrome uses Bloom Filters to check if the website you are visiting is malicious or not. They probably do this by giving every Google Chrome user a Bloom filter of the list of malicious websites.

Generally speaking, most websites being browsed will not be malicious and can be safely discarded using the bloom filter decreasing the overhead for checking on both the user and server end. For the small fraction that are marked as malicious, a simple server request can verify and eliminate false positives.

Overall, network bandwidth -the precious resource of our age- is saved.

## Further Reading

[Howard Bloom's Original Paper](http://trac.astrometry.net/export/23660/trunk/documents/papers/dstn-review/papers/bloom1970.pdf) is great to know more, especially the math behind bloom filters but I really liked [this survey paper](http://www.eecs.harvard.edu/~michaelm/NEWWORK/postscripts/BloomFilterSurvey.pdf) by some Harvard Profs which is a great introduction not only bloom filters but also their applications.

Maybe, I'll even talk about the math behind it in a subsequent post!

# \[2013-11-12 Tue\] Praying to Peitho (Speaking to Convince 101)
---
id: public-speaking-101
---

[![Reason and Persuasion](https://vaarnan.com/img/reasoning_and_persuasion.png)]()

> **Socrates is awesome, so Plato is also awesome which implies that Aristotle must also be awesome.**

The first time I met Socrates was in [Reason and Persuasion](http://www.reasonandpersuasion.com/) where he blew my mind away with his arguments in [Meno](https://en.wikipedia.org/wiki/Meno) about whether virtue can be taught, introducing me to the infamous ["Socratic Way of Thinking"](https://en.wikipedia.org/wiki/Socratic_method). Meno was penned by Plato, so it was but a matter of time until I would get acquainted with his diligent student Aristotle when embarking on my tryst with [peitho](https://en.wikipedia.org/wiki/Peitho) of rhetorics.

Aristotle's work, [Rhetoric](https://en.wikipedia.org/wiki/Rhetoric_(Aristotle)), discusses extensively about persuasion theory, and divides the **modes of persuasion** into three components, namely-

-   **Ethos :** Competence of the source and his/her character
-   **Pathos :** Appeal to the emotions and beliefs of the audience
-   **Logos :** Introduce and support evidence with Logic and Reasoning

<figure class="responsive">
<img src="https://vaarnan.com/img/ethos_pathos_logos.jpg" />
<figcaption>Ethos, Pathos and Logos</figcaption>
</figure>

<figure class="responsive">
<img src="https://vaarnan.com/img/outdoor-advertising-ethos-pathos-logos.jpg" />
<figcaption>Ethos, Pathos and Logos in Advertising</figcaption>
</figure>

These three concepts are widely used around us especially to design [persuasive advertising](http://www.slideshare.net/dianaknoll/logos-ethos-and-pathos-in-advertising). So, the next time you see a very good advertisement, chances are they talked to Aristotle before making it.

**Ethos** is quite straightforward and involves understanding your audience and arming yourself with ample context and credibility. You have to be (or appear to be) competent and of strong character.

**Pathos**, for me, has always been administering strong doses of humour coupled with extreme passion and conviction to win the hearts of my audience and it has generally worked well for me. Nonetheless, I haven't made speeches requiring me to stir up the hearts of my crowd for rebellion (yet).

**Logos**, though, is the Computer Scientist's nirvana, where everything has to make sense. It has two parts to it, **evidence** and **reasoning**.

The **evidence** has to be credible and believable, plus points if it's shocking and novel but **reasoning** is the main carrier of that evidence into the audience's left brain convincing them why it all makes sense.

<figure class="responsive">
<img src="https://vaarnan.com/img/disprove_evolution.jpg" />
<figcaption>Evidence to disprove evolution</figcaption>
</figure>

I came across some types of reasoning-

-   **Analogous**: Ferrari Cars are similar to Lamborghini Cars; since Lamborghini Cars are fast, Ferrari Cars are fast.
-   **Causal**: Ferrari Cars are fast because they have the same engines as Lamborghini Cars.
-   **Inductive**: Yesterday I saw a Ferrari go quite fast; Ferrari Cars are fast.
-   **Deductive**: Lamborghini's engines make a car go fast; Lamborghini Aventador is a car which has a Lamborghini engine; therefore, the Aventador can go fast.

From this list, the Computer Scientist's choice of poison is generally **deductive**, sometimes **inductive** while the other two can be handwavy if done carelessly.

Though I studied only four different kinds of reasoning, there are many more [types of reasoning](http://changingminds.org/disciplines/argument/types_reasoning/types_reasoning.htm) that one can adopt as a student of rhetoric.

**Reasoning** is accompanied by discussions on **fallacies** (errors in reasoning or poor reasoning) which are awesome and quite often hilarious. [This video](https://www.youtube.com/watch?v=fXLTQi7vVsI) discusses some of the fallacies in current media quite nicely and has an amazing soundtrack which you should definitely check out!

[![](https://img.youtube.com/vi/fXLTQi7vVsI/0.jpg)](https://www.youtube.com/watch?v=fXLTQi7vVsI)

The last thing that I found cool was on **Persuasive Speeches of Policy** which are geared towards pushing for action (Eg. Donate blood now and save a life).

They can have different forms to convince people to generally do something-

-   **Problem-solution**
-   **Problem-cause-solution**
-   **Comparative Advantage:** Lamborghini is a better company than Ferrari because… …Go buy one!
-   **Munroe's Motivated Sequence**

I adopted the fancy [Munroe's Motivated Sequence](https://en.wikipedia.org/wiki/Monroe's_motivated_sequence) from a 1930s Purdue University professor, and I have to say, it is quite effective!

Basically, it has five stages to a speech (my interpretation)-

-   **Attention** : Get the audience's attention and wake people up.
-   **Need** : Tell the audience why they need to sort something out, otherwise, they are doomed.
-   **Solution** : Reveal to the scared souls what can save them.
-   **Visualization** : Paint a rosy picture of their life after they are saved.
-   **Action** : Tell them to go out there, do what needs to be done and save themselves from anarchy.

I adapted this into Simon Sinek's [Golden Circle](http://www.youtube.com/watch?v=qp0HIF3SfI4)-

[![](https://img.youtube.com/vi/qp0HIF3SfI4/0.jpg)](https://youtube.com/watch?v=qp0HIF3SfI4)

-   **Why**: Attention + Need (Why do you need to do this?)
-   **How**: Solution (How can you solve this?)
-   **What**: Visualization + Action (What difference will it make in your life?)

All in all, learning more about public speaking turned out to be quite enjoyable with an appropriate balance of theory and practice in the art of public speaking.

It has fueled my desire to learn more about persuasion so much that I have already enrolled for the online offering of Duke University's [Think Again: How to Reason and Argue](https://www.coursera.org/course/thinkagain) course which goes into more detail into the Logos aspect of dear Aristotle.

Do check it out as well!

# \[2013-10-31 Thu\] Make your blog with Pelican
---
id: make-your-blog-with-pelican
---

[![](https://vaarnan.com/img/pelican-docs-800px.png)](https://getpelican.com)

If you've been on this blog before, you'll notice that it looks radically different now (hopefully better). That's because I have shifted away from a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) interface provided by [Blogger](https://blogger.com) to one which is in [Markdown](https://en.wikipedia.org/wiki/Markdown) using Python + [Pelican](http://getpelican.com/).

Now I can write my blogs in plain-text ([yay vim!](https://en.wikipedia.org/wiki/Vim_(text_editor))) and it is rendered into a pretty HTML page which **looks great**, looks **consistent** without lots of spaghetti html-tags all over the place and can be **revision controlled**.

This is how this post looks like when I type it:

``` example
:::Markdown
Title: Static blog generation with Pelican
Date: 2013-10-31 18:00
Slug: make-your-blog-with-pelican
Tags: Blog, Markdown, Pelican, Python

[![Pelican blog screenshot]({filename}/images/pelican-docs-800px.png)][Pelican]

If you've been on this blog before, you'll notice that it looks radically different now (hopefully better). That's because
I have shifted away from a [WYSIWYG] interface provided by [Blogger] to one which is in [Markdown] using Python + [Pelican].

Now I can write my blogs in plain-text ([yay vim!]) and it is rendered into a pretty HTML page which **looks great**,
looks **consistent** without lots of spaghetti html-tags all over the place and can be **revision controlled**.

This is how the post looks like when I type it:

    :::Markdown
    (blog post)

If you view the source of the current page, you can see that pelican renders it with ~150 lines!!!

Though setting it up is on a bit of an intermediate level, [here's] a great tutorial. One of the best references is
the [Getting Started] page of the Pelican blog but be wary of the version since Google often returns the older documentation.

One cool benefit is that you can just generate a bunch of html that can be [uploaded to Google Drive] or [Heroku] so that
your website can be hosted for free and even become a [short url].

Putting up a cool blog has never been easier!

[WYSIWYG]: https://en.wikipedia.org/wiki/WYSIWYG
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[uploaded to Google Drive]: http://googleappsdeveloper.blogspot.nl/2012/11/announcing-google-drive-site-publishing.html
[Getting Started]: http://docs.getpelican.com/en/latest/getting_started.html
[yay vim!]: https://en.wikipedia.org/wiki/Vim_(text_editor)
[Blogger]: https://blogger.com
[pelican-tutorial]: http://terriyu.info/blog/posts/2013/07/pelican-setup/
[here's]: http://terriyu.info/blog/posts/2013/07/pelican-setup/
[short url]: http://goo.gl
[Pelican]: http://getpelican.com/
[Heroku]: http://yassi.github.io/yassi_pelican_output/pelican-on-github-pages-heroku-and-nginx.html
```

If you view the source of the current page, you can see that pelican renders it with \~150 lines!!!

Though setting it up is on a bit of an intermediate level, [here's](http://terriyu.info/blog/posts/2013/07/pelican-setup/) a great tutorial. One of the best references is the [Getting Started](http://docs.getpelican.com/en/latest/getting_started.html) page of the Pelican blog but be wary of the version since Google often returns the older documentation.

One cool benefit is that you can just generate a bunch of html that can be [uploaded to Google Drive](http://googleappsdeveloper.blogspot.nl/2012/11/announcing-google-drive-site-publishing.html) or [Heroku](http://yassi.github.io/yassi_pelican_output/pelican-on-github-pages-heroku-and-nginx.html) so that your website can be hosted for free and even become a [short url](http://goo.gl).

Putting up a cool blog has never been easier!

# \[2013-09-13 Fri\] Bullet Holes, Persistence and Startups with Bowei Gai
---
id: bullet-holes-persistence-and-startups-with-bowei-gai
---

![](https://vaarnan.com/img/bowei_gai.jpeg)

> *I met a guy in Israel who told me he was sure that he will be an entrepreneur throughout his life. 'Come on man, how can you know that for sure,' I told him! He showed me his hand which had a bullet hole and said, 'When you have had bullets fired at you, your perspectives about life change quite fast. I know that I don't want to do a desk job for someone else throughout my life. Life is too short for that!'*

These were among the precious nuggets that Bowei Gai, founder of the [World Startup Report](http://worldstartupreport.com/), shared with aspiring entrepreneurs during the talk at the National University of Singapore, earlier today.

Bowei was wrapping up the last country on his **29 country expedition** to document the **startup culture** across the world and he had a lot to share from his experiences in the past year.

Just detailing his whole talk would be a Startup Report in itself because he was extremely generous in giving us candid opinions on the startup culture spanning countries like Chile, Vietnam, Malaysia, China, Korea, Japan, India……

Some of the cool points that stood out were the **crazy hacker culture** in a country like Lithuania, the open and **welcoming** entrepreneurial eco-system of Philippines, the South Korea position in being the **bleeding edge** of technology and the **unique opportunities** in India.

The most unbelievable fact was about the **Chilean government** and their effort to **promote Corporate Social Responsibility** by offering investments to companies in return for hours dedicated to community service. This is part of the efforts by Chile to move away from it's traditional economy dependent on activities such as mining towards attracting talent for newer-technology oriented industries.

He also talked about the various problems **foreigner entrepreneurs** face in markets like Malaysia, Russia, France which are more suitable for local entrepreneurs who understand the market. Similar challenges face people in India where the infrastructure is terrible, internet penetration low but still tons of opportunity.

He wrapped up the session with a quote which will serve all entrepreneurs well,

> **Insane Persistence in the face of Complete Resistance**

You should definitely check him out his reports at [worldstartupreport.com](http://worldstartupreport.com/) and follow him on Twitter [\@Bowei](https://twitter.com/Bowei).

# \[2013-02-19 Tue\] Why you don't need a revenue model to be successful…
---
id: why-you-dont-need-a-revenue-model-to-be-successful
---

While looking at an application for a start-up incubator programme, I came across a section which said "revenue model" and left me quite perplexed as some of my ideas had no conceivable revenue model and I could not, for the life of me, think of an adequate answer to put there.

That got me thinking about the importance of a revenue model and after some time, I tossed away the concept of revenue models marking them as a secondary or incidental metric.

The fact that they are quite often **incidental** is because the idea that one comes up with may have a very obvious revenue model but the reason one came up with the idea was not necessarily to generate a revenue stream in the first place. An example is Amazon or Dell where the revenue model is quite straightforward - you will make money on sales.

The reason for it being **secondary** is that, when evaluating an idea, the main thing we come down to is that we want to figure out its "value".

One classification of value is intrinsic and **extrinsic value** which basically mean the value of the product itself due to tangible/intangible factors or the value that people ascribe to it in terms of the money it brings in.

The revenue model simply reflects its extrinsic value which is easy to explain, quantify and more importantly, rationalize for a potential investor who wants returns on his investment.

The **intrinsic value**, however, is quite often difficult to quantify but more importantly, extremely difficult to predict.

![](https://vaarnan.com/img/intrinsic-vs-extrinsic.png)

When Google started out, they weren't entirely sure about how they would make money ([The Google Story](http://www.amazon.com/Google-Story-David-Vise/dp/0739321617)) and neither were their investors, but they had a problem to solve and they went ahead and did it anyway.

Sure, it may be an exception and not an idea which would always work since there are enough examples and counter-examples but doing things which go against conventional wisdom are one of the primary sources of innovation.

Thus, the general approach that I want to suggest is to build a product which creates value or is extremely valuable by virtue of the problem that it ends up solving.

The revenue model is to justify the plan to investors and it is more suitable to find investors who believe that the product itself is valuable instead of needing to be convinced that it is going to bring home the bread. The same applies to finding co-founders/colleagues/partners.

So go out there and don't get shaken up if you don't have these cool revenue models and projections that people keep talking about. Your idea may be another big success in the making.

# \[2013-01-20 Sun\] Facebook Graph Search may kill startup(s) like Ark
---
id: facebook-graph-search-may-kill-startups-like-ark
---

![](https://vaarnan.com/img/fb_ark.png)

It is sad to see start-ups crumble at the hands of a big company but it is always a possibility which the founders of [Ark](http://www.ark.com/) are now facing with the beta launch of Facebook's new search called [Graph Search](https://www.facebook.com/about/graphsearch/).

Ark started out in 2011 to solve a pain point which was long held against the tech lords, Google and Facebook, that the "people search" is just not good enough and severely underutilizes the gigantic data they possess. Ark claimed that **30% of searches are "people searches"** and the Web didn't cater to that. Thus, this company set out to change this fact and bring "people search" to the masses, something similar to what marketers on Facebook have when selecting target audiences for advertisements.

For those who are clueless, "people searches" are quite different from web queries that we are generally used to on web search engines.

They involve either seeing your friends with overlays such as cities they belong to, schools they have attended etc. as done by Ark vs. searching for things like **"friends who like hiking", "office friends who enjoy skiing", "dentists in san francisco who my friends go to" or "single people in my area"** as done by Facebook.

In a web query, two different people can expect quite similar results (minus Google personalisation) but "people queries" will generally produce entirely different results depending upon the Social Graph of the person. This makes it an extremely hard problem to tackle and an extremely great feature to have with applications in dating, recruitment, location based recommendations to name a few.

Facebook realized Ark's potential and tried to acquire them but the two co-founders, Patrick Riley and Yiming Liu, who have extensive experience with search engines, [fought back](http://techcrunch.com/2012/05/21/after-walking-away-from-acquisition-talks-with-facebook-ark-opens-its-people-search-engine/) the social media giant with the desire to "build something bigger".

Their main selling point was the fact that Ark aggregated data from various sources like LinkedIn, Twitter, Facebook and Google to enable users to:

-   Find new people
-   Find old classmates
-   Expand their network
-   Search their friends

Ark's current scope is a little different from what they [mentioned](http://techcrunch.com/2012/05/21/after-walking-away-from-acquisition-talks-with-facebook-ark-opens-its-people-search-engine/) last year as **TechCrunch Disrupt New York's top 6 finalists**, which was that they would look to challenge Greplin (now [Cue](https://www.cueup.com/)) to become a search engine for email, contacts and social media.

Even Greplin has expanded to become a [Google Now](http://www.google.com/landing/now/) competitor and searching through your "personal clouds" in a Google search is now seen trivial compared to the enormous potential of the data that you get from the different sources.

Under Ark's belt is an astounding **\$5.25M of seed-funding** and they have thousands of users in on the closed beta and it is certain that they are really on to something that people have been craving for a long time.

Unfortunately, a fact which the founders admitted to during the TechCrunch Disrupt is that their primary source of data is Facebook, which is reported to have over a **trillion connections** and their multi-platform approach may not add much judging by the current market share of the different social media companies.

![](https://vaarnan.com/img/fb_market_share.png)

This always has the inherent problem that you are depending on another company's data for your success, and that company is your master who could pull the plug on you whenever they want, as it happened last year in the case of [Twitter](http://mashable.com/2012/08/16/twitter-api-big-changes/).

January 15th was probably a tumultuous day for Ark when Facebook announced Graph Search. It so happens that during the time they were considering acquiring Ark last spring, Mark Zuckerburg was also [dispatching](http://www.wired.com/business/2013/01/the-inside-story-of-graph-search-facebooks-weapon-to-challenge-google/all/) two ex-Google employees, [Lars Rasmussen](https://en.wikipedia.org/wiki/Lars_Rasmussen_(software_developer)) (Google Maps and Google Wave) and [Tom Stocky](http://www.tomstocky.com/) (Google Search, travel search), to undertake the task of establishing the "third pillar" of Facebook (after Timeline and News Feed). The announcement looks promising and if it can really take off, this may usher in a new era of knowledge search.

The launch made me eager to compare the two products, but since I can't actually use either service (applied for invites from both), I made an objective comparison from what I can see in their videos.

Ark is,

-   similar to Facebook in its blue-white colour scheme
-   hybrid of a LinkedIn/Facebook layout for search results
-   proving PowerSearch with suggestions to narrow down details in a search
-   filtering people by layers

Facebook on the other hand,

-   integrates with the existing Facebook Search Bar
-   has a PowerBar to narrow down details in a search
-   uses powerful Natural Language Queries with [NLP](https://en.wikipedia.org/wiki/Natural_language_processing)

The features are quite similar and both are essentially aiming to do the same thing with Graph Search in the Beta stage with a very early product which they will iterate on and improve in the months to come.

Thus, from such a basic analysis, Ark's offering does not seem to be extraordinarily better than the product Facebook is marketing. Not only that, with its main social media data source becoming a major competitor, Ark is always at the risk of the Big Blue boys trying to cut its lifeline.

In a surprising move, Ark co-founder Patrick Riley was [interviewed](http://www.bloomberg.com/video/ark-com-ceo-riley-on-facebook-s-new-search-tool-KaMbna2NSJSuid1Y73dlgw.html) by Bloomberg on January 16th to comment on Graph Search and what it meant for Ark.

In the beginning, he started off by saying that they "don't see it as a threat as we are crawling across many social networks" but a large part of the interview was dominated by his discussion of Graph Search instead of him clearly outlining where Ark would exist in a world with Graph Search. surprisingly When it came to whether he had any regrets about Ark not being [an Instagram](http://techcrunch.com/2012/09/06/facebook-closes-instagram-acquisition-instagram-announces-5-billion-photos-shared/), he said how they are a small "scrappy" start-up and had not done as much work as Instagram especially in terms of the user base.

Also, he mentioned how Graph Search actually "elbowed" websites like Match.com, LinkedIn and Yelp who would be much more affected than Ark.

Nonetheless, the current vision of Ark seems to be in jeopardy and they are hopefully toiling away in their San Francisco office to gauge their significance in the future.

![](https://vaarnan.com/img/fb_ark_see_saw.png)

I see three strategies that they can adopt to still "make it":

They can still leverage on the fact that they **aggregate data from multiple sources** and use this to differentiate their product from Facebook's offering. Also, its about time that they **open up the app to the masses** since there are more than a **billion people without Graph Search** in the world right now and locking them in would help since they have the advantage of having a more mature product.

This might let them survive through the impending onslaught and maybe even emerge victorious if they can build something truly superior.

Otherwise, it would be a wise time for them to **pivot** to something else and not bleed blue and die at the hands of the company they scorned.

A final option would be to actually look to **get acquired** by other companies who "dabble" in social media and are threatened by Graph Search which will ultimately lead to the world being where it is right now, fragmented but easier to search on, with every social media company having its own "people search".

# \[2013-01-03 Thu\] The Android Dvorak Bug II
---
id: the-android-dvorak-bug-ii
---

As from my [previous post](https://blog.vaarnan.com/index.html#the-android-dvorak-bug), after I had the emulator up and running, I had to locate the source code which produced the bug.

A simple **find** with the output of the file list piped to **vim** did the trick:

``` shell
vim `find . 2>/dev/null | grep dvorak`
```

I found that this peculiar setting was in the following file:

    packages/inputmethods/LatinIME/java/res/xml-sw600dp/keys_dvorak_123.xml

and the offending piece of code was:

``` xml
<Key
   latin:keyLabel="\'"
   latin:keyHintLabel="&quot;"
   latin:moreKeys="!"
   latin:keyStyle="hasShiftedLetterHintStyle" />

<Key
   latin:keyLabel=","
   latin:keyHintLabel="&lt;"
   latin:moreKeys="\?"
   latin:keyStyle="hasShiftedLetterHintStyle" />
<Key
   latin:keyLabel="."
   latin:keyHintLabel="&gt;"
   latin:keyLabelFlags="hasPopupHint|preserveCase"
   latin:moreKeys="!text/more_keys_for_punctuation"
   latin:keyStyle="hasShiftedLetterHintStyle" />
```

The three buttons do have these bindings setup differently from what is expected. Though the displayed hint is a ' " ' but the character it produces on a "long-press" is a ' ! '.

I quickly patched the code to the following:

``` xml
<Key
   latin:keyLabel="\'"
   latin:keyHintLabel="&quot;"
   latin:moreKeys="&quot;"
   latin:keyStyle="hasShiftedLetterHintStyle" />
<Key
   latin:keyLabel=","
   latin:keyHintLabel="&lt;"
   latin:moreKeys="&lt;"
   latin:keyStyle="hasShiftedLetterHintStyle" />
<Key
   latin:keyLabel="."
   latin:keyHintLabel="&gt;"
   latin:moreKeys="&gt;"
   latin:keyStyle="hasShiftedLetterHintStyle" />
```

A cool thing about the AOSP is that they have many git repositories for the project which are given the appearance of this one big "repository" which is managed by [repo](https://en.wikipedia.org/wiki/Repo_(script)) (tool developed by Google to manage multiple git repositories).

Thus, the packages/inputmethods/LatinIME is a git repository in itself and the recommended workflow is:

``` shell
repo init -u https://android.googlesource.com/platform/manifest
repo init -b master
repo sync
repo start activity_creation <PATH OF GIT REPOSITORY>
# edit, git add, git commit, etc...
repo upload -t
```

This fixed a previous error I was getting (**error.GitError: remote aosp has no review url**) which was due to the branch pointing to the numbered release version which is frozen and does not accept commits vs the master branch.

Finally, I got a nice commit message together and my [patch](https://android-review.googlesource.com/#/c/48627) was ready to be reviewed.

``` shell
fix incorrect symbol keys on dvorak keyboard on tablets

The dvorak keyboard on tablets such as the Nexus 7 does
not print the correct characters to the screen for the
following keys in the top left part of the keyboard:
Displayed | Actual Printed
--------------------------
"           !
<           ?
>           more_keys_for_punctuation which does not have
            the > key
This patch fixes the three keys by reassigning the output
to the one displayed which makes it follow the dvorak ANSI
standard.
Also, the more_keys_for_punctuation is removed
for the following reasons:
    1. 8 of the keys are duplicated and do not add value
        as the same keys are accessible directly on the
        keyboard
    2. More convenient fix as it doesnt break compatibility
    3. The QWERTY equivalent does not have this so removing
        is more standardized
Change-Id: I6969e4dada3c8b1ce2e31d49bbee948d9ea14f0f
Signed-off-by: Vaarnan Drolia <vaarnan@gmail.com>
```

That felt amazing and I was really eager about the code review but sadly, this patch was not meant to hit the Android system and after the review and talking to a Google employee who reviewed my patch, this was the explanation:

> The main design principle here is keeping the keyboard visual as simple as possible. We would like to avoid having extra small hint characters on a key top (as you can see on the 3rd party keyboards).
>
> Usually the letter you get with shift and with long-press is the same one on tablet, though it isn't true on phone for instance Q and 1. On tablet alphabet layout, we place four symbol keys. Comma(!), period(?), apostrophe("), and dash(\_). Usual Dvorak keyboard on PC has three extra symbols on the top row, apostrophe("), comma(\<), and period(\>).
>
> Honoring the usual Dvorak PC layout, we decided to use three extra symbol keys exactly as same as the PC layout. But we also want to have an easy access to exclamation and question marks. That leads the current inconsistent Dvorak layout of Android.
>
> Anyway we realized the inconsistency and already have internal bug entry about it (filed by Jean who is a Dvorak lover). We will come up with nicer solution soon.

Well, I can only wait to see the solution they come up with at Google but until then, I have this "interesting" bug on my keyboard.

# \[2012-12-27 Thu\] Coursera Unplugged - More valuable than a latte and much cheaper
---
id: coursera-unplugged-more-valuable-than-a-latte-and-much-cheaper
---

![](https://vaarnan.com/img/coursera.jpeg)

I had the privilege of attending a talk by Stanford E-Learning stalwart, [Andrew Ng](https://en.wikipedia.org/wiki/Andrew_Ng), here at NUS today and it was a great talk organized by +Prof. Ben in which Andrew shared several things including the overall vision and goals of MOOCs in a broad sense as well as focusing on his own startup, [Coursera](https://en.wikipedia.org/wiki/Coursera)

The main mantra guiding the Coursera team is to *"do what is best for the student"* and there were several decisions made by Coursera that reflected this idealogy..

Andrew began with a description of the Coursera platform and the various tools that were available to the instructors as well as the students which should be familiar to people who have taken courses with them.

A few interesting points were -

-   playback videos at 1.5x speed which is something that I think is vital
-   auto-grading and instant feedback which helps overcome the short-comings of traditional teaching
-   accessibility is addressed with subtitles in various languages

An innovative solution was the ability to have courses with subjective content "peer-graded". Studies show that peer-grading strongly correlates to the grade an instructor would give and in an environment without "competitive grading", constructive feedback is more likely to follow.

Coursera "trains" you to grade scripts by helping you see real scripts graded by the instructor and then assesses your ability to grade following which you grade the answer scripts of your peers in exchange for feedback on your own assignment.

Another insightful part of the talk was the amount of data gathered relating to how the students interact with content which helped the instructors tweak their courses, find key misconceptions that students had as well as personalize hints and tips for students.

I am sure that a renowned expert in Machine Learning will put all this data to good use and we can expect possibly surprising things to come out of it.

The community-driven forum was an example of this with the astounding metric that on an average, it takes 22 minutes for a student's query to get a reply which is the closest to near-instant feedback that I have seen any academic course have.

Flipped classrooms are also offered in some universities in which the lectures are uploaded and are watched by the students on their own time while the classes are more interactive and have problem solving as well as small group sessions.

An NUS academic raised the point that this does not cater to students part of the lower percentile who may not interact as much and may not do the same baseline preparations as their peers.

Though he indicated this as a problem, I do not agree since a lecturer can see which students have done the required coursework as well as know who needs the most help and focus on bringing them up to speed.

Compare this to the tutorials at NUS where generally, a person who has attempted and is confident of his solution discusses it in class while the tutor is oblivious to the numerous students who did not even attempt the tutorial.

Finally, we moved on to the question and answer session which was quite good, a bit uncommon for a talk in Singapore. The audience had its share of skeptics which made it an enriching session.

**Academic** - how much time is required to create a course from an existing one?

**Andrew** - Roughly equivalent to creating an entirely new course due to the amount of thought and effort required to adapt it this style of teaching. However, the effort is well spent since you could reach out to more students with that course than you could in an entire career.

**Audience** - how do you combat spam?

**Andrew** - Generally posts with too many down votes roughly five or ten disappear forever which works well although we did have to step in a few times to disable some accounts.

**Audience** - how will/does Coursera make money?

**Andrew** - I do not believe in charging money despite having been told by several people that they would easily pay something along the lines of \$5 for accessing the content which is just the cost of a Starbucks Latte in developed countries. This argument may not hold for someone in a country like India or Africa where \$5 is a lot of money and often people may not even have access to a credit card.

This brought me back to my own childhood in India where I distinctly remember the various things beyond my reach when they required a credit card and no one in my family actually had one.

Nonetheless, he said that there is a great amount of time spent by instructors and partner universities in preparing the content which needs to be compensated and Coursera aims to do that with the initiatives below whose revenue is shared with the partner universities.

-   **Career Services** - Coursera will share the details of top students (with permission) to potential employers in exchange for a fee payable by the companies
-   **Certificate** - Putting the seal of a university on a certificate should (as they believe) have some value and so there may be a charge for the official certificate
-   **Licensing** - Some community colleges in the United States which get funding use Coursera's content in a form similar to the flipped classroom and they may be asked to pay a fee

To conclude the discussion, he talked about how they believed in the basic right of education for all.

> *In history, societies have created rights when they could satisfy two things - resources and moral courage to extend those rights to everyone. I would love to live in a world where a poor kid in Africa has the right to a high quality education.* –Andrew Ng

Let's see how this visit benefits NUS in its own adoption of e-learning technologies as Coursera is definitely leading the way in MOOCs and there is definitely a lot more that can be done.

# \[2012-12-26 Wed\] The Android Dvorak Bug
---
id: the-android-dvorak-bug
---

This post details my attempts to file my first bug fix for the open source Android operating system.

It all started out when I shifted to the Dvorak keyboard and changed to it on all my devices. I noticed this peculiar bug on my Nexus 7 where the top three keys didn't do what they were supposed to and instead of actually printing the correct characters as they displayed on the screen, they produced completely different and unexpected values.

The first and second keys gave incorrect values but the third was even worse where it created a full blown menu of special characters and lacked the actual key it was supposed to type!

An even weirder effect was that the keys worked correctly when I shift-pressed them instead of long-pressing.

![](https://vaarnan.com/img/dvorak-bug-1.png)

![](https://vaarnan.com/img/dvorak-bug-2.png) ![](https://vaarnan.com/img/dvorak-bug-3.png) ![](https://vaarnan.com/img/dvorak-bug-4.png)

This really got me interested and I was itching to fix it on my own since that is the coolest thing about an open-source project!

So I headed over to the [Android Open Source Project](http://source.android.com/) and started going through the "Getting Started" section.

Building Android from source was quite straightforward after following the instructions from the site as all the dependencies had to be installed. It is quite cool that [Google uses Ubuntu](https://en.wikipedia.org/wiki/Goobuntu) internally which made configuration a breeze. While building, I did have to [hunt around](http://stackoverflow.com/a/13266826/1448047) to know that the set~stuffforenvironment~ command was necessary which should have been included in the instructions. Also, it takes an insane amount of time to build and had several issues with RAM running out on my system with several variants of the "make -jX" command until I settled on just the vanilla "make" command and let it run overnight.

``` shell
emulator @nexus7 -sysdir out/target/product/generic/ -system out/target/product/generic/system.img -ramdisk out/target/product/generic/ramdisk.img -data out/target/product/generic/userdata.img -kernel ~/dev/adt-bundle-linux/sdk/system-images/android-16/armeabi-v7a/kernel-qemu
```

Finally, I executed the emulator which was automatically added to the path and the android system was up and running on my computer. Then I realized how tough it was for me to emulate the Nexus 7 and I ended up taking an extremely convoluted path by getting the Android SDK and then downloading the Android-16 kernel. Then, setting up an AVD called Nexus 7 which I ran with the following command so that it would pick up the freshly built android source (I did a detour and even built the kernel for a physical device but did have the heart to sacrifice my one and only device).

Thus, the stage was set for me to develop a patch and more on how I did that in the [next post](https://blog.vaarnan.com/index.html#the-android-dvorak-bug-ii)…

# \[2012-11-15 Thu\] Pumpin' my Resume Geek-Style
---
id: pumpin-my-resume-geek-style
---

Applying for internships is taxing and after all the effort put into making my resume with fancy fonts and nice borders, I find that many companies want a "text-only" version of my resume!

Though I think that it makes it easy for them to use keyword search with such a resume, I was still a bit unsure about submitting a direct copy-paste of my resume which looks extremely horrible.

![](https://vaarnan.com/img/curriculum_vitae.jpeg)

There comes a point in one's life when you either take the hard way and put in a large amount of effort and dedication to doing something again and again or there is the easy, lazy way reserved for Computer Scientists.

No surprises which one I picked!

The main problem with making a text resume is that I would now have to keep two resumes synchronized every time I made a change which is tooo much of work for me.

Thus, I decided it was time to take matters into my own hands and find a decent working solution for this.

Parsing a \*.doc file and extracting it to make a text-only one wouldn't take much time in Python but I was sure that I can do better than that.

## Latex

![](https://vaarnan.com/img/latex_logo.png)

Enter the tool of Mathematicians and Geeks alike - Latex!

It seemed quite straightforward for a Vim-lover to switch his complete resume to a text-based version and have that compile to two different copies. This was something I wanted to do for a long time and finally found a good enough justification to do so.

Now, I really didn't have to worry about the ASCII one looking pretty but I didn't want to compromise on the PDF version! Also, till now I was using the Microsoft Word [Markup and Review](https://office.microsoft.com/en-sg/word-help/review-accept-reject-and-hide-tracked-changes-HA001218562.aspx) for a sort-of "Version Control" but thought that its time to start pushing my resume to [github](http://github.com/vellvisher/resume) like most of my other digital possessions.

And so, after quite a bit of searching around, I finally found the best Latex resume package to be [moderncv](http://www.ctan.org/pkg/moderncv) with a lot of help from this "[paper](https://www.tug.org/pracjourn/2007-4/mori/mori.pdf)".

A great help in doing that was this [blog post](https://walrustech.wordpress.com/2011/11/18/moderncv-latex-package-a-really-easy-way-to-create-a-modern-cv/) which got me started with moderncv.

I didn't want it to vary too greatly in formatting from my resume since I find that the style is space efficient and allows a lot to be packed in. Thankfully, the new version of moderncv comes with the "banking" style which is extremely close to my original resume :-)

The most painful part was redefining the banking theme to suit my needs which I finally figured out by copying the relevant \*.cls and \*.sty files to the same directory as my TEX file and making modifications thereafter.

This time I added my own "Paper Reports" section to show the different things I have worked on in NUS and it taught me a way to [link to files directly](http://stackoverflow.com/a/4605068) in github so that you can download them instead of checking out the repo.

## Text

Finally, it came to the part of generating the Plain Text Resume and this was the part which involved a lot of brute-force. After several tests with utilities such as detex, htlatex, etc, I finalized on using [catdvi](http://catdvi.sourceforge.net/) to convert a latex generated dvi file into text and then use sed to fix the formatting which was quite easy to do with help from [this guy](http://stackoverflow.com/a/2104256).

As always, I love the formatting freedom that Latex offers compared to other document processors but like all things, it came with a learning curve which isn't flat but more like a long term investment.

I am quite happy with the result of the [pdf](https://github.com/vellvisher/resume/raw/master/Resume.pdf) and the [text file](https://github.com/vellvisher/resume/raw/master/Resume.txt) and hope this effort will last a lifetime!

# \[2012-09-29 Sat\] Google Varsity Challenge 2012
---
id: google-varsity-challenge-2012
---

Quite surprisingly, I spent my day at a Business Case challenge competition hosted by Google and I learned much more from it than from the other case challenge competitions I have taken part in the past.

I think the main reason for that was the instant feedback mechanism from a panel of [great judges](https://dl.dropbox.com/u/33075650/Judges%20Profile.pdf) with a final wrap up of the competition by the winning teams so that we could really stare at the shortcomings in our presentation.

The competition format was that the cases were released last night (10:00pm) and we would be allocated one of the business cases ([GoMyWay](http://www.gomywayapp.com/) or [LoveByte](http://lovebyte.us/)) the next day. Following that was an hour for each round to solve a particular problem (monetization, marketing and competitive advantage) and present those solutions (2 min.) before the panel of judges before being grilled for another two minutes with QnA.

Obviously, as one can estimate we didn't make it and thus this retrospective post to analyse it. Though we were amazed at first by the result, in hindsight I think we got to know quite well why we blew up -

We required **more** pre-competition night prep. Both the winning teams said that they didn't sleep much since they worked on the case and just caught barely enough sleep to survive the day. Spending those crucial hours with the apps (GoMyWay and Love Byte) really made a difference since you could do a great deal of the idea generation which (unfortunately) was happening for us even during the last half an hour of the competition.

This really distracted us and instead of pitching a few good solid ideas, each round brought in a new vision and direction which did not go down well with the judges. Though we were commended about the innovativeness of our solutions, I think that we really needed to take a few and run with them throughout the competition instead of making our presentations seem like the results of hour long brainstorming sessions.

Another thing that we seriously lacked was consistency and focus with our presentation coming across as information overflow when compared to the winning team. We actually covered almost all of the ideas they covered but instead we just touched upon them instead of going deeper into how they would fare in the bigger picture.

One cool thing I learned was that abbreviations as a catch line really help (yes, its very Singaporean) but you need to stick to the same abbreviation throughout the presentation and always [KISS](http://en.wikipedia.org/wiki/KISS_principle).

This really was a great experience and I'm sure that what we have learned will help us tackle new challenges in the future…

# \[2012-09-14 Fri\] Final words on "Journey of the Innovator"
---
id: final-words-on-journey-of-the-innovator
---

A journey comes to an end and to conclude "Journey of the Innovator", these are three of the innumerable things I learned from this seminar series -

-   Endurance, persistence, resilience, dedication, passion - This is the key to any and all startups which want to make a difference. Entrepreneurship is beyond the "tag" that I have my own company and realizing that I am working day in day out for MY company.
-   Mentoring can get you very far and just spending those couple of hours absorbing from the experiences of great successful people can really make a difference in the way you think.
-   Dare to challenge the process/status quo and innovate. A bigger risk is to try nothing rather that to risk trying something.

The Journey has just begun…

# \[2012-09-12 Wed\] Sustaining Innovation - Part 3
---
id: sustaining-innovation-3
---

The last speakers to wrap up CP2201 were the founders of TenCube, Darius Cheung & Varun Chatterji who got acquired McAfee two years ago.

They began with their story about how they started out when Varun lost his cellphone and was really annoyed by the fact that he did not have a backup of his data/contacts and also that anyone could access that date from his mobile phone.

So he started building this product to solve just that and also found that a couple of friends were willing to pay a few dollars a month for this service. However, in the days of there being no AppStore, this was quite a tough task and the consumer market was not a very good channel for them.

Thus, they found their first customers in the police and the military who were actually paranoid about these things and generally go for technologies which are ahead of their time. And so began the journey of these two young students which can be nicely divided into roughly three parts.

They started out as a service company and would be involved in building products which were quite similar to their main vision but with minor modifications to customize it according to the needs of different companies.

Following this, they managed to get the Telcos on-board as well as get deals with Nokia to have the service included in some smartphones pre-installed. This was a major turning point for them since this whole process took four years.

Darius adds, "When you think about the product, it makes sense for Singtel to work with you. But the thing you have to understand that though it makes sense, it is not very important for them to actually work with you. The amount of money they would make by introducing your service will be roughly the same as selling a ringtone to their customers so even if you need them, they don't really need you. Only when they are struggling to find new things to sell and the mobile penetration gets high enough is when it's time that they take you seriously."

I think this piece of advice should be given to every budding entrepreneur looking to integrate their services with the overlord companies and realize the fact that it is not always about the product being good, or making sense for users to have but it also making a huge difference to a billion dollar company that they will step back and listen to you. Catered to a lot of different brands of the phones

The final lease of fresh life into the company came with the advent of the AppStore and this really made them quite big. This was swiftly followed by a bid from McAfee to take over the company and it was then that I sensed a large amount of tension between the two founders.

They had numerous reasons to sell, such as,

-   Scale - The company would need to scale and become very large and very fast since they had one other competitor in the valley and the big security companies did not have their own mobile security products so were looking to acquire such a company.
-   Funding - To become that big and that fast would require a large amount of money and raising seed funding and Darius honestly mentioned that he was very exhausted doing that for a third time around.
-   Investor Pressure - Their investors, including NUS, really wanted some milestones which the acquisition would really achieve and they would also help one of their major sources of funding, Startup@Singapore to make themselves the poster boys of the annual Start-up Business Plan Competition.
-   Remuneration - The amount was actually quite good (rumoured \$10 million) such that they could easily start their own companies once they were done with the two year contract with McAfee.

It was evident that Varun really disliked the idea of the acquisition since he felt that his freedom was severely curtailed and the work style of a big corporate really didn't suit him.

Asked whether they would have done things differently, Darius pointed out that they wouldn't have let the big company steam roll over them with their demands and would instead have chosen to do things quite differently.

"In hindsight, it is easier to connect the dots so it is actually fine if you don't know where you are going. Looking back, it was quite obvious that there was a need for an AppStore and that it would eventually come but no one actually knew when that was going to happen." - Darius

After the takeover, the company mission and product didn't change but the distribution channels were quite different as they would now go through McAfee's vendors and partners. This was technically challenging but the feel of the business wing working hand in hand with the technical department of a start-up had deserted them and hierarchies got in the way.

While answering the question as to why their company had nine cubes instead of ten they talked about how the real story was that Varun just wanted to make some kind of talking point for the logo so that people would remember them as they speculated about the position of the tenth cube.

The press story was however, quite different, that the missing tenth cube showed their determination to strive toward continuous growth as they built the bigger cube.

To wrap up their presentation, they introduced us to their latest start-ups, Sent.ly and BuildPin which they hoped would give them the same success as their first venture.

While discussing Sent.ly, I really like the way Varun and his co-founder defended the model against questions regarding the usefulness of the service and Darius quipped in with, "In start-ups, the biggest thing is customers. If you have customers who want a product, then no amount of logical reasoning or intuition can stand against it."

Thus, we came to a fitting end to the 4-week speaker series on fostering innovation in NUS School of Computing.

# \[2012-09-12 Wed\] Sustaining Innovation - Part 2
---
id: sustaining-innovation-2
---

The second speaker was Zwee (Zihuan) Wee from [Savant Degrees](http://www.savantdegrees.com/) and he was quite young being an NUS graduate from just four years ago. Also, being a drop out from Stanford Masters of Science, I think that he is following the "traditional" technopreneur path to making it big in the IT industry.

His talk began with the difficulties of a fresh graduate and landing clients where he would face the brick wall of "why should I trust you when I have so many years of experience in the industry?".

Thus, his company, whose goal was to leverage technology to stay ahead by aligning business goals, technical requirements and users had a very rough beginning. However, after this tide passed, they were able to develop into a highly skilled team from three-and-a-half members with only an engineering department to a twenty-five member team spanning across engineering, design, marketing, etc.

The differentiating factor about them is what he fondly terms as "Savant Madness". They started off as engineers who asked too many questions building things according to specifications but not making money. That's when they understood that this would not be the way to work and they began making their own specifications and taking up the challenge to to tackle the desirability of the product. They ?started working with the CMO's instead of the CTO's and focusing on extracting the needs of the company to transform those into solutions which leveraged heavily on technology.

Moving on to the notable projects done by SD, Zihuan spoke about [Give.sg](http://give.sg/) and mentioned the specification they got was how do we democratize the art of giving and that is where they began their work acting virtually like the CTO of the Give.sg team, creating a very stable platform for a great cause.

Then he went on to talk about a 100-year old company in Singapore where they replaced the top 10 people of the management by McKinsey and Bane employees and SD's task was to conceptualize the product design where they went as far as flying to Europe to source for companies, working with PwC and building the support team for the 50 million dollar a year company.

He mentioned that as a CEO, the main challenges he faced was in attracting and retaining the right people while on a day-to-day basis he found that he needs to manage and grow people as leaders and managers. During the networking session he also shared his belief in the policy of succession and how he really enjoyed the consulting part and dealing with clients which was missing from his current job scope.

He echoed Stephen that the reason they went for investment funding so that with minority stakeholders, there came an additional layer of expertise and credibility which he found was extremely helpful. It also made the company accountable to shareholders and to diversify and continuing to build and grow.

The part where he shared two videos with us, one of the [Dog Whisperer](http://www.youtube.com/watch?v=Yv99TwwKeXU) and the other of [Gordon Ramsay](http://www.youtube.com/watch?v=e5RMBlLDQLk) was quite eye-opening in the fact that he told us that one should be a keen observer and not just watch things or read things for the sake of watching or reading them. It's quite trivial advice but when we saw him extract key elements from these two innocuous sources of information, it really showed how he is always thinking and critically analysing things to get some form of benefit from them.

Finally, there was this comic dividing people into geeks - technically capable individuals who can build things which don't always work well for normal people and wonks - people who had really good ideas but could not implement them, is a very good representative of most of the students from the School of Computing and the NUS Business School respectively. However, the best part of the comic was the introduction of this new category called "savants" - people who are technically capable of coming up with as well as solving real world problems and I could really tell that Zwee Wee belonged to that group of people.

# \[2012-09-12 Wed\] Sustaining Innovation - Part 1
---
id: sustaining-innovation-1
---

The final session of the CP2201 was by far the best one out of the four and brought a fitting conclusion to a unique and exciting module. It was quite an information heavy session which requires me to break up the interactions into different parts so that I can do justice to all of them.

The theme for this week was "Sustaining Innovation" and I would like to laud Prof. Juzar for his efforts in planning and designing the module. I could see how well all the parts of the course fit into place and the effort put to match speakers and start-ups according to the theme of the week.

Coming back, this week we had four speakers whose start-ups were already successful and they had come down to inspire us to strive towards the same.

## Steven Goh

This fast-talking Australian entrepreneur was actually a very good speaker but his humour and sarcasm was lost on the NUS crowd who, to my disappointment, did not receive him as well. However, I think that his accent and fast pace might also be the cause of not getting a good response since one of my friends did tell me that he couldn't understand most of what Steven was talking about.

He started off by blowing us away with the numbers of his first two start-ups in the financial sector in Australia and I knew that this was a guy worth taking seriously. He then got down to talking about his newest venture, [Mig33](http://www.mig33.com/) which had 186,000 registered users in the first 3 months.

The surprising part about Mig33 is the market that it is successful in, namely, smaller conservative countries (read Sudan, Brunei, Iran) where a virtual identity lets them realize aspirations and take on a persona which is not as easy to cultivate in their real lives. Thus, this virtual life is generally a projection of the mind's image of reality which brought me to think about the scene in the Matrix where Morpheus tells Neo that his personal looks in the Matrix is merely a projection.

His costs really dropped once he shifted from SV to Singapore since he was able to drop his operating costs from 800k a month to just 100k per month as well as increase revenue from 5% to 75% (!).

The juicy part of his talk was getting to understand the business model that they were relying on which really surprised me. Does anyone believe they can really make money selling people virtual gifts and avatar enhancements? Do people really buy that stuff?

Apparently, they damn well do! It is the diametric opposite of Facebook. While Facebook depends on your real-world identity, Mig33, QQ depend upon virtual expression through a virtual identity which is much less conservative than the real one. Thus, they monetize on emotion and apparently people pay!

Also, a good statistic he gave was that if you sent a gift to someone on let's say a dating site, and the gift actually required you to pay, there is a higher chance for you to get a reply to your gift since the person feels that you have taken an actual cost to send it to him/her and it psychologically puts a mild obligation on the person to respond. Contrast this to the meaningless cows and pokes we (not me) are sending our friends on Facebook.

Finally, his talk comprised of the differing merchant model between Mig33 and QQ where QQ had a pre-pay system, they generally go for [merchants](http://mig33.com/business) and have 8,000 of them who are constantly interacting and changing the business model of the system.

The reason for this multi-level marketing was that the smaller merchants, who probably just shared the app with their friends, could not afford the high charges per transaction and instead preferred a larger merchant, a couple of levels up, sending the money down to them with a small fee.

Following this, we had our session of question and answers which brought out some very interesting points and I really gained some very key insights which were quite different from the general opinions I have gotten.

## Why didn't you bootstrap your company instead of going for seed funding?

"It is not just about the money but business relationship, connections and expertise. Often there is value in not making your shares worth more but your company worth more." - SG

## Is Mig33 looking to get acquired eventually?

"It is my genuine belief that you should not build a company for sale but for an IPO. Only a company which has the potential for an IPO has a quality exit because the ones which have quality exits will be ones which could have gone on to be IPOs." - SG

## What sets you apart from your competitors?

"Best chat application on Nokia/Java phones, technical excellence, we target small form factor devices and have a very low data cost which is great for our target markets." - SG

## Upstream

-   Relevant games
-   Business Relationships

## Downstream

-   Tell people that you can double your money playing games with your friends
-   Once the merchant model works for them, they get hooked and don't leave so no turn around for merchants.
-   They trust giving money to their friends

## Qualities of an entrepreneur?

"Cannot underestimate the importance of flexibility, drive, endurance and a sense of humour" - SG

## On endurance -

"I was 32 years old and 140 kg eating hamburgers from a store under my office and had an inflatable bed up in my office where I spent most of my time." - SG

"Silicon Valley has 1200 VC firms and you get to hear about only 20 of them. There are around 6000 venture backed firms but if you look at TechCrunch's list of top start-ups you will not be able to recognize any companies beyond around a hundred. The rosy picture painted about start-ups is far from the truth." - SG

## Personal Life?

"I am a serial husband and relationships don't work as well with start-ups. One of the biggest mistakes I made was that two hours before my first wedding (a very grand one with 600 guests), I was still in my office. One statistic you won't hear people say is that 70% of marriages fail with those associated with Series A funding." - SG

To wrap up the talk, I feel that the whole concept of virtual identities was extremely new to me and something that I can really think about in new ideas.

He came, he inspired and left a lot to think about!

# \[2012-09-04 Tue\] Adapting Innovation - E-Commerce Reloaded
---
id: adapting-innovation-e-commerce-reloaded
---

I have had my own e-commerce start-up which practically blew up so I could relate to this session quite well.

Thus, I wanted to list the salient points of today's talk from the different speakers.

## Richard Tan - [lelong.com.my](http://lelong.com.my)

-   Serial e-commerce entrepreneur
-   Tech forum to sell things which started getting too many posts of non-tech goods
-   Instead of repeatedly deleting non-tech posts, spun off Lelong
-   Post paid payments did not work so offered a prepaid account
-   Buyers don't generally read, default top-up of RM38 instead of the minimum RM20 lead to a higher average
-   Buyers wanted to migrate from bidding to direct buying so added the feature
-   Could control the quality of the product so created a new website with curated store, Superbuy
-   Linked Superbuy to Lelong

## Daniel Tumiwa - [multiply.com](http://multiply.com)

-   Radio jockey to raise money for college
-   Great twitter fan following in Indonesia
-   180,000+ people have him in their G+ circle
-   Indonesia's energy is chaos unlike the power of structure and process in Singapore
-   Click and pray model - whether the online item will be delivered to you
-   Multiply was based out of SV but shifted to Indonesia
-   Social media changing to E-Commerce since bloggers needed to be moved to the new platform
-   Channelled excessive demand by featuring popular bloggers so they are forced to switch to an organized e-commerce solution like Multiply's
-   Death threats for removing blogging option :D
-   Purpose/Passion for the team - Quest for a Better Life: The Indonesian Dream
-   Instant gratification for the team since sellers tell them about their experience with selling items on Multiply and supporting families
-   Don't care about Credit Cards (low penetration) but connect to banks via Internet Banking
-   ATM has an e-commerce option to pay directly to Multiply
-   Google influences e-commerce heavily
-   Localization not required since a lot of Malay people interacting with the Internet understand English
-   For scaling to the masses you need Bahasa.
-   E-commerce does not agree with the global model of the Internet
-   Amazon cannot maintain the level of service/standards everywhere so wouldn't fit well if it acquired Multiply

## Lai Kok Fung - [buzzcity.com](http://buzzcity.com)

-   Experienced the Dotcom crash
-   Naspers invested in BuzzCity
-   People consume media from Internet/mobile more but ad-spending on them disproportional
-   \$20B Opportunity to expand to mobile
-   Three ways to advertise on mobile - Messaging, Banners, Search

Stealing some points from all the speakers, I analysed the failure of our startup and found that we were "blinded by the light" by trying to do too many things that interested us and did not try to do less, simplify and focus on satisfying one need. The approach taken by Richard in this respect was quite impressive as he iteratively built and catered to his users needs. Also, we were inexperienced, didn't know much of the industry and the dedication and passion for the idea was just not in the team as a whole.

But, nonetheless, one has to -

Keep fighting, innovating, adapting…

# \[2012-08-28 Tue\] Scaling Innovation
---
id: scaling-innovation
---

Today's talk in CP2201 like a walk down memory lane with the speakers sharing their personal histories with startups in such intricate detail that sometimes it required effort to extract the lessons they learned from their experiences. I think the main theme of "Scaling Innovation" was not touched upon much though.

## Peng Ong Tsin

It began with Peng Ong Tsin introducing us to his "Beta" Talk, "Entrepreneurship Strategy" where he started off by classifying startups into two categories, "Sustaining" and "Disruptive".

He discussed examples of several different companies and technologies and where they fell in these broad categories which were a bit loosely defined.

Ong Tsin was one of the people behind Gary Kreman's Match.com which (though I have never used it :D) seems quite similar to other dating sites so I could not tell whether it really is successful until I checked the [Alexa](http://www.alexa.com/siteinfo/match.com#) ratings for it and a rank of 81 for the US is big!

Meeting entrepreneurs involved in a successful start-up is quite different from the ones who haven't quite made it yet because I find this degree of confidence coupled with humility which is not always the case with many budding entrepreneurs I have met.

During his session, I really appreciated the clear cut way he deals with problems and needs of people to translate them into ideas for businesses. Often people get too caught up with the technology they are working on and its features and forget about the core problem they set out to solve while sometimes people don't even build their business around solving a problem.

One cool thing about this speaker was that he was the founder of [Encentuate](http://en.wikipedia.org/wiki/Encentuate) and I had actually worked at the IBM Lab in Singapore which was born out of his company so I really admired this about him.

At the end of the talk, he revealed that his motive behind introducing the two categories to us was so that we can decide for ourselves whether we prefer to target creating businesses which are in more established industries or to target high-risk high-gain disruptive startups. Personally, I am a problem solver so am not that stressed out about which side I am on but more that I want to do something cool and that I enjoy doing everyday :-)

## John Wu

The ex-Yahoo, ex-CTO of Alibaba comes across as extremely smart, passive as well as extremely likeable. During the presentation he also shared how restless he was with respect to his career getting bored by routine work and always looking for new ventures and challenges.

It was nice to listen to stories about the starting point of a company like Yahoo and how the passion and dedication was reflected in their work. The pride he took in his work was also very impressive and I found his approach to things quite pragmatic.

It was humorous that while he was at Oracle, people really lauded and appreciated you if you said you were leaving the company to work for a start-up and conversely got very annoyed if you were going to work for a competitor. I contrasted this to the Asian culture where I find that generally people will think you are crazy to give up a nice established paying job to work on an unstable risky venture and it is quite amazing that this culture of promoting start-ups was there so early on in SV.

Another humorous anecdote was his decision to leave his position as CTO of Alibaba and become a VC because one of the reasons was that he wanted to go further up and he jokingly told Jack Ma that it didn't seem that he could really do that at Alibaba.

I really liked his reason for leaving Yahoo to join Alibaba in the fact that there was no comparison of the Alibaba business model to a similar company in the US. He remarked how most of the Chinese companies were clones of successful US tech companies and he was really impressed by the Alibaba SME business model which, he said, was not suited to the US where bigger companies dominated the business environment.

He also added in jest how one of the biggest benefits to Alibaba was the SARS epidemic which lead to empty trade fairs throughout China but also meant that an online portal giving importers throughout the world a door into China was in the right place at the right time.

Seeing his constant desire to do something novel and unique and his current role as a VC makes me wonder how long he will last as one and what role he'll jump into next!

## Danny Wilson

Danny is very energetic and active speaker and if it wasn't for the lack of time, it would have been great to have interacted with him more.

The beginning of his journey into entrepreneurship was quite interesting and the humorous and light-hearted presentation was extremely enjoyable. He highlighted how HP was restructuring his department at that time and not in position to execute this order for an innovative device from a Japanese client who approached him and his desire to take the project further made him become a technopreneur.

I was also extremely impressed by his technical expertise which he retains even after dealing with the problems of running a company as well as managing VCs.

The fact that VCs hate "walking zombies" was very interesting though I think it was a bit far-fetched since I don't think a VC would want their money to disappear completely rather than having a profitable company which has the potential of hitting it big.

The emphasis he placed on marketing was the most eye-catching part of his presentation since he talked about something that many tech companies overlook and eventually see their products failing to acquire the "critical mass" and eventually not "crossing the chasm".

The tips on getting free publicity and marketing were amazing and I hope that one day I will actually need to use it! :-)

**BE BOLD!**

# \[2012-08-22 Wed\] Triggering Innovation
---
id: triggering-innovation
---

## Introduction

The recent measure of the NUS School of Computing at promoting innovation and entrepreneurship is quite impressive via the introduction of the Innovation Track and its pilot module, CP2201 Journey of the Innovator.

The first session had the theme of "Triggering Innovation" and had big names from the entrepreneurship scene of Singapore.

## Wong Meng Weng

First up was the co-founder of the JFDI academy Singapore, Wong Meng Weng, hacker extraordinaire and a Singaporean serial entrepreneur. He has a Wikipedia page of his own, which, in my humble opinion, is a big thing and his talk was no less impressive.

Having taken CS3216 and attended several talks on entrepreneurship earlier (Echelon, etc.), I found that the basic ideas discussed by Wong Meng Weng are part of the general advice given to budding entrepreneurs.

After a mention about the [Skitch acquisition](http://blog.skitch.com/post/9083996519/huge-skitch-is-acquired-by-evernote-a-great), his slides began with a nice quote by George Bernard Shaw :

The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.

This highlighted his first theme about progress and why innovation is necessary to push the human race forward. This was quickly followed by his definition of entrepreneurship and a comparison between resources and resourcefulness showing how the heavy resource laden MNC's are generally behind lean startups in their resourcefulness.

He went on to mention the much acclaimed, [Paul Graham](http://en.wikipedia.org/wiki/Paul_Graham_(computer_programmer)) of Hackers and Painters fame, and this began his discourse on making products which actually have some kind of need and which are wanted by real users. Another idea, similar to [Steve Job's](http://www.forbes.com/sites/chunkamui/2011/10/17/five-dangerous-lessons-to-learn-from-steve-jobs/), that customers don't actually know what they want and what will make them happy. They need someone to think for them, come up with an original concept or idea or it may just be that the customers know what they want but it couldn't be built yet or was restricted by the technology of a previous generation.

Eventually, the idea of "scratching your own itch", or building something just because you need it came through though a clear distinction was made from projects which lacked a vision or purpose and were just "art projects" or projects which only sought to reinvent the wheel (blame academia) instead of more successful community driven projects like Linux and Firefox which had people with well-defined visions guiding them through.

The next segment was more catered to actually having your idea validated and funded and how one needs domain expertise to actually hope for success in executing an idea. A great tip that I really liked was that one may think that they don't have any competitors but it could just be the case that the idea was something that was already tried and had failed miserably years ago and it was just a new scapegoat's turn to get excited about a dead goose. Another thing to learn is that users often outgrow software and this is becoming even faster in our web-powered fast paced globally connected world so an invention makes sense only in the world it is completed in and not in the world where it first began.

Finally, he concluded by with the equation, Customer Development != Product Development != Business Development

and how many people usually end up with only one of the above three skills.

He summed up his message as,

Your job as an entrepreneur is to build businesses that build products and these products create value.

## Muveeeeeeeee……..

Next up in line were the duo Terence Swee and Pete Kellock from muvee.com and they started out with the concept of scratching your itch and technological limitations by defining them as drivers and enablers respectively. Pete listed his factors for deciding whether an idea was worth the effort, namely,

1.  Appeal - product desire/need
2.  Competitive Advantage - what sets you apart?
3.  Feasibility - Limitations of technology

They then went on and discussed their own startup experience in great detail and it was extremely insightful and enriching to learn about a successful startup from its conception to success right from the horse's mouth.

One gem that I really took from the talk was about how competition copying your idea actually validates it and you just have to make sure you do better than them and see what sets you apart. This was an interesting take on the whole fear of big companies beating small fish by implementing their idea.

## Design Thinking

Finally, after the refreshments, we had So-Young Kang, of Awaken Group enlighten us about "Design Thinking". I would say that her talk brought a fresh new perspective to the way I think about design and creativity.

Honestly, I have to admit I was skeptical initially when she shared her lofty vision and I felt that the talk would be one full of platitudes and ideals lacking substance set in a utopian fairy land.

Boy! Was I proved wrong and humbled gracefully! By the end of the talk, I was amazed at the projects they had worked on from redesigning the Branch Office of the Housing Development Board, to coaching CEO's on managing teams and creating a profitable new attraction at Sentosa, their work seemed innovative and disruptive in its own right.

Also, her answer to the question of making products which clash with the user's needs was extremely insightful in saying that we need to expand the definition of user from being just the customer to one where it includes everyone who actually uses your product and may or may not necessarily generate revenue for you.

I think So-Young's talk was a fitting conclusion to today's session about "Triggering Innovation" and after such a successful start, I'm sure that CP2201 has a lot to give me (worth far more than its bid points) and I look forward to making the best of it this semester.
