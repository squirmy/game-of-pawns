# game-of-pawns

Randomly places a random number of chess pieces in a random order on a regulation chess board.

Rules to live by...

- there is one and only one king of each color;
- the kings must not be placed on adjacent squares;
- there can not be any pawn in the promotion square (no white pawn in the eighth rank, and no black pawn in the first rank);
- including the kings, up to 32 pieces of either color can be placed. There is no requirement for material balance between sides, but the picking of pieces should comply with what is found in a regular chess set (e.g., 8 pawns/colour, 1 queen/colour, etc)
- (FEN requirement only) it is white's turn, both sides have lost castling rights and there is no possibility for en passant (the FEN should thus end in w - - 0 1).

## Usage

`./go.sh --fen`

```
3N2r1/kPPB3p/6N1/1P1b2P1/P2p2P1/8/QK1B2p1/8 w - - 0 1
```

`./go.sh --grid`

```
.  .  n  .  .  .  r  .
P  .  .  .  p  P  p  .
p  .  b  .  B  .  .  .
.  r  .  .  .  .  p  .
.  .  .  B  p  .  P  .
b  .  .  .  P  N  .  .
p  .  k  P  .  .  .  K
.  .  N  .  .  .  n  R
```

`./go.sh --html`

You'll see.
