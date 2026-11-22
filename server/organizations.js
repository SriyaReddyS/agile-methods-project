/* ==================================
   Wildlife Guardian
   Verified organization loader (server)
   ----------------------------------
   Reads the same organization-data.js file
   the website uses, so the chatbot answers
   Pittsburgh help questions from the verified
   local directory instead of model memory.
================================== */

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const DEFAULT_DATA_FILE = path.join(__dirname, "..", "organization-data.js");

// Evaluate organization-data.js in an isolated context and return its
// ORGANIZATIONS array. An empty array is returned when the file defines
// none, so the chatbot keeps working on pages without org data.
function loadOrganizations(dataFile) {
    const file = dataFile || DEFAULT_DATA_FILE;
    const code = fs.readFileSync(file, "utf8");
    const context = vm.createContext({});

    vm.runInContext(code, context, { filename: file, timeout: 1000 });

    // ORGANIZATIONS is a top-level const, so read it from the script's scope.
    const organizations = vm.runInContext(
        "typeof ORGANIZATIONS === 'undefined' ? [] : ORGANIZATIONS",
        context
    );

    if (!Array.isArray(organizations)) {
        throw new Error("organization-data.js did not define an ORGANIZATIONS array.");
    }

    // Copy out of the vm context into plain objects.
    return JSON.parse(JSON.stringify(organizations));
}

module.exports = { loadOrganizations };
