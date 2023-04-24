import { transclusionSubstitution } from "../../_wiki_site_files/js/transclusionSubstitution.js";
import { getData } from "../../_wiki_site_files/js/getData.js";
import { generateTableOfContents } from "../../_wiki_site_files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["flandre_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.flandre_fumo|genericItem}}

[Flandre Scarlet](https://en.touhouwiki.net/wiki/Flandre_Scarlet) (フランドール・スカーレット [ɸɯɽandoːɽɯ̥ sɯ̥kaːɽetto]), extra stage boss in [Embodiment of Scarlet Devil](https://en.touhouwiki.net/wiki/Embodiment_of_Scarlet_Devil).

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.flandre_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.flandre_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()