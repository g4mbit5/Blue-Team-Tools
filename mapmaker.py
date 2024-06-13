import json

def generate_mitre_attack_json(mitre_ids):
    mitre_attack = {
        "name": "layer",
        "versions": {
            "attack": "15",
            "navigator": "5.0.0",
            "layer": "4.5"
        },
        "domain": "enterprise-attack",
        "description": "",
        "filters": {
            "platform": [
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
        "sorting": 0,
        "layout": {
            "layout": "side",
            "aggregateFunction": "average",
            "showID": False,
            "showAggregateScores": False,
            "countUnscored": False
        },
        "hideDisabled": False,
        "techniques": [],
        "gradient": {
            "colors": [
                "#ff6666ff",
                "#ffe766ff",
                "#8ec843ff"
            ],
            "minValue": 0,
            "maxValue": 100
        },
        "legendItems": [],
        "metadata": [],
        "links": [],
        "showTacticRowBackground": False,
        "tacticRowBackground": "#dddddd",
        "selectTechniqueAcrossTactics": True,
        "selectSubtechniquesWithParent": False
    }

    for mitre_id in mitre_ids:
        technique = {
            "techniqueID": mitre_id,
            "color": "#3182bd",
            "score": 1
        }
        mitre_attack["techniques"].append(technique)

    return mitre_attack

def save_json_to_file(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == "__main__":
    with open("mitre_ids.txt", 'r') as file:
        mitre_ids = [line.strip() for line in file]

    mitre_attack_json = generate_mitre_attack_json(mitre_ids)

    save_json_to_file(mitre_attack_json, "mitre_attack_kitty.json")

