# Generating reduced strategies

From page 39 of Martin's dissertation, with Bernhard's comments:

## Perfect recall

###  Dissertation, page 39

In order to create a strategic form, we first check whether
each player has perfect recall, namely, that each node in an
information set has the same sequence of own earlier moves
(as explained in Chapter 2). The algorithm for checking
whether the game has perfect recall is fairly
straightforward. For every node n in a given information
set, we store the reachable nodes (that belong to the same
player) on the path from the root to n. If any node in the
reachability set has been reached via different moves, then
the player has imperfect recall. We repeat this procedure
for every information set in the game tree.

### Bernhard:

Here I would do the following.

1. breadth-first order of info sets is excellent. What is
   important is to have PER PLAYER a linear order (I would
   suggest to just keep a list for that) so that if h'
   precedes h in the tree (meaning: some node in h' precedes
   some node in h via a path) then h' precedes h in the
   linear list. "Precedes" between info sets of different
   players may be circular (see Fig 5.5 your page 37), but
   for one player it is not, so the info sets of a player
   are obtained in such a linear order when traversing the
   tree via BFS.

2. Every move in the tree is uniquely identified by info set
   and which move it is (0...k-1 for k moves). Do not use
   the move names which may not be unique (Flash GTE does
   this wrong). Use one extra move EMPTY.

3. Traverse the nodes of the tree breadth-first (compatible
   with the info set order - one way to do this is to have
   the BFS order of the nodes as primary information from
   which the info set order is derived).
   If the game has N players plus chance, record for each
   node x an array entry of size 1+N of moves,
   say move[x][i], which stores for node x 
   - for a personal player i=1,...N:
     the last move of player i on the path from the root
     to x
   - for the chance player i=0:
     the cumulative chance probability of reaching x from
     the root, stored as a rational number.
   Initialize: move[root][0]=1, move[root][i]=EMPTY for 
     i = 1,...,N
   - when traversing the tree nodes x, starting with the
     children of root, let p[x] be the parent of x.
     Let move[x] = move[p[x]] (i.e. COPY, not link, the
     entire array), with only a single update for
     i = player to move at p[x]:
     if i=1,...,N, let m be the move from p[x] to x,
        update move[x][i] = m
     if i=0, let p the probability from p[x] to x,
        update move[x][0] *= p (multiply by p)
4. After this information is recorded, you have for each
   node
   - the chance probability of getting there (product of all
     chance probs on the path, useful for terminal nodes
   - for each player the last (preceding) move of that player.
5. Perfect recall is now easy to check: for information
   set h belonging to personal player i, check
   that for each node x in h we have the same move[x][i].
   Call this move lastmove[h] (which belongs by definition
   to player i).

## Reduced strategies

###  Dissertation, page 39

If the game has perfect recall, we proceed by calculating
the reduced strategies for each player. The algorithm starts
by collecting all information sets (including singletons)
for each player from the tree in a breadth-first order. The
order of information sets for a given player determines the
order of moves, coming from an information set, in a
strategy for that player. For example, in Figure 2.1 player
I has two decision nodes, which determine two "slots" for
moves at the respective decision nodes. The possible moves
for the first slot are {X, Y, Z} and {P, Q} for the
second slot. The algorithm then proceeds to generate all
possible combinations of moves for each slot. If an
information set is not reachable due to an
**own earlier move in the strategy**,
the corresponding slot is skipped and given
a value of null, which is later replaced by a "\*" in the
string representation of each strategy.

### Bernhard:
I hope that the phrase I emphasized
**own earlier move in the strategy**
has the conceptual mistake (in line with the observed bug)
that "earlier" is interpreted in terms of the linear list of
information sets, rather than the (more partial) order in
the tree.
So here is how to do this with the data structure that I
desribed above: All we need is for each info set h
lastmove[h] (well-defined by perfect recall).
A strategy is a tuple of choices 
c[h] for each h in the list of infosets(player i),
where c[h] is either a move at h or "\*" if h is unreachable.
How to decide the latter?
- take a node x in h
- if lastmove[h] == EMPTY, fill in the slot for h
- otherwise let h' be the info set where lastmove[i]
  was made.
  Then h is reachable if and only if c[h'] (the previous
  choice in the strategy) equals lastmove[i]
  and you can fill in the different choices c[h],
  otherwise set c[h] = "\*".
  (Here, "\*" should never match a move[x][i]).

Here is a variation that I think works even for imperfect
recall, where move[x][i] may not be the same for for nodes x
in h:

- look at all nodes x in h
- if move[x][i] == EMPTY, fill in the slot for h
- if ANY move[x][i] for x in h and the corresponding h'
  where that move is made matches c[h'], then h is reachable
  and must be filled in.

May be the pre-processing in step 5. above could be
generalized to record a SET of last moves for h, which is a
singleton if and only if the player has perfect recall.
We clearly need for each move the information set it is made
at.

I have turned the above generation process also into a way
to COUNT and NUMBER the reduced strategies which simplifies
their lookup, but that is a different story. It assumes
a fixed list of info sets and the moves at those info sets.
