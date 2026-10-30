/**
 * OOP MASTER AI - 35 Comprehensive C++ OOP MCQs
 * Covers Unit 1 to Unit 6 with detailed answers and explanations.
 */

const OOPQuizData = [
    {
        id: 1,
        unit: "Unit 1: Fundamentals",
        question: "Which feature of OOP models the concept of binding data members and methods together into a single unit?",
        options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
        correct: 1,
        explanation: "Encapsulation binds data and the functions that manipulate them into a single unit (class), preventing direct external access."
    },
    {
        id: 2,
        unit: "Unit 1: Fundamentals",
        question: "What is the primary difference between POP (Procedure Oriented) and OOP (Object Oriented)?",
        options: [
            "POP focuses on data; OOP focuses on algorithms",
            "POP follows Top-Down approach; OOP follows Bottom-Up approach",
            "POP provides high data security; OOP has no security",
            "POP supports inheritance; OOP does not"
        ],
        correct: 1,
        explanation: "POP follows a top-down design centered around functions/procedures, whereas OOP follows a bottom-up approach centered around real-world objects."
    },
    {
        id: 3,
        unit: "Unit 2: Class & Object",
        question: "What is the default access specifier for members of a C++ class if none is explicitly specified?",
        options: ["public", "protected", "private", "friend"],
        correct: 2,
        explanation: "In C++, class members default to private. In contrast, struct members default to public."
    },
    {
        id: 4,
        unit: "Unit 2: Class & Object",
        question: "How much memory does a C++ class declaration take by itself before any object is created?",
        options: ["4 bytes", "Depends on number of data members", "0 bytes", "1 byte"],
        correct: 2,
        explanation: "A class declaration is merely a blueprint or type specification; it occupies 0 bytes of memory until instantiated into an object."
    },
    {
        id: 5,
        unit: "Unit 2: Class & Object",
        question: "What does the 'this' pointer in C++ point to?",
        options: [
            "The base class of the current object",
            "The object itself that invoked the member function",
            "The next available memory block",
            "The main() function"
        ],
        correct: 1,
        explanation: "'this' is an implicit constant pointer available inside non-static member functions that holds the address of the invoking object."
    },
    {
        id: 6,
        unit: "Unit 2: Class & Object",
        question: "Which keyword allows an external non-member function to access private and protected members of a class?",
        options: ["static", "inline", "friend", "virtual"],
        correct: 2,
        explanation: "The 'friend' keyword grants external functions or other classes privileged access to private and protected members."
    },
    {
        id: 7,
        unit: "Unit 2: Class & Object",
        question: "How many copies of a static data member exist in memory across all instances of a class?",
        options: [
            "One copy per created object",
            "Exactly one copy shared across all objects",
            "Two copies (one in stack, one in heap)",
            "None until explicitly requested"
        ],
        correct: 1,
        explanation: "Static data members belong to the class itself, not to individual instances. Only one shared copy exists in global/static memory."
    },
    {
        id: 8,
        unit: "Unit 3: Constructors & Destructors",
        question: "What is the return type of a C++ constructor?",
        options: ["void", "int", "pointer to the class", "Constructors have NO return type, not even void"],
        correct: 3,
        explanation: "Constructors never specify a return type, not even void, because they are automatically invoked during object initialization."
    },
    {
        id: 9,
        unit: "Unit 3: Constructors & Destructors",
        question: "Which of the following constructors takes a reference to an object of the same class as its parameter?",
        options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Dynamic constructor"],
        correct: 2,
        explanation: "A copy constructor has the signature ClassName(const ClassName& obj), used to initialize an object using another existing object."
    },
    {
        id: 10,
        unit: "Unit 3: Constructors & Destructors",
        question: "Can a C++ destructor be overloaded with different parameters?",
        options: [
            "Yes, if parameter types differ",
            "No, a destructor cannot take any arguments or be overloaded",
            "Yes, in derived classes only",
            "Only if it is declared static"
        ],
        correct: 1,
        explanation: "Destructors take no arguments and return nothing; therefore, there can only ever be exactly one destructor per class (cannot be overloaded)."
    },
    {
        id: 11,
        unit: "Unit 3: Constructors & Destructors",
        question: "In what order are destructors executed for objects declared locally within a block?",
        options: [
            "In exact chronological order of object creation",
            "In reverse order (LIFO - Last In First Out) of creation",
            "Alphabetical order of object names",
            "Random order determined by the OS"
        ],
        correct: 1,
        explanation: "Local objects allocated on the stack are deconstructed in reverse order of their creation (LIFO)."
    },
    {
        id: 12,
        unit: "Unit 4: Inheritance",
        question: "What is the relationship modeled by inheritance in Object-Oriented Programming?",
        options: ["'has-a' relationship", "'is-a' relationship", "'part-of' relationship", "'uses-a' relationship"],
        correct: 1,
        explanation: "Inheritance models an 'is-a' relationship (e.g., Dog 'is-a' Animal). 'has-a' represents composition or containment."
    },
    {
        id: 13,
        unit: "Unit 4: Inheritance",
        question: "In C++, which type of inheritance occurs when one derived class inherits from two or more base classes simultaneously?",
        options: ["Single Inheritance", "Multilevel Inheritance", "Multiple Inheritance", "Hierarchical Inheritance"],
        correct: 2,
        explanation: "Multiple inheritance allows a child class to inherit directly from two or more base classes (e.g., class C : public A, public B)."
    },
    {
        id: 14,
        unit: "Unit 4: Inheritance",
        question: "How is the ambiguous 'Diamond Problem' resolved in C++ when multiple inheritance paths converge on a common ancestor?",
        options: [
            "By using the 'friend' keyword",
            "By using 'virtual base classes'",
            "By declaring the ancestor class private",
            "C++ does not support multiple inheritance"
        ],
        correct: 1,
        explanation: "Declaring intermediate base classes with 'virtual public Base' guarantees that only a single shared copy of the root base class is inherited."
    },
    {
        id: 15,
        unit: "Unit 4: Inheritance",
        question: "If a base class member is declared 'protected', who can access it?",
        options: [
            "Only member functions of the base class itself",
            "Base class members and directly/indirectly derived class members",
            "Any external function in main()",
            "Only friend classes, no child classes"
        ],
        correct: 1,
        explanation: "Protected members are inaccessible to outside code (like private), but are fully accessible inside derived classes (unlike private)."
    },
    {
        id: 16,
        unit: "Unit 4: Inheritance",
        question: "When an object of a derived class is instantiated, what is the order of constructor execution?",
        options: [
            "Derived constructor first, then Base constructor",
            "Base class constructor first, then Derived constructor",
            "They execute in parallel asynchronously",
            "Only the derived constructor executes"
        ],
        correct: 1,
        explanation: "Base class constructors always execute first so the foundation is prepared before the derived class initializes its specific extensions."
    },
    {
        id: 17,
        unit: "Unit 5: Polymorphism",
        question: "Which of the following is an example of Compile-Time Polymorphism?",
        options: [
            "Virtual functions",
            "Function overriding",
            "Function overloading and Operator overloading",
            "Abstract base classes"
        ],
        correct: 2,
        explanation: "Function overloading and operator overloading are resolved at compile time based on parameter types and counts (early/static binding)."
    },
    {
        id: 18,
        unit: "Unit 5: Polymorphism",
        question: "What keyword is required in the base class to enable Runtime Polymorphism (Late Binding) in C++?",
        options: ["inline", "virtual", "friend", "template"],
        correct: 1,
        explanation: "The 'virtual' keyword informs the compiler to generate a vptr and vtable for dynamic dispatch at runtime."
    },
    {
        id: 19,
        unit: "Unit 5: Polymorphism",
        question: "What makes a C++ class an 'Abstract Class'?",
        options: [
            "Having all private members",
            "Containing at least one pure virtual function (= 0)",
            "Having no constructor defined",
            "Inheriting from more than 3 classes"
        ],
        correct: 1,
        explanation: "A class containing at least one pure virtual function (e.g., virtual void draw() = 0;) is abstract and cannot be instantiated directly."
    },
    {
        id: 20,
        unit: "Unit 5: Polymorphism",
        question: "Which of the following C++ operators CANNOT be overloaded?",
        options: ["+", "==", ":: (Scope Resolution)", "[]"],
        correct: 2,
        explanation: "In C++, the Scope Resolution (::), Member Selector (.), Pointer-to-member (.*), and Ternary (?:) operators cannot be overloaded."
    },
    {
        id: 21,
        unit: "Unit 5: Polymorphism",
        question: "What is the purpose of declaring a virtual destructor in a base class?",
        options: [
            "To prevent the base class from ever being destroyed",
            "To ensure the derived class destructor is called when deleting via a base pointer",
            "To speed up program compilation",
            "To allocate memory dynamically on the heap"
        ],
        correct: 1,
        explanation: "If you delete a derived object through a base pointer, a non-virtual destructor only frees base sub-objects, causing memory leaks in derived members."
    },
    {
        id: 22,
        unit: "Unit 6: Advanced OOP",
        question: "Which C++ operator dynamically allocates memory on the heap and calls the constructor?",
        options: ["malloc()", "alloc()", "new", "create"],
        correct: 2,
        explanation: "The 'new' operator allocates typed memory from the heap AND invokes the class constructor, unlike C's malloc()."
    },
    {
        id: 23,
        unit: "Unit 6: Advanced OOP",
        question: "What is the correct syntax to free dynamic array memory allocated with 'int* arr = new int[50];'?",
        options: ["delete arr;", "delete[] arr;", "free(arr);", "remove arr;"],
        correct: 1,
        explanation: "'delete[] arr;' must be used to deallocate array memory so destructors for every element are properly invoked."
    },
    {
        id: 24,
        unit: "Unit 6: Advanced OOP",
        question: "Which three keywords constitute the C++ Exception Handling mechanism?",
        options: ["try, catch, throw", "try, except, finally", "begin, rescue, end", "throw, handle, exit"],
        correct: 0,
        explanation: "C++ uses 'try' to enclose guarded code, 'throw' to signal an error, and 'catch' to handle the raised exception."
    },
    {
        id: 25,
        unit: "Unit 6: Advanced OOP",
        question: "What header file is essential for file input and output stream operations in C++?",
        options: ["<stdio.h>", "<fstream>", "<fileio>", "<iostream.h>"],
        correct: 1,
        explanation: "<fstream> provides ifstream for reading, ofstream for writing, and fstream for bidirectional file manipulation."
    },
    {
        id: 26,
        unit: "Unit 6: Advanced OOP",
        question: "Templates in C++ are a realization of which programming paradigm?",
        options: ["Procedural Programming", "Generic Programming", "Assembly Optimization", "Functional Recursion"],
        correct: 1,
        explanation: "Templates enable Generic Programming, allowing functions and classes to operate with generic types without code duplication."
    },
    {
        id: 27,
        unit: "Unit 2: Class & Object",
        question: "Which operator is used to access members of a class through an object pointer?",
        options: [". (dot)", "-> (arrow)", ":: (double colon)", "@ (at sign)"],
        correct: 1,
        explanation: "The arrow operator (->) dereferences an object pointer and accesses its members (equivalent to (*ptr).member)."
    },
    {
        id: 28,
        unit: "Unit 1: Fundamentals",
        question: "Which of the following is NOT an advantage of Object-Oriented Programming?",
        options: [
            "Code reusability through inheritance",
            "Data security via encapsulation",
            "Simpler mental modeling for real-world entities",
            "Guaranteed smaller executable binary size than pure C"
        ],
        correct: 3,
        explanation: "OOP programs frequently generate slightly larger binaries and overhead due to virtual tables, constructor calls, and class metadata."
    },
    {
        id: 29,
        unit: "Unit 3: Constructors & Destructors",
        question: "When is a default constructor automatically supplied by the C++ compiler?",
        options: [
            "Always, regardless of any user-written constructors",
            "Only when the programmer has declared NO constructors at all",
            "Whenever the new operator is invoked",
            "Never; you must always manually write one"
        ],
        correct: 1,
        explanation: "The compiler auto-generates an implicit default constructor only if no constructor of any type is explicitly provided by the author."
    },
    {
        id: 30,
        unit: "Unit 5: Polymorphism",
        question: "What is an internal table of function pointers created by compilers to support dynamic dispatch called?",
        options: ["symbol table", "vtable (Virtual Method Table)", "lookup index", "dispatch heap"],
        correct: 1,
        explanation: "Compilers generate a 'vtable' (virtual table) containing pointers to virtual functions and assign each object a 'vptr' pointing to it."
    },
    {
        id: 31,
        unit: "Unit 4: Inheritance",
        question: "If Class B privately inherits from Class A (class B : private A), what do public members of A become in B?",
        options: ["public", "protected", "private", "inaccessible"],
        correct: 2,
        explanation: "Under private inheritance, public and protected members of the base class become private members of the derived class."
    },
    {
        id: 32,
        unit: "Unit 6: Advanced OOP",
        question: "What happens if a dynamically allocated object pointer is lost without calling delete?",
        options: [
            "Automatic garbage collection reclaims it instantly",
            "Memory Leak occurs (RAM remains allocated until process ends)",
            "A compilation syntax error is raised",
            "The program crashes immediately"
        ],
        correct: 1,
        explanation: "C++ has no automatic garbage collector. Forgetting to delete heap memory results in a memory leak."
    },
    {
        id: 33,
        unit: "Unit 2: Class & Object",
        question: "Can static member functions access regular non-static data members of their class?",
        options: [
            "Yes, without any restrictions",
            "No, because static functions do not possess a 'this' pointer",
            "Only if the member is declared public",
            "Only inside main()"
        ],
        correct: 1,
        explanation: "Static member functions are invoked at class level and lack a 'this' pointer; thus they can only access static members directly."
    },
    {
        id: 34,
        unit: "Unit 5: Polymorphism",
        question: "What is the primary condition for two functions to be considered an overloaded pair?",
        options: [
            "Different return type with identical parameters",
            "Same function name with different parameter types or counts",
            "Defined in two different source files",
            "Must have the inline keyword"
        ],
        correct: 1,
        explanation: "Function overloading requires the same function name with distinct parameter lists (arity, type, or ordering). Varying return type alone is invalid."
    },
    {
        id: 35,
        unit: "Unit 6: Advanced OOP",
        question: "Which stream manipulator is used to insert a newline and immediately flush the output buffer?",
        options: ["\\n", "endl", "flush()", "skipws"],
        correct: 1,
        explanation: "std::endl inserts a newline character and forces an immediate buffer flush."
    }
];

window.OOPQuizData = OOPQuizData;
