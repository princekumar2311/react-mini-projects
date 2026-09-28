import os

def solve(N, P, M, X):
    visited = set()
    turn = 0

    while True:
        if P == X:
            return "Oliver" if turn == 0 else "Ethan"

        state = (P, turn)
        if state in visited:
            return "Draw"
        visited.add(state)

        left = max(1, P - M + 1)
        right = min(N - M + 1, P)

        if X < P:
            P = left
        elif X > P:
            P = right
        else:
            return "Draw"

        turn = 1 - turn

if _name_ == '_main_':
    fptr = open(os.environ['OUTPUT_FILE_PATH'], 'w')

    N = int(input().strip())
    P = int(input().strip())
    M = int(input().strip())
    X = int(input().strip())

    outcome = solve(N, P, M, X)
    fptr.write(str(outcome) + '\n')

    fptr.close()