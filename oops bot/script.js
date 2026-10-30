/**
 * OOP MASTER AI - Main Client Controller & Intelligent Chat Engine
 * Handles Navigation, NLP Query Processing, SVG Diagram Injector,
 * Programs Playground, MCQ Quiz System, and Theme Persistence.
 */

(function () {
    "use strict";

    // Application State
    const AppState = {
        currentView: "chat",
        theme: localStorage.getItem("oop_theme") || "dark",
        chatSessions: JSON.parse(localStorage.getItem("oop_chat_history") || "[]"),
        currentSessionId: null,
        quiz: {
            currentIndex: 0,
            answers: {},
            score: 0,
            isCompleted: false
        }
    };

    // DOM Elements Cache
    const DOM = {
        appContainer: document.querySelector(".app-container"),
        sidebar: document.getElementById("sidebar"),
        btnToggleSidebar: document.getElementById("btn-toggle-sidebar"),
        btnNewChat: document.getElementById("btn-new-chat"),
        navItems: document.querySelectorAll(".sidebar-nav .nav-item[data-view]"),
        navAbout: document.getElementById("nav-about"),
        chatHistoryList: document.getElementById("chat-history-list"),
        
        currentViewTitle: document.getElementById("current-view-title"),
        currentViewSubtitle: document.getElementById("current-view-subtitle"),
        viewScreens: document.querySelectorAll(".view-screen"),
        
        // Header Controls
        btnThemeToggle: document.getElementById("btn-theme-toggle"),
        btnClearChat: document.getElementById("btn-clear-chat"),
        btnDownloadNotes: document.getElementById("btn-download-notes"),
        btnOpenSearch: document.getElementById("btn-open-search"),
        
        // Chat View
        messagesContainer: document.getElementById("chat-messages-container"),
        welcomeHero: document.getElementById("welcome-hero"),
        chatTextarea: document.getElementById("chat-textarea"),
        btnSendMessage: document.getElementById("btn-send-message"),
        quickPromptCards: document.querySelectorAll(".quick-prompt-card"),
        
        // Units & Topics
        unitsGrid: document.getElementById("units-catalog-grid"),
        allTopicsGrid: document.getElementById("all-topics-grid"),
        topicUnitTabs: document.getElementById("topic-unit-tabs"),
        topicsSearchInput: document.getElementById("topics-search-input"),
        
        // Programs
        programsContainer: document.getElementById("programs-list-container"),
        programTabs: document.getElementById("program-category-tabs"),
        programsSearchInput: document.getElementById("programs-search-input"),
        
        // Real-Life
        realLifeGrid: document.getElementById("real-life-grid"),
        
        // Exam
        examTabs: document.getElementById("exam-filter-tabs"),
        examContent: document.getElementById("exam-questions-content"),
        
        // Quiz
        quizCard: document.getElementById("quiz-question-card"),
        quizCounter: document.getElementById("quiz-question-counter"),
        quizLiveScore: document.getElementById("quiz-live-score"),
        btnQuizPrev: document.getElementById("btn-quiz-prev"),
        btnQuizNext: document.getElementById("btn-quiz-next"),
        quizActiveContainer: document.getElementById("quiz-active-container"),
        quizResultHero: document.getElementById("quiz-result-hero"),
        resultScore: document.getElementById("result-score"),
        resultBadgeText: document.getElementById("result-badge-text"),
        resultFeedbackText: document.getElementById("result-feedback-text"),
        btnRestartQuiz: document.getElementById("btn-restart-quiz"),
        
        // Modals
        searchModal: document.getElementById("search-modal"),
        btnCloseSearch: document.getElementById("btn-close-search"),
        globalSearchInput: document.getElementById("global-search-input"),
        searchResultsList: document.getElementById("search-results-list"),
        
        aboutModal: document.getElementById("about-modal"),
        btnCloseAbout: document.getElementById("btn-close-about")
    };

    /* ==========================================================================
       INITIALIZATION
       ========================================================================== */
    function init() {
        applyTheme(AppState.theme);
        setupEventListeners();
        renderChatHistoryList();
        renderUnitsCatalog();
        renderAllTopicsGrid("all", "");
        renderPrograms("all", "");
        renderRealLifeExamples();
        renderExamSection("2m");
        initQuiz();
    }

    /* ==========================================================================
       THEME & RESPONSIVE TOGGLES
       ========================================================================== */
    function applyTheme(theme) {
        AppState.theme = theme;
        localStorage.setItem("oop_theme", theme);
        if (theme === "light") {
            document.body.classList.add("light-theme");
            DOM.btnThemeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>';
        } else {
            document.body.classList.remove("light-theme");
            DOM.btnThemeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }

    function toggleTheme() {
        const newTheme = AppState.theme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
    }

    function toggleSidebar() {
        DOM.sidebar.classList.toggle("open");
    }

    /* ==========================================================================
       VIEW SWITCHING ROUTER
       ========================================================================== */
    const viewMetadata = {
        chat: { title: "OOP Master AI", subtitle: "Your Personal C++ OOP Learning Assistant" },
        learn: { title: "Learn OOP (Curriculum Units)", subtitle: "Units 1 to 6 Syllabus Browser" },
        topics: { title: "All Topics Library", subtitle: "Searchable Knowledge Base of 50+ OOP Concepts" },
        programs: { title: "C++ Programs Playground", subtitle: "30+ Tested C++ Example Programs with Terminal Outputs" },
        examples: { title: "Real-Life Analogies", subtitle: "Everyday Visual Models of Object-Oriented Principles" },
        exam: { title: "Exam Preparation Suite", subtitle: "2 Marks, 5 Marks, 10 Marks & Comparative Questions" },
        quiz: { title: "MCQ Practice Quiz", subtitle: "35 High-Yield C++ Questions with Instant Explanations" }
    };

    function switchView(viewName) {
        if (!viewMetadata[viewName]) return;
        AppState.currentView = viewName;

        // Update Nav Link Active States
        DOM.navItems.forEach(item => {
            if (item.getAttribute("data-view") === viewName) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // Update Screens
        DOM.viewScreens.forEach(screen => {
            if (screen.id === `view-${viewName}`) {
                screen.classList.add("active");
            } else {
                screen.classList.remove("active");
            }
        });

        // Update Header Titles
        DOM.currentViewTitle.textContent = viewMetadata[viewName].title;
        DOM.currentViewSubtitle.textContent = viewMetadata[viewName].subtitle;

        // Auto close mobile sidebar
        DOM.sidebar.classList.remove("open");
    }

    /* ==========================================================================
       INTELLIGENT MULTI-LINGUAL CHATBOT ENGINE
       ========================================================================== */
    function handleSendMessage(customText) {
        const text = (customText || DOM.chatTextarea.value).trim();
        if (!text) return;

        // Hide welcome hero on first message
        if (DOM.welcomeHero) {
            DOM.welcomeHero.style.display = "none";
        }

        // 1. Render User Message
        appendUserMessage(text);
        DOM.chatTextarea.value = "";
        DOM.chatTextarea.style.height = "auto";
        DOM.btnSendMessage.disabled = true;

        // 2. Show Typing Indicator
        const typingEl = appendTypingIndicator();
        scrollToBottom();

        // 3. Process Query & Generate Response
        setTimeout(() => {
            typingEl.remove();
            const responseData = processUserQuery(text);
            appendBotMessage(responseData);
            saveChatSession(text, responseData.title || "OOP Query");
            scrollToBottom();
            DOM.btnSendMessage.disabled = false;
        }, 500);
    }

    // Natural Language Processing & Intent Matcher
    function processUserQuery(rawQuery) {
        const query = rawQuery.toLowerCase().trim();

        // Check language / mode preferences
        const isMarathi = query.includes("marathi") || query.includes("मराठी") || query.includes("सांगा") || query.includes("काय") || query.includes("माहिती") || query.includes("फरक");
        const isHinglish = query.includes("kya hai") || query.includes("samjhao") || query.includes("batao") || query.includes("kaise") || query.includes("faayde");
        const isExam2M = query.includes("2 marks") || query.includes("2 mark") || query.includes("short definition");
        const isExam5M = query.includes("5 marks") || query.includes("5 mark");
        const isExam10M = query.includes("10 marks") || query.includes("10 mark") || query.includes("long answer") || query.includes("essay");
        const isDifference = query.includes("difference") || query.includes("vs") || query.includes("compare") || query.includes("फरक") || query.includes("antar");
        const isCodeOnly = query.includes("program") || query.includes("code") || query.includes("example") || query.includes("syntax");

        // Common multi-word compound concept detection
        const compoundConcepts = [
            { term: "multiple inheritance", key: "multiple_inheritance" },
            { term: "multilevel inheritance", key: "multilevel_inheritance" },
            { term: "hierarchical inheritance", key: "hierarchical_inheritance" },
            { term: "single inheritance", key: "single_inheritance" },
            { term: "hybrid inheritance", key: "hybrid_inheritance" },
            { term: "diamond problem", key: "diamond_problem" },
            { term: "function overloading", key: "function_overloading" },
            { term: "operator overloading", key: "operator_overloading" },
            { term: "function overriding", key: "function_overriding" },
            { term: "pure virtual", key: "virtual_function" },
            { term: "virtual function", key: "virtual_function" },
            { term: "friend function", key: "friend_function" },
            { term: "this pointer", key: "this_pointer" },
            { term: "copy constructor", key: "copy_constructor" },
            { term: "parameterized constructor", key: "param_constructor" },
            { term: "default constructor", key: "default_constructor" },
            { term: "pop vs oop", key: "pop_vs_oop" },
            { term: "class and object", key: "diff_class_and_object" },
            { term: "class vs object", key: "diff_class_and_object" },
            { term: "constructor vs destructor", key: "constructor_vs_destructor" },
            { term: "access specifier", key: "access_specifiers" },
            { term: "dynamic memory", key: "dynamic_memory" },
            { term: "exception handling", key: "exception_handling" },
            { term: "file handling", key: "file_handling_u6" },
            { term: "template", key: "templates_cpp" }
        ];

        // 1. Check direct compound matches
        for (const item of compoundConcepts) {
            if (query.includes(item.term)) {
                // Check if in OOPKnowledge
                if (window.OOPKnowledge && window.OOPKnowledge[item.key]) {
                    return formatKnowledgeResponse(window.OOPKnowledge[item.key], { isMarathi, isHinglish, isExam2M, isExam5M, isExam10M, isDifference, isCodeOnly, rawQuery });
                }
                // Check if in OOPUnits
                for (const u of (window.OOPUnits || [])) {
                    for (const t of u.topics) {
                        if (t.id === item.key || t.title.toLowerCase().includes(item.term)) {
                            return formatUnitTopicResponse(t, { isMarathi, isHinglish });
                        }
                    }
                }
            }
        }

        // 2. Score match across OOPKnowledge
        let bestKnowledgeKey = null;
        let highestScore = 0;

        for (const [key, data] of Object.entries(window.OOPKnowledge || {})) {
            let score = 0;
            const titleLower = data.title.toLowerCase();

            // Direct match
            if (query.includes(titleLower)) score += 20;
            if (data.keywords && data.keywords.some(kw => query.includes(kw))) score += 15;
            if (isMarathi && data.marathiQuery && data.marathiQuery.some(mq => query.includes(mq))) score += 15;
            if (isHinglish && data.hinglishQuery && data.hinglishQuery.some(hq => query.includes(hq))) score += 15;

            // Word token match with stop words filtering
            const stopWords = new Set(["explain", "what", "is", "the", "with", "example", "simple", "give", "me", "for", "in", "a", "an", "and", "c++", "cpp", "please", "about"]);
            const queryWords = query.split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));
            for (const word of queryWords) {
                if (titleLower.includes(word)) score += 5;
                if (data.keywords && data.keywords.some(k => k.includes(word))) score += 4;
            }

            if (score > highestScore) {
                highestScore = score;
                bestKnowledgeKey = key;
            }
        }

        if (highestScore >= 5 && bestKnowledgeKey) {
            const topic = window.OOPKnowledge[bestKnowledgeKey];
            return formatKnowledgeResponse(topic, { isMarathi, isHinglish, isExam2M, isExam5M, isExam10M, isDifference, isCodeOnly, rawQuery });
        }

        // 3. Search through OOPUnits topic database
        let matchedUnitTopic = null;
        let unitScore = 0;
        (window.OOPUnits || []).forEach(u => {
            u.topics.forEach(t => {
                let s = 0;
                const tTitle = t.title.toLowerCase();
                if (query.includes(tTitle)) s += 20;
                if (query.includes(t.id.toLowerCase())) s += 15;
                
                const stopWords = new Set(["explain", "what", "is", "the", "with", "example", "simple", "give", "me", "for", "in", "a", "an", "and", "c++", "cpp"]);
                const words = query.split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));
                words.forEach(w => {
                    if (tTitle.includes(w)) s += 4;
                });

                if (s > unitScore) {
                    unitScore = s;
                    matchedUnitTopic = t;
                }
            });
        });

        if (unitScore >= 4 && matchedUnitTopic) {
            return formatUnitTopicResponse(matchedUnitTopic, { isMarathi, isHinglish });
        }

        // 4. Search in OOPPrograms
        const matchedProgram = (window.OOPPrograms || []).find(p => {
            const pTitle = p.title.toLowerCase();
            return query.includes(pTitle) || 
                   (pTitle.includes("overloading") && query.includes("overloading")) ||
                   (pTitle.includes("template") && query.includes("template")) ||
                   (pTitle.includes("file") && query.includes("file")) ||
                   (pTitle.includes("exception") && query.includes("exception"));
        });
        if (matchedProgram) {
            return {
                title: matchedProgram.title,
                category: matchedProgram.category,
                content: `<p><strong>Explanation:</strong> ${matchedProgram.explanation}</p>`,
                code: matchedProgram.code,
                output: matchedProgram.output,
                related: ["Explain this concept in detail", "Show diagram for this", "What are the advantages?"]
            };
        }

        // 5. Fallback: Educational Guidance with Interactive Quick Links
        return {
            title: "C++ Knowledge Assistant",
            category: "Guidance",
            content: `
                <p>I am your specialized <strong>C++ Object-Oriented Programming Teacher</strong>. I couldn't find an exact match for <em>"${escapeHtml(rawQuery)}"</em>.</p>
                <p>Try asking any of these fundamental OOP topics:</p>
                <ul>
                    <li><strong>"What is Inheritance and its types?"</strong></li>
                    <li><strong>"Difference between Class and Object"</strong></li>
                    <li><strong>"Explain Encapsulation in Marathi"</strong></li>
                    <li><strong>"Give me 5 marks answer for Constructor"</strong></li>
                    <li><strong>"Explain Polymorphism with diagram"</strong></li>
                    <li><strong>"What is the Diamond Problem in C++?"</strong></li>
                </ul>
            `,
            related: [
                "What is Object Oriented Programming?",
                "Difference between POP and OOP",
                "Explain Virtual Functions",
                "What is Abstraction?"
            ]
        };
    }

    // Helper: Formatter for Knowledge Base Matches
    function formatKnowledgeResponse(topic, options) {
        let contentHtml = "";

        // Multi-lingual conditional content
        if (options.isMarathi && topic.marathi) {
            contentHtml += `
                <div class="analogy-card" style="background: rgba(139, 92, 246, 0.12); border-color: var(--primary-light);">
                    <div class="analogy-icon"><i class="fa-solid fa-language"></i></div>
                    <div class="analogy-content">
                        <div class="analogy-title">मराठीत स्पष्टीकरण (Marathi Explanation):</div>
                        <p style="margin: 4px 0 0; color: #f1f5f9; font-size: 0.95rem;">${topic.marathi}</p>
                    </div>
                </div>
            `;
        } else if (options.isHinglish && topic.hinglish) {
            contentHtml += `
                <div class="analogy-card" style="background: rgba(16, 185, 129, 0.12); border-color: var(--accent-green);">
                    <div class="analogy-icon"><i class="fa-solid fa-comments"></i></div>
                    <div class="analogy-content">
                        <div class="analogy-title">Hinglish Explanation:</div>
                        <p style="margin: 4px 0 0; color: #ecfdf5; font-size: 0.95rem;">${topic.hinglish}</p>
                    </div>
                </div>
            `;
        }

        // Exam Marks specific formatting
        if (options.isExam2M && topic.exam2M) {
            contentHtml += `
                <div class="marks-badge" style="margin-bottom: 10px;">★ 2 Marks Model Answer</div>
                <div style="background: rgba(255,255,255,0.04); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-amber); margin-bottom: 12px;">
                    <p style="white-space: pre-line;">${topic.exam2M}</p>
                </div>
            `;
        } else if (options.isExam5M && topic.exam5M) {
            contentHtml += `
                <div class="marks-badge" style="margin-bottom: 10px;">★ 5 Marks Model Answer</div>
                <div style="background: rgba(255,255,255,0.04); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-amber); margin-bottom: 12px;">
                    <p style="white-space: pre-line;">${topic.exam5M}</p>
                </div>
            `;
        } else if (options.isExam10M && topic.exam10M) {
            contentHtml += `
                <div class="marks-badge" style="margin-bottom: 10px;">★ 10 Marks Comprehensive Long Answer</div>
                <div style="background: rgba(255,255,255,0.04); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-amber); margin-bottom: 12px;">
                    <p style="white-space: pre-line;">${topic.exam10M}</p>
                </div>
            `;
        }

        // General Deep Explanation
        contentHtml += `
            <p><strong>Definition:</strong> ${topic.definition}</p>
            <p>${topic.explanation}</p>
        `;

        if (topic.importantPoints && topic.importantPoints.length > 0) {
            contentHtml += `<h4>Important Points:</h4><ul>`;
            topic.importantPoints.forEach(pt => {
                contentHtml += `<li>${pt}</li>`;
            });
            contentHtml += `</ul>`;
        }

        // Real-Life Analogy
        if (topic.realLifeExample) {
            contentHtml += `
                <div class="analogy-card">
                    <div class="analogy-icon"><i class="fa-solid fa-lightbulb"></i></div>
                    <div class="analogy-content">
                        <div class="analogy-title">Real-Life Analogy:</div>
                        ${topic.realLifeExample}
                    </div>
                </div>
            `;
        }

        // Diagram SVG
        let diagramSvg = "";
        if (topic.diagram && window.OOPDiagrams && typeof window.OOPDiagrams.get === "function") {
            diagramSvg = window.OOPDiagrams.get(topic.diagram);
        }

        return {
            title: topic.title,
            category: `Unit ${topic.unit}`,
            content: contentHtml,
            syntax: topic.syntax,
            code: topic.code,
            output: topic.output,
            diagramSvg: diagramSvg,
            related: topic.relatedQuestions || [
                "Give me 5 marks answer for this",
                "Explain in Marathi",
                "Difference between Class and Object"
            ]
        };
    }

    function formatUnitTopicResponse(topic, options) {
        let marathiHtml = "";
        if (options.isMarathi && topic.marathi) {
            marathiHtml = `<div class="analogy-card"><div class="analogy-title">मराठीत:</div>${topic.marathi}</div>`;
        }

        let diagramSvg = "";
        if (topic.diagram && window.OOPDiagrams) {
            diagramSvg = window.OOPDiagrams.get(topic.diagram);
        }

        return {
            title: topic.title,
            category: `Unit ${topic.unit}`,
            content: `
                ${marathiHtml}
                <p><strong>Definition:</strong> ${topic.definition}</p>
                <p>${topic.explanation}</p>
                <h4>Key Features:</h4>
                <ul>${(topic.points || []).map(p => `<li>${p}</li>`).join("")}</ul>
                <div class="analogy-card">
                    <div class="analogy-icon"><i class="fa-solid fa-lightbulb"></i></div>
                    <div class="analogy-content"><div class="analogy-title">Real-World Analogy:</div>${topic.realLife}</div>
                </div>
            `,
            syntax: topic.syntax,
            code: topic.code,
            output: topic.output,
            diagramSvg: diagramSvg,
            related: ["Explain in Marathi", "Show C++ Code Program", "5 Marks Question"]
        };
    }

    // Append User Message to UI
    function appendUserMessage(text) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const row = document.createElement("div");
        row.className = "chat-row user-row";
        row.innerHTML = `
            <div class="chat-bubble user-bubble">
                <div class="bubble-meta">
                    <span>You</span>
                    <span>${time}</span>
                </div>
                <div class="bubble-content">
                    <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(text)}</p>
                </div>
            </div>
            <div class="chat-avatar user-avatar">
                <i class="fa-solid fa-user"></i>
            </div>
        `;
        DOM.messagesContainer.appendChild(row);
    }

    // Append Typing Indicator
    function appendTypingIndicator() {
        const row = document.createElement("div");
        row.className = "chat-row";
        row.id = "active-typing-row";
        row.innerHTML = `
            <div class="chat-avatar bot-avatar">
                <i class="fa-solid fa-robot"></i>
            </div>
            <div class="chat-bubble bot-bubble" style="padding: 12px 18px;">
                <div class="typing-indicator">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            </div>
        `;
        DOM.messagesContainer.appendChild(row);
        return row;
    }

    // Append Bot Message with full multimedia & code
    function appendBotMessage(data) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const row = document.createElement("div");
        row.className = "chat-row";

        let codeHtml = "";
        if (data.code) {
            codeHtml = `
                <div class="code-wrapper">
                    <div class="code-header">
                        <span class="code-lang">C++ Code</span>
                        <button class="copy-code-btn" onclick="window.copyToClipboard(this)">
                            <i class="fa-regular fa-copy"></i> Copy Code
                        </button>
                    </div>
                    <pre class="code-block"><code>${escapeHtml(data.code)}</code></pre>
                </div>
            `;
        }

        let outputHtml = "";
        if (data.output) {
            outputHtml = `
                <div class="output-wrapper">
                    <div class="output-header"><i class="fa-solid fa-terminal"></i> Expected Output</div>
                    <pre class="output-content">${escapeHtml(data.output)}</pre>
                </div>
            `;
        }

        let relatedHtml = "";
        if (data.related && data.related.length > 0) {
            relatedHtml = `
                <div class="related-chips-wrap">
                    <span class="related-label">Related Questions:</span>
                    <div class="related-chips">
                        ${data.related.map(r => `<button class="chip-btn" onclick="window.askSuggested('${escapeHtml(r)}')">${escapeHtml(r)}</button>`).join("")}
                    </div>
                </div>
            `;
        }

        row.innerHTML = `
            <div class="chat-avatar bot-avatar">
                <i class="fa-solid fa-robot"></i>
            </div>
            <div class="chat-bubble bot-bubble">
                <div class="bubble-meta">
                    <span><strong>OOP Master AI</strong> • ${data.category || "C++ Teacher"}</span>
                    <span>${time}</span>
                </div>
                <div class="bubble-content">
                    <h3>${data.title}</h3>
                    ${data.content}
                    ${data.diagramSvg || ""}
                    ${codeHtml}
                    ${outputHtml}
                </div>
                <div class="bubble-actions">
                    <button class="btn-action-pill" onclick="window.copyAnswer(this)">
                        <i class="fa-regular fa-copy"></i> Copy Answer
                    </button>
                    <button class="btn-action-pill" onclick="window.speakAnswer(this)">
                        <i class="fa-solid fa-volume-high"></i> Listen
                    </button>
                    <button class="btn-action-pill" onclick="window.downloadThisNote('${escapeHtml(data.title)}')">
                        <i class="fa-solid fa-file-arrow-down"></i> Save
                    </button>
                </div>
                ${relatedHtml}
            </div>
        `;

        DOM.messagesContainer.appendChild(row);
    }

    function scrollToBottom() {
        DOM.messagesContainer.scrollTop = DOM.messagesContainer.scrollHeight;
    }

    /* ==========================================================================
       CHAT SESSIONS & LOCALSTORAGE HISTORY
       ========================================================================== */
    function saveChatSession(prompt, title) {
        const item = {
            id: Date.now(),
            title: title.length > 32 ? title.substring(0, 32) + "..." : title,
            prompt: prompt,
            time: new Date().toLocaleDateString()
        };
        AppState.chatSessions.unshift(item);
        if (AppState.chatSessions.length > 15) AppState.chatSessions.pop();
        localStorage.setItem("oop_chat_history", JSON.stringify(AppState.chatSessions));
        renderChatHistoryList();
    }

    function renderChatHistoryList() {
        DOM.chatHistoryList.innerHTML = "";
        if (AppState.chatSessions.length === 0) {
            DOM.chatHistoryList.innerHTML = `<span style="font-size:0.75rem; color:var(--text-muted); padding: 4px 10px;">No recent chats</span>`;
            return;
        }

        AppState.chatSessions.forEach(session => {
            const el = document.createElement("div");
            el.className = "history-item";
            el.innerHTML = `
                <span style="overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(session.prompt)}">
                    <i class="fa-regular fa-message" style="margin-right:6px; font-size:11px;"></i>${escapeHtml(session.title)}
                </span>
                <button class="del-hist" title="Delete" onclick="window.deleteHistory(${session.id}, event)">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;
            el.addEventListener("click", () => {
                switchView("chat");
                handleSendMessage(session.prompt);
            });
            DOM.chatHistoryList.appendChild(el);
        });
    }

    function clearChatHistory() {
        if (confirm("Clear all active chat messages and history?")) {
            DOM.messagesContainer.innerHTML = "";
            if (DOM.welcomeHero) DOM.welcomeHero.style.display = "block";
            DOM.messagesContainer.appendChild(DOM.welcomeHero);
            AppState.chatSessions = [];
            localStorage.removeItem("oop_chat_history");
            renderChatHistoryList();
        }
    }

    /* ==========================================================================
       RENDER UNITS & TOPICS (VIEWS 2 & 3)
       ========================================================================== */
    function renderUnitsCatalog() {
        if (!DOM.unitsGrid) return;
        DOM.unitsGrid.innerHTML = "";

        (window.OOPUnits || []).forEach(unit => {
            const card = document.createElement("div");
            card.className = "content-card";
            card.innerHTML = `
                <div>
                    <div class="card-header-line">
                        <span class="card-tag">Unit ${unit.id}</span>
                        <i class="fa-solid ${unit.icon}" style="color: var(--primary-light);"></i>
                    </div>
                    <h3 class="card-title">${unit.title}</h3>
                    <p class="card-desc">${unit.description}</p>
                    <div style="font-size: 0.8rem; color: var(--accent-cyan); margin-bottom: 12px;">
                        <i class="fa-solid fa-list-check"></i> ${unit.topics.length} Key Topics Included
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn-card btn-card-primary" onclick="window.exploreUnitTopics(${unit.id})">
                        <i class="fa-solid fa-arrow-right"></i> Explore Topics
                    </button>
                </div>
            `;
            DOM.unitsGrid.appendChild(card);
        });
    }

    function renderAllTopicsGrid(filterUnit, searchTerm) {
        if (!DOM.allTopicsGrid) return;
        DOM.allTopicsGrid.innerHTML = "";

        const search = (searchTerm || "").toLowerCase().trim();
        let totalRendered = 0;

        (window.OOPUnits || []).forEach(unit => {
            if (filterUnit !== "all" && String(unit.id) !== String(filterUnit)) return;

            unit.topics.forEach(t => {
                if (search && !t.title.toLowerCase().includes(search) && !t.definition.toLowerCase().includes(search)) {
                    return;
                }

                totalRendered++;
                const card = document.createElement("div");
                card.className = "content-card";
                card.innerHTML = `
                    <div>
                        <div class="card-header-line">
                            <span class="card-tag">Unit ${unit.id}</span>
                            <span style="font-size: 0.72rem; color: var(--text-muted);">${t.diagram ? "📊 Diagram Included" : ""}</span>
                        </div>
                        <h3 class="card-title">${t.title}</h3>
                        <p class="card-desc">${t.definition}</p>
                    </div>
                    <div class="card-actions">
                        <button class="btn-card btn-card-primary" onclick="window.askSuggested('Explain ${escapeHtml(t.title)}')">
                            <i class="fa-solid fa-robot"></i> Ask Chatbot
                        </button>
                        <button class="btn-card btn-card-secondary" onclick="window.viewTopicCode('${t.id}')">
                            <i class="fa-solid fa-code"></i> Code
                        </button>
                    </div>
                `;
                DOM.allTopicsGrid.appendChild(card);
            });
        });

        if (totalRendered === 0) {
            DOM.allTopicsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No topics matched your search criteria.</div>`;
        }
    }

    /* ==========================================================================
       RENDER 30+ C++ PROGRAMS PLAYGROUND (VIEW 4)
       ========================================================================== */
    function renderPrograms(categoryFilter, searchTerm) {
        if (!DOM.programsContainer) return;
        DOM.programsContainer.innerHTML = "";

        const search = (searchTerm || "").toLowerCase().trim();
        let count = 0;

        (window.OOPPrograms || []).forEach(prog => {
            if (categoryFilter !== "all" && prog.category !== categoryFilter) return;
            if (search && !prog.title.toLowerCase().includes(search) && !prog.explanation.toLowerCase().includes(search)) {
                return;
            }

            count++;
            const el = document.createElement("div");
            el.className = "content-card";
            el.style.marginBottom = "22px";
            el.innerHTML = `
                <div class="card-header-line">
                    <span class="card-tag">${prog.category}</span>
                    <span style="font-size: 0.75rem; color: var(--accent-cyan);">${prog.unit}</span>
                </div>
                <h3 class="card-title">${prog.title}</h3>
                <p class="card-desc" style="margin-bottom: 12px;">${prog.explanation}</p>

                <div class="code-wrapper">
                    <div class="code-header">
                        <span class="code-lang">C++ Source Code</span>
                        <button class="copy-code-btn" onclick="window.copyToClipboard(this)">
                            <i class="fa-regular fa-copy"></i> Copy Code
                        </button>
                    </div>
                    <pre class="code-block"><code>${escapeHtml(prog.code)}</code></pre>
                </div>

                <div class="output-wrapper">
                    <div class="output-header"><i class="fa-solid fa-terminal"></i> Terminal Output</div>
                    <pre class="output-content">${escapeHtml(prog.output)}</pre>
                </div>

                <div class="card-actions" style="margin-top: 10px;">
                    <button class="btn-card btn-card-primary" onclick="window.askSuggested('Explain ${escapeHtml(prog.title)} in detail')">
                        <i class="fa-solid fa-comments"></i> Ask Bot About This
                    </button>
                </div>
            `;
            DOM.programsContainer.appendChild(el);
        });

        if (count === 0) {
            DOM.programsContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px;">No programs found matching the filter.</div>`;
        }
    }

    /* ==========================================================================
       RENDER REAL-LIFE EXAMPLES (VIEW 5)
       ========================================================================== */
    function renderRealLifeExamples() {
        if (!DOM.realLifeGrid) return;
        DOM.realLifeGrid.innerHTML = "";

        const examples = [
            {
                title: "Class & Object: Car Blueprint",
                concept: "Class vs Object",
                icon: "fa-car",
                analogy: "An architect's physical blueprinted drawing of a sports car is the Class. It defines seats, horsepower, and brake lines. The actual physical cars rolling off the assembly line (Tesla, BMW, Ferrari) are Objects taking up space in the garage.",
                actionPrompt: "Difference between Class and Object"
            },
            {
                title: "Encapsulation: Medical Capsule & Bank",
                concept: "Data Hiding & Security",
                icon: "fa-capsules",
                analogy: "A medical capsule contains active medicinal chemicals sealed inside a gelatin shell. Similarly, a BankAccount class seals private double balance away from the outside world, allowing changes only through verified deposit() and withdraw() methods.",
                actionPrompt: "What is Encapsulation?"
            },
            {
                title: "Abstraction: ATM Cash Dispenser",
                concept: "Hiding Complexity",
                icon: "fa-credit-card",
                analogy: "When withdrawing money from an ATM, you simply insert your card, type your PIN, and collect cash. You don't need to know the SQL queries, encrypted satellite networking packets, or stepper motor rotations dispensing the bills.",
                actionPrompt: "What is Abstraction?"
            },
            {
                title: "Inheritance: Genetic Traits & Vehicle Types",
                concept: "Code Reusability",
                icon: "fa-sitemap",
                analogy: "A child inherits eye color and height from their biological parents while developing unique talents. Similarly, an ElectricCar inherits steering, wheels, and headlights from Vehicle while adding regenerative battery braking.",
                actionPrompt: "What is Inheritance and its types?"
            },
            {
                title: "Polymorphism: Universal Remote Control",
                concept: "Many Forms (Poly + Morph)",
                icon: "fa-tv",
                analogy: "A universal remote control has a 'Power' button. Pressing it in front of a Sony TV turns on the display screen; pressing it in front of a Bose amplifier starts high-wattage audio tubes. One button interface, multiple distinct behaviors.",
                actionPrompt: "What is Polymorphism in C++?"
            },
            {
                title: "Destructor: Hotel Room Checkout",
                concept: "Resource Cleanup (RAII)",
                icon: "fa-door-open",
                analogy: "When you leave a hotel room, the front desk cancels your keycard, returns your security deposit, and resets the room for the next guest. Destructors ensure allocated heap RAM and open file streams are safely deallocated.",
                actionPrompt: "What is Destructor?"
            }
        ];

        examples.forEach(item => {
            const card = document.createElement("div");
            card.className = "content-card";
            card.innerHTML = `
                <div>
                    <div class="card-header-line">
                        <span class="card-tag">${item.concept}</span>
                        <i class="fa-solid ${item.icon}" style="color: var(--accent-cyan); font-size: 1.2rem;"></i>
                    </div>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc" style="font-size: 0.92rem; line-height: 1.6;">${item.analogy}</p>
                </div>
                <div class="card-actions">
                    <button class="btn-card btn-card-primary" onclick="window.askSuggested('${item.actionPrompt}')">
                        <i class="fa-solid fa-graduation-cap"></i> Learn Concept in Chat
                    </button>
                </div>
            `;
            DOM.realLifeGrid.appendChild(card);
        });
    }

    /* ==========================================================================
       RENDER EXAM PREPARATION DASHBOARD (VIEW 6)
       ========================================================================== */
    function renderExamSection(tab) {
        if (!DOM.examContent) return;
        DOM.examContent.innerHTML = "";

        if (tab === "2m") {
            const q2m = [
                { q: "1. Define Object-Oriented Programming (OOP).", a: "OOP is a programming approach based on objects containing data (attributes) and member functions. The four core pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism." },
                { q: "2. What is a Class and Object?", a: "A Class is a user-defined blueprint (occupies 0 bytes). An Object is an identifiable physical instance of that class that allocates memory in RAM." },
                { q: "3. What is the default access specifier in a C++ class?", a: "In C++, members of a class default to 'private'. In contrast, members of a struct default to 'public'." },
                { q: "4. What is a Destructor? Give its syntax.", a: "A destructor is a special member function prefixed with a tilde (~) that de-allocates resources and destroys an object on scope exit. Syntax: ~ClassName();" },
                { q: "5. What is the 'this' pointer in C++?", a: "'this' is an implicit constant pointer available inside all non-static member functions that holds the memory address of the calling object." },
                { q: "6. What is a Pure Virtual Function?", a: "A pure virtual function is declared with '= 0' in a base class and has no body. It makes the class abstract and forces derived classes to implement it." },
                { q: "7. Name four operators in C++ that CANNOT be overloaded.", a: "1. Scope Resolution Operator (::)\n2. Member Selection Operator (.)\n3. Pointer-to-member Operator (.*)\n4. Ternary / Conditional Operator (?:)" }
            ];

            q2m.forEach(item => {
                const card = document.createElement("div");
                card.className = "exam-qa-card";
                card.innerHTML = `
                    <div class="exam-qa-header">
                        <span class="marks-badge">2 Marks Question</span>
                    </div>
                    <div class="exam-q-text">${item.q}</div>
                    <div class="exam-answer-body"><p style="white-space: pre-line;">${item.a}</p></div>
                `;
                DOM.examContent.appendChild(card);
            });
        } 
        else if (tab === "5m") {
            const q5m = [
                {
                    q: "1. Explain the 5 Types of Inheritance in C++ with diagrams.",
                    a: `<strong>1. Single Inheritance:</strong> One derived class inherits from one base class (A → B).<br>
                        <strong>2. Multiple Inheritance:</strong> One derived class inherits from two or more base classes (A + B → C).<br>
                        <strong>3. Multilevel Inheritance:</strong> Chain inheritance (A → B → C).<br>
                        <strong>4. Hierarchical Inheritance:</strong> One base class inherited by multiple derived classes (A → B, C, D).<br>
                        <strong>5. Hybrid Inheritance:</strong> Combination of two or more inheritance types.`
                },
                {
                    q: "2. What is Constructor Overloading? Explain with a working C++ example.",
                    a: `Constructor overloading is having multiple constructors in the same class differing in the number or type of parameters.<br>
                        <code>class Rect { public: Rect(); Rect(int s); Rect(int l, int w); };</code><br>
                        The compiler selects the correct constructor at runtime based on the arguments supplied.`
                },
                {
                    q: "3. What is the Diamond Problem and how is it resolved in C++?",
                    a: `The Diamond Problem occurs in hybrid multiple inheritance when a child class inherits from two parent classes that both inherit from a common grandparent.<br>
                        This creates duplicate copies of grandparent members, causing ambiguity errors.<br>
                        <strong>Solution:</strong> Use <code>virtual public Grandparent</code> in intermediate parent class declarations.`
                }
            ];

            q5m.forEach(item => {
                const card = document.createElement("div");
                card.className = "exam-qa-card";
                card.innerHTML = `
                    <div class="exam-qa-header">
                        <span class="marks-badge">5 Marks Question</span>
                    </div>
                    <div class="exam-q-text">${item.q}</div>
                    <div class="exam-answer-body"><p>${item.a}</p></div>
                `;
                DOM.examContent.appendChild(card);
            });
        }
        else if (tab === "10m") {
            const q10m = [
                {
                    q: "1. Discuss Polymorphism in C++ in detail. Compare Compile-Time and Run-Time Polymorphism with VPTR and VTABLE mechanics.",
                    a: `<strong>1. Definition:</strong> Polymorphism ('many forms') allows one common interface to control multiple underlying behaviors.<br>
                        <strong>2. Compile-Time Polymorphism (Static Binding):</strong><br>
                        - Function Overloading: Same function name, differing arguments.<br>
                        - Operator Overloading: Custom operator behavior for user-defined classes.<br>
                        - Resolved at compile time; zero runtime performance penalty.<br><br>
                        <strong>3. Run-Time Polymorphism (Dynamic Binding):</strong><br>
                        - Achieved using <code>virtual</code> functions and base class pointers.<br>
                        - Compiler creates a VTABLE (Virtual Table) holding function pointers.<br>
                        - Each object receives a hidden VPTR pointing to its class VTABLE.<br>
                        - At runtime, <code>basePtr->virtualFunc()</code> dynamically dispatches the derived class method.`
                },
                {
                    q: "2. Explain the Complete Object Lifecycle: Constructor, Memory Allocation, Method Invocation, and Destructors.",
                    a: `<strong>1. Memory Allocation:</strong> Stack memory or Heap memory allocated via <code>new</code>.<br>
                        <strong>2. Constructor Execution:</strong> Automatically sets data members to valid initial states. In inheritance, Base constructor runs first.<br>
                        <strong>3. Active Execution:</strong> Object executes member functions and holds state.<br>
                        <strong>4. Destructor Execution:</strong> Automatically releases dynamic heap memory and closes file handles in reverse LIFO order.`
                }
            ];

            q10m.forEach(item => {
                const card = document.createElement("div");
                card.className = "exam-qa-card";
                card.innerHTML = `
                    <div class="exam-qa-header">
                        <span class="marks-badge">10 Marks Long Answer</span>
                    </div>
                    <div class="exam-q-text">${item.q}</div>
                    <div class="exam-answer-body"><p>${item.a}</p></div>
                `;
                DOM.examContent.appendChild(card);
            });
        }
        else if (tab === "diff") {
            const diffTables = [
                {
                    title: "POP vs OOP",
                    html: `
                    <table>
                        <tr><th>Parameter</th><th>Procedure Oriented (POP)</th><th>Object Oriented (OOP)</th></tr>
                        <tr><td>Approach</td><td>Top-Down approach</td><td>Bottom-Up approach</td></tr>
                        <tr><td>Primary Focus</td><td>Functions and algorithms</td><td>Data security and objects</td></tr>
                        <tr><td>Security</td><td>No access specifiers</td><td>private, protected, public</td></tr>
                        <tr><td>Reusability</td><td>Limited to functions</td><td>High through Inheritance</td></tr>
                        <tr><td>Examples</td><td>C, Pascal, FORTRAN</td><td>C++, Java, C#</td></tr>
                    </table>`
                },
                {
                    title: "Class vs Object",
                    html: `
                    <table>
                        <tr><th>Parameter</th><th>Class</th><th>Object</th></tr>
                        <tr><td>Definition</td><td>Blueprint or Template</td><td>Real-world instance</td></tr>
                        <tr><td>Memory</td><td>0 bytes upon declaration</td><td>Allocates RAM upon creation</td></tr>
                        <tr><td>Existence</td><td>Logical construct</td><td>Physical entity</td></tr>
                        <tr><td>Quantity</td><td>Declared once</td><td>Created multiple times</td></tr>
                    </table>`
                },
                {
                    title: "Constructor vs Destructor",
                    html: `
                    <table>
                        <tr><th>Parameter</th><th>Constructor</th><th>Destructor</th></tr>
                        <tr><td>Purpose</td><td>Initializes object</td><td>Frees resources & memory</td></tr>
                        <tr><td>Syntax</td><td>ClassName()</td><td>~ClassName()</td></tr>
                        <tr><td>Parameters</td><td>Can accept parameters</td><td>Takes ZERO parameters</td></tr>
                        <tr><td>Overloading</td><td>Supported</td><td>Cannot be overloaded</td></tr>
                    </table>`
                }
            ];

            diffTables.forEach(d => {
                const card = document.createElement("div");
                card.className = "exam-qa-card";
                card.innerHTML = `
                    <h3 style="color: #ffffff; margin-bottom: 12px;">${d.title}</h3>
                    <div class="exam-answer-body">${d.html}</div>
                `;
                DOM.examContent.appendChild(card);
            });
        }
        else if (tab === "notes") {
            const notes = [
                { title: "Virtual Destructors", text: "Base classes with virtual functions must have a virtual destructor: virtual ~Base(). Otherwise, deleting a derived object through a base pointer only frees the base part, causing memory leaks in derived class data." },
                { title: "Static Members in C++", text: "Static data members are shared across all instances of the class. Only one copy exists in memory and must be defined outside the class scope using ClassName::varName." },
                { title: "Friend Function Rules", text: "Friendship is not mutual (if A is friend of B, B is not automatically friend of A). Friendship is not inherited. It is invoked without an object (func(obj);) and can access private members." }
            ];

            notes.forEach(n => {
                const card = document.createElement("div");
                card.className = "exam-qa-card";
                card.innerHTML = `
                    <h3 style="color: #38bdf8; margin-bottom: 8px;">${n.title}</h3>
                    <div class="exam-answer-body"><p>${n.text}</p></div>
                `;
                DOM.examContent.appendChild(card);
            });
        }
    }

    /* ==========================================================================
       MCQ QUIZ ENGINE (VIEW 7)
       ========================================================================== */
    function initQuiz() {
        AppState.quiz.currentIndex = 0;
        AppState.quiz.answers = {};
        AppState.quiz.score = 0;
        AppState.quiz.isCompleted = false;
        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        if (!DOM.quizCard) return;
        const questions = window.OOPQuizData || [];
        if (questions.length === 0) return;

        const currentQ = questions[AppState.quiz.currentIndex];
        DOM.quizCounter.textContent = `Question ${AppState.quiz.currentIndex + 1} of ${questions.length}`;
        DOM.quizLiveScore.textContent = `Score: ${AppState.quiz.score} / ${Object.keys(AppState.quiz.answers).length}`;

        const answeredIndex = AppState.quiz.answers[currentQ.id];
        const isAnswered = answeredIndex !== undefined;

        let optionsHtml = "";
        const labels = ["A", "B", "C", "D"];
        currentQ.options.forEach((opt, idx) => {
            let statusClass = "";
            if (isAnswered) {
                if (idx === currentQ.correct) statusClass = "correct";
                else if (idx === answeredIndex) statusClass = "wrong";
                statusClass += " disabled";
            }

            optionsHtml += `
                <button class="quiz-option-btn ${statusClass}" onclick="window.selectQuizOption(${currentQ.id}, ${idx})">
                    <span class="option-label-circle">${labels[idx]}</span>
                    <span>${escapeHtml(opt)}</span>
                </button>
            `;
        });

        let explanationHtml = "";
        if (isAnswered) {
            explanationHtml = `
                <div class="quiz-explanation-box">
                    <strong><i class="fa-solid fa-circle-info"></i> Explanation:</strong> ${escapeHtml(currentQ.explanation)}
                </div>
            `;
        }

        DOM.quizCard.innerHTML = `
            <div class="question-topic-tag">${currentQ.unit}</div>
            <h3 class="question-heading">${currentQ.id}. ${escapeHtml(currentQ.question)}</h3>
            <div class="quiz-options-list">${optionsHtml}</div>
            ${explanationHtml}
        `;

        DOM.btnQuizPrev.disabled = AppState.quiz.currentIndex === 0;
        if (AppState.quiz.currentIndex === questions.length - 1) {
            DOM.btnQuizNext.innerHTML = `Finish Test <i class="fa-solid fa-check"></i>`;
        } else {
            DOM.btnQuizNext.innerHTML = `Next <i class="fa-solid fa-arrow-right"></i>`;
        }
    }

    function selectQuizOption(qId, selectedIdx) {
        if (AppState.quiz.answers[qId] !== undefined) return; // Already answered

        const currentQ = (window.OOPQuizData || []).find(q => q.id === qId);
        if (!currentQ) return;

        AppState.quiz.answers[qId] = selectedIdx;
        if (selectedIdx === currentQ.correct) {
            AppState.quiz.score++;
        }

        renderQuizQuestion();
    }

    function nextQuizQuestion() {
        const questions = window.OOPQuizData || [];
        if (AppState.quiz.currentIndex < questions.length - 1) {
            AppState.quiz.currentIndex++;
            renderQuizQuestion();
        } else {
            // Finish Quiz
            showQuizResults();
        }
    }

    function prevQuizQuestion() {
        if (AppState.quiz.currentIndex > 0) {
            AppState.quiz.currentIndex--;
            renderQuizQuestion();
        }
    }

    function showQuizResults() {
        DOM.quizActiveContainer.style.display = "none";
        DOM.quizResultHero.style.display = "block";

        const total = (window.OOPQuizData || []).length;
        const score = AppState.quiz.score;
        const percentage = Math.round((score / total) * 100);

        DOM.resultScore.textContent = score;

        if (percentage >= 80) {
            DOM.resultBadgeText.textContent = "🏆 OOP Master Expert!";
            DOM.resultFeedbackText.textContent = `Outstanding! You scored ${percentage}%. You have an exceptional grasp of C++ Object-Oriented concepts.`;
        } else if (percentage >= 60) {
            DOM.resultBadgeText.textContent = "👍 Proficient Student!";
            DOM.resultFeedbackText.textContent = `Good job! You scored ${percentage}%. Review the units and diagrams to turn this into 100%.`;
        } else {
            DOM.resultBadgeText.textContent = "📚 Keep Practicing!";
            DOM.resultFeedbackText.textContent = `You scored ${percentage}%. Use the All Topics and C++ Programs tabs to strengthen your foundation.`;
        }
    }

    function restartQuiz() {
        DOM.quizResultHero.style.display = "none";
        DOM.quizActiveContainer.style.display = "block";
        initQuiz();
    }

    /* ==========================================================================
       GLOBAL INSTANT SEARCH MODAL
       ========================================================================== */
    function openSearchModal() {
        DOM.searchModal.classList.add("active");
        DOM.globalSearchInput.value = "";
        DOM.globalSearchInput.focus();
        renderGlobalSearchResults("");
    }

    function closeSearchModal() {
        DOM.searchModal.classList.remove("active");
    }

    function renderGlobalSearchResults(query) {
        DOM.searchResultsList.innerHTML = "";
        const q = (query || "").toLowerCase().trim();

        const results = [];

        // 1. Topics
        (window.OOPUnits || []).forEach(unit => {
            unit.topics.forEach(t => {
                if (!q || t.title.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)) {
                    results.push({
                        type: "Concept",
                        title: t.title,
                        subtitle: `Unit ${unit.id}: ${t.definition.substring(0, 75)}...`,
                        action: () => {
                            closeSearchModal();
                            switchView("chat");
                            handleSendMessage(`Explain ${t.title}`);
                        }
                    });
                }
            });
        });

        // 2. Programs
        (window.OOPPrograms || []).forEach(p => {
            if (!q || p.title.toLowerCase().includes(q) || p.explanation.toLowerCase().includes(q)) {
                results.push({
                    type: "C++ Program",
                    title: p.title,
                    subtitle: p.explanation.substring(0, 75) + "...",
                    action: () => {
                        closeSearchModal();
                        switchView("programs");
                        DOM.programsSearchInput.value = p.title;
                        renderPrograms("all", p.title);
                    }
                });
            }
        });

        if (results.length === 0) {
            DOM.searchResultsList.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-muted);">No matching concepts or programs found.</div>`;
            return;
        }

        results.slice(0, 15).forEach(res => {
            const el = document.createElement("div");
            el.className = "search-result-item";
            el.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
                    <strong style="color: #ffffff; font-size: 0.95rem;">${escapeHtml(res.title)}</strong>
                    <span class="card-tag" style="font-size: 0.65rem;">${res.type}</span>
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(res.subtitle)}</div>
            `;
            el.addEventListener("click", res.action);
            DOM.searchResultsList.appendChild(el);
        });
    }

    /* ==========================================================================
       UTILITIES (COPY, TTS, DOWNLOAD NOTES)
       ========================================================================== */
    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    window.copyToClipboard = function(btn) {
        const codeWrapper = btn.closest(".code-wrapper");
        if (!codeWrapper) return;
        const codeText = codeWrapper.querySelector("pre code").innerText;
        navigator.clipboard.writeText(codeText).then(() => {
            const original = btn.innerHTML;
            btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
            setTimeout(() => { btn.innerHTML = original; }, 2000);
        });
    };

    window.copyAnswer = function(btn) {
        const bubble = btn.closest(".chat-bubble");
        if (!bubble) return;
        const text = bubble.innerText;
        navigator.clipboard.writeText(text).then(() => {
            const original = btn.innerHTML;
            btn.innerHTML = `<i class="fa-solid fa-check"></i> Answer Copied!`;
            setTimeout(() => { btn.innerHTML = original; }, 2000);
        });
    };

    window.speakAnswer = function(btn) {
        if (!('speechSynthesis' in window)) {
            alert("Text-to-speech is not supported in this browser.");
            return;
        }
        window.speechSynthesis.cancel();
        const bubble = btn.closest(".chat-bubble");
        const heading = bubble.querySelector("h3") ? bubble.querySelector("h3").innerText : "";
        const paragraph = bubble.querySelector("p") ? bubble.querySelector("p").innerText : "";
        const utterance = new SpeechSynthesisUtterance(heading + ". " + paragraph);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
    };

    window.downloadThisNote = function(title) {
        const text = `OOP MASTER AI - STUDY NOTE\nTitle: ${title}\nGenerated on: ${new Date().toLocaleString()}\n\nVisit: OOP Master AI\n`;
        downloadFile(`${title.replace(/[^a-zA-Z0-9]/g, "_")}_Notes.txt`, text);
    };

    function downloadFile(filename, text) {
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function downloadAllChatNotes() {
        const bubbles = document.querySelectorAll(".chat-bubble.bot-bubble");
        if (bubbles.length === 0) {
            alert("No chat notes to download yet! Ask some questions first.");
            return;
        }

        let fullText = `=======================================================\n`;
        fullText += `OOP MASTER AI - C++ STUDY NOTES ARCHIVE\n`;
        fullText += `Exported: ${new Date().toLocaleString()}\n`;
        fullText += `=======================================================\n\n`;

        bubbles.forEach((b, i) => {
            fullText += `--- NOTE #${i + 1} ---\n`;
            fullText += b.innerText.replace(/Copy Answer|Listen|Save|Copy Code/g, "").trim();
            fullText += `\n\n-------------------------------------------------------\n\n`;
        });

        downloadFile("OOP_Master_AI_Study_Notes.txt", fullText);
    }

    // Global Handlers exposed for inline onclicks
    window.askSuggested = function(query) {
        switchView("chat");
        handleSendMessage(query);
    };

    window.selectQuizOption = selectQuizOption;

    window.exploreUnitTopics = function(unitId) {
        switchView("topics");
        DOM.topicUnitTabs.querySelectorAll(".filter-btn").forEach(b => {
            if (b.getAttribute("data-unit") === String(unitId)) b.classList.add("active");
            else b.classList.remove("active");
        });
        renderAllTopicsGrid(String(unitId), "");
    };

    window.viewTopicCode = function(topicId) {
        let code = "";
        (window.OOPUnits || []).forEach(u => {
            u.topics.forEach(t => {
                if (t.id === topicId) code = t.code;
            });
        });
        if (code) {
            switchView("chat");
            handleSendMessage(`Give me working C++ code for topic ${topicId}`);
        }
    };

    window.deleteHistory = function(id, event) {
        event.stopPropagation();
        AppState.chatSessions = AppState.chatSessions.filter(s => s.id !== id);
        localStorage.setItem("oop_chat_history", JSON.stringify(AppState.chatSessions));
        renderChatHistoryList();
    };

    /* ==========================================================================
       EVENT LISTENERS REGISTRATION
       ========================================================================== */
    function setupEventListeners() {
        // Sidebar & Navigation
        DOM.btnToggleSidebar.addEventListener("click", toggleSidebar);
        DOM.btnNewChat.addEventListener("click", () => {
            switchView("chat");
            if (DOM.welcomeHero) DOM.welcomeHero.style.display = "block";
            DOM.chatTextarea.focus();
        });

        DOM.navItems.forEach(item => {
            item.addEventListener("click", () => {
                const targetView = item.getAttribute("data-view");
                switchView(targetView);
            });
        });

        // About Modal
        DOM.navAbout.addEventListener("click", () => {
            DOM.aboutModal.classList.add("active");
        });
        DOM.btnCloseAbout.addEventListener("click", () => {
            DOM.aboutModal.classList.remove("active");
        });

        // Header controls
        DOM.btnThemeToggle.addEventListener("click", toggleTheme);
        DOM.btnClearChat.addEventListener("click", clearChatHistory);
        DOM.btnDownloadNotes.addEventListener("click", downloadAllChatNotes);
        DOM.btnOpenSearch.addEventListener("click", openSearchModal);
        DOM.btnCloseSearch.addEventListener("click", closeSearchModal);

        // Global Search Input
        DOM.globalSearchInput.addEventListener("input", (e) => {
            renderGlobalSearchResults(e.target.value);
        });

        // Keyboard Shortcut Ctrl+K for search
        document.addEventListener("keydown", (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                openSearchModal();
            } else if (e.key === "Escape") {
                closeSearchModal();
                DOM.aboutModal.classList.remove("active");
            }
        });

        // Chat Textarea Send & Auto-resize
        DOM.btnSendMessage.addEventListener("click", () => handleSendMessage());
        DOM.chatTextarea.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
            }
        });
        DOM.chatTextarea.addEventListener("input", function() {
            this.style.height = "auto";
            this.style.height = Math.min(this.scrollHeight, 140) + "px";
        });

        // Quick Suggestion Cards in Welcome Hero
        DOM.quickPromptCards.forEach(card => {
            card.addEventListener("click", () => {
                const prompt = card.getAttribute("data-prompt");
                handleSendMessage(prompt);
            });
        });

        // Topics Unit Filter Tabs
        DOM.topicUnitTabs.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                DOM.topicUnitTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderAllTopicsGrid(btn.getAttribute("data-unit"), DOM.topicsSearchInput.value);
            });
        });

        DOM.topicsSearchInput.addEventListener("input", (e) => {
            const activeTab = DOM.topicUnitTabs.querySelector(".filter-btn.active");
            const unit = activeTab ? activeTab.getAttribute("data-unit") : "all";
            renderAllTopicsGrid(unit, e.target.value);
        });

        // Programs Category Tabs & Search
        DOM.programTabs.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                DOM.programTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderPrograms(btn.getAttribute("data-prog-filter"), DOM.programsSearchInput.value);
            });
        });

        DOM.programsSearchInput.addEventListener("input", (e) => {
            const activeTab = DOM.programTabs.querySelector(".filter-btn.active");
            const filter = activeTab ? activeTab.getAttribute("data-prog-filter") : "all";
            renderPrograms(filter, e.target.value);
        });

        // Exam Filter Tabs
        DOM.examTabs.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                DOM.examTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderExamSection(btn.getAttribute("data-exam-tab"));
            });
        });

        // Quiz Next, Prev, Restart
        DOM.btnQuizNext.addEventListener("click", nextQuizQuestion);
        DOM.btnQuizPrev.addEventListener("click", prevQuizQuestion);
        DOM.btnRestartQuiz.addEventListener("click", restartQuiz);
    }

    // Run initialization on DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
