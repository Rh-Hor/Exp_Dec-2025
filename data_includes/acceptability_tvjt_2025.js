var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("firstfiller"))), "practice-two-before", seq("practice-two"), "practice-two-over", sepWith("sep", rshuffle(startsWith("followup"), startsWith("filler"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Zadané odpovědi byly odeslány na server. Děkujeme za spolupráci!]";

var ms = "Message";

var defaults = [    
    "Separator", { transfer: 800,
                   normalMessage: "Počkejte prosím na další položku v experimentu.",
                   errorMessage: "Špatně. Počkejte prosím na další položku v experimentu." 
		 },
    "AcceptabilityJudgment", { as: ["1", "2", "3", "4", "5"],
                               presentAsScale: true,
                               leftComment: "(nepřijatelná věta)", rightComment: "(věta je naprosto v pořádku)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],
 
	      ["intro", "Form", {continueMessage: "Pro vstup do experimentu, klikněte zde", html: { include: "example_intro.html" }}],

	      ["practice", aj, {s: {html: "<p>Pavel uviděl Marušku.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "Ačkoliv byla Marie unavená, navštívila včera ještě vedoucího hasičské jednotky Tříbětice.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jako odpověď jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "Byla Marie unavená ačkoliv, navštívila včera ještě ho v Tříběticích.</p><p><i>Tato věta není v pořádku. Pokud souhlasíte, vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</i></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-acc-all", 1], aj, {s: "Všichni návštěvníci se sebemenším zájmem o archeologii zvládli tento exponát hned poznat."}],
[["first-item1-acc-most", 1], aj, {s: "Většina návštěvníků se sebemenším zájmem o archeologii zvládla tento exponát hned poznat."}],
[["first-item1-acc-some", 1], aj, {s: "Někteří návštěvníci se sebemenším zájmem o archeologii zvládli tento exponát hned poznat."}],

[["first-item2-acc-all", 2], aj, {s: "Všechny zákaznice se sebemenší alergií na odlakovač musely ze salonu preventivně odejít."}],
[["first-item2-acc-most", 2], aj, {s: "Většina zákaznic se sebemenší alergií na odlakovač musela ze salonu preventivně odejít."}],
[["first-item2-acc-some", 2], aj, {s: "Některé zákaznice se sebemenší alergií na odlakovač musely ze salonu preventivně odejít."}],

[["first-item3-acc-all", 3], aj, {s: "Všichni občané se sebemenší vírou v Boha chtěli nalezenému dítěti vystrojit křest."}],
[["first-item3-acc-most", 3], aj, {s: "Většina občanů se sebemenší vírou v Boha chtěla nalezenému dítěti vystrojit křest."}],
[["first-item3-acc-some", 3], aj, {s: "Někteří občané se sebemenší vírou v Boha chtěli nalezenému dítěti vystrojit křest."}],

[["first-item4-acc-all", 4], aj, {s: "Všechny krávy se sebemenším podezřením na slintavku dostaly kvůli nařízení smrtící ránu."}],
[["first-item4-acc-most", 4], aj, {s: "Většina krav se sebemenším podezřením na slintavku dostala kvůli nařízení smrtící ránu."}],
[["first-item4-acc-some", 4], aj, {s: "Některé krávy se sebemenším podezřením na slintavku dostaly kvůli nařízení smrtící ránu."}],

[["first-item5-acc-all", 5], aj, {s: "Všichni starostové se sebemenším obviněním z korupce popřeli důrazně existenci své viny."}],
[["first-item5-acc-most", 5], aj, {s: "Většina starostů se sebemenším obviněním z korupce popřela důrazně existenci své viny."}],
[["first-item5-acc-some", 5], aj, {s: "Někteří starostové se sebemenším obviněním z korupce popřeli důrazně existenci své viny."}],

[["first-item6-acc-all", 6], aj, {s: "Všechny matky se sebemenším problémem s drogami podstoupily velmi přísnou inspekci domácnosti."}],
[["first-item6-acc-most", 6], aj, {s: "Většina matek se sebemenším problémem s drogami podstoupila velmi přísnou inspekci domácnosti."}],
[["first-item6-acc-some", 6], aj, {s: "Některé matky se sebemenším problémem s drogami podstoupily velmi přísnou inspekci domácnosti."}],

[["first-item7-acc-all", 7], aj, {s: "Všechny produkty se sebemenší závadou na obalu selhaly v testu zdravotní bezpečnosti."}],
[["first-item7-acc-most", 7], aj, {s: "Většina produktů se sebemenší závadou na obalu selhala v testu zdravotní bezpečnosti."}],
[["first-item7-acc-some", 7], aj, {s: "Některé produkty se sebemenší závadou na obalu selhaly v testu zdravotní bezpečnosti."}],

[["first-item8-acc-all", 8], aj, {s: "Všechna koťata se sebemenším flíčkem na zádech vzešla z našeho skvrnitého kocoura."}],
[["first-item8-acc-most", 8], aj, {s: "Většina koťat se sebemenším flíčkem na zádech vzešla z našeho skvrnitého kocoura."}],
[["first-item8-acc-some", 8], aj, {s: "Některá koťata se sebemenším flíčkem na zádech vzešla z našeho skvrnitého kocoura."}],

[["first-item9-acc-all", 9], aj, {s: "Všechny domy se sebemenší nerovností ve zdech riskovaly poškození v případě vichřice."}],
[["first-item9-acc-most", 9], aj, {s: "Většina domů se sebemenší nerovností ve zdech riskovala poškození v případě vichřice."}],
[["first-item9-acc-some", 9], aj, {s: "Některé domy se sebemenší nerovností ve zdech riskovaly poškození v případě vichřice."}],

[["first-item10-acc-all", 10], aj, {s: "Všechna hnutí se sebemenší inklinaci ke komunismu čelila odsouzení ze strany společnosti."}],
[["first-item10-acc-most", 10], aj, {s: "Většina hnutí se sebemenší inklinaci ke komunismu čelila odsouzení ze strany společnosti."}],
[["first-item10-acc-some", 10], aj, {s: "Některá hnutí se sebemenší inklinaci ke komunismu čelila odsouzení ze strany společnosti."}],

[["first-item11-acc-all", 11], aj, {s: "Všechny ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],
[["first-item11-acc-most", 11], aj, {s: "Většina ústavů se sebemenším rozpočtem na výzkum vykázala mnoho objevů a publikací."}],
[["first-item11-acc-some", 11], aj, {s: "Některé ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],

[["first-item12-acc-all", 12], aj, {s: "Všechna vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],
[["first-item12-acc-most", 12], aj, {s: "Většina vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],
[["first-item+12-acc-some", 12], aj, {s: "Některá vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],

[["first-item13-acc-all", 13], aj, {s: "Všechna hnutí se sebemenší inklinaci ke komunismu čelila odsouzení ze strany společnosti."}],
[["first-item13-acc-most", 13], aj, {s: "Většina hnutí se sebemenší inklinaci ke komunismu čelila odsouzení ze strany společnosti."}],
[["first-item13-acc-some", 13], aj, {s: "Některá hnutí se sebemenší inklinaci ke komunismu čelila odsouzení ze strany společnosti."}],

[["first-item14-acc-all", 14], aj, {s: "Všechny ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],
[["first-item14-acc-most", 14], aj, {s: "Většina ústavů se sebemenším rozpočtem na výzkum vykázala mnoho objevů a publikací."}],
[["first-item14-acc-some", 14], aj, {s: "Některé ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],

[["first-item15-acc-all", 15], aj, {s: "Všechna vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],
[["first-item15-acc-most", 15], aj, {s: "Většina vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],
[["first-item+15-acc-some", 15], aj, {s: "Některá vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],

[["first-item10-acc-all", 10], aj, {s: "Všechna hnutí se sebemenší inklinaci ke komunismu čelila předsudkům ze strany společnosti."}],
[["first-item10-acc-most", 10], aj, {s: "Většina hnutí se sebemenší inklinaci ke komunismu čelila předsudkům ze strany společnosti."}],
[["first-item10-acc-some", 10], aj, {s: "Některá hnutí se sebemenší inklinaci ke komunismu čelila předsudkům ze strany společnosti."}],

[["first-item11-acc-all", 11], aj, {s: "Všechny ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],
[["first-item11-acc-most", 11], aj, {s: "Většina ústavů se sebemenším rozpočtem na výzkum vykázala mnoho objevů a publikací."}],
[["first-item11-acc-some", 11], aj, {s: "Některé ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],

[["first-item12-acc-all", 12], aj, {s: "Všichni zemědělci se sebemenší újmou na úrodě vybíjeli sarančata zakázanými chemickými látkami."}],
[["first-item12-acc-most", 12], aj, {s: "Většina zemědělců se sebemenší újmou na úrodě vybíjela sarančata zakázanými chemickými látkami."}],
[["first-item12-acc-some", 12], aj, {s: "Někteří zemědělci se sebemenší újmou na úrodě vybíjeli sarančata zakázanými chemickými látkami."}],

[["first-item13-acc-all", 13], aj, {s: "Všichni spisovatelé se sebemenším sledováním na sítích dorazili na veletrh krásné literatury."}],
[["first-item13-acc-most", 13], aj, {s: "Většina spisovatelů se sebemenším sledováním na sítích dorazila na veletrh krásné literatury."}],
[["first-item13-acc-some", 13], aj, {s: "Někteří spisovatelé se sebemenším sledováním na sítích dorazili na veletrh krásné literatury."}],

[["first-item14-acc-all", 14], aj, {s: "Všechny ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],
[["first-item14-acc-most", 14], aj, {s: "Většina ústavů se sebemenším rozpočtem na výzkum vykázala mnoho objevů a publikací."}],
[["first-item14-acc-some", 14], aj, {s: "Některé ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],

[["first-item15-acc-all", 15], aj, {s: "Všechny herečky se sebemenším talentem na zpěv toužily získat muzikálovou roli."}],
[["first-item15-acc-most", 15], aj, {s: "Většina hereček se sebemenším talentem na zpěv toužila získat muzikálovou roli."}],
[["first-item15-acc-some", 15], aj, {s: "Některé herečky se sebemenším talentem na zpěv toužily získat muzikálovou roli."}],

[["first-item16-acc-all", 16], aj, {s: "Všechny političky se sebemenším zájmem o rovnoprávnost prosazovaly potrestání jedné konkrétní osoby."}],
[["first-item16-acc-most", 16], aj, {s: "Většina političek se sebemenším zájmem o rovnoprávnost prosazovala potrestání jedné konkrétní osoby."}],
[["first-item16-acc-some", 16], aj, {s: "Některé političky se sebemenším zájmem o rovnoprávnost prosazovaly potrestání jedné konkrétní osoby."}],

[["first-item17-acc-all", 17], aj, {s: "Všechna děvčata se sebemenší bolestí v srdci zkusila někdy napsat dojemnou báseň."}],
[["first-item17-acc-most", 17], aj, {s: "Většina děvčat se sebemenší bolestí v srdci zkusila někdy napsat dojemnou báseň."}],
[["first-item17-acc-some", 17], aj, {s: "Některá děvčata se sebemenší bolestí v srdci zkusila někdy napsat dojemnou báseň."}],

[["first-item18-acc-all", 18], aj, {s: "Všechny děti se sebemenší úctou k seniorům navštívily během prázdnin domov důchodců."}],
[["first-item18-acc-most", 18], aj, {s: "Většina dětí se sebemenší úctou k seniorům navštívila během prázdnin domov důchodců."}],
[["first-item+18-acc-some", 18], aj, {s: "Některé děti se sebemenší úctou k seniorům navštívily během prázdnin domov důchodců."}],


["firstfiller1", aj, {s: "Já, starý sadař nejsem přišel do lesa celé roky." }],
["firstfiller2", aj, {s: "Já, starý sadař, jsem nepřišel do lesa celé roky." }],

["practice-two-before", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí první část experimentu. Klikněte níže pro vysvětlení druhé části experimentu."]]}],

 ["practice-two", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_nd_wrong.jpg?raw=true\"></td><td><img style=\"display:block;max-width:400px;max-height:400px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_non-distributive.jpg?raw=true\"></td></table></center>Kontext: Aleš a Bedřich byli včera se svými manželkami na večírku. Obě manželky požádaly své manžele, aby je vyfotili. Aleš svoji manželku vyfotil, ale Bedřich ne, protože měl vybitý telefon.<center><p>Věta: <i>Pouze jeden manžel vyfotil svoji manželku.</i></p></p>Věta je adekvátní vůči kontextu a zároveň odpovídá levému obrázku, neboť na něm pouze jeden muž fotí ženu. Pravý obrázek neodpovídá, neboť na něm fotí dva muži. Odpověď <i>ani jeden</i> zde není adekvátní, protože k větě se hodí obrázek nalevo. Klikněte tedy na odpověď <i>levý</i>.</center>"}, hasCorrect: 0}],
             
["practice-two", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:400px;max-height:400px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/9_non-d_f.jpg?raw=true\"></td><td><img style=\"display:block;max-width:370px;max-height:370px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/9_nd.jpg?raw=true\"></td></table></center>Kontext: Děti si hrály na půdě, kde našly staré rozbité hračky. Byly z toho smutné. Přinesly je ukázat tatínkovi a prosily ho, zda by mohl rozbité hračky opravit.</p><center><p>Věta: <i>Každé dítě přineslo jednu hračku. </i></p></p>Věta je adekvátní vůči kontextu a zároveň odpovídá pravému obrázku, neboť na něm má každé dítě v ruce jednu hračku. Na levém obrázku nese hračku pouze holčička, zatímco chlapeček má prázdné ruce. Odpověď <i>ani jeden</i> zde není adekvátní, protože se k větě hodí obrázek napravo. Klikněte tedy na odpověď <i>pravý</i>.</center>"}, hasCorrect: 2}],
            
["practice-two", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:450px;max-height:450px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_d.jpg?raw=true\"></td><td><img style=\"display:block;max-width:610px;max-height:610px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_d_f.jpg?raw=true\"></td></table></center>Kontext: Alena přišla navštívit svoji sestru Mariku. Alena byla celý týden na dovolené, a proto jí uniklo několik dílů oblíbeného detektivního seriálu. Marika jí proto stručně vylíčila, co se tam odehrálo.</p><center><p>Věta: <i>Marika řekla, že policista Jan zatkl dva zloděje. </i></p></p>Věta je sice adekvátní vůči kontextu, ale ani jeden obrázek dané větě neodpovídá. Levý obrázek větě neodpovídá, protože jsou na něm dva policisté a každý z nich zatkl dva zloděje. Vyslovená věta ovšem zmiňuje pouze jednoho policistu. Pravý obrázek také neodpovídá, protože jsou na něm dva policisté a každý z nich zatkl jednoho zloděje. Ani jeden obrázek tedy neodpovídá větě. Zvolte možnost <i>ani jeden</i>.</center>"}, hasCorrect: 1}],             

          ["practice-two-over", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["followup-item1-d-ref", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center> Kontext: Včera se konal v Praze večírek celebrit. Sešli se zde známí herci, zpěváci, modelky a samozřejmě novináři bulvárních časopisů. Večírku se zúčastnily také herečky Simona a Kamila. Šéfredaktoři přikázali novinářům pořídit fotografie ukazující temnou stránku celebrit. Novináři Karel a Jakub tedy doufali, že se jim pořadí pořídit kompromitující fotografie pozvaných osobností, které by mohly čtenáře časopisů zajímat.</p><center><p>Věta: <i> Karel i Jakub vyfotili dvě herečky.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item1-d-svo", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center>Kontext: Včera se konal v Praze večírek celebrit. Sešli se zde známí herci, zpěváci, modelky a samozřejmě novináři bulvárních časopisů. Večírku se zúčastnily také herečky Simona a Kamila. Šéfredaktoři přikázali novinářům pořídit fotografie ukazující temnou stránku celebrit. Novináři Karel a Jakub tedy doufali, že se jim pořadí pořídit kompromitující fotografie pozvaných osobností, které by mohly čtenáře časopisů zajímat.</p><center><p>Věta: <i> Dva novináři vyfotili Simonu i Kamilu.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item1-d-move-a", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center>Kontext: Včera se konal v Praze večírek celebrit. Sešli se zde známí herci, zpěváci, modelky a samozřejmě novináři bulvárních časopisů. Večírku se zúčastnily také herečky Simona a Kamila. Šéfredaktoři přikázali novinářům pořídit fotografie ukazující temnou stránku celebrit. Novináři Karel a Jakub tedy doufali, že se jim pořadí pořídit kompromitující fotografie pozvaných osobností, které by mohly čtenáře časopisů zajímat.</p><center><p>Věta: <i> Na večírku byly Simona i Kamila vyfoceny dvěma novináři.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item1-d-move-abar", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center>Kontext: Včera se konal v Praze večírek celebrit. Sešli se zde známí herci, zpěváci, modelky a samozřejmě novináři bulvárních časopisů. Večírku se zúčastnily také herečky Simona a Kamila. Šéfredaktoři přikázali novinářům pořídit fotografie ukazující temnou stránku celebrit. Novináři Karel a Jakub tedy doufali, že se jim pořadí pořídit kompromitující fotografie pozvaných osobností, které by mohly čtenáře časopisů zajímat.</p><center><p>Věta: <i> Simonu i Kamilu dva novináři vyfotili až po půlnoci.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item2-nd-ref", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Muž i žena vyrobili dva dřevěné výrobky.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item2-nd-svo", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Dva soutěžící vyrobili židli i ptačí budku.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item2-nd-move-a", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Na veletrhu byly židle i ptačí budka vyrobeny dvěma soutěžícími.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],
             
[["followup-item2-nd-move-abar", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Židle i ptačí budku dva soutěžící vyrobili během daného limitu.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],



["filler1-bad", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:300px;max-height:300px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_nd_wrong.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center>Kontext: Známý modní dům pořádal módní přehlídku nové kolekce. Bylo pozváno spoustu důležitých osob a také zástupci módních časopisů. Akci uzavírala noční přehlídka dvou světových modelek. Fotografové měli plné ruce práce.</p><center><p>Věta: <i>Každý fotograf vyfotil obě modelky.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],
           
["filler2-good-right", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:450px;max-height:450px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_d.jpg?raw=true\"></td><td><img style=\"display:block;max-width:600px;max-height:600px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_non-d_f.jpg?raw=true\"></td></table></center>Kontext: Policisté pronásledovali skupinu zlodějů aut. Ti byli po krátké honičce s policisty dopadeni v kradených autech. Některým policistům se podařilo dopadnout a zatknout více zlodějů, někteří zůstali s policejními psy a nezatkli žádného zločince.</p><center><p>Věta: <i>Pouze jeden policista zatkl jednoho zloděje.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}], 
             
             
                     

];
