# Exporting gte pictures to xfig

This has high priority because GTE is a nice drawing tool
for game trees and strategic-form games.

The xfig drawing program is an old GUI tool for 2D graphics
common on Linux.
It is mode-based and allows easy post-manipulation that
would be clumsy to implement in GTE itself.

Its text-based .fig format, documented in `fig-format-2008`,
is compact, and allows reliable conversions to other formats
such as .pdf or .svg with the `fig2dev` program.
Hence, if exported to .fig, we get the other formats by a
call to `fig2dev` on a Linux backend server without any
extra work.

## The example 

The following example was generated with the old GTE program
(stored in `xfig-example.xml`), here a screenshot:

![](./screenshot.png)

and exported to xfig into `orig-xfig-example.fig`
and then manually post-processed in xfig by deleting the
white canvas background, giving `xfig-example.fig`, in order
to restrict the drawing to the tree alone without
unnecessary white margins.

The difference between these two files
`orig-xfig-example.fig` and `xfig-example.fig`
shows that only integer coordinates are used, but floating
point numbers are apparently harmless and either truncated
or rounded when the file is read in by the xfig drawing
program.

Sample exports, directly from xfig, are to `xfig-example.jpg` as here:

![](./xfig-example.jpg)

to `xfig-example.pdf`
![](./xfig-example.pdf)

and via 

    fig2dev -L svg xfig-example.fig xfig-example.svg

to .svg as here:

![](./xfig-example.svg)








