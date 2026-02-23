/*
*   You are building a system that formats log messages differently
*   depending on the strategy used (e.g., plain text, JSON).

*   Write a function `formatLog(strategy, level, msg)` that:
*   - Accepts a formatting function strategy
*   - Applies it to the log `level` and `msg`
*   - Returns the formatted output
*
*? Example:
*? formatLog((lvl, m) => `[${lvl.toUpperCase()}] ${m}`, "info", "Server started")
*? → "[INFO] Server started"
*/

// TODO: Implement formatLog


const formatLog = (strategy, level, msg) => {
    return strategy(level,msg)
}






























// Below this comment any modification is prohibited.
module.exports = { formatLog };
