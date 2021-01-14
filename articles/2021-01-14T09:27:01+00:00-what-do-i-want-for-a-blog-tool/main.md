# What do I want for a blog tool?

When I started to plan my personal blog, it was near the end of 2020. "Traditional" blogging tools did not look
attractive to me any more. For instance, Wordpress have any fancy features if my little brain can imagine. But I simply
don't need those fancy features any more. I don't care that much about comments under articles or templates for advanced
styling. Most importantly, I don't want to spend money for a database.

So I turn to the path of static website. All the current tools, such as Jekyll and Gatsby, have gone too from from being
easy to use. I don't want to spare any brain cell for them as a typical middle age programmer.

## What exactly I want?

1. I want to write my blog in Markdown format
2. I want to generate a static website from Markdown articles and host it on the cheap cloud object storage.
   (Only if there are popular tools for generating RSS feeds, then I will provide a RSS feed)
3. I want visitors to be able to search for articles in web browsers without communicating to a backend which handles full text
search queries.
   
## It sounds simple

For point 1 and point 2, some JavaScripts tools can streamline the workflow without much coding or reinventing the
wheel.

For the point 3, full-text searching capability in web browsers, I want to implement a Bloom filter as the query index.
And then add some in-browser JavaScripts to pull the web pages from hosting.

## No more things

No more functionalities. That's it. A middle age man cannot take any more nonsense.