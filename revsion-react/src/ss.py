import os

def solve(N, P, M, X):
    seen_positions = set()
    turn = 0  # 0 for Oliver, 1 for Ethan
    
    while P != X:
        if P in seen_positions:
            return "Draw"
        seen_positions.add(P)
        
        left = max(1, P - (M - 1))
        right = min(N, P + (M - 1))
        
        P = left + right - P  # Reverse operation
        
        turn = 1 - turn  # Switch turns
        
    return "Oliver" if turn == 0 else "Ethan"

if _name_ == '_main_':
    fptr = open(os.environ['OUTPUT_FILE_PATH'], 'w')
    
    N = int(input().strip())
    P = int(input().strip())
    M = int(input().strip())
    X = int(input().strip())
    
    outcome = solve(N, P, M, X)
    
    fptr.write(str(outcome) + '\n')
    fptr.close()