# Algorithms (partly legacy) for solving games for inclusion in GTE

## 1. Sequence form implementation for 2002 Econometrica article

https://github.com/stengel/ecta2002

contains the source files in C used for the computational
experiments in the publication

von Stengel, Bernhard, Antoon van den Elzen, and Dolf Talman. "Computing Normal Form Perfect Equilibria for Extensive Two‐Person Games." Econometrica 70.2 (2002): 693-715.

https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0262.00300
https://www.jstor.org/stable/pdf/2692287.pdf
http://www.maths.lse.ac.uk/Personal/stengel/TEXTE/vonStengelElzenTalman.pdf

This created a special binary two-player game tree with
alternating players and all information sets containing two
nodes. The resulting game tree has sub-exponential growth in
the reduced strategic form which has size $O(2^{\sqrt n})$ for
a tree with n nodes, whereas the sequence form has $O(n^2)$
nodes.

The program has options to create trees of various sizes,
different random seeds, and whether to use the normal (=
strategic) form or the sequence form to solve it.
The outputs are then processed with various Unix hacks
(using grep and the like) which are not recorded in this
repository.

Its main value is twofold:
- An implementation of Lemke's algorithm, which can be used
  standalone, in integer arithmetic. Input of numbers is
  limited to 32-bit integers but the internal arithmetic has
  arbitrary precision.
- The generation of the reduced normal form is general,
  using the game tree (with perfect recall) which may also
  have chance moves, and uses a clever numbering system even
  for very large strategic forms as they arise in this
  context (with 2^15 reduced strategies for a certain number
  of levels).
- The generation of the sequence form is also general.

