import { MainSection } from '../types';

export const analisi1CourseContent: MainSection[] = [
    {
        id: "lezione-1-logica",
        title: "Lezione 1: Logica Matematica",
        subsections: [
            {
                title: "Obiettivi e Fondamenti",
                content: [
                    "**Obiettivo:** analizzare e formalizzare metodi corretti di ragionamento.",
                    "La logica fornisce alla matematica un linguaggio chiaro e un metodo rigoroso per dimostrare teoremi partendo da assiomi più elementari.",
                    "Questa disciplina costituisce la base formale su cui si costruisce l'intero edificio matematico, garantendo la validità delle deduzioni e la coerenza delle teorie."
                ]
            },
            {
                title: "Nozioni Primitive e Assiomi",
                content: [
                    "In matematica, non tutto può essere definito o dimostrato. Esistono concetti e verità di partenza che vengono accettati intuitivamente o per convenzione.",
                    "**Nozione primitiva:** Un concetto fondamentale non definito tramite termini più semplici, ma accettato intuitivamente. Esempio classico: il concetto di \"punto\" nella geometria euclidea.",
                    "**Assioma (o Postulato):** Una proposizione assunta come vera senza dimostrazione. Gli assiomi costituiscono i \"mattoni\" iniziali di una teoria matematica.",
                    "Esempi celebri includono i postulati di Euclide. Consideriamo il V postulato (delle parallele):",
                    "**Assioma:** Dato un punto $P$ situato fuori da una retta $r$, esiste una sola retta passante per $P$ parallela a $r$."
                ]
            },
            {
                title: "Teoremi e Dimostrazioni",
                content: [
                    "A differenza degli assiomi, i teoremi sono affermazioni la cui verità deve essere stabilita attraverso un processo logico deduttivo.",
                    "**Teorema:** Una proposizione che viene dimostrata vera a partire dagli assiomi e dalle nozioni primitive, utilizzando le regole della logica.",
                    "Esempio di teorema geometrico:",
                    "**Teorema:** La somma degli angoli interni di un triangolo è sempre uguale a $\\pi$ radianti ($180^\\circ$).",
                    "La dimostrazione di un teorema è una sequenza finita di passaggi logici che, partendo dalle ipotesi (ciò che è dato o assunto), conduce alla tesi (ciò che si vuole provare)."
                ]
            }
        ]
    },
    {
        id: "lezione-2-proposizioni",
        title: "Lezione 2: Logica delle Proposizioni",
        subsections: [
            {
                title: "Definizioni Fondamentali",
                content: [
                    "**Proposizione:** qualsiasi affermazione o enunciato a cui è possibile attribuire univocamente un valore di verità: **Vero (V)** oppure **Falso (F)**.",
                    "Esempio: \"Sono uno studente di Ingegneria Gestionale\" è una proposizione perché può essere solo vera o falsa.",
                    "**Connettivi logici:** operatori che permettono di costruire nuove proposizioni composte partendo da una o più proposizioni elementari."
                ]
            },
            {
                title: "Tavole della Verità",
                content: [
                    "I connettivi logici sono definiti tramite le **tavole della verità**, che mostrano il valore di verità della proposizione composta per ogni possibile combinazione dei valori delle proposizioni componenti.",
                    "**1) Negazione ($\\sim p$ o $\\neg p$):** Inverte il valore di verità.",
                    "$$ \\begin{array}{c|c} p & \\neg p \\\\ \\hline V & F \\\\ F & V \\end{array} $$",
                    "**2) Congiunzione ($p \\wedge q$, \"AND\"):** Vera solo se entrambe sono vere.",
                    "$$ \\begin{array}{cc|c} p & q & p \\wedge q \\\\ \\hline V & V & V \\\\ V & F & F \\\\ F & V & F \\\\ F & F & F \\end{array} $$",
                    "**3) Disgiunzione ($p \\vee q$, \"OR\"):** Vera se almeno una delle due è vera.",
                    "$$ \\begin{array}{cc|c} p & q & p \\vee q \\\\ \\hline V & V & V \\\\ V & F & V \\\\ F & V & V \\\\ F & F & F \\end{array} $$",
                    "**4) Implicazione ($p \\Rightarrow q$, \"SE... ALLORA\"):** Falsa solo se l'antecedente è vero e il conseguente è falso.",
                    "$$ \\begin{array}{cc|c} p & q & p \\Rightarrow q \\\\ \\hline V & V & V \\\\ V & F & F \\\\ F & V & V \\\\ F & F & V \\end{array} $$",
                    "**5) Doppia Implicazione ($p \\Leftrightarrow q$, \"SE E SOLO SE\"):** Vera se $p$ e $q$ hanno lo stesso valore di verità."
                ]
            },
            {
                title: "Equivalenze Logiche e Leggi",
                content: [
                    "Due proposizioni si dicono **logicamente equivalenti** se hanno la stessa tavola della verità.",
                    "**Equivalenza dell'Implicazione:** Un risultato fondamentale è che l'implicazione $p \\Rightarrow q$ è equivalente a $\\neg p \\vee q$.",
                    "Dimostrazione tramite tavola della verità:",
                    "$$ \\begin{array}{cc|c|c|c} p & q & \\neg p & p \\Rightarrow q & \\neg p \\vee q \\\\ \\hline V & V & F & V & V \\\\ V & F & F & F & F \\\\ F & V & V & V & V \\\\ F & F & V & V & V \\end{array} $$",
                    "Poiché le colonne di $p \\Rightarrow q$ e $\\neg p \\vee q$ coincidono, l'equivalenza è dimostrata.",
                    "Altra equivalenza importante: $(p \\Leftrightarrow q)$ equivale a $(p \\Rightarrow q) \\wedge (q \\Rightarrow p)$."
                ]
            },
            {
                title: "Tautologie, Contraddizioni e De Morgan",
                content: [
                    "**Tautologia:** una proposizione composta che risulta **sempre vera**, indipendentemente dai valori di verità delle sue componenti.",
                    "Esempio classico: $\\neg p \\vee p$ (Principio del terzo escluso).",
                    "**Contraddizione:** una proposizione che risulta **sempre falsa**.",
                    "**Leggi di De Morgan:** Regole fondamentali per negare congiunzioni e disgiunzioni:",
                    "1. La negazione di una disgiunzione è la congiunzione delle negazioni:",
                    "$$ \\neg (p \\vee q) \\Leftrightarrow \\neg p \\wedge \\neg q $$",
                    "2. La negazione di una congiunzione è la disgiunzione delle negazioni:",
                    "$$ \\neg (p \\wedge q) \\Leftrightarrow \\neg p \\vee \\neg q $$"
                ]
            }
        ]
    },
    {
        id: "lezione-3-insiemi",
        title: "Lezione 3: Simboli e Operazioni Fondamentali",
        subsections: [
            {
                title: "Insiemi e Simbologia di Base",
                content: [
                    "**Appartenenza ($\\in$):** Indica che un elemento fa parte di un insieme. Si usano lettere minuscole per gli elementi e maiuscole per gli insiemi.",
                    "Esempio: $a \\in A$ (a appartiene ad A).",
                    "**Insieme:** Una collezione ben definita di oggetti distinti. Può essere descritto per elencazione o per proprietà caratteristica.",
                    "Esempio: $A=\\{3,4,7\\}$ è uguale a $\\{3,7,4\\}$ (l'ordine non conta)."
                ]
            },
            {
                title: "Insiemi Numerici Fondamentali",
                content: [
                    "**$\\mathbb{N}$ (Numeri Naturali):** $\\{0, 1, 2, 3...\\} = \\{n \\in \\mathbb{Z} | n \\ge 0\\}$",
                    "**$\\mathbb{Z}$ (Numeri Interi):** $\\{..., -2, -1, 0, 1, 2, ...\\}$",
                    "**$\\mathbb{Q}$ (Numeri Razionali):** Numeri esprimibili come frazione $m/n$ con $m,n \\in \\mathbb{Z}, n \\neq 0$.",
                    "**$\\mathbb{R}$ (Numeri Reali):** Include razionali e irrazionali (numeri con cifre decimali infinite non periodiche, come $\\pi$ o $\\sqrt{2}$).",
                    "**$\\mathbb{C}$ (Numeri Complessi):** Estensione dei reali che include l'unità immaginaria $i$ tale che $i^2 = -1$.",
                    "**$\\emptyset$ (Insieme Vuoto):** L'insieme privo di elementi."
                ]
            },
            {
                title: "Relazioni tra Insiemi e Quantificatori",
                content: [
                    "**Quantificatori Logici:**",
                    "*   **Universale ($\\forall$):** \"Per ogni\" o \"per tutti\".",
                    "*   **Esistenziale ($\\exists$):** \"Esiste almeno un\".",
                    "**Inclusione ($A \\subseteq B$):** Si dice che $A$ è contenuto in $B$ se ogni elemento di $A$ è anche elemento di $B$.",
                    "$$ A \\subseteq B \\iff (\\forall x \\in U) (x \\in A \\Rightarrow x \\in B) $$",
                    "**Uguaglianza ($A = B$):** Due insiemi sono uguali se contengono esattamente gli stessi elementi.",
                    "$$ A = B \\iff (A \\subseteq B) \\wedge (B \\subseteq A) $$"
                ]
            },
            {
                title: "Operazioni tra Insiemi",
                content: [
                    "Dati due insiemi $A, B$ contenuti in un universo $U$:",
                    "**1. Unione ($A \\cup B$):** L'insieme degli elementi che appartengono ad $A$ **oppure** a $B$.",
                    "$$ A \\cup B = \\{y \\in U \\mid y \\in A \\vee y \\in B\\} $$",
                    "**2. Intersezione ($A \\cap B$):** L'insieme degli elementi che appartengono **sia** ad $A$ **che** a $B$.",
                    "$$ A \\cap B = \\{z \\in U \\mid z \\in A \\wedge z \\in B\\} $$",
                    "**Nota:** Se $A \\cap B = \\emptyset$, gli insiemi si dicono **disgiunti**.",
                    "**3. Differenza ($A \\setminus B$):** L'insieme degli elementi che appartengono ad $A$ ma **non** a $B$.",
                    "$$ A \\setminus B = \\{x \\in U \\mid x \\in A \\wedge x \\notin B\\} $$",
                    "**4. Complementare ($C_U(A)$ o $\\bar{A}$):** Tutti gli elementi di $U$ che non appartengono ad $A$ (equivalente a $U \\setminus A$).",
                    "**5. Prodotto Cartesiano ($A \\times B$):** L'insieme di tutte le coppie ordinate $(a,b)$ con $a \\in A$ e $b \\in B$.",
                    "$$ A \\times B = \\{(a,b) \\mid a \\in A, b \\in B\\} $$"
                ]
            },
            {
                title: "Esempi Pratici",
                content: [
                    "Siano $A=\\{5, 8, 9, 12, 16\\}$ e $B=\\{5, 8, 24\\}$.",
                    "**Unione:** $A \\cup B = \\{5, 8, 9, 12, 16, 24\\}$",
                    "**Intersezione:** $A \\cap B = \\{5, 8\\}$",
                    "**Differenza ($A \\setminus B$):** $\\{9, 12, 16\\}$ (elementi solo in A)",
                    "**Differenza ($B \\setminus A$):** $\\{24\\}$ (elementi solo in B)"
                ]
            }
        ]
    },
    {
        id: "lezione-4-completezza",
        title: "Lezione 4: Insiemi Numerici e Completezza",
        subsections: [
            {
                title: "Insiemi $\\mathbb{Q}$ e $\\mathbb{R}$",
                content: [
                    "**Numeri Razionali ($\\mathbb{Q}$):** Insieme dei numeri esprimibili come rapporto tra interi.",
                    "$$ \\mathbb{Q} = \\left\\{\\frac{n}{m} \\mid n, m \\in \\mathbb{Z}, m \\neq 0\\right\\} $$",
                    "Un numero razionale, scritto in forma decimale, ha un numero finito di cifre oppure infinite cifre che si ripetono periodicamente.",
                    "**Numeri Irrazionali ($\\mathbb{R} \\setminus \\mathbb{Q}$):** Numeri reali che non sono razionali (es. $\\pi, \\sqrt{2}$). Hanno infinite cifre decimali non periodiche.",
                    "**Gerarchia degli insiemi:**",
                    "$$ \\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R} $$",
                    "**Proprietà di Densità:** $\\mathbb{Q}$ è denso in $\\mathbb{R}$.",
                    "Cioè: Siano $x, y \\in \\mathbb{R}$ con $x < y$, esistono **infiniti** numeri razionali $z \\in \\mathbb{Q}$ tali che:",
                    "$$ x < z < y $$"
                ]
            },
            {
                title: "Maggioranti, Minoranti ed Estremi",
                content: [
                    "Sia $X = \\mathbb{R}$ (o $\\mathbb{Q}$) e sia $E \\subset X$. Diciamo che $E$ è:",
                    "*   **Limitato superiormente:** se esiste $M \\in X$ tale che $\\forall x \\in E, x \\le M$. $M$ si dice **maggiorante**.",
                    "*   **Limitato inferiormente:** se esiste $m \\in X$ tale che $\\forall x \\in E, x \\ge m$. $m$ si dice **minorante**.",
                    "*   **Limitato:** se è limitato sia superiormente che inferiormente.",
                    "**Massimo ($max(E)$):** Un elemento $M$ è il massimo di $E$ se:",
                    "1.  $M \\in E$ (appartiene all'insieme)",
                    "2.  $M$ è un maggiorante di $E$ ($\\forall x \\in E, x \\le M$)",
                    "Se esiste, il massimo è **unico**.",
                    "**Minimo ($min(E)$):** Un elemento $m$ è il minimo di $E$ se:",
                    "1.  $m \\in E$ (appartiene all'insieme)",
                    "2.  $m$ è un minorante di $E$ ($\\forall x \\in E, x \\ge m$)",
                    "Se esiste, il minimo è **unico**."
                ]
            },
            {
                title: "Estremo Superiore e Inferiore",
                content: [
                    "Spesso un insieme limitato non ha massimo (es. l'intervallo $(0, 1)$ non ha massimo perché $1 \\notin (0,1)$). Introduciamo quindi concetti più generali.",
                    "**Estremo Superiore ($sup(E)$):** È il **minimo dei maggioranti**.",
                    "Si dice che $s = sup(E)$ se:",
                    "1.  $s$ è un maggiorante di $E$ ($\\forall x \\in E, x \\le s$).",
                    "2.  Tra tutti i maggioranti, $s$ è il più piccolo (cioè $\\forall \\epsilon > 0$, $s - \\epsilon$ non è più un maggiorante).",
                    "**Estremo Inferiore ($inf(E)$):** È il **massimo dei minoranti**.",
                    "Si dice che $i = inf(E)$ se:",
                    "1.  $i$ è un minorante di $E$ ($\\forall x \\in E, x \\ge i$).",
                    "2.  Tra tutti i minoranti, $i$ è il più grande.",
                    "**Nota:** $sup(E)$ e $inf(E)$ **non necessariamente appartengono** all'insieme $E$.",
                    "*   Se $sup(E) \\in E$, allora $sup(E) = max(E)$.",
                    "*   Se $inf(E) \\in E$, allora $inf(E) = min(E)$."
                ]
            },
            {
                title: "Assioma di Completezza ed Esempi",
                content: [
                    "**Assioma di Completezza:** Ogni sottoinsieme non vuoto di $\\mathbb{R}$ limitato superiormente ammette estremo superiore in $\\mathbb{R}$.",
                    "*(Questo assioma distingue $\\mathbb{R}$ da $\\mathbb{Q}$. In $\\mathbb{Q}$ possono esserci insiemi limitati senza sup razionale, es. $\\{x \\in \\mathbb{Q} \\mid x^2 < 2\\}$ ha sup $\\sqrt{2} \\notin \\mathbb{Q}$)*.",
                    "**Esempi:**",
                    "*   $E = [-2, 1]$. $max=1, min=-2$. Quindi $sup=1, inf=-2$.",
                    "*   $E = (-\\infty, 3)$. Limitato superiormente. $sup=3$. Non ha massimo ($3 \\notin E$).",
                    "*   $E = \\{x \\in \\mathbb{R} \\mid x^3 \\ge 27\\} = [3, +\\infty)$. $min=3, inf=3$. Illimitato superiormente ($sup=+\\infty$).",
                    "*   $E = \\{1, 1/2, 1/3, ..., 1/n\\}$. $max=1, sup=1$. $inf=0$. Non ha minimo ($0 \\notin E$).",
                    "*   $E = \\{x \\in \\mathbb{Q} \\mid x^2 < 2\\}$. In $\\mathbb{R}$, $sup=\\sqrt{2}$. In $\\mathbb{Q}$, non esiste sup (perché $\\sqrt{2}$ è irrazionale)."
                ]
            }
        ]
    },
    {
        id: "lezione-5-induzione",
        title: "Lezione 5: Induzione, Sommatorie e Coefficienti Binomiali",
        subsections: [
            {
                title: "Principio di Induzione",
                content: [
                    "Il **Principio di Induzione** è una tecnica di dimostrazione fondamentale per proposizioni $P(n)$ che dipendono da un numero naturale $n$.",
                    "**Schema di dimostrazione:**",
                    "1.  **Base:** Verificare che $P(n_0)$ sia vera (di solito $n_0 = 0$ o $1$).",
                    "2.  **Passo Induttivo:** Assumendo che $P(n)$ sia vera (**Ipotesi Induttiva**), dimostrare che $P(n+1)$ è vera.",
                    "Se entrambe le condizioni sono soddisfatte, allora $P(n)$ è vera per ogni $n \\ge n_0$."
                ]
            },
            {
                title: "Esempi di Induzione",
                content: [
                    "**1. Disuguaglianza di Bernoulli:** $\\forall n \\in \\mathbb{N}, x \\in \\mathbb{R}, x \\ge -1$, vale $(1+x)^n \\ge 1+nx$.",
                    "*   **Base ($n=0$):** $(1+x)^0 \\ge 1+0 \\Rightarrow 1 \\ge 1$ (Vero).",
                    "*   **Induzione:** Ipotesi $(1+x)^n \\ge 1+nx$. Tesi $(1+x)^{n+1} \\ge 1+(n+1)x$.",
                    "$$ (1+x)^{n+1} = (1+x)^n(1+x) \\ge (1+nx)(1+x) = 1+x+nx+nx^2 $$",
                    "$$ = 1+(n+1)x+nx^2 \\ge 1+(n+1)x $$",
                    "(poiché $nx^2 \\ge 0$).",
                    "**2. Somma dei primi $n$ interi:** $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$",
                    "*   **Base ($n=1$):** $1 = \\frac{1(2)}{2} = 1$ (Vero).",
                    "*   **Passo:** Dimostrare per $n+1$: $\\sum_{k=1}^{n+1} k = \\frac{(n+1)(n+2)}{2}$.",
                    "$$ \\sum_{k=1}^{n+1} k = \\sum_{k=1}^{n} k + (n+1) = \\frac{n(n+1)}{2} + (n+1) = (n+1)\\left(\\frac{n}{2} + 1\\right) = \\frac{(n+1)(n+2)}{2} $$"
                ]
            },
            {
                title: "Sommatorie",
                content: [
                    "**Definizione:** $\\sum_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n$",
                    "**Proprietà:**",
                    "*   $\\sum c \\cdot a_k = c \\sum a_k$ (**Lineare**)",
                    "*   $\\sum_{k=1}^{n} a_{k-1} = \\sum_{j=0}^{n-1} a_j$ (**Cambio di indice**)",
                    "**Nota:** Il prodotto delle somme NON è la somma dei prodotti ($\\sum a_k \\cdot \\sum b_k \\neq \\sum a_k b_k$).",
                    "**Esempio di Calcolo ($n=5, a_k = 1/2^{k-1}$):**",
                    "$$ \\sum_{k=1}^{5} \\frac{1}{2^{k-1}} = 1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} = \\frac{16+8+4+2+1}{16} = \\frac{31}{16} $$"
                ]
            },
            {
                title: "Coefficiente Binomiale",
                content: [
                    "Dati $n, k \\in \\mathbb{N}$ con $0 \\le k \\le n$, si definisce:",
                    "$$ \\binom{n}{k} = \\frac{n!}{k!(n-k)!} $$",
                    "dove $n! = n(n-1)...(1)$ è il fattoriale ($0! = 1$).",
                    "**Proprietà fondamentali:**",
                    "1.  $\\binom{n}{0} = 1$ e $\\binom{n}{n} = 1$",
                    "2.  **Simmetria:** $\\binom{n}{k} = \\binom{n}{n-k}$",
                    "3.  **Identità di Pascal:** $\\binom{n}{k-1} + \\binom{n}{k} = \\binom{n+1}{k}$",
                    "**Esempi:**",
                    "*   $\\binom{5}{2} = \\frac{5 \\cdot 4}{2 \\cdot 1} = 10$",
                    "*   $\\binom{116}{113} = \\binom{116}{3} = \\frac{116 \\cdot 115 \\cdot 114}{3!} = 253460$"
                ]
            }
        ]
    },
    {
        id: "lezione-6-newton-complessi",
        title: "Lezione 6: Binomio di Newton e Numeri Complessi",
        subsections: [
            {
                title: "Formula del Binomio di Newton",
                content: [
                    "Per ogni $n \\ge 1$ e per ogni coppia di numeri reali $a, b$, vale la seguente uguaglianza:",
                    "$$ (a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k $$",
                    "Questa formula permette di sviluppare la potenza $n$-esima di un binomio.",
                    "**Dimostrazione (Induzione su n):**",
                    "Si basa sull'identità di Pascal: $\\binom{n}{k} + \\binom{n}{k-1} = \\binom{n+1}{k}$.",
                    "**Esempio:** Calcolare il coefficiente di $y^5$ nello sviluppo di $(2x - y)^5$.",
                    "Il termine generale è $\\binom{5}{k} (2x)^{5-k} (-y)^k$. Per avere $y^5$, devo scegliere $k=5$.",
                    "$$ \\binom{5}{5} (2x)^0 (-y)^5 = 1 \\cdot 1 \\cdot (-1)^5 y^5 = -y^5 $$"
                ]
            },
            {
                title: "Insieme dei Numeri Complessi ($\\mathbb{C}$)",
                content: [
                    "**Motivazione:** Equazioni come $x^2 = -1$ non hanno soluzioni in $\\mathbb{R}$. È necessario estendere i numeri reali.",
                    "**Definizione:** L'insieme $\\mathbb{C}$ è definito come $\\mathbb{R}^2 = \\{(a,b) \\mid a,b \\in \\mathbb{R}\\}$ dotato delle operazioni:",
                    "1.  **Somma:** $(a,b) + (c,d) = (a+c, b+d)$",
                    "2.  **Prodotto:** $(a,b) \\cdot (c,d) = (ac - bd, ad + bc)$",
                    "L'elemento $(0,0)$ è neutro per la somma, $(1,0)$ è neutro per il prodotto.",
                    "L'insieme $\\mathbb{R}$ è identificato con il sottoinsieme $\\{(a,0) \\mid a \\in \\mathbb{R}\\} \\subset \\mathbb{C}$."
                ]
            },
            {
                title: "Forma Algebrica",
                content: [
                    "Si definisce l'**Unità Immaginaria** $i = (0,1)$.",
                    "Proprietà fondamentale: **$i^2 = -1$**.",
                    "Ogni numero complesso $z = (a,b)$ può essere scritto in **forma algebrica**:",
                    "$$ z = a + ib $$",
                    "Dove:",
                    "*   $a = Re(z)$ è la **Parte Reale**.",
                    "*   $b = Im(z)$ è la **Parte Immaginaria**.",
                    "**Operazioni in forma algebrica:**",
                    "Siano $z_1 = a+ib$ e $z_2 = c+id$.",
                    "*   **Somma:** $z_1 + z_2 = (a+c) + i(b+d)$",
                    "*   **Prodotto:** $z_1 \\cdot z_2 = (ac-bd) + i(ad+bc)$",
                    "*   **Rapporto:** $\\frac{z_1}{z_2} = \\frac{z_1 \\cdot \\bar{z}_2}{z_2 \\cdot \\bar{z}_2} = \\frac{ac+bd}{c^2+d^2} + i\\frac{bc-ad}{c^2+d^2}$"
                ]
            },
            {
                title: "Proprietà di Re(z) e Im(z)",
                content: [
                    "Per ogni $z_1, z_2 \\in \\mathbb{C}$ e $\\alpha \\in \\mathbb{R}$:",
                    "1.  $Re(z_1 + z_2) = Re(z_1) + Re(z_2)$",
                    "2.  $Im(z_1 + z_2) = Im(z_1) + Im(z_2)$",
                    "3.  $Re(\\alpha z) = \\alpha Re(z)$ e $Im(\\alpha z) = \\alpha Im(z)$",
                    "**Uguaglianza:** Due numeri complessi sono uguali se hanno stessa parte reale E stessa parte immaginaria."
                ]
            },
            {
                title: "Esercizi Svolti",
                content: [
                    "**1. Semplificare $z = \\frac{\\sqrt{3}i-2}{\\sqrt{3}i+2}$:**",
                    "Moltiplico numeratore e denominatore per il coniugato del denominatore ($-2 - \\sqrt{3}i = -(2+\\sqrt{3}i)$ oppure direttamente $\\sqrt{3}i-2$):",
                    "Risultato: $z = -\\frac{1}{7} + \\frac{4\\sqrt{3}}{7}i$",
                    "**2. Calcolo potenza:** $k = \\frac{(1+2i)^4}{i}$",
                    "Calculando $(1+2i)^2 = 1 - 4 + 4i = -3+4i$.",
                    "Quindi $(1+2i)^4 = (-3+4i)^2 = 9 - 16 - 24i = -7 - 24i$.",
                    "Dividendo per $i$ (che equivale a moltiplicare per $-i$):",
                    "$$ k = (-7-24i)(-i) = 7i + 24i^2 = -24 + 7i $$"
                ]
            }
        ]
    },
    {
        id: "lezione-7-piano-gauss-modulo",
        title: "Lezione 7: Piano Cartesiano e Modulo",
        subsections: [
            {
                title: "Piano di Gauss e Coniugato",
                content: [
                    "Poiché $\\mathbb{C} \\cong \\mathbb{R}^2$, possiamo rappresentare ogni numero complesso $z = a+ib$ come un punto $P(a,b)$ nel **Piano Cartesiano (di Gauss)**.",
                    "L'asse $x$ è l'**Asse Reale**, l'asse $y$ è l'**Asse Immaginario**.",
                    "**Coniugato ($\\bar{z}$):** Dato $z = a+ib$, il suo coniugato è $\\bar{z} = a-ib$.",
                    "Geometricamente, $\\bar{z}$ è il simmetrico di $z$ rispetto all'asse reale.",
                    "**Proprietà del Coniugato:**",
                    "1.  $\\overline{z \\pm w} = \\overline{z} \\pm \\overline{w}$",
                    "2.  $\\overline{z \\cdot w} = \\overline{z} \\cdot \\overline{w}$",
                    "3.  $\\overline{\\left(\\frac{z}{w}\\right)} = \\frac{\\overline{z}}{\\overline{w}}$",
                    "4.  $z \\cdot \\overline{z} = a^2 + b^2$ (Numero reale non negativo!)",
                    "5.  $Re(z) = \\frac{z + \\overline{z}}{2}$, $Im(z) = \\frac{z - \\overline{z}}{2i}$"
                ]
            },
            {
                title: "Modulo di un Numero Complesso",
                content: [
                    "**Definizione:** Il modulo $|z|$ è la distanza del punto $z$ dall'origine.",
                    "Se $z = a+ib$, allora:",
                    "$$ |z| = \\sqrt{a^2 + b^2} = \\sqrt{z \\cdot \\overline{z}} $$",
                    "**Proprietà del Modulo:**",
                    "1.  $|z| \\ge 0$ e $|z|=0 \\iff z=0$.",
                    "2.  $|z| = |\\overline{z}|$.",
                    "3.  $|z \\cdot w| = |z| \\cdot |w|$.",
                    "4.  $|\\frac{z}{w}| = \\frac{|z|}{|w|}$ (se $w \\neq 0$).",
                    "5.  **Disuguaglianza Triangolare:** $|z+w| \\le |z| + |w|$.",
                    "6.  **Disuguaglianza Triangolare Inversa:** $|z-w| \\ge ||z| - |w||$."
                ]
            },
            {
                title: "Esercizio Svolto",
                content: [
                    "**Risolvere $z^2 + \\overline{z} = 0$**",
                    "Pongo $z = x+iy$. L'equazione diventa:",
                    "$(x+iy)^2 + (x-iy) = 0 \\Rightarrow x^2 - y^2 + 2ixy + x - iy = 0$",
                    "Separando parte reale e immaginaria:",
                    "$$ \\begin{cases} x^2 - y^2 + x = 0 \\\\ 2xy - y = 0 \\rightarrow y(2x-1)=0 \\end{cases} $$",
                    "Dalla seconda equazione: $y=0$ oppure $x=1/2$.",
                    "*   Se $y=0$: $x^2+x=0 \\Rightarrow x=0, x=-1$. Soluzioni: $z_1=0, z_2=-1$.",
                    "*   Se $x=1/2$: $1/4 - y^2 + 1/2 = 0 \\Rightarrow y^2 = 3/4 \\Rightarrow y = \\pm \\frac{\\sqrt{3}}{2}$.",
                    "Soluzioni: $z_3 = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}, z_4 = \\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$."
                ]
            }
        ]
    },
    {
        id: "lezione-8-trigonometrica",
        title: "Lezione 8: Rappresentazione Trigonometrica",
        subsections: [
            {
                title: "Coordinate Polari",
                content: [
                    "I punti nel piano complesso possono essere individuati non solo tramite coordinate cartesiane $(a,b)$, ma anche tramite **coordinate polari** $(\\rho, \\theta)$.",
                    "**Modulo ($\\rho$):** $\\rho = |z| = \\sqrt{a^2+b^2}$ (distanza dall'origine).",
                    "**Argomento ($\\theta$):** $\\theta = \\arg(z)$ è l'angolo formato dal vettore $z$ con il semiasse reale positivo.",
                    "**Relazioni tra coordinate:**",
                    "$$ a = \\rho \\cos \\theta, \\quad b = \\rho \\sin \\theta $$"
                ]
            },
            {
                title: "Forma Trigonometrica",
                content: [
                    "Un numero complesso $z \\neq 0$ può essere scritto in **forma trigonometrica (o polare)**:",
                    "$$ z = \\rho(\\cos \\theta + i \\sin \\theta) $$",
                    "Questa rappresentazione è particolarmente utile per calcolare potenze e radici.",
                    "**Notazione esponenziale (Formula di Eulero):**",
                    "$$ e^{i\\theta} = \\cos \\theta + i \\sin \\theta $$",
                    "Quindi: $z = \\rho e^{i\\theta}$."
                ]
            },
            {
                title: "Formula di De Moivre",
                content: [
                    "La formula di De Moivre permette di calcolare facilmente le potenze di un numero complesso:",
                    "$$ z^n = [\\rho(\\cos \\theta + i \\sin \\theta)]^n = \\rho^n (\\cos(n\\theta) + i \\sin(n\\theta)) $$",
                    "**Esempio:** Calcolare $(1+i)^{10}$.",
                    "1.  $|1+i| = \\sqrt{2}$, $\\arg(1+i) = \\pi/4$.",
                    "2.  $(1+i)^{10} = (\\sqrt{2})^{10} (\\cos(10 \\cdot \\pi/4) + i \\sin(10 \\cdot \\pi/4))$.",
                    "3.  $= 32 (\\cos(5\\pi/2) + i \\sin(5\\pi/2)) = 32(0 + i) = 32i$."
                ]
            },
            {
                title: "Radici n-esime",
                content: [
                    "Le soluzioni dell'equazione $z^n = w$ sono dette **radici n-esime** di $w$.",
                    "Se $w = r(\\cos \\varphi + i \\sin \\varphi)$, esistono esattamente $n$ radici distinte:",
                    "$$ z_k = \\sqrt[n]{r} \\left[ \\cos \\left( \\frac{\\varphi + 2k\\pi}{n} \\right) + i \\sin \\left( \\frac{\\varphi + 2k\\pi}{n} \\right) \\right] $$",
                    "con $k = 0, 1, \\dots, n-1$.",
                    "**Interpretazione Geometrica:** Le $n$ radici sono i vertici di un **poligono regolare** di $n$ lati inscritto nella circonferenza di raggio $\\sqrt[n]{|w|}$ centrata nell'origine."
                ]
            },
            {
                title: "Esempi di Radici",
                content: [
                    "**1. Radici cubiche di $-1$:** $z^3 = -1$.",
                    "$|w|=1$, $\\arg(w)=\\pi$. $\\rho_k = 1$, $\\theta_k = \\frac{\\pi + 2k\\pi}{3}$.",
                    "*   $z_0 = \\cos(\\pi/3) + i\\sin(\\pi/3) = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$",
                    "*   $z_1 = \\cos(\\pi) + i\\sin(\\pi) = -1$",
                    "*   $z_2 = \\cos(5\\pi/3) + i\\sin(5\\pi/3) = \\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$",
                    "**2. Radici cubiche di $-8i$:** $z^3 = -8i$.",
                    "$|w|=8$, $\\arg(w)=3\\pi/2$. $\\rho_k = 2$, $\\theta_k = \\frac{3\\pi/2 + 2k\\pi}{3}$.",
                    "*   $z_0 = 2i$",
                    "*   $z_1 = -\\sqrt{3} - i$",
                    "*   $z_2 = \\sqrt{3} - i$"
                ]
            }
        ]
    },
    {
        id: "lezione-9-tfa-equazioni",
        title: "Lezione 9: Teorema Fondamentale dell'Algebra",
        subsections: [
            {
                title: "Teorema Fondamentale dell'Algebra",
                content: [
                    "Ogni equazione polinomiale a coefficienti complessi di grado $n \\ge 1$ ha esattamente $n$ soluzioni in $\\mathbb{C}$ (contate con la loro molteplicità).",
                    "$$ a_n z^n + a_{n-1}z^{n-1} + \\dots + a_1 z + a_0 = 0 $$",
                    "con $a_i \\in \\mathbb{C}$ e $a_n \\neq 0$.",
                    "**Caso particolare:** L'equazione $z^n = w$ ha esattamente $n$ soluzioni distinte (le radici n-esime di $w$)."
                ]
            },
            {
                title: "Metodo di Risoluzione con Modulo e Argomento",
                content: [
                    "Per risolvere equazioni del tipo $z^n = w$ o equazioni che coinvolgono $\\overline{z}$ e $|z|$, si usa la rappresentazione polare:",
                    "Poniamo $z = \\rho e^{i\\theta}$ con $\\rho \\ge 0$ e $\\theta \\in [0, 2\\pi)$.",
                    "**Esempio:** Risolvere $z^3 = \\overline{z}$.",
                    "$(\\rho e^{i\\theta})^3 = \\rho e^{-i\\theta} \\Rightarrow \\rho^3 e^{i3\\theta} = \\rho e^{-i\\theta}$",
                    "Confrontando moduli e argomenti:",
                    "$$ \\begin{cases} \\rho^3 = \\rho \\Rightarrow \\rho(\\rho^2-1)=0 \\Rightarrow \\rho=0 \\text{ o } \\rho=1 \\\\ 3\\theta = -\\theta + 2k\\pi \\Rightarrow \\theta = k\\frac{\\pi}{2} \\end{cases} $$",
                    "Soluzioni: $z=0$ e $z = e^{ik\\pi/2}$ per $k=0,1,2,3$ (cioè $1, i, -1, -i$)."
                ]
            },
            {
                title: "Esercizio Tipo Esame: $iz^3 = \\overline{z}$",
                content: [
                    "Sicuramente $z=0$ è soluzione. Per $z \\neq 0$, poniamo $z = \\rho e^{i\\theta}$.",
                    "Ricordando che $i = e^{i\\pi/2}$:",
                    "$$ e^{i\\pi/2} \\cdot \\rho^3 e^{i3\\theta} = \\rho e^{-i\\theta} $$",
                    "Moduli: $\\rho^3 = \\rho \\Rightarrow \\rho = 0$ o $\\rho = 1$.",
                    "Argomenti: $\\frac{\\pi}{2} + 3\\theta = -\\theta + 2k\\pi \\Rightarrow 4\\theta = -\\frac{\\pi}{2} + 2k\\pi$.",
                    "$\\theta_k = -\\frac{\\pi}{8} + k\\frac{\\pi}{2}$ per $k=0,1,2,3$.",
                    "Le 4 soluzioni non nulle sono punti sulla circonferenza unitaria agli angoli corrispondenti."
                ]
            },
            {
                title: "Esercizio: $(z+3i)^4 + 36 = 0$",
                content: [
                    "Poniamo $y = z+3i$. L'equazione diventa $y^4 = -36$.",
                    "$|w| = 36$, $\\arg(w) = \\pi$.",
                    "$y_k = \\sqrt[4]{36} e^{i\\theta_k} = \\sqrt{6} e^{i\\theta_k}$ con $\\theta_k = \\frac{\\pi + 2k\\pi}{4}$.",
                    "*   $y_0 = \\sqrt{6}(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}) = \\sqrt{3} + i\\sqrt{3}$",
                    "*   $y_1 = \\sqrt{6}(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4}) = -\\sqrt{3} + i\\sqrt{3}$",
                    "*   $y_2 = -\\sqrt{3} - i\\sqrt{3}$",
                    "*   $y_3 = \\sqrt{3} - i\\sqrt{3}$",
                    "**Soluzione finale:** $z_k = y_k - 3i$."
                ]
            },
            {
                title: "Esercizio: $8z = i|z|^3\\overline{z}$",
                content: [
                    "Poniamo $z = \\rho e^{i\\alpha}$. L'equazione diventa:",
                    "$8\\rho e^{i\\alpha} = \\rho^4 e^{i\\pi/2} e^{-i\\alpha}$.",
                    "**Moduli:** $8\\rho = \\rho^4 \\Rightarrow \\rho(\\rho^3-8)=0 \\Rightarrow \\rho=0$ o $\\rho=2$.",
                    "**Argomenti:** $\\alpha = \\frac{\\pi}{2} - \\alpha + 2k\\pi \\Rightarrow \\alpha = \\frac{\\pi}{4} + k\\pi$.",
                    "**Soluzioni:**",
                    "*   $z_1 = 0$",
                    "*   $z_2 = 2e^{i\\pi/4} = \\sqrt{2} + i\\sqrt{2}$",
                    "*   $z_3 = 2e^{i5\\pi/4} = -\\sqrt{2} - i\\sqrt{2}$"
                ]
            }
        ]
    },
    {
        id: "lezione-10-esercizi-complessi",
        title: "Lezione 10: Esercizi Completi sui Numeri Complessi",
        subsections: [
            {
                title: "Operazioni Algebriche",
                content: [
                    "Siano $z = 3+2i$ e $w = 2-5i$.",
                    "**Somma:** $z+w = (3+2) + (2-5)i = 5-3i$",
                    "**Differenza:** $z-w = (3-2) + (2+5)i = 1+7i$",
                    "**Prodotto:** $z \\cdot w = (3+2i)(2-5i) = 6 - 15i + 4i - 10i^2 = 6 - 11i + 10 = 16 - 11i$",
                    "**Moduli:** $|z|^2 = 9+4 = 13$, $|w|^2 = 4+25 = 29$.",
                    "**Divisione:**",
                    "$$ \\frac{z}{w} = \\frac{3+2i}{2-5i} \\cdot \\frac{2+5i}{2+5i} = \\frac{6+15i+4i+10i^2}{4+25} = \\frac{-4+19i}{29} = -\\frac{4}{29} + i\\frac{19}{29} $$"
                ]
            },
            {
                title: "Radici di $-i$",
                content: [
                    "Calcolare le radici cubiche di $-i$: $z^3 = -i$.",
                    "$|w|=1$, $\\arg(w) = \\frac{3\\pi}{2}$.",
                    "$z_k = \\cos\\left(\\frac{3\\pi/2 + 2k\\pi}{3}\\right) + i \\sin\\left(\\frac{3\\pi/2 + 2k\\pi}{3}\\right)$",
                    "*   $z_0 = \\cos(\\pi/2) + i\\sin(\\pi/2) = i$",
                    "*   $z_1 = \\cos(7\\pi/6) + i\\sin(7\\pi/6) = -\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i$",
                    "*   $z_2 = \\cos(11\\pi/6) + i\\sin(11\\pi/6) = \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i$"
                ]
            },
            {
                title: "Potenze con De Moivre",
                content: [
                    "**Calcolare $(1+i)^{10}$:**",
                    "$|1+i| = \\sqrt{2}$, $\\arg(1+i) = \\pi/4$.",
                    "$|z^{10}| = (\\sqrt{2})^{10} = 2^5 = 32$.",
                    "$\\arg(z^{10}) = 10 \\cdot \\frac{\\pi}{4} = \\frac{5\\pi}{2} \\equiv \\frac{\\pi}{2}$.",
                    "$z^{10} = 32(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}) = 32i$."
                ]
            },
            {
                title: "Luoghi Geometrici",
                content: [
                    "**1. $Re(z^2 + z\\overline{z} + iz + i) = 0$**",
                    "Ponendo $z = x+iy$: $Re[2x^2 - y + i(\\dots)] = 0 \\Rightarrow 2x^2 - y = 0$.",
                    "**Luogo geometrico:** Parabola $y = 2x^2$.",
                    "**2. $|z| \\cdot |z+7| = |z|^2$**",
                    "$|z|(|z+7| - |z|) = 0$. Due casi: $z=0$ oppure $|z+7|=|z|$.",
                    "Il secondo caso: $(x+7)^2 + y^2 = x^2 + y^2 \\Rightarrow x = -\\frac{7}{2}$.",
                    "**Luogo geometrico:** Retta verticale $x = -7/2$ unita al punto origine.",
                    "**3. $z + \\overline{z} - |z|^2 > 0$**",
                    "$2x - (x^2+y^2) > 0 \\Rightarrow (x-1)^2 + y^2 < 1$.",
                    "**Luogo geometrico:** Interno del cerchio di centro $(1,0)$ e raggio $1$."
                ]
            },
            {
                title: "Esercizi Vari",
                content: [
                    "**1. Risolvere $2i\\overline{z} = 3+5i$:**",
                    "Ponendo $z = a+ib$: $2i(a-ib) = 3+5i \\Rightarrow 2b + 2ia = 3+5i$.",
                    "$\\Rightarrow a = 5/2, b = 3/2$. Quindi $z = \\frac{5}{2} + i\\frac{3}{2}$.",
                    "$|z| = \\frac{\\sqrt{34}}{2}$, $Im(z) = \\frac{3}{2}$.",
                    "**2. Risolvere $2iz^2 + 3z + 5i = 0$:**",
                    "Separando parte reale e immaginaria si ottiene un sistema.",
                    "Se $x=0$: $-2y^2 + 3y + 5 = 0 \\Rightarrow y = -1$ o $y = 5/2$.",
                    "Soluzioni: $z_1 = -i$, $z_2 = \\frac{5}{2}i$.",
                    "**3. Calcolare:**",
                    "$$ \\frac{(1+2i)(1-2i)}{3-i} = \\frac{5}{3-i} \\cdot \\frac{3+i}{3+i} = \\frac{15+5i}{10} = \\frac{3}{2} + \\frac{1}{2}i $$"
                ]
            }
        ]
    },
    {
        id: "lezione-11-funzioni",
        title: "Lezione 11: Funzioni a Una Variabile",
        subsections: [
            {
                title: "Definizione di Funzione",
                content: [
                    "Il concetto di funzione nasce per esprimere la dipendenza di una grandezza variabile rispetto a un'altra grandezza, considerata indipendente.",
                    "**Definizione:** Dati due insiemi $A$ e $B$, una **funzione** $f: A \\rightarrow B$ è una legge che ad ogni elemento $x \\in A$ associa **uno e un solo** elemento $f(x) \\in B$.",
                    `![Mappatura di una Funzione](/FIRST-YEAR-IMAGES/funzione-mappatura.png)`,
                    `*Figura 11.1: Mappatura di una funzione f da un insieme A a un insieme B. A sinistra: una funzione valida (ogni elemento di A ha una sola immagine). A destra: non è una funzione (un elemento ha due immagini).*`,
                    "*   $A = dom(f)$ è il **Dominio** (insieme di partenza).",
                    "*   $B = codom(f)$ è il **Codominio** (insieme di arrivo).",
                    "*   $x$ è la **variabile indipendente**.",
                    "*   $f(x) = y$ è la **variabile dipendente** (o **immagine** di $x$).",
                    "L'insieme $f(A) = \\{f(x) \\mid x \\in A\\}$ è l'**Immagine** della funzione. In generale $f(A) \\subseteq B$."
                ]
            },
            {
                title: "Grafico e Zeri",
                content: [
                    "**Grafico:** Il grafico di $f$ è il sottoinsieme di $\\mathbb{R}^2$ definito da:",
                    "$$ G_f = \\{(x,y) \\in \\mathbb{R}^2 \\mid x \\in A, y = f(x)\\} $$",
                    "Geometricamente, l'univocità si verifica se ogni retta verticale interseca il grafico in **al massimo un punto**.",
                    "**Zero (o Radice):** Un valore $x \\in A$ tale che $f(x) = 0$."
                ]
            },
            {
                title: "Parità e Periodicità",
                content: [
                    "**Funzione Pari:** $f(x) = f(-x)$ per ogni $x \\in A$ (simmetria rispetto all'asse $y$).",
                    "**Funzione Dispari:** $f(x) = -f(-x)$ per ogni $x \\in A$ (simmetria rispetto all'origine).",
                    "**Funzione Periodica:** Esiste $T > 0$ (periodo) tale che $f(x+T) = f(x)$ per ogni $x \\in A$.",
                    "**Nota:** Se $f_1$ ha periodo $T_1$ e $f_2$ ha periodo $T_2$, allora $f_1 + f_2$ è periodica **solo se** $T_1/T_2 \\in \\mathbb{Q}$."
                ]
            },
            {
                title: "Monotonia e Limitatezza",
                content: [
                    "**Monotona Crescente:** $x_1 < x_2 \\Rightarrow f(x_1) \\le f(x_2)$.",
                    "**Monotona Decrescente:** $x_1 < x_2 \\Rightarrow f(x_1) \\ge f(x_2)$.",
                    "**Limitata Superiormente:** Esiste $M$ tale che $f(x) \\le M$ per ogni $x \\in A$.",
                    "**Limitata Inferiormente:** Esiste $m$ tale che $f(x) \\ge m$ per ogni $x \\in A$.",
                    "**Limitata:** Esiste $M$ tale che $|f(x)| \\le M$ per ogni $x \\in A$."
                ]
            },
            {
                title: "Esercizi su Dominio e Immagine",
                content: [
                    "**1. $f(x) = \\frac{2+x}{x-3}$**",
                    "*   Dominio: $x \\neq 3 \\Rightarrow (-\\infty, 3) \\cup (3, +\\infty)$.",
                    "*   Immagine: Invertendo $y = \\frac{2+x}{x-3}$ si ottiene $x = \\frac{2+3y}{y-1}$, quindi $Im = (-\\infty, 1) \\cup (1, +\\infty)$.",
                    "**2. $f(x) = \\log_2(1-x^2)$**",
                    "*   Dominio: $1-x^2 > 0 \\Rightarrow x^2 < 1 \\Rightarrow (-1, 1)$.",
                    "*   Immagine: $(-\\infty, 0]$ (l'argomento del log è in $(0, 1]$).",
                    "**3. $f(x) = \\sqrt[4]{x-x^2}$**",
                    "*   Dominio: $x(1-x) \\ge 0 \\Rightarrow [0, 1]$.",
                    "*   Immagine: $[0, \\sqrt[4]{1/4}]$ (vertice della parabola interna)."
                ]
            }
        ]
    },
    {
        id: "lezione-12-funzioni-elementari",
        title: "Lezione 12: Funzioni Elementari",
        subsections: [
            {
                title: "Funzioni Potenza",
                content: [
                    "**Definizione:** $f(x) = x^\\alpha$, con $\\alpha \\in \\mathbb{R} \\setminus \\{0\\}$.",
                    `![Grafici Funzioni Potenza](/FIRST-YEAR-IMAGES/funzioni-potenza.png)`,
                    `*Figura 12.1: Grafici delle funzioni potenza. Si notano le diverse forme per esponenti frazionari e negativi.*`,
                    "**Casi notevoli:**",
                    "*   $x^n$ con $n$ pari: Funzione pari, definita su $\\mathbb{R}$, immagine $[0, +\\infty)$.",
                    "*   $x^n$ con $n$ dispari: Funzione dispari, definita su $\\mathbb{R}$, immagine $\\mathbb{R}$.",
                    "*   $x^{-n}$ con $n$ pari: Dominio $\\mathbb{R} \\setminus \\{0\\}$, pari.",
                    "*   $x^{-n}$ con $n$ dispari: Dominio $\\mathbb{R} \\setminus \\{0\\}$, dispari.",
                    "Per $\\alpha > 1$: concavità verso l'alto. Per $0 < \\alpha < 1$: concavità verso il basso."
                ]
            },
            {
                title: "Funzioni Esponenziali",
                content: [
                    "**Definizione:** $f(x) = a^x$ con $a > 0, a \\neq 1$.",
                    `![Grafico Funzione Esponenziale](/FIRST-YEAR-IMAGES/funzione-esponenziale.png)`,
                    `*Figura 12.2: Grafico della funzione esponenziale $f(x) = e^x$. La funzione è sempre positiva, strettamente crescente, e passa per il punto $(0, 1)$.*`,
                    "*   Dominio: $\\mathbb{R}$. Immagine: $(0, +\\infty)$.",
                    "*   Se $a > 1$: strettamente **crescente**.",
                    "*   Se $0 < a < 1$: strettamente **decrescente**.",
                    "**Caso particolare:** $f(x) = e^x$ (base naturale $e \\approx 2.71828...$)."
                ]
            },
            {
                title: "Funzioni Logaritmiche",
                content: [
                    "**Definizione:** $f(x) = \\log_a x$ con $a > 0, a \\neq 1$.",
                    `![Grafico Funzione Logaritmica](/FIRST-YEAR-IMAGES/funzione-logaritmica.png)`,
                    `*Figura 12.3: Grafico della funzione logaritmica. È la funzione inversa dell'esponenziale, definita solo per $x > 0$ e con asintoto verticale in $x = 0$.*`,
                    "*   Dominio: $(0, +\\infty)$. Immagine: $\\mathbb{R}$.",
                    "*   Se $a > 1$: strettamente crescente.",
                    "*   Se $0 < a < 1$: strettamente decrescente.",
                    "**Relazione fondamentale:** $y = \\log_a x \\Leftrightarrow a^y = x$ e $a^{\\log_a x} = x$.",
                    "**Logaritmo naturale:** $\\ln x = \\log_e x$."
                ]
            },
            {
                title: "Funzione Valore Assoluto",
                content: [
                    "**Definizione:**",
                    "$$ |x| = \\begin{cases} x & \\text{se } x \\ge 0 \\\\ -x & \\text{se } x < 0 \\end{cases} $$",
                    "*   Dominio: $\\mathbb{R}$. Immagine: $[0, +\\infty)$.",
                    "*   È **pari**.",
                    "*   Crescente in $[0, +\\infty)$, decrescente in $(-\\infty, 0)$."
                ]
            },
            {
                title: "Parte Intera e Mantissa",
                content: [
                    "**Parte Intera (Floor):** $[x] = \\max\\{k \\in \\mathbb{Z} \\mid k \\le x\\}$.",
                    "*   Dominio: $\\mathbb{R}$. Immagine: $\\mathbb{Z}$.",
                    "*   Monotona crescente (non strettamente).",
                    "*   Esempi: $[2.38] = 2$, $[0.7] = 0$, $[-1.2] = -2$.",
                    "**Mantissa:** $f(x) = x - [x]$.",
                    "*   Dominio: $\\mathbb{R}$. Immagine: $[0, 1)$.",
                    "*   Periodica con $T = 1$.",
                    "*   Strettamente crescente in ogni intervallo $[k, k+1)$."
                ]
            }
        ]
    },
    {
        id: "lezione-13-trigonometria",
        title: "Lezione 13: Funzioni Trigonometriche",
        subsections: [
            {
                title: "Seno e Coseno",
                content: [
                    "Data una $x \\in \\mathbb{R}$, sia $P_x$ il punto sulla circonferenza unitaria ottenuto ruotando di un angolo $x$ dal punto $(1,0)$.",
                    `![Circonferenza Unitaria](/FIRST-YEAR-IMAGES/circonferenza-unitaria.png)`,
                    `*Figura 13.1: La circonferenza unitaria (raggio = 1). Le coordinate del punto $P$ sull'arco corrispondente all'angolo $\\theta$ sono $(\\cos\\theta, \\sin\\theta)$.*`,
                    "**Coseno:** $\\cos(x) = $ ascissa di $P_x$.",
                    "**Seno:** $\\sin(x) = $ ordinata di $P_x$.",
                    `![Grafico Funzione Seno](/FIRST-YEAR-IMAGES/funzione-seno.png)`,
                    `*Figura 13.2: Grafico della funzione $y = \\sin(x)$. È una funzione periodica con periodo $2\\pi$, dispari, con valori compresi tra $-1$ e $1$.*`,
                    "**Proprietà fondamentali:**",
                    "*   Dominio: $\\mathbb{R}$. Immagine: $[-1, 1]$.",
                    "*   Periodiche con $T = 2\\pi$.",
                    "*   $\\cos^2(x) + \\sin^2(x) = 1$ (identità fondamentale).",
                    "*   $\\cos$ è pari, $\\sin$ è dispari."
                ]
            },
            {
                title: "Tangente e Cotangente",
                content: [
                    "**Tangente:** $\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$, con dominio $\\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi\\}$.",
                    "**Cotangente:** $\\cot(x) = \\frac{\\cos(x)}{\\sin(x)}$, con dominio $\\mathbb{R} \\setminus \\{k\\pi\\}$.",
                    `![Grafici Tangente e Cotangente](/FIRST-YEAR-IMAGES/funzioni-tangente-cotangente.png)`,
                    `*Figura 13.3: Grafici delle funzioni tangente e cotangente. Entrambe hanno periodo $\\pi$ e presentano asintoti verticali dove il denominatore si annulla.*`,
                    "*   Immagine: $\\mathbb{R}$ per entrambe.",
                    "*   Periodiche con $T = \\pi$.",
                    "*   Entrambe sono dispari."
                ]
            },
            {
                title: "Formule di Addizione",
                content: [
                    "**Somma di angoli:**",
                    "*   $\\sin(x+y) = \\sin x \\cos y + \\cos x \\sin y$",
                    "*   $\\cos(x+y) = \\cos x \\cos y - \\sin x \\sin y$",
                    "*   $\\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y}$",
                    "**Duplicazione:**",
                    "*   $\\sin(2x) = 2 \\sin x \\cos x$",
                    "*   $\\cos(2x) = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1$"
                ]
            },
            {
                title: "Funzioni Inverse",
                content: [
                    "Poiché le funzioni trigonometriche non sono globalmente invertibili (sono periodiche), si restringono a intervalli di monotonia.",
                    "**Arcoseno:** $\\arcsin: [-1, 1] \\rightarrow [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$. Dispari.",
                    "**Arcocoseno:** $\\arccos: [-1, 1] \\rightarrow [0, \\pi]$. Né pari né dispari.",
                    "**Arcotangente:** $\\arctan: \\mathbb{R} \\rightarrow (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. Dispari."
                ]
            },
            {
                title: "Esercizi Svolti",
                content: [
                    "**1. Calcolare $\\cos(\\arcsin(1/3))$:**",
                    "L'immagine di $\\arcsin$ è $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, dove il coseno è positivo.",
                    "$$ \\cos(\\arcsin(1/3)) = +\\sqrt{1 - \\sin^2(\\arcsin(1/3))} = \\sqrt{1 - 1/9} = \\frac{2\\sqrt{2}}{3} $$",
                    "**2. Calcolare $\\tan(\\arccos(1/3))$:**",
                    "$$ \\tan(\\arccos(1/3)) = \\frac{\\sin(\\arccos(1/3))}{1/3} = \\frac{\\sqrt{1-1/9}}{1/3} = 2\\sqrt{2} $$",
                    "**3. $f(x) = \\sin(3x^2)$ è periodica?**",
                    "Se fosse periodica: $\\sin(3(x+T)^2) = \\sin(3x^2)$ per ogni $x$.",
                    "$3(x+T)^2 = 3x^2 + 2k\\pi \\Rightarrow 6xT + 3T^2 = 2k\\pi$.",
                    "Poiché il primo membro dipende da $x$, **non è periodica**."
                ]
            }
        ]
    },
    {
        id: "lezione-14-composizione-inversa",
        title: "Lezione 14: Composizione e Inversione di Funzioni",
        subsections: [
            {
                title: "Composizione di Funzioni",
                content: [
                    "Date due funzioni $f: A \\rightarrow B$ e $g: B \\rightarrow \\mathbb{R}$ con $f(A) \\subseteq D_g$, si definisce la **funzione composta**:",
                    "$$ (g \\circ f)(x) = g[f(x)], \\quad \\forall x \\in A $$",
                    "**Dominio:** $D_{g \\circ f} = \\{x \\in D_f \\mid f(x) \\in D_g\\}$.",
                    "**Nota:** In generale $g \\circ f \\neq f \\circ g$."
                ]
            },
            {
                title: "Esercizi sulla Composizione",
                content: [
                    "Date $f(x) = x^2-2$, $g(x) = \\log_2(x-1)$, $h(x) = \\sqrt{x}$:",
                    "**1. $g \\circ f(x) = \\log_2(x^2-3)$**",
                    "Dominio: $x^2 - 3 > 0 \\Rightarrow x < -\\sqrt{3} \\vee x > \\sqrt{3}$.",
                    "**2. $f \\circ g(x) = [\\log_2(x-1)]^2 - 2$**",
                    "Dominio: $x > 1$.",
                    "**3. $h \\circ g(x) = \\sqrt{\\log_2(x-1)}$**",
                    "Dominio: $\\log_2(x-1) \\ge 0 \\Rightarrow x \\ge 2$."
                ]
            },
            {
                title: "Iniettività, Suriettività, Biettività",
                content: [
                    "Sia $f: A \\rightarrow B$.",
                    "**Iniettiva:** $f(x_1) = f(x_2) \\Rightarrow x_1 = x_2$ (ogni immagine ha al più una controimmagine).",
                    "**Suriettiva:** $f(A) = B$ (ogni elemento del codominio è raggiunto).",
                    "**Biettiva (Biunivoca):** Iniettiva e suriettiva (ogni $y \\in B$ ha esattamente una controimmagine).",
                    "**Criterio grafico:** $f$ è iniettiva se ogni retta orizzontale interseca il grafico in **al massimo un punto**."
                ]
            },
            {
                title: "Funzione Inversa",
                content: [
                    "Se $f: A \\rightarrow B$ è **invertibile** (biettiva), esiste $f^{-1}: B \\rightarrow A$ tale che:",
                    "$$ f^{-1}(y) = x \\iff y = f(x) $$",
                    "**Proprietà:**",
                    "*   $(f^{-1})^{-1} = f$",
                    "*   $f \\circ f^{-1} = f^{-1} \\circ f = id$ (funzione identità)",
                    "**Teorema:** Una funzione strettamente monotona è invertibile, e la sua inversa è ancora strettamente monotona."
                ]
            },
            {
                title: "Esercizio: Inversa di sinh(x)",
                content: [
                    "Calcolare l'inversa di $f(x) = \\sinh(x) = \\frac{e^x - e^{-x}}{2}$.",
                    "$y = \\frac{e^x - e^{-x}}{2} \\Rightarrow 2ye^x = e^{2x} - 1 \\Rightarrow e^{2x} - 2ye^x - 1 = 0$.",
                    "Risolvendo come equazione di secondo grado in $e^x$:",
                    "$e^x = y + \\sqrt{y^2+1}$ (scegliamo la soluzione positiva).",
                    "$$ f^{-1}(y) = \\ln(y + \\sqrt{y^2+1}) = \\text{arcsinh}(y) $$"
                ]
            }
        ]
    },
    {
        id: "lezione-15-iperboliche",
        title: "Lezione 15: Funzioni Iperboliche",
        subsections: [
            {
                title: "Seno Iperbolico",
                content: [
                    "**Definizione:**",
                    "$$ \\sinh(x) = \\frac{e^x - e^{-x}}{2} $$",
                    "**Proprietà:**",
                    "*   Dominio: $\\mathbb{R}$. Immagine: $\\mathbb{R}$.",
                    "*   Dispari.",
                    "*   Strettamente crescente.",
                    "*   $\\sinh(0) = 0$."
                ]
            },
            {
                title: "Coseno Iperbolico",
                content: [
                    "**Definizione:**",
                    "$$ \\cosh(x) = \\frac{e^x + e^{-x}}{2} $$",
                    "**Proprietà:**",
                    "*   Dominio: $\\mathbb{R}$. Immagine: $[1, +\\infty)$.",
                    "*   Pari.",
                    "*   $\\cosh(0) = 1$.",
                    "*   Descrive la forma di una **catenaria** (fune appesa a due estremità)."
                ]
            },
            {
                title: "Tangente Iperbolica e Identità",
                content: [
                    "**Tangente Iperbolica:**",
                    "$$ \\tanh(x) = \\frac{\\sinh(x)}{\\cosh(x)} = \\frac{e^x - e^{-x}}{e^x + e^{-x}} $$",
                    "*   Dominio: $\\mathbb{R}$. Immagine: $(-1, 1)$.",
                    "*   Dispari, strettamente crescente.",
                    "**Identità Fondamentale:**",
                    "$$ \\cosh^2(x) - \\sinh^2(x) = 1 $$",
                    "(Analoga a $\\cos^2 + \\sin^2 = 1$ per le funzioni trigonometriche.)"
                ]
            }
        ]
    },
    {
        id: "lezione-16-successioni-limiti",
        title: "Lezione 16: Successioni e Limiti",
        subsections: [
            {
                title: "Successioni",
                content: [
                    "Una **successione** è una funzione $f: \\mathbb{N} \\rightarrow \\mathbb{R}$. Si usa la notazione $a_n = f(n)$.",
                    "Esempio: $(a_n)_{n \\in \\mathbb{N}} = (0, 1, 4, 9, 16, ...) \\Rightarrow a_n = n^2$.",
                    "Si rappresenta graficamente con i punti $(n, a_n)$ nel piano."
                ]
            },
            {
                title: "Definizione di Limite",
                content: [
                    "**Convergenza:** $(a_n)$ converge a $l \\in \\mathbb{R}$ se:",
                    "$$ (\\forall \\epsilon > 0)(\\exists N \\in \\mathbb{N})(\\forall n \\ge N) |a_n - l| \\le \\epsilon $$",
                    "Si scrive $\\lim_{n \\to \\infty} a_n = l$.",
                    "**Divergenza:** $(a_n)$ diverge a $+\\infty$ se:",
                    "$$ (\\forall M > 0)(\\exists N \\in \\mathbb{N})(\\forall n \\ge N) a_n \\ge M $$",
                    "**Successione Irregolare:** Non converge e non diverge (es. $(-1)^n$)."
                ]
            },
            {
                title: "Teoremi Fondamentali",
                content: [
                    "**Unicità del Limite:** Se $(a_n)$ converge, il limite è unico.",
                    "**Teorema di Monotonia:** Una successione monotona crescente e limitata superiormente converge a $\\sup\\{a_n\\}$.",
                    "**Permanenza del Segno:** Se $a_n \\to a$ e $a > 0$, allora $a_n > 0$ definitivamente.",
                    "**Teorema del Confronto (Carabinieri):** Se $a_n \\le b_n \\le c_n$ e $\\lim a_n = \\lim c_n = l$, allora $\\lim b_n = l$."
                ]
            },
            {
                title: "Algebra dei Limiti",
                content: [
                    "Se $a_n \\to a$ e $b_n \\to b$ (con $a, b \\in \\mathbb{R}$):",
                    "*   $a_n \\pm b_n \\to a \\pm b$",
                    "*   $a_n \\cdot b_n \\to a \\cdot b$",
                    "*   $a_n / b_n \\to a / b$ (se $b \\neq 0$)",
                    "*   $|a_n| \\to |a|$",
                    "**Aritmetizzazione parziale:** $+\\infty + \\infty = +\\infty$, $l/\\pm\\infty = 0$, $+\\infty \\cdot (+\\infty) = +\\infty$."
                ]
            },
            {
                title: "Il Numero di Nepero ($e$)",
                content: [
                    "La successione $a_n = \\left(1 + \\frac{1}{n}\\right)^n$ è monotona crescente e limitata.",
                    "$$ \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e \\approx 2.71828... $$",
                    "**Limite trigonometrico fondamentale:**",
                    "$$ \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 $$"
                ]
            },
            {
                title: "Gerarchia degli Infiniti",
                content: [
                    "Per $n \\to \\infty$, velocità di crescita:",
                    "$$ \\log_a n \\ll n^\\alpha \\ll a^n \\ll n! \\ll n^n $$",
                    "(con $a > 1, \\alpha > 0$).",
                    "**Conseguenze:**",
                    "*   $\\lim \\frac{(\\ln n)^a}{n^b} = 0$ per ogni $a, b > 0$.",
                    "*   $\\lim \\frac{n^b}{c^n} = 0$ per ogni $b \\in \\mathbb{R}$, $c > 1$.",
                    "*   $\\lim \\frac{n!}{n^n} = 0$."
                ]
            }
        ]
    },
    {
        id: "lezione-17-stime-asintotiche",
        title: "Lezione 17: Confronti e Stime Asintotiche",
        subsections: [
            {
                title: "Simboli di Landau",
                content: [
                    "Siano $(a_n)$ e $(b_n)$ successioni con $b_n \\neq 0$ definitivamente. Si studia $\\lim \\frac{a_n}{b_n}$.",
                    "**1. o-piccolo:** Se il limite è $0$, $(a_n)$ è trascurabile rispetto a $(b_n)$.",
                    "$$ a_n = o(b_n) $$",
                    "**2. Stesso ordine ($\\asymp$):** Se il limite è $l \\in \\mathbb{R} \\setminus \\{0\\}$.",
                    "**3. Equivalenza ($\\sim$):** Se il limite è $1$.",
                    "$$ a_n \\sim b_n \\iff \\lim \\frac{a_n}{b_n} = 1 $$",
                    "**4. Limite $\\pm\\infty$:** $b_n = o(a_n)$ (ruoli invertiti)."
                ]
            },
            {
                title: "Stime Asintotiche Notevoli (per $x \\to 0$)",
                content: [
                    "*   $\\sin x \\sim x$, $\\arcsin x \\sim x$",
                    "*   $\\tan x \\sim x$, $\\arctan x \\sim x$",
                    "*   $1 - \\cos x \\sim \\frac{1}{2}x^2$",
                    "*   $e^x - 1 \\sim x$",
                    "*   $a^x - 1 \\sim x \\ln a$",
                    "*   $\\ln(1+x) \\sim x$",
                    "*   $(1+x)^\\alpha - 1 \\sim \\alpha x$"
                ]
            },
            {
                title: "Criterio del Rapporto",
                content: [
                    "Sia $(a_n) \\subset (0, +\\infty)$. Se esiste $\\lim \\frac{a_{n+1}}{a_n} = l$:",
                    "*   $l < 1 \\Rightarrow \\lim a_n = 0$",
                    "*   $l = 1 \\Rightarrow$ nessuna conclusione",
                    "*   $l > 1 \\Rightarrow \\lim a_n = +\\infty$",
                    "**Esempio:** $\\lim \\frac{(n!)^2}{(2n)!}$",
                    "$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{(2n+2)(2n+1)} \\to \\frac{1}{4} < 1 \\Rightarrow \\lim = 0$."
                ]
            },
            {
                title: "Esercizi con Stime",
                content: [
                    "**1. $\\lim_{x \\to 0} \\frac{x^2 \\sin^3(2x)}{3\\sin(x^5)}$**",
                    "$\\sin(2x) \\sim 2x$, $\\sin(x^5) \\sim x^5$.",
                    "$= \\frac{x^2 (2x)^3}{3x^5} = \\frac{8x^5}{3x^5} = \\frac{8}{3}$.",
                    "**2. $\\lim_{x \\to 0} \\frac{x(\\cos x - 1)}{\\tan(x^3)}$**",
                    "$\\cos x - 1 \\sim -\\frac{1}{2}x^2$, $\\tan(x^3) \\sim x^3$.",
                    "$= \\frac{x(-\\frac{1}{2}x^2)}{x^3} = -\\frac{1}{2}$."
                ]
            }
        ]
    },
    {
        id: "lezione-18-limiti-funzioni-asintoti",
        title: "Lezione 18: Limiti di Funzioni e Asintoti",
        subsections: [
            {
                title: "Definizione Successionale",
                content: [
                    "Sia $f: I \\subseteq \\mathbb{R} \\to \\mathbb{R}$ e $c \\in \\bar{\\mathbb{R}}$.",
                    "Si dice $\\lim_{x \\to c} f(x) = l$ se per ogni successione $(x_n) \\subseteq I \\setminus \\{c\\}$ con $x_n \\to c$, si ha $f(x_n) \\to l$.",
                    "**Unicità:** Se esiste il limite, esso è unico.",
                    "Questa definizione eredita tutte le proprietà già viste per le successioni."
                ]
            },
            {
                title: "Definizione Topologica ($\\epsilon$-$\\delta$)",
                content: [
                    "**Limite finito al finito:** $\\lim_{x \\to c} f(x) = l$",
                    "$$ (\\forall \\epsilon > 0)(\\exists \\delta > 0)(\\forall x \\in D_f, 0 < |x-c| < \\delta) |f(x) - l| < \\epsilon $$",
                    "**Limite finito all'infinito:** $\\lim_{x \\to +\\infty} f(x) = l$",
                    "$$ (\\forall \\epsilon > 0)(\\exists K > 0)(\\forall x > K) |f(x) - l| < \\epsilon $$",
                    "**Limite infinito al finito:** $\\lim_{x \\to c} f(x) = +\\infty$",
                    "$$ (\\forall M > 0)(\\exists \\delta > 0)(\\forall x, 0 < |x-c| < \\delta) f(x) > M $$"
                ]
            },
            {
                title: "Asintoto Orizzontale",
                content: [
                    "La funzione $f$ ha **asintoto orizzontale** $y = l$ per $x \\to +\\infty$ (o $-\\infty$) se:",
                    "$$ \\lim_{x \\to \\pm\\infty} f(x) = l \\in \\mathbb{R} $$",
                    "**Esempio:** $\\lim_{x \\to +\\infty} e^{-x} = 0$ (asintoto $y=0$)."
                ]
            },
            {
                title: "Asintoto Verticale",
                content: [
                    "La funzione $f$ ha **asintoto verticale** $x = c$ se:",
                    "$$ \\lim_{x \\to c^+} f(x) = \\pm\\infty \\quad \\text{oppure} \\quad \\lim_{x \\to c^-} f(x) = \\pm\\infty $$",
                    "**Esempio:** $\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$, $\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$ (asintoto $x=0$)."
                ]
            },
            {
                title: "Asintoto Obliquo",
                content: [
                    "La funzione $f$ ha **asintoto obliquo** $y = mx + q$ per $x \\to \\pm\\infty$ se:",
                    "$$ \\lim_{x \\to \\pm\\infty} [f(x) - (mx+q)] = 0 $$",
                    "**Calcolo dei coefficienti:**",
                    "$$ m = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}, \\quad q = \\lim_{x \\to \\pm\\infty} [f(x) - mx] $$",
                    "L'asintoto obliquo esiste solo se $m \\in \\mathbb{R} \\setminus \\{0\\}$ e $q \\in \\mathbb{R}$."
                ]
            },
            {
                title: "Esempi",
                content: [
                    "**1. $\\lim_{x \\to 1} \\frac{x^2-1}{x-1}$**",
                    "$= \\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = \\lim_{x \\to 1} (x+1) = 2$.",
                    "**2. $\\lim_{x \\to 0} \\sin(x) = 0$**",
                    "Dimostrazione: $|\\sin x| \\le |x| \\to 0$ per Teorema del Confronto.",
                    "**3. Limite inesistente:** $\\lim_{x \\to 0} \\frac{1}{x}$",
                    "Per $x \\to 0^+$: $+\\infty$. Per $x \\to 0^-$: $-\\infty$. Limiti laterali diversi."
                ]
            }
        ]
    },
    {
        id: "lezione-19-teoremi-limiti",
        title: "Lezione 19: Teoremi sui Limiti e Esercizi",
        subsections: [
            {
                title: "Limiti Laterali",
                content: [
                    "**Definizione:** Se $c \\in \\mathbb{R}$ e $l \\in \\mathbb{R}$, si dice che $\\lim_{x \\to c^+} f(x) = l$ se per ogni successione $(x_n)_{n \\in \\mathbb{N}} \\subset D(f)$ tale che $x_n \\to c$ con $x_n > c$ $\\forall n \\in \\mathbb{N}$, si ha che $\\lim_{n \\to \\infty} f(x_n) = l$.",
                    "Analogamente per il **limite sinistro** $x \\to c^-$ con $x_n < c$.",
                    "**Proposizione:** Il limite $\\lim_{x \\to c} f(x)$ esiste ed è uguale a $l$ se e solo se i limiti laterali $\\lim_{x \\to c^+} f(x)$ e $\\lim_{x \\to c^-} f(x)$ esistono e sono entrambi uguali a $l$."
                ]
            },
            {
                title: "Asintoto Obliquo (Dettaglio)",
                content: [
                    "**Definizione:** Si dice che la funzione $f$ ha **asintoto obliquo** di equazione $y = mx + q$ per $x \\to \\pm\\infty$ se:",
                    "$$ \\lim_{x \\to \\pm\\infty} [f(x) - (mx+q)] = 0 $$",
                    "**Proposizione:** La funzione $f$ ammette asintoto obliquo per $x \\to \\infty$ se e solo se:",
                    "1. Esiste finito $\\lim_{x \\to \\infty} \\frac{f(x)}{x} = m \\neq 0$.",
                    "2. Esiste finito $\\lim_{x \\to \\infty} [f(x) - mx] = q$.",
                    "In tal caso l'asintoto è $y = mx + q$."
                ]
            },
            {
                title: "Asintoto Verticale (Dettaglio)",
                content: [
                    "**Definizione:** Si dice che $f$ ha un **asintoto verticale** di equazione $x = c$ ($c \\in \\mathbb{R}$) per $x \\to c$ se:",
                    "$$ \\lim_{x \\to c} f(x) = \\pm\\infty \\quad \\text{oppure} \\quad \\lim_{x \\to c^\\pm} f(x) = \\pm\\infty $$"
                ]
            },
            {
                title: "Teorema del Confronto",
                content: [
                    "**Enunciato:** Se $\\lim_{x \\to c} f(x) = \\lim_{x \\to c} g(x) = l$ e $f(x) \\le h(x) \\le g(x)$ **definitivamente** per $x \\to c$, allora:",
                    "$$ \\lim_{x \\to c} h(x) = l $$",
                    "Questo teorema è noto anche come **Teorema dei Carabinieri**."
                ]
            },
            {
                title: "Teorema di Permanenza del Segno",
                content: [
                    "**1.** Se $\\lim_{x \\to c} f(x) = l > 0$, allora $f(x) > 0$ **definitivamente** per $x \\to c$.",
                    "**2.** Se $f(x) \\ge 0$ definitivamente per $x \\to c$ e $\\lim_{x \\to c} f(x) = l$, allora $l \\ge 0$."
                ]
            },
            {
                title: "Algebra dei Limiti (Funzioni)",
                content: [
                    "Supponiamo che $\\lim f(x) = l_1$ e $\\lim g(x) = l_2$ con $l_1, l_2 \\in \\mathbb{R}$. Allora:",
                    "*   $\\lim [f(x) \\pm g(x)] = l_1 \\pm l_2$",
                    "*   $\\lim [f(x) \\cdot g(x)] = l_1 \\cdot l_2$",
                    "*   $\\lim \\frac{f(x)}{g(x)} = \\frac{l_1}{l_2}$ (purché $l_2 \\neq 0$ e $g(x) \\neq 0$ definitivamente per $x \\to c$)"
                ]
            },
            {
                title: "Esercizi sui Limiti (Parte 1)",
                content: [
                    "**1.** $\\lim_{n \\to \\infty} \\frac{\\ln(n+2^n)}{n}$",
                    "$= \\lim_{n \\to \\infty} \\frac{\\ln(2^n(1+\\frac{n}{2^n}))}{n} = \\lim_{n \\to \\infty} \\frac{n \\ln 2 + \\ln(1+\\frac{n}{2^n})}{n} = \\ln 2$.",
                    "**2.** $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ (limite fondamentale).",
                    "**3.** $\\lim_{x \\to 0} \\frac{e^{x+1}}{x\\sqrt{x+3}}$",
                    "Poiché $e^{x+1} \\to e$ e $x\\sqrt{x+3} \\to 0$, il limite è $\\pm\\infty \\cdot e$.",
                    "**4.** $\\lim_{x \\to 1^-} \\sqrt{1-x^2} = 0$.",
                    "**5.** $\\lim_{x \\to \\infty} \\ln(xe) = +\\infty$.",
                    "**6.** $\\lim_{x \\to 2} \\frac{x^3-8}{x^2-4}$",
                    "$= \\lim_{x \\to 2} \\frac{(x-2)(x^2+2x+4)}{(x-2)(x+2)} = \\frac{12}{4} = 3$.",
                    "**7.** $\\lim_{x \\to \\pm\\infty} \\frac{\\sqrt{x}}{\\sqrt{x+\\sqrt{x}}}$",
                    "$= \\lim_{x \\to \\infty} \\frac{\\sqrt{x}}{\\sqrt{x}\\sqrt{1+\\frac{\\sqrt{x}}{x}}} = 1$."
                ]
            },
            {
                title: "Verifiche con Definizione $\\epsilon$-$\\delta$",
                content: [
                    "**8. Verificare:** $\\lim_{x \\to -4} \\frac{-2}{(x+4)^2} = -\\infty$",
                    "$(\\forall K > 0, \\exists \\delta > 0)$ tale che $\\forall x \\neq -4$, $|x+4| < \\delta \\Rightarrow \\frac{-2}{(x+4)^2} < -K$.",
                    "Da $\\frac{2}{(x+4)^2} > K$ otteniamo $(x+4)^2 < \\frac{2}{K}$, quindi $|x+4| < \\sqrt{\\frac{2}{K}}$.",
                    "Scegliamo $\\delta = \\sqrt{\\frac{2}{K}}$.",
                    "**9. Verificare:** $\\lim_{x \\to -1} (x^2+1) = 2$",
                    "$|x^2+1 - 2| < \\epsilon \\Rightarrow |x^2-1| < \\epsilon$.",
                    "$-\\epsilon < x^2-1 < \\epsilon \\Rightarrow 1-\\epsilon < x^2 < 1+\\epsilon$.",
                    "Per $x \\to -1$, scegliamo l'intorno sinistro: $-\\sqrt{1+\\epsilon} < x < -\\sqrt{1-\\epsilon}$."
                ]
            },
            {
                title: "Esercizi sui Limiti (Parte 2)",
                content: [
                    "**10. Dimostrare che il limite non esiste:** $\\lim_{x \\to \\infty} \\frac{3+2\\sin x}{2-\\cos x}$",
                    "Consideriamo due sottosuccessioni:",
                    "*   $a_n = \\frac{\\pi}{2} + 2\\pi n$: $\\sin(a_n)=1, \\cos(a_n)=0 \\Rightarrow f(a_n) = \\frac{5}{2}$.",
                    "*   $b_n = 2\\pi n$: $\\sin(b_n)=0, \\cos(b_n)=1 \\Rightarrow f(b_n) = 3$.",
                    "Poiché $\\frac{5}{2} \\neq 3$, il limite non esiste.",
                    "**11.** $\\lim_{x \\to -\\infty} \\frac{1}{x} \\cos\\frac{1}{x} = 0 \\cdot \\cos(0) = 0$.",
                    "**12.** $\\lim_{x \\to \\pm\\infty} \\frac{1}{x} \\sin x = 0$",
                    "Poiché $|\\sin x| \\le 1$, abbiamo $|\\frac{1}{x} \\sin x| \\le \\frac{1}{|x|} \\to 0$. Per il Teorema del Confronto, il limite è $0$.",
                    "**13.** $\\lim_{x \\to 0} \\arctan\\frac{1}{x}$",
                    "*   $\\lim_{x \\to 0^+} \\arctan\\frac{1}{x} = \\arctan(+\\infty) = \\frac{\\pi}{2}$",
                    "*   $\\lim_{x \\to 0^-} \\arctan\\frac{1}{x} = \\arctan(-\\infty) = -\\frac{\\pi}{2}$",
                    "Limiti laterali diversi $\\Rightarrow$ il limite non esiste.",
                    "**14.** $\\lim_{x \\to 1^+} \\ln(\\ln x) = \\ln(\\ln 1^+) = \\ln(0^+) = -\\infty$. Asintoto verticale $x=1$."
                ]
            },
            {
                title: "Esercizi sugli Asintoti",
                content: [
                    "**15.** $f(x) = 2x + 3\\sqrt{x^2+x}$",
                    "Per $x \\to -\\infty$: $f(x) = 2x + 3|x|\\sqrt{1+1/x} = 2x - 3x\\sqrt{1} = -x \\to +\\infty$.",
                    "Ricerca asintoto obliquo per $x \\to -\\infty$:",
                    "$m = \\lim_{x \\to -\\infty} \\frac{f(x)}{x} = \\lim \\frac{2x - 3x}{x} = -1$.",
                    "**16.** $f(x) = e^{\\sin\\frac{1}{x}}(3x + \\cos\\frac{1}{x})$",
                    "Per $x \\to \\infty$: $e^{\\sin(1/x)} (3x + \\cos(1/x)) \\sim e^0 (3x + 1) \\sim 3x \\Rightarrow m=3$.",
                    "$q = \\lim_{x \\to \\infty} [e^{\\sin\\frac{1}{x}}(3x+\\cos\\frac{1}{x}) - 3x]$",
                    "Usando $e^t - 1 \\sim t$: $3x(\\sin \\frac{1}{x}) \\sim 3x \\cdot \\frac{1}{x} = 3$. Quindi $q = 3 + 1 = 4$.",
                    "**Asintoto obliquo:** $y = 3x + 4$.",
                    "**17.** $\\lim_{x \\to 1} \\frac{\\log x}{\\sin(x-1)}$ (Forma $\\frac{0}{0}$)",
                    "Poniamo $t = x-1 \\Rightarrow x = 1+t$. Se $x \\to 1$, allora $t \\to 0$.",
                    "$= \\lim_{t \\to 0} \\frac{\\log(1+t)}{\\sin t} = \\lim_{t \\to 0} \\frac{\\log(1+t)}{t} \\cdot \\frac{t}{\\sin t} = 1 \\cdot 1 = 1$."
                ]
            }
        ]
    },
    {
        id: "lezione-20-continuita",
        title: "Lezione 20: Continuità",
        subsections: [
            {
                title: "Definizione di Continuità",
                content: [
                    "Ricordiamo che $\\lim_{x \\to 0} \\sin(x) = 0 = \\sin(0)$. Questo è un esempio di funzione **continua**.",
                    "**Definizione:** Dato $I \\subseteq \\mathbb{R}$ un intervallo, $c \\in I$ e $f: I \\to \\mathbb{R}$ una funzione, diremo che $f(x)$ è **continua in $c$** se:",
                    "$$ \\lim_{x \\to c} f(x) = f(c) $$",
                    "Diremo che $f$ è **continua in $I$** se $f$ è continua in $c$, $\\forall c \\in I$."
                ]
            },
            {
                title: "Esempio: Funzione Non Continua",
                content: [
                    "Si consideri la funzione $f: \\mathbb{R} \\to \\mathbb{R}$ definita da:",
                    "$$ f(x) = \\begin{cases} x & \\text{se } x \\in \\mathbb{Q} \\\\ x^2 & \\text{se } x \\in \\mathbb{I} \\text{ (irrazionali)} \\end{cases} $$",
                    "Si può dimostrare che $(\\forall x_0 \\in \\mathbb{R} \\setminus \\{0, 1\\}) \\lim_{x \\to x_0} f(x) \\neq f(x_0)$:",
                    "**Caso $x_0 \\in \\mathbb{Q} \\setminus \\{0, 1\\}$:** Sia $x_n = x_0 + \\pi/n$. Risulta che $\\forall n \\in \\mathbb{N}, x_n \\in \\mathbb{I}$ e $x_n \\to x_0$.",
                    "$(\\forall n \\ge 1) f(x_n) = x_n^2 = (x_0 + \\pi/n)^2 \\to x_0^2$. Siccome $x_0 \\neq x_0^2$, $\\lim_{n \\to \\infty} f(x_n) \\neq f(x_0)$.",
                    "**Caso $x_0 \\in \\mathbb{I}$:** Per la densità di $\\mathbb{Q}$, $\\exists x_n \\in \\mathbb{Q}$ tale che $x_0 \\le x_n \\le x_0 + 1/n$.",
                    "$f(x_n) = x_n \\to x_0$, mentre $f(x_0) = x_0^2$. Poiché $x_0 \\neq x_0^2$ per $x_0 \\notin \\{0, 1\\}$, il limite non coincide."
                ]
            },
            {
                title: "Osservazioni sulla Continuità",
                content: [
                    "**1.** Le funzioni continue devono la loro importanza al fatto che $\\lim_{x \\to c} f(x) = f(c)$ può essere interpretato come: \"piccole variazioni di $x$\" $\\to$ \"piccole variazioni di $f(x)$\".",
                    "**2.** La presenza di un **asintoto verticale** in $c$ implica che $f$ non sia continua in $c$.",
                    "**3. Discontinuità di Salto:** Si ha quando $\\lim_{x \\to c^+} f(x) \\neq \\lim_{x \\to c^-} f(x)$.",
                    "Il **salto in $c$** si definisce come:",
                    "$$ \\text{salto in } c = \\lim_{x \\to c^+} f(x) - \\lim_{x \\to c^-} f(x) $$",
                    "Se $\\lim_{x \\to c^+} f(x) = f(c)$, $f$ è **continua in $c$ da destra**. Analogamente per la continuità da sinistra."
                ]
            },
            {
                title: "Funzione di Heaviside",
                content: [
                    "**Esempio:** La funzione di Heaviside (o funzione gradino):",
                    "$$ H(x) = \\begin{cases} 1 & \\text{se } x \\ge 0 \\\\ 0 & \\text{se } x < 0 \\end{cases} $$",
                    "$H(x)$ è **continua in $0$ da destra** ma non da sinistra.",
                    "Ha una discontinuità di salto in $x = 0$ con salto $= 1 - 0 = 1$."
                ]
            },
            {
                title: "Prolungamento per Continuità",
                content: [
                    "Le funzioni elementari sono continue in tutto il loro dominio. La funzione $f(x) = \\frac{\\sin x}{x}$, $\\forall x \\in \\mathbb{R} \\setminus \\{0\\}$, è continua in tutto $\\mathbb{R} \\setminus \\{0\\}$.",
                    "Inoltre $\\lim_{x \\to 0} f(x) = 1$.",
                    "Definiamo la **funzione estesa** (prolungamento per continuità):",
                    "$$ \\tilde{f}(x) = \\begin{cases} \\frac{\\sin x}{x} & \\text{se } x \\neq 0 \\\\ 1 & \\text{se } x = 0 \\end{cases} $$",
                    "Allora $\\tilde{f}$ è continua in **tutto $\\mathbb{R}$**."
                ]
            },
            {
                title: "Algebra delle Funzioni Continue",
                content: [
                    "**Teorema:** Sia $I \\subseteq \\mathbb{R}$ un intervallo, $c \\in I$, $f, g: I \\to \\mathbb{R}$ funzioni continue in $c$. Allora:",
                    "1. $f \\pm g$ è continua in $c$.",
                    "2. $f \\cdot g$ è continua in $c$.",
                    "3. $f/g$ è continua in $c$ (purché $g(c) \\neq 0$)."
                ]
            },
            {
                title: "Continuità della Funzione Composta",
                content: [
                    "**Teorema:** Siano $g$ una funzione definita in un intorno di $x_0$, continua in $x_0$, e $f$ una funzione definita in un intorno di $t_0 = g(x_0)$ e continua in $t_0$.",
                    "Allora $f \\circ g$ è definita in un intorno di $x_0$ e **continua in $x_0$**."
                ]
            },
            {
                title: "Continuità delle Funzioni Elementari",
                content: [
                    "**Teorema:** Le seguenti funzioni sono continue in tutti i punti del proprio insieme di definizione:",
                    "1. Potenze a esponente intero, razionale, reale",
                    "2. Funzioni esponenziali",
                    "3. Funzioni logaritmiche",
                    "4. Funzioni trigonometriche e iperboliche",
                    "5. Funzione valore assoluto"
                ]
            },
            {
                title: "Teorema degli Zeri",
                content: [
                    "**Interpretazione geometrica:** Una funzione continua su un intervallo ha un grafico che \"si può tracciare senza staccare la penna dal foglio\".",
                    "**Teorema degli Zeri:** Siano $a < b$ numeri reali e $f: [a,b] \\to \\mathbb{R}$ una funzione continua con $f(a)f(b) < 0$.",
                    "Allora $\\exists x_0 \\in (a,b)$ tale che $f(x_0) = 0$.",
                    "Inoltre, se $f$ è **strettamente monotona** in $[a, b]$, tale $x_0$ (zero di $f$) è **unico** in $[a, b]$.",
                    "**Nota:** Se $f: [a,b] \\to \\mathbb{R}$ è continua e $f(a)f(b) \\le 0$, allora $\\exists x_0 \\in [a, b]$ tale che $f(x_0) = 0$."
                ]
            },
            {
                title: "Teorema dei Valori Intermedi",
                content: [
                    "**Teorema:** Siano $a < b$ e $f: [a, b] \\to \\mathbb{R}$ continua. Se $y_1, y_2 \\in f([a,b])$, allora per ogni $\\lambda \\in \\mathbb{R}$ compreso tra $y_1$ e $y_2$:",
                    "$$ \\exists x_{\\lambda} \\in [a,b] \\text{ tale che } f(x_{\\lambda}) = \\lambda $$",
                    "**Nota:** L'immagine $f([a,b])$ è anch'essa un intervallo."
                ]
            },
            {
                title: "Teorema di Weierstrass",
                content: [
                    "**Teorema:** Siano $a < b$ e $f: [a, b] \\to \\mathbb{R}$ una funzione continua. Allora:",
                    "1. $f$ è **limitata** in $[a, b]$.",
                    "2. $f$ **raggiunge massimo e minimo** in $[a, b]$.",
                    "Cioè esistono $x_m, x_M \\in [a, b]$ tali che:",
                    "$$ f(x_m) \\le f(x) \\le f(x_M), \\quad \\forall x \\in [a, b] $$",
                    "**Nomenclatura:** $x_m$ è il punto di minimo globale, $f(x_m)$ è il valore minimo. $x_M$ è il punto di massimo globale, $f(x_M)$ è il valore massimo.",
                    "**NB:** Tutte le ipotesi sono necessarie. Es. $f(x) = \\frac{1}{x}$ in $\\mathbb{R} \\setminus \\{0\\}$ ha $\\inf = -\\infty$, $\\sup = +\\infty$ perché il dominio non è un intervallo chiuso e limitato."
                ]
            },
            {
                title: "Continuità della Funzione Inversa",
                content: [
                    "**Teorema:** Sia $I \\subseteq \\mathbb{R}$ un intervallo e $f: I \\to \\mathbb{R}$ una funzione continua. Allora $f$ è **invertibile** in $I$ se e solo se è **strettamente monotona**.",
                    "In tal caso, $J = f(I)$ è un intervallo e $f^{-1}: J \\to I$ è **continua**.",
                    "**Conseguenze:**",
                    "*   $\\log: (0, +\\infty) \\to \\mathbb{R}$ è continua.",
                    "*   $\\arcsin, \\arccos, \\arctan$ sono continue nel loro dominio di definizione."
                ]
            },
            {
                title: "Esercizi sulla Continuità",
                content: [
                    "**1. Dimostrare che $e^x \\cos(x) + 1 = 0$ ha infinite soluzioni reali.**",
                    "Sia $f(x) = e^x \\cos(x) + 1$, continua in tutto $\\mathbb{R}$.",
                    "*   $f(0) = 1+1 = 2 > 0$",
                    "*   $f(\\pi) = -e^{\\pi} + 1 < 0$ $\\Rightarrow$ per Th. Zeri $\\exists x_0 \\in (0, \\pi)$ con $f(x_0) = 0$",
                    "*   $f(2\\pi) = e^{2\\pi} + 1 > 0$ $\\Rightarrow$ $\\exists x_1 \\in (\\pi, 2\\pi)$ con $f(x_1) = 0$",
                    "*   $f(3\\pi) = -e^{3\\pi} + 1 < 0$ $\\Rightarrow$ $\\exists x_2 \\in (2\\pi, 3\\pi)$ con $f(x_2) = 0$",
                    "$f$ ha uno zero in ogni intervallo $(k\\pi, (k+1)\\pi)$ per $k \\in \\mathbb{N}$.",
                    "**2. Trovare $\\alpha$ affinché $f(x)$ sia continua in $[0, +\\infty)$:**",
                    "$$ f(x) = \\begin{cases} \\frac{\\cosh(\\sin x) - 1}{\\log^2(1+x^\\alpha)} & \\text{per } x \\neq 0 \\\\ 1/2 & \\text{per } x = 0 \\end{cases} $$",
                    "Per la continuità in $x=0$: $\\lim_{x \\to 0^+} f(x) = f(0) = 1/2$.",
                    "Sviluppi asintotici: $\\cosh(\\sin x) - 1 \\sim \\frac{\\sin^2 x}{2} \\sim \\frac{x^2}{2}$ e $\\log^2(1+x^\\alpha) \\sim x^{2\\alpha}$.",
                    "$\\lim_{x \\to 0} \\frac{x^2/2}{x^{2\\alpha}} = \\frac{1}{2} x^{2-2\\alpha}$.",
                    "Per avere il risultato $1/2$: $2 - 2\\alpha = 0 \\Rightarrow \\alpha = 1$."
                ]
            }
        ]
    },
    {
        id: "lezione-21-calcolo-differenziale",
        title: "Lezione 21: Calcolo Differenziale",
        subsections: [
            {
                title: "Introduzione alla Derivata",
                content: [
                    "Siano $a < b$ reali e $f: [a, b] \\to \\mathbb{R}$ continua. Consideriamo un punto $P(x_0, y_0)$ sul grafico di $f$ con $x_0 \\in (a, b)$ e $Q(x, y)$ un punto mobile sul grafico.",
                    "$$ \\frac{y-y_0}{x-x_0} = \\frac{f(x)-f(x_0)}{x-x_0} \\quad \\text{(Coefficiente angolare della retta secante)} $$",
                    "Se consideriamo il limite $x \\to x_0$, la retta secante si trasforma in **retta tangente**:",
                    "$$ y - y_0 = \\lim_{x \\to x_0} \\frac{f(x)-f(x_0)}{x-x_0} (x-x_0) $$"
                ]
            },
            {
                title: "Definizione di Derivata",
                content: [
                    "**Definizione:** Siano $a < b$ reali e $f: [a, b] \\to \\mathbb{R}$ una funzione. Si dice che è **derivabile** in $x_0 \\in (a, b)$ se esiste finito il limite:",
                    "$$ L = \\lim_{x \\to x_0} \\frac{f(x)-f(x_0)}{x-x_0} $$",
                    "Il limite $L$ si chiama **derivata** di $f$ in $x_0$ e si indica con: $f'(x_0)$, $\\frac{df}{dx}(x_0)$, $Df(x_0)$.",
                    "**Osservazioni:**",
                    "1. Per cambio di variabile: $\\lim_{h \\to 0} \\frac{f(x_0+h)-f(x_0)}{h}$.",
                    "2. Se $f(x)$ è derivabile in $x_0$, allora $y = f(x_0) + f'(x_0)(x-x_0)$ è la **retta tangente** al grafico in $x_0$.",
                    "3. Se $f(x)$ è derivabile in $(a, b)$, possiamo definire la **funzione derivata** $x \\in (a, b) \\mapsto f'(x)$."
                ]
            },
            {
                title: "Esempi di Derivate",
                content: [
                    "**1. $f(x) = |x|$:**",
                    "$(\\forall x_0 > 0) f'(x_0) = 1$; $(\\forall x_0 < 0) f'(x_0) = -1$.",
                    "$\\lim_{x \\to 0} \\frac{|x|}{x}$ non esiste (limite destro $1$, limite sinistro $-1$). **Punto angoloso.**",
                    "**2. $f(x) = \\sqrt[3]{|x|}$:**",
                    "$f'_{\\pm}(0) = \\pm \\infty$. **Punto di cuspide.**"
                ]
            },
            {
                title: "Continuità e Derivabilità",
                content: [
                    "**Teorema:** Siano $a < b$ reali e $f: [a, b] \\to \\mathbb{R}$ una funzione derivabile in $x_0 \\in (a, b)$. Allora $f$ è **continua** in $x_0$.",
                    "**NON È SEMPRE VERO IL CONTRARIO.** (Esempio: $|x|$ è continua in $0$ ma non derivabile.)",
                    "**Dimostrazione:**",
                    "$\\lim_{x \\to x_0} f(x) = \\lim_{x \\to x_0} \\left[ \\frac{f(x)-f(x_0)}{x-x_0}(x-x_0) + f(x_0) \\right] = f'(x_0) \\cdot 0 + f(x_0) = f(x_0)$."
                ]
            },
            {
                title: "Algebra delle Derivate",
                content: [
                    "**Teorema:** Siano $f, g: [a, b] \\to \\mathbb{R}$ funzioni derivabili in $x_0 \\in (a, b)$. Allora:",
                    "*   $(f \\pm g)'(x_0) = f'(x_0) \\pm g'(x_0)$",
                    "*   $(f \\cdot g)'(x_0) = f'(x_0)g(x_0) + f(x_0)g'(x_0)$",
                    "*   $(\\alpha f)'(x_0) = \\alpha f'(x_0)$ ($\\alpha$ costante)",
                    "*   $\\left(\\frac{f}{g}\\right)'(x_0) = \\frac{f'(x_0)g(x_0) - f(x_0)g'(x_0)}{[g(x_0)]^2}$ (con $g(x_0) \\neq 0$)"
                ]
            },
            {
                title: "Regola della Catena",
                content: [
                    "**Teorema:** Siano $f, g: \\mathbb{R} \\to \\mathbb{R}$ tali che $g$ è derivabile in $x_0$ e $f$ è derivabile in $g(x_0)$.",
                    "Allora la composta $f \\circ g$ è derivabile in $x_0$:",
                    "$$ (f \\circ g)'(x_0) = f'[g(x_0)] \\cdot g'(x_0) $$",
                    "**Per tre funzioni:** $(f \\circ g \\circ h)'(x) = f'\\{g[h(x)]\\} \\cdot g'[h(x)] \\cdot h'(x)$."
                ]
            },
            {
                title: "Derivate Notevoli",
                content: [
                    "*   $\\frac{d}{dx}(a^x) = a^x \\ln(a)$ (con $a > 0$)",
                    "*   $\\frac{d}{dx}(x^x) = [\\ln(x) + 1] \\cdot x^x$",
                    "*   $\\frac{d}{dx} \\sin^3 x = 3 \\sin^2 x \\cos x$",
                    "*   $\\frac{d}{dx} [\\sinh(x)] = \\cosh(x)$",
                    "*   $\\frac{d}{dy} \\ln y = \\frac{1}{y}$",
                    "*   $\\frac{d}{dy} \\arcsin y = \\frac{1}{\\sqrt{1-y^2}}$",
                    "*   $\\frac{d}{dy} \\arctan y = \\frac{1}{1+y^2}$"
                ]
            },
            {
                title: "Derivata della Funzione Inversa",
                content: [
                    "**Teorema:** Sia $f: [a, b] \\to [c, d]$ una funzione continua e invertibile. Se $f$ è derivabile in $x_0 \\in (a, b)$ e inoltre $f'(x_0) \\neq 0$, allora $f^{-1}$ è derivabile in $y_0 = f(x_0)$:",
                    "$$ (f^{-1})'(y_0) = \\frac{1}{f'(x_0)} $$",
                    "**Nota:** $(1/f)'(x_0) = \\frac{-f'(x_0)}{[f(x_0)]^2}$ (se $f(x_0) \\neq 0$)."
                ]
            }
        ]
    },
    {
        id: "lezione-22-punti-teoremi",
        title: "Lezione 22: Punti Stazionari e Teoremi Fondamentali",
        subsections: [
            {
                title: "Punti di Estremo Locale",
                content: [
                    "**Definizione:** Siano $a < b$ reali e $f: [a, b] \\to \\mathbb{R}$ una funzione. Si dice che:",
                    "*   $x_0 \\in [a, b]$ è un punto di **MINIMO LOCALE** se $(\\exists \\delta > 0)(\\forall x \\in (x_0-\\delta, x_0+\\delta) \\cap [a, b]) f(x_0) \\le f(x)$.",
                    "*   $x_0 \\in [a, b]$ è un punto di **MASSIMO LOCALE** se $(\\exists \\delta > 0)(\\forall x \\in (x_0-\\delta, x_0+\\delta) \\cap [a, b]) f(x_0) \\ge f(x)$."
                ]
            },
            {
                title: "Punti di Non Derivabilità",
                content: [
                    "Sono punti in cui la funzione non è derivabile:",
                    "*   **ANGOLOSI:** $f'(x_0^+) \\neq f'(x_0^-)$ [almeno una finita].",
                    "*   **CUSPIDE:** $f'(x_0^+) \\neq f'(x_0^-)$ [infinite con segni diversi].",
                    "*   **TANGENTE VERTICALE:** $f'(x_0^+) = f'(x_0^-)$ [entrambe infinite]."
                ]
            },
            {
                title: "Teorema di Fermat",
                content: [
                    "**Teorema:** Siano $a < b$ reali e $f: [a, b] \\to \\mathbb{R}$ una funzione derivabile in $x_0 \\in (a, b)$. Se $x_0$ è un **punto di estremo locale**, allora $f'(x_0) = 0$.",
                    "**N.B.** I punti $x \\in (a, b)$ in cui $f'(x)=0$ si chiamano **punti stazionari** o **critici** di $f$.",
                    "**Contro-esempio:** $f(x) = x^3 \\Rightarrow f'(0) = 0$, ma $x=0$ non è un estremo (è un punto di flesso).",
                    "Secondo il teorema di Fermat, i punti di estremo vanno ricercati tra:",
                    "1. I punti stazionari",
                    "2. Gli estremi dell'intervallo $[a, b]$",
                    "3. I punti di non derivabilità"
                ]
            },
            {
                title: "Teorema di Lagrange (Valor Medio)",
                content: [
                    "**Teorema:** Sia $f: [a, b] \\to \\mathbb{R}$ una funzione **continua** in $[a, b]$ e **derivabile** in $(a, b)$. Allora:",
                    "$$ \\exists c \\in (a, b) \\text{ tale che } f'(c) = \\frac{f(b)-f(a)}{b-a} $$",
                    "Geometricamente: esiste un punto in cui la tangente è parallela alla secante che unisce gli estremi."
                ]
            },
            {
                title: "Teorema di Rolle",
                content: [
                    "**Teorema:** Sia $f: [a, b] \\to \\mathbb{R}$ continua in $[a, b]$, derivabile in $(a, b)$ e tale che $f(a) = f(b)$.",
                    "Allora $\\exists c \\in (a, b)$ tale che $f'(c) = 0$.",
                    "**Nota:** Il Teorema di Rolle è un caso particolare del Teorema di Lagrange quando $f(a) = f(b)$."
                ]
            },
            {
                title: "Test di Monotonia",
                content: [
                    "**Teorema:** Sia $f: [a, b] \\to \\mathbb{R}$ una funzione continua in $[a, b]$ e derivabile in $(a, b)$. Allora:",
                    "*   $f$ crescente in $[a, b] \\Leftrightarrow f'(x) \\ge 0, \\forall x \\in (a, b)$.",
                    "*   $f$ decrescente in $[a, b] \\Leftrightarrow f'(x) \\le 0, \\forall x \\in (a, b)$.",
                    "Se le disuguaglianze valgono in senso **stretto**, allora $f$ è **strettamente monotona**.",
                    "**N.B.** $f'(x) = 0, \\forall x \\in (a, b) \\iff f$ costante."
                ]
            }
        ]
    },
    {
        id: "lezione-23-derivata-seconda",
        title: "Lezione 23: Derivata Seconda e Convessità",
        subsections: [
            {
                title: "Epigrafico e Convessità",
                content: [
                    "La **derivata seconda** fornisce informazioni circa la velocità di variazione della pendenza (curvatura).",
                    "**Definizione:** Sia $I \\subseteq \\mathbb{R}$ un intervallo e $f: I \\to \\mathbb{R}$ una funzione. Si chiama **epigrafico** di $f$ l'insieme:",
                    "$$ E_f = \\{(x,y) \\in \\mathbb{R}^2 \\mid x \\in I, y \\ge f(x)\\} $$",
                    "**Definizione:** Si dice che $f$ è **convessa in $I$** (concava) se tutte le rette secanti al grafico di $f$ si trovano **al di sopra** (sotto) del grafico.",
                    `![Funzione Convessa](/FIRST-YEAR-IMAGES/funzione-convessa.png)`,
                    `*Figura 23.1: Una funzione convessa. La retta secante che collega $(a, f(a))$ e $(b, f(b))$ si trova al di sopra del grafico. Il punto $c$ dove la tangente è parallela alla secante è dato dal Teorema di Lagrange.*`
                ]
            },
            {
                title: "Teorema della Convessità",
                content: [
                    "**Teorema:** Siano $a < b$ reali e $f: (a, b) \\to \\mathbb{R}$ una funzione. Allora:",
                    "**1)** Se $f$ è derivabile in $(a, b)$:",
                    "*   $f$ convessa in $(a, b) \\iff f'$ crescente in $(a, b)$",
                    "*   $f$ concava in $(a, b) \\iff f'$ decrescente in $(a, b)$",
                    "**2)** Se $f$ è derivabile due volte in $(a, b)$:",
                    "*   $f$ convessa in $(a, b) \\iff f''(x) \\ge 0, \\forall x \\in (a, b)$",
                    "*   $f$ concava in $(a, b) \\iff f''(x) \\le 0, \\forall x \\in (a, b)$",
                    "**N.B.:** $f''(x) > 0 \\Rightarrow f$ strettamente convessa. L'inverso non è sempre vero (es. $f(x)=x^4$ è strettamente convessa ma $f''(0)=0$)."
                ]
            },
            {
                title: "Punti di Flesso",
                content: [
                    "**Definizione:** Il punto $x_0 \\in (a, b)$ si dice di **flesso** per $f$ se $\\exists h > 0$ tale che $(x_0-h, x_0+h) \\subset (a, b)$ e inoltre:",
                    "$f$ convessa/concava in $(x_0-h, x_0)$ e $f$ concava/convessa in $(x_0, x_0+h)$.",
                    "**N.B.:** Attraversando un punto di flesso, $f''$ deve cambiare segno. Il grafico di $f$ attraversa la propria retta tangente nel punto $(x_0, f(x_0))$.",
                    "**Teorema:** Se $f$ è derivabile due volte in $x_0$ e $x_0$ è un punto di flesso, allora $f''(x_0) = 0$."
                ]
            },
            {
                title: "Regola di De L'Hôpital",
                content: [
                    "**Teorema:** Siano $f, g: (a, b) \\to \\mathbb{R}$ funzioni derivabili in $(a, b)$ con $g'(x) \\neq 0$ in $(a, b)$.",
                    "Se $\\lim_{x \\to a^+} f(x) = \\lim_{x \\to a^+} g(x) = 0$ (oppure $\\pm\\infty$) e esiste il limite:",
                    "$$ \\lim_{x \\to a^+} \\frac{f'(x)}{g'(x)} = L \\quad (L \\in \\bar{\\mathbb{R}}) $$",
                    "Allora: $\\lim_{x \\to a^+} \\frac{f(x)}{g(x)} = L$.",
                    "**N.B.** La regola vale anche se $a = -\\infty$, o per $x \\to b^-$ o $x \\to \\infty$."
                ]
            }
        ]
    },
    {
        id: "lezione-24-taylor",
        title: "Lezione 24: Formule di Taylor-Maclaurin",
        subsections: [
            {
                title: "Teorema di Taylor con Resto di Peano",
                content: [
                    "Siano $a < b$ reali e $f: (a, b) \\to \\mathbb{R}$ una funzione derivabile $n$ volte in $x_0 \\in (a, b)$ ($n \\ge 1$).",
                    "$$ f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!} (x-x_0)^k + o((x-x_0)^n) \\text{ per } x \\to x_0 $$",
                    "Se $x_0 = 0$, si parla di **formula di Maclaurin**."
                ]
            },
            {
                title: "Esempi di Sviluppi",
                content: [
                    "**1. $f(x) = e^x$, $x_0 = 0$:**",
                    "$e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\dots + \\frac{x^n}{n!} + o(x^n)$",
                    "**2. $f(x) = \\frac{1}{1-x}$, $x_0 = 0$:**",
                    "$\\frac{1}{1-x} = 1 + x + x^2 + \\dots + x^n + o(x^n)$ (serie geometrica)",
                    "**3. $\\lim_{x \\to 0} \\frac{\\ln(1+3x)}{x^2+2x}$:**",
                    "$\\ln(1+3x) = 3x + o(x) \\Rightarrow \\lim = \\frac{3x}{2x} = \\frac{3}{2}$.",
                    "**4. $\\lim_{x \\to 0} \\frac{\\pi^x - 3^x}{x}$:**",
                    "$= \\lim \\frac{1+x\\ln\\pi - 1 - x\\ln 3 + o(x)}{x} = \\ln\\pi - \\ln 3 = \\ln(\\frac{\\pi}{3})$.",
                    "**5. $\\lim_{x \\to 0} (\\sqrt{1+x})^{\\frac{1}{\\sin x}}$:**",
                    "$= e^{\\frac{\\ln\\sqrt{1+x}}{\\sin x}} = e^{\\frac{x/2}{x}} = e^{1/2} = \\sqrt{e}$."
                ]
            },
            {
                title: "Sviluppi Notevoli (Maclaurin)",
                content: [
                    "$$ \\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = \\sum_{k=0}^{n} \\frac{(-1)^k x^{2k+1}}{(2k+1)!} + o(x^{2n+2}) $$",
                    "$$ \\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots = \\sum_{k=0}^{n} \\frac{(-1)^k x^{2k}}{(2k)!} + o(x^{2n+1}) $$",
                    "$$ \\sinh x = x + \\frac{x^3}{3!} + \\dots = \\sum_{k=0}^{n} \\frac{x^{2k+1}}{(2k+1)!} + o(x^{2n+2}) $$",
                    "$$ \\cosh x = 1 + \\frac{x^2}{2!} + \\dots = \\sum_{k=0}^{n} \\frac{x^{2k}}{(2k)!} + o(x^{2n+1}) $$",
                    "$$ \\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots = \\sum_{k=1}^{n} (-1)^{k-1} \\frac{x^k}{k} + o(x^n) $$"
                ]
            },
            {
                title: "Taylor con Resto di Lagrange",
                content: [
                    "**Teorema:** Siano $a < b$ reali e $f: (a, b) \\to \\mathbb{R}$ derivabile $n+1$ volte in $(a, b)$. Fissato $x_0 \\in (a, b)$, $\\forall x \\in (a, b)$ esiste $c$ strettamente compreso tra $x$ e $x_0$ tale che:",
                    "$$ f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!} (x-x_0)^k + \\frac{f^{(n+1)}(c)}{(n+1)!} (x-x_0)^{n+1} $$",
                    "Il resto di Lagrange permette di stimare l'errore dell'approssimazione."
                ]
            },
            {
                title: "Proprietà dell'o-piccolo",
                content: [
                    "*   $o(f) \\pm o(f) = o(f)$",
                    "*   $o(c \\cdot f) = c \\cdot o(f) = o(f)$",
                    "*   $f \\cdot o(g) = o(fg)$",
                    "*   $o(f)^n = o(f^n)$",
                    "*   $o(o(f)) = o(f)$",
                    "*   $o(f + o(f)) = o(f)$",
                    "*   $o(f) = f \\cdot o(1)$"
                ]
            }
        ]
    },
    {
        id: "lezione-25-calcolo-integrale",
        title: "Lezione 25: Introduzione al Calcolo Integrale",
        subsections: [
            {
                title: "Primitive e Integrale Indefinito",
                content: [
                    "**Definizione:** Sia $I \\subseteq \\mathbb{R}$ un intervallo aperto e $f: I \\to \\mathbb{R}$ una funzione. Una funzione $F: I \\to \\mathbb{R}$ derivabile in $I$ si chiama **primitiva** di $f$ se:",
                    "$$ F'(t) = f(t), \\quad \\forall t \\in I $$",
                    "**Note:**",
                    "1. Se $F_1, F_2$ sono primitive di $f$, allora $F_1(t) = F_2(t) + c$ per una costante $c \\in \\mathbb{R}$.",
                    "2. Se $F$ è una primitiva di $f$, anche $F+c$ è una primitiva.",
                    "L'insieme di tutte le primitive si chiama **integrale indefinito** di $f$ e si indica con $\\int f(x) dx$."
                ]
            },
            {
                title: "Primitive Elementari",
                content: [
                    "*   $\\int k dx = kx + c$ (con $k \\in \\mathbb{R}$)",
                    "*   $\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + c$ (con $\\alpha \\neq -1$)",
                    "*   $\\int \\frac{1}{x} dx = \\ln|x| + c$",
                    "*   $\\int \\sin x dx = -\\cos x + c$",
                    "*   $\\int \\cos x dx = \\sin x + c$",
                    "*   $\\int a^x dx = \\frac{a^x}{\\ln a} + c$ (con $a>0, a \\neq 1$)",
                    "*   $\\int e^x dx = e^x + c$",
                    "*   $\\int \\frac{1}{1+x^2} dx = \\arctan x + c$",
                    "*   $\\int \\sinh x dx = \\cosh x + c$",
                    "*   $\\int \\cosh x dx = \\sinh x + c$",
                    "**Linearità:** $\\int [f(x) \\pm g(x)] dx = \\int f(x) dx \\pm \\int g(x) dx$ e $\\int \\alpha f(x) dx = \\alpha \\int f(x) dx$."
                ]
            },
            {
                title: "Integrazione per Sostituzione",
                content: [
                    "**Teorema:** Sia $G$ una primitiva di $g$ e $t = \\phi(x)$ con $\\phi$ derivabile. Allora:",
                    "$$ \\int g(\\phi(x))\\phi'(x) dx = G(\\phi(x)) + c $$",
                    "**Esempi:**",
                    "1. $\\int \\frac{\\cos x}{1+\\sin^2 x} dx$. Poniamo $t=\\sin x \\Rightarrow dt = \\cos x dx$.",
                    "   $\\int \\frac{1}{1+t^2} dt = \\arctan t + c = \\arctan(\\sin x) + c$.",
                    "2. $\\int (ax+b)^n dx = \\frac{1}{a(n+1)}(ax+b)^{n+1} + c$.",
                    "3. $\\int \\frac{e^{\\arctan x}}{1+x^2} dx = e^{\\arctan x} + c$.",
                    "4. $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + c$."
                ]
            },
            {
                title: "Integrazione per Parti",
                content: [
                    "**Formula:** Siano $f, g$ funzioni derivabili. Allora:",
                    "$$ \\int f(x)g'(x) dx = f(x)g(x) - \\int f'(x)g(x) dx $$",
                    "**Ordine di scelta per $f(x)$:** **LINATE** (Logaritmi, Inverse trig., Algebriche, Trigonometriche, Esponenziali).",
                    "**Esempi:**",
                    "1. $\\int x e^x dx = x e^x - \\int e^x dx = x e^x - e^x + c = e^x(x-1) + c$.",
                    "2. $\\int \\ln x dx = x \\ln x - \\int x \\cdot \\frac{1}{x} dx = x \\ln x - x + c$.",
                    "3. $\\int e^x \\sin x dx = \\frac{e^x(\\sin x - \\cos x)}{2} + c$."
                ]
            },
            {
                title: "Sostituzioni Convenienti",
                content: [
                    "**Per radici:**",
                    "*   Per $\\sqrt{a^2-x^2}$: $x=a\\sin t$ oppure $x=a\\tanh t$.",
                    "*   Per $\\sqrt{a^2+x^2}$: $x=a\\sinh t$ oppure $x=a\\tan t$.",
                    "*   Per $\\sqrt{x^2-a^2}$: $x=a\\cosh t$."
                ]
            },
            {
                title: "Integrazione di Funzioni Razionali",
                content: [
                    "Per $f(x) = \\frac{P(x)}{Q(x)}$ (funzione razionale):",
                    "**1)** Se $\\deg(P) \\ge \\deg(Q)$: divisione polinomiale.",
                    "$\\frac{P(x)}{Q(x)} = S(x) + \\frac{R(x)}{Q(x)}$",
                    "**2)** Se $\\deg(P) < \\deg(Q)$: scomposizione in fratti semplici.",
                    "*   Denominatore con radici reali distinte: $\\frac{A}{x-x_1} + \\frac{B}{x-x_2} + \\dots$",
                    "*   Denominatore con radici reali multiple: $\\frac{A}{x-x_0} + \\frac{B}{(x-x_0)^2} + \\dots$",
                    "*   Denominatore irriducibile di 2° grado: $\\frac{Ax+B}{ax^2+bx+c}$"
                ]
            }
        ]
    },
    {
        id: "lezione-26-integrale-riemann",
        title: "Lezione 26: Integrale di Riemann",
        subsections: [
            {
                title: "Introduzione",
                content: [
                    "Siano $a < b$ reali e $f: [a,b] \\to \\mathbb{R}$ una funzione. Ci poniamo il problema di calcolare l'area della regione:",
                    "$$ E = \\{(x,y) \\in \\mathbb{R}^2 \\mid a \\le x \\le b, 0 \\le y \\le f(x)\\} $$",
                    "**Esempio:** Sia $f(x) = x^2$ su $[0, b]$ con $b > 0$. Calcoliamo l'area di $E$.",
                    "1. Si divide l'intervallo $[0, b]$ in $n \\ge 1$ segmenti uguali, ognuno di lunghezza $b/n$, con punti $x_i = \\frac{ib}{n}$.",
                    "2. In ogni intervallo $I_i = [x_{i-1}, x_i]$ si considera il rettangolo inscritto di **maggiore** altezza (approssimazione per difetto).",
                    "3. Si considera il rettangolo circoscritto di **minore** altezza (approssimazione per eccesso)."
                ]
            },
            {
                title: "Somme di Riemann",
                content: [
                    "**Definizione:** Per $a < b$ e $f: [a, b] \\to \\mathbb{R}$ limitata, definiamo la **partizione** $P = \\{x_0, ..., x_n\\}$ con $a = x_0 < x_1 < ... < x_n = b$.",
                    "La **somma di Riemann** di $f$ associata alla partizione $P$ è:",
                    "$$ R_f^P = \\sum_{i=1}^{n} f(\\xi_i)(x_i - x_{i-1}) \\quad \\text{con } \\xi_i \\in [x_{i-1}, x_i] $$"
                ]
            },
            {
                title: "Funzione Riemann-Integrabile",
                content: [
                    "**Definizione:** Siano $a < b$ reali e $f: [a, b] \\to \\mathbb{R}$ limitata. Diciamo che $f$ è **Riemann-integrabile** in $[a, b]$ se esiste finito il limite $\\lim_{n \\to \\infty} R_f^P$ e tale limite non dipende dalla scelta dei punti $\\xi_i$.",
                    "In tal caso si pone:",
                    "$$ \\int_{a}^{b} f(x) dx = \\lim_{n \\to \\infty} R_f^P $$"
                ]
            },
            {
                title: "Classi di Funzioni Integrabili",
                content: [
                    "**Teorema:** Se $f: [a, b] \\to \\mathbb{R}$ è **continua**, allora è integrabile in $[a, b]$.",
                    "**Teorema:** Se $f$ è **limitata e monotona** in $[a, b]$, allora è integrabile.",
                    "**Contro-esempio:** La funzione di Dirichlet:",
                    "$$ f(x) = \\begin{cases} 1 & \\text{se } x \\in \\mathbb{Q} \\\\ 0 & \\text{se } x \\in \\mathbb{R} \\setminus \\mathbb{Q} \\end{cases} $$",
                    "**NON** è Riemann-integrabile."
                ]
            },
            {
                title: "Proprietà dell'Integrale Definito",
                content: [
                    "1. $(\\forall c \\in \\mathbb{R}) \\int_{a}^{b} c \\, dx = c(b-a)$.",
                    "2. Se $f$ è integrabile in $[a, b]$ e $c \\in (a, b)$: $\\int_{a}^{b} f(x)dx = \\int_{a}^{c} f(x)dx + \\int_{c}^{b} f(x)dx$.",
                    "3. **Linearità:** $\\int_{a}^{b} (\\alpha f(x) + \\beta g(x))dx = \\alpha \\int_{a}^{b} f(x)dx + \\beta \\int_{a}^{b} g(x)dx$.",
                    "4. **Monotonia:** Se $f(x) \\le g(x)$ in $[a, b]$, allora $\\int_{a}^{b} f(x)dx \\le \\int_{a}^{b} g(x)dx$.",
                    "5. **Modulo:** $|\\int_{a}^{b} f(x)dx| \\le \\int_{a}^{b} |f(x)|dx$.",
                    "**Convenzioni:** $\\int_{b}^{a} f(x)dx = -\\int_{a}^{b} f(x)dx$ e $\\int_{a}^{a} f(x)dx = 0$."
                ]
            },
            {
                title: "Teorema Fondamentale del Calcolo",
                content: [
                    "**1. Primo Teorema (Funzione Integrale):** Se $f: [a, b] \\to \\mathbb{R}$ è continua, allora la funzione integrale:",
                    "$$ G(x) = \\int_{a}^{x} f(t) dt $$",
                    "è derivabile in $(a, b)$ con $G'(x) = f(x), \\forall x \\in (a, b)$.",
                    "**2. Secondo Teorema (Torricelli-Barrow):** Sia $f: [a, b] \\to \\mathbb{R}$ continua e $G$ una sua primitiva. Allora:",
                    "$$ \\int_{a}^{b} f(x)dx = G(b) - G(a) = [G(x)]_a^b $$",
                    "**Derivata generalizzata:**",
                    "$$ \\frac{d}{dx} \\int_{\\alpha(x)}^{\\beta(x)} f(t)dt = f(\\beta(x))\\beta'(x) - f(\\alpha(x))\\alpha'(x) $$"
                ]
            }
        ]
    },
    {
        id: "lezione-27-integrali-impropri",
        title: "Lezione 27: Integrali Impropri",
        subsections: [
            {
                title: "Integrale Improprio di Prima Specie",
                content: [
                    "L'integrale di Riemann richiede che $I$ sia un intervallo **limitato** e che $f$ sia **limitata** in $I$. Gli integrali impropri estendono questa nozione.",
                    "**Definizione (Intervallo non limitato):** Per $a \\in \\mathbb{R}$ e $f: [a, +\\infty) \\to \\mathbb{R}$ continua, diciamo che $f$ è integrabile in $[a, +\\infty)$ se:",
                    "1. $(\\forall x > a)$ $f$ è integrabile in $[a, x]$.",
                    "2. Esiste finito il limite $\\lim_{\\omega \\to +\\infty} \\int_{a}^{\\omega} f(x) dx$.",
                    "In tal caso: $\\int_{a}^{+\\infty} f(x) dx = \\lim_{\\omega \\to +\\infty} \\int_{a}^{\\omega} f(x) dx$.",
                    "Se il limite è finito, l'integrale è **convergente**; altrimenti è **divergente**."
                ]
            },
            {
                title: "Esempio Fondamentale (DA SAPERE)",
                content: [
                    "**Studiare la convergenza di $\\int_{1}^{+\\infty} \\frac{1}{x^\\alpha} dx$:**",
                    "*   Per $\\alpha = 1$: $\\int_{1}^{+\\infty} \\frac{1}{x} dx = \\lim_{\\omega \\to +\\infty} [\\ln|x|]_1^\\omega = +\\infty$ (diverge).",
                    "**Risultato generale:**",
                    "*   **Converge** se $\\alpha > 1$",
                    "*   **Diverge** se $\\alpha \\le 1$"
                ]
            },
            {
                title: "Integrale Improprio di Seconda Specie",
                content: [
                    "**Definizione (Funzione non limitata):** Siano $a < b$ e $f: [a, b) \\to \\mathbb{R}$ tale che $\\lim_{x \\to b^-} f(x) = \\pm\\infty$.",
                    "Diciamo che $f$ è integrabile in $[a, b)$ se:",
                    "1. $(\\forall x \\in [a, b))$ $f$ è integrabile in $[a, x]$.",
                    "2. Esiste finito il limite $\\lim_{x \\to b^-} \\int_{a}^{x} f(t) dt$.",
                    "**Esempio:** $\\int_{0}^{1} \\frac{1}{x^\\alpha} dx$:",
                    "*   **Converge** se $\\alpha < 1$",
                    "*   **Diverge** se $\\alpha \\ge 1$",
                    "**Nota:** Se la singolarità è in $c \\in (a, b)$, si spezza: $\\int_{a}^{b} f = \\int_{a}^{c} f + \\int_{c}^{b} f$."
                ]
            },
            {
                title: "Criterio del Confronto",
                content: [
                    "**Teorema:** Sia $a \\in \\mathbb{R}$ e $f, g: [a, +\\infty) \\to \\mathbb{R}$ continue tali che $(\\exists b \\ge a)(\\forall x \\ge b) 0 \\le f(x) \\le g(x)$.",
                    "Allora:",
                    "*   $\\int_{a}^{+\\infty} g(x) dx$ converge $\\Rightarrow \\int_{a}^{+\\infty} f(x) dx$ converge.",
                    "*   $\\int_{a}^{+\\infty} f(x) dx$ diverge $\\Rightarrow \\int_{a}^{+\\infty} g(x) dx$ diverge.",
                    "**Esempio:** $\\int_{1}^{+\\infty} (\\frac{\\sin x}{x})^2 dx$. Poiché $0 \\le (\\frac{\\sin x}{x})^2 \\le \\frac{1}{x^2}$ e $\\int_{1}^{+\\infty} \\frac{1}{x^2} dx$ converge ($\\alpha = 2 > 1$), l'integrale converge."
                ]
            },
            {
                title: "Criterio del Confronto Asintotico",
                content: [
                    "**Teorema:** Siano $f, g: [a, +\\infty) \\to \\mathbb{R}$ continue e non negative definitivamente. Se:",
                    "$$ \\lim_{x \\to +\\infty} \\frac{f(x)}{g(x)} = L \\neq 0 $$",
                    "(cioè $f \\sim Lg$ per $x \\to +\\infty$), allora:",
                    "$\\int_{a}^{+\\infty} f(x) dx$ converge $\\iff \\int_{a}^{+\\infty} g(x) dx$ converge."
                ]
            },
            {
                title: "Criterio di Convergenza Assoluta",
                content: [
                    "**Teorema:** Sia $f: [a, +\\infty) \\to \\mathbb{R}$ continua. Allora:",
                    "$$ \\int_{a}^{+\\infty} |f(x)| dx \\text{ converge } \\Rightarrow \\int_{a}^{+\\infty} f(x) dx \\text{ converge} $$",
                    "**Attenzione:** L'inverso NON è sempre vero!",
                    "Esempio: $\\int_{0}^{+\\infty} \\frac{\\sin x}{x} dx$ converge (a $\\frac{\\pi}{2}$, integrale di Dirichlet), ma $\\int_{0}^{+\\infty} |\\frac{\\sin x}{x}| dx$ diverge."
                ]
            }
        ]
    },
    {
        id: "lezione-28-serie-numeriche",
        title: "Lezione 28: Serie Numeriche",
        subsections: [
            {
                title: "Definizione di Serie",
                content: [
                    "Data una successione $(a_n)_{n \\in \\mathbb{N}} \\subset \\mathbb{R}$, vogliamo dare un senso alla **somma infinita**:",
                    "$$ \\sum_{k=0}^{+\\infty} a_k = a_0 + a_1 + a_2 + a_3 + \\dots $$",
                    "Questa somma infinita si dice **serie numerica**.",
                    "Costruiamo la **successione delle somme parziali** $(S_N)_{N \\in \\mathbb{N}}$:",
                    "$$ S_0 = a_0, \\quad S_1 = a_0 + a_1, \\quad \\dots, \\quad S_N = \\sum_{k=0}^{N} a_k $$",
                    "**Definizione:** La serie $\\sum_{k=0}^{+\\infty} a_k$ è **convergente** (divergente) se la successione $S_N$ è convergente (divergente). Se $\\lim_{N \\to \\infty} S_N = S$, poniamo $\\sum_{k=0}^{\\infty} a_k = S$."
                ]
            },
            {
                title: "Serie Geometrica",
                content: [
                    "Per ogni $q \\neq 1$, sappiamo che $(\\forall N \\in \\mathbb{N})$:",
                    "$$ \\sum_{i=0}^{N} q^i = \\frac{1 - q^{N+1}}{1-q} $$",
                    "Per $N \\to \\infty$:",
                    "$$ \\sum_{i=0}^{+\\infty} q^k = \\begin{cases} \\frac{1}{1-q} & \\text{se } |q| < 1 \\text{ (convergente)} \\\\ +\\infty & \\text{se } q \\ge 1 \\text{ (divergente)} \\\\ \\text{irregolare} & \\text{se } q \\le -1 \\end{cases} $$"
                ]
            },
            {
                title: "Serie di Mengoli e Somma Telescopica",
                content: [
                    "**Serie di Mengoli:**",
                    "$$ \\sum_{k=1}^{\\infty} \\frac{1}{k(k+1)} = \\sum_{k=1}^{\\infty} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = 1 $$",
                    "**Somma telescopica:** Quando c'è la differenza di due termini consecutivi, sopravvivono solo il primo e l'ultimo:",
                    "$$ \\sum_{k=0}^{n} (b_k - b_{k+1}) = b_0 - b_{n+1} $$"
                ]
            },
            {
                title: "Serie Armonica",
                content: [
                    "La **serie armonica** è **divergente**:",
                    "$$ \\sum_{k=1}^{\\infty} \\frac{1}{k} = +\\infty $$",
                    "**Dimostrazione per assurdo:** Se convergesse a $S$, per ogni $\\epsilon > 0$ esisterebbe $N_0$ tale che $|S_N - S| < \\epsilon/2$ per $N > N_0$.",
                    "Ma $S_{2N} - S_N = \\sum_{k=N+1}^{2N} \\frac{1}{k} \\ge \\sum_{k=N+1}^{2N} \\frac{1}{2N} = N \\cdot \\frac{1}{2N} = \\frac{1}{2}$.",
                    "Contraddizione: non può essere $|S_{2N} - S_N| < \\epsilon$ per $\\epsilon$ arbitrariamente piccolo."
                ]
            },
            {
                title: "Condizione Necessaria per la Convergenza",
                content: [
                    "**Teorema:** Se $\\sum_{k=0}^{\\infty} a_k$ converge, allora $\\lim_{n \\to \\infty} a_n = 0$.",
                    "**ATTENZIONE:** Il viceversa è **FALSO**! (Vedi serie armonica: $a_n = 1/n \\to 0$ ma la serie diverge.)",
                    "Questo teorema serve solo per **escludere** la convergenza."
                ]
            },
            {
                title: "Serie a Termini Non Negativi",
                content: [
                    "Se $(a_n) \\subset [0, +\\infty)$, allora $(S_N)$ è una successione **monotona crescente**:",
                    "$$ S_{N+1} = S_N + a_{N+1} \\ge S_N $$",
                    "Dunque $(S_N)$ converge a un numero reale oppure diverge a $+\\infty$.",
                    "In particolare, la serie $\\sum a_k$ converge **se e solo se** $(S_N)$ è **limitata**."
                ]
            },
            {
                title: "Criterio del Confronto",
                content: [
                    "**Teorema:** Siano $(a_n), (b_n) \\subset [0, +\\infty)$ successioni tali che $a_n \\le b_n$. Allora:",
                    "*   $\\sum b_n$ converge $\\Rightarrow \\sum a_n$ converge.",
                    "*   $\\sum a_n$ diverge $\\Rightarrow \\sum b_n$ diverge."
                ]
            },
            {
                title: "Criterio del Confronto Asintotico",
                content: [
                    "**Teorema:** Siano $(a_n), (b_n) \\subset [0, +\\infty)$ tali che:",
                    "$$ \\lim_{n \\to \\infty} \\frac{a_n}{b_n} = l \\in (0, +\\infty) $$",
                    "(cioè $a_n \\sim l \\cdot b_n$ per $n \\to \\infty$). Allora:",
                    "$\\sum a_n$ converge $\\iff \\sum b_n$ converge."
                ]
            },
            {
                title: "Criterio del Rapporto",
                content: [
                    "**Teorema:** Sia $(a_n) \\subset [0, +\\infty)$ e supponiamo che esista:",
                    "$$ l = \\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} \\ge 0 $$",
                    "Allora:",
                    "1. Se $l < 1 \\Rightarrow \\sum a_n$ converge.",
                    "2. Se $l > 1 \\Rightarrow \\sum a_n$ diverge.",
                    "3. Se $l = 1$ non si può concludere nulla."
                ]
            },
            {
                title: "Criterio della Radice $n$-esima",
                content: [
                    "**Teorema:** Sia $(a_n)$ una successione e supponiamo che esista:",
                    "$$ l = \\lim_{n \\to \\infty} \\sqrt[n]{a_n} $$",
                    "Allora:",
                    "1. $l < 1 \\Rightarrow \\sum a_k$ converge.",
                    "2. $l > 1 \\Rightarrow \\sum a_k$ diverge.",
                    "3. $l = 1$ non si può concludere."
                ]
            },
            {
                title: "Criterio dell'Integrale",
                content: [
                    "**Teorema:** Sia $f: [1, +\\infty) \\to \\mathbb{R}$ una funzione **decrescente e positiva**. Sia $a_n = f(n)$.",
                    "Allora:",
                    "$$ \\sum a_n \\text{ converge } \\iff \\int_{1}^{+\\infty} f(x) dx \\text{ converge} $$"
                ]
            },
            {
                title: "Convergenza Assoluta e Criterio di Leibniz",
                content: [
                    "**Definizione:** La serie è **assolutamente convergente** se la serie dei moduli $\\sum |a_k|$ converge.",
                    "**Osservazione:** Ogni serie assolutamente convergente è anche (semplicemente) convergente.",
                    "**Criterio di Leibniz:** Sia $(a_n) \\subset \\mathbb{R}$ una successione **decrescente** e **convergente a 0** (dunque $a_n \\ge 0$).",
                    "Allora la **serie a segni alterni** $\\sum (-1)^n a_n$ converge."
                ]
            }
        ]
    },
    {
        id: "lezione-29-esercizi-taylor",
        title: "Lezione 29: Esercizi Taylor e Limiti",
        subsections: [
            {
                title: "Esercizi di Sviluppo",
                content: [
                    "**1.** Calcolare $\\sinh(1)$ con tre termini non nulli e stimare l'errore.",
                    "$\\sinh(x) \\approx x + \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^5)$",
                    "$\\sinh(1) \\approx 1 + \\frac{1}{6} + \\frac{1}{120} = \\frac{120 + 20 + 1}{120} = \\frac{141}{120}$. Errore $\\le \\frac{3}{1000}$.",
                    "**2.** $f(x) = \\sin x - x$ fino al grado 4:",
                    "$\\sin x \\approx x - \\frac{x^3}{6} + o(x^4) \\Rightarrow f(x) \\approx -\\frac{x^3}{6}$.",
                    "**3.** $f(x) = \\log(\\cos x)$ in $x_0 = \\pi/3$:",
                    "$f(x) = -\\log 2 - \\sqrt{3}(x-\\pi/3) - 2(x-\\pi/3)^2 + o((x-\\pi/3)^2)$."
                ]
            },
            {
                title: "Limiti con Taylor",
                content: [
                    "**4.** $\\lim_{x \\to 0} \\frac{\\pi^x - 3^x}{x}$",
                    "$= \\lim \\frac{1+x\\ln\\pi - 1 - x\\ln 3 + o(x)}{x} = \\ln\\pi - \\ln 3 = \\ln(\\frac{\\pi}{3})$.",
                    "**5.** $\\lim_{x \\to 0} (\\sqrt{1+x})^{\\frac{1}{\\sin x}}$",
                    "$= e^{\\frac{\\ln\\sqrt{1+x}}{\\sin x}} = e^{\\frac{x/2}{x}} = e^{1/2} = \\sqrt{e}$.",
                    "**6.** $f(x) = e^{-x^2/2} - \\cos x$. Determinare la natura di $x=0$.",
                    "$f(x) = (1 - \\frac{x^2}{2} + \\frac{x^4}{8}) - (1 - \\frac{x^2}{2} + \\frac{x^4}{24}) = \\frac{x^4}{12} + o(x^4)$.",
                    "Poiché $f(x) \\sim \\frac{1}{12}x^4 > 0$ vicino a $0$, $x=0$ è un **minimo locale**."
                ]
            },
            {
                title: "Limiti con o-piccolo",
                content: [
                    "**7.** $\\lim_{x \\to 0} \\frac{e^{-x^2/2} - \\cos x}{\\sin^2 x - \\sin(x^2)}$",
                    "Numeratore $\\sim \\frac{1}{12}x^4$. Denominatore: $\\sin^2 x - \\sin(x^2) \\approx (x^2 - \\frac{x^4}{3}) - x^2 = -\\frac{x^4}{3}$.",
                    "Limite: $\\frac{x^4/12}{-x^4/3} = -\\frac{3}{12} = -\\frac{1}{4}$.",
                    "**8.** Calcolare $\\log(11/10)$ con errore $< 1/1000$:",
                    "$\\log(1.1) = \\frac{1}{10} - \\frac{1}{200} + \\frac{1}{3000} - \\dots \\approx 0.1 - 0.005 = 0.095$."
                ]
            }
        ]
    },
    {
        id: "lezione-30-esercizi-integrali",
        title: "Lezione 30: Esercizi Integrali",
        subsections: [
            {
                title: "Integrali con Fratti Semplici",
                content: [
                    "**1.** $\\int \\frac{3}{x^2+4} dx = \\frac{3}{2} \\arctan(\\frac{x}{2}) + c$",
                    "**2.** $\\int \\frac{1}{x^2-6x+5} dx = \\int \\frac{1}{(x-1)(x-5)} dx$",
                    "$= -\\frac{1}{4}\\ln|x-1| + \\frac{1}{4}\\ln|x-5| + c$",
                    "**3.** $\\int \\frac{x^2}{1+x^2} dx = \\int (1 - \\frac{1}{1+x^2}) dx = x - \\arctan x + c$",
                    "**4.** $\\int \\frac{2x-5}{(x-2)^2} dx = 2\\ln|x-2| + \\frac{1}{x-2} + c$"
                ]
            },
            {
                title: "Integrali con Sostituzione",
                content: [
                    "**5.** $\\int 5^x dx = \\frac{5^x}{\\ln 5} + c$",
                    "**6.** $\\int \\cos x \\cdot e^{\\sin x} dx = e^{\\sin x} + c$",
                    "**7.** $\\int e^{-2x} dx = -\\frac{1}{2} e^{-2x} + c$",
                    "**8.** $\\int \\cos(3x) dx = \\frac{1}{3} \\sin(3x) + c$",
                    "**9.** $\\int \\frac{x}{x^4+1} dx = \\frac{1}{2} \\arctan(x^2) + c$"
                ]
            },
            {
                title: "Integrali per Parti",
                content: [
                    "**10.** $\\int x^2 \\sin x dx$ (per parti due volte)",
                    "$= -x^2 \\cos x + 2x \\sin x + 2 \\cos x + c$",
                    "**11.** $\\int \\sin(\\ln x) dx$. Pongo $t = \\ln x$:",
                    "$= \\frac{x(\\sin(\\ln x) - \\cos(\\ln x))}{2} + c$",
                    "**12.** $\\int \\frac{x+1}{x^2+3} dx = \\frac{1}{2} \\ln(x^2+3) + \\frac{1}{\\sqrt{3}} \\arctan(\\frac{x}{\\sqrt{3}}) + c$"
                ]
            },
            {
                title: "Integrali Definiti",
                content: [
                    "**13.** $\\int_{0}^{1/2} e^{2x} dx = \\frac{1}{2}(e-1)$",
                    "**14.** $\\int_{2}^{3} \\frac{x}{\\sqrt{x-2}} dx = \\frac{14}{3}$",
                    "**15.** Se $f$ è **dispari** su $[-a, a]$: $\\int_{-a}^{a} f(x) dx = 0$",
                    "**16.** Se $f$ è **pari** su $[-a, a]$: $\\int_{-a}^{a} f(x) dx = 2 \\int_{0}^{a} f(x) dx$",
                    "**17.** $\\int_{-\\pi}^{\\pi} x \\sin x dx = 2\\pi$ (funzione pari)"
                ]
            }
        ]
    },
    {
        id: "lezione-31-esercizi-serie",
        title: "Lezione 31: Esercizi Serie",
        subsections: [
            {
                title: "Serie Convergenti",
                content: [
                    "**1.** $\\sum_{n=1}^{\\infty} \\frac{\\cos n^4}{n^2+1}$: Poiché $|\\frac{\\cos n^4}{n^2+1}| \\le \\frac{1}{n^2}$ e $\\sum \\frac{1}{n^2}$ converge, **converge assolutamente**.",
                    "**2.** $\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n^3}$: $\\frac{\\ln n}{n^3} \\le \\frac{\\sqrt{n}}{n^3} = \\frac{1}{n^{2.5}}$. **Converge**.",
                    "**3.** $\\sum_{n=1}^{\\infty} 2^n \\sin(\\frac{1}{3^n}) \\sim \\sum (\\frac{2}{3})^n$. Criterio radice: $l = \\frac{2}{3} < 1$. **Converge**.",
                    "**4.** $\\sum_{n=1}^{\\infty} (-1)^n \\frac{1}{2n!}$: Leibniz ($a_n \\to 0$, decrescente). **Converge**."
                ]
            },
            {
                title: "Serie Divergenti",
                content: [
                    "**5.** $\\sum_{n=1}^{\\infty} (1-\\frac{1}{n^2})^{n^2}$: $\\lim_{n \\to \\infty} (1-\\frac{1}{n^2})^{n^2} = \\frac{1}{e} \\neq 0$. **Diverge** (criterio necessario).",
                    "**6.** $\\sum_{n=1}^{\\infty} (\\frac{n+1}{n-1})^n$: $\\lim = e^2 \\neq 0$. **Diverge**.",
                    "**7.** $\\sum_{n=1}^{\\infty} n! \\cdot x^n$: Per $x \\neq 0$, il termine generale non è infinitesimo. **Diverge**."
                ]
            },
            {
                title: "Serie con Parametro",
                content: [
                    "**8.** $\\sum_{n=1}^{+\\infty} \\frac{x^n}{n 2^n}$",
                    "Criterio radice: $l = \\lim \\sqrt[n]{(\\frac{x}{2})^n} = \\frac{|x|}{2}$.",
                    "Converge se $\\frac{|x|}{2} < 1 \\Rightarrow |x| < 2$.",
                    "**9.** $\\sum_{n=1}^{\\infty} (-1)^n \\frac{2+n}{1+n+n^2}$",
                    "$\\lim \\frac{2+n}{n^2+n+1} = 0$. Serie a segni alterni con Leibniz. **Converge**."
                ]
            }
        ]
    },
    {
        id: "riassunto-1-insiemi-complessi",
        title: "Riassunto: Insiemi e Numeri Complessi",
        subsections: [
            {
                title: "Insiemi Numerici",
                content: [
                    "**Assioma di Completezza:** Ogni sottoinsieme di $\\mathbb{R}$, non vuoto, limitato superiormente (inferiormente) possiede un estremo superiore (o inferiore).",
                    "**Estremo:** $\\forall x \\in E, \\sup \\ge x$ (superiore); $\\forall x \\in E, \\inf \\le x$ (inferiore).",
                    "**Massimo e Minimo:** Se $\\sup \\in E$ è massimo; se $\\inf \\in E$ è minimo.",
                    "**Principio d'Induzione:** Per dimostrare $P(n)$ vera $\\forall n \\in \\mathbb{N}$:",
                    "1. **Base:** $P(n)$ vera per $n=0$.",
                    "2. **Passo Induttivo:** $P(n) \\Rightarrow P(n+1)$ vera."
                ]
            },
            {
                title: "Sommatorie e Binomio",
                content: [
                    "**Sommatoria:** $a_1 + a_2 + \\dots + a_n = \\sum_{k=1}^{n} a_k$",
                    "**Coefficiente Binomiale:** $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ con $0! = 1$.",
                    "NB: $\\binom{n}{0} = 1$, $\\binom{n}{1} = n$, $\\binom{n}{n} = 1$.",
                    "**Binomio di Newton:** $(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}$."
                ]
            },
            {
                title: "Numeri Complessi - Operazioni",
                content: [
                    "**Insieme:** $\\mathbb{C} = \\mathbb{R}^2 = \\{(x,y) \\mid x,y \\in \\mathbb{R}\\}$.",
                    "**Operazioni:** $(a,b) + (c,d) = (a+c, b+d)$; $(a,b) \\cdot (c,d) = (ac-bd, ad+bc)$.",
                    "**Elementi Neutri:** $(0,0)$ per somma, $(1,0)$ per prodotto.",
                    "**Unità Immaginaria:** $i = (0,1) \\Rightarrow i^2 = -1$.",
                    "**Forma Algebrica:** $z = a+ib = \\text{Re}(z) + i \\text{Im}(z)$."
                ]
            },
            {
                title: "Coniugato e Modulo",
                content: [
                    "**Coniugato:** $\\bar{z} = a-ib$.",
                    "Proprietà: $|\\bar{z}| = |z|$, $\\overline{z \\pm w} = \\bar{z} \\pm \\bar{w}$, $\\overline{z \\cdot w} = \\bar{z} \\cdot \\bar{w}$.",
                    "**Formule:** $\\text{Re}(z) = \\frac{z+\\bar{z}}{2}$, $\\text{Im}(z) = \\frac{z-\\bar{z}}{2i}$.",
                    "**Modulo:** $|z| = \\sqrt{x^2+y^2}$.",
                    "Proprietà: $|z|^2 = z \\cdot \\bar{z}$, $|z+w| \\le |z|+|w|$, $|z \\cdot w| = |z| \\cdot |w|$, $1/z = \\frac{\\bar{z}}{|z|^2}$."
                ]
            },
            {
                title: "Forma Trigonometrica e Polare",
                content: [
                    "**Coordinate Polari:** $\\rho = |z|$ (raggio), $\\theta$ (angolo polare).",
                    "$x = \\rho \\cos \\theta$, $y = \\rho \\sin \\theta$.",
                    "**Forma Trigonometrica:** $z = \\rho (\\cos \\theta + i \\sin \\theta)$.",
                    "**Formula di Eulero:** $e^{i\\theta} = \\cos \\theta + i \\sin \\theta$.",
                    "**Forma Polare:** $z = \\rho e^{i\\theta}$.",
                    "**Formula di De Moivre:** $(e^{i\\theta})^n = \\cos(n\\theta) + i \\sin(n\\theta)$.",
                    `![Radici dell'Unità](/FIRST-YEAR-IMAGES/radici-unita-complesse.png)`,
                    `*Figura: Le radici n-esime dell'unità nel piano complesso, con la formula di Eulero.*`
                ]
            },
            {
                title: "Radici n-esime",
                content: [
                    "Sia $w \\in \\mathbb{C}$ e $n \\in \\mathbb{N}$. L'equazione $z^n = w$ ha:",
                    "1. Se $w = 0 \\Rightarrow z = 0$ (unica soluzione).",
                    "2. Se $w \\neq 0$: $n$ soluzioni distinte:",
                    "$$ z_k = \\sqrt[n]{|w|} e^{i\\frac{\\varphi + 2k\\pi}{n}} \\quad k = 0, 1, \\dots, n-1 $$",
                    "Rappresentano $n$ vertici di un poligono regolare inscritto in una circonferenza di raggio $\\sqrt[n]{|w|}$."
                ]
            }
        ]
    },
    {
        id: "riassunto-2-funzioni-limiti",
        title: "Riassunto: Funzioni e Limiti",
        subsections: [
            {
                title: "Definizioni Fondamentali",
                content: [
                    "**Funzione:** concetto che esprime la dipendenza di una grandezza variabile rispetto a una indipendente.",
                    "**Dominio e Codominio:** $f: A \\to B$, $A = \\text{dom}(f)$, $B = \\text{codom}(f)$.",
                    "**Grafico:** $G_f = \\{(x,y) \\in \\mathbb{R}^2 \\mid x \\in A, y = f(x)\\}$.",
                    "**Zero:** ogni $x \\in A$ tale che $f(x) = 0$."
                ]
            },
            {
                title: "Proprietà delle Funzioni",
                content: [
                    "**Pari:** $f(x) = f(-x)$ (simmetria rispetto asse $y$).",
                    "**Dispari:** $f(x) = -f(-x)$ (simmetria rispetto origine).",
                    "**Periodicità:** $f(x+T) = f(x)$ per qualche $T > 0$.",
                    "**Monotonia:** Crescente: $f(x_1) \\le f(x_2)$ per $x_1 < x_2$; Decrescente: $f(x_1) \\ge f(x_2)$.",
                    "**Limitata:** Sup. se $f(x) \\le M$; Inf. se $f(x) \\ge m$.",
                    "**Iniettività:** $f(x_1) = f(x_2) \\Rightarrow x_1 = x_2$.",
                    "**Suriettività:** $f(A) = B$.",
                    "**Biunivocità:** sia iniettiva che suriettiva."
                ]
            },
            {
                title: "Funzioni Elementari",
                content: [
                    "**Potenza:** $f(x) = x^\\alpha$. **Esponenziale:** $f(x) = a^x$. **Logaritmica:** $f(x) = \\log_a x$.",
                    "**Trigonometriche:** $\\sin x, \\cos x, \\tan x, \\cot x, \\arcsin x, \\arccos x, \\arctan x$.",
                    "**Formule:** $\\sin(x \\pm y) = \\sin x \\cos y \\pm \\sin y \\cos x$; $\\cos(x \\pm y) = \\cos x \\cos y \\mp \\sin x \\sin y$.",
                    "**Iperboliche:** $\\sinh x = \\frac{e^x - e^{-x}}{2}$, $\\cosh x = \\frac{e^x + e^{-x}}{2}$, $\\cosh^2 x - \\sinh^2 x = 1$."
                ]
            },
            {
                title: "Definizioni di Limite",
                content: [
                    "**Def. Successionale:** $\\lim_{x \\to c} f(x) = l$ se per ogni $(x_n)$ con $x_n \\to c$ ($x_n \\neq c$), si ha $f(x_n) \\to l$.",
                    "**Def. Topologica ($\\epsilon$-$\\delta$):** $\\lim_{x \\to c} f(x) = l$ se:",
                    "$(\\forall \\epsilon > 0)(\\exists \\delta > 0)$ tale che $|x-c| < \\delta \\Rightarrow |f(x)-l| < \\epsilon$.",
                    "**Limite Destro/Sinistro:** $\\lim_{x \\to c^+} f(x)$, $\\lim_{x \\to c^-} f(x)$.",
                    "Se $\\lim_{c^-} = \\lim_{c^+} = l \\Rightarrow \\lim_{x \\to c} f(x) = l$."
                ]
            },
            {
                title: "Asintoti",
                content: [
                    "**Orizzontale:** Se $\\lim_{x \\to \\infty} f(x) = l \\Rightarrow y = l$.",
                    "**Verticale:** Se $\\lim_{x \\to c} f(x) = \\pm\\infty \\Rightarrow x = c$.",
                    "**Obliquo:** Se $\\lim_{x \\to \\infty} f(x)/x = m$ e $\\lim_{x \\to \\infty} (f(x) - mx) = q \\Rightarrow y = mx + q$."
                ]
            },
            {
                title: "Teoremi sui Limiti",
                content: [
                    "**Unicità:** Se $\\lim_{x \\to c} f(x) = l$, allora $l$ è unico.",
                    "**Confronto:** Se $\\lim f = \\lim g = l$ e $f(x) \\le h(x) \\le g(x)$ def., allora $\\lim h = l$.",
                    "**Algebra dei Limiti:** $\\lim (f \\pm g) = l_1 \\pm l_2$, $\\lim (f \\cdot g) = l_1 \\cdot l_2$, $\\lim (f/g) = l_1/l_2$."
                ]
            }
        ]
    },
    {
        id: "riassunto-3-continuita-derivate",
        title: "Riassunto: Continuità, Successioni e Derivate",
        subsections: [
            {
                title: "Continuità",
                content: [
                    "**Definizione:** $f$ è continua in $c$ se $\\lim_{x \\to c} f(x) = f(c)$.",
                    "**Algebra:** Se $f, g$ continue in $c$: $f \\pm g$, $f \\cdot g$, $f/g$ continue in $c$.",
                    "**Composizione:** Se $g$ continua in $x_0$ e $f$ continua in $g(x_0)$, allora $f \\circ g$ continua in $x_0$.",
                    "**Funzioni Elementari:** esponenziali, potenze, logaritmiche, trigonometriche, iperboliche, valore assoluto sono continue nel loro dominio."
                ]
            },
            {
                title: "Teoremi sulla Continuità",
                content: [
                    "**Teorema degli Zeri:** Se $f: [a,b] \\to \\mathbb{R}$ continua e $f(a)f(b) < 0$, allora $\\exists x_0 \\in (a,b)$ con $f(x_0) = 0$.",
                    "**Valori Intermedi:** Se $y_1, y_2 \\in f([a,b])$, allora $\\forall \\lambda$ tra $y_1$ e $y_2$, $\\exists x_\\lambda$ con $f(x_\\lambda) = \\lambda$.",
                    "**Weierstrass:** Se $f: [a,b] \\to \\mathbb{R}$ continua, allora $f$ è limitata e raggiunge max e min.",
                    "**Inversa:** $f$ continua è invertibile se e solo se è strettamente monotona; in tal caso $f^{-1}$ è continua.",
                    "**Discontinuità:** Di salto: $\\lim_{c^+} \\neq \\lim_{c^-}$. Eliminabile: $\\lim_{x \\to c} f \\neq f(c)$."
                ]
            },
            {
                title: "Successioni",
                content: [
                    "**Definizione:** Funzione $f: \\mathbb{N} \\to \\mathbb{R}$, $a_n = f(n)$.",
                    "**Convergenza:** $\\lim_{n \\to \\infty} a_n = l$ se $(\\forall \\epsilon > 0)(\\exists N)(\\forall n \\ge N) |a_n - l| < \\epsilon$.",
                    "**Divergenza:** $\\lim a_n = \\infty$. Irregolare: limitata ma non convergente.",
                    "**Monotonia:** Successione monotona e limitata $\\Rightarrow$ convergente.",
                    "**Gerarchia degli Infiniti:** $\\log_a n \\ll n^\\alpha \\ll a^n \\ll n! \\ll n^n$.",
                    "**Forme di Indecisione:** $+\\infty - \\infty$, $0 \\cdot \\infty$, $0/0$, $\\infty/\\infty$, $0^0$, $1^\\infty$, $\\infty^0$."
                ]
            },
            {
                title: "Limiti Notevoli",
                content: [
                    "*   $\\lim_{n \\to \\infty} (1+1/a_n)^{a_n} = e$",
                    "*   $\\lim_{n \\to \\infty} (1+a/n)^n = e^a$",
                    "*   $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
                    "*   $\\lim_{y \\to 0} \\frac{\\ln(1+y)}{y} = 1$",
                    "*   $\\lim_{x \\to 0} \\frac{e^x-1}{x} = 1$",
                    "*   $\\lim_{x \\to 0} \\frac{(1+x)^\\alpha - 1}{x} = \\alpha$"
                ]
            },
            {
                title: "Stime Asintotiche (per $x \\to 0$)",
                content: [
                    "$\\sin x \\sim x$, $\\arcsin x \\sim x$, $\\tan x \\sim x$, $\\arctan x \\sim x$",
                    "$1 - \\cos x \\sim x^2/2$, $e^x - 1 \\sim x$, $a^x - 1 \\sim x \\ln a$",
                    "$\\ln(1+x) \\sim x$, $(1+x)^\\alpha - 1 \\sim \\alpha x$"
                ]
            },
            {
                title: "Derivate",
                content: [
                    "**Definizione:** $f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$ (se esiste finito).",
                    "**Continuità:** Se $f$ derivabile in $x_0$, allora $f$ è continua in $x_0$.",
                    "**Algebra:** $(f \\pm g)' = f' \\pm g'$, $(fg)' = f'g + fg'$, $(f/g)' = \\frac{f'g - fg'}{g^2}$.",
                    "**Catena:** $(f \\circ g)'(x_0) = f'[g(x_0)] \\cdot g'(x_0)$.",
                    "**Inversa:** $(f^{-1})'(y_0) = 1/f'(x_0)$."
                ]
            },
            {
                title: "Punti Critici",
                content: [
                    "**Minimo Locale:** $(\\exists \\delta > 0)$ $f(x_0) \\le f(x)$ per $|x - x_0| < \\delta$.",
                    "**Massimo Locale:** $(\\exists \\delta > 0)$ $f(x_0) \\ge f(x)$ per $|x - x_0| < \\delta$.",
                    "**Punti di Non Derivabilità:**",
                    "*   **Angoloso:** $f'(x_0^+) \\neq f'(x_0^-)$ (almeno una finita).",
                    "*   **Cuspide:** $f'(x_0^+) \\neq f'(x_0^-)$ (infinite con segni diversi).",
                    "*   **Tangente Verticale:** $f'(x_0^+) = f'(x_0^-)$ (entrambe infinite)."
                ]
            }
        ]
    },
    {
        id: "riassunto-4-taylor-integrali",
        title: "Riassunto: Taylor, Integrali e Serie",
        subsections: [
            {
                title: "Calcolo Differenziale Avanzato",
                content: [
                    "**Punti Stazionari:** $f'(x_0) = 0 \\Rightarrow$ punto critico.",
                    "**Teorema di Fermat:** Se $x_0$ è estremo locale e $f$ derivabile, allora $f'(x_0) = 0$.",
                    "**Teorema di Rolle:** Se $f(a) = f(b)$ e $f$ continua in $[a,b]$, derivabile in $(a,b)$, allora $\\exists c: f'(c) = 0$.",
                    "**Teorema di Lagrange:** $\\exists c \\in (a,b): f'(c) = \\frac{f(b)-f(a)}{b-a}$.",
                    "**Test di Monotonia:** $f' > 0 \\Rightarrow f$ crescente; $f' < 0 \\Rightarrow f$ decrescente.",
                    "**Regola di De L'Hôpital:** Se $\\lim \\frac{f}{g}$ è $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$, allora $\\lim \\frac{f}{g} = \\lim \\frac{f'}{g'}$."
                ]
            },
            {
                title: "Convessità e Flessi",
                content: [
                    "**Epigrafico:** $E_f = \\{(x,y) \\in \\mathbb{R}^2 \\mid x \\in I, y \\ge f(x)\\}$.",
                    "**Teorema Convessità:** $f$ convessa $\\iff f'$ crescente $\\iff f'' \\ge 0$.",
                    "**Punto di Flesso:** $x_0$ è flesso se $f$ passa da convessa a concava (o viceversa).",
                    "**Condizione Necessaria:** Se $x_0$ è flesso e $f$ è $C^2$, allora $f''(x_0) = 0$."
                ]
            },
            {
                title: "Taylor",
                content: [
                    "**Formula Generica:** $f(x) = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2}(x-x_0)^2 + \\dots$",
                    "**Resto di Peano:** $o((x-x_0)^n)$",
                    "**Resto di Lagrange:** $\\frac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1}$ per qualche $c$ tra $x$ e $x_0$."
                ]
            },
            {
                title: "Integrali",
                content: [
                    "**Primitiva:** $F'(x) = f(x)$.",
                    "**Sostituzione:** $\\frac{d}{dx}(G \\circ P)(x) = G'(P(x)) \\cdot P'(x)$.",
                    "**Per Parti:** $\\int fg' = fg - \\int f'g$.",
                    "**Somma di Riemann:** $R_f^P = \\sum_i f(\\xi_i)(x_i - x_{i-1})$.",
                    "**Th. Fondamentale:** $\\int_a^b f(x)dx = F(b) - F(a)$.",
                    "**Impropri 1° specie:** intervallo non limitato.",
                    "**Impropri 2° specie:** funzione non limitata."
                ]
            },
            {
                title: "Serie Numeriche",
                content: [
                    "**Geometrica:** $\\sum q^n = \\frac{1}{1-q}$ se $|q| < 1$.",
                    "**Mengoli:** $\\sum \\frac{1}{n(n+1)} = 1$ (telescopica).",
                    "**Armonica:** $\\sum \\frac{1}{n}$ divergente.",
                    "**Condizione Necessaria:** $\\sum a_n < \\infty \\Rightarrow a_n \\to 0$ (ma NON il viceversa!).",
                    "**Criteri:** Confronto, confronto asintotico, rapporto, radice, integrale, Leibniz."
                ]
            }
        ]
    },
    {
        id: "riassunto-5-geometria",
        title: "Riassunto: Geometria Analitica",
        subsections: [
            {
                title: "Operazioni tra Vettori",
                content: [
                    "**Somma:** $\\vec{x} + \\vec{y}$ (componente per componente).",
                    "**Prodotto scalare-vettore:** $\\alpha \\vec{x}$.",
                    "**Prodotto scalare:** $\\vec{x} \\cdot \\vec{y} = |\\vec{x}||\\vec{y}|\\cos\\theta$.",
                    "**Norma:** $||\\vec{x}|| = \\sqrt{\\vec{x} \\cdot \\vec{x}}$.",
                    "**Distanza:** $d(A,B) = ||\\vec{AB}||$.",
                    "**Ortogonalità:** $\\vec{x} \\perp \\vec{y} \\iff \\vec{x} \\cdot \\vec{y} = 0$.",
                    "**Angolo:** $\\cos\\theta = \\frac{\\vec{x} \\cdot \\vec{y}}{||\\vec{x}|| \\cdot ||\\vec{y}||}$."
                ]
            },
            {
                title: "Prodotto Vettoriale",
                content: [
                    "**Norma:** $||\\vec{x} \\times \\vec{y}|| = ||\\vec{x}|| \\cdot ||\\vec{y}|| \\cdot \\sin\\theta$.",
                    "**Area Parallelogramma:** $||\\vec{x} \\times \\vec{y}||$.",
                    "**Area Triangolo:** $\\frac{1}{2}||\\vec{x} \\times \\vec{y}||$.",
                    `![Prodotto Vettoriale](/FIRST-YEAR-IMAGES/prodotto-vettoriale.png)`,
                    `*Figura: Il prodotto vettoriale $\\vec{C} = \\vec{A} \\times \\vec{B}$ è perpendicolare al piano contenente $\\vec{A}$ e $\\vec{B}$, con modulo $|C| = AB\\sin\\theta$.*`
                ]
            },
            {
                title: "Disuguaglianze",
                content: [
                    "**Cauchy-Schwarz:** $|\\vec{x} \\cdot \\vec{y}| \\le ||\\vec{x}|| \\cdot ||\\vec{y}||$.",
                    "**Disuguaglianza Triangolare:** $||\\vec{x} + \\vec{y}|| \\le ||\\vec{x}|| + ||\\vec{y}||$.",
                    "**Teorema di Pitagora:** Se $\\vec{AC} \\perp \\vec{CB}$, allora $d(A,B)^2 = d(A,C)^2 + d(C,B)^2$."
                ]
            },
            {
                title: "Rette e Piani",
                content: [
                    "**Retta - Eq. Vettoriale:** $r: P_0 + \\lambda \\vec{d}$.",
                    "**Retta - Eq. Parametrica:** $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.",
                    "**Rette Parallele:** $\\vec{d}_1 \\parallel \\vec{d}_2 \\iff \\vec{d}_1 = \\lambda \\vec{d}_2$.",
                    "**Rette Ortogonali:** $\\vec{d}_1 \\cdot \\vec{d}_2 = 0$.",
                    "**Piano - Eq. Vettoriale:** $P_0 + t\\vec{d}_1 + u\\vec{d}_2$.",
                    "**Piano - Eq. Cartesiana:** $Ax + By + Cz + D = 0$."
                ]
            }
        ]
    },
    {
        id: "riassunto-6-dimostrazioni",
        title: "Riassunto: Dimostrazioni Chiave",
        subsections: [
            {
                title: "Divergenza della Serie Armonica",
                content: [
                    "**Per assurdo:** Supponiamo $\\sum_{k=1}^{\\infty} \\frac{1}{k} = S \\in \\mathbb{R}$.",
                    "$(\\forall \\epsilon > 0)(\\exists N_0)(\\forall N > N_0) |S_N - S| \\le \\epsilon$.",
                    "Fisso $\\epsilon = 1/8$. Per $N \\ge N_0$:",
                    "$|S_{2N} - S_N| \\le |S_{2N} - S| + |S_N - S| \\le \\frac{1}{8} + \\frac{1}{8} = \\frac{1}{4}$.",
                    "**Ma:** $S_{2N} - S_N = \\sum_{k=N+1}^{2N} \\frac{1}{k} \\ge \\sum_{k=N+1}^{2N} \\frac{1}{2N} = \\frac{N}{2N} = \\frac{1}{2}$.",
                    "Poiché $\\frac{1}{2} > \\frac{1}{4}$, **contraddizione!** $\\Rightarrow$ La serie diverge."
                ]
            },
            {
                title: "Serie di Mengoli (Telescopica)",
                content: [
                    "$\\sum_{k=1}^{\\infty} \\frac{1}{k(k+1)} = \\sum_{k=1}^{\\infty} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right)$.",
                    "**Serie Telescopica:** $\\sum_{k=1}^{N} (b_k - b_{k+1}) = b_1 - b_{N+1}$.",
                    "Nel caso di Mengoli: $b_{N+1} = \\frac{1}{N+1} \\to 0$.",
                    "**Risultato:** La serie converge a $1$."
                ]
            },
            {
                title: "Disuguaglianza di Cauchy-Schwarz",
                content: [
                    "**Caso a)** Se $\\vec{x} = 0$ o $\\vec{y} = 0$: ovviamente verificata ($0 \\le 0$).",
                    "**Caso b)** Se $\\vec{x} \\neq 0$ e $\\vec{y} \\neq 0$: definiamo $\\varphi(t) = ||t\\vec{x} + \\vec{y}||^2 \\ge 0$.",
                    "$\\varphi(t) = t^2||\\vec{x}||^2 + 2t(\\vec{x} \\cdot \\vec{y}) + ||\\vec{y}||^2$.",
                    "Parabola convessa ($\\ge 0$) $\\Rightarrow \\Delta \\le 0$.",
                    "$\\frac{\\Delta}{4} = (\\vec{x} \\cdot \\vec{y})^2 - ||\\vec{x}||^2 ||\\vec{y}||^2 \\le 0$.",
                    "$\\Rightarrow |\\vec{x} \\cdot \\vec{y}| \\le ||\\vec{x}|| \\cdot ||\\vec{y}||$."
                ]
            },
            {
                title: "Norma del Prodotto Vettoriale",
                content: [
                    "**Identità di Lagrange:** $(\\vec{x} \\cdot \\vec{y})^2 + ||\\vec{x} \\times \\vec{y}||^2 = ||\\vec{x}||^2 ||\\vec{y}||^2$.",
                    "$||\\vec{x} \\times \\vec{y}||^2 = ||\\vec{x}||^2 ||\\vec{y}||^2 - (\\vec{x} \\cdot \\vec{y})^2$",
                    "$= ||\\vec{x}||^2 ||\\vec{y}||^2 - ||\\vec{x}||^2 ||\\vec{y}||^2 \\cos^2\\theta$",
                    "$= ||\\vec{x}||^2 ||\\vec{y}||^2 \\sin^2\\theta$.",
                    "$\\Rightarrow ||\\vec{x} \\times \\vec{y}|| = ||\\vec{x}|| \\cdot ||\\vec{y}|| \\cdot |\\sin\\theta|$."
                ]
            },
            {
                title: "Altri Teoremi",
                content: [
                    "**Unicità del Limite:** Per $\\epsilon > 0$, $|l_1 - l_2| \\le |l_1 - a_n| + |a_n - l_2| \\le 2\\epsilon$. Quindi $l_1 = l_2$.",
                    "**Monotonia:** Se $(a_n)$ è crescente e limitata, allora $\\lim a_n = \\sup\\{a_n\\}$.",
                    "**Permanenza del Segno:** Se $a_n \\to a > 0$, allora $a_n > 0$ definitivamente.",
                    "**Continuità e Derivabilità:** $f(x_0+h) - f(x_0) \\sim f'(x_0) \\cdot h \\to 0$ per $h \\to 0$."
                ]
            }
        ]
    },
    {
        id: "riassunto-7-formule",
        title: "Riassunto: Formule da Memorizzare",
        subsections: [
            {
                title: "Sviluppi di Taylor-Maclaurin",
                content: [
                    "$$ e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots + \\frac{x^n}{n!} + o(x^n) $$",
                    "$$ \\frac{1}{1-x} = 1 + x + x^2 + \\dots + x^n + o(x^n) $$",
                    "$$ \\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots + \\frac{(-1)^n x^{2n+1}}{(2n+1)!} + o(x^{2n+1}) $$",
                    "$$ \\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots + \\frac{(-1)^n x^{2n}}{(2n)!} + o(x^{2n}) $$",
                    "$$ \\sinh x = x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\dots $$",
                    "$$ \\cosh x = 1 + \\frac{x^2}{2!} + \\frac{x^4}{4!} + \\dots $$",
                    "$$ \\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots + (-1)^{n-1}\\frac{x^n}{n} + o(x^n) $$",
                    "$$ (1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2}x^2 + \\dots + \\binom{\\alpha}{n}x^n + o(x^n) $$"
                ]
            },
            {
                title: "Relazioni Asintotiche (per $f(x) \\to 0$)",
                content: [
                    "*   $\\sin(f(x)) \\sim f(x)$",
                    "*   $\\arcsin(f(x)) \\sim f(x)$",
                    "*   $\\tan(f(x)) \\sim f(x)$",
                    "*   $\\arctan(f(x)) \\sim f(x)$",
                    "*   $\\sinh(f(x)) \\sim f(x)$",
                    "*   $e^{f(x)} - 1 \\sim f(x)$",
                    "*   $\\ln(1+f(x)) \\sim f(x)$",
                    "*   $a^{f(x)} - 1 \\sim \\ln(a) \\cdot f(x)$",
                    "*   $(1+f(x))^c - 1 \\sim c \\cdot f(x)$",
                    "*   $1 - \\cos(f(x)) \\sim \\frac{[f(x)]^2}{2}$",
                    "*   $\\cosh(f(x)) - 1 \\sim \\frac{[f(x)]^2}{2}$"
                ]
            },
            {
                title: "Integrali Notevoli",
                content: [
                    "*   $\\int \\frac{f'(x)}{f^2(x)+1} dx = \\arctan(f(x)) + C$",
                    "*   $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$",
                    "*   $\\int \\frac{1}{\\sqrt{1-x^2}} dx = \\arcsin x + C$",
                    "*   $\\int \\frac{1}{1+x^2} dx = \\arctan x + C$"
                ]
            },
            {
                title: "Definizioni $\\epsilon$-$\\delta$ di Limite",
                content: [
                    "**1. Finito al finito:** $(\\forall \\epsilon > 0)(\\exists \\delta > 0)$ $|x-c| < \\delta \\Rightarrow |f(x)-l| < \\epsilon$.",
                    "**2. Infinito al finito:** $(\\forall K > 0)(\\exists \\delta > 0)$ $|x-c| < \\delta \\Rightarrow f(x) > K$.",
                    "**3. Finito all'infinito:** $(\\forall \\epsilon > 0)(\\exists K > 0)$ $x > K \\Rightarrow |f(x)-l| < \\epsilon$.",
                    "**4. Infinito all'infinito:** $(\\forall K > 0)(\\exists H > 0)$ $x > H \\Rightarrow f(x) > K$."
                ]
            }
        ]
    }
];
