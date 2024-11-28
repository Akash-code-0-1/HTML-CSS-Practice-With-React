import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './SourceCodeContainer.css';

export default function SourceCodeContainer({ children, sourceCode }) {
    const [showSource, setShowSource] = useState(false);
    const [activeTab, setActiveTab] = useState("html"); // Tracks the active tab
    const [copied, setCopied] = useState(false); // Tracks copy status

    const toggleSourceCode = () => {
        setShowSource(!showSource);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(sourceCode[activeTab].trim());
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="content-container">
            <div className={`container ${showSource ? 'show-border' : ''}`}>
                {children}
                <div
                    className={`toggle-icon ${showSource ? 'hide' : 'show'}`}
                    onClick={toggleSourceCode}
                >
                    {showSource ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
            </div>
            {showSource && (
                <div className="source-code">
                    <div className="tabs">
                        <button
                            onClick={() => setActiveTab("html")}
                            className={activeTab === "html" ? "active" : ""}
                        >
                            HTML
                        </button>
                        <button
                            onClick={() => setActiveTab("css")}
                            className={activeTab === "css" ? "active" : ""}
                        >
                            CSS
                        </button>
                        <button
                            className={`copybutton ${copied ? "copied" : ""}`}
                            onClick={handleCopy}
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <pre>
                        <code>{sourceCode[activeTab]}</code>
                    </pre>
                </div>
            )}
        </div>
    );
}
