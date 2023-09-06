# MathJax settings in MkDocs

To use 	`physics` package in MkDocs, add the following in `docs/javascripts/mathajx.js`.

- `loader: { load: ['[tex]/physics'] },`
- `packages: { '[+]': ['physics'] },`

You can see the physics package examples [here](../latex/basics.md#physics-package).

!!! example
	```javascript
	window.MathJax = {
	  loader: { load: ['[tex]/physics'] },
	  svg: {
	    fontCache: 'global'
	  },
	  options: {
	    ignoreHtmlClass: ".*|",
	    processHtmlClass: "arithmatex"
	  },
	  tex: {
	    inlineMath: [['$', '$'], ['\\(', '\\)']],
	    displayMath: [['$$', '$$'], ['\\[', '\\]']],
	    processEscapes: true,
	    processEnvironments: true,
	    tags: 'ams',
	    packages: { '[+]': ['physics'] },
	    macros: {
	      bbA: "\\mathbb{A}",
	      bbB: "\\mathbb{B}",
	    }
	  }
	};

	document$.subscribe(() => {
	  MathJax.typesetPromise()
	})
	```
