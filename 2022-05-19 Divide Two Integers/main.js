/*
https://leetcode.com/problems/divide-two-integers/

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

Example 1:
  Input: dividend = 10, divisor = 3
  Output: 3
  Explanation: 10/3 = 3.33333.. which is truncated to 3.

Example 2:
  Input: dividend = 7, divisor = -3
  Output: -2
  Explanation: 7/-3 = -2.33333.. which is truncated to -2.
*/

var divide = function(dividend, divisor) {
    let result = 0, isNegative = false;
    
    // Account for -logO(n)
    if (dividend === -Math.pow(2, 31) && divisor === -1){
        return -(dividend+1);
    }
    
    // If the signs of both numbers are different, the result should be negative
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)){
        isNegative = true;
    }
    
    // Make both numbers positive to streamline our math and run a single loop
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    if (dividend === 0){
        return result;
    }
    else if (divisor === 1){
        result = dividend;
    }
    else{

        // Division calculation using subtraction, 
        while (dividend - divisor >= 0){
            dividend -= divisor;
            result++;
        }
    }    

    return isNegative ? -(result) : result;
};