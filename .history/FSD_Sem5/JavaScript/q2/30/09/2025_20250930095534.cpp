//write a cpp program to print armstrong number between two intervals

#include <iostream>
#include <cmath>
using namespace std;        
int main() {
    int lower, upper;
    cout << "Enter two numbers (intervals): ";
    cin >> lower >> upper;

    cout << "Armstrong numbers between " << lower << " and " << upper << " are: ";

    for (int num = lower; num <= upper; num++) {
        int sum = 0, temp, digits = 0;
        temp = num;

        // Count number of digits
        while (temp != 0) {
            digits++;
            temp /= 10;
        }

        temp = num;

        // Calculate sum of the power of digits
        while (temp != 0) {
            int digit = temp % 10;
            sum += pow(digit, digits);
            temp /= 10;
        }

        // Check if the number is an Armstrong number
        if (sum == num) {
            cout << num << " ";
        }
    }

    return 0;
}