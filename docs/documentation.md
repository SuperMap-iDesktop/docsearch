---
layout: page
title: Documentation
permalink: /documentation/
---

## Introduction

We're scratching our own itch here. As developers, we spend a lot of time
reading documentation, and it isn't always easy to find the information we need.

Not blaming anyone here. Building a good search for a documentation is a complex
challenge. We happen to have a lot of experience doing that, and we want to
share it with the world. For free.

Just submit the form on the [website][16] and we'll get back to you with what
you need to integrate your new search into your website.

 1. We'll crawl your documentation pages,
 2. We'll configure your search experience,
 3. You'll need to add a bit of JavaScript and CSS code to your website.

## Setup

Once we've crawled your documentation website we'll send you the credentials you
need to add the following code snippet to your website:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/docsearch.js/1/docsearch.min.css" />
<script type="text/javascript" src="//cdn.jsdelivr.net/docsearch.js/1/docsearch.min.js"></script>
<script type="text/javascript">
docsearch({
  apiKey: '<API_KEY>',
  indexName: '<INDEX_NAME>',
  inputSelector: '<YOUR_INPUT_DOM_SELECTOR>'
});
</script>
```

## Customization

The default colorscheme is blue and gray:

![Default colorscheme][17]

To update the colors to suit your website, you just need to override a few
colors. Here is an example of a CSS file that you can use as a basis and that
sets white and purples colors.

```css
/* Bottom border of each suggestion */
.algolia-docsearch-suggestion {
  border-bottom-color: #3A3DD1;
}
/* Main category headers */
.algolia-docsearch-suggestion--category-header {
  background-color: #4B54DE;
}
/* Highlighted search terms */
.algolia-docsearch-suggestion--highlight {
  color: #3A33D1;
}
/* Highligted search terms in the main category headers */
.algolia-docsearch-suggestion--category-header .algolia-docsearch-suggestion--highlight  {
  background-color: #4D47D5;
}
/* Currently selected suggestion */
.aa-cursor .algolia-docsearch-suggestion--content {
  color: #272296;
}
.aa-cursor .algolia-docsearch-suggestion {
  background: #EBEBFB;
}

/* For bigger screens, when displaying results in two columns */
@media (min-width: 768px) {
  /* Bottom border of each suggestion */
  .algolia-docsearch-suggestion {
    border-bottom-color: #7671df;
  }
  /* Left column, with secondary category header */
  .algolia-docsearch-suggestion--subcategory-column {
    border-right-color: #7671df;
    background-color: #F2F2FF;
    color: #4E4726;
  }
}
```

### Advanced styling

If you want to do heavily change the way results are displayed, you might find
it easier to directly edit the `scss` files in this repository.

[`_variables.scss`][18]
contains all the color, breakpoints and size definitions while 
[`main.scss`][19]
holds the structure of the display.

You can regenerate the whole final `css` file from those `scss` files by running
`npm run build:css`. The resulting files will be found in `./dist/cdn/`.

All you have to do now is change the `link` tag that was loading the default
styling from our CDN, to one that is loading your newly compiled file.

## Custom options

DocSearch is a wrapper around the [autocomplete.js][20] library that gets its
results from the Algolia API. As such, you can use any options provided by
[autocomplete.js][21] and by the Algolia API.

### Autocomplete options

You can pass any options to the underlying `autocomplete` instance through
the`autocompleteOptions` parameter. You will find all `autocomplete` options in
its [own documentation][22]. 

You can also listen to `autocomplete` events through the `.autocomplete`
property of the `docsearch` instance.

```javascript
var search = docsearch({
  apiKey: '<API_KEY>',
  indexName: '<INDEX_NAME>',
  inputSelector: '<YOUR_INPUT_DOM_SELECTOR>',
  autocompleteOptions: {
    // See https://github.com/algolia/autocomplete.js#options
    // For full list of options
    debug: true
  }
});

// See https://github.com/algolia/autocomplete.js#custom-events
// For full list of events
search.autocomplete.on('autocomplete:opened', function(e) {
  // Do something when the dropdown menu is opened
});
```

### Algolia options

You can also pass any specific option to the Algolia API to change the way
records are returned. You can pass any options to the Algolia API through
the `algoliaOptions` parameter.

```javascript
docsearch({
  apiKey: '<API_KEY>',
  indexName: '<INDEX_NAME>',
  inputSelector: '<YOUR_INPUT_DOM_SELECTOR>',
  algoliaOptions: {
    hitsPerPage: 10
  }
});
```

You will find all Algolia API options in its [own documentation][23]


[1]: https://community.algolia.com/docsearch/
[2]: https://img.shields.io/npm/v/docsearch.js.svg?style=flat-square
[3]: https://img.shields.io/travis/algolia/docsearch/master.svg?style=flat-square
[4]: https://img.shields.io/coveralls/algolia/docsearch/master.svg?style=flat-square
[5]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[6]: https://img.shields.io/npm/dm/docsearch.js.svg?style=flat-square
[7]: ./docs/img/showcase/example-eslint.gif
[8]: #introduction
[9]: #setup
[10]: #customization
[11]: #development-workflow
[12]: #local-example
[13]: #local-build
[14]: #documentation-website
[15]: #macos
[16]: https://community.algolia.com/docsearch/
[17]: https://community.algolia.com/docsearch/img/default-colorscheme.png
[18]: https://github.com/algolia/docsearch/blob/master/src/styles/_variables.scss
[19]: https://github.com/algolia/docsearch/blob/master/src/styles/main.scss
[20]: https://github.com/algolia/autocomplete.js
[21]: https://github.com/algolia/autocomplete.js
[22]: https://github.com/algolia/autocomplete.js#options
[23]: https://www.algolia.com/doc/ruby#full-text-search-parameters
[24]: https://nodejs.org/en/
[25]: https://jekyllrb.com/
[26]: https://www.ruby-lang.org/en/
[27]: http://bundler.io/

