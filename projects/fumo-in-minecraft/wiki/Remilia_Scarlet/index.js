import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["remilia_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.remilia_fumo|genericItem}}

[Remilia Scarlet](https://en.touhouwiki.net/wiki/Remilia_Scarlet) (レミリア・スカーレット [ɽemiɽia sɯ̥kaːɽetto]), stage 6 boss in [Embodiment of Scarlet Devil](https://en.touhouwiki.net/wiki/Embodiment_of_Scarlet_Devil). 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.remilia_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.remilia_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()