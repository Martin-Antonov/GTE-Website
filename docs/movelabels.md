# Labeling of moves while creating the tree

Here is my suggested behaviour of creating move labels,
which should be as predictable as possible:

1. Each information set has two possible states:

    * "unassigned move" = move labels not yet assigned for
      any outgoing edge (true for each newly created node)

    * "assigned move" = move labels already assigned for at
      least one child
    
    **ACTUALLY, I WONDER if that status should not be
    assigned to the tree edge rather than the info set.
    See below, in particular 3.a. and 9.**
 
2. For each player, store a "first unused move label" for
   automatic consecutive numbering.

3. When an information set is assigned a new player or chance,
   
   a. check if ALL information sets now have an assigned
     player (i.e. the game tree is complete and a strategic
     form can be generated). If that is the case, change the
     status of each unassigned move (this may include some
     "assigned move" info sets if not all moves are
     assigned) using and incrementing the label from 2.
   
   b. if not all information sets have an assigned player,
     change nothing (i.e. leave the current info set in
     "unassigned move" mode)

4. When a new node is created (which has no player), just
   make it into state "unassigned move".
   **Keep the display of moves that have been assigned.**
   (Currently labels disappear, which is disconcerting.)

5. When an info set gets an extra child per node and that
   info set is in "assigned move" state, create new labels
   for all unassigned children including the new one,
   and **keep the existing labels**.

6. When a move label is manually edited, change it to
   "assigned move" state. So no special status for
   "manually edited", just "assigned move".

   * maybe allow for reversal back to "unassigned" when
     entering a *blank* label (blank labels are currently
     allowed which are not great)

7. When two information sets are merged, use the move labels
   of the *first* information set that has "assigned move"
   status, complete missing move names as in 5.
   If all merged info sets have unassigned nodes, leave
   them. 

8. When an information set is split or dissolved, keep the
   current status and names for the two information sets
   (which now have the same move labels).

9. When a leaf is deleted, check if the edge leading to it
   has a move label and if so if the parent node had
   "assigned move" status only because of that label. If so
   (all children of the parent node have unassigned moves
   leading to them), change parent info set to "unassigned".
   **No such thing necessary if "unassigned" is a move
   status.

10. Reset button: make all moves unassigned. Create all
    labels anew if the check in 3.a. shows that all infosets
    have a player. (Current behaviour when a new node is
    created.)
    Since we have undo, this strong effect can be undone and
    manual assignment used instead.

### Possible feature: Preferred move lists

This is not urgent at all and refers to an extension of 2.
above.

I think a later feature could be that rather than starting
from A,B,C for player 1, and a,b,c for player 2
we could have a "preferred list" or a "preferred starting
move" for that player in the settings (and we have no
settings yet).
Such a list could be "L R S T" or "L C R" or "T B" or "Top
Bottom" etc.

If we have 3 players, I think player 3 should start
somewhere in the middle of the alphabet and that starting
label could perhaps be editable. 

But this is probably a distracting feature rather than a
useful one. Better to store entire game trees with such
things. The labels are very quickly renamed anyhow.

