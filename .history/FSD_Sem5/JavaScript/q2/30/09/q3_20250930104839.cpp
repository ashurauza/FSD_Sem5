//WRITE A C++ PROGRAM TO PRINT THE JUMPING NUMBERS IN SORTED ORDER TILL GIVEN NUMBER N.


#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;    
void bfs(int n, int num, vector<int>& result) {
    queue<int> q;
    q.push(num);

    while (!q.empty()) {
        int current = q.front();
        q.pop();

        if (current <= n) {
            result.push_back(current);
            int lastDigit = current % 10;

            if (lastDigit > 0) {
                q.push(current * 10 + (lastDigit - 1));
            }
            if (lastDigit < 9) {
                q.push(current * 10 + (lastDigit + 1));
            }
        }
    }
}