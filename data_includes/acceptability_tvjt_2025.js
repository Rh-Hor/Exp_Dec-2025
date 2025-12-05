var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("first-filler"))), "practice-two-before", seq("practice-two"), "practice-two-over", rshuffle(startsWith("second-item"), startsWith("second-filler")));

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
 
	      ["intro", "Form", {continueMessage: "Pro vstup do experimentu klikněte zde", html: { include: "example_intro.html" }}],

	      ["practice", aj, {s: {html: "<p><b>Nacházíte se v přípravné fázi experimentu. Přečtěte si větu a ohodnoťte, jak přirozeně vám zní.</p></b><p>Pavel uviděl Marušku.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "<p><b>Nacházíte se v přípravné fázi experimentu. Přečtěte si větu a ohodnoťte, jak přirozeně vám zní.</p></b>Ačkoliv byla Marie unavená, navštívila včera ještě vedoucího hasičské jednotky Tříbětice.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jako odpověď jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "<p><b>Nacházíte se v přípravné fázi experimentu. Přečtěte si větu a ohodnoťte, jak přirozeně vám zní.</p></b>Byla Marie unavená ačkoliv, navštívila včera ještě ho v Tříběticích.</p><p><i>Tato věta nezní přirozeně: spíše by ji použil cizinec, který se česky teprve učí, než rodilý mluvčí. Pokud souhlasíte, vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</i></p>"}}],

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
[["first-item12-acc-some", 12], aj, {s: "Některá vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],

[["first-item13-acc-all", 13], aj, {s: "Všechna hnutí se sebemenší inklinaci ke komunismu čelila odsouzení ze strany společnosti."}],
[["first-item13-acc-most", 13], aj, {s: "Většina hnutí se sebemenší inklinaci ke komunismu čelila odsouzení ze strany společnosti."}],
[["first-item13-acc-some", 13], aj, {s: "Některá hnutí se sebemenší inklinaci ke komunismu čelila odsouzení ze strany společnosti."}],

[["first-item14-acc-all", 14], aj, {s: "Všechny ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],
[["first-item14-acc-most", 14], aj, {s: "Většina ústavů se sebemenším rozpočtem na výzkum vykázala mnoho objevů a publikací."}],
[["first-item14-acc-some", 14], aj, {s: "Některé ústavy se sebemenším rozpočtem na výzkum vykázaly mnoho objevů a publikací."}],

[["first-item15-acc-all", 15], aj, {s: "Všechna vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],
[["first-item15-acc-most", 15], aj, {s: "Většina vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],
[["first-item15-acc-some", 15], aj, {s: "Některá vysvětlení se sebemenší nejistotou v hlase působila na tazatele příliš podezřele."}],

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
[["first-item18-acc-some", 18], aj, {s: "Některé děti se sebemenší úctou k seniorům navštívily během prázdnin domov důchodců."}],

["first-filler1-good", aj, {s: "Letošní pořadatelé festivalu počítali s menší účastí a proto snížili rozpočet." }],
["first-filler2-good", aj, {s: "Chlapci stáli v pokoji, kde už se nacházela pouze skříň, a prohlíželi si popraskané stěny." }],
["first-filler3-good", aj, {s: "Jeden soutěžící s nejvyšším počtem bodů vyhraje celou hru a získá zlatý pohár." }],
["first-filler4-good", aj, {s: "Tento kurz, ve kterém uspělo padesát procent studentů, je nejtěžším kurzem v naší nabídce." }],
["first-filler5-good", aj, {s: "Mnoho lidí, kteří přežili tragickou autonehodu, částečně přišlo o sluch."}],
["first-filler6-good", aj, {s: "Všechny ženy, se kterými Naďa šla do čajovny, měly více či méně problematickou minulost." }],
["first-filler7-bad", aj, {s: "Svoje domácí zmrzlina s trochou slaného karamelu je skvělý dezert na dnešní oběd." }],
["first-filler8-bad", aj, {s: "Každý student, který nebyl zrovna u zkoušky, se sešel na náměstí Svobody." }],
["first-filler9-bad", aj, {s: "Moje prababička, která už je velmi stará, si pamatuje, co jí nikdo řekne." }],
["first-filler10-bad", aj, {s: "Až mi ten dokument vytiskl, tak mi ji prosím polož na ten nejmenší stůl." }],
["first-filler11-bad", aj, {s: "Žádný malíř bude hladovět, pokud si každá domácnost koupí dva obrazy." }],
["first-filler12-bad", aj, {s: "Rostliny s dlouhými kořeny sobě špatně vykopávají ze země." }],
["first-filler13-good", aj, {s: "Podnikatelky s nadlidskou pílí dokázaly svoje firmy dostat na horní konec žebříčku." }],
["first-filler14-good", aj, {s: "Dvě zvířata s trochou roztomilosti jsme si natočili a zbytek zvířat jsme ignorovali."}],
["first-filler15-good", aj, {s: "Mnoho dětí na místní hřiště přestalo chodit už měsíc po jeho slavnostním otevření." }],
["first-filler16-bad", aj, {s: "Krápník, který roste od země nahoru, sebe názvuje stalagmit." }],
["first-filler17-bad", aj, {s: "Ten žádný balvan, který nám stojí v cestě, se nám podařilo odvalit a mohli jsme pokračovat."}],
["first-filler18-bad", aj, {s: "Nejšikovnější dítě trenér pochlubil tím, že umí velmi dobře lyžovat." }],

["practice-two-before", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí první část experimentu. Klikněte níže pro vysvětlení druhé části experimentu."]]}],

 ["practice-two", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_nd_wrong.jpg?raw=true\"></td><td><img style=\"display:block;max-width:400px;max-height:400px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_non-distributive.jpg?raw=true\"></td></table></center><b>Nacházíte se v přípravné fázi druhé části experimentu. Bude vám vysvětlen kontext a procedura.</p><center>Kontext: Každá situace, kterou budete v experimentu posuzovat, začíná tím, že v horní části obrázku se nachází 12 tvarů. Klára je pokaždé musí rozmístit do dvou boxů dole tak, aby některé tvary byly v levém boxu a ty ostatní v pravém. V každém boxu se může vyskytnout směs různých tvarů a/nebo barev.</p>Dolní část každého obrázku (pod šipkou) představuje situaci, kdy tvary už byly rozmístěny do boxů. Boxy mají stěny, skrze které lze vidět obrys objektů uvnitř, ale ne jejich barvu. Klára navíc boxy natřela na černo, takže do jednoho boxu je vidět jen částečně a do druhého není vidět vůbec.<center><p> Poté, co Klára rozmístí tvary do boxů, do místnosti vejde Boris. Boris ví, kolik tvarů jakých barev Klára musela uklidit, ale neviděl ji při tom. Boris vidí pouze situaci v dolní polovině obrázku a komentuje ji. Vaším úkolem bude posoudit, zda si Boris vytváří správné logické úsudky o počtech a barvách tvarů v boxech.<p><i>Příkladový úkol:</i>Boris se dívá na boxy a říká: <i>V pravém boxu jsou tři hvězdy. Z Borisova pozorování plyne, že v levém boxu mohou být maximálně tři hvězdy.</i></p></p>Úsudek je správný. Boris ví, že celkový počet hvězd je šest. Pokud ve viditelné části boxu jsou tři hvězdy, zbývající hvězdy jsou buď v černě natřené části boxu nebo ve druhém boxu. Zbývající hvězdy jsou tři, takže v levém boxu nemůže být více než tři hvězdy. Správná odpověď zní <i>ANO</i>. Klikněte na ni.</center>"}, hasCorrect: 0}],
             
["practice-two", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:400px;max-height:400px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/9_non-d_f.jpg?raw=true\"></td><td><img style=\"display:block;max-width:370px;max-height:370px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/9_nd.jpg?raw=true\"></td></table></center>Kontext: Děti si hrály na půdě, kde našly staré rozbité hračky. Byly z toho smutné. Přinesly je ukázat tatínkovi a prosily ho, zda by mohl rozbité hračky opravit.</p><center><p>Boris se dívá na boxy a říká: <i>Každé dítě přineslo jednu hračku. </i></p></p>Věta je adekvátní vůči kontextu a zároveň odpovídá pravému obrázku, neboť na něm má každé dítě v ruce jednu hračku. Na levém obrázku nese hračku pouze holčička, zatímco chlapeček má prázdné ruce. Odpověď <i>ani jeden</i> zde není adekvátní, protože se k větě hodí obrázek napravo. Klikněte tedy na odpověď <i>pravý</i>.</center>"}, hasCorrect: 2}],
            
["practice-two", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:450px;max-height:450px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_d.jpg?raw=true\"></td><td><img style=\"display:block;max-width:610px;max-height:610px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_d_f.jpg?raw=true\"></td></table></center>Kontext: Alena přišla navštívit svoji sestru Mariku. Alena byla celý týden na dovolené, a proto jí uniklo několik dílů oblíbeného detektivního seriálu. Marika jí proto stručně vylíčila, co se tam odehrálo.</p><center><p>Boris se dívá na boxy a říká: <i>Marika řekla, že policista Jan zatkl dva zloděje. </i></p></p>Věta je sice adekvátní vůči kontextu, ale ani jeden obrázek dané větě neodpovídá. Levý obrázek větě neodpovídá, protože jsou na něm dva policisté a každý z nich zatkl dva zloděje. Vyslovená věta ovšem zmiňuje pouze jednoho policistu. Pravý obrázek také neodpovídá, protože jsou na něm dva policisté a každý z nich zatkl jednoho zloděje. Ani jeden obrázek tedy neodpovídá větě. Zvolte možnost <i>ani jeden</i>.</center>"}, hasCorrect: 1}],             

          ["practice-two-over", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["second-item1-UE-all", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:700px;max-height:700px;width: auto;height: auto;\" src=\"https://github.com/Rh-Hor/Exp_Dec-2025/blob/main/data_includes/1-all.png?raw=true\"></td></table></center> Kontext: Lorem Ipsum </p><center><p>Boris se dívá na boxy a říká:</p> 1. <i>Všechny trojúhelníky jsou v levém boxu.</i></p></p>Z Borisova pozorování plyne, že:<p> 2. <i>všechny červené trojúhelníky jsou v levém boxu.</i></p> </center>"}, as: ["Pravdivost Borisovy první věty zaručuje pravdivost druhé věty", "Pravdivost Borisovy první věty nezaručuje pravdivost druhé věty."], presentAsScale: false, leftComment: null, rightComment: null}],

[["second-item1-UE-most", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:700;max-height:700px;width: auto;height: auto;\" src=\"https://github.com/Rh-Hor/Exp_Dec-2025/blob/main/data_includes/1-most.png?raw=true\"></td></table></center>Kontext: Lorem Ipsum </p><center><p>Boris se dívá na boxy a říká:</p> 1. <i>Většina trojúhelníků je v levém boxu.</i></p></p>Z Borisova pozorování plyne, že: <p> 2. <i>Většina XXX. </i></p> </center>"}, as: ["Pravdivost Borisovy první věty zaručuje pravdivost druhé věty", "Pravdivost Borisovy první věty nezaručuje pravdivost druhé věty."], presentAsScale: false, leftComment: null, rightComment: null}],

[["second-item1-UE-some", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:700px;max-height:700px;width: auto;height: auto;\" src=\"https://github.com/Rh-Hor/Exp_Dec-2025/blob/main/data_includes/1-some.png?raw=true\"></td></table></center>Kontext: Lorem Ipsum </p><center><p>Boris se dívá na boxy a říká:</p> 1. <i>Některé trojúhelníky jsou v levém boxu.</i></p></p>Z Borisova pozorování plyne, že: <p> 3.<i> Některé XXX</i></p></center>"}, as: ["Pravdivost Borisovy první věty zaručuje pravdivost druhé věty", "Pravdivost Borisovy první věty nezaručuje pravdivost druhé věty."], presentAsScale: false, leftComment: null, rightComment: null}],

["second-filler1-bad", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:700px;max-height:700px;width: auto;height: auto;\" src=\"https://github.com/Rh-Hor/Exp_Dec-2025/blob/main/data_includes/1-mixed.png?raw=true\"></td></table></center>Kontext: Známý modní dům pořádal módní přehlídku nové kolekce. Bylo pozváno spoustu důležitých osob a také zástupci módních časopisů. Akci uzavírala noční přehlídka dvou světových modelek. Fotografové měli plné ruce práce.</p><center><p>Boris se dívá na boxy a říká: <i>Každý fotograf vyfotil obě modelky.</i></p></p>Z Borisova pozorování plyne, že</center>"}, as: ["Pravdivost Borisovy první věty zaručuje pravdivost druhé věty", "Pravdivost Borisovy první věty nezaručuje pravdivost druhé věty."], presentAsScale: false, leftComment: null, rightComment: null}],  


];
