# Latex settings in VScode


## Install TexLive on macOS

Download `install-tl-unx.tar.gz`
```sh
$ curl -OL http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
```

Open `install-tl-unx.tar.gz`
```sh
$ tar xvf install-tl-unx.tar.gz
```

Change directory to the installer:
```sh
$ cd install-tl-2*
```

Install TexLive
```sh
$ sudo ./install-tl -no-gui -repository http://mirror.ctan.org/systems/texlive/tlnet/
```

To start installation, type `I` and enter.
```sh
Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit
Enter command: I
```

Add a symbolic link to `/usr/local/bin`
```sh
$ sudo /usr/local/texlive/????/bin/*/tlmgr path add
```

## Setting in VScode

1. Install [`LaTeX Workshop`](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) extension.

2. Open `settings.json` in VScode.
    In macOS, you can open it by typing the following command in the terminal.
    ```bash
    code ~/Library/Application\ Support/Code/User/settings.json
    ```
3. Add the following code to `settings.json`. You have two recipes, `ptex2pdf*3` and `ptex2pdf -> pbibtex -> ptex2pdf*2`. The former is to compile `.tex` files without `.bib`, and the latter is for `.tex` files with `.bib`. Please refer to [this page](https://github.com/James-Yu/LaTeX-Workshop/wiki/Compile#building-the-document) for more details.
    ```json
    {
        // latex
        "latex-workshop.latex.tools": [
            {
                "name":"ptex2pdf",
                "command": "ptex2pdf",
                "args": [
                    "-l",
                    "-ot",
                    "-interaction=nonstopmode",
                    // kanji for Japanese
                    "-kanji=utf8 -synctex=1",
                    "%DOC%"
                ]
            },
            {
                "name": "pbibtex",
                "command": "pbibtex",
                "args": [
                    "-kanji=utf8",
                    "%DOCFILE%"
                ]
            }
        ],
        "latex-workshop.latex.recipes": [
            {
                "name": "ptex2pdf*3",
                "tools":[
                    "ptex2pdf",
                    "ptex2pdf",
                    "ptex2pdf",
                ]
            },
            {
                "name": "ptex2pdf -> pbibtex -> ptex2pdf*3",
                "tools":[
                    "ptex2pdf",
                    "pbibtex",
                    "ptex2pdf",
                    "ptex2pdf",
                ]
            },
        ],
        "latex-workshop.latex.clean.fileTypes":
        [
            "*.bbl", "*.blg", "*.idx", "*.ind", "*.lof", "*.lot", "*.out", "*.toc", "*.acn", "*.acr", "*.alg",
            "*.glg", "*.glo", "*.gls", "*.ist", "*.fls", "*.log", "*.fdb_latexmk", "*.synctex.gz",
            "_minted*", "*.nav", "*.snm", "*.vrb",
        ],
        "latex-workshop.latex.autoClean.run": "onBuilt",
        "latex-workshop.latex.autoBuild.run": "onFileChange",
        "latex-workshop.synctex.afterBuild.enabled": true,
        "latex-workshop.view.pdf.viewer": "tab",
    }
    ```


## Let's compile your $\LaTeX$ file!
Let's make a test latex directory. Please download `article-template` from [here](https://github.com/kkensuke/latex-template). Then, open the directory in VScode. You can edit `intro.tex` and compile it by `cmd + S` (Mac). Finally, you will get the modified `main.pdf` in the same directory.

The directory structure is as follows:
```
article-template
|-- img/
|-- preamble.tex
|-- main.tex
|-- main.pdf
|-- ref.bib
`-- sections/
    |-- intro.tex
    |-- method.tex
    ...
    `-- appendix.tex
```

You can divide your `main.tex` into several files as above and include them in `main.tex` as follows:
```latex
\begin{document}
\maketitle
...

\input{sections/intro.tex}
\input{sections/method.tex}
...
\newpage
\bibliographystyle{abbrv}
\bibliography{ref}
\newpage
\input{sections/appendix.tex}

\end{document}
```