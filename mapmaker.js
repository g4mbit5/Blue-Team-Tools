/*
This code uses Node.js's built-in fs module to read from and write to files, just as Python's open() function does. 
If you're looking for a browser-based solution, you won't be able to perform file I/O directly, 
as browsers don't allow direct access to the file system for security reasons. Instead, you would 
need to use a server-side component to handle file operations.
*/

const fs = require('fs');

function generateMitreAttackJSON(mitreIds) {
    const mitreAttack = {
        name: "layer",
        versions: {
            attack: "15",
            navigator: "5.0.0",
            layer: "4.5"
        },
        domain: "enterprise-attack",
        description: "",
        filters: {
            platform: [
                "Linux",
                "macOS",
                "Windows",
                "Network",
                "PRE",
                "Containers",
                "Office 365",
                "SaaS",
                "Google Workspace",
                "IaaS",
                "Azure AD"
            ]
        },
        sorting: 0,
        layout: {
            layout: "side",
            aggregateFunction: "average",
            showID: false,
            showAggregateScores: false,
            countUnscored: false
        },
        hideDisabled: false,
        techniques: [],
        gradient: {
            colors: [
                "#ff6666ff",
                "#ffe766ff",
                "#8ec843ff"
            ],
            minValue: 0,
            maxValue: 100
        },
        legendItems: [],
        metadata: [],
        links: [],
        showTacticRowBackground: false,
        tacticRowBackground: "#dddddd",
        selectTechniqueAcrossTactics: true,
        selectSubtechniquesWithParent: false
    };

    mitreIds.forEach(mitreId => {
        const technique = {
            techniqueID: mitreId,
            color: "#3182bd",
            score: 1
        };
        mitreAttack.techniques.push(technique);
    });

    return mitreAttack;
}

function saveJSONToFile(data, filename) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 4));
}

fs.readFile("mitre_ids.txt", 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const mitreIds = data.split('\n').map(line => line.trim());
    const mitreAttackJSON = generateMitreAttackJSON(mitreIds);
    saveJSONToFile(mitreAttackJSON, "mitre_attack_kitty.json");
});

