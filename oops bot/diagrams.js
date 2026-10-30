/**
 * OOP MASTER AI - Educational SVG Diagram System
 * Pure SVG + CSS diagrams that render offline with clean styling and animations.
 */

const OOPDiagrams = {
    // 1. CLASS AND OBJECT: Blueprint vs Instances
    classAndObject: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Class (Blueprint) vs Objects (Instances)</div>
            <svg viewBox="0 0 760 320" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="blueprintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.9"/>
                        <stop offset="100%" stop-color="#7c3aed" stop-opacity="0.9"/>
                    </linearGradient>
                    <linearGradient id="objGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.85"/>
                        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.85"/>
                    </linearGradient>
                    <linearGradient id="objGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#10b981" stop-opacity="0.85"/>
                        <stop offset="100%" stop-color="#059669" stop-opacity="0.85"/>
                    </linearGradient>
                    <linearGradient id="objGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.85"/>
                        <stop offset="100%" stop-color="#d97706" stop-opacity="0.85"/>
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#a78bfa"/>
                    </marker>
                </defs>

                <!-- Class Blueprint Box -->
                <rect x="30" y="30" width="230" height="260" rx="14" fill="url(#blueprintGrad)" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="6,4" />
                <rect x="30" y="30" width="230" height="42" rx="14" fill="#312e81" opacity="0.8"/>
                <text x="145" y="56" fill="#ffffff" font-size="15" font-weight="700" text-anchor="middle">CLASS: Car (Blueprint)</text>

                <!-- Blueprint Sections -->
                <rect x="42" y="82" width="206" height="88" rx="8" fill="#1e1b4b" opacity="0.6"/>
                <text x="50" y="102" fill="#a5b4fc" font-size="12" font-weight="600">DATA MEMBERS (State):</text>
                <text x="50" y="122" fill="#e0e7ff" font-size="12">- string brand</text>
                <text x="50" y="140" fill="#e0e7ff" font-size="12">- string color</text>
                <text x="50" y="158" fill="#e0e7ff" font-size="12">- int maxSpeed</text>

                <rect x="42" y="180" width="206" height="96" rx="8" fill="#1e1b4b" opacity="0.6"/>
                <text x="50" y="200" fill="#a5b4fc" font-size="12" font-weight="600">MEMBER FUNCTIONS (Behavior):</text>
                <text x="50" y="222" fill="#e0e7ff" font-size="12">+ startEngine()</text>
                <text x="50" y="242" fill="#e0e7ff" font-size="12">+ accelerate()</text>
                <text x="50" y="262" fill="#e0e7ff" font-size="12">+ applyBrake()</text>

                <!-- Instantiation Connecting Lines -->
                <path d="M 260 110 C 340 80, 370 70, 440 65" fill="none" stroke="#a78bfa" stroke-width="2.5" marker-end="url(#arrow)"/>
                <path d="M 260 160 C 340 160, 370 160, 440 160" fill="none" stroke="#a78bfa" stroke-width="2.5" marker-end="url(#arrow)"/>
                <path d="M 260 210 C 340 240, 370 250, 440 255" fill="none" stroke="#a78bfa" stroke-width="2.5" marker-end="url(#arrow)"/>
                
                <text x="345" y="140" fill="#c4b5fd" font-size="12" font-weight="600" text-anchor="middle">Instantiates (new)</text>

                <!-- Object 1 -->
                <g transform="translate(450, 20)">
                    <rect width="270" height="80" rx="12" fill="url(#objGrad1)" stroke="#67e8f9" stroke-width="1.5"/>
                    <text x="14" y="25" fill="#ffffff" font-size="13" font-weight="700">Object 1: car1 (Tesla)</text>
                    <text x="14" y="47" fill="#ecfeff" font-size="12">brand = "Tesla" | color = "Red"</text>
                    <text x="14" y="66" fill="#ecfeff" font-size="12">maxSpeed = 250 km/h [Occupies RAM]</text>
                </g>

                <!-- Object 2 -->
                <g transform="translate(450, 120)">
                    <rect width="270" height="80" rx="12" fill="url(#objGrad2)" stroke="#6ee7b7" stroke-width="1.5"/>
                    <text x="14" y="25" fill="#ffffff" font-size="13" font-weight="700">Object 2: car2 (BMW)</text>
                    <text x="14" y="47" fill="#f0fdf4" font-size="12">brand = "BMW" | color = "Black"</text>
                    <text x="14" y="66" fill="#f0fdf4" font-size="12">maxSpeed = 240 km/h [Occupies RAM]</text>
                </g>

                <!-- Object 3 -->
                <g transform="translate(450, 220)">
                    <rect width="270" height="80" rx="12" fill="url(#objGrad3)" stroke="#fcd34d" stroke-width="1.5"/>
                    <text x="14" y="25" fill="#ffffff" font-size="13" font-weight="700">Object 3: car3 (Audi)</text>
                    <text x="14" y="47" fill="#fffbeb" font-size="12">brand = "Audi" | color = "White"</text>
                    <text x="14" y="66" fill="#fffbeb" font-size="12">maxSpeed = 230 km/h [Occupies RAM]</text>
                </g>
            </svg>
            <div class="diagram-caption">A <strong>Class</strong> is a logical template with 0 memory allocated. An <strong>Object</strong> is a physical instance with distinct memory in RAM.</div>
        </div>
        `;
    },

    // 2. ENCAPSULATION: Capsule shielding data
    encapsulation: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Encapsulation: Data Hiding & Protective Wrapper</div>
            <svg viewBox="0 0 760 300" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="outerCapsule" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#312e81"/>
                        <stop offset="100%" stop-color="#1e1b4b"/>
                    </linearGradient>
                    <linearGradient id="privateCore" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#dc2626"/>
                        <stop offset="100%" stop-color="#991b1b"/>
                    </linearGradient>
                    <linearGradient id="publicShield" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#10b981"/>
                        <stop offset="100%" stop-color="#047857"/>
                    </linearGradient>
                    <marker id="encapArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                    </marker>
                    <marker id="blockArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171"/>
                    </marker>
                </defs>

                <!-- Outer Class Boundary -->
                <rect x="180" y="25" width="400" height="250" rx="36" fill="url(#outerCapsule)" stroke="#6366f1" stroke-width="3"/>
                <text x="380" y="55" fill="#a5b4fc" font-size="16" font-weight="700" text-anchor="middle">CLASS: BankAccount (Capsule)</text>

                <!-- Private Protected Core -->
                <rect x="230" y="80" width="300" height="90" rx="18" fill="url(#privateCore)" stroke="#fca5a5" stroke-width="2"/>
                <text x="380" y="108" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">🔒 PRIVATE DATA MEMBERS (Hidden)</text>
                <text x="380" y="132" fill="#fee2e2" font-size="13" text-anchor="middle">double balance;  long accountNumber;</text>
                <text x="380" y="152" fill="#fecaca" font-size="11" text-anchor="middle">Direct outside access is FORBIDDEN</text>

                <!-- Public Methods Interface -->
                <rect x="210" y="190" width="340" height="70" rx="16" fill="url(#publicShield)" stroke="#6ee7b7" stroke-width="2"/>
                <text x="380" y="215" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">🔓 PUBLIC MEMBER FUNCTIONS (Getters & Setters)</text>
                <text x="380" y="238" fill="#d1fae5" font-size="12" text-anchor="middle">deposit(amount)  |  withdraw(amount)  |  getBalance()</text>

                <!-- Outside World Interaction -->
                <g transform="translate(20, 70)">
                    <circle cx="45" cy="45" r="35" fill="#475569" stroke="#94a3b8" stroke-width="2"/>
                    <text x="45" y="42" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">External</text>
                    <text x="45" y="58" fill="#cbd5e1" font-size="11" text-anchor="middle">Code</text>
                </g>

                <!-- Blocked direct access -->
                <path d="M 105 110 L 220 110" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="5,4" marker-end="url(#blockArrow)"/>
                <circle cx="160" cy="110" r="14" fill="#991b1b"/>
                <text x="160" y="115" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">✕</text>
                <text x="160" y="90" fill="#f87171" font-size="10" font-weight="700" text-anchor="middle">BLOCKED</text>

                <!-- Allowed public method access -->
                <path d="M 95 145 C 95 225, 140 225, 200 225" fill="none" stroke="#10b981" stroke-width="3" marker-end="url(#encapArrow)"/>
                <circle cx="140" cy="225" r="14" fill="#065f46"/>
                <text x="140" y="230" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">✓</text>
                <text x="140" y="255" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">ALLOWED</text>

                <!-- Label Right -->
                <g transform="translate(600, 110)">
                    <rect width="140" height="90" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <text x="70" y="26" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">DATA INTEGRITY</text>
                    <text x="10" y="48" fill="#cbd5e1" font-size="10">Validates negative</text>
                    <text x="10" y="64" fill="#cbd5e1" font-size="10">deposits & prevents</text>
                    <text x="10" y="80" fill="#cbd5e1" font-size="10">unauthorized tampering</text>
                </g>
            </svg>
            <div class="diagram-caption"><strong>Encapsulation</strong> wraps data and methods into a single unit. Data is private and modified only via public getters and setters.</div>
        </div>
        `;
    },

    // 3. ABSTRACTION: ATM Real Life Machine
    abstraction: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Abstraction: Showing Essential Features, Hiding Complex Details</div>
            <svg viewBox="0 0 760 300" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="userGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#3b82f6"/>
                        <stop offset="100%" stop-color="#1d4ed8"/>
                    </linearGradient>
                    <linearGradient id="hiddenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#1f2937"/>
                        <stop offset="100%" stop-color="#111827"/>
                    </linearGradient>
                </defs>

                <!-- Left: Public Interface (What User Sees) -->
                <rect x="40" y="30" width="300" height="240" rx="16" fill="url(#userGrad)" stroke="#93c5fd" stroke-width="2"/>
                <text x="190" y="60" fill="#ffffff" font-size="15" font-weight="700" text-anchor="middle">PUBLIC INTERFACE (Visible)</text>
                <text x="190" y="80" fill="#bfdbfe" font-size="12" text-anchor="middle">ATM Screen & Keypad / Abstract Class</text>

                <!-- ATM UI Controls -->
                <rect x="65" y="100" width="250" height="36" rx="8" fill="#1e3a8a"/>
                <text x="80" y="123" fill="#60a5fa" font-size="13" font-weight="600">[ Insert Card & PIN ]</text>

                <rect x="65" y="145" width="250" height="36" rx="8" fill="#1e3a8a"/>
                <text x="80" y="168" fill="#34d399" font-size="13" font-weight="600">[ Press "Withdraw ₹2000" ]</text>

                <rect x="65" y="190" width="250" height="36" rx="8" fill="#1e3a8a"/>
                <text x="80" y="213" fill="#fcd34d" font-size="13" font-weight="600">[ Collect Cash & Receipt ]</text>

                <text x="190" y="250" fill="#e0e7ff" font-size="11" text-anchor="middle">User knows WHAT it does, not HOW</text>

                <!-- Middle Divider Wall (Abstraction Barrier) -->
                <line x1="380" y1="20" x2="380" y2="280" stroke="#f43f5e" stroke-width="4" stroke-dasharray="8,6"/>
                <rect x="345" y="125" width="70" height="40" rx="8" fill="#be123c"/>
                <text x="380" y="145" fill="#ffffff" font-size="10" font-weight="800" text-anchor="middle">HIDDEN</text>
                <text x="380" y="158" fill="#ffffff" font-size="9" text-anchor="middle">BARRIER</text>

                <!-- Right: Internal Implementation (What is Hidden) -->
                <rect x="420" y="30" width="300" height="240" rx="16" fill="url(#hiddenGrad)" stroke="#475569" stroke-width="2"/>
                <text x="570" y="60" fill="#f87171" font-size="15" font-weight="700" text-anchor="middle">INTERNAL COMPLEXITY (Hidden)</text>
                <text x="570" y="80" fill="#94a3b8" font-size="12" text-anchor="middle">Hardware Drivers, Bank DB, Network</text>

                <g transform="translate(440, 100)">
                    <rect width="260" height="30" rx="6" fill="#374151"/>
                    <text x="12" y="20" fill="#cbd5e1" font-size="11">⚙️ Encrypted SSL Communication</text>
                </g>

                <g transform="translate(440, 140)">
                    <rect width="260" height="30" rx="6" fill="#374151"/>
                    <text x="12" y="20" fill="#cbd5e1" font-size="11">⚙️ Core Banking SQL Ledger Update</text>
                </g>

                <g transform="translate(440, 180)">
                    <rect width="260" height="30" rx="6" fill="#374151"/>
                    <text x="12" y="20" fill="#cbd5e1" font-size="11">⚙️ Cash Dispenser Stepper Motor Sync</text>
                </g>

                <g transform="translate(440, 220)">
                    <rect width="260" height="30" rx="6" fill="#374151"/>
                    <text x="12" y="20" fill="#cbd5e1" font-size="11">⚙️ Thermal Receipt Printing Protocol</text>
                </g>
            </svg>
            <div class="diagram-caption"><strong>Abstraction</strong> isolates the essential interface from implementation details using abstract classes and pure virtual functions in C++.</div>
        </div>
        `;
    },

    // 4. SINGLE INHERITANCE
    singleInheritance: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Single Inheritance (1 Base → 1 Derived)</div>
            <svg viewBox="0 0 760 280" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="baseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#4f46e5"/>
                        <stop offset="100%" stop-color="#4338ca"/>
                    </linearGradient>
                    <linearGradient id="derivedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#059669"/>
                        <stop offset="100%" stop-color="#047857"/>
                    </linearGradient>
                    <marker id="inheritArrow" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 0 L 5 8 z" fill="#c084fc"/>
                    </marker>
                </defs>

                <!-- Base Class -->
                <g transform="translate(260, 20)">
                    <rect width="240" height="90" rx="12" fill="url(#baseGrad)" stroke="#818cf8" stroke-width="2"/>
                    <text x="120" y="30" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">BASE CLASS: Animal</text>
                    <line x1="10" y1="42" x2="230" y2="42" stroke="#6366f1" stroke-width="1.5"/>
                    <text x="20" y="60" fill="#e0e7ff" font-size="12">+ eat()</text>
                    <text x="20" y="78" fill="#e0e7ff" font-size="12">+ sleep()</text>
                </g>

                <!-- Inheritance Arrow -->
                <path d="M 380 180 L 380 120" fill="none" stroke="#a855f7" stroke-width="3" marker-end="url(#inheritArrow)"/>
                <text x="430" y="150" fill="#d8b4fe" font-size="12" font-weight="600">is-a (inherits)</text>

                <!-- Derived Class -->
                <g transform="translate(230, 185)">
                    <rect width="300" height="85" rx="12" fill="url(#derivedGrad)" stroke="#34d399" stroke-width="2"/>
                    <text x="150" y="26" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">DERIVED CLASS: Dog</text>
                    <line x1="10" y1="36" x2="290" y2="36" stroke="#059669" stroke-width="1.5"/>
                    <text x="20" y="55" fill="#d1fae5" font-size="12">+ bark() [Dog's own function]</text>
                    <text x="20" y="73" fill="#a7f3d0" font-size="11">Inherits: eat() & sleep() without rewriting!</text>
                </g>
            </svg>
            <div class="diagram-caption"><strong>Single Inheritance</strong>: One derived class inherits from exactly one base class. Syntax: <code>class Dog : public Animal {};</code></div>
        </div>
        `;
    },

    // 5. MULTIPLE INHERITANCE
    multipleInheritance: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Multiple Inheritance (2+ Base Classes → 1 Derived Class)</div>
            <svg viewBox="0 0 760 300" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="mArrow" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 0 L 5 8 z" fill="#f59e0b"/>
                    </marker>
                </defs>

                <!-- Base 1 -->
                <g transform="translate(100, 25)">
                    <rect width="230" height="90" rx="12" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
                    <text x="115" y="30" fill="#a5b4fc" font-size="13" font-weight="700" text-anchor="middle">BASE 1: Academic</text>
                    <line x1="10" y1="42" x2="220" y2="42" stroke="#4338ca" stroke-width="1"/>
                    <text x="20" y="62" fill="#ffffff" font-size="12">int marks;</text>
                    <text x="20" y="80" fill="#e0e7ff" font-size="12">+ getMarks()</text>
                </g>

                <!-- Base 2 -->
                <g transform="translate(430, 25)">
                    <rect width="230" height="90" rx="12" fill="#1e1b4b" stroke="#38bdf8" stroke-width="2"/>
                    <text x="115" y="30" fill="#7dd3fc" font-size="13" font-weight="700" text-anchor="middle">BASE 2: Sports</text>
                    <line x1="10" y1="42" x2="220" y2="42" stroke="#0284c7" stroke-width="1"/>
                    <text x="20" y="62" fill="#ffffff" font-size="12">int score;</text>
                    <text x="20" y="80" fill="#e0e7ff" font-size="12">+ getScore()</text>
                </g>

                <!-- Arrows pointing UP to bases -->
                <path d="M 320 200 L 230 125" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#mArrow)"/>
                <path d="M 440 200 L 530 125" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#mArrow)"/>

                <!-- Derived Class -->
                <g transform="translate(250, 195)">
                    <rect width="260" height="95" rx="14" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
                    <text x="130" y="28" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">DERIVED: Result</text>
                    <line x1="10" y1="40" x2="250" y2="40" stroke="#047857" stroke-width="1"/>
                    <text x="20" y="60" fill="#ecfdf5" font-size="12">+ calculateTotal()</text>
                    <text x="20" y="80" fill="#a7f3d0" font-size="11">Accesses: marks AND score</text>
                </g>
            </svg>
            <div class="diagram-caption"><strong>Multiple Inheritance</strong>: One derived class inherits from multiple base classes simultaneously. Syntax: <code>class Result : public Academic, public Sports {};</code></div>
        </div>
        `;
    },

    // 6. MULTILEVEL INHERITANCE
    multilevelInheritance: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Multilevel Inheritance (Chain: Grandparent → Parent → Child)</div>
            <svg viewBox="0 0 760 300" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="mlArrow" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 0 L 5 8 z" fill="#38bdf8"/>
                    </marker>
                </defs>

                <!-- Level 1: Grandparent -->
                <g transform="translate(260, 15)">
                    <rect width="240" height="70" rx="10" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
                    <text x="120" y="28" fill="#a5b4fc" font-size="13" font-weight="700" text-anchor="middle">CLASS A (Grandparent): Vehicle</text>
                    <text x="120" y="52" fill="#e0e7ff" font-size="12" text-anchor="middle">+ fuelType, speed</text>
                </g>

                <path d="M 380 115 L 380 92" fill="none" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#mlArrow)"/>

                <!-- Level 2: Parent -->
                <g transform="translate(260, 115)">
                    <rect width="240" height="70" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
                    <text x="120" y="28" fill="#7dd3fc" font-size="13" font-weight="700" text-anchor="middle">CLASS B (Parent): FourWheeler</text>
                    <text x="120" y="52" fill="#e2e8f0" font-size="12" text-anchor="middle">+ wheelsCount = 4</text>
                </g>

                <path d="M 380 215 L 380 192" fill="none" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#mlArrow)"/>

                <!-- Level 3: Child -->
                <g transform="translate(260, 215)">
                    <rect width="240" height="75" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
                    <text x="120" y="28" fill="#6ee7b7" font-size="13" font-weight="700" text-anchor="middle">CLASS C (Child): ElectricCar</text>
                    <text x="120" y="50" fill="#ecfdf5" font-size="12" text-anchor="middle">+ batteryCapacity</text>
                    <text x="120" y="66" fill="#a7f3d0" font-size="10" text-anchor="middle">(Inherits properties from BOTH A and B)</text>
                </g>
            </svg>
            <div class="diagram-caption"><strong>Multilevel Inheritance</strong> forms an inheritance ladder where a derived class acts as a base class for another derived class.</div>
        </div>
        `;
    },

    // 7. HIERARCHICAL INHERITANCE
    hierarchicalInheritance: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Hierarchical Inheritance (1 Base → Multiple Derived Classes)</div>
            <svg viewBox="0 0 760 300" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="hArrow" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 0 L 5 8 z" fill="#a855f7"/>
                    </marker>
                </defs>

                <!-- Base Class -->
                <g transform="translate(270, 20)">
                    <rect width="220" height="75" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
                    <text x="110" y="32" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">BASE CLASS: Shape</text>
                    <text x="110" y="55" fill="#c7d2fe" font-size="12" text-anchor="middle">+ area(), + display()</text>
                </g>

                <!-- Branching Lines -->
                <path d="M 130 195 L 340 105" fill="none" stroke="#a855f7" stroke-width="2.5" marker-end="url(#hArrow)"/>
                <path d="M 380 195 L 380 105" fill="none" stroke="#a855f7" stroke-width="2.5" marker-end="url(#hArrow)"/>
                <path d="M 630 195 L 420 105" fill="none" stroke="#a855f7" stroke-width="2.5" marker-end="url(#hArrow)"/>

                <!-- Child 1: Circle -->
                <g transform="translate(30, 200)">
                    <rect width="200" height="75" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="100" y="28" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">Child 1: Circle</text>
                    <text x="100" y="50" fill="#cbd5e1" font-size="11" text-anchor="middle">double radius;</text>
                    <text x="100" y="65" fill="#94a3b8" font-size="10" text-anchor="middle">area() = π * r²</text>
                </g>

                <!-- Child 2: Rectangle -->
                <g transform="translate(280, 200)">
                    <rect width="200" height="75" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="1.8"/>
                    <text x="100" y="28" fill="#34d399" font-size="13" font-weight="700" text-anchor="middle">Child 2: Rectangle</text>
                    <text x="100" y="50" fill="#cbd5e1" font-size="11" text-anchor="middle">double length, width;</text>
                    <text x="100" y="65" fill="#94a3b8" font-size="10" text-anchor="middle">area() = l * w</text>
                </g>

                <!-- Child 3: Triangle -->
                <g transform="translate(530, 200)">
                    <rect width="200" height="75" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.8"/>
                    <text x="100" y="28" fill="#f59e0b" font-size="13" font-weight="700" text-anchor="middle">Child 3: Triangle</text>
                    <text x="100" y="50" fill="#cbd5e1" font-size="11" text-anchor="middle">double base, height;</text>
                    <text x="100" y="65" fill="#94a3b8" font-size="10" text-anchor="middle">area() = 0.5 * b * h</text>
                </g>
            </svg>
            <div class="diagram-caption"><strong>Hierarchical Inheritance</strong>: Multiple derived classes inherit from a single common parent class.</div>
        </div>
        `;
    },

    // 8. DIAMOND PROBLEM & HYBRID INHERITANCE
    diamondProblem: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> The Diamond Problem & Solution (Virtual Inheritance)</div>
            <svg viewBox="0 0 760 330" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="dArrow" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 0 L 5 8 z" fill="#ec4899"/>
                    </marker>
                </defs>

                <!-- Top Base Class A -->
                <g transform="translate(270, 15)">
                    <rect width="220" height="60" rx="10" fill="#312e81" stroke="#a78bfa" stroke-width="2"/>
                    <text x="110" y="28" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">BASE CLASS: Person</text>
                    <text x="110" y="48" fill="#c7d2fe" font-size="12" text-anchor="middle">string name; (1 Copy)</text>
                </g>

                <!-- Arrows from B & C to A -->
                <path d="M 200 120 L 320 80" fill="none" stroke="#ec4899" stroke-width="2" marker-end="url(#dArrow)"/>
                <path d="M 560 120 L 440 80" fill="none" stroke="#ec4899" stroke-width="2" marker-end="url(#dArrow)"/>

                <!-- Intermediate Class B -->
                <g transform="translate(80, 120)">
                    <rect width="230" height="75" rx="10" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="115" y="26" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">class Student : virtual public Person</text>
                    <text x="115" y="46" fill="#93c5fd" font-size="11" text-anchor="middle">Inherits 'name'</text>
                    <text x="115" y="62" fill="#cbd5e1" font-size="10" text-anchor="middle">Virtual pointer vptr added</text>
                </g>

                <!-- Intermediate Class C -->
                <g transform="translate(450, 120)">
                    <rect width="230" height="75" rx="10" fill="#1e1b4b" stroke="#34d399" stroke-width="1.8"/>
                    <text x="115" y="26" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">class Faculty : virtual public Person</text>
                    <text x="115" y="46" fill="#6ee7b7" font-size="11" text-anchor="middle">Inherits 'name'</text>
                    <text x="115" y="62" fill="#cbd5e1" font-size="10" text-anchor="middle">Virtual pointer vptr added</text>
                </g>

                <!-- Arrows from D to B & C -->
                <path d="M 330 235 L 230 200" fill="none" stroke="#ec4899" stroke-width="2" marker-end="url(#dArrow)"/>
                <path d="M 430 235 L 530 200" fill="none" stroke="#ec4899" stroke-width="2" marker-end="url(#dArrow)"/>

                <!-- Bottom Derived Class D -->
                <g transform="translate(240, 235)">
                    <rect width="280" height="80" rx="12" fill="#064e3b" stroke="#22c55e" stroke-width="2"/>
                    <text x="140" y="26" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">class TeachingAssistant :</text>
                    <text x="140" y="44" fill="#86efac" font-size="12" text-anchor="middle">public Student, public Faculty</text>
                    <text x="140" y="66" fill="#bbf7d0" font-size="11" font-weight="700" text-anchor="middle">✓ Only 1 copy of 'name' exists (No Ambiguity!)</text>
                </g>
            </svg>
            <div class="diagram-caption">Without <code>virtual</code>, TeachingAssistant receives duplicate copies of Person, triggering ambiguity errors. <strong>Virtual Base Classes</strong> ensure a single shared instance.</div>
        </div>
        `;
    },

    // 9. POLYMORPHISM CLASSIFICATION
    polymorphism: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Polymorphism: Compile-Time vs Run-Time Forms</div>
            <svg viewBox="0 0 760 300" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <!-- Root -->
                <g transform="translate(270, 15)">
                    <rect width="220" height="55" rx="10" fill="#4338ca" stroke="#818cf8" stroke-width="2"/>
                    <text x="110" y="28" fill="#ffffff" font-size="14" font-weight="800" text-anchor="middle">POLYMORPHISM</text>
                    <text x="110" y="46" fill="#c7d2fe" font-size="11" text-anchor="middle">"Many Forms" (Poly + Morph)</text>
                </g>

                <!-- Branching Lines -->
                <path d="M 320 70 L 190 110" fill="none" stroke="#6366f1" stroke-width="2.5"/>
                <path d="M 440 70 L 570 110" fill="none" stroke="#6366f1" stroke-width="2.5"/>

                <!-- Left: Compile Time -->
                <g transform="translate(60, 110)">
                    <rect width="280" height="75" rx="12" fill="#1e1b4b" stroke="#38bdf8" stroke-width="2"/>
                    <text x="140" y="26" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">COMPILE-TIME POLYMORPHISM</text>
                    <text x="140" y="46" fill="#93c5fd" font-size="11" text-anchor="middle">Static / Early Binding</text>
                    <text x="140" y="64" fill="#cbd5e1" font-size="11" text-anchor="middle">Resolved by Compiler (Faster execution)</text>
                </g>

                <!-- Left Sub-leaves -->
                <g transform="translate(40, 205)">
                    <rect width="150" height="70" rx="8" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/>
                    <text x="75" y="25" fill="#60a5fa" font-size="11" font-weight="700" text-anchor="middle">Function Overloading</text>
                    <text x="75" y="45" fill="#cbd5e1" font-size="10" text-anchor="middle">add(int, int)</text>
                    <text x="75" y="60" fill="#cbd5e1" font-size="10" text-anchor="middle">add(double, double)</text>
                </g>

                <g transform="translate(205, 205)">
                    <rect width="150" height="70" rx="8" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/>
                    <text x="75" y="25" fill="#60a5fa" font-size="11" font-weight="700" text-anchor="middle">Operator Overloading</text>
                    <text x="75" y="45" fill="#cbd5e1" font-size="10" text-anchor="middle">c3 = c1 + c2;</text>
                    <text x="75" y="60" fill="#cbd5e1" font-size="10" text-anchor="middle">Custom operator+()</text>
                </g>

                <!-- Right: Run Time -->
                <g transform="translate(420, 110)">
                    <rect width="280" height="75" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
                    <text x="140" y="26" fill="#34d399" font-size="13" font-weight="700" text-anchor="middle">RUN-TIME POLYMORPHISM</text>
                    <text x="140" y="46" fill="#86efac" font-size="11" text-anchor="middle">Dynamic / Late Binding</text>
                    <text x="140" y="64" fill="#cbd5e1" font-size="11" text-anchor="middle">Resolved at runtime via vptr & vtable</text>
                </g>

                <!-- Right Sub-leaves -->
                <g transform="translate(410, 205)">
                    <rect width="140" height="70" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
                    <text x="70" y="25" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">Virtual Functions</text>
                    <text x="70" y="45" fill="#cbd5e1" font-size="10" text-anchor="middle">virtual void speak()</text>
                    <text x="70" y="60" fill="#cbd5e1" font-size="10" text-anchor="middle">Base* ptr = new Dog()</text>
                </g>

                <g transform="translate(565, 205)">
                    <rect width="150" height="70" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
                    <text x="75" y="25" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">Function Overriding</text>
                    <text x="75" y="45" fill="#cbd5e1" font-size="10" text-anchor="middle">Derived redefines</text>
                    <text x="75" y="60" fill="#cbd5e1" font-size="10" text-anchor="middle">Base member function</text>
                </g>
            </svg>
            <div class="diagram-caption"><strong>Polymorphism</strong> allows one interface to control multiple actions. Compile-time uses function signatures, runtime uses <code>virtual</code> dispatch.</div>
        </div>
        `;
    },

    // 10. CONSTRUCTOR & DESTRUCTOR LIFECYCLE
    constructorDestructor: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Object Lifecycle: Constructor & Destructor</div>
            <svg viewBox="0 0 760 260" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="birthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#10b981"/>
                        <stop offset="100%" stop-color="#047857"/>
                    </linearGradient>
                    <linearGradient id="lifeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#3b82f6"/>
                        <stop offset="100%" stop-color="#1d4ed8"/>
                    </linearGradient>
                    <linearGradient id="deathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ef4444"/>
                        <stop offset="100%" stop-color="#b91c1c"/>
                    </linearGradient>
                    <marker id="lifeArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#cbd5e1"/>
                    </marker>
                </defs>

                <!-- Stage 1: Constructor -->
                <g transform="translate(40, 40)">
                    <rect width="200" height="170" rx="14" fill="url(#birthGrad)" stroke="#6ee7b7" stroke-width="2"/>
                    <circle cx="100" cy="40" r="24" fill="#065f46"/>
                    <text x="100" y="47" fill="#ffffff" font-size="20" font-weight="900" text-anchor="middle">★</text>
                    <text x="100" y="86" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">CONSTRUCTOR</text>
                    <text x="100" y="106" fill="#ecfdf5" font-size="12" text-anchor="middle">ClassName()</text>
                    <text x="100" y="130" fill="#d1fae5" font-size="11" text-anchor="middle">• Invoked automatically</text>
                    <text x="100" y="146" fill="#d1fae5" font-size="11" text-anchor="middle">• Allocates memory</text>
                    <text x="100" y="162" fill="#d1fae5" font-size="11" text-anchor="middle">• Initializes data</text>
                </g>

                <!-- Arrow 1 -->
                <path d="M 255 125 L 285 125" fill="none" stroke="#cbd5e1" stroke-width="3" marker-end="url(#lifeArrow)"/>

                <!-- Stage 2: In-Use Object -->
                <g transform="translate(295, 40)">
                    <rect width="180" height="170" rx="14" fill="url(#lifeGrad)" stroke="#93c5fd" stroke-width="2"/>
                    <circle cx="90" cy="40" r="24" fill="#1e3a8a"/>
                    <text x="90" y="47" fill="#ffffff" font-size="18" font-weight="900" text-anchor="middle">⚡</text>
                    <text x="90" y="86" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">OBJECT IN RAM</text>
                    <text x="90" y="106" fill="#bfdbfe" font-size="12" text-anchor="middle">Active Scope { ... }</text>
                    <text x="90" y="130" fill="#e0e7ff" font-size="11" text-anchor="middle">• Executes methods</text>
                    <text x="90" y="146" fill="#e0e7ff" font-size="11" text-anchor="middle">• Stores dynamic state</text>
                    <text x="90" y="162" fill="#e0e7ff" font-size="11" text-anchor="middle">• Handles calculations</text>
                </g>

                <!-- Arrow 2 -->
                <path d="M 490 125 L 520 125" fill="none" stroke="#cbd5e1" stroke-width="3" marker-end="url(#lifeArrow)"/>

                <!-- Stage 3: Destructor -->
                <g transform="translate(530, 40)">
                    <rect width="190" height="170" rx="14" fill="url(#deathGrad)" stroke="#fca5a5" stroke-width="2"/>
                    <circle cx="95" cy="40" r="24" fill="#7f1d1d"/>
                    <text x="95" y="47" fill="#ffffff" font-size="20" font-weight="900" text-anchor="middle">†</text>
                    <text x="95" y="86" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">DESTRUCTOR</text>
                    <text x="95" y="106" fill="#fee2e2" font-size="12" text-anchor="middle">~ClassName()</text>
                    <text x="95" y="130" fill="#fecaca" font-size="11" text-anchor="middle">• Called on scope exit</text>
                    <text x="95" y="146" fill="#fecaca" font-size="11" text-anchor="middle">• Frees heap memory</text>
                    <text x="95" y="162" fill="#fecaca" font-size="11" text-anchor="middle">• Closes open files</text>
                </g>
            </svg>
            <div class="diagram-caption">Constructor runs on creation (LIFO order: Base first). Destructor runs on termination (Derived first, base last).</div>
        </div>
        `;
    },

    // 11. ACCESS SPECIFIERS MATRIX
    accessSpecifiers: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> C++ Access Specifiers Visibility Matrix</div>
            <svg viewBox="0 0 760 270" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <!-- Header Row -->
                <rect x="30" y="30" width="180" height="45" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
                <text x="120" y="58" fill="#a5b4fc" font-size="13" font-weight="700" text-anchor="middle">ACCESS SPECIFIER</text>

                <rect x="220" y="30" width="160" height="45" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
                <text x="300" y="58" fill="#a5b4fc" font-size="13" font-weight="700" text-anchor="middle">Same Class</text>

                <rect x="390" y="30" width="160" height="45" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
                <text x="470" y="58" fill="#a5b4fc" font-size="13" font-weight="700" text-anchor="middle">Derived Class</text>

                <rect x="560" y="30" width="170" height="45" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
                <text x="645" y="58" fill="#a5b4fc" font-size="13" font-weight="700" text-anchor="middle">Outside Class (main)</text>

                <!-- Row 1: Public -->
                <rect x="30" y="85" width="180" height="50" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
                <text x="120" y="115" fill="#a7f3d0" font-size="14" font-weight="800" text-anchor="middle">public:</text>

                <rect x="220" y="85" width="160" height="50" rx="8" fill="#065f46"/>
                <text x="300" y="115" fill="#6ee7b7" font-size="14" font-weight="700" text-anchor="middle">✓ YES</text>

                <rect x="390" y="85" width="160" height="50" rx="8" fill="#065f46"/>
                <text x="470" y="115" fill="#6ee7b7" font-size="14" font-weight="700" text-anchor="middle">✓ YES</text>

                <rect x="560" y="85" width="170" height="50" rx="8" fill="#065f46"/>
                <text x="645" y="115" fill="#6ee7b7" font-size="14" font-weight="700" text-anchor="middle">✓ YES</text>

                <!-- Row 2: Protected -->
                <rect x="30" y="145" width="180" height="50" rx="8" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="120" y="175" fill="#fde68a" font-size="14" font-weight="800" text-anchor="middle">protected:</text>

                <rect x="220" y="145" width="160" height="50" rx="8" fill="#065f46"/>
                <text x="300" y="175" fill="#6ee7b7" font-size="14" font-weight="700" text-anchor="middle">✓ YES</text>

                <rect x="390" y="145" width="160" height="50" rx="8" fill="#065f46"/>
                <text x="470" y="175" fill="#6ee7b7" font-size="14" font-weight="700" text-anchor="middle">✓ YES</text>

                <rect x="560" y="145" width="170" height="50" rx="8" fill="#7f1d1d"/>
                <text x="645" y="175" fill="#fca5a5" font-size="14" font-weight="700" text-anchor="middle">✕ NO</text>

                <!-- Row 3: Private -->
                <rect x="30" y="205" width="180" height="50" rx="8" fill="#831843" stroke="#f43f5e" stroke-width="1.5"/>
                <text x="120" y="235" fill="#fbcfe8" font-size="14" font-weight="800" text-anchor="middle">private: (Default)</text>

                <rect x="220" y="205" width="160" height="50" rx="8" fill="#065f46"/>
                <text x="300" y="235" fill="#6ee7b7" font-size="14" font-weight="700" text-anchor="middle">✓ YES</text>

                <rect x="390" y="205" width="160" height="50" rx="8" fill="#7f1d1d"/>
                <text x="470" y="235" fill="#fca5a5" font-size="14" font-weight="700" text-anchor="middle">✕ NO</text>

                <rect x="560" y="205" width="170" height="50" rx="8" fill="#7f1d1d"/>
                <text x="645" y="235" fill="#fca5a5" font-size="14" font-weight="700" text-anchor="middle">✕ NO</text>
            </svg>
            <div class="diagram-caption">In C++, class members are <strong>private by default</strong>. <code>protected</code> allows child classes to access parent properties while still shielding them from outside code.</div>
        </div>
        `;
    },

    // 12. STRUCTURE OF C++ PROGRAM
    structureOfCpp: function() {
        return `
        <div class="diagram-wrapper">
            <div class="diagram-title"><span class="badge">Diagram</span> Standard Structure of a C++ OOP Program</div>
            <svg viewBox="0 0 760 300" class="oop-svg" xmlns="http://www.w3.org/2000/svg">
                <!-- Section 1 -->
                <g transform="translate(60, 20)">
                    <rect width="640" height="42" rx="8" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
                    <text x="20" y="26" fill="#a5b4fc" font-size="13" font-weight="700">1. Header Files & Preprocessor Directives</text>
                    <text x="360" y="26" fill="#c7d2fe" font-size="12">#include &lt;iostream&gt;  using namespace std;</text>
                </g>

                <!-- Section 2 -->
                <g transform="translate(60, 72)">
                    <rect width="640" height="110" rx="8" fill="#172554" stroke="#60a5fa" stroke-width="1.5"/>
                    <text x="20" y="26" fill="#93c5fd" font-size="13" font-weight="700">2. Class Declaration & Definition</text>
                    <text x="30" y="50" fill="#e2e8f0" font-size="12">class Student {</text>
                    <text x="50" y="70" fill="#fca5a5" font-size="12">    private: int rollNo; double marks;  // Data members</text>
                    <text x="50" y="90" fill="#86efac" font-size="12">    public:  void input(); void display(); // Member functions</text>
                    <text x="30" y="105" fill="#e2e8f0" font-size="12">};</text>
                </g>

                <!-- Section 3 -->
                <g transform="translate(60, 192)">
                    <rect width="640" height="92" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
                    <text x="20" y="24" fill="#a7f3d0" font-size="13" font-weight="700">3. main() Function (Execution Entry Point)</text>
                    <text x="30" y="46" fill="#e2e8f0" font-size="12">int main() {</text>
                    <text x="50" y="64" fill="#fde047" font-size="12">    Student s1;  // Object creation</text>
                    <text x="50" y="80" fill="#fde047" font-size="12">    s1.input();  s1.display();  return 0;</text>
                    <text x="30" y="88" fill="#e2e8f0" font-size="12">}</text>
                </g>
            </svg>
            <div class="diagram-caption">C++ execution begins at <code>main()</code>. Classes define blueprints above <code>main()</code>, and objects are instantiated within it.</div>
        </div>
        `;
    },

    // Helper to get diagram by ID or name
    get: function(diagramId) {
        if (this[diagramId] && typeof this[diagramId] === 'function') {
            return this[diagramId]();
        }
        return '';
    }
};

window.OOPDiagrams = OOPDiagrams;
