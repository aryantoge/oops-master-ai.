/**
 * OOP MASTER AI - Complete OOP Knowledge Base
 * Covering Units 1 to 6, Exam Questions (2M, 5M, 10M), Difference Tables,
 * and Multi-lingual (English, Marathi, Hinglish) translations.
 */

const OOPKnowledge = {
    // UNIT 1: FUNDAMENTALS
    "intro_to_oop": {
        id: "intro_to_oop",
        unit: 1,
        title: "Introduction to OOP",
        keywords: ["introduction to oop", "intro oop", "oop basics", "oop concept", "what is oop", "object oriented programming intro"],
        marathiQuery: ["oop chi mahiti", "oop mhanje kay", "oop parichay", "oop marathi"],
        hinglishQuery: ["oop kya hai", "oop introduction batao", "oop basic samjhao"],
        definition: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which contain data in the form of fields (attributes) and code in the form of procedures (member functions).",
        explanation: "Before OOP, programs were designed using procedural languages (like C and Pascal) where programs were organized around action procedures and functions. However, as software systems expanded to millions of lines of code, procedural programming suffered from data vulnerability, poor code reuse, and difficult real-world mapping. In 1979, Bjarne Stroustrup invented C++ at Bell Labs ('C with Classes') to merge the high performance of C with object-oriented abstractions. OOP structures programs as networks of cooperating autonomous objects.",
        importantPoints: [
            "Programs are decomposed into autonomous entities called Objects.",
            "Data is treated as a critical element and is shielded from unintentional external mutation.",
            "Functions that operate on data are tightly bound together inside a Class.",
            "Models real-world scenarios naturally (e.g. BankAccount, Car, User, ShoppingCart).",
            "Promotes code reusability through Inheritance and modularity through Encapsulation."
        ],
        syntax: `class MyClass {
    // Data members (State)
    // Member functions (Behavior)
};`,
        code: `#include <iostream>
using namespace std;

class Student {
public:
    string name;
    int rollNo;

    void display() {
        cout << "Student: " << name << " | Roll No: " << rollNo << endl;
    }
};

int main() {
    Student s;
    s.name = "Rahul";
    s.rollNo = 101;
    s.display();
    return 0;
}`,
        output: `Student: Rahul | Roll No: 101`,
        realLifeExample: "Consider an automobile manufacturing plant. Rather than thinking about raw steel cutting and bolt turning sequentially, engineers design blueprints for Car components (Engine, Wheels, Transmission) as self-contained objects that communicate together.",
        diagram: "classAndObject",
        advantages: ["High modularity and maintainability", "Real-world modeling", "Code reusability reduces development time"],
        disadvantages: ["Steeper learning curve", "Slight runtime overhead due to abstraction layers"],
        relatedQuestions: [
            "Difference between POP and OOP",
            "What are the 4 main features of OOP?",
            "What is a Class and Object?"
        ],
        marathi: "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (OOP) ही एक प्रोग्रामिंग पद्धत (paradigm) आहे जी 'ऑब्जेक्ट्स' आणि 'क्लासेस' वर आधारित असते. यात डेटा आणि त्यावर कार्य करणारी फंक्शन्स एकाच युनिटमध्ये एकत्र बांधली जातात. यामुळे डेटा सुरक्षित राहतो आणि कोड पुन्हा वापरता येतो (Reusability). उदा. बँक खाते किंवा कारचे मॉडेल.",
        hinglish: "OOP ek aisi programming approach hai jo real-world entities (objects) par based hoti hai. Isme data aur functions ko ek class ke andar pack kiya jata hai, jisse data secure rehta hai aur code reusability badhti hai.",
        exam2M: "Object-Oriented Programming (OOP) is an approach that organizes software design around data or objects, rather than functions and logic. Main features: Class, Object, Encapsulation, Inheritance, and Polymorphism.",
        exam5M: "1. Definition: OOP is a programming model based on the concept of objects containing data (attributes) and methods (functions).\n2. Core Pillars:\n   - Encapsulation (Data binding)\n   - Abstraction (Hiding complexity)\n   - Inheritance (Code reuse)\n   - Polymorphism (Multiple forms)\n3. Advantages: Code reusability, enhanced security, simplified maintenance, natural real-world modeling.",
        exam10M: "1. Comprehensive Definition: OOP vs POP paradigm comparison.\n2. Fundamental Principles: Detailed writeup on Classes, Objects, Abstraction, Encapsulation, Inheritance, and Polymorphism.\n3. Complete C++ Code Demonstrating class, object, encapsulation and method invocation.\n4. Advantages and Limitations.\n5. Real-World Applications: GUI systems, Game engines, Database drivers, Embedded IoT."
    },

    "features_of_oop": {
        id: "features_of_oop",
        unit: 1,
        title: "Features / Principles of OOP",
        keywords: ["features of oop", "characteristics of oop", "pillars of oop", "4 pillars of oop", "principles of oop"],
        marathiQuery: ["oop che gunadharm", "oop che features sanga", "oop pillars marathi"],
        hinglishQuery: ["oop ke 4 pillars", "oop ke features kya hai", "oop characteristics"],
        definition: "The primary features of OOP are Class, Object, Encapsulation, Data Abstraction, Inheritance, Polymorphism, Dynamic Binding, and Message Passing.",
        explanation: "These foundational principles guide the architecture of all object-oriented systems: 1) Encapsulation shields internal states; 2) Abstraction simplifies system interaction; 3) Inheritance establishes taxonomic hierarchies; 4) Polymorphism provides dynamic runtime flexibility; 5) Message Passing enables loosely coupled object collaboration.",
        importantPoints: [
            "Encapsulation: Bundling data and methods, preventing external tampering.",
            "Abstraction: Exposing only the essential interface while concealing implementation details.",
            "Inheritance: Mechanism where a new class derives properties from an existing class.",
            "Polymorphism: Capability of an entity to exhibit multiple behaviors (compile-time & run-time).",
            "Message Passing: Objects communicate by invoking one another's public member functions."
        ],
        syntax: `// Encapsulation + Abstraction + Inheritance
class Base { /* ... */ };
class Derived : public Base { /* ... */ };`,
        code: `#include <iostream>
using namespace std;

// Base Abstract Class
class Shape {
public:
    virtual void draw() = 0; // Pure Virtual Function (Abstraction)
};

// Derived Class (Inheritance)
class Circle : public Shape {
public:
    void draw() override { // Polymorphism
        cout << "Drawing a Circle!" << endl;
    }
};

int main() {
    Shape* s = new Circle();
    s->draw();
    delete s;
    return 0;
}`,
        output: `Drawing a Circle!`,
        realLifeExample: "A modern smartphone embodies all pillars: Encapsulation (battery & chip hidden inside sealed case), Abstraction (touch screen UI hides hardware registers), Inheritance (iPhone 15 inherits from generic Smartphone spec), Polymorphism (the Volume Up button increases ringer, music, or alarm volume depending on current mode).",
        diagram: "polymorphism",
        advantages: ["Clean conceptual organization", "High maintainability", "Extensible architecture"],
        disadvantages: ["Requires upfront design investment"],
        relatedQuestions: [
            "What is Encapsulation?",
            "What is Abstraction?",
            "What is Polymorphism?"
        ],
        marathi: "OOP चे मुख्य ४ स्तंभ (Pillars): १) Encapsulation (डेटा सुरक्षित ठेवणे), २) Abstraction (अनावश्यक तपशील लपवणे), ३) Inheritance (कोडचा पुनर्वापर), ४) Polymorphism (एकाच गोष्टीचे अनेक रूप).",
        hinglish: "OOP ke 4 main pillars hote hain: Encapsulation (data aur methods ka bundle), Abstraction (details chupana, interface dikhana), Inheritance (parent se child me properties aana), aur Polymorphism (ek naam, alag alag kaam).",
        exam2M: "The four main features/pillars of OOP are:\n1. Encapsulation: Binding data & methods into a class.\n2. Abstraction: Hiding internal complexity.\n3. Inheritance: Reusability of code.\n4. Polymorphism: Ability to take more than one form.",
        exam5M: "Explain the Core Features of OOP:\n1. Encapsulation: Combines data and functions into one unit, restricting direct access via access specifiers.\n2. Abstraction: Represents essential features without background details.\n3. Inheritance: Deriving properties of an existing class into a new class (is-a relationship).\n4. Polymorphism: Enables one interface for multiple behaviors (overloading & overriding).\n5. Dynamic Binding & Message Passing: Dynamic resolution of method calls at runtime.",
        exam10M: "Full essay question with detailed sections for each of the 6 features, including UML diagrams, syntax, working C++ examples, and comparative advantages."
    },

    "pop_vs_oop": {
        id: "pop_vs_oop",
        unit: 1,
        title: "Difference between POP and OOP",
        keywords: ["pop vs oop", "difference between pop and oop", "pop oop difference", "procedural vs object oriented"],
        marathiQuery: ["pop ani oop madhla farak", "pop vs oop marathi"],
        hinglishQuery: ["pop aur oop me kya difference hai", "pop vs oop samjhao"],
        definition: "POP (Procedure Oriented Programming) organizes software around actions/procedures and global data, whereas OOP (Object Oriented Programming) organizes software around data and objects.",
        explanation: "In POP (like C, Pascal, FORTRAN), data moves freely around the system from function to function, making it vulnerable to accidental modification. In OOP (like C++, Java, Python), data is tied directly to objects and protected from external access.",
        importantPoints: [
            "Approach: POP uses Top-Down approach; OOP uses Bottom-Up approach.",
            "Focus: POP focuses on Algorithm/Procedure; OOP focuses on Data.",
            "Security: POP lacks access specifiers; OOP uses private, protected, public.",
            "Reusability: POP has no inheritance; OOP provides inheritance.",
            "Data Movement: POP data moves globally; OOP data communicates via member functions."
        ],
        syntax: `// POP: Separate function and global data
struct Data { int x; };
void processData(Data d);

// OOP: Data and methods bundled inside class
class Processor {
private:
    int x;
public:
    void process();
};`,
        code: `#include <iostream>
using namespace std;

// POP Style: Independent function
void popStyleArea(double r) {
    cout << "POP Area: " << 3.14159 * r * r << endl;
}

// OOP Style: Encapsulated class
class CircleOOP {
private:
    double radius;
public:
    CircleOOP(double r) : radius(r) {}
    void printArea() {
        cout << "OOP Area: " << 3.14159 * radius * radius << endl;
    }
};

int main() {
    popStyleArea(5.0); // POP call
    CircleOOP c(5.0);  // OOP Object
    c.printArea();
    return 0;
}`,
        output: `POP Area: 78.5397
OOP Area: 78.5397`,
        realLifeExample: "Cooking recipe vs Autonomous Kitchen Robot. POP is like a loose sheet of instructions where any cook can spill ingredients onto the counter. OOP is like an automated robot with sealed ingredient compartments that dispenses precise portions safely.",
        diagram: "classAndObject",
        advantages: ["OOP gives far superior security and scalability than POP"],
        disadvantages: ["OOP requires more planning than quick POP script writing"],
        relatedQuestions: [
            "What is Object Oriented Programming?",
            "What is Encapsulation?",
            "What are Access Specifiers?"
        ],
        marathi: "POP (उदा. C भाषा) मध्ये अल्गोरिदम आणि फंक्शन्सवर भर असतो, डेटा सर्वत्र फिरतो आणि असुरक्षित असतो. OOP (उदा. C++) मध्ये डेटाला जास्त महत्त्व असते, डेटा सुरक्षित असतो आणि ऑब्जेक्ट्सच्या स्वरूपात काम होते.",
        hinglish: "POP me focus functions aur procedures par hota hai, data globally move karta hai. OOP me focus data aur objects par hota hai, aur access specifiers ke through data secure rehta hai.",
        exam2M: "Key Differences:\n1. Approach: POP is Top-Down, OOP is Bottom-Up.\n2. Security: POP has no access specifiers; OOP has private, public, protected.\n3. Example: POP is C, OOP is C++.",
        exam5M: "Comparison Table between POP and OOP:\n| Parameter | Procedure Oriented (POP) | Object Oriented (OOP) |\n|---|---|---|\n| Approach | Top-Down | Bottom-Up |\n| Primary Focus | Functions & Algorithms | Data Security & Objects |\n| Access Specifiers | Not available | public, private, protected |\n| Code Reuse | Limited to functions | High via Inheritance |\n| Data Movement | Data moves freely globally | Data bound to member functions |\n| Examples | C, Pascal, BASIC | C++, Java, C# |",
        exam10M: "Comprehensive 10 Marks question including history of paradigms, full 8-point comparison table, C++ comparative code snippets, and modern software engineering implications."
    },

    "structure_of_cpp": {
        id: "structure_of_cpp",
        unit: 1,
        title: "Structure of a C++ Program",
        keywords: ["structure of cpp", "structure of c++ program", "cpp program structure", "c++ structure"],
        marathiQuery: ["c++ program chi rachana", "cpp structure marathi"],
        hinglishQuery: ["c++ program ka structure kya hota hai", "cpp structure explain karo"],
        definition: "The structure of a C++ program is the standard organizational hierarchy including Preprocessor Directives, Namespace Declaration, Class Declarations, Member Function Definitions, and the main() Entry Point.",
        explanation: "Every modern C++ application follows a well-defined sequence: Header files provide declarations for standard library tools; `using namespace std` avoids namespace pollution; classes encapsulate application blueprints; and execution strictly begins in `int main()`.",
        importantPoints: [
            "Include Section: #include <iostream> brings standard I/O library.",
            "Namespace: using namespace std; exposes cout, cin, endl without prefixing std::.",
            "Class Definition Section: Declares data members and member functions.",
            "main() Function: The compulsory execution entry point for every C++ executable.",
            "Return Statement: return 0 signals normal, successful termination to the operating system."
        ],
        syntax: `#include <iostream>
using namespace std;

class ClassName {
    // Members
};

int main() {
    // Code
    return 0;
}`,
        code: `#include <iostream>
using namespace std;

class Welcome {
public:
    void greet() {
        cout << "Structure of C++ program verified!" << endl;
    }
};

int main() {
    Welcome w;
    w.greet();
    return 0;
}`,
        output: `Structure of C++ program verified!`,
        realLifeExample: "A book structure: Title/Preface (Header files), Language definition (Namespace), Characters & Rules (Classes), and the actual Story timeline (main function).",
        diagram: "structureOfCpp",
        advantages: ["Clean compiler parsing", "Predictable execution lifecycle"],
        disadvantages: ["None; required by the C++ ISO standard"],
        relatedQuestions: [
            "What is Class and Object?",
            "What is #include <iostream>?",
            "Why is return 0 used in main()?"
        ],
        marathi: "C++ प्रोग्रामच्या संरचनेत: १) हेडर फाइल्स (#include <iostream>), २) नेमस्पेस (using namespace std), ३) क्लास व्याख्या, ४) main() फंक्शन (येथून प्रोग्राम सुरू होतो), ५) return 0 समाविष्ट असते.",
        hinglish: "C++ program ka basic structure 4 parts me hota hai: Preprocessor directives (#include), namespace, class definition, aur main() function jaha se execution start hoti hai.",
        exam2M: "A C++ program structure consists of:\n1. Documentation / Preprocessor Directives (#include)\n2. Namespace declaration (using namespace std)\n3. Class & Member Function definitions\n4. main() function entry point.",
        exam5M: "Explain the Standard Structure of C++ with code:\n1. Preprocessor Directives: Directives like #include <iostream>.\n2. Global Declarations & Namespaces: Avoid naming collisions.\n3. Class Definitions: Define blueprints.\n4. main() Function: Every C++ program must contain main(). Returns int exit code.\n5. Diagram & clean C++ demonstration.",
        exam10M: "Detailed walkthrough of compilation stages (Preprocessing, Compiling, Assembling, Linking) alongside program structure analysis."
    },

    // UNIT 2: CLASS AND OBJECT
    "what_is_class": {
        id: "what_is_class",
        unit: 2,
        title: "What is Class?",
        keywords: ["what is class", "class in c++", "class definition", "define class", "class syntax", "c++ class"],
        marathiQuery: ["class mhanje kay", "class chi mahiti marathi", "class sankalpana"],
        hinglishQuery: ["class kya hota hai", "class ki definition", "class explain karo"],
        definition: "A Class in C++ is a user-defined blueprint or prototype from which individual objects are created. It binds data members (variables) and member functions (methods) into a single cohesive type.",
        explanation: "A class does not allocate physical memory for its members upon declaration. It serves as an architectural blueprint specifying what variables an object will possess and what operations can be performed on those variables.",
        importantPoints: [
            "Keyword used: 'class' followed by the class identifier.",
            "Class body is enclosed in curly braces { } and terminated with a mandatory semicolon (;).",
            "Default access specifier in a class is 'private'.",
            "Occupies 0 bytes of RAM until instantiated into an object.",
            "Can contain constructors, destructors, data members, and member functions."
        ],
        syntax: `class ClassName {
    private:
        // Private data
    public:
        // Public methods
}; // Note the semicolon!`,
        code: `#include <iostream>
using namespace std;

class Car {
private:
    string brand;
    int speed;

public:
    void setCar(string b, int s) {
        brand = b;
        speed = s;
    }
    void show() {
        cout << "Car Brand: " << brand << " | Speed: " << speed << " km/h" << endl;
    }
};

int main() {
    Car c1; // Object of class Car
    c1.setCar("Honda", 180);
    c1.show();
    return 0;
}`,
        output: `Car Brand: Honda | Speed: 180 km/h`,
        realLifeExample: "An architect's blueprinted floor plan of an apartment. The paper blueprint is the Class; the actual physical apartments constructed from it are Objects.",
        diagram: "classAndObject",
        advantages: ["Enforces encapsulation", "Enables modular software design"],
        disadvantages: ["Slightly higher conceptual overhead than primitive types"],
        relatedQuestions: [
            "What is an Object?",
            "Difference between Class and Object",
            "What are Access Specifiers?"
        ],
        marathi: "क्लास (Class) म्हणजे ऑब्जेक्ट बनवण्यासाठी लागणारा एक ब्लूप्रिंट किंवा साचा (Template) आहे. यात डेटा मेंबर्स आणि फंक्शन्स एकत्र बांधलेले असतात. क्लास स्वतः मेमरी व्यापत नाही.",
        hinglish: "Class ek user-defined data type ya blueprint hota hai jisse objects banaye jaate hain. Ye data members aur member functions ka container hota hai.",
        exam2M: "A Class is a user-defined data type in C++ that holds its own data members and member functions, which can be accessed and used by creating an instance of that class. Example: class Student { ... };",
        exam5M: "1. Definition & Role of Class in OOP.\n2. General Syntax and structure.\n3. Components of Class: Data members (attributes) and Member functions (behaviors).\n4. Memory concept: Class declaration allocates 0 memory.\n5. C++ Code example with output.",
        exam10M: "Comprehensive theory of User Defined Data Types, Class Memory Layout, Inline member functions vs Outside definition (::), and access specifiers."
    },

    "what_is_object": {
        id: "what_is_object",
        unit: 2,
        title: "What is Object?",
        keywords: ["what is object", "object in c++", "object definition", "define object", "object creation", "instance of class"],
        marathiQuery: ["object mhanje kay", "object sankalpana", "object marathi"],
        hinglishQuery: ["object kya hai", "object kaise banate hain", "object definition"],
        definition: "An Object is a real-world identifiable entity and an instance of a Class. It possesses state (data), behavior (functions), and identity, and allocates actual physical memory in RAM.",
        explanation: "When a class is declared, no memory is allocated. Memory is reserved only when an object of that class is instantiated. Each object gets its own private copy of the class's non-static data members, while member functions are shared in code memory.",
        importantPoints: [
            "Object is a runtime entity.",
            "Allocates memory dynamically or on stack when instantiated.",
            "Can access public members via the dot (.) operator: object.member.",
            "Multiple objects of the same class maintain independent data values.",
            "Size of an empty class object in C++ is 1 byte (to ensure unique memory address)."
        ],
        syntax: `ClassName objectName; // Static stack allocation
ClassName* ptr = new ClassName(); // Dynamic heap allocation`,
        code: `#include <iostream>
using namespace std;

class Laptop {
public:
    string model;
    int ram;

    void display() {
        cout << "Model: " << model << " | RAM: " << ram << "GB" << endl;
    }
};

int main() {
    // Creating two distinct objects
    Laptop l1, l2;

    l1.model = "Dell XPS";
    l1.ram = 16;

    l2.model = "MacBook Pro";
    l2.ram = 32;

    l1.display();
    l2.display();
    return 0;
}`,
        output: `Model: Dell XPS | RAM: 16GB
Model: MacBook Pro | RAM: 32GB`,
        realLifeExample: "If 'Human' is a Class, then individual people ('Sachin', 'Elon') are Objects. Each has the same attributes (height, age, name), but with distinct values.",
        diagram: "classAndObject",
        advantages: ["Provides independent state management", "Enables direct real-world entity mapping"],
        disadvantages: ["Creating thousands of unnecessary objects can increase memory footprint"],
        relatedQuestions: [
            "Difference between Class and Object",
            "What is Class?",
            "What are Static Data Members?"
        ],
        marathi: "ऑब्जेक्ट (Object) म्हणजे क्लासचे प्रत्यक्ष अस्तित्त्वात असलेले रूप (Instance) होय. जेव्हा ऑब्जेक्ट तयार होतो, तेव्हाच कॉम्प्युटरच्या मेमरीमध्ये (RAM) जागा मिळते. प्रत्येक ऑब्जेक्टचा स्वतःचा स्वतंत्र डेटा असतो.",
        hinglish: "Object ek class ka real-world instance hota hai. Jab object banta hai tab RAM me memory allocate hoti hai. Iske paas state (data) aur behavior (methods) hota hai.",
        exam2M: "An Object is an identifiable entity with state, behavior, and identity. It is an instance of a class that occupies memory in RAM. Syntax: ClassName obj;",
        exam5M: "1. Definition: Object as an instance of a class.\n2. Memory Allocation: Explaining Stack vs Heap allocation.\n3. Accessing Members: Using the dot (.) operator for values and arrow (->) for pointers.\n4. Size of an Object: sizeof(obj) explained.\n5. C++ Code demonstration with two distinct objects and output.",
        exam10M: "Detailed analysis of Object Lifecycle: Instantiation, Constructor firing, Memory Layout in Stack/Heap, Method invocation via vtable, and Destructor cleanup."
    },

    "diff_class_and_object": {
        id: "diff_class_and_object",
        unit: 2,
        title: "Difference between Class and Object",
        keywords: ["difference between class and object", "class vs object", "class and object difference", "compare class and object"],
        marathiQuery: ["class ani object madhla farak", "class vs object marathi"],
        hinglishQuery: ["class aur object me kya antar hai", "class vs object difference"],
        definition: "A Class is a conceptual blueprint or data type, whereas an Object is a physical, memory-occupying instance created from that class blueprint.",
        explanation: "The distinction between Class and Object is fundamental to OOP. You can define a Class once, and then instantiate unlimited independent Objects from it.",
        importantPoints: [
            "Memory: Class occupies 0 bytes; Object occupies physical memory in RAM.",
            "Nature: Class is logical/conceptual; Object is real and physical.",
            "Declaration: Declared with 'class' keyword; Object created like a variable.",
            "Frequency: A class is declared once; Objects can be created multiple times."
        ],
        syntax: `class Box { /* Class */ };
Box b1, b2; // Objects`,
        code: `#include <iostream>
using namespace std;

class Pen {
public:
    string color;
    void write() { cout << "Writing with " << color << " ink!" << endl; }
};

int main() {
    Pen p1, p2; // Instantiating two objects from one class
    p1.color = "Blue";
    p2.color = "Red";

    p1.write();
    p2.write();
    return 0;
}`,
        output: `Writing with Blue ink!
Writing with Red ink!`,
        realLifeExample: "Class: Factory mould for a plastic chair. Object: The physical plastic chairs produced by that mould you sit on.",
        diagram: "classAndObject",
        advantages: ["High code reuse and structure"],
        disadvantages: ["None"],
        relatedQuestions: [
            "What is Class?",
            "What is Object?",
            "What is Constructor?"
        ],
        marathi: "क्लास म्हणजे साचा (Blueprint) ज्याला मेमरी नसते. ऑब्जेक्ट म्हणजे प्रत्यक्ष वस्तू (Instance) जी रॅममध्ये मेमरी व्यापते.",
        hinglish: "Class ek blueprint/template hai jisme memory nahi lagti, jabki Object ek real instance hai jo RAM me space leta hai.",
        exam2M: "1. Class is a logical template; Object is a physical instance.\n2. Class allocates 0 memory; Object allocates memory in RAM.\n3. Example: 'class Car' vs 'Car tesla;'.",
        exam5M: "Comparison Table between Class and Object:\n| Feature | Class | Object |\n|---|---|---|\n| Definition | Blueprint / Template | Instance of Class |\n| Memory | 0 bytes on declaration | Allocates RAM when created |\n| Nature | Logical construct | Physical entity |\n| Keyword | 'class' keyword | Defined as variable of class type |\n| Multiplicity | Declared only once | Can create any number of instances |",
        exam10M: "Comprehensive university answer with architectural diagrams, memory map showing Stack/Heap allocations, C++ code, and explanation."
    },

    "access_specifiers": {
        id: "access_specifiers",
        unit: 2,
        title: "Access Specifiers (Public, Private, Protected)",
        keywords: ["access specifiers", "public private protected", "data hiding", "visibility modes", "private public protected"],
        marathiQuery: ["access specifiers marathi", "public private protected marathi"],
        hinglishQuery: ["access specifiers kya hote hain", "public private protected samjhao"],
        definition: "Access specifiers in C++ define the scope and visibility of class members (data members and member functions) to code outside the class.",
        explanation: "C++ provides three primary access specifiers: 1) private: Members are accessible only from within the class itself; 2) protected: Members are accessible within the class and its derived (child) classes; 3) public: Members are accessible from anywhere in the program.",
        importantPoints: [
            "Default access specifier in a C++ class is private.",
            "private: Maximum protection, accessible only inside the class and by friend functions.",
            "protected: Essential for inheritance hierarchies; hidden from main(), visible to subclasses.",
            "public: Forms the public interface accessible via the dot (.) operator.",
            "Access specifiers are specified followed by a colon (e.g. public:, private:)."
        ],
        syntax: `class Sample {
    private:
        int secretCode; // Only inside Sample
    protected:
        int familyCode; // Inside Sample and derived classes
    public:
        int openCode;   // Accessible everywhere
};`,
        code: `#include <iostream>
using namespace std;

class Base {
private:
    int priv = 10;
protected:
    int prot = 20;
public:
    int pub = 30;

    void showPrivate() {
        cout << "Private access within class: " << priv << endl;
    }
};

class Derived : public Base {
public:
    void showProtected() {
        cout << "Protected access inside child class: " << prot << endl;
    }
};

int main() {
    Base b;
    b.showPrivate();
    cout << "Public access in main: " << b.pub << endl;

    Derived d;
    d.showProtected();
    // d.priv -> ERROR: Cannot access private
    return 0;
}`,
        output: `Private access within class: 10
Public access in main: 30
Protected access inside child class: 20`,
        realLifeExample: "House security: Private = Your personal diary locked in your drawer. Protected = Family television accessible to parents and children only. Public = The doorbell on the outside porch anyone can ring.",
        diagram: "accessSpecifiers",
        advantages: ["Implements robust data hiding and encapsulation", "Prevents accidental corruption of data"],
        disadvantages: ["Improper usage may require excess getter/setter boilerplate"],
        relatedQuestions: [
            "What is Encapsulation?",
            "What is Single Inheritance?",
            "What is Friend Function?"
        ],
        marathi: "C++ मध्ये ३ ॲक्सेस स्पेसिफायर्स असतात: १) private (फक्त त्याच क्लासमध्ये वापरता येतो), २) protected (त्या क्लासमध्ये आणि त्यापासून तयार झालेल्या चाइल्ड क्लासमध्ये वापरता येतो), ३) public (कुठूनही वापरता येतो).",
        hinglish: "Access specifiers batate hain ki class ke data ko kaun access kar sakta hai: private (sirf same class), protected (same class + child classes), public (kahi se bhi accessible).",
        exam2M: "Access Specifiers in C++ define visibility:\n1. private: Accessible only within the class.\n2. protected: Accessible within class & derived classes.\n3. public: Accessible everywhere.",
        exam5M: "1. Definition and purpose of Access Specifiers.\n2. Detailed breakdown of Public, Private, and Protected.\n3. Visibility matrix table comparing Same Class, Derived Class, and Outside Class.\n4. C++ Code demonstrating access rules and compiler error prevention.",
        exam10M: "Deep dive on Access Specifiers during Inheritance (Public, Protected, Private inheritance visibility transformations) with truth table and diagrams."
    },

    "friend_function": {
        id: "friend_function",
        unit: 2,
        title: "Friend Function",
        keywords: ["friend function", "friend keyword", "c++ friend function", "friend function in c++"],
        marathiQuery: ["friend function marathi", "friend function mhanje kay"],
        hinglishQuery: ["friend function kya hota hai", "friend function samjhao"],
        definition: "A Friend Function is a non-member function of a class that is granted special permission to access its private and protected members using the 'friend' keyword declaration inside the class.",
        explanation: "Even though encapsulation strictly guards private members, there are practical cases where external functions or classes need access to internal states without being member functions (e.g., operator overloading for streams like `<<` and `>>`, or operations bridging two distinct classes). A friend function is declared inside the class with the `friend` prefix, but defined outside without any class scope resolution `ClassName::`.",
        importantPoints: [
            "Friendship is NOT mutual: If A is a friend of B, B is NOT automatically a friend of A.",
            "Friendship is NOT inherited: Derived classes do not automatically inherit friendship.",
            "Not a member function: It is invoked without an object (e.g. `func(obj);`, not `obj.func();`).",
            "Can be declared under private, protected, or public sections without difference.",
            "Crucial for overloading stream insertion (`<<`) and extraction (`>>`) operators."
        ],
        syntax: `class Box {
private:
    int width;
public:
    friend void printWidth(Box b); // Declaration
};

void printWidth(Box b) {
    cout << b.width; // Allowed!
}`,
        code: `#include <iostream>
using namespace std;

class Distance {
private:
    int meters;

public:
    Distance() : meters(0) {}
    void setDistance(int m) { meters = m; }

    // Declare friend function
    friend int addBonusDistance(Distance d);
};

// Friend function definition
int addBonusDistance(Distance d) {
    // Accessing private member 'meters' directly
    return d.meters + 50;
}

int main() {
    Distance dist;
    dist.setDistance(100);
    cout << "Distance after bonus: " << addBonusDistance(dist) << " meters" << endl;
    return 0;
}`,
        output: `Distance after bonus: 150 meters`,
        realLifeExample: "A Bank Auditor. The auditor is not an employee of the branch (not a member function), but has official clearance (friend access) to inspect private financial ledgers.",
        diagram: "encapsulation",
        advantages: ["Allows flexible inter-class operations", "Enables stream operator overloading"],
        disadvantages: ["Violates pure data encapsulation if overused"],
        relatedQuestions: [
            "What is Operator Overloading?",
            "What is Encapsulation?",
            "What are Access Specifiers?"
        ],
        marathi: "फ्रेंड फंक्शन (Friend Function) हे क्लासचे सदस्य नसतानाही त्या क्लासच्या खाजगी (private) आणि सुरक्षित (protected) डेटाला थेट ॲक्सेस करू शकते. यासाठी क्लासमध्ये 'friend' कीवर्ड वापरला जातो.",
        hinglish: "Friend function ek aisa non-member function hota hai jise class ke private aur protected members ko access karne ki special permission milti hai using 'friend' keyword.",
        exam2M: "A friend function is a function that is not a member of a class but has access to its private and protected members. Declared using 'friend' keyword.",
        exam5M: "1. Definition & Syntax of Friend Function.\n2. Characteristics of Friend Function (not in class scope, invoked like normal function, friendship not transitive or inherited).\n3. Working C++ Code example with private data access.\n4. When to use: Stream operator overloading and bridging two classes.",
        exam10M: "Comprehensive guide to Friend Functions & Friend Classes with dual-class bridge example, operator overloading applications, and encapsulation trade-offs."
    },

    "this_pointer": {
        id: "this_pointer",
        unit: 2,
        title: "'this' Pointer",
        keywords: ["this pointer", "this in c++", "what is this pointer", "this keyword"],
        marathiQuery: ["this pointer marathi", "this pointer mhanje kay"],
        hinglishQuery: ["this pointer kya hai", "this pointer explain karo"],
        definition: "'this' is an implicit, constant pointer available inside all non-static member functions that points to the calling object whose function is being executed.",
        explanation: "When a member function is invoked for an object (e.g., `obj.display()`), the compiler secretly passes the address of `obj` as the first hidden parameter to the function as `ClassName* const this`. Inside the function, `this->member` refers to the invoking object's variable.",
        importantPoints: [
            "Implicitly passed to all non-static member functions.",
            "Static member functions DO NOT have a 'this' pointer.",
            "Used to resolve parameter name collisions where parameter names match data member names.",
            "Used to return the calling object by reference (return *this) enabling Method Chaining.",
            "Type of 'this' in a class Car is 'Car* const'."
        ],
        syntax: `void setValues(int x) {
    this->x = x; // Differentiates data member from parameter
}`,
        code: `#include <iostream>
using namespace std;

class Coordinate {
private:
    int x, y;
public:
    Coordinate& setX(int x) {
        this->x = x; // Resolving shadow collision
        return *this; // Returning reference for chaining
    }
    Coordinate& setY(int y) {
        this->y = y;
        return *this;
    }
    void print() {
        cout << "Coordinates: (" << this->x << ", " << this->y << ")" << endl;
    }
};

int main() {
    Coordinate c;
    c.setX(10).setY(20); // Method Chaining!
    c.print();
    return 0;
}`,
        output: `Coordinates: (10, 20)`,
        realLifeExample: "Using the word 'I' or 'My' when talking about yourself. If someone asks 'What is your name?', you answer 'My name is...', where 'My' identifies the specific speaking person.",
        diagram: "classAndObject",
        advantages: ["Resolves parameter shadows cleanly", "Enables fluent method cascading/chaining"],
        disadvantages: ["Cannot be used inside static member functions"],
        relatedQuestions: [
            "What are Static Member Functions?",
            "What is a Member Function?",
            "What is Class and Object?"
        ],
        marathi: "'this' पॉइंटर हा C++ मधील नॉन-स्टॅटिक मेंबर फंक्शन्समध्ये उपलब्ध असलेला एक सुप्त (implicit) पॉइंटर असतो जो सध्या काम करत असलेल्या ऑब्जेक्टचा मेमरी ॲड्रेस दर्शवतो.",
        hinglish: "'this' pointer ek implicit pointer hota hai jo current calling object ke memory address ko point karta hai. Iska use variable shadowing solve karne aur method chaining ke liye hota hai.",
        exam2M: "'this' is an implicit pointer available in all non-static member functions pointing to the object that invoked the function. Syntax: this->var = var;",
        exam5M: "1. Definition & Internal mechanics of 'this' pointer.\n2. Three Primary Applications:\n   a. Resolving local variable name collisions (this->x = x).\n   b. Returning reference to the calling object (return *this).\n   c. Verifying self-assignment (if (this == &rhs)).\n3. C++ Method chaining code example with output.",
        exam10M: "Complete compiler perspective on 'this' pointer, including name mangling, hidden argument passing convention, constant member function variation (const Class* const this), and memory implications."
    },

    // UNIT 3: CONSTRUCTORS AND DESTRUCTORS
    "what_is_constructor": {
        id: "what_is_constructor",
        unit: 3,
        title: "What is Constructor?",
        keywords: ["what is constructor", "constructor in c++", "constructor definition", "define constructor", "types of constructor", "constructor 5 marks", "answer for constructor", "constructor"],
        marathiQuery: ["constructor mhanje kay", "constructor chi mahiti", "constructor marathi"],
        hinglishQuery: ["constructor kya hota hai", "constructor explain karo", "constructor definition", "constructor kya hai"],
        definition: "A Constructor is a special member function of a class having the exact same name as the class, which is invoked automatically whenever an object of that class is created to initialize its state.",
        explanation: "In C++, uninitialized variables hold unpredictable garbage values. A constructor guarantees that an object enters memory in a safe, fully initialized state. It does not have any return type (not even void) and cannot be called directly like normal methods.",
        importantPoints: [
            "Same name as the Class.",
            "Executed automatically upon object instantiation.",
            "Has NO return type (not even void).",
            "Must usually be declared in the public section so objects can be created freely.",
            "Can be overloaded (Default, Parameterized, Copy).",
            "Cannot be declared virtual or static."
        ],
        syntax: `class MyClass {
public:
    MyClass() { // Constructor
        // Initialization code
    }
};`,
        code: `#include <iostream>
using namespace std;

class Device {
public:
    int id;
    Device() {
        id = 1001;
        cout << "Constructor called: Device #" << id << " initialized!" << endl;
    }
};

int main() {
    Device d1; // Constructor runs automatically here!
    return 0;
}`,
        output: `Constructor called: Device #1001 initialized!`,
        realLifeExample: "When a new baby is born, it automatically gets a birth certificate, registration number, and medical record created at that exact moment.",
        diagram: "constructorDestructor",
        advantages: ["Eliminates uninitialized garbage bugs", "Automates resource allocation"],
        disadvantages: ["Constructors cannot return error values directly; must use exceptions"],
        relatedQuestions: [
            "What is Destructor?",
            "Constructor vs Destructor",
            "What is Parameterized Constructor?"
        ],
        marathi: "कन्स्ट्रक्टर (Constructor) हे क्लासच्याच नावाचे एक विशेष मेंबर फंक्शन असते, जे जेव्हा ऑब्जेक्ट तयार होतो तेव्हा आपोआप (automatically) कॉल होते आणि ऑब्जेक्टला सुरुवातीची मूल्ये (initialize) देते. याला कोणताही रिटर्न टाईप नसतो.",
        hinglish: "Constructor ek special member function hai jiska naam class ke naam jaisa hota hai. Ye tab automatically call hota hai jab class ka object create hota hai. Iska koi return type nahi hota.",
        exam2M: "A Constructor is a special member function with the same name as the class that initializes objects automatically upon creation. It has no return type.",
        exam5M: "1. Definition & Core Characteristics of Constructor.\n2. Three Types of Constructors:\n   - Default Constructor (no arguments)\n   - Parameterized Constructor (takes arguments)\n   - Copy Constructor (ClassName(const ClassName&))\n3. Constructor Overloading demonstration.\n4. Complete working C++ program with output.",
        exam10M: "Extensive 10 Marks answer discussing Constructor types, Member Initialization Lists, Default copy semantics vs Deep copy, Explicit constructors, and lifecycle diagrams."
    },

    "what_is_destructor": {
        id: "what_is_destructor",
        unit: 3,
        title: "What is Destructor?",
        keywords: ["what is destructor", "destructor in c++", "destructor definition", "define destructor", "~classname"],
        marathiQuery: ["destructor mhanje kay", "destructor marathi"],
        hinglishQuery: ["destructor kya hota hai", "destructor explain karo"],
        definition: "A Destructor is a special member function of a class preceded by a tilde symbol (~), which is invoked automatically when an object goes out of scope or is deleted, releasing resources and freeing memory.",
        explanation: "Whenever an object's lifetime ends (such as exiting a function block, or invoking `delete ptr`), the destructor runs automatically. Its primary purpose is to release dynamically allocated heap memory, close open disk files, flush network sockets, and unlock system mutexes.",
        importantPoints: [
            "Exact same name as the class, prefixed with a tilde (~).",
            "Executed automatically upon object destruction.",
            "Takes NO parameters and has NO return type.",
            "Cannot be overloaded (only ONE destructor per class).",
            "Executed in reverse order of constructor invocation (LIFO).",
            "CAN and SHOULD be declared virtual in base classes."
        ],
        syntax: `class MyClass {
public:
    ~MyClass() { // Destructor
        // Cleanup code
    }
};`,
        code: `#include <iostream>
using namespace std;

class DatabaseConnection {
public:
    DatabaseConnection() {
        cout << ">> DB Connection Opened." << endl;
    }
    ~DatabaseConnection() {
        cout << "<< DB Connection Safely Closed." << endl;
    }
};

int main() {
    cout << "Entering block..." << endl;
    {
        DatabaseConnection conn; // Constructor runs
    } // conn goes out of scope here -> Destructor runs!
    cout << "Exited block." << endl;
    return 0;
}`,
        output: `Entering block...
>> DB Connection Opened.
<< DB Connection Safely Closed.
Exited block.`,
        realLifeExample: "Checking out of a hotel room. When you leave, the hotel clerk cancels your keycard, cleans the room, and releases the deposit.",
        diagram: "constructorDestructor",
        advantages: ["Prevents memory leaks", "Automates deterministic cleanup (RAII pattern)"],
        disadvantages: ["Throwing exceptions inside a destructor can terminate the application"],
        relatedQuestions: [
            "Constructor vs Destructor",
            "What is Virtual Destructor?",
            "What is Constructor?"
        ],
        marathi: "डिस्ट्रक्टर (Destructor) हे क्लासच्या नावापुढे टिल्ड चिन्ह (~) लावून तयार केलेले विशेष फंक्शन असते. जेव्हा ऑब्जेक्टचे काम संपते किंवा तो मेमरीतून नष्ट होतो, तेव्हा मेमरी रिकामी करण्यासाठी डिस्ट्रक्टर आपोआप कॉल होतो.",
        hinglish: "Destructor ek special member function hai jiske aage tilde (~) sign hota hai. Jab object ka scope khatam hota hai, ye automatically call hokar allocated memory aur resources ko free karta hai.",
        exam2M: "A Destructor is a special member function prefixed with a tilde (~) that de-allocates resources and destroys an object when it goes out of scope. Takes no arguments.",
        exam5M: "1. Definition & Syntax (~ClassName).\n2. Key characteristics: Takes no arguments, cannot be overloaded, called in LIFO order.\n3. Difference between Constructor and Destructor.\n4. C++ Code showing creation order and reverse destruction order.\n5. Virtual destructor concept in base classes.",
        exam10M: "Complete guide covering RAII (Resource Acquisition Is Initialization), Virtual Destructors to prevent memory leaks in polymorphism, stack vs heap object destruction, and code examples."
    },

    "constructor_vs_destructor": {
        id: "constructor_vs_destructor",
        unit: 3,
        title: "Constructor vs Destructor",
        keywords: ["constructor vs destructor", "difference between constructor and destructor", "compare constructor and destructor"],
        marathiQuery: ["constructor ani destructor farak", "constructor vs destructor marathi"],
        hinglishQuery: ["constructor aur destructor me kya antar hai", "constructor vs destructor difference"],
        definition: "A Constructor initializes an object when it is created in memory, whereas a Destructor cleans up and deallocates resources when an object is destroyed.",
        explanation: "Constructor and Destructor form the bookends of an object's lifecycle in C++. The constructor allocates and sets up the object, while the destructor tears it down.",
        importantPoints: [
            "Invocation: Constructor runs on birth; Destructor runs on termination.",
            "Overloading: Constructors can be overloaded; Destructors CANNOT be overloaded.",
            "Parameters: Constructors accept arguments; Destructors accept zero arguments.",
            "Syntax: Constructor is ClassName(); Destructor is ~ClassName().",
            "Execution order: Constructors execute in order of creation; Destructors execute in reverse (LIFO)."
        ],
        syntax: `class Demo {
public:
    Demo();  // Constructor
    ~Demo(); // Destructor
};`,
        code: `#include <iostream>
using namespace std;

class Lifecycle {
public:
    int id;
    Lifecycle(int i) : id(i) {
        cout << "Object " << id << " Born!" << endl;
    }
    ~Lifecycle() {
        cout << "Object " << id << " Destroyed!" << endl;
    }
};

int main() {
    Lifecycle o1(1);
    Lifecycle o2(2);
    return 0;
}`,
        output: `Object 1 Born!
Object 2 Born!
Object 2 Destroyed!
Object 1 Destroyed!`,
        realLifeExample: "Constructor = Building construction and setting up furniture. Destructor = Demolishing the building and recycling the materials.",
        diagram: "constructorDestructor",
        advantages: ["Guarantees strict lifecycle management"],
        disadvantages: ["None"],
        relatedQuestions: [
            "What is Constructor?",
            "What is Destructor?",
            "What is Copy Constructor?"
        ],
        marathi: "कन्स्ट्रक्टर ऑब्जेक्ट तयार करताना मेमरी सुरू करतो, तर डिस्ट्रक्टर ऑब्जेक्ट नष्ट होताना मेमरी रिकामी करतो. कन्स्ट्रक्टर ओव्हरलोड होऊ शकतो, डिस्ट्रक्टर ओव्हरलोड होऊ शकत नाही.",
        hinglish: "Constructor object banate time initialize karta hai, Destructor object khatam hone par memory free karta hai. Constructor overload ho sakta hai, Destructor nahi.",
        exam2M: "1. Constructor initializes an object; Destructor cleans up resources.\n2. Constructor can take arguments; Destructor takes no arguments.\n3. Constructor has no prefix; Destructor is prefixed with ~.",
        exam5M: "Comparison Table between Constructor and Destructor:\n| Feature | Constructor | Destructor |\n|---|---|---|\n| Purpose | Initializes object state | Frees allocated memory & resources |\n| Syntax | ClassName() | ~ClassName() |\n| Arguments | Can accept arguments | Never accepts any arguments |\n| Overloading | Supported (Default, Param, Copy) | Not supported (Only 1 per class) |\n| Execution Order | Chronological order | Reverse LIFO order |",
        exam10M: "Lifecycle architecture analysis, Stack frame unwinding during exceptions, Dynamic memory deallocation with new/delete, and C++ code comparison."
    },

    // UNIT 4: INHERITANCE
    "what_is_inheritance": {
        id: "what_is_inheritance",
        unit: 4,
        title: "What is Inheritance?",
        keywords: ["what is inheritance", "inheritance in c++", "inheritance definition", "define inheritance", "types of inheritance", "inheritance with example", "explain inheritance", "inheritance"],
        marathiQuery: ["inheritance mhanje kay", "inheritance chi mahiti", "inheritance marathi"],
        hinglishQuery: ["inheritance kya hota hai", "inheritance samjhao", "inheritance types", "inheritance kya hai"],
        definition: "Inheritance is the mechanism in C++ by which a new class (derived/child class) inherits properties and behaviors (data members and member functions) from an existing class (base/parent class).",
        explanation: "Inheritance represents the foundational 'is-a' relationship in Object-Oriented design. Instead of writing duplicate code for common attributes, a base class is created once and specialized subclasses extend it. C++ supports five major forms: Single, Multiple, Multilevel, Hierarchical, and Hybrid inheritance.",
        importantPoints: [
            "Promotes code reusability and software maintainability.",
            "Base Class (Parent/Super Class) -> Derived Class (Child/Sub Class).",
            "Derived class inherits all public and protected members of the base class.",
            "Private members of the base class are NOT directly accessible in derived classes.",
            "Syntax uses a colon (:), e.g. class Derived : public Base."
        ],
        syntax: `class Base {
    // Base members
};

class Derived : public Base {
    // Derived members + inherited Base members
};`,
        code: `#include <iostream>
using namespace std;

class Vehicle {
public:
    void honk() {
        cout << "Vehicle horn: Beep! Beep!" << endl;
    }
};

class Car : public Vehicle {
public:
    int wheels = 4;
};

int main() {
    Car myCar;
    myCar.honk(); // Calling inherited function
    cout << "Number of wheels: " << myCar.wheels << endl;
    return 0;
}`,
        output: `Vehicle horn: Beep! Beep!
Number of wheels: 4`,
        realLifeExample: "Biological genetics: A child inherits eye color, hair type, and blood group from their parents, while having their own unique skills.",
        diagram: "singleInheritance",
        advantages: ["Massive code reusability", "Establishes natural taxonomy and class hierarchies"],
        disadvantages: ["Tightly couples base and derived classes"],
        relatedQuestions: [
            "Types of Inheritance",
            "Single vs Multiple Inheritance",
            "What is the Diamond Problem?"
        ],
        marathi: "इनहेरिटन्स (Inheritance) म्हणजे असा गुणधर्म ज्यामध्ये नवीन क्लास (Derived class) जुन्या क्लासचे (Base class) गुणधर्म आणि फंक्शन्स स्वतःमध्ये सामावून घेतो. यामुळे कोड पुन्हा पुन्हा लिहिण्याची गरज पडत नाही (Code Reusability).",
        hinglish: "Inheritance ek aisi technique hai jisme ek child class (derived) apne parent class (base) ke features aur methods ko inherit karta hai. Iska main faayda code reusability hai.",
        exam2M: "Inheritance is the process by which objects of one class acquire the properties of another class. It models the 'is-a' relationship and promotes code reusability.",
        exam5M: "1. Definition & Concept of Base and Derived classes.\n2. The 5 Types of Inheritance in C++:\n   - Single Inheritance\n   - Multiple Inheritance\n   - Multilevel Inheritance\n   - Hierarchical Inheritance\n   - Hybrid Inheritance\n3. Syntax and access modes (public, protected, private).\n4. Working C++ program with output.",
        exam10M: "Exhaustive writeup explaining all 5 types of inheritance with individual diagrams, visibility conversion tables, constructor calling sequence, and the Diamond Problem."
    },

    "types_of_inheritance": {
        id: "types_of_inheritance",
        unit: 4,
        title: "Types of Inheritance in C++",
        keywords: ["types of inheritance", "5 types of inheritance", "single multiple multilevel hierarchical hybrid", "inheritance types in c++"],
        marathiQuery: ["inheritance che prakar", "types of inheritance marathi"],
        hinglishQuery: ["inheritance ke kitne types hote hain", "types of inheritance explain karo"],
        definition: "C++ supports five distinct types of inheritance: 1. Single Inheritance, 2. Multiple Inheritance, 3. Multilevel Inheritance, 4. Hierarchical Inheritance, and 5. Hybrid Inheritance.",
        explanation: "1) Single: One derived class inherits from one base class. 2) Multiple: One derived class inherits from two or more base classes. 3) Multilevel: A class derives from another derived class (chain). 4) Hierarchical: Multiple derived classes inherit from a single base class. 5) Hybrid: A combination of two or more inheritance types.",
        importantPoints: [
            "Single: Base -> Derived.",
            "Multiple: Base1 + Base2 -> Derived.",
            "Multilevel: Grandparent -> Parent -> Child.",
            "Hierarchical: Base -> Child1, Child2, Child3.",
            "Hybrid: Combines forms (often leads to Diamond Problem)."
        ],
        syntax: `// Single
class B : public A {};

// Multiple
class C : public A, public B {};

// Multilevel
class B : public A {};
class C : public B {};

// Hierarchical
class B : public A {};
class C : public A {};`,
        code: `#include <iostream>
using namespace std;

// Base
class Grandparent {
public:
    void legacy() { cout << "Grandparent's wisdom" << endl; }
};

// Multilevel
class Parent : public Grandparent {};
class Child : public Parent {};

int main() {
    Child c;
    c.legacy(); // Multilevel access
    return 0;
}`,
        output: `Grandparent's wisdom`,
        realLifeExample: "Family tree: Single = Father -> Son; Multiple = Father + Mother -> Child; Multilevel = Grandfather -> Father -> Son; Hierarchical = Father -> Son, Daughter; Hybrid = Royal family marriages.",
        diagram: "multilevelInheritance",
        advantages: ["Versatility for complex domain modeling"],
        disadvantages: ["Risk of ambiguity (Diamond problem) in multiple and hybrid inheritance"],
        relatedQuestions: [
            "What is Multiple Inheritance?",
            "What is the Diamond Problem?",
            "What is Multilevel Inheritance?"
        ],
        marathi: "C++ मध्ये ५ प्रकारचे इनहेरिटन्स असतात: १) Single (एकाकडून एक), २) Multiple (अनेकांकडून एक), ३) Multilevel (साखळी पद्धत), ४) Hierarchical (एकाकडून अनेक), ५) Hybrid (मिश्र पद्धत).",
        hinglish: "C++ me 5 types ke inheritance hote hain: Single, Multiple, Multilevel, Hierarchical, aur Hybrid. Ye code ko structure karne me help karte hain.",
        exam2M: "The 5 types of inheritance in C++ are:\n1. Single Inheritance\n2. Multiple Inheritance\n3. Multilevel Inheritance\n4. Hierarchical Inheritance\n5. Hybrid Inheritance.",
        exam5M: "Explain all 5 types of inheritance with short diagrams and syntax:\n1. Single (A -> B)\n2. Multiple (A + B -> C)\n3. Multilevel (A -> B -> C)\n4. Hierarchical (A -> B, C)\n5. Hybrid (Combined forms).",
        exam10M: "Comprehensive 10 Marks university answer with individual class definitions, syntax, code examples, outputs, and SVG diagrams for all 5 inheritance models."
    },

    "diamond_problem": {
        id: "diamond_problem",
        unit: 4,
        title: "The Diamond Problem & Virtual Inheritance",
        keywords: ["diamond problem", "virtual base class", "diamond problem in c++", "virtual inheritance", "ambiguity in multiple inheritance"],
        marathiQuery: ["diamond problem marathi", "virtual base class marathi"],
        hinglishQuery: ["diamond problem kya hai", "virtual base class samjhao"],
        definition: "The Diamond Problem is an ambiguity that arises in C++ multiple inheritance when a derived class inherits from two intermediate classes that both share the same base class, resulting in duplicate copies of the base class.",
        explanation: "In a diamond hierarchy (Base A -> Derived B and Derived C -> Final D), class D receives two separate copies of class A's members. When D tries to access a member of A, the compiler reports an 'ambiguous access' compilation error. C++ solves this using 'Virtual Base Classes' (virtual public Base), which ensures only one shared instance of the ancestor class exists.",
        importantPoints: [
            "Occurs in Hybrid/Multipath inheritance shaped like a diamond.",
            "Leads to compiler error: 'request for member is ambiguous'.",
            "Wasteful duplicate memory allocation.",
            "Solution: Add the 'virtual' keyword in intermediate class inheritance declarations.",
            "Syntax: class B : virtual public A { ... }; and class C : virtual public A { ... };"
        ],
        syntax: `class A { public: int x; };
class B : virtual public A {}; // Virtual inheritance
class C : virtual public A {}; // Virtual inheritance
class D : public B, public C {}; // D now has only 1 copy of x!`,
        code: `#include <iostream>
using namespace std;

class Person {
public:
    void speak() { cout << "I am a human being." << endl; }
};

// Using virtual inheritance
class Student : virtual public Person {};
class Faculty : virtual public Person {};

class TA : public Student, public Faculty {};

int main() {
    TA ta;
    ta.speak(); // Without 'virtual', this causes a compile ERROR!
    return 0;
}`,
        output: `I am a human being.`,
        realLifeExample: "Dual citizenship: If two departments of the government both grant you a distinct citizen ID because of dual regional laws, the tax office gets confused about which ID to charge. A universal national ID (Virtual base class) unifies your identity into one record.",
        diagram: "diamondProblem",
        advantages: ["Eliminates memory redundancy and compiler ambiguity errors"],
        disadvantages: ["Adds slight runtime pointer indirection (vptr) overhead"],
        relatedQuestions: [
            "What is Multiple Inheritance?",
            "What is Hybrid Inheritance?",
            "What is Virtual Function?"
        ],
        marathi: "डायमंड प्रॉब्लेम (Diamond Problem) मध्ये एकाच मूळ क्लासचे दोन मार्ग एकत्र येऊन तिसऱ्या क्लासमध्ये डुप्लिकेट कॉपी तयार होतात, ज्यामुळे कॉम्प्युटर गोंधळात पडतो (Ambiguity). हा प्रॉब्लेम सोडवण्यासाठी 'virtual base class' वापरला जातो.",
        hinglish: "Diamond Problem tab hota hai jab do child classes same parent se inherit karti hain aur fir ek fourth class un dono se inherit karti hai. Is ambiguity ko door karne ke liye 'virtual' keyword use karte hain.",
        exam2M: "The Diamond Problem is an ambiguity error caused by duplicate inheritance of a base class in multipath multiple inheritance. Solved using 'virtual base classes'.",
        exam5M: "1. Diagram of Diamond Problem (A -> B, C -> D).\n2. Why ambiguity occurs (Two copies of A inside D).\n3. Compiler error explanation.\n4. Solution: Virtual Base Class syntax (class B : virtual public A).\n5. Complete working C++ code and output.",
        exam10M: "Deep dive into Virtual Base Class memory layout, vptr/vbase offset tables, construction order in virtual inheritance, and step-by-step code demonstration."
    },

    // UNIT 5: POLYMORPHISM
    "what_is_polymorphism": {
        id: "what_is_polymorphism",
        unit: 5,
        title: "What is Polymorphism?",
        keywords: ["what is polymorphism", "polymorphism in c++", "polymorphism definition", "define polymorphism", "types of polymorphism"],
        marathiQuery: ["polymorphism mhanje kay", "polymorphism chi mahiti", "polymorphism marathi"],
        hinglishQuery: ["polymorphism kya hota hai", "polymorphism explain karo", "polymorphism types"],
        definition: "Polymorphism (from Greek 'poly' meaning many, and 'morph' meaning form) is the ability of a message, function, or operator to be displayed or executed in more than one form.",
        explanation: "In C++, polymorphism allows a single interface to control different underlying implementations. It is classified into two major categories: 1) Compile-Time Polymorphism (Static/Early Binding) through Function Overloading and Operator Overloading; 2) Run-Time Polymorphism (Dynamic/Late Binding) through Virtual Functions and Function Overriding.",
        importantPoints: [
            "Single interface, multiple implementations.",
            "Compile-time (Static): Overloading; fast execution; resolved by compiler.",
            "Run-time (Dynamic): Virtual functions; dynamic dispatch via vtable; resolved at runtime.",
            "Enables plug-and-play architecture where base pointers manipulate derived instances uniformly."
        ],
        syntax: `// Overloading (Compile-Time)
int add(int a, int b);
double add(double a, double b);

// Virtual (Run-Time)
virtual void draw();`,
        code: `#include <iostream>
using namespace std;

class Printer {
public:
    // Compile-time polymorphism (Overloading)
    void print(int i) { cout << "Printing integer: " << i << endl; }
    void print(string s) { cout << "Printing string: " << s << endl; }
};

int main() {
    Printer p;
    p.print(42);
    p.print("Hello OOP!");
    return 0;
}`,
        output: `Printing integer: 42
Printing string: Hello OOP!`,
        realLifeExample: "A man can simultaneously act as a father to his children, an employee to his boss, a customer at a store, and a husband to his wife. One person, different roles depending on the situation.",
        diagram: "polymorphism",
        advantages: ["Extreme software flexibility", "Open-Closed Principle adherence (easy to extend)"],
        disadvantages: ["Dynamic polymorphism adds minor vtable lookup overhead"],
        relatedQuestions: [
            "Compile-time vs Run-time Polymorphism",
            "What is a Virtual Function?",
            "What is Operator Overloading?"
        ],
        marathi: "पॉलिमॉर्फिझम (Polymorphism) म्हणजे 'एकाच गोष्टीचे अनेक रूप' (Many Forms). एकाच नावाचे फंक्शन वेगवेगळ्या परिस्थितीनुसार वेगळे काम करू शकते. याचे २ प्रकार आहेत: १) Compile-Time (Function Overloading), २) Run-Time (Virtual Functions).",
        hinglish: "Polymorphism ka matlab hota hai 'many forms'. Ek hi function ya operator alag alag situations me alag tarike se behave karta hai. Ye do types ka hota hai: Compile-time aur Run-time.",
        exam2M: "Polymorphism means 'many forms'. It is the ability of an entity to take different forms in different contexts. Divided into Compile-Time and Run-Time polymorphism.",
        exam5M: "1. Definition & Etymology of Polymorphism.\n2. Classification Tree:\n   - Compile-Time (Function & Operator Overloading)\n   - Run-Time (Virtual Functions & Function Overriding)\n3. Comparison: Early Binding vs Late Binding.\n4. Short C++ code demonstrating both forms.",
        exam10M: "Complete 10 Marks answer detailing Compile-time vs Run-time mechanisms, Internal working of VTABLE and VPTR, C++ code samples, and practical real-world use cases."
    },

    "virtual_function": {
        id: "virtual_function",
        unit: 5,
        title: "Virtual Functions & Pure Virtual Functions",
        keywords: ["virtual function", "pure virtual function", "runtime polymorphism", "abstract class", "virtual functions in c++"],
        marathiQuery: ["virtual function marathi", "pure virtual function mhanje kay"],
        hinglishQuery: ["virtual function kya hota hai", "pure virtual function samjhao"],
        definition: "A Virtual Function is a member function in a base class declared with the 'virtual' keyword that you expect to redefine in derived classes, enabling dynamic runtime dispatch via base pointers.",
        explanation: "When you invoke a regular function through a base class pointer pointing to a derived object, C++ binds the call to the base class (early binding). By marking the function `virtual`, C++ performs late binding using a virtual method table (vtable), calling the derived version. A Pure Virtual Function (`virtual void f() = 0;`) has no body in the base class, making the class an Abstract Class.",
        importantPoints: [
            "Declared using the 'virtual' keyword in the base class.",
            "Pure virtual function has '= 0' at the end of declaration.",
            "Any class with at least one pure virtual function is an Abstract Class (cannot instantiate).",
            "Resolved dynamically at runtime via VPTR (virtual pointer) and VTABLE.",
            "Destructors in base classes should always be declared virtual."
        ],
        syntax: `class Base {
public:
    virtual void show() { cout << "Base"; } // Virtual
    virtual void draw() = 0; // Pure Virtual (Makes class Abstract)
};`,
        code: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {
        cout << "Animal makes generic sound." << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Dog says: Bow Bow!" << endl;
    }
};

int main() {
    Animal* a = new Dog(); // Base pointer pointing to derived object
    a->sound(); // Calls Dog's version dynamically!
    delete a;
    return 0;
}`,
        output: `Dog says: Bow Bow!`,
        realLifeExample: "Universal Remote Control. The 'Power' button sends an abstract command, but a Sony TV turns on its screen while a Pioneer amplifier activates its audio tubes.",
        diagram: "polymorphism",
        advantages: ["Enables true dynamic runtime polymorphism and extensibility"],
        disadvantages: ["Requires small extra memory per object for VPTR"],
        relatedQuestions: [
            "What is an Abstract Class?",
            "What is Polymorphism?",
            "What is a Virtual Destructor?"
        ],
        marathi: "व्हर्च्युअल फंक्शन (Virtual Function) मुळे रन-टाईम पॉलिमॉर्फिझम शक्य होते. बेस क्लासच्या पॉईंटरने चाइल्ड क्लासचे फंक्शन कॉल करता येते. आणि ज्या फंक्शनच्या पुढे '= 0' असते त्याला Pure Virtual Function म्हणतात.",
        hinglish: "Virtual function base class me banaya jata hai jisse base pointer run-time par child class ke method ko call kar sake. Aur jab '= 0' lagaya jata hai to wo Pure Virtual Function ban jata hai.",
        exam2M: "A virtual function is a base class member function redefined in a derived class and resolved dynamically at runtime. A pure virtual function has '= 0' and no body.",
        exam5M: "1. Concept of Virtual Functions and Late Binding.\n2. Role of VPTR and VTABLE in C++ runtime dispatch.\n3. Pure Virtual Function syntax and Abstract Class definition.\n4. Complete working C++ program with Base pointer and Derived object.",
        exam10M: "Exhaustive treatment of Virtual Functions, Vtable pointer mechanics, Memory overhead, Pure virtual functions, Interfaces, Virtual Destructors, and full C++ implementation."
    },

    // UNIT 6: ADVANCED OOP
    "encapsulation": {
        id: "encapsulation",
        unit: 6,
        title: "Encapsulation",
        keywords: ["encapsulation", "data encapsulation", "data hiding", "what is encapsulation", "encapsulation in c++"],
        marathiQuery: ["encapsulation mhanje kay", "encapsulation chi mahiti", "encapsulation marathi"],
        hinglishQuery: ["encapsulation kya hota hai", "encapsulation explain karo", "encapsulation definition"],
        definition: "Encapsulation is the mechanism of bundling data members (attributes) and the member functions (methods) that manipulate them into a single unit (Class) while restricting direct external access.",
        explanation: "Encapsulation leads to Data Hiding. By keeping variables private, outside code cannot tamper with or corrupt an object's internal state. Access and modification are mediated exclusively through public getter and setter methods that validate all operations.",
        importantPoints: [
            "Combines data and code into a single capsule (Class).",
            "Achieved in C++ using access specifiers: private, protected, and public.",
            "Guarantees data integrity and security through validation inside getters/setters.",
            "Hides internal data representation from outside tampering."
        ],
        syntax: `class Capsule {
private:
    int hiddenData; // Data Hiding
public:
    void setData(int d) { if(d > 0) hiddenData = d; } // Validation
    int getData() const { return hiddenData; }
};`,
        code: `#include <iostream>
using namespace std;

class EmployeeSalary {
private:
    double salary; // Private data

public:
    void setSalary(double s) {
        if (s >= 10000) {
            salary = s;
        } else {
            cout << "Invalid Salary! Minimum base is 10,000." << endl;
            salary = 10000;
        }
    }

    double getSalary() const {
        return salary;
    }
};

int main() {
    EmployeeSalary emp;
    emp.setSalary(45000);
    cout << "Employee Salary: Rs. " << emp.getSalary() << endl;
    return 0;
}`,
        output: `Employee Salary: Rs. 45000`,
        realLifeExample: "A medical capsule: The active medicinal chemicals are safely wrapped inside a gelatin shell so you swallow it safely without direct chemical contact with your tongue.",
        diagram: "encapsulation",
        advantages: ["Guaranteed data security", "Prevents unauthorized tampering", "Allows seamless internal refactoring"],
        disadvantages: ["Requires writing getter and setter methods"],
        relatedQuestions: [
            "Difference between Encapsulation and Abstraction",
            "What are Access Specifiers?",
            "What is a Class?"
        ],
        marathi: "एनकॅप्स्युलेशन (Encapsulation) म्हणजे डेटा आणि त्यावर चालणारे फंक्शन्स यांना एका कॅप्सूलमध्ये (क्लासमध्ये) एकत्र बांधणे. यात प्रायव्हेट (private) कीवर्ड वापरून डेटा लपवला जातो आणि गेटर/सेटर फंक्शन्सद्वारे सुरक्षितपणे ॲक्सेस केला जातो.",
        hinglish: "Encapsulation data aur functions ko ek single unit (class) me wrap karne ka process hai. Isse data hiding achieve hoti hai aur bahar ka koi bhi function data ko direct modify nahi kar sakta.",
        exam2M: "Encapsulation is the wrapping up of data and functions into a single unit (class). It provides data hiding by keeping variables private and accessible only via public methods.",
        exam5M: "1. Definition of Encapsulation and Data Hiding.\n2. How to implement in C++ using private data members and public getter/setter methods.\n3. Benefits: Security, validation, modularity, ease of testing.\n4. Complete C++ code example with output.\n5. Difference between Encapsulation and Abstraction.",
        exam10M: "In-depth answer comparing Encapsulation vs Abstraction, demonstrating secure banking class, architectural safety, and enterprise design patterns."
    },

    "abstraction": {
        id: "abstraction",
        unit: 6,
        title: "Abstraction",
        keywords: ["abstraction", "data abstraction", "what is abstraction", "abstraction in c++", "abstract class"],
        marathiQuery: ["abstraction mhanje kay", "abstraction marathi", "abstraction chi mahiti"],
        hinglishQuery: ["abstraction kya hota hai", "abstraction explain karo", "abstraction definition"],
        definition: "Abstraction is the concept of exposing only the essential features and public interfaces of an entity while concealing all internal technical complexity and implementation details.",
        explanation: "Abstraction enables programmers to deal with complex systems by focusing on WHAT an object does rather than HOW it achieves it. In C++, abstraction is implemented using Classes, Header files, and Abstract Base Classes with Pure Virtual Functions.",
        importantPoints: [
            "Focuses on WHAT the object does rather than HOW it does it.",
            "Hides complex internal mechanics, displaying only a simple interface.",
            "Implemented using Abstract Classes and Interfaces in C++.",
            "Reduces software complexity for consumers and end-users."
        ],
        syntax: `class CarInterface {
public:
    virtual void drive() = 0; // Pure interface
};`,
        code: `#include <iostream>
using namespace std;

class Microwave {
private:
    void generateMicrowaves() { cout << "[Internal: Magnetron heating at 2.45 GHz...]" << endl; }
    void rotateTurntable() { cout << "[Internal: Stepper motor spinning dish...]" << endl; }

public:
    void heatFood() {
        cout << "User clicked 'Start' button." << endl;
        generateMicrowaves();
        rotateTurntable();
        cout << "Food heated successfully!" << endl;
    }
};

int main() {
    Microwave oven;
    oven.heatFood(); // Simple abstracted interface!
    return 0;
}`,
        output: `User clicked 'Start' button.
[Internal: Magnetron heating at 2.45 GHz...]
[Internal: Stepper motor spinning dish...]
Food heated successfully!`,
        realLifeExample: "An ATM Machine: You simply insert your card, enter your PIN, and withdraw money. You do not need to understand telecommunication packets, cash dispenser motors, or database SQL transaction rollbacks.",
        diagram: "abstraction",
        advantages: ["Drastically simplifies system usage", "Isolates users from backend bugs or changes"],
        disadvantages: ["Requires thoughtful upfront API design"],
        relatedQuestions: [
            "Difference between Encapsulation and Abstraction",
            "What is an Abstract Class?",
            "What is a Pure Virtual Function?"
        ],
        marathi: "ॲब्स्ट्रॅक्शन (Abstraction) म्हणजे आवश्यक माहिती दाखवणे आणि अनावश्यक, गुंतागुंतीचा तांत्रिक तपशील लपवणे. उदा. आपण गाडी चालवताना फक्त ॲक्सिलरेटर दाबतो, इंजिनमध्ये पेट्रोल कसे जळते हे पाहण्याची गरज नसते.",
        hinglish: "Abstraction ka matlab hai zaroori features dikhana aur background ki complex working ko chupana. Jaise ATM chalate waqt sirf screen aur buttons dikhte hain, internal logic nahi.",
        exam2M: "Abstraction is the process of displaying only essential features and hiding internal implementation details from the user. Implemented using classes and abstract interfaces.",
        exam5M: "1. Definition & Core Philosophy of Abstraction.\n2. Implementation mechanisms in C++ (Classes, Header Files, Pure Virtual Functions).\n3. Real-life analogy (ATM, Automobile pedals).\n4. C++ Code demonstrating public abstraction vs private implementation.\n5. Comparison with Encapsulation.",
        exam10M: "Comprehensive guide to Abstraction Layers, Interface segregation, Abstract Classes vs Concrete Classes, and enterprise architectural principles."
    },

    "exception_handling": {
        id: "exception_handling",
        unit: 6,
        title: "Exception Handling (try, catch, throw)",
        keywords: ["exception handling", "try catch throw", "exception in c++", "error handling in c++"],
        marathiQuery: ["exception handling marathi", "try catch throw marathi"],
        hinglishQuery: ["exception handling kya hai", "try catch throw samjhao"],
        definition: "Exception Handling in C++ is a structured mechanism to detect, transfer, and handle runtime errors or abnormal conditions using three keywords: try, throw, and catch.",
        explanation: "Traditional error handling using return codes often cluttered business logic. C++ exception handling separates error detection from error resolution. Code that might fail is placed in a `try` block; when a failure condition occurs, it `throw`s an exception; and an appropriate `catch` block catches and resolves the issue without terminating the process.",
        importantPoints: [
            "try: Encloses the code block that may trigger an abnormal runtime error.",
            "throw: Used to throw an exception object or value when a problem occurs.",
            "catch: Catches and handles the thrown exception cleanly.",
            "catch(...) acts as a universal fallback catch-all handler.",
            "Guarantees that local stack objects are properly destructed (Stack Unwinding)."
        ],
        syntax: `try {
    if (error_condition) throw "Error occurred";
}
catch (const char* msg) {
    cout << msg;
}`,
        code: `#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int den = 0;

    try {
        if (den == 0) {
            throw "Math Error: Division by zero is prohibited!";
        }
        cout << "Result = " << num / den << endl;
    }
    catch (const char* errorMsg) {
        cout << "[Caught Exception] " << errorMsg << endl;
    }

    cout << "Program recovered and continued safely." << endl;
    return 0;
}`,
        output: `[Caught Exception] Math Error: Division by zero is prohibited!
Program recovered and continued safely.`,
        realLifeExample: "A smoke alarm: When smoke is detected, the sensor throws an alert; the sprinkler system catches the alert and sprays water without burning down the house.",
        diagram: "structureOfCpp",
        advantages: ["Separates normal application logic from error handling", "Guarantees stack unwinding and resource release"],
        disadvantages: ["Can add slight runtime overhead when exceptions are thrown"],
        relatedQuestions: [
            "What is Dynamic Memory Allocation?",
            "What is Destructor?",
            "What are Templates?"
        ],
        marathi: "एक्सेप्शन हँडलिंग (Exception Handling) मुळे रन-टाईम एरर्स (उदा. शून्याने भागणे) मुळे प्रोग्राम क्रॅश न होता सुरक्षितपणे हाताळले जातात. यासाठी try, catch, आणि throw हे ३ कीवर्ड्स वापरले जातात.",
        hinglish: "Exception Handling runtime errors ko handle karne ka safe tarika hai jisse program crash nahi hota. Isme 3 keywords use hote hain: try (code test karna), throw (error phekna), aur catch (error handle karna).",
        exam2M: "Exception handling handles runtime errors using try (code block that may throw), throw (raises exception), and catch (handles exception).",
        exam5M: "1. Definition of Exception Handling.\n2. Explanation of try, throw, and catch blocks.\n3. Concept of Stack Unwinding.\n4. Universal catch handler: catch(...).\n5. Working C++ program with output.",
        exam10M: "Advanced Exception Handling in C++, Custom Exception classes inheriting std::exception, noexcept specifier, Resource leaks during exceptions, and RAII safety."
    },

    "templates_cpp": {
        id: "templates_cpp",
        unit: 6,
        title: "Templates (Function and Class Templates)",
        keywords: ["templates", "function template", "class template", "generic programming", "templates in c++"],
        marathiQuery: ["templates marathi", "templates mhanje kay"],
        hinglishQuery: ["templates kya hote hain", "function template class template samjhao"],
        definition: "Templates in C++ allow functions and classes to operate with generic types, enabling code reusability without duplicating source code for multiple data types (Generic Programming).",
        explanation: "Instead of writing separate overloaded functions for int, double, float, and char, a single Template function is defined with a placeholder type (e.g. `template <typename T>`). The C++ compiler generates the concrete typed versions automatically during compilation.",
        importantPoints: [
            "Forms the foundation of the C++ Standard Template Library (STL).",
            "Function Templates: Generic algorithms (e.g. findMax<T>, sortArray<T>).",
            "Class Templates: Generic data structures (e.g. vector<T>, stack<T>, list<T>).",
            "Keyword used: 'template <typename T>' or 'template <class T>'.",
            "Zero runtime performance cost because generation happens at compile time."
        ],
        syntax: `template <typename T>
T add(T a, T b) {
    return a + b;
}`,
        code: `#include <iostream>
using namespace std;

// Generic function template
template <typename T>
T findMin(T a, T b) {
    return (a < b) ? a : b;
}

int main() {
    cout << "Min of integers (5, 9): " << findMin(5, 9) << endl;
    cout << "Min of floats (3.14, 2.71): " << findMin(3.14, 2.71) << endl;
    cout << "Min of chars ('G', 'B'): " << findMin('G', 'B') << endl;
    return 0;
}`,
        output: `Min of integers (5, 9): 5
Min of floats (3.14, 2.71): 2.71
Min of chars ('G', 'B'): B`,
        realLifeExample: "A universal silicone ice tray mould: You can pour water to make ice cubes, fruit juice to make popsicles, or melted chocolate to make candies. The mould remains identical; only the substance varies.",
        diagram: "polymorphism",
        advantages: ["Type-safe code reusability", "Zero runtime overhead"],
        disadvantages: ["Can increase compilation time and binary code size (template bloat)"],
        relatedQuestions: [
            "What is Function Overloading?",
            "What is Dynamic Memory Allocation?",
            "What is Encapsulation?"
        ],
        marathi: "टेम्पलेट्स (Templates) मुळे जेनेरिक प्रोग्रामिंग शक्य होते. एकाच कोडमध्ये int, float, string इत्यादी वेगवेगळ्या डेटा प्रकारांसाठी वेगवेगळे फंक्शन्स न लिहिता एकच सामान्य (generic) फंक्शन किंवा क्लास बनवता येतो.",
        hinglish: "Templates generic programming allow karte hain. Iska use karke ek hi function ya class alag alag data types (int, float, string) ke sath kaam kar sakta hai bina duplicate code likhe.",
        exam2M: "Templates allow writing generic programs. They enable functions and classes to work with any data type. Syntax: template <typename T>.",
        exam5M: "1. Definition of Generic Programming & Templates.\n2. Function Templates with syntax and demonstration.\n3. Class Templates with syntax (e.g. Generic Stack or Pair).\n4. Advantages: Code reuse, type safety, STL foundation.\n5. C++ Code example with multiple types.",
        exam10M: "Complete guide on Templates, Template Specialization, Non-type template arguments, STL containers overview, and compile-time code expansion mechanics."
    }
};

window.OOPKnowledge = OOPKnowledge;
