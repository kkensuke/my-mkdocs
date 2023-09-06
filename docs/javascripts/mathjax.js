window.MathJax = {
  loader: {
    load: ['[tex]/physics']
  },
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
      etal: "\\text{et al.}",
      ie: "\\text{i.e. }",
      eg: "\\text{e.g. }",
      cf: "\\text{c.f. }",
      etc: "\\text{etc.}",

      // mathbb capital letters
      bbA: "\\mathbb{A}",
      bbB: "\\mathbb{B}",
      bbC: "\\mathbb{C}",
      bbD: "\\mathbb{D}",
      bbE: "\\mathbb{E}",
      bbF: "\\mathbb{F}",
      bbG: "\\mathbb{G}",
      bbH: "\\mathbb{H}",
      bbI: "\\mathbb{I}",
      bbJ: "\\mathbb{J}",
      bbK: "\\mathbb{K}",
      bbL: "\\mathbb{L}",
      bbM: "\\mathbb{M}",
      bbN: "\\mathbb{N}",
      bbO: "\\mathbb{O}",
      bbP: "\\mathbb{P}",
      bbQ: "\\mathbb{Q}",
      bbR: "\\mathbb{R}",
      bbS: "\\mathbb{S}",
      bbT: "\\mathbb{T}",
      bbU: "\\mathbb{U}",
      bbV: "\\mathbb{V}",
      bbW: "\\mathbb{W}",
      bbX: "\\mathbb{X}",
      bbY: "\\mathbb{Y}",
      bbZ: "\\mathbb{Z}",

      // mathbf capital letters
      bfA: "\\mathbf{A}",
      bfB: "\\mathbf{B}",
      bfC: "\\mathbf{C}",
      bfD: "\\mathbf{D}",
      bfE: "\\mathbf{E}",
      bfF: "\\mathbf{F}",
      bfG: "\\mathbf{G}",
      bfH: "\\mathbf{H}",
      bfI: "\\mathbf{I}",
      bfJ: "\\mathbf{J}",
      bfK: "\\mathbf{K}",
      bfL: "\\mathbf{L}",
      bfM: "\\mathbf{M}",
      bfN: "\\mathbf{N}",
      bfO: "\\mathbf{O}",
      bfP: "\\mathbf{P}",
      bfQ: "\\mathbf{Q}",
      bfR: "\\mathbf{R}",
      bfS: "\\mathbf{S}",
      bfT: "\\mathbf{T}",
      bfU: "\\mathbf{U}",
      bfV: "\\mathbf{V}",
      bfW: "\\mathbf{W}",
      bfX: "\\mathbf{X}",
      bfY: "\\mathbf{Y}",
      bfZ: "\\mathbf{Z}",

      // mathrm capital letters
      rmA: "\\mathrm{A}",
      rmB: "\\mathrm{B}",
      rmC: "\\mathrm{C}",
      rmD: "\\mathrm{D}",
      rmE: "\\mathrm{E}",
      rmF: "\\mathrm{F}",
      rmG: "\\mathrm{G}",
      rmH: "\\mathrm{H}",
      rmI: "\\mathrm{I}",
      rmJ: "\\mathrm{J}",
      rmK: "\\mathrm{K}",
      rmL: "\\mathrm{L}",
      rmM: "\\mathrm{M}",
      rmN: "\\mathrm{N}",
      rmO: "\\mathrm{O}",
      rmP: "\\mathrm{P}",
      rmQ: "\\mathrm{Q}",
      rmR: "\\mathrm{R}",
      rmS: "\\mathrm{S}",
      rmT: "\\mathrm{T}",
      rmU: "\\mathrm{U}",
      rmV: "\\mathrm{V}",
      rmW: "\\mathrm{W}",
      rmX: "\\mathrm{X}",
      rmY: "\\mathrm{Y}",
      rmZ: "\\mathrm{Z}",

      // mathcal capital letters
      calA: "\\mathcal{A}",
      calB: "\\mathcal{B}",
      calC: "\\mathcal{C}",
      calD: "\\mathcal{D}",
      calE: "\\mathcal{E}",
      calF: "\\mathcal{F}",
      calG: "\\mathcal{G}",
      calH: "\\mathcal{H}",
      calI: "\\mathcal{I}",
      calJ: "\\mathcal{J}",
      calK: "\\mathcal{K}",
      calL: "\\mathcal{L}",
      calM: "\\mathcal{M}",
      calN: "\\mathcal{N}",
      calO: "\\mathcal{O}",
      calP: "\\mathcal{P}",
      calQ: "\\mathcal{Q}",
      calR: "\\mathcal{R}",
      calS: "\\mathcal{S}",
      calT: "\\mathcal{T}",
      calU: "\\mathcal{U}",
      calV: "\\mathcal{V}",
      calW: "\\mathcal{W}",
      calX: "\\mathcal{X}",
      calY: "\\mathcal{Y}",
      calZ: "\\mathcal{Z}",

      const: "\\mathrm{const.}",
      hc: "\\mathrm{h.c.}",
      lhs: "\\mathrm{(LHS)}",
      rhs: "\\mathrm{(RHS)}",
      Haar: "\\mathrm{Haar}",
      poly: "\\mathrm{poly}",
      SWAP: "\\mathrm{SWAP}",
      CNOT: "\\mathrm{CNOT}",

      argmin: "\\arg\\min",
      argmax: "\\arg\\max",
      sgn: "\\mathrm{sgn}",
      sign: "\\mathrm{sign}",
      Supp: "\\mathrm{Supp}",
      diag: "\\mathrm{diag}",
      E: "\\mathrm{E}",
      Var: "\\mathrm{Var}",
      Cov: "\\mathrm{Cov}",
      Hom: "\\mathrm{Hom}",
      Aut: "\\mathrm{Aut}",
      End: "\\mathrm{End}",

      // others
      bar: ["\\overline{#1}", 1],
      combi: ["\\binom{#1}{#2}", 2],
      dg: "^\\dagger",
      fa: "^\\forall",
      ex: "^\\exists",
      pd: "\\partial",
      vt: "\\,\\|\\,",
      T: "^\\mathsf{T}",
      bs: "\\boldsymbol",
      ot: "\\otimes",
      otn: ["^{\\otimes {#1}}", 1],
      kten: ["\\ket{#1}\\otimes\\ket{#2}", 2],
      bten: ["\\bra{#1}\\otimes\\bra{#2}", 2],
      memo: ["\\textcolor{red}{#1}", 1],

      // physics
      paulii: "\\mqty[\\pmat{0}]",
      paulix: "\\mqty[\\pmat{1}]",
      pauliy: "\\mqty[\\pmat{2}]",
      pauliz: "\\mqty[\\pmat{3}]",

      rx: ["\\mqty[\\cos \\frac{#1}{2} & -\\sin\\frac{#1}{2}  \\\\ \\sin \\frac{#1}{2}  & \\cos\\frac{#1}{2} ]", 1],
      ry: ["\\mqty[\\cos \\frac{#1}{2} & -i\\sin\\frac{#1}{2} \\\\ i\\sin \\frac{#1}{2} & \\cos\\frac{#1}{2} ]", 1],
      rz: ["\\mqty[\\exp(-i{#1}/2) & 0 \\\\ 0 & \\exp(i{#1}/2) ]", 1],
    }
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
