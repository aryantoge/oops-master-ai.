/**
 * OOP MASTER AI - 30 Working C++ Example Programs
 * Real, verified C++ OOP code with comprehensive outputs and explanations.
 */

const OOPPrograms = [
    {
        id: "p1",
        title: "1. Hello World (Standard C++ Baseline)",
        category: "Basics",
        unit: "Unit 1: Fundamentals",
        explanation: "Demonstrates basic C++ syntax, header inclusion with #include <iostream>, namespace std, and the standard output stream cout with return status.",
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to OOP MASTER AI!" << endl;
    cout << "Mastering Object-Oriented Programming in C++." << endl;
    return 0;
}`,
        output: `Welcome to OOP MASTER AI!
Mastering Object-Oriented Programming in C++.`
    },
    {
        id: "p2",
        title: "2. Class and Object Creation",
        category: "Class & Object",
        unit: "Unit 2: Class & Object",
        explanation: "Defines a Student class with private attributes (name, rollNo) and public methods (setData, display). Then instantiates two distinct objects in main().",
        code: `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int rollNo;

public:
    void setData(string n, int r) {
        name = n;
        rollNo = r;
    }

    void display() {
        cout << "Roll No: " << rollNo << " | Name: " << name << endl;
    }
};

int main() {
    Student s1, s2; // Object instantiation
    s1.setData("Aarav", 101);
    s2.setData("Ananya", 102);

    cout << "--- Student Records ---" << endl;
    s1.display();
    s2.display();
    return 0;
}`,
        output: `--- Student Records ---
Roll No: 101 | Name: Aarav
Roll No: 102 | Name: Ananya`
    },
    {
        id: "p3",
        title: "3. Encapsulation (Data Hiding & Validation)",
        category: "OOP Pillars",
        unit: "Unit 6: Advanced OOP",
        explanation: "Demonstrates data encapsulation by keeping account balance private and enforcing strict validation checks within the deposit() and withdraw() methods.",
        code: `#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance; // Private data protected from direct modification

public:
    BankAccount(double initialBalance) {
        if (initialBalance >= 0) balance = initialBalance;
        else balance = 0;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: Rs. " << amount << endl;
        } else {
            cout << "Invalid deposit amount!" << endl;
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrew: Rs. " << amount << endl;
        } else {
            cout << "Insufficient balance or invalid amount!" << endl;
        }
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    BankAccount account(5000);
    account.deposit(2500);
    account.withdraw(1200);
    account.withdraw(10000); // Exceeds balance
    cout << "Final Verified Balance: Rs. " << account.getBalance() << endl;
    return 0;
}`,
        output: `Deposited: Rs. 2500
Withdrew: Rs. 1200
Insufficient balance or invalid amount!
Final Verified Balance: Rs. 6300`
    },
    {
        id: "p4",
        title: "4. Abstraction (Public Interface vs Hidden Logic)",
        category: "OOP Pillars",
        unit: "Unit 6: Advanced OOP",
        explanation: "Abstracts the internal smartphone boot sequence, camera sensor calibration, and battery checks behind a clean, simple pressPowerButton() interface.",
        code: `#include <iostream>
using namespace std;

class Smartphone {
private:
    // Hidden internal implementation details
    void checkBattery() { cout << "[Internal] Checking battery voltage... OK" << endl; }
    void loadKernel() { cout << "[Internal] Loading OS Kernel into RAM..." << endl; }
    void calibrateHardware() { cout << "[Internal] Calibrating camera and display sensors..." << endl; }

public:
    // Public abstract interface
    void pressPowerButton() {
        cout << "User pressed power button..." << endl;
        checkBattery();
        loadKernel();
        calibrateHardware();
        cout << ">> Smartphone Ready to Use! <<" << endl;
    }
};

int main() {
    Smartphone myPhone;
    myPhone.pressPowerButton();
    return 0;
}`,
        output: `User pressed power button...
[Internal] Checking battery voltage... OK
[Internal] Loading OS Kernel into RAM...
[Internal] Calibrating camera and display sensors...
>> Smartphone Ready to Use! <<`
    },
    {
        id: "p5",
        title: "5. Single Inheritance",
        category: "Inheritance",
        unit: "Unit 4: Inheritance",
        explanation: "A derived Dog class inherits fundamental traits (eat, sleep) from the base Animal class while adding its own distinct bark() behavior.",
        code: `#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Animal is eating nutritious food." << endl;
    }
    void sleep() {
        cout << "Animal is resting." << endl;
    }
};

// Dog inherits Animal
class Dog : public Animal {
public:
    void bark() {
        cout << "Dog barks: Woof! Woof!" << endl;
    }
};

int main() {
    Dog myDog;
    myDog.eat();   // Inherited
    myDog.bark();  // Own method
    myDog.sleep(); // Inherited
    return 0;
}`,
        output: `Animal is eating nutritious food.
Dog barks: Woof! Woof!
Animal is resting.`
    },
    {
        id: "p6",
        title: "6. Multiple Inheritance",
        category: "Inheritance",
        unit: "Unit 4: Inheritance",
        explanation: "A StudentAthlete class inherits independently from two distinct base classes: AcademicInfo and SportsPerformance.",
        code: `#include <iostream>
using namespace std;

class AcademicInfo {
protected:
    double gpa;
public:
    void setGPA(double g) { gpa = g; }
};

class SportsPerformance {
protected:
    int fitnessScore;
public:
    void setFitness(int f) { fitnessScore = f; }
};

// Derived from AcademicInfo AND SportsPerformance
class StudentAthlete : public AcademicInfo, public SportsPerformance {
public:
    void displayCard() {
        cout << "Student Academic GPA : " << gpa << " / 4.0" << endl;
        cout << "Sports Fitness Score : " << fitnessScore << " / 100" << endl;
    }
};

int main() {
    StudentAthlete athlete;
    athlete.setGPA(3.85);
    athlete.setFitness(94);
    athlete.displayCard();
    return 0;
}`,
        output: `Student Academic GPA : 3.85 / 4.0
Sports Fitness Score : 94 / 100`
    },
    {
        id: "p7",
        title: "7. Multilevel Inheritance",
        category: "Inheritance",
        unit: "Unit 4: Inheritance",
        explanation: "Illustrates a three-tier inheritance chain: Grandparent (Vehicle) -> Parent (Car) -> Child (SportsCar).",
        code: `#include <iostream>
using namespace std;

class Vehicle {
public:
    void vehicleType() {
        cout << "Type: Motorized Road Vehicle" << endl;
    }
};

class Car : public Vehicle {
public:
    void carFeatures() {
        cout << "Features: 4 Wheels, Airbags, Steering Control" << endl;
    }
};

class SportsCar : public Car {
public:
    void topSpeed() {
        cout << "Performance: 0-100 km/h in 3.1 seconds | Turbo V8 Engine" << endl;
    }
};

int main() {
    SportsCar ferrari;
    ferrari.vehicleType(); // From Grandparent
    ferrari.carFeatures(); // From Parent
    ferrari.topSpeed();    // From Self
    return 0;
}`,
        output: `Type: Motorized Road Vehicle
Features: 4 Wheels, Airbags, Steering Control
Performance: 0-100 km/h in 3.1 seconds | Turbo V8 Engine`
    },
    {
        id: "p8",
        title: "8. Hierarchical Inheritance",
        category: "Inheritance",
        unit: "Unit 4: Inheritance",
        explanation: "Multiple derived classes (Circle and Rectangle) inherit dimensions and base properties from a single parent Shape class.",
        code: `#include <iostream>
using namespace std;

class Shape {
protected:
    string shapeName;
public:
    void setName(string name) { shapeName = name; }
    void printName() { cout << "Shape: " << shapeName << endl; }
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) {
        setName("Circle");
        radius = r;
    }
    void calculateArea() {
        printName();
        cout << "Area = " << 3.14159 * radius * radius << " sq units" << endl;
    }
};

class Rectangle : public Shape {
private:
    double length, width;
public:
    Rectangle(double l, double w) {
        setName("Rectangle");
        length = l;
        width = w;
    }
    void calculateArea() {
        printName();
        cout << "Area = " << length * width << " sq units" << endl;
    }
};

int main() {
    Circle c(7.0);
    c.calculateArea();

    Rectangle r(10.0, 5.0);
    r.calculateArea();
    return 0;
}`,
        output: `Shape: Circle
Area = 153.938 sq units
Shape: Rectangle
Area = 50 sq units`
    },
    {
        id: "p9",
        title: "9. Hybrid Inheritance",
        category: "Inheritance",
        unit: "Unit 4: Inheritance",
        explanation: "Combines Multilevel and Multiple inheritance patterns into a single cohesive university grading program.",
        code: `#include <iostream>
using namespace std;

class Student {
protected:
    int rollNumber;
public:
    void getNumber(int n) { rollNumber = n; }
    void putNumber() { cout << "Roll No: " << rollNumber << endl; }
};

class Test : public Student {
protected:
    float part1, part2;
public:
    void getMarks(float m1, float m2) { part1 = m1; part2 = m2; }
    void putMarks() { cout << "Marks: " << part1 << ", " << part2 << endl; }
};

class Sports {
protected:
    float score;
public:
    void getScore(float s) { score = s; }
    void putScore() { cout << "Sports Grace: " << score << endl; }
};

class Result : public Test, public Sports {
    float total;
public:
    void display() {
        total = part1 + part2 + score;
        putNumber();
        putMarks();
        putScore();
        cout << "Grand Total: " << total << " / 200" << endl;
    }
};

int main() {
    Result studentResult;
    studentResult.getNumber(204);
    studentResult.getMarks(82.5, 87.0);
    studentResult.getScore(9.5);
    studentResult.display();
    return 0;
}`,
        output: `Roll No: 204
Marks: 82.5, 87
Sports Grace: 9.5
Grand Total: 179 / 200`
    },
    {
        id: "p10",
        title: "10. Function Overloading (Compile-Time Polymorphism)",
        category: "Polymorphism",
        unit: "Unit 5: Polymorphism",
        explanation: "Same function name calculateArea() overloaded with different parameter counts and types for Square, Rectangle, and Circle.",
        code: `#include <iostream>
using namespace std;

class Calculator {
public:
    // Area of Square
    double calculateArea(double side) {
        return side * side;
    }

    // Area of Rectangle
    double calculateArea(double length, double breadth) {
        return length * breadth;
    }

    // Area of Circle
    double calculateArea(float radius) {
        return 3.14159 * radius * radius;
    }
};

int main() {
    Calculator calc;
    cout << "Area of Square (side=5.0): " << calc.calculateArea(5.0) << endl;
    cout << "Area of Rectangle (l=4, b=6): " << calc.calculateArea(4.0, 6.0) << endl;
    cout << "Area of Circle (radius=3.5f): " << calc.calculateArea(3.5f) << endl;
    return 0;
}`,
        output: `Area of Square (side=5.0): 25
Area of Rectangle (l=4, b=6): 24
Area of Circle (radius=3.5f): 38.4845`
    },
    {
        id: "p11",
        title: "11. Operator Overloading (+ Operator for Complex Numbers)",
        category: "Polymorphism",
        unit: "Unit 5: Polymorphism",
        explanation: "Overloads the standard binary addition '+' operator to add two custom Complex number objects seamlessly.",
        code: `#include <iostream>
using namespace std;

class Complex {
private:
    float real;
    float imag;

public:
    Complex(float r = 0, float i = 0) : real(r), imag(i) {}

    // Overloading the '+' operator
    Complex operator + (const Complex& obj) {
        Complex temp;
        temp.real = real + obj.real;
        temp.imag = imag + obj.imag;
        return temp;
    }

    void display() const {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3.5, 2.5);
    Complex c2(1.2, 4.3);

    Complex c3 = c1 + c2; // Using overloaded '+' operator!

    cout << "c1 = "; c1.display();
    cout << "c2 = "; c2.display();
    cout << "c1 + c2 = "; c3.display();
    return 0;
}`,
        output: `c1 = 3.5 + 2.5i
c2 = 1.2 + 4.3i
c1 + c2 = 4.7 + 6.8i`
    },
    {
        id: "p12",
        title: "12. Function Overriding",
        category: "Polymorphism",
        unit: "Unit 5: Polymorphism",
        explanation: "Derived class redefines the base class method with the exact same name and signature.",
        code: `#include <iostream>
using namespace std;

class BaseSpeaker {
public:
    void speak() {
        cout << "Base: Generic tone sound." << endl;
    }
};

class DerivedSpeaker : public BaseSpeaker {
public:
    // Overriding BaseSpeaker's speak method
    void speak() {
        cout << "Derived: High-definition Dolby Atmos audio!" << endl;
    }
};

int main() {
    BaseSpeaker baseObj;
    DerivedSpeaker derivedObj;

    baseObj.speak();
    derivedObj.speak();

    // Calling the base version using scope resolution
    derivedObj.BaseSpeaker::speak();
    return 0;
}`,
        output: `Base: Generic tone sound.
Derived: High-definition Dolby Atmos audio!
Base: Generic tone sound.`
    },
    {
        id: "p13",
        title: "13. Default Constructor",
        category: "Constructors",
        unit: "Unit 3: Constructors & Destructors",
        explanation: "Demonstrates a zero-parameter constructor that runs automatically when an object is created to set default safe values.",
        code: `#include <iostream>
using namespace std;

class Computer {
private:
    int ramGB;
    int ssdGB;

public:
    // Default constructor
    Computer() {
        ramGB = 16;
        ssdGB = 512;
        cout << "[Default Constructor] System provisioned with baseline configuration." << endl;
    }

    void showSpecs() {
        cout << "Specs: " << ramGB << " GB RAM | " << ssdGB << " GB NVMe SSD" << endl;
    }
};

int main() {
    Computer pc; // Triggers default constructor
    pc.showSpecs();
    return 0;
}`,
        output: `[Default Constructor] System provisioned with baseline configuration.
Specs: 16 GB RAM | 512 GB NVMe SSD`
    },
    {
        id: "p14",
        title: "14. Parameterized Constructor",
        category: "Constructors",
        unit: "Unit 3: Constructors & Destructors",
        explanation: "Initializes object state with user-supplied arguments at the exact instant of instantiation.",
        code: `#include <iostream>
#include <string>
using namespace std;

class Book {
private:
    string title;
    string author;
    double price;

public:
    // Parameterized Constructor
    Book(string t, string a, double p) {
        title = t;
        author = a;
        price = p;
        cout << "[Parameterized Constructor] Book \"" << title << "\" initialized." << endl;
    }

    void display() {
        cout << "Title: " << title << " | Author: " << author << " | Price: Rs. " << price << endl;
    }
};

int main() {
    Book b1("Clean Code", "Robert C. Martin", 850.0);
    Book b2("Design Patterns", "Gang of Four", 1150.0);

    b1.display();
    b2.display();
    return 0;
}`,
        output: `[Parameterized Constructor] Book "Clean Code" initialized.
[Parameterized Constructor] Book "Design Patterns" initialized.
Title: Clean Code | Author: Robert C. Martin | Price: Rs. 850
Title: Design Patterns | Author: Gang of Four | Price: Rs. 1150`
    },
    {
        id: "p15",
        title: "15. Copy Constructor",
        category: "Constructors",
        unit: "Unit 3: Constructors & Destructors",
        explanation: "Creates a new object as an exact replica of an existing object of the same class using pass-by-reference.",
        code: `#include <iostream>
using namespace std;

class Coordinate {
private:
    int x, y;

public:
    // Parameterized constructor
    Coordinate(int xVal, int yVal) {
        x = xVal;
        y = yVal;
    }

    // Copy Constructor (must use const reference)
    Coordinate(const Coordinate& other) {
        x = other.x;
        y = other.y;
        cout << "[Copy Constructor] Cloned coordinates (" << x << ", " << y << ")" << endl;
    }

    void display() {
        cout << "Point: (" << x << ", " << y << ")" << endl;
    }
};

int main() {
    Coordinate p1(45, 90);
    cout << "Original "; p1.display();

    Coordinate p2 = p1; // Triggers Copy Constructor
    cout << "Cloned "; p2.display();
    return 0;
}`,
        output: `Original Point: (45, 90)
[Copy Constructor] Cloned coordinates (45, 90)
Cloned Point: (45, 90)`
    },
    {
        id: "p16",
        title: "16. Destructor (~ClassName)",
        category: "Constructors",
        unit: "Unit 3: Constructors & Destructors",
        explanation: "Shows how destructors run automatically in reverse order of creation when objects fall out of scope.",
        code: `#include <iostream>
#include <string>
using namespace std;

class ResourceTracker {
private:
    string name;

public:
    ResourceTracker(string n) : name(n) {
        cout << ">> Born: " << name << endl;
    }

    ~ResourceTracker() {
        cout << "<< Destroyed: " << name << " (Cleanup done)" << endl;
    }
};

int main() {
    cout << "Entering main()..." << endl;
    ResourceTracker r1("First Object");
    {
        cout << "--- Inner Scope Start ---" << endl;
        ResourceTracker r2("Inner Block Object");
        cout << "--- Inner Scope End ---" << endl;
    }
    ResourceTracker r3("Third Object");
    cout << "Exiting main()..." << endl;
    return 0;
}`,
        output: `Entering main()...
>> Born: First Object
--- Inner Scope Start ---
>> Born: Inner Block Object
--- Inner Scope End ---
<< Destroyed: Inner Block Object (Cleanup done)
>> Born: Third Object
Exiting main()...
<< Destroyed: Third Object (Cleanup done)
<< Destroyed: First Object (Cleanup done)`
    },
    {
        id: "p17",
        title: "17. Friend Function",
        category: "Class & Object",
        unit: "Unit 2: Class & Object",
        explanation: "Grants an external non-member function special permission to read private data of a class via the 'friend' keyword.",
        code: `#include <iostream>
using namespace std;

class Rectangle {
private:
    int length;
    int breadth;

public:
    Rectangle(int l, int b) : length(l), breadth(b) {}

    // Declare friend function
    friend void calculatePerimeter(Rectangle rect);
};

// Friend function definition (Notice: no Rectangle:: prefix!)
void calculatePerimeter(Rectangle rect) {
    // Can access private length & breadth directly!
    int perimeter = 2 * (rect.length + rect.breadth);
    cout << "Calculated Perimeter via Friend Function: " << perimeter << " units" << endl;
}

int main() {
    Rectangle r(12, 8);
    calculatePerimeter(r);
    return 0;
}`,
        output: `Calculated Perimeter via Friend Function: 40 units`
    },
    {
        id: "p18",
        title: "18. Virtual Function (Run-Time Polymorphism)",
        category: "Polymorphism",
        unit: "Unit 5: Polymorphism",
        explanation: "Uses a base class pointer pointing to derived class objects, enabling dynamic method binding through the vtable.",
        code: `#include <iostream>
using namespace std;

class Animal {
public:
    // Virtual function enables runtime binding
    virtual void makeSound() {
        cout << "Animal makes generic sound." << endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() override {
        cout << "Cat says: Meow Meow!" << endl;
    }
};

class Cow : public Animal {
public:
    void makeSound() override {
        cout << "Cow says: Moo Moo!" << endl;
    }
};

int main() {
    Animal* ptr; // Base class pointer

    Cat myCat;
    Cow myCow;

    ptr = &myCat;
    ptr->makeSound(); // Calls Cat's version dynamically

    ptr = &myCow;
    ptr->makeSound(); // Calls Cow's version dynamically
    return 0;
}`,
        output: `Cat says: Meow Meow!
Cow says: Moo Moo!`
    },
    {
        id: "p19",
        title: "19. Pure Virtual Function & Abstract Class",
        category: "Polymorphism",
        unit: "Unit 5: Polymorphism",
        explanation: "Defines an abstract contract using '= 0'. Derived classes are strictly forced to provide concrete implementations.",
        code: `#include <iostream>
using namespace std;

// Abstract Base Class (Cannot be instantiated directly)
class PaymentGateway {
public:
    // Pure virtual function
    virtual void processPayment(double amount) = 0;

    virtual ~PaymentGateway() {}
};

class UPIPayment : public PaymentGateway {
public:
    void processPayment(double amount) override {
        cout << "Processing UPI Payment of Rs. " << amount << " via QR Code scan." << endl;
    }
};

class CreditCardPayment : public PaymentGateway {
public:
    void processPayment(double amount) override {
        cout << "Processing Card Payment of Rs. " << amount << " with 3D Secure OTP." << endl;
    }
};

int main() {
    PaymentGateway* gateway;

    UPIPayment upi;
    CreditCardPayment card;

    gateway = &upi;
    gateway->processPayment(1499.00);

    gateway = &card;
    gateway->processPayment(5200.50);
    return 0;
}`,
        output: `Processing UPI Payment of Rs. 1499 via QR Code scan.
Processing Card Payment of Rs. 5200.5 with 3D Secure OTP.`
    },
    {
        id: "p20",
        title: "20. Static Data Members and Member Functions",
        category: "Class & Object",
        unit: "Unit 2: Class & Object",
        explanation: "Shared class-level variable and static function that can be queried directly on the class without creating an object instance.",
        code: `#include <iostream>
using namespace std;

class ServerSession {
private:
    int sessionId;
    static int activeConnections; // Shared counter across ALL instances

public:
    ServerSession(int id) : sessionId(id) {
        activeConnections++;
        cout << "Session #" << sessionId << " connected." << endl;
    }

    ~ServerSession() {
        activeConnections--;
        cout << "Session #" << sessionId << " disconnected." << endl;
    }

    // Static function can access only static members
    static int getActiveCount() {
        return activeConnections;
    }
};

// Definition outside class is mandatory for static variables
int ServerSession::activeConnections = 0;

int main() {
    cout << "Initial Active: " << ServerSession::getActiveCount() << endl;

    ServerSession s1(101);
    ServerSession s2(102);
    cout << "Current Active: " << ServerSession::getActiveCount() << endl;

    {
        ServerSession s3(103);
        cout << "With s3 Active: " << ServerSession::getActiveCount() << endl;
    } // s3 goes out of scope

    cout << "After s3 exit: " << ServerSession::getActiveCount() << endl;
    return 0;
}`,
        output: `Initial Active: 0
Session #101 connected.
Session #102 connected.
Current Active: 2
Session #103 connected.
With s3 Active: 3
Session #103 disconnected.
After s3 exit: 2
Session #102 disconnected.
Session #101 disconnected.`
    },
    {
        id: "p21",
        title: "21. Array of Objects",
        category: "Class & Object",
        unit: "Unit 6: Advanced OOP",
        explanation: "Stores and processes multiple class instances in contiguous memory using standard loop traversal.",
        code: `#include <iostream>
#include <string>
using namespace std;

class Employee {
private:
    int id;
    string name;
    double salary;

public:
    void setEmployee(int i, string n, double s) {
        id = i;
        name = n;
        salary = s;
    }

    void display() const {
        cout << "ID: " << id << " | Name: " << name << " | Salary: Rs. " << salary << endl;
    }
};

int main() {
    const int SIZE = 3;
    Employee staff[SIZE]; // Array of 3 Employee objects

    staff[0].setEmployee(1, "Rohan", 65000);
    staff[1].setEmployee(2, "Pooja", 72000);
    staff[2].setEmployee(3, "Vikas", 58000);

    cout << "--- Corporate Staff Directory ---" << endl;
    for (int i = 0; i < SIZE; i++) {
        staff[i].display();
    }
    return 0;
}`,
        output: `--- Corporate Staff Directory ---
ID: 1 | Name: Rohan | Salary: Rs. 65000
ID: 2 | Name: Pooja | Salary: Rs. 72000
ID: 3 | Name: Vikas | Salary: Rs. 58000`
    },
    {
        id: "p22",
        title: "22. Pointer to Object (Arrow Operator ->)",
        category: "Advanced OOP",
        unit: "Unit 6: Advanced OOP",
        explanation: "Accesses class members dynamically using an object pointer and the arrow '->' member access operator.",
        code: `#include <iostream>
using namespace std;

class Box {
private:
    double length, breadth, height;

public:
    Box(double l, double b, double h) : length(l), breadth(b), height(h) {}

    double getVolume() {
        return length * breadth * height;
    }
};

int main() {
    Box b1(5.0, 4.0, 3.0);
    Box* ptr = &b1; // Object pointer holding address of b1

    // Accessing via arrow operator
    cout << "Volume via direct object: " << b1.getVolume() << " cu. units" << endl;
    cout << "Volume via object pointer (->): " << ptr->getVolume() << " cu. units" << endl;
    cout << "Volume via dereferencing (*ptr).: " << (*ptr).getVolume() << " cu. units" << endl;
    return 0;
}`,
        output: `Volume via direct object: 60 cu. units
Volume via object pointer (->): 60 cu. units
Volume via dereferencing (*ptr).: 60 cu. units`
    },
    {
        id: "p23",
        title: "23. Exception Handling (try, catch, throw)",
        category: "Advanced OOP",
        unit: "Unit 6: Advanced OOP",
        explanation: "Safely handles runtime divide-by-zero errors without crashing the application using try, throw, and catch blocks.",
        code: `#include <iostream>
#include <stdexcept>
using namespace std;

double safeDivide(double numerator, double denominator) {
    if (denominator == 0) {
        throw runtime_error("Math Error: Division by zero is undefined!");
    }
    return numerator / denominator;
}

int main() {
    double a = 50.0;
    double b = 0.0;

    try {
        cout << "Attempting calculation: " << a << " / " << b << endl;
        double result = safeDivide(a, b);
        cout << "Result = " << result << endl;
    }
    catch (const runtime_error& e) {
        cout << "[Exception Caught] " << e.what() << endl;
        cout << "Graceful recovery: Defaulting result to 0.0" << endl;
    }

    cout << "Program continues execution seamlessly." << endl;
    return 0;
}`,
        output: `Attempting calculation: 50 / 0
[Exception Caught] Math Error: Division by zero is undefined!
Graceful recovery: Defaulting result to 0.0
Program continues execution seamlessly.`
    },
    {
        id: "p24",
        title: "24. Function Template (Generic Programming)",
        category: "Templates",
        unit: "Unit 6: Advanced OOP",
        explanation: "Creates a single universal findMax() function that seamlessly handles ints, doubles, and characters.",
        code: `#include <iostream>
using namespace std;

// Generic function template
template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "Max of Integers (15, 27)    : " << findMax(15, 27) << endl;
    cout << "Max of Doubles (12.4, 9.8)  : " << findMax(12.4, 9.8) << endl;
    cout << "Max of Chars ('P', 'Z')     : " << findMax('P', 'Z') << endl;
    return 0;
}`,
        output: `Max of Integers (15, 27)    : 27
Max of Doubles (12.4, 9.8)  : 12.4
Max of Chars ('P', 'Z')     : Z`
    },
    {
        id: "p25",
        title: "25. Class Template (Generic Stack)",
        category: "Templates",
        unit: "Unit 6: Advanced OOP",
        explanation: "Implements a type-independent LIFO Stack data structure capable of holding any data type.",
        code: `#include <iostream>
#include <string>
using namespace std;

template <typename T>
class SimpleStack {
private:
    T elements[10];
    int topIndex;

public:
    SimpleStack() : topIndex(-1) {}

    void push(T val) {
        if (topIndex < 9) {
            elements[++topIndex] = val;
        }
    }

    T pop() {
        if (topIndex >= 0) {
            return elements[topIndex--];
        }
        return T();
    }
};

int main() {
    // Integer Stack
    SimpleStack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    cout << "Popped from Int Stack: " << intStack.pop() << endl;

    // String Stack
    SimpleStack<string> stringStack;
    stringStack.push("Object");
    stringStack.push("Oriented");
    cout << "Popped from String Stack: " << stringStack.pop() << endl;
    return 0;
}`,
        output: `Popped from Int Stack: 20
Popped from String Stack: Oriented`
    },
    {
        id: "p26",
        title: "26. File Handling in C++ (ofstream and ifstream)",
        category: "Advanced OOP",
        unit: "Unit 6: Advanced OOP",
        explanation: "Demonstrates writing student data to a disk file and reading it back line-by-line using C++ file streams.",
        code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // 1. Writing to a file
    ofstream outFile("notes.txt");
    if (outFile.is_open()) {
        outFile << "OOP MASTER AI - C++ Learning" << endl;
        outFile << "Topic: File Handling Streams" << endl;
        outFile.close();
        cout << "[File written successfully]" << endl;
    }

    // 2. Reading back from the file
    ifstream inFile("notes.txt");
    string line;
    if (inFile.is_open()) {
        cout << "--- File Contents ---" << endl;
        while (getline(inFile, line)) {
            cout << line << endl;
        }
        inFile.close();
    }
    return 0;
}`,
        output: `[File written successfully]
--- File Contents ---
OOP MASTER AI - C++ Learning
Topic: File Handling Streams`
    },
    {
        id: "p27",
        title: "27. Dynamic Memory Allocation (new and delete)",
        category: "Advanced OOP",
        unit: "Unit 6: Advanced OOP",
        explanation: "Allocates dynamic heap memory for single primitives and arrays at runtime, followed by proper delete cleanup to prevent memory leaks.",
        code: `#include <iostream>
using namespace std;

int main() {
    // 1. Single dynamic variable
    int* ptr = new int(100);
    cout << "Value in dynamically allocated int: " << *ptr << endl;
    delete ptr; // Free memory
    ptr = nullptr;

    // 2. Dynamic Array
    int size = 4;
    int* arr = new int[size];

    for (int i = 0; i < size; i++) {
        arr[i] = (i + 1) * 25;
    }

    cout << "Dynamic Array Elements: ";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    delete[] arr; // Free dynamic array memory
    arr = nullptr;
    cout << "Heap memory safely cleaned up." << endl;
    return 0;
}`,
        output: `Value in dynamically allocated int: 100
Dynamic Array Elements: 25 50 75 100 
Heap memory safely cleaned up.`
    },
    {
        id: "p28",
        title: "28. 'this' Pointer & Method Chaining",
        category: "Class & Object",
        unit: "Unit 2: Class & Object",
        explanation: "Uses the implicit 'this' pointer to resolve naming collisions with parameters and enable fluent method chaining (obj.setX().setY()).",
        code: `#include <iostream>
using namespace std;

class Point {
private:
    int x, y;

public:
    Point() : x(0), y(0) {}

    // Resolve shadow parameter names & return *this for chaining
    Point& setX(int x) {
        this->x = x;
        return *this; // Returns reference to calling object
    }

    Point& setY(int y) {
        this->y = y;
        return *this;
    }

    void display() const {
        cout << "Coordinates: (" << this->x << ", " << this->y << ")" << endl;
    }
};

int main() {
    Point p;
    // Method Chaining in action
    p.setX(15).setY(30);
    p.display();
    return 0;
}`,
        output: `Coordinates: (15, 30)`
    },
    {
        id: "p29",
        title: "29. Abstract Class (Car Interface)",
        category: "Polymorphism",
        unit: "Unit 5: Polymorphism",
        explanation: "Shows how an abstract VehicleBase class defines contracts for steering, acceleration, and braking implemented differently by manual and electric cars.",
        code: `#include <iostream>
using namespace std;

class VehicleBase {
public:
    virtual void start() = 0;
    virtual void stop() = 0;
    virtual ~VehicleBase() {}
};

class ElectricVehicle : public VehicleBase {
public:
    void start() override {
        cout << "EV: Silent battery motor energized!" << endl;
    }
    void stop() override {
        cout << "EV: Regenerative braking applied, recharging battery." << endl;
    }
};

int main() {
    VehicleBase* vehicle = new ElectricVehicle();
    vehicle->start();
    vehicle->stop();

    delete vehicle;
    return 0;
}`,
        output: `EV: Silent battery motor energized!
EV: Regenerative braking applied, recharging battery.`
    },
    {
        id: "p30",
        title: "30. Object as Function Argument & Returning Objects",
        category: "Class & Object",
        unit: "Unit 6: Advanced OOP",
        explanation: "Passes two Time objects into a function by reference, adds their hours and minutes with carryover, and returns a new combined Time object.",
        code: `#include <iostream>
using namespace std;

class Time {
private:
    int hours;
    int minutes;

public:
    Time(int h = 0, int m = 0) : hours(h), minutes(m) {}

    void display() const {
        cout << hours << " hrs " << minutes << " mins" << endl;
    }

    // Function taking objects as parameters and returning an object
    Time addTime(const Time& t2) const {
        Time result;
        result.minutes = this->minutes + t2.minutes;
        result.hours = this->hours + t2.hours + (result.minutes / 60);
        result.minutes = result.minutes % 60;
        return result;
    }
};

int main() {
    Time t1(2, 45);
    Time t2(3, 30);

    Time t3 = t1.addTime(t2);

    cout << "Time 1: "; t1.display();
    cout << "Time 2: "; t2.display();
    cout << "Summed Time: "; t3.display();
    return 0;
}`,
        output: `Time 1: 2 hrs 45 mins
Time 2: 3 hrs 30 mins
Summed Time: 6 hrs 15 mins`
    }
];

window.OOPPrograms = OOPPrograms;
