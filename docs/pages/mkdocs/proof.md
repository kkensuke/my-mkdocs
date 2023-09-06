# Math Admonitions

## Examples

!!! definition asdf
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! axiom asdf
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! assumption asdf
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! criterion asdf
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! theorem
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! proposition
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! corollary
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! lemma
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! conjecture
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! proof
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! example
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! remark
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

!!! property
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.


## CSS

Add the following CSS to your `docs/stylesheets/extra.css`.

``` css

/* admonitions like sphinx-proof */
:root {
  --note-title-color: rgba(68,138,255,.1);
  --note-border-color: #007bff;
  --warning-title-color: rgba(220,53,69,.1);
  --warning-border-color: #dc3545;
  --hint-title-color: rgba(255,193,7,.2);
  --hint-border-color: #ffc107;
  --caution-title-color: rgba(253,126,20,.12);
  --caution-border-color: #fd7e14;
  --success-title-color: rgba(40,167,69,.1);
  --success-border-color: #28a745;
  --grey-title-color: rgba(204,204,204,.2);
  --grey-border-color: #ccc;
}

.md-typeset .admonition.definition,
.md-typeset details.definition {
  border-color: var(--grey-border-color);
  background-color: var(--grey-title-color);
}
.md-typeset .definition > .admonition-title,
.md-typeset .definition > summary {
  padding-left: .6rem;
  background-color: var(--grey-title-color);
}
.md-typeset .definition > .admonition-title::before,
.md-typeset .definition > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.axiom,
.md-typeset details.axiom {
  border-color: var(--warning-border-color);
  background-color: var(--warning-title-color);
}
.md-typeset .axiom > .admonition-title,
.md-typeset .axiom > summary {
  padding-left: .6rem;
  background-color: var(--warning-title-color);
}
.md-typeset .axiom > .admonition-title::before,
.md-typeset .axiom > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.assumption,
.md-typeset details.assumption {
  border-color: var(--hint-border-color);
  background-color: var(--hint-title-color);
}
.md-typeset .assumption > .admonition-title,
.md-typeset .assumption > summary {
  padding-left: .6rem;
  background-color: var(--hint-title-color);
}
.md-typeset .assumption > .admonition-title::before,
.md-typeset .assumption > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.criterion,
.md-typeset details.criterion {
  border-color: var(--caution-border-color);
  background-color: var(--caution-title-color);
}
.md-typeset .criterion > .admonition-title,
.md-typeset .criterion > summary {
  padding-left: .6rem;
  background-color: var(--caution-title-color);
}
.md-typeset .criterion > .admonition-title::before,
.md-typeset .criterion > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.theorem,
.md-typeset details.theorem {
  border-color: var(--note-border-color);
  background-color: var(--note-title-color);
}
.md-typeset .theorem > .admonition-title,
.md-typeset .theorem > summary {
  padding-left: .6rem;
  background-color: var(--note-title-color);
}
.md-typeset .theorem > .admonition-title::before,
.md-typeset .theorem > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.proposition,
.md-typeset details.proposition {
  border-color: var(--note-border-color);
  background-color: var(--note-title-color);
}
.md-typeset .proposition > .admonition-title,
.md-typeset .proposition > summary {
  padding-left: .6rem;
  background-color: var(--note-title-color);
}
.md-typeset .proposition > .admonition-title::before,
.md-typeset .proposition > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.conjecture,
.md-typeset details.conjecture {
  border-color: var(--hint-border-color);
  background-color: var(--hint-title-color);
}
.md-typeset .conjecture > .admonition-title,
.md-typeset .conjecture > summary {
  padding-left: .6rem;
  background-color: var(--hint-title-color);
}
.md-typeset .conjecture > .admonition-title::before,
.md-typeset .conjecture > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.proof,
.md-typeset details.proof {
  border-color: var(--grey-border-color);
  background-color: var(--grey-title-color);
}
.md-typeset .proof > .admonition-title,
.md-typeset .proof > summary {
  padding-left: .6rem;
  background-color: var(--grey-title-color);
}
.md-typeset .proof > .admonition-title::before,
.md-typeset .proof > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.example,
.md-typeset details.example {
  border-color: var(--grey-border-color);
  background-color: var(--grey-title-color);
}
.md-typeset .example > .admonition-title,
.md-typeset .example > summary {
  padding-left: .6rem;
  background-color: var(--grey-title-color);
}
.md-typeset .example > .admonition-title::before,
.md-typeset .example > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.remark,
.md-typeset details.remark {
  border-color: var(--success-border-color);
  background-color: var(--success-title-color);
}
.md-typeset .remark > .admonition-title,
.md-typeset .remark > summary {
  padding-left: .6rem;
  background-color: var(--success-title-color);
}
.md-typeset .remark > .admonition-title::before,
.md-typeset .remark > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.corollary,
.md-typeset details.corollary {
  border-color: var(--caution-border-color);
  background-color: var(--caution-title-color);
}
.md-typeset .corollary > .admonition-title,
.md-typeset .corollary > summary {
  padding-left: .6rem;
  background-color: var(--caution-title-color);
}
.md-typeset .corollary > .admonition-title::before,
.md-typeset .corollary > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.lemma,
.md-typeset details.lemma {
  border-color: var(--hint-border-color);
  background-color: var(--hint-title-color);
}
.md-typeset .lemma > .admonition-title,
.md-typeset .lemma > summary {
  padding-left: .6rem;
  background-color: var(--hint-title-color);
}
.md-typeset .lemma > .admonition-title::before,
.md-typeset .lemma > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}

.md-typeset .admonition.property,
.md-typeset details.property {
  border-color: var(--caution-border-color);
  background-color: var(--caution-title-color);
}
.md-typeset .property > .admonition-title,
.md-typeset .property > summary {
  padding-left: .6rem;
  background-color: var(--caution-title-color);
}
.md-typeset .property > .admonition-title::before,
.md-typeset .property > summary::before {
  background-color:  rgba(0, 0, 0, 0);
  -webkit-mask-image: none;
          mask-image: none;
}
```