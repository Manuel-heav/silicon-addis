#include <iostream>

using namespace std;

void sayHi(){
    cout << "Hello";
}

void sayHello(string user){
    cout << "Hello " << user;
}

void sayHelloWithAge(string user, int age){
    cout << "Hello " << user << "You are " << age << " Years old";
}


int main() {
    cout << "Hello world!" << endl;
    cout << "Silicon Addis is awesome" << endl;

    // Data type
    // integer
    int num1 = 5;
    cout << num1;
    // char
    char grade = 'A'; // use single quotes for char
    cout << grade;
    // double
    double num2 = 5.6;
    cout << num2;
    // bool
    bool isFun = true;
    // string
    string channelName = "Silicon Addis";
    cout << channelName;
    cout << channelName[2];

    int age = 20;
    string name = "Abebe";

    // example of how we can use variables, explain why we need it
     /* cout << "Abebe is 20 years old" << endl;
    cout << "20 year old abebe is happy" << endl;
    cout << "Abebe won the lottery" << endl; */

     cout << name << " is " << age << " years old" << endl;
    cout << age << " year old " << name << " is happy" << endl;
    cout << name << " won the lottery" << endl;


    // basic math with c++
    int x = 5;
    int y = 6;
    cout << x + y;
    cout << x - y;
    cout << x / y;
    cout << x * y;
    cout << y % x;
    x++;
    cout << x;
    y--;
    cout << y;

    //Explain about comments here
    // Getting user input
    int age2;
    cout << "Enter your age: ";
    //cin >> age2; //good for characters and integers

    cout << "You are " << age2 << "Years old";
    // if you wanna get a line use getLine

    string fullName;
    cout << "Write your full name:" << endl;
    getline(cin, fullName);
    cout << "Hello "<<fullName;

    // Array, you can store only one value in variables, when u need multiple amounts of data
    int numList[] = {1,2,3,4,5,6};
    // you should add number of values in the square bracket
    int average[6] = {88,87,68,61,50,67};
    numList[3] = 67;
    cout << numList[3];



    // Functions, snippet of code, that can be reused
   // we're calling the functions
   // Void functions
    sayHi();
    sayHello("abebe");
    sayHelloWithAge("abebe", 39);
    sayHelloWithAge("Michael", 50);
    sayHelloWithAge("Scott", 56);
    
    
   return 0;
}

