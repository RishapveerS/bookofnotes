import { MainSection } from '../types';

export const geometriaCourseContent: MainSection[] = [
    {
        id: "capitolo-1-nozioni-preliminari",
        title: "Capitolo 1: Nozioni Preliminari",
        subsections: [
            {
                title: "Relazioni su un Insieme",
                content: [
                    "**Definizione 1.1.1 (Relazione su un insieme):** Una relazione su un insieme $A$ è un qualunque sottoinsieme $\\mathcal{R}$ del prodotto cartesiano $A \\times A$.",
                    "Una relazione $\\mathcal{R}$ su un insieme $A$ si dice:",
                    "*   **Riflessiva:** se, per ogni $a \\in A$, si ha $a\\mathcal{R}a$.",
                    "*   **Simmetrica:** se, per ogni $a, b \\in A$, $a\\mathcal{R}b$ implica $b\\mathcal{R}a$.",
                    "*   **Antisimmetrica:** se, per ogni $a, b \\in A$, $a\\mathcal{R}b$ e $b\\mathcal{R}a$ implica $a = b$.",
                    "*   **Transitiva:** se, per ogni $a, b, c \\in A$, $a\\mathcal{R}b$ e $b\\mathcal{R}c$ implica $a\\mathcal{R}c$."
                ]
            },
            {
                title: "Relazione d'Ordine",
                content: [
                    "**Definizione 1.1.2 (Relazione d'ordine totale):** Una relazione d'ordine $\\mathcal{R}$ su un insieme $A$ si dice **relazione d'ordine** se è riflessiva, antisimmetrica e transitiva.",
                    "Se inoltre, gli elementi di $A$ sono a due a due confrontabili, cioè, per ogni $a, b \\in A$, risulta $a\\mathcal{R}b$ oppure $b\\mathcal{R}a$, la relazione $\\mathcal{R}$ si dice **relazione d'ordine totale**."
                ]
            },
            {
                title: "Strutture Algebriche: Gruppi",
                content: [
                    "**Definizione 1.2.1 (Gruppo):** Sia $(G, \\star)$ un insieme con un'operazione $\\star$. La struttura $(G, \\star)$ si dice **gruppo** se:",
                    "*   L'operazione $\\star$ è **associativa**.",
                    "*   Esiste in $G$ l'**elemento neutro**.",
                    "*   Ogni elemento $g \\in G$ è **simmetrizzabile** (ammette un inverso).",
                    "Se l'operazione $\\star$ soddisfa anche la proprietà commutativa, il gruppo si dice **abeliano**."
                ]
            },
            {
                title: "Strutture Algebriche: Campi",
                content: [
                    "**Definizione 1.2.2 (Campo):** Sia $A$ un insieme sul quale sono definite due operazioni, indicate con \"+\" e \"·\", chiamate rispettivamente somma e prodotto. La struttura $(A, +, \\cdot)$ è un **campo** se:",
                    "*   $(A, +)$ è un gruppo abeliano il cui elemento neutro è indicato con $0$.",
                    "*   $(A \\setminus \\{0\\}, \\cdot)$ è un gruppo abeliano con elemento neutro $e \\neq 0$.",
                    "*   Valgono le proprietà distributive (sinistra e destra) del prodotto rispetto alla somma:",
                    "$$ a \\cdot (b + c) = a \\cdot b + a \\cdot c \\quad \\text{e} \\quad (a + b) \\cdot c = a \\cdot c + b \\cdot c $$"
                ]
            },
            {
                title: "Matrici: Definizione e Tipi",
                content: [
                    "**Definizione 1.3.1 (Matrice):** Dato un campo $K$ si dice **matrice di tipo $m \\times n$** su $K$ una tabella del tipo:",
                    "$$ A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix} $$",
                    "avente $m$ righe ed $n$ colonne, i cui elementi $a_{ij}$ sono elementi di $K$.",
                    "**Definizione 1.3.2 (Matrice quadrata):** Una matrice di tipo $n \\times n$ è detta **matrice quadrata di ordine $n$**. Queste vengono indicate con $M_n(K)$."
                ]
            },
            {
                title: "Prodotto Righe per Colonne",
                content: [
                    "**Definizione 1.3.3 (Prodotto righe per colonne):** Date le matrici $A = (a_{ih}) \\in K_{m,n}$ con $i \\in I_m$, $h \\in I_n$ e $B = (b_{hj}) \\in K_{n,p}$ con $h \\in I_n$, $j \\in I_p$, si dice **prodotto righe per colonne** di $A$ per $B$ la matrice:",
                    "$$ A \\cdot B = (c_{ij}) \\quad \\text{con} \\quad c_{ij} = \\sum_{h \\in I_n} a_{ih} b_{hj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \\cdots + a_{in}b_{nj} $$",
                    "**Esempio 1.3.1:** Consideriamo le due matrici:",
                    "$$ A = \\begin{pmatrix} -3 & 0 & 2 \\\\ -4 & 7 & 1 \\end{pmatrix} \\quad B = \\begin{pmatrix} -5 & -1 & 2 \\\\ 0 & 1 & -2 \\\\ 1 & 1 & 3 \\end{pmatrix} $$",
                    "Il loro prodotto è:",
                    "$$ A \\cdot B = \\begin{pmatrix} 17 & 5 & 0 \\\\ 21 & 12 & -19 \\end{pmatrix} $$"
                ]
            },
            {
                title: "Matrice Identica e Trasposta",
                content: [
                    "**Definizione 1.3.4 (Matrice identica):** L'elemento neutro delle matrici quadrate di ordine $n$ è la **matrice identica**, cioè la matrice:",
                    "$$ I_n = \\begin{pmatrix} 1 & 0 & \\cdots & 0 \\\\ 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{pmatrix} $$",
                    "**Definizione 1.3.5 (Trasposta di una matrice):** Sia $A = (a_{ij})$ una matrice di $K_{m,n}$. Si dice **trasposta** di $A$ la matrice $K_{n,m}$ ottenuta scambiando tra loro le righe con le colonne:",
                    "$$ {}^t A = (b_{ji}) \\quad \\text{ove} \\quad b_{ji} = a_{ij} $$"
                ]
            }
        ]
    },
    {
        id: "capitolo-2-spazi-vettoriali",
        title: "Capitolo 2: Spazi Vettoriali",
        subsections: [
            {
                title: "Definizione di Spazio Vettoriale",
                content: [
                    "**Definizione 2.1.1 (Spazio vettoriale):** Siano $K$ un campo e $V$ un insieme. Si dice che $V$ è uno **spazio vettoriale sul campo $K$**, se sono definite due operazioni:",
                    "*   Un'operazione interna binaria su $V$, detta **somma**: $+: V \\times V \\rightarrow V$",
                    "*   Un'operazione esterna detta **prodotto per scalari**: $\\cdot: K \\times V \\rightarrow V$",
                    "tali che:",
                    "*   $(V, +)$ sia un gruppo abeliano.",
                    "*   Il prodotto esterno soddisfi le seguenti proprietà:",
                    "    *   $(h \\cdot k) \\cdot v = h \\cdot (k \\cdot v) \\quad \\forall h, k \\in K, \\forall v \\in V$",
                    "    *   $(h + k) \\cdot v = h \\cdot v + k \\cdot v \\quad \\forall h, k \\in K, \\forall v \\in V$",
                    "    *   $h \\cdot (v + w) = h \\cdot v + h \\cdot w \\quad \\forall h \\in K, \\forall v, w \\in V$",
                    "    *   $1 \\cdot v = v \\quad \\forall v \\in V$",
                    "Gli elementi di $V$ sono detti **vettori**, gli elementi di $K$ sono chiamati **scalari**. L'elemento neutro di $(V, +)$ è detto **vettore nullo** e indicato $\\mathbf{0}$."
                ]
            },
            {
                title: "Teorema sul Prodotto Nullo",
                content: [
                    "**Teorema 2.1.1:** Sia $V$ uno spazio vettoriale sul campo $K$, siano $k \\in K$ e $v \\in V$. Allora:",
                    "$$ kv = \\mathbf{0} \\iff k = 0 \\text{ oppure } v = \\mathbf{0} $$",
                    "Questo teorema è fondamentale perché stabilisce che l'unico modo per ottenere il vettore nullo come prodotto di uno scalare per un vettore è che almeno uno dei due fattori sia nullo."
                ]
            },
            {
                title: "Sottospazi Vettoriali",
                content: [
                    "**Definizione 2.2.1 (Sottospazio vettoriale):** Sia $\\emptyset \\neq U \\subseteq V$. Diremo che $U$ è **sottospazio vettoriale** di $V$ se è esso stesso uno spazio vettoriale rispetto alla restrizione delle stesse operazioni.",
                    "**Proposizione 2.2.1 (Primo criterio di riconoscimento):** Sia $V(K)$ uno spazio vettoriale e sia $\\emptyset \\neq U \\subseteq V$. Il sottoinsieme $U$ è sottospazio vettoriale di $V$ se, e soltanto se:",
                    "1.  $\\forall u, u' \\in U$: $u + u' \\in U$ (chiusura rispetto alla somma)",
                    "2.  $\\forall k \\in K, \\forall u \\in U$: $ku \\in U$ (chiusura rispetto al prodotto per scalari)",
                    "**Proposizione 2.2.2 (Secondo criterio di riconoscimento):** $U$ è sottospazio di $V(K)$ se e soltanto se:",
                    "$$ hv_1 + kv_2 \\in U \\quad \\forall v_1, v_2 \\in U \\text{ e } \\forall h, k \\in K $$"
                ]
            },
            {
                title: "Combinazione Lineare",
                content: [
                    "**Definizione 2.3.1 (Combinazione lineare):** Siano $v_1, v_2, \\ldots, v_n \\in V(K)$. Si dice **combinazione lineare** dei vettori $v_1, v_2, \\ldots, v_n$ ogni vettore $v$:",
                    "$$ v = k_1 \\cdot v_1 + k_2 \\cdot v_2 + \\cdots + k_n \\cdot v_n \\quad \\text{con } k_1, k_2, \\ldots, k_n \\in K $$",
                    "La combinazione lineare è il concetto chiave che collega i vettori tra loro e permette di costruire nuovi vettori a partire da quelli dati."
                ]
            },
            {
                title: "Indipendenza Lineare",
                content: [
                    "**Definizione 2.3.2 (Sistema di vettori libero):** Sia $V(K)$ e sia $A = [v_1, v_2, \\ldots, v_n]$ un sistema di vettori di $V(K)$. $A$ si dice **libero** se l'unica combinazione lineare di vettori di $A$ che dà il vettore nullo è a coefficienti tutti nulli:",
                    "$$ \\mathbf{0} = k_1 \\cdot v_1 + k_2 \\cdot v_2 + \\cdots + k_n \\cdot v_n \\implies k_1 = k_2 = \\cdots = k_n = 0 $$",
                    "Se $A$ è libero, i suoi vettori si dicono **linearmente indipendenti**.",
                    "**Definizione 2.3.3 (Sistema di vettori legato):** $A$ si dice **legato** se non è libero, cioè:",
                    "$$ \\exists k_1, k_2, \\ldots, k_n \\text{ non tutti nulli}: \\mathbf{0} = k_1 \\cdot v_1 + k_2 \\cdot v_2 + \\cdots + k_n \\cdot v_n $$",
                    "Se $A$ è legato, i suoi vettori si dicono **linearmente dipendenti**."
                ]
            },
            {
                title: "Proposizioni sui Sistemi Liberi e Legati",
                content: [
                    "**Proposizione 2.3.1:** Se $\\mathbf{0}$ appartiene ad $A$, il sistema $A$ è legato.",
                    "**Proposizione 2.3.2:** Se in $A$ appaiono due vettori proporzionali, allora $A$ è legato.",
                    "**Proposizione 2.3.3:** $A$ è legato se e solo se almeno uno dei vettori si può riscrivere come combinazione lineare degli altri.",
                    "**Proposizione 2.3.4:** Se $A$ è libero e $A \\cup \\{u\\}$ è legato, allora $u$ è combinazione lineare dei vettori di $A$.",
                    "**Proposizione 2.3.5:** Sia $B \\supseteq A$. Se $A$ è legato, allora anche $B$ è legato.",
                    "**Proposizione 2.3.6:** Sia $B \\subseteq A$. Se $A$ è libero, allora $B$ è libero."
                ]
            },
            {
                title: "Sistemi di Generatori",
                content: [
                    "**Definizione 2.4.1 (Sistema di generatori):** Sia $A$ un sistema di vettori di $V(K)$. $A$ si dice **sistema di generatori** di $V(K)$ se ogni $v \\in V(K)$ si può scrivere come combinazione lineare di un numero finito di vettori di $A$.",
                    "**Definizione 2.4.2 (Copertura lineare):** Sia $A$ un sistema di vettori di $V(K)$. Si dice **copertura (o chiusura) lineare** di $A$ l'insieme $\\mathcal{L}(A)$ di tutte le combinazioni lineari di sottoinsiemi finiti di $A$.",
                    "**Note importanti:**",
                    "*   $\\mathcal{L}(A)$ è il più piccolo sottospazio di $V(K)$ che contiene $A$.",
                    "*   $\\mathcal{L}(A) \\leq V(K)$.",
                    "*   $\\mathcal{L}(\\mathcal{L}(A)) = \\mathcal{L}(A)$.",
                    "*   Se $V(K)$ ammette un sistema di generatori finito, si dice **finitamente generato**."
                ]
            },
            {
                title: "Basi e Dimensione",
                content: [
                    "**Lemma 2.5.1:** Sia $S = [v_1, v_2, \\ldots, v_n]$ un sistema di generatori per $V(K)$, e sia $v \\in S$ combinazione lineare degli altri vettori. Allora $S \\setminus \\{v\\}$ è ancora sistema di generatori per $V(K)$.",
                    "**Teorema 2.5.1:** Sia $V(K)$ uno spazio vettoriale finitamente generato, non banale ($V(K) \\neq \\{\\mathbf{0}\\}$). Allora esso ammette un **sistema libero di generatori**.",
                    "**Definizione 2.5.1 (Base):** Sia $S = (v_1, v_2, \\ldots, v_n)$ una sequenza libera di vettori di $V(K)$. $S$ è detta **base** se e solo se $S$ è una sequenza libera di generatori.",
                    "**Definizione 2.5.2 (Base canonica di $\\mathbb{R}^n$):**",
                    "$$ ((1, 0, 0, \\ldots, 0), (0, 1, 0, \\ldots, 0), \\ldots, (0, 0, 0, \\ldots, 1)) $$",
                    "è una base canonica per $\\mathbb{R}^n$."
                ]
            },
            {
                title: "Lemma di Steinitz",
                content: [
                    "**Lemma 2.5.2 (Lemma di Steinitz):** Sia $V(K)$ uno spazio vettoriale finitamente generato. Sia $B = [v_1, v_2, \\ldots, v_n]$ un sistema di generatori e $A = [u_1, u_2, \\ldots, u_m]$ un sistema libero. Allora:",
                    "$$ m \\leq n $$",
                    "La cardinalità di un sistema libero è sempre minore o uguale alla cardinalità di un sistema di generatori.",
                    "**Teorema 2.5.2:** Sia $V(K)$ uno spazio vettoriale finitamente generato e siano $B_1$ e $B_2$ due sue basi. Le loro cardinalità sono uguali:"
                ]
            },
            {
                title: "Dimensione e Conseguenze",
                content: [
                    "**Definizione 2.5.3 (Dimensione):** Dato uno spazio vettoriale finitamente generato, non banale, chiamiamo **dimensione** di $V$ la cardinalità di una qualsiasi delle sue basi. Se $V = \\{\\mathbf{0}\\}$ poniamo $\\dim(V) = 0$.",
                    "**Proposizione 2.5.1:** In $V_n(K)$, un sistema di $n$ generatori è libero.",
                    "**Proposizione 2.5.2:** In $V_n(K)$, un sistema libero di $n$ vettori è un sistema di generatori.",
                    "**Proposizione 2.5.3:** $m$ vettori in $V_n(K)$ con $m > n$ sono sempre linearmente dipendenti.",
                    "**Proposizione 2.5.4:** $m$ vettori in $V_n(K)$ con $m < n$ non possono generare $V_n(K)$."
                ]
            },
            {
                title: "Teorema di Caratterizzazione delle Basi",
                content: [
                    "**Teorema 2.5.3 (Teorema di caratterizzazione delle basi):** Sia $B = (v_1, v_2, \\ldots, v_n)$ una sequenza di vettori di $V(K)$. $B$ è una base se e solo se ogni vettore di $V$ si può scrivere in **maniera univoca** come combinazione lineare dei vettori di $B$:",
                    "$$ \\forall v \\in V, \\exists! \\text{ combinazione } v = k_1 v_1 + k_2 v_2 + \\cdots + k_n v_n \\quad k_i \\in K $$",
                    "**Definizione 2.5.4 (Componenti di un vettore):** Sia $B = (v_1, v_2, \\ldots, v_n)$ una base di $V_n(K)$ e sia $v \\in V$. Si chiamano **componenti** di $v$ rispetto alla base $B$ la sequenza $(k_1, k_2, \\ldots, k_n)$ tale che:",
                    "$$ v = k_1 v_1 + k_2 v_2 + \\cdots + k_n v_n $$"
                ]
            },
            {
                title: "Teorema del Completamento ad una Base",
                content: [
                    "**Proposizione 2.5.5:** Sia $V_n(K)$ uno spazio vettoriale di dimensione $n$ sul campo $K$. Allora $V_n(K)$ ammette almeno un sottospazio di dimensione $m$ per ogni $0 \\leq m \\leq n$.",
                    "**Proposizione 2.5.6:** Siano $U, W \\leq V_n(K)$ e sia $U \\leq W$, allora:",
                    "1.  $\\dim(U) \\leq \\dim(W)$",
                    "2.  $U = W \\iff \\dim(U) = \\dim(W)$",
                    "**Teorema 2.5.4 (Teorema del completamento ad una base):** Sia $V_n(K)$ uno spazio vettoriale di dimensione $n$ e sia $A = (v_1, v_2, \\ldots, v_p)$, ove $p \\leq n$, una sequenza libera di vettori in $V_n(K)$. Allora, in una qualunque base $B$ di $V_n(K)$, esiste una sequenza $B'$ di vettori tale che $A \\cup B'$ è una base di $V_n(K)$."
                ]
            },
            {
                title: "Intersezione e Somma di Sottospazi",
                content: [
                    "**Proposizione 2.6.1:** Se $U, W \\leq V_n(K)$, allora $U \\cap W$ è un sottospazio di $V$.",
                    "**Nota:** Sotto le stesse ipotesi, $U \\cup W$ **non** è un sottospazio, a meno che $U \\subseteq W$ oppure $W \\subseteq U$.",
                    "**Definizione 2.6.1 (Spazio di somma):** Dati $U$ e $W \\leq V$, definiamo lo **spazio di somma**:",
                    "$$ U + W := \\{u + w \\mid u \\in U \\text{ e } w \\in W\\} $$",
                    "**Proposizione 2.6.2:** Dati $U$ e $W \\leq V$, abbiamo che $U + W \\leq V$.",
                    "**Proposizione 2.6.3:** $U + W$ è il più piccolo sottospazio di $V$ che contiene $U \\cup W$. Equivalentemente $\\mathcal{L}(U \\cup W) = U + W$."
                ]
            },
            {
                title: "Somma Diretta",
                content: [
                    "**Definizione 2.6.2 (Somma diretta):** Dati $U, W \\leq V_n(K)$, diremo che $U + W$ è **somma diretta** se ogni $v \\in U + W$ può essere scritto in modo unico come $u + w$:",
                    "$$ \\forall v \\in U + W, \\exists! u \\in U \\text{ e } w \\in W : v = u + w $$",
                    "Se $U + W$ è una somma diretta, la indicheremo con $U \\oplus W$.",
                    "**Proposizione 2.6.4:** $U \\oplus W \\iff U \\cap W = \\{\\mathbf{0}\\}$.",
                    "**Corollario 2.6.1:** $V = U \\oplus W \\iff U + W = V$ e $U \\cap W = \\{\\mathbf{0}\\}$.",
                    "**Corollario 2.6.2:** Se $U \\oplus W$ e $B_U$, $B_W$ sono basi di $U$ e $W$ rispettivamente, allora $B_U \\cup B_W$ è una base per $U \\oplus W$."
                ]
            },
            {
                title: "Formula di Grassmann",
                content: [
                    "**Proposizione 2.6.6 (Formula di Grassmann):** Dati $U, W \\leq V_n(K)$ abbiamo che:",
                    "$$ \\dim(U + W) + \\dim(U \\cap W) = \\dim(U) + \\dim(W) $$",
                    "Questa formula fondamentale collega le dimensioni della somma e dell'intersezione di due sottospazi.",
                    "**Definizione 2.6.3 (Complemento diretto):** Sia $W \\leq V_n(K)$. Si dice **complemento diretto** di $W$ in $V$ uno spazio $U \\leq V$ tale che $U \\oplus W = V$.",
                    "**Nota:** Un complemento diretto di $W$ in $V$ esiste sempre e si trova estendendo una base di $W$ a una base di $V$. In generale, non è unico."
                ]
            }
        ]
    },
    {
        id: "capitolo-3-sistemi-lineari",
        title: "Capitolo 3: Sistemi Lineari",
        subsections: [
            {
                title: "Determinante di una Matrice Quadrata",
                content: [
                    "**Definizione 3.1.1 (Determinante):** Sia $A = (a_{ij})$ una matrice quadrata di ordine $n$ a elementi in un campo $K$. Si dice **determinante** di $A$, e si scrive $|A|$ oppure $\\det(A)$, l'elemento di $K$ definito ricorsivamente come segue:",
                    "*   Se $n = 1$: $A = (a_{11})$, allora $\\det(A) = a_{11}$",
                    "*   Se $n > 1$: $\\det(A) = \\sum_{j=1}^{n} (-1)^{1+j} a_{1j} \\det(A_{1j})$",
                    "Per una matrice $2 \\times 2$:",
                    "$$ A = \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} \\implies |A| = a_{11}a_{22} - a_{12}a_{21} $$",
                    "Per una matrice $3 \\times 3$ (Regola di Sarrus):",
                    "$$ |A| = a_{11}a_{22}a_{33} + a_{13}a_{21}a_{32} + a_{12}a_{23}a_{31} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} $$"
                ]
            },
            {
                title: "Complemento Algebrico e Teoremi di Laplace",
                content: [
                    "**Definizione 3.1.2 (Complemento algebrico):** Sia $A = (a_{ij})$ una matrice quadrata di ordine $n$. Si dice **complemento algebrico** dell'elemento $a_{hk}$, e si indica $\\Gamma_{hk}$, il determinante della matrice quadrata di ordine $n-1$, ottenuta da $A$ sopprimendo la $h$-esima riga e la $k$-esima colonna, preso con il segno $(-1)^{h+k}$.",
                    "**Teorema 3.1.1 (Primo teorema di Laplace):** La somma dei prodotti degli elementi di una riga (o colonna) per i rispettivi complementi algebrici è il determinante di $A$:",
                    "$$ |A| = \\sum_{j=1}^{n} a_{ij} \\Gamma_{ij} \\quad \\forall i = 1, 2, \\ldots, n $$",
                    "**Teorema 3.1.2 (Secondo teorema di Laplace):** La somma dei prodotti degli elementi di una riga per i complementi algebrici di un'altra riga vale zero:",
                    "$$ a_{i1}\\Gamma_{j1} + a_{i2}\\Gamma_{j2} + \\cdots + a_{in}\\Gamma_{jn} = 0 \\quad \\text{se } i \\neq j $$",
                    "**Teorema 3.1.3 (Teorema di Binet):** $|A \\cdot B| = |A| \\cdot |B|$"
                ]
            },
            {
                title: "Matrici Invertibili",
                content: [
                    "**Definizione 3.2.1 (Matrice invertibile):** Una matrice quadrata di ordine $n$ si dice **invertibile** quando esiste una matrice $B$, quadrata e dello stesso ordine, tale che:",
                    "$$ A \\cdot B = B \\cdot A = I_n $$",
                    "La matrice $B$ si dice **inversa** di $A$ e si indica $A^{-1}$.",
                    "**Teorema 3.2.1:** Sia $A \\in M_n(K)$. Allora $A$ è invertibile se e solo se $|A| \\neq 0$. In tal caso:",
                    "$$ A^{-1} = \\frac{1}{|A|} {}^t A_a $$",
                    "dove $A_a$ è la **matrice aggiunta** di $A$, ottenuta da $A$ sostituendo ogni elemento con il suo complemento algebrico."
                ]
            },
            {
                title: "Rango di una Matrice",
                content: [
                    "**Definizione 3.3.1 (Minore):** Sia $A \\in K_{m,n}$. Si chiama **minore di ordine $p$** estratto da $A$, con $p \\leq \\min\\{m, n\\}$, una matrice quadrata di ordine $p$ ottenuta cancellando $m-p$ righe e $n-p$ colonne da $A$.",
                    "**Teorema 3.3.1:** Una sequenza $S = (v_1, v_2, \\ldots, v_n)$ di $n$ vettori di $V_n(K)$ è libera se e solo se la matrice $A$, che ha nelle proprie righe (o colonne) le componenti dei vettori, ha determinante non nullo.",
                    "**Definizione 3.3.2 (Rango di una matrice):** Sia $A$ una matrice di $K_{m,n}$. Si dice **rango** di $A$, e si scrive $\\rho(A)$, l'ordine massimo di un minore estraibile da $A$ con determinante non nullo.",
                    "**Osservazioni:**",
                    "*   $\\rho(A) = 0 \\iff A$ è la matrice nulla.",
                    "*   $\\rho(A) = \\rho({}^t A)$.",
                    "*   $\\rho(A) \\leq \\min(m, n)$."
                ]
            },
            {
                title: "Teorema di Kronecker",
                content: [
                    "**Definizione 3.3.3 (Spazio delle righe e delle colonne):** Data una matrice $A$ con $m$ righe e $n$ colonne:",
                    "*   Lo **spazio delle righe** $\\mathcal{L}(R)$ è il sottospazio di $K^n$ generato dalle righe di $A$.",
                    "*   Lo **spazio delle colonne** $\\mathcal{L}(C)$ è il sottospazio di $K^m$ generato dalle colonne di $A$.",
                    "**Teorema 3.3.2 (Teorema di Kronecker):** Gli spazi vettoriali $\\mathcal{L}(R)$ ed $\\mathcal{L}(C)$ hanno la stessa dimensione e tale dimensione coincide con il rango di $A$:",
                    "$$ \\dim(\\mathcal{L}(R)) = \\dim(\\mathcal{L}(C)) = \\rho(A) $$",
                    "**Teorema 3.3.3 (Teorema degli orlati):** Una matrice $A \\in K_{m,n}$ ha rango $p$ se e solo se esiste un minore $M$ di ordine $p$ a determinante non nullo e tutti i minori di ordine $p+1$ che contengono $M$ hanno determinante nullo."
                ]
            },
            {
                title: "Sistemi Lineari: Definizioni",
                content: [
                    "**Definizione 3.4.1 (Sistema lineare):** Un sistema lineare è un insieme di $m$ equazioni lineari in $n$ incognite a coefficienti in campo $K$:",
                    "$$ \\begin{cases} a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n = b_1 \\\\ a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n = b_2 \\\\ \\vdots \\\\ a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n = b_m \\end{cases} $$",
                    "con $a_{ij}, b_l \\in K$. Gli elementi $a_{ij}$ si chiamano **coefficienti delle incognite**, gli elementi $b_l$ si dicono **termini noti**.",
                    "Il sistema si può scrivere in forma matriciale: $AX = B$",
                    "**Definizione 3.4.2 (Sistema omogeneo):** Un sistema lineare si dice **omogeneo** quando tutti i termini noti sono nulli: $AX = \\mathbf{0}$."
                ]
            },
            {
                title: "Teorema di Rouché-Capelli",
                content: [
                    "**Definizione 3.4.3 (Sistema compatibile):** Un sistema lineare ha soluzione, ovvero si dice **compatibile**, se esiste almeno una $n$-upla $\\alpha_1, \\alpha_2, \\ldots, \\alpha_n$ di elementi di $K$ che risolve tutte le equazioni del sistema.",
                    "**Teorema 3.4.1 (Teorema di Rouché-Capelli):** Un sistema lineare $AX = B$ è compatibile se e solo se:",
                    "$$ \\rho(A) = \\rho(A|B) $$",
                    "dove $A$ è la matrice incompleta e $A|B$ è la matrice completa (con la colonna dei termini noti).",
                    "Se il sistema è compatibile, l'insieme delle soluzioni forma uno spazio di dimensione $n - \\rho(A)$."
                ]
            },
            {
                title: "Teorema di Cramer",
                content: [
                    "**Teorema 3.4.2 (Teorema di Cramer):** Sia $AX = B$ un sistema lineare in $n$ equazioni ed $n$ incognite. Se $\\det(A) \\neq 0$ allora $AX = B$ ammette **un'unica soluzione**.",
                    "Indicando con $B_i$ la matrice ottenuta sostituendo la $i$-esima colonna di $A$ con la colonna dei termini noti, la soluzione è:",
                    "$$ x_i = \\frac{|B_i|}{|A|} = \\frac{\\det(B_i)}{\\det(A)} $$",
                    "**Teorema 3.4.4:** Sia $AX = \\mathbf{0}$ un sistema lineare omogeneo con $A \\in K_{m,n}$ e sia $S$ l'insieme delle sue soluzioni. Allora $S$ è un sottospazio di $K^n$ di dimensione $n - \\rho(A)$."
                ]
            },
            {
                title: "Autosoluzioni e Sistema Omogeneo Associato",
                content: [
                    "**Definizione 3.4.5 (Autosoluzioni):** Le soluzioni di un sistema lineare omogeneo diverse dalla soluzione nulla si dicono **autosoluzioni**.",
                    "**Proposizione 3.4.1:** Un sistema lineare omogeneo $AX = \\mathbf{0}$ ammette autosoluzioni se e solo se $\\rho(A) < n$ (con $n$ numero di incognite).",
                    "**Corollario 3.4.1:** Un sistema lineare omogeneo $AX = \\mathbf{0}$ con $A \\in M_n(K)$ ammette autosoluzioni se e solo se $\\det(A) = 0$.",
                    "**Definizione 3.4.6 (Sistema lineare omogeneo associato):** Dato $AX = B$ sistema lineare, diciamo che $AX = \\mathbf{0}$ è il **sistema lineare omogeneo associato** a $AX = B$.",
                    "**Proposizione 3.4.3:** Le soluzioni di un sistema compatibile $AX = B$ sono tutte e sole del tipo $X = X_0 + Z$, ove $X_0$ è una soluzione particolare di $AX = B$ e $Z$ è la soluzione del sistema omogeneo associato."
                ]
            },
            {
                title: "Cambiamenti di Base",
                content: [
                    "In uno spazio vettoriale $V_n(K)$ di dimensione $n$, siano $B = (e_1, e_2, \\ldots, e_n)$ e $B' = (e'_1, e'_2, \\ldots, e'_n)$ due basi. Ogni vettore della base $B'$ si può esprimere come combinazione lineare dei vettori della base $B$:",
                    "$$ E' = AE $$",
                    "**Definizione 3.5.1 (Matrice del cambiamento di base):** La matrice $A$ si dice **matrice del cambiamento di base** da $B$ a $B'$.",
                    "**Proposizione 3.5.1:** La matrice $A$ del cambiamento di base da $B$ a $B'$ è invertibile e $A^{-1} = A'$ (matrice del cambiamento da $B'$ a $B$).",
                    "Le componenti di uno stesso vettore rispetto a due basi $B$ e $B'$ sono legate dalla relazione:",
                    "$$ X = {}^t A X' \\quad \\text{e} \\quad X' = {}^t A^{-1} X $$"
                ]
            }
        ]
    },
    {
        id: "capitolo-4-autovalori",
        title: "Capitolo 4: Autovalori, Autovettori e Diagonalizzabilità",
        subsections: [
            {
                title: "Polinomio ed Equazione Caratteristica",
                content: [
                    "**Definizione 4.1.1 (Polinomio ed equazione caratteristica):** Se $A$ è una matrice quadrata di ordine $n$, si dice **polinomio caratteristico** di $A$, e si indica $p_A(\\lambda)$, il determinante della matrice $A - \\lambda I_n$:",
                    "$$ p_A(\\lambda) = |A - \\lambda I_n| $$",
                    "L'equazione $p_A(\\lambda) = |A - \\lambda I_n| = 0$ è detta **equazione caratteristica** di $A$.",
                    "**Definizione 4.1.2 (Autovalori):** Le radici del polinomio caratteristico si chiamano **autovalori** di $A$.",
                    "**Definizione 4.1.3 (Autospazio):** Lo spazio delle soluzioni del sistema $(A - \\lambda I_n)X = \\mathbf{0}$, dove $\\lambda$ è un autovalore, si chiama **autospazio** associato a $\\lambda$ e si indica con $V_\\lambda$."
                ]
            },
            {
                title: "Autovettori e Matrici Simili",
                content: [
                    "**Definizione 4.1.4 (Autovettori):** I vettori non nulli dell'autospazio $V_\\lambda$ si chiamano **autovettori** relativi a $\\lambda$.",
                    "**Osservazione:** Se il polinomio caratteristico di $A \\in M_n(K)$ ha grado $n$, allora gli autovalori di $A$ sono al massimo $n$.",
                    "**Definizione 4.1.5 (Matrici simili):** Due matrici $A, B \\in M_n(K)$ si dicono **simili** se esiste $P \\in M_n(K)$ con $|P| \\neq 0$ tale che:",
                    "$$ B = P^{-1}AP \\quad \\text{oppure} \\quad PB = AP $$",
                    "**Proposizione 4.1.1:** Due matrici simili $A, B$ hanno lo stesso determinante e lo stesso polinomio caratteristico (e di conseguenza gli stessi autovalori)."
                ]
            },
            {
                title: "Matrici Diagonalizzabili",
                content: [
                    "**Definizione 4.2.1 (Matrice diagonalizzabile):** Una matrice $A \\in M_n(K)$ si dice **diagonalizzabile** se è simile ad una matrice diagonale, ovvero esistono $D, P \\in M_n(K)$ con $D$ matrice diagonale, tale che $|P| \\neq 0$ e $D = P^{-1}AP$.",
                    "**Teorema 4.2.1 (Primo criterio di diagonalizzabilità):** Una matrice $A \\in M_n(K)$ è diagonalizzabile se e solo se $K^n$ ammette una base costituita da autovettori di $A$.",
                    "**Osservazione:** Se $A$ è diagonalizzabile:",
                    "*   $D$ ha sulla diagonale principale gli autovalori di $A$.",
                    "*   $P$ (matrice diagonalizzante) ha nelle colonne gli autovettori della base di $K^n$."
                ]
            },
            {
                title: "Molteplicità Algebrica e Geometrica",
                content: [
                    "**Definizione 4.2.2 (Molteplicità algebrica e geometrica):** Sia $\\lambda$ un autovalore di $A \\in M_n(K)$. Si chiama:",
                    "*   **Molteplicità algebrica** di $\\lambda$ ($a_\\lambda$): il numero di volte che $\\lambda$ è radice del polinomio caratteristico.",
                    "*   **Molteplicità geometrica** di $\\lambda$ ($g_\\lambda$): la dimensione dell'autospazio $V_\\lambda$ associato a $\\lambda$.",
                    "**Proposizione 4.2.1:** Sia $\\lambda$ un autovalore di $A \\in M_n(K)$. Allora:",
                    "$$ 1 \\leq g_\\lambda \\leq a_\\lambda $$",
                    "**Proposizione 4.2.2:** Sia $A \\in M_n(K)$ e siano $\\lambda_1, \\lambda_2, \\ldots, \\lambda_t$ autovalori di $A$ distinti tra loro. Allora la somma dei relativi autospazi è diretta:",
                    "$$ V_{\\lambda_1} \\oplus V_{\\lambda_2} \\oplus \\cdots \\oplus V_{\\lambda_t} $$"
                ]
            },
            {
                title: "Secondo Criterio di Diagonalizzabilità",
                content: [
                    "**Teorema 4.2.2 (Secondo criterio di diagonalizzabilità):** Sia $A \\in M_n(K)$ e siano $\\lambda_1, \\lambda_2, \\ldots, \\lambda_t$ gli autovalori distinti di $A$. Allora $A$ è diagonalizzabile se e solo se:",
                    "1.  Tutti gli autovalori di $A$ sono in $K$.",
                    "2.  Per ogni autovalore vale $a_{\\lambda_i} = g_{\\lambda_i}$ (l'autovalore si dice **regolare**).",
                    "**Osservazioni:**",
                    "*   $\\deg(p_A(\\lambda)) = n$, quindi ci sono al massimo $n$ autovalori.",
                    "*   $\\sum a_{\\lambda_i} \\leq n$, e vale l'uguaglianza se tutti gli autovalori sono in $K$.",
                    "*   Autovettori provenienti da autospazi diversi sono tra loro linearmente indipendenti."
                ]
            }
        ]
    },
    {
        id: "capitolo-5-forme-bilineari",
        title: "Capitolo 5: Forme Bilineari e Prodotti Scalari",
        subsections: [
            {
                title: "Forme Bilineari",
                content: [
                    "**Definizione 5.1.1 (Forma bilineare e prodotto scalare):** Sia $V_n(K)$ uno spazio vettoriale. Una **forma bilineare** in $V$ è una funzione $*: V \\times V \\rightarrow K$ tale che:",
                    "*   $(u + v) * w = u * w + v * w \\quad \\forall u, v, w \\in V$",
                    "*   $u * (v + w) = u * v + u * w \\quad \\forall u, v, w \\in V$",
                    "*   $(ku) * v = u * (kv) = k(u * v) \\quad \\forall u, v \\in V, \\forall k \\in K$",
                    "Se inoltre $*$ verifica la proprietà:",
                    "*   $v * w = w * v \\quad \\forall v, w \\in V$",
                    "allora si chiama **prodotto scalare** (o forma bilineare simmetrica).",
                    "**Osservazione:** Si deduce che $\\forall v \\in V$: $\\mathbf{0} * v = 0 = v * \\mathbf{0}$."
                ]
            },
            {
                title: "Esempi di Prodotti Scalari",
                content: [
                    "**Esempio 5.1.1 (Prodotto scalare euclideo):** Una funzione $*: \\mathbb{R}^n \\times \\mathbb{R}^n \\rightarrow \\mathbb{R}$:",
                    "$$ (x_1, x_2, \\ldots, x_n) * (x'_1, x'_2, \\ldots, x'_n) = x_1 x'_1 + x_2 x'_2 + \\cdots + x_n x'_n $$",
                    "**Esempio 5.1.2 (Prodotto scalare standard su matrici):** Una funzione $*: M_n(\\mathbb{R}) \\times M_n(\\mathbb{R}) \\rightarrow \\mathbb{R}$:",
                    "$$ A * B = \\sum_{i,j} a_{ij} b_{ij} $$",
                    "cioè la somma dei prodotti degli elementi corrispondenti."
                ]
            },
            {
                title: "Ortogonalità",
                content: [
                    "**Definizione 5.2.1 (Ortogonalità):** In uno spazio vettoriale $V(K)$ con prodotto scalare \"·\", due vettori $v$ e $w$ di $V$ si dicono **ortogonali**, e si scrive $v \\perp w$, se $v \\cdot w = 0$.",
                    "**Definizione 5.2.2 (Complemento ortogonale):** Sia $V(K)$ uno spazio vettoriale e \"·\" un prodotto scalare. Sia $\\emptyset \\neq A \\subseteq V$. Si chiama **complemento ortogonale** (o ortogonale) di $A$ l'insieme:",
                    "$$ A^\\perp = \\{v \\in V : v \\perp w, \\forall w \\in A\\} $$",
                    "**Proposizione 5.2.1:** $A^\\perp$ è un sottospazio vettoriale.",
                    "**Osservazioni:**",
                    "*   $A \\subseteq B \\implies A^\\perp \\supseteq B^\\perp$",
                    "*   $A^\\perp = [\\mathcal{L}(A)]^\\perp$",
                    "*   In generale $A \\subseteq (A^\\perp)^\\perp$"
                ]
            },
            {
                title: "Coefficiente di Fourier e Proiezione",
                content: [
                    "**Proposizione 5.2.2:** Sia $V_n(K)$ uno spazio vettoriale con prodotto scalare \"·\" e siano $v, w \\in V(K)$ con $w \\cdot w \\neq 0$. Allora:",
                    "$$ \\exists v_1, v_2 \\in V : v = v_1 + v_2, \\quad v_1 = kw, \\quad v_2 \\perp w $$",
                    "**Definizione 5.2.3 (Coefficiente di Fourier e proiezione):** Nelle stesse condizioni:",
                    "$$ k = \\frac{v \\cdot w}{w \\cdot w} $$",
                    "si chiama **coefficiente di Fourier** di $v$ lungo $w$, e",
                    "$$ v_1 = \\frac{v \\cdot w}{w \\cdot w} \\cdot w $$",
                    "si chiama **proiezione** di $v$ lungo $w$.",
                    "**Definizione 5.2.4 (Forma quadratica):** La funzione $q: V \\rightarrow K$ definita da $q(v) = v \\cdot v$ si chiama **forma quadratica** associata al prodotto scalare."
                ]
            },
            {
                title: "Prodotto Scalare Definito Positivo",
                content: [
                    "**Definizione 5.3.1 (Prodotto scalare definito positivo):** Sia $V(K)$ uno spazio vettoriale su campo $K$ ordinato. Un prodotto scalare \"·\" in $V$ si dice **definito positivo** se:",
                    "$$ \\forall v \\in V: v \\cdot v \\geq 0 \\quad \\text{e} \\quad v \\cdot v = 0 \\iff v = \\mathbf{0} $$",
                    "Quando si parla di prodotti scalari definiti positivi, $K = \\mathbb{R}$. Denotiamo con **spazio vettoriale metrico reale** $V_n^\\circ(\\mathbb{R})$ uno spazio vettoriale dotato di un prodotto scalare definito positivo.",
                    "**Definizione 5.3.2 (Norma):** Dato $V_n^\\circ(\\mathbb{R})$, si chiama **norma** la funzione:",
                    "$$ \\|v\\| = \\sqrt{v \\cdot v} = \\sqrt{q(v)} $$"
                ]
            },
            {
                title: "Proprietà della Norma",
                content: [
                    "**Proposizione 5.3.1:** In $V_n^\\circ(\\mathbb{R})$ valgono i seguenti fatti:",
                    "1.  $\\|v\\| \\geq 0$ e $\\|v\\| = 0 \\iff v = \\mathbf{0}$",
                    "2.  $\\|kv\\| = |k| \\|v\\|$",
                    "3.  **Disuguaglianza di Schwarz:** $|v \\cdot w| \\leq \\|v\\| \\cdot \\|w\\|$",
                    "4.  **Disuguaglianza triangolare:** $\\|v + w\\| \\leq \\|v\\| + \\|w\\|$",
                    "Per la base canonica $B_c = (e_1, e_2, \\ldots, e_n)$ di $\\mathbb{R}^n$ con prodotto scalare euclideo:",
                    "*   $\\|e_i\\| = 1$",
                    "*   $e_i \\cdot e_j = 0$ per $i \\neq j$ (cioè $e_i \\perp e_j$)",
                    "*   $v \\cdot e_i = x_i$ (la $i$-esima componente di $v$)"
                ]
            },
            {
                title: "Basi Ortogonali e Ortonormali",
                content: [
                    "**Definizione 5.3.3 (Base ortogonale e ortonormale):** I vettori $v_1, v_2, \\ldots, v_n$ di $V_n^\\circ(\\mathbb{R})$ formano un **insieme ortogonale** se $v_i \\cdot v_j = 0$ per $i \\neq j$.",
                    "Se inoltre ciascuno dei $v_i$ ha norma unitaria ($\\|v_i\\| = 1$), parleremo di **insieme ortonormale**.",
                    "Se tali vettori costituiscono una base di $V_n^\\circ(\\mathbb{R})$, parleremo di **base ortogonale** o **ortonormale**.",
                    "**Proposizione 5.3.2:** Se $\\emptyset \\neq A \\subseteq V_n^\\circ(\\mathbb{R})$ è costituito da vettori tutti non nulli e ortogonali tra loro, allora $A$ è libero."
                ]
            },
            {
                title: "Processo di Gram-Schmidt",
                content: [
                    "**Teorema 5.3.1 (Processo di ortogonalizzazione di Gram-Schmidt):** Siano $V_n^\\circ(\\mathbb{R})$ e $B = (e_1, e_2, \\ldots, e_n)$ una base. La sequenza $B' = (e'_1, e'_2, \\ldots, e'_n)$ così definita:",
                    "$$ e'_1 = e_1 $$",
                    "$$ e'_2 = e_2 - \\frac{e_2 \\cdot e'_1}{e'_1 \\cdot e'_1} \\cdot e'_1 $$",
                    "$$ e'_3 = e_3 - \\frac{e_3 \\cdot e'_1}{e'_1 \\cdot e'_1} \\cdot e'_1 - \\frac{e_3 \\cdot e'_2}{e'_2 \\cdot e'_2} \\cdot e'_2 $$",
                    "$$ \\vdots $$",
                    "$$ e'_n = e_n - \\sum_{k=1}^{n-1} \\frac{e_n \\cdot e'_k}{e'_k \\cdot e'_k} \\cdot e'_k $$",
                    "è una **base ortogonale** di $V_n^\\circ(\\mathbb{R})$.",
                    "**Osservazione:** Se i primi $p$ vettori di $B$ sono già ortogonali tra loro, il metodo di Gram-Schmidt non li cambia."
                ]
            },
            {
                title: "Decomposizione Ortogonale",
                content: [
                    "**Teorema 5.3.2:** Se $A$ è un sottoinsieme non vuoto di $V_n^\\circ(\\mathbb{R})$, la cui copertura non coincide con $V_n^\\circ(\\mathbb{R})$, allora:",
                    "$$ V_n^\\circ(\\mathbb{R}) = \\mathcal{L}(A) \\oplus A^\\perp $$",
                    "**Osservazioni:**",
                    "*   $A^\\perp$ è un complemento diretto di $\\mathcal{L}(A)$.",
                    "*   Per la formula di Grassmann: $\\dim(A^\\perp) = n - \\dim(\\mathcal{L}(A))$.",
                    "*   Se il prodotto scalare è definito positivo, allora $U \\leq V_n^\\circ(\\mathbb{R}) \\implies U = (U^\\perp)^\\perp$."
                ]
            },
            {
                title: "Matrici di Forme Bilineari",
                content: [
                    "**Definizione 5.4.1 (Matrice di forma bilineare):** Sia $V_n(K)$ uno spazio vettoriale, \"*\" una forma bilineare e $B = (e_1, e_2, \\ldots, e_n)$ una base di $V_n(K)$. Si chiama **matrice della forma bilineare** \"*\" rispetto a $B$:",
                    "$$ A^*_B = (e_i * e_j) = \\begin{pmatrix} e_1 * e_1 & e_1 * e_2 & \\cdots & e_1 * e_n \\\\ e_2 * e_1 & e_2 * e_2 & \\cdots & e_2 * e_n \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ e_n * e_1 & e_n * e_2 & \\cdots & e_n * e_n \\end{pmatrix} $$",
                    "**Proposizione 5.4.1:** La matrice che rappresenta un prodotto scalare rispetto a una base qualsiasi è **simmetrica**.",
                    "**Proposizione 5.4.2:** Sia \"·\" un prodotto scalare su $V_n(K)$ e sia $B$ una sua base:",
                    "*   $B$ è ortogonale $\\iff A^\\cdot_B$ è diagonale.",
                    "*   $B$ è ortonormale $\\iff A^\\cdot_B = I_n$."
                ]
            },
            {
                title: "Matrici Ortogonali",
                content: [
                    "**Definizione 5.5.1 (Matrice ortogonale):** Sia $A \\in M_n(K)$. Diciamo che $A$ è **ortogonale** se ${}^t A = A^{-1}$, cioè:",
                    "$$ A \\cdot {}^t A = {}^t A \\cdot A = I_n $$",
                    "**Proposizione 5.5.1:** Se $A$ è una matrice ortogonale, allora $|A| \\in \\{-1, 1\\}$.",
                    "**Proposizione 5.5.2:** $A$ è ortogonale se e solo se le sue righe (o colonne) costituiscono una base ortonormale di $\\mathbb{R}^n$ rispetto al prodotto scalare euclideo."
                ]
            },
            {
                title: "Matrici Reali Simmetriche",
                content: [
                    "**Teorema 5.6.1:** Sia $A \\in M_n(\\mathbb{R})$ simmetrica. Allora:",
                    "1.  Gli autovalori di $A$ sono tutti reali (**teorema spettrale**).",
                    "2.  Gli autovettori di $A$ relativi ad autospazi distinti sono ortogonali tra loro.",
                    "**Corollario 5.6.1:** Una matrice reale e simmetrica di ordine $n$ ammette $n$ autovalori (contati con la loro molteplicità algebrica).",
                    "**Definizione 5.6.1 (Matrice ortogonalmente diagonalizzabile):** Data $A \\in M_n(K)$, è detta **ortogonalmente diagonalizzabile** se esistono $D$ diagonale e $P$ ortogonale tali che:",
                    "$$ D = P^{-1}AP = {}^t P A P $$",
                    "**Teorema 5.6.2:** I seguenti fatti sono equivalenti:",
                    "1.  $A \\in M_n(\\mathbb{R})$ è ortogonalmente diagonalizzabile.",
                    "2.  $\\mathbb{R}^n$ ammette una base ortonormale di autovettori di $A$.",
                    "3.  $A$ è una matrice reale e simmetrica."
                ]
            }
        ]
    },
    {
        id: "capitolo-6-spazi-affini",
        title: "Capitolo 6: Spazi Affini",
        subsections: [
            {
                title: "Definizione di Spazio Affine",
                content: [
                    "**Definizione 6.1.1 (Spazio affine):** Si dice **spazio affine di dimensione $n$** sul campo $K$, e si indica $A_n(K)$, la struttura costituita da:",
                    "1.  Un insieme non vuoto $A$, detto **insieme dei punti**.",
                    "2.  Uno spazio vettoriale $V_n(K)$.",
                    "3.  Un'applicazione $f: A \\times A \\rightarrow V_n(K)$ con le seguenti proprietà:",
                    "    *   $\\forall P \\in A$ e $\\forall v \\in V$, $\\exists! Q \\in A$ : $f(P, Q) = \\vec{PQ} = v$",
                    "    *   $\\vec{PQ} + \\vec{QR} = \\vec{PR} \\quad \\forall P, Q, R \\in A$"
                ]
            },
            {
                title: "Proprietà Fondamentali",
                content: [
                    "**Proposizione 6.1.1:** In $A_n(K)$, per ogni $P, Q, R \\in A$:",
                    "1.  Il vettore $\\vec{RR} = \\mathbf{0}$",
                    "2.  $\\vec{PQ} = \\vec{PR} \\iff Q = R$",
                    "3.  $\\vec{PQ} = \\mathbf{0} \\iff P = Q$",
                    "4.  $v = \\vec{PQ} \\implies -v = \\vec{QP}$",
                    "5.  $\\forall P_1, P_2, Q_1, Q_2 \\in A$: $\\vec{P_1 P_2} = \\vec{Q_1 Q_2} \\iff \\vec{P_1 Q_1} = \\vec{P_2 Q_2}$"
                ]
            },
            {
                title: "Sottospazi Lineari",
                content: [
                    "**Definizione 6.1.2 (Sottospazio affine):** Sia $A_n(K)$ uno spazio affine. Si dice **sottospazio affine di dimensione $m \\leq n$** una struttura data da un sottoinsieme non vuoto $A' \\subseteq A$ (detto sostegno), uno spazio $V_m(K) \\leq V_n(K)$, e la restrizione dell'applicazione $f$.",
                    "**Definizione 6.1.3 (Traslazione):** Fissato un vettore $v \\in V_n(K)$, si dice **traslazione** individuata da $v$ la corrispondenza:",
                    "$$ t_v: A \\rightarrow A, \\quad P \\mapsto Q $$",
                    "che associa a un punto $P \\in A$ il punto $Q$ traslato di $P$ mediante il vettore $v$.",
                    "**Definizione 6.1.4 (Sottospazio lineare):** Si dice **sottospazio lineare** l'insieme dei traslati di un punto $P$ (detto origine) mediante i vettori $v \\in V_h(K) \\leq V_n(K)$. Si denota con $S_h = [P, V_h(K)]$."
                ]
            },
            {
                title: "Punti, Rette, Piani e Iperpiani",
                content: [
                    "**Definizione 6.1.5:** Sia $A_n(K)$ uno spazio affine. Si dicono:",
                    "*   **Punti:** i sottospazi lineari di dimensione $0$: $S_0 = [P, \\{\\mathbf{0}\\}] = \\{P\\}$",
                    "*   **Rette:** i sottospazi lineari di dimensione $1$: $S_1 = [P, \\mathcal{L}(v)]$ con $v \\neq \\mathbf{0}$",
                    "*   **Piani:** i sottospazi lineari di dimensione $2$: $S_2 = [P, \\mathcal{L}(v_1, v_2)]$ con $v_1, v_2$ linearmente indipendenti",
                    "*   **Iperpiani:** i sottospazi di dimensione $n-1$"
                ]
            },
            {
                title: "Parallelismo tra Sottospazi",
                content: [
                    "**Definizione 6.1.6 (Parallelismo):** Due sottospazi lineari $S_p = [P, V_p]$ ed $S_q = [Q, V_q]$ di $A_n(K)$ si dicono **paralleli**, e si scrive $S_p \\| S_q$, se i rispettivi spazi di traslazione sono confrontabili, ovvero quando $V_p \\subseteq V_q$ oppure $V_q \\subseteq V_p$.",
                    "**Osservazione:** La relazione di parallelismo non è transitiva, ma è riflessiva e simmetrica. Non è quindi una relazione d'equivalenza.",
                    "**Proposizione 6.1.6:** Due sottospazi lineari paralleli e di uguale dimensione o coincidono oppure hanno intersezione vuota.",
                    "**Definizione 6.1.7:**",
                    "*   La **direzione** di una retta $S = [P, V_1]$ è lo spazio $V_1$. Due rette sono parallele sse hanno la stessa direzione.",
                    "*   La **giacitura** di un piano $\\pi = [P, V_2]$ è lo spazio $V_2$. Due piani sono paralleli sse hanno la stessa giacitura."
                ]
            },
            {
                title: "Proprietà di Punti, Rette e Piani",
                content: [
                    "**Proposizione 6.2.1:** In $A_n(K)$ con $n \\geq 2$:",
                    "1.  Per ogni due punti distinti passa un'unica retta.",
                    "2.  Per due rette distinte, parallele o incidenti, passa un unico piano.",
                    "3.  Due rette complanari, aventi intersezione vuota, sono parallele.",
                    "4.  Per un punto passa un'unica retta parallela a una retta data (**V Postulato di Euclide**).",
                    "5.  Per un punto passa un unico piano parallelo a un piano dato.",
                    "6.  Per tre punti non allineati passa un unico piano.",
                    "7.  Una retta, avente due punti distinti in un piano, giace nel piano.",
                    "8.  Per un punto passano almeno due rette distinte."
                ]
            },
            {
                title: "Riferimento Affine e Coordinate",
                content: [
                    "**Definizione 6.3.1 (Riferimento affine):** Si dice **riferimento affine** di $A_n(\\mathbb{R})$ una coppia $R_A = [O, B]$ costituita da un punto $O$ fissato, detto **origine**, e da una base $B$ dello spazio vettoriale $V_n(\\mathbb{R})$.",
                    "**Definizione 6.3.2 (Coordinate):** Fissato un riferimento affine $R_A = [O, B]$, si dicono **coordinate** del punto $P$ in $R_A$ le componenti, in $B$, del vettore $\\vec{OP}$.",
                    "In $A_2(\\mathbb{R})$: $P = (x, y)$ dove $x$ è l'**ascissa** e $y$ è l'**ordinata**.",
                    "In $A_3(\\mathbb{R})$: $P = (x, y, z)$ dove $x$ è l'**ascissa**, $y$ è l'**ordinata** e $z$ è la **quota**."
                ]
            },
            {
                title: "Equazioni Parametriche della Retta",
                content: [
                    "**Definizione 6.4.1 (Equazioni parametriche di una retta in $A_n(\\mathbb{R})$):** Sia $r = [P, V_1 = \\mathcal{L}(v)]$ la retta di origine $P = (x'_1, x'_2, \\ldots, x'_n)$ e spazio di traslazione generato da $v = (l_1, l_2, \\ldots, l_n)$. Le **equazioni parametriche** di $r$ sono:",
                    "$$ \\begin{cases} x_1 = x'_1 + l_1 t \\\\ x_2 = x'_2 + l_2 t \\\\ \\vdots \\\\ x_n = x'_n + l_n t \\end{cases} \\quad \\text{con } t \\in \\mathbb{R}, (l_1, l_2, \\ldots, l_n) \\neq \\mathbf{0} $$",
                    "**Definizione 6.4.2 (Parametri direttori):** Si dicono **parametri direttori** di $r = [P, V_1]$ le componenti di un qualunque vettore non nullo di $V_1$."
                ]
            },
            {
                title: "Equazione Cartesiana della Retta in $A_2(\\mathbb{R})$",
                content: [
                    "In $A_2(\\mathbb{R})$ una retta si può rappresentare con l'**equazione cartesiana**:",
                    "$$ ax + by + c = 0 \\quad \\text{con } (a, b) \\neq (0, 0) $$",
                    "I parametri direttori della retta $r: ax + by + c = 0$ sono $[(−b, a)]$.",
                    "**Mutua posizione di due rette:**",
                    "*   Se $\\rho(A) = 2$: $r \\cap s = \\{P\\}$ (rette **incidenti**).",
                    "*   Se $\\rho(A) = 1$ e $\\rho(A|B) = 2$: $r \\cap s = \\emptyset$ (rette **parallele e distinte**).",
                    "*   Se $\\rho(A) = 1$ e $\\rho(A|B) = 1$: $r \\equiv s$ (rette **coincidenti**)."
                ]
            },
            {
                title: "Fasci di Rette",
                content: [
                    "**Definizione 6.4.3 (Fascio improprio di rette):** L'insieme di tutte le rette del piano parallele a una retta data.",
                    "**Equazione del fascio improprio:** $ax + by + k = 0$ con $k \\in \\mathbb{R}$.",
                    "**Definizione 6.4.4 (Fascio proprio di rette):** L'insieme di tutte le rette passanti per un punto $P$ dato, detto **centro** o **sostegno** del fascio.",
                    "**Equazione del fascio proprio:** Date due rette incidenti $r: ax + by + c = 0$ e $r': a'x + b'y + c' = 0$:",
                    "$$ \\lambda(ax + by + c) + \\mu(a'x + b'y + c') = 0 \\quad \\text{con } (\\lambda, \\mu) \\neq (0, 0) $$"
                ]
            },
            {
                title: "Equazioni in $A_3(\\mathbb{R})$",
                content: [
                    "**Equazione cartesiana del piano:**",
                    "$$ ax + by + cz + d = 0 \\quad \\text{con } (a, b, c) \\neq (0, 0, 0) $$",
                    "**Equazioni cartesiane della retta in $A_3(\\mathbb{R})$:**",
                    "$$ \\begin{cases} ax + by + cz + d = 0 \\\\ a'x + b'y + c'z + d' = 0 \\end{cases} \\quad \\text{con } \\rho \\begin{pmatrix} a & b & c \\\\ a' & b' & c' \\end{pmatrix} = 2 $$",
                    "**Condizione di parallelismo tra piani:** $\\alpha \\| \\alpha' \\iff [(a, b, c)] = [(a', b', c')]$",
                    "**Condizione di parallelismo tra retta e piano:** $al + bm + cn = 0$ dove $[(l, m, n)]$ sono i parametri direttori della retta."
                ]
            },
            {
                title: "Punto Medio e Simmetrico",
                content: [
                    "**Definizione 6.3.3 (Punto medio):** Dati $P, Q \\in A$, il **punto medio** del segmento $[PQ]$ è:",
                    "$$ M = t_{\\frac{1}{2}\\vec{PQ}}(P) $$",
                    "Le coordinate del punto medio sono le **semisomme** delle coordinate omonime di $P$ e $Q$.",
                    "**Definizione 6.3.4 (Punto simmetrico):** In $A_n(\\mathbb{R})$, dati i punti $P$ e $C$, il punto $S$ è il **simmetrico** di $P$ rispetto a $C$ se $C$ è il punto medio di $[P, S]$."
                ]
            }
        ]
    },
    {
        id: "capitolo-7-spazi-euclidei",
        title: "Capitolo 7: Spazi Euclidei",
        subsections: [
            {
                title: "Definizione di Spazio Euclideo",
                content: [
                    "**Definizione 7.1.1 (Spazio euclideo):** Si dice **spazio euclideo di dimensione $n$** sul campo $\\mathbb{R}$ la struttura costituita da uno spazio affine $A_n(\\mathbb{R})$ il cui spazio vettoriale $V_n^\\circ(\\mathbb{R})$ sia dotato di un prodotto scalare definito positivo.",
                    "**Definizione 7.1.2 (Ortogonalità tra sottospazi):** Siano $S_h = [P, V_h]$ e $S_k = [Q, V_k]$ due sottospazi lineari di $E_n(\\mathbb{R})$. Diremo che $S_h$ è **ortogonale** a $S_k$ se:",
                    "$$ V_h \\subseteq V_k^\\perp \\quad \\text{oppure} \\quad V_h \\supseteq V_k^\\perp $$"
                ]
            },
            {
                title: "Rette e Piani Ortogonali",
                content: [
                    "**Proposizione 7.1.1:** In $E_2(\\mathbb{R})$, dati la retta $r$ e il punto $H$, esiste **un'unica retta** passante per $H$ e ortogonale a $r$.",
                    "**Proposizione 7.1.2:** In $E_3(\\mathbb{R})$, assegnati una retta $r$ e un piano $\\alpha$, dato un punto $H$:",
                    "1.  Esiste un'unica retta $s$ passante per $H$ e ortogonale al piano $\\alpha$.",
                    "2.  Esiste un unico piano $\\beta$ passante per $H$ e ortogonale alla retta $r$.",
                    "**Proposizione 7.1.3:** Se $r \\perp \\alpha$ in $E_3(\\mathbb{R})$:",
                    "1.  $r \\perp s$ per ogni retta $s \\subseteq \\alpha$",
                    "2.  $\\alpha \\perp \\beta$ per ogni piano $\\beta \\supseteq r$"
                ]
            },
            {
                title: "Riferimento Cartesiano Ortogonale",
                content: [
                    "**Definizione 7.2.1:** In $E_n(\\mathbb{R})$ si dice **riferimento cartesiano ortogonale monometrico** la coppia $R_C = [O, B]$ dove $O$ è un punto di $E_n(\\mathbb{R})$ e $B = (e_1, e_2, \\ldots, e_n)$ è una **base ortonormale**.",
                    "**Nota:**",
                    "*   In $E_2(\\mathbb{R})$ la base ortonormale si indica come $B = (i, j)$",
                    "*   In $E_3(\\mathbb{R})$ la base ortonormale si indica come $B = (i, j, k)$"
                ]
            },
            {
                title: "Condizioni di Ortogonalità",
                content: [
                    "**Ortogonalità fra rette in $E_2(\\mathbb{R})$:** Date $r_1: ax + by + c = 0$ e $r_2: a'x + b'y + c' = 0$:",
                    "$$ r_1 \\perp r_2 \\iff aa' + bb' = 0 $$",
                    "**Ortogonalità fra rette in $E_3(\\mathbb{R})$:** Con parametri direttori $[(l, m, n)]$ e $[(l', m', n')]$:",
                    "$$ r_1 \\perp r_2 \\iff ll' + mm' + nn' = 0 $$",
                    "**Direzione ortogonale a un iperpiano:** Per una retta $r: ax + by + c = 0$ in $E_2(\\mathbb{R})$, la direzione ortogonale ha parametri $[(a, b)]$.",
                    "**Ortogonalità fra piani in $E_3(\\mathbb{R})$:** Dati $\\alpha: ax + by + cz + d = 0$ e $\\beta: a'x + b'y + c'z + d' = 0$:",
                    "$$ \\alpha \\perp \\beta \\iff aa' + bb' + cc' = 0 $$",
                    "**Ortogonalità fra retta e piano in $E_3(\\mathbb{R})$:** Con $r$ avente parametri $[(l, m, n)]$ e piano $\\alpha$:",
                    "$$ r \\perp \\alpha \\iff [(a, b, c)] = [(l, m, n)] $$"
                ]
            },
            {
                title: "Distanza tra Due Punti",
                content: [
                    "**Distanza in $E_n(\\mathbb{R})$:** Siano $P = (x_1, x_2, \\ldots, x_n)$ e $Q = (x'_1, x'_2, \\ldots, x'_n)$. La distanza è:",
                    "$$ d(P, Q) = \\|\\vec{PQ}\\| = \\sqrt{(x'_1 - x_1)^2 + \\cdots + (x'_n - x_n)^2} $$",
                    "**In $E_2(\\mathbb{R})$:** $d(P, Q) = \\sqrt{(x' - x)^2 + (y' - y)^2}$",
                    "**In $E_3(\\mathbb{R})$:** $d(P, Q) = \\sqrt{(x' - x)^2 + (y' - y)^2 + (z' - z)^2}$"
                ]
            },
            {
                title: "Distanza Punto-Retta e Punto-Piano",
                content: [
                    "**Distanza punto-retta in $E_2(\\mathbb{R})$:** Sia $P = (x_0, y_0)$ e $r: ax + by + c = 0$:",
                    "$$ d(P, r) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}} $$",
                    "**Distanza punto-piano in $E_3(\\mathbb{R})$:** Sia $P = (x_0, y_0, z_0)$ e $\\alpha: ax + by + cz + d = 0$:",
                    "$$ d(P, \\alpha) = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}} $$"
                ]
            },
            {
                title: "Distanza tra Rette Sghembe",
                content: [
                    "**Definizione 7.4.1 (Retta di minima distanza):** Si dice **retta di minima distanza** tra due rette $r$ e $s$ sghembe in $E_3(\\mathbb{R})$ una retta ortogonale e incidente sia a $r$ che a $s$.",
                    "**Definizione 7.4.2 (Distanza tra rette sghembe):** La **distanza** tra due rette $r$ e $s$ sghembe è la distanza tra i punti $R$ e $S$ ottenuti intersecando la retta di minima distanza con $r$ e $s$.",
                    "**Proposizione 7.4.1:** La retta di minima distanza tra $r$ e $s$ esiste ed è unica."
                ]
            },
            {
                title: "Asse e Piano Assiale",
                content: [
                    "**Definizione 7.4.3 (Asse):** In $E_2(\\mathbb{R})$, dati due punti $P, Q$, si dice **asse** del segmento $[P, Q]$ la retta passante per il punto medio di $P$ e $Q$ e ortogonale alla retta per $P$ e $Q$.",
                    "**Proposizione 7.4.2:** L'asse di un segmento $[P, Q]$ è il **luogo dei punti equidistanti** da $P$ e da $Q$.",
                    "**Definizione 7.4.4 (Piano assiale):** In $E_3(\\mathbb{R})$ si dice **piano assiale** del segmento $[P, Q]$ il piano passante per il punto medio di $P$ e $Q$ e ortogonale al segmento stesso.",
                    "**Proposizione 7.4.3:** Il piano assiale è il luogo dei punti equidistanti tra $P$ e $Q$."
                ]
            },
            {
                title: "Circonferenza",
                content: [
                    "**Definizione 7.5.1 (Circonferenza):** Dato un punto $C = (x_0, y_0)$ in $E_2(\\mathbb{R})$ e un numero reale positivo $r$, si dice **circonferenza** di centro $C$ e raggio $r$ il luogo dei punti aventi distanza $r$ da $C$.",
                    "**Equazione cartesiana:**",
                    "$$ x^2 + y^2 + 2ax + 2by + c = 0 \\quad \\text{con } a^2 + b^2 - c > 0 $$",
                    "dove $C = (-a, -b)$ e $r = \\sqrt{a^2 + b^2 - c}$.",
                    "**Proposizione 7.5.2:** Per tre punti non allineati in $E_2(\\mathbb{R})$ passa un'unica circonferenza."
                ]
            },
            {
                title: "Sfera",
                content: [
                    "**Definizione 7.5.2 (Sfera):** Sia $C = (x_0, y_0, z_0)$ e $r$ un numero reale positivo. Si dice **sfera** di raggio $r$ e centro $C$ il luogo dei punti aventi distanza $r$ da $C$.",
                    "**Equazione cartesiana:**",
                    "$$ x^2 + y^2 + z^2 + 2ax + 2by + 2cz + d = 0 \\quad \\text{con } a^2 + b^2 + c^2 - d > 0 $$",
                    "dove $C = (-a, -b, -c)$ e $r = \\sqrt{a^2 + b^2 + c^2 - d}$.",
                    "**Proposizione 7.5.4:** Per quattro punti non complanari di $E_3(\\mathbb{R})$ passa un'unica sfera.",
                    "**Definizione 7.5.3 (Circonferenza in $E_3(\\mathbb{R})$):** Dati un piano $\\alpha$, un suo punto $C$ e un numero reale positivo $r$, si dice **circonferenza** di centro $C$ e raggio $r$ il luogo dei punti di $\\alpha$ aventi distanza $r$ da $C$."
                ]
            }
        ]
    }
];
