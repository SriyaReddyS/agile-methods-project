/* ==================================
   Wildlife Guardian
   Shared animal data loader (server)
   ----------------------------------
   Reads the same animal-data.js file the
   website uses, so the chatbot never keeps
   its own copy of species facts. A species
   added to ANIMALS is available to the
   chatbot after a server restart.
================================== */

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const DEFAULT_DATA_FILE = path.join(__dirname, "..", "animal-data.js");

// Evaluate animal-data.js in an isolated context and return its ANIMALS array.
function loadAnimals(dataFile) {
    const file = dataFile || DEFAULT_DATA_FILE;
    const code = fs.readFileSync(file, "utf8");
    const context = vm.createContext({});

    vm.runInContext(code, context, { filename: file, timeout: 1000 });

    // ANIMALS is a top-level const, so read it from the script's scope.
    const animals = vm.runInContext(
        "typeof ANIMALS === 'undefined' ? undefined : ANIMALS",
        context
    );

    if (!Array.isArray(animals)) {
        throw new Error("animal-data.js did not define an ANIMALS array.");
    }

    // Copy out of the vm context into plain objects.
    return JSON.parse(JSON.stringify(animals));
}

module.exports = { loadAnimals };
