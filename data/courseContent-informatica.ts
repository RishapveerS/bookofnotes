
import { MainSection } from '../types';

export const informaticaContent: MainSection[] = [
    {
        id: "calcolatore-software",
        title: "Lezione 1: Il Calcolatore e il Software",
        subsections: [
            {
                title: "Lezione 1.1 --> Informazioni Preliminari per la Programmazione",
                content: [
                    `**1.1.1 Uso del Calcolatore**`,
                    `Per apprendere efficacemente la programmazione, è fondamentale adottare un approccio pratico e metodico. Di seguito sono riportate le linee guida essenziali:`,
                    `● **Compilazione ed esecuzione da terminale**: Si consiglia di compilare ed eseguire i programmi direttamente da terminale, poiché questo approccio permette di visualizzare e comprendere gli errori che si commettono durante la scrittura del codice.`,
                    `● **Pratica autonoma**: È importante testare le proprie soluzioni a casa, in modo da arrivare alla lezione successiva avendo già compreso gli algoritmi risolutivi.`,
                    `● **Ricerca efficace**: Sviluppare la capacità di cercare informazioni online e filtrare le fonti affidabili, privilegiando siti autorevoli come StackOverflow.`,
                    `**1.1.2 Software Ausiliari**`,
                    `Per lo sviluppo in linguaggio C sono necessari tre componenti fondamentali:`,
                    `● **Editor di testo**: Si consiglia l'uso di editor senza completamento automatico per favorire l'apprendimento della sintassi. Opzioni valide includono Notepad++, Atom o Visual Studio Code.`,
                    `● **Compilatore**: Nel corso si utilizza GCC ANSI, conforme allo standard C89.`,
                    `● **Ambiente di sviluppo**: Per gli utenti Windows, l'ambiente consigliato è Ubuntu (tramite WSL - Windows Subsystem for Linux).`
                ]
            },
            {
                title: "Lezione 1.2 --> Architettura dell'Elaboratore",
                content: [
                    `**1.2.1 Il Modello di Von Neumann**`,
                    `L'**architettura di Von Neumann** rappresenta una tipologia fondamentale di architettura hardware per computer digitali programmabili. La sua caratteristica distintiva è l'utilizzo del **programma memorizzato**, dove i dati del programma e le istruzioni condividono lo stesso spazio di memoria.`,
                    `Questa architettura si contrappone all'**architettura Harvard**, nella quale dati e istruzioni sono memorizzati in spazi di memoria distinti.`,
                    `È necessario un mezzo di comunicazione tra la CPU e la memoria di lavoro (RAM). Il modello di Von Neumann fornisce un modello di riferimento ad alto livello per questa comunicazione.`,
                    `**Tipologie di Comunicazione**`,
                    `La comunicazione tra i componenti può essere di diversi tipi:`,
                    `● **Punto a punto**: Connessione diretta tra due componenti`,
                    `● **A Bus**: Canale di comunicazione condiviso`,
                    `La tipologia **a Bus** è stata scelta per i calcolatori moderni per i seguenti motivi:`,
                    `● **Flessibilità**: Il sistema è facilmente scalabile`,
                    `● **Tolleranza ai guasti**: Le periferiche guaste non compromettono l'intero sistema (solo il bus è fondamentale)`,
                    `● **Economicità**: Non è eccessivamente costosa da implementare`,
                    `Dal punto di vista delle prestazioni, il fatto che il canale non possa supportare più periferiche simultaneamente non rappresenta un grosso problema, poiché la CPU elabora comunque una sola istruzione alla volta.`,
                    `**1.2.2 Il Bus di Sistema**`,
                    `Il **Bus di sistema** è composto da tre livelli distinti:`,
                    `**1. Bus degli Indirizzi**: Trasporta gli indirizzi di memoria dell'informazione che viene scambiata. È **monodirezionale** dalla CPU verso la memoria.`,
                    `**2. Bus dei Dati**: Trasporta l'informazione vera e propria: viene letta la memoria oppure viene sovrascritta. È **bidirezionale**, poiché alcune periferiche possono sia leggere che scrivere in memoria.`,
                    `**3. Bus di Controllo**: Trasporta il segnale di controllo (ACK - Acknowledge) che segnala quando l'informazione è disponibile sul bus e coordina le attività.`,
                    `**1.2.3 La Memoria di Lavoro (RAM)**`,
                    `**Terminologia Fondamentale**:`,
                    `● **Indirizzo di memoria**: Identificativo univoco di una cella specifica nella memoria`,
                    `● **Parola di memoria**: Contenuto di una cella di memoria`,
                    `● **Dimensione della parola**: Dimensione della cella in numero di bit (i calcolatori attuali utilizzano almeno 32 bit)`,
                    `**Modalità di Interazione**: Lettura (copia dal bus) e Scrittura (copia sul bus).`,
                    `Se indichiamo con **k** il numero di bit degli indirizzi, il numero di celle indirizzabili è **2^k** (**spazio di indirizzamento**).`,
                    `La **RAM** (Random Access Memory) è una **memoria volatile**: se disalimentata, perde il contenuto.`,
                    `**1.2.4 L'Unità Centrale di Elaborazione (CPU)**`,
                    `La **CPU** (Central Processing Unit) sovraintende alle funzionalità logiche di elaborazione principali. Opera secondo il ritmo del **clock** (misurato in GHz).`,
                    `**Componenti della CPU**:`,
                    `● **ALU** (Arithmetic Logic Unit): Esegue operazioni aritmetiche e logiche`,
                    `● **CU** (Control Unit): Coordina l'esecuzione delle istruzioni`,
                    `● **PC** (Program Counter): Conserva l'indirizzo della prossima istruzione`,
                    `● **IR** (Instruction Register): Immagazzina l'istruzione in elaborazione`,
                    `● **SP** (Stack Pointer): Contiene l'indirizzo della cima dello stack`,
                    `● **RF** (Register File): Banco dei registri interni alla CPU`,
                    `● **PSW** (Process Status Word): Contiene i flag di stato`,
                    `● **MAR** (Memory Address Register): Buffer per gli indirizzi di memoria`,
                    `● **MDR** (Memory Data Register): Buffer per i dati in transito`,
                    `**1.2.5 La Memoria di Massa**`,
                    `Memoria **non volatile** per lo stoccaggio permanente. I dispositivi moderni utilizzano **SSD** (Solid State Drive).`,
                    `**1.2.6 L'Insieme di Istruzioni della CPU**`,
                    `Le categorie principali sono: **Aritmetiche**, **Logiche**, **Sul flusso di controllo** (Jump).`,
                    `Il linguaggio **Assembly** è composto da **Codice operazione (OP:CODE)** e **Operando/i**.`,
                    `**1.2.7 La Gerarchia di Memoria**`,
                    `Dalla più veloce alla più lenta: **Registri** → **Cache** (SRAM) → **RAM** (DRAM) → **Memoria di Massa**.`
                ]
            },
            {
                title: "Lezione 1.3 --> Organizzazione del Sistema Operativo",
                content: [
                    `**Struttura a Livelli**`,
                    `1. **Applicazioni Utente**: Programmi applicativi`,
                    `2. **Applicazioni di Sistema**: Compilatori, interpreti`,
                    `3. **Sistema Operativo**: Gestore file, periferiche, memoria RAM, Kernel`,
                    `4. **Hardware**: Componenti fisici`,
                    `**1.3.1 Il Kernel**`,
                    `**Processo**: Un programma in esecuzione con dati attivi.`,
                    `**Politica Round Robin**: Divisione del tempo della CPU tra i processi.`,
                    `**Stati dei Processi**: Ready (pronto) → Run (esecuzione) → Wait (attesa evento) → Ready`,
                    `**1.3.2 Gestione della Memoria (MMU)**`,
                    `La **Memory Management Unit** gestisce l'accesso alla memoria tramite:`,
                    `● **Paginazione**: Memoria divisa in pagine uguali (frammentazione interna)`,
                    `● **Segmentazione**: Memoria assegnata in base alla dimensione (frammentazione esterna)`,
                    `**Swapping**: Trasferimento dati tra RAM e memoria virtuale.`,
                    `**1.3.3 Gestore delle Periferiche**`,
                    `I **driver** gestiscono le periferiche tramite:`,
                    `● **Polling**: Controllo periodico della periferica`,
                    `● **Interrupt**: Segnale di richiesta interazione`,
                    `● **DMA**: Trasferimento diretto in memoria senza impegnare la CPU`,
                    `**1.3.4 Il File System**`,
                    `Organizzazione ad **albero** con file e directory. Ogni file ha attributi (**A**rchivio, **R**ead-only, **S**istema, **H**idden, **I**ndexed).`
                ]
            }
        ]
    },
    {
        id: "rappresentazione-informazione",
        title: "Lezione 2: Rappresentazione dell'Informazione",
        subsections: [
            {
                title: "Lezione 2.1 --> Scopo della Rappresentazione",
                content: [
                    `**Obiettivo Fondamentale**`,
                    `Trovare un modo opportuno per rappresentare le informazioni (dati e programmi) in modo efficiente rispetto alla realtà fisica del sistema e alla loro manipolazione.`,
                    `L'aspetto fondamentale è la **facilità di elaborazione**, non la facilità di conversione in testo comprensibile.`
                ]
            },
            {
                title: "Lezione 2.2 --> I Linguaggi",
                content: [
                    `**Linguaggio Naturale vs Linguaggio Macchina**`,
                    `**Linguaggio Macchina**: Definito da Alfabeto (S), Codice, Cardinalità |S|.`,
                    `**Formule**: Configurazioni k = ⌈log|S| n⌉; Numero configurazioni n = |S|^k`,
                    `**Linguaggio del Calcolatore**: Codice Binario con alfabeto {0, 1}, unità: **bit** (Binary Digit).`,
                    `**Scala Byte**: 1 Byte = 8 bit; 1 KB = 1024 Byte; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB`
                ]
            },
            {
                title: "Lezione 2.3 --> Il Sistema Numerico Binario",
                content: [
                    `**Definizione**: Sistema posizionale in base 2 con cifre {0, 1}.`,
                    `**MSD** (Most Significant Digit): Cifra più a sinistra. **LSD**: Cifra più a destra.`,
                    `**Conversione Base 10 → Base 2**: Divisioni successive per 2, lettura dal basso verso l'alto.`,
                    `**Conversione Base 2 → Base 10**: Formula v(N) = Σ cᵢ · 2ⁱ`,
                    `**Numeri Relativi - Notazione MS**: Bit di segno (0 = positivo, 1 = negativo) + modulo.`,
                    `**Complemento a 2 (2C2)**: Metodo più diffuso per numeri con segno. Se MSD = 0 → positivo, MSD = 1 → negativo.`,
                    `**Overflow**: Quando somma di concordi dà risultato discorde.`,
                    `**Virgola Fissa**: Bit predefiniti per parte intera/decimale (errore assoluto costante).`,
                    `**Virgola Mobile (Floating Point)**: Bit dinamici (errore relativo costante). Standard **IEEE 754**.`,
                    `**Sistema Esadecimale** (Base 16): Conversione 4 bit alla volta. Cifre: 0-9, A-F.`
                ]
            },
            {
                title: "Lezione 2.4 --> Rappresentazione Non Numerica",
                content: [
                    `**Codice ASCII**: 7 bit (128 configurazioni), ASCII esteso 8 bit (256 configurazioni).`,
                    `**Suddivisione**: 0-32 (controllo), 48-57 (cifre), 65-90 (maiuscole), 97-122 (minuscole).`
                ]
            }
        ]
    },
    {
        id: "algoritmi",
        title: "Lezione 3: Gli Algoritmi",
        subsections: [
            {
                title: "Lezione 3.1 --> Calcolatore vs Essere Umano",
                content: [
                    `**Vantaggi del Calcolatore**: Velocità, capacità di calcoli complessi, assenza di errori di distrazione.`,
                    `**Ruolo Umano**: Comprendere il problema e progettare l'algoritmo risolutivo.`
                ]
            },
            {
                title: "Lezione 3.2 --> Risoluzione di un Problema",
                content: [
                    `**Modello Generale**: 1) Individuare i requisiti; 2) Descrivere il procedimento; 3) Trovare il modello ottimale.`,
                    `**Ottimizzazione**: Minimizzare il numero di operazioni, evitare ridondanze, controllare più condizioni simultaneamente quando possibile.`
                ]
            },
            {
                title: "Lezione 3.3 --> Definizione Formale di Algoritmo",
                content: [
                    `**Algoritmo**: Sequenza finita di passi non ambigui che produce un risultato deterministico.`,
                    `**Rappresentazioni**: Diagramma di flusso (blocchi grafici), Pseudocodice (sintassi naturale), Codice sorgente.`
                ]
            }
        ]
    },
    {
        id: "linguaggio-c",
        title: "Lezione 4: Il Linguaggio C89 ANSI",
        subsections: [
            {
                title: "Lezione 4.1 --> Sintassi del Linguaggio",
                content: [
                    `**Introduzione allo Standard ANSI C89**`,
                    `Lo standard **ANSI del linguaggio C** è stato progettato per promuovere la portabilità dei programmi C fra diversi sistemi informatici. La norma copre tre aree principali:`,
                    `● L'ambiente in cui il programma compila ed esegue`,
                    `● La semantica e la sintassi del linguaggio`,
                    `● Il contenuto e la semantica delle librerie standard e dei file di intestazione`,
                    `**4.1.1 Operatori del Linguaggio C**`,
                    `**Operatore di Assegnamento "="**`,
                    `Corrisponde a: var := valore. L'assegnamento è **unidirezionale**: ciò che sta a destra viene assegnato alla variabile a sinistra. Pertanto: (A = B) ≠ (B = A).`,
                    `**Operatori Aritmetici** (il comportamento dipende dal tipo della variabile):`,
                    `● **+** Somma`,
                    `● **-** Differenza`,
                    `● ***** Prodotto`,
                    `● **/** Divisione`,
                    `● **%** Resto della divisione (modulo)`,
                    `**Operatori Logici** (seguono le tavole di verità):`,
                    `● **&&** Prodotto logico (AND)`,
                    `● **||** Somma logica (OR)`,
                    `● **!** Negazione (NOT)`,
                    `**Operatori Relazionali**:`,
                    `● **>** Maggiore stretto`,
                    `● **>=** Maggiore o uguale`,
                    `● **<** Minore stretto`,
                    `● **<=** Minore o uguale`,
                    `● **==** Confronto di uguaglianza (diverso da "=" che è assegnamento)`,
                    `● **!=** Diverso`,
                    `**Leggi di De Morgan** (ripasso condizioni logiche):`,
                    `● (condiz1 || condiz2) == !(!condiz1 && !condiz2)`,
                    `● (condiz1 && condiz2) == !(!condiz1 || !condiz2)`
                ]
            },
            {
                title: "Lezione 4.2 --> Compilazione ed Esecuzione",
                content: [
                    `**L'Estensione del File**`,
                    `L'estensione **.c** comunica al compilatore il contenuto del file e permette all'editor di riconoscere il linguaggio C ed evidenziare le parole chiave.`,
                    `**Comando di Compilazione**`,
                    `gcc -Wall -std=c89 -pedantic -o nomefile_eseguibile nomefile_sorgente.c`,
                    `**Parametri del Compilatore**:`,
                    `● **-Wall**: Segnala tutti i warning`,
                    `● **-std=c89**: Verifica la conformità allo standard ANSI C89`,
                    `● **-pedantic**: Segnala le violazioni dello standard`,
                    `● **-o**: Specifica il nome del file eseguibile`,
                    `**Tipologie di Problemi**:`,
                    `● **Error**: Non viene creato l'eseguibile (errore di sintassi). Se si dimentica il ";", l'errore viene segnalato nella riga successiva.`,
                    `● **Warning**: Condizioni anomale che potrebbero indicare problemi, ma l'eseguibile viene comunque creato.`,
                    `**Tool Utili**:`,
                    `● **indent**: Formatta e indenta correttamente i file .c`,
                    `● **diff**: Confronta due file evidenziando le differenze`,
                    `**4.2.1 Struttura del Codice**`,
                    `**1. Inclusione Librerie**`,
                    `#include <stdio.h> // Libreria standard I/O`,
                    `**2. Definizione Costanti**`,
                    `#define NOME_COSTANTE valore`,
                    `**3. Funzione Main**`,
                    `int main(int argc, char *argv[]) { ... return 0; }`,
                    `**4. Indentazione**`,
                    `Inserimento di spazi vuoti (tab = 4 spazi) all'inizio delle righe per migliorare la leggibilità. In C è una convenzione, in Python fa parte della sintassi.`,
                    `**5. Dichiarazione Variabili**`,
                    `Stabilisce lo spazio da riservare e la tipologia di dato:`,
                    `● **int**: Numeri interi`,
                    `● **float**: Numeri reali a precisione singola`,
                    `● **double**: Numeri reali a precisione doppia`,
                    `● **char**: Caratteri singoli`,
                    `**6. Input con scanf()**`,
                    `scanf("%tipo", &nome_variabile);`,
                    `**7. Output con printf()**`,
                    `printf("testo %tipo", nome_variabile);`,
                    `**Specificatori di Formato**:`,
                    `● **%d**: Interi con segno`,
                    `● **%u**: Interi senza segno`,
                    `● **%f**: Numeri reali`,
                    `● **%c**: Caratteri`,
                    `● **%s**: Stringhe`,
                    `**Caratteri Speciali**:`,
                    `● **\\n**: A capo (newline)`,
                    `● **\\t**: Tabulazione`,
                    `● **\\0**: Terminatore di stringa`,
                    `● **\\\\**: Backslash`,
                    `● **\\"**: Virgolette doppie`
                ]
            },
            {
                title: "Lezione 4.3 --> Funzioni e Sottoprogrammi",
                content: [
                    `**4.3.1 Concetto di Sottoprogramma**`,
                    `I **sottoprogrammi** sono composti da funzioni e sottoprocedure. Il loro ruolo è scomporre un problema in piccoli task, ciascuno gestito da un singolo sottoprogramma.`,
                    `**Principi Fondamentali**:`,
                    `● Un sottoprogramma **calcola ed elabora**, non visualizza direttamente`,
                    `● Un sottoprogramma **riceve informazioni dal main**, non chiede direttamente all'utente`,
                    `● Può restituire al massimo **1 valore** tramite return (oppure 0 se void)`,
                    `**Sintassi Base di una Funzione**`,
                    `tipo_funzione nome_funzione(argomenti) {`,
                    `    codice_sottoprogramma;`,
                    `    return dato_restituito;`,
                    `}`,
                    `**Tipi di Funzione**:`,
                    `● **int**: Restituisce un intero`,
                    `● **float**: Restituisce un numero reale`,
                    `● **char**: Restituisce un carattere`,
                    `● **void**: Non restituisce nulla`,
                    `**Convenzione sulla Disposizione del Codice**:`,
                    `1. #include <librerie>`,
                    `2. #define COSTANTI`,
                    `3. typedef definizioni di tipo`,
                    `4. Prototipi delle funzioni`,
                    `5. Funzione main()`,
                    `6. Implementazione delle funzioni`,
                    `**Scope delle Variabili**`,
                    `Le variabili in C hanno uno **scope**: sono definite solo all'interno della funzione in cui sono dichiarate. Le variabili dichiarate nel main sono accessibili solo nel main.`,
                    `**4.3.2 Puntatori**`,
                    `Con la sintassi **&nome_variabile** si ottiene l'indirizzo di memoria della variabile.`,
                    `**Tipi di Puntatori**:`,
                    `● **int*** : Puntatore a intero`,
                    `● **float*** : Puntatore a float`,
                    `● **char*** : Puntatore a carattere`,
                    `**Operatori sui Puntatori**:`,
                    `● **&**: Restituisce l'indirizzo di una variabile`,
                    `● ** * **: Restituisce il valore all'indirizzo specificato (dereferenziazione)`,
                    `**Esempio di Funzione con Puntatori** (per restituire più valori):`,
                    `void conta_voc_cons(char s[], int *n_vocali, int *n_consonanti) {`,
                    `    // elaborazione...`,
                    `    *n_vocali = valore1;`,
                    `    *n_consonanti = valore2;`,
                    `}`,
                    `// Chiamata: conta_voc_cons(stringa, &num_voc, &num_cons);`,
                    `**Passaggio Parametri alle Funzioni**:`,
                    `● **Array**: function(int v[], int dim) oppure function(int *v, int dim)`,
                    `● **Matrice**: function(int m[][NCOL], int nr, int nc)`,
                    `● **Struttura**: function(tipo_struct *s)`,
                    `**4.3.3 Acquisizione da Riga di Comando**`,
                    `int main(int argc, char *argv[])`,
                    `● **argc**: Numero di argomenti passati`,
                    `● **argv[]**: Array di stringhe contenente gli argomenti`,
                    `● **argv[0]**: Nome del programma`,
                    `● **argv[1], argv[2], ...**: Argomenti successivi`,
                    `**Funzioni di Conversione**:`,
                    `● **atoi()**: Converte stringa in intero`,
                    `● **atof()**: Converte stringa in float`,
                    `**4.3.4 Contatori e Operatori Abbreviati**`,
                    `**Operatori di Incremento/Decremento**:`,
                    `● **num++**: Equivale a num = num + 1`,
                    `● **num--**: Equivale a num = num - 1`,
                    `**Operatori Composti**:`,
                    `● **tot += cont**: Equivale a tot = tot + cont`,
                    `● **tot -= cont**: Equivale a tot = tot - cont`,
                    `● **ris *= val**: Equivale a ris = ris * val`,
                    `● **ris /= val**: Equivale a ris = ris / val`,
                    `**4.3.5 Casting**`,
                    `L'operazione di **casting** converte temporaneamente il tipo di una variabile:`,
                    `(tipo_destinazione) nome_variabile`,
                    `Il casting ha **priorità maggiore** rispetto agli operatori aritmetici:`,
                    `● avg = (float)tot / num → Prima converte tot, poi divide`,
                    `● avg = (float)(tot / num) → Prima divide, poi converte`
                ]
            },
            {
                title: "Lezione 4.4 --> Costrutti di Controllo in C",
                content: [
                    `**4.4.1 Costrutto if**`,
                    `**Sintassi Base**:`,
                    `if (espressione) istruzione;`,
                    `**Con più istruzioni** (parentesi graffe obbligatorie):`,
                    `if (espressione) {`,
                    `    istruzione1;`,
                    `    istruzione2;`,
                    `}`,
                    `**if-else**:`,
                    `if (condizione)`,
                    `    istruzione_vera;`,
                    `else`,
                    `    istruzione_falsa;`,
                    `**if-else annidato**:`,
                    `if (cond1) istr1;`,
                    `else if (cond2) istr2;`,
                    `else if (cond3) istr3;`,
                    `else istr_default;`,
                    `**Nota Importante**: L'else è legato all'if precedente che non ha già un else associato.`,
                    `**Condizioni Equivalenti**:`,
                    `● if(val == 0) equivale a if(!val)`,
                    `● if(val != 0) equivale a if(val)`,
                    `● Usare if(5 == val) per evitare errori di assegnamento accidentale`,
                    `**4.4.2 Costrutto switch**`,
                    `Selezione basata sul valore di una variabile intera o carattere:`,
                    `switch(variabile) {`,
                    `    case valore1: istruzione1; break;`,
                    `    case valore2: istruzione2; break;`,
                    `    default: istruzione_default;`,
                    `}`,
                    `**Importante**: Il **break** è necessario per uscire dallo switch, altrimenti l'esecuzione prosegue nei case successivi.`,
                    `**4.4.3 Ciclo while e do-while**`,
                    `**while** (condizione in testa):`,
                    `while (espressione) {`,
                    `    istruzioni;`,
                    `}`,
                    `La condizione viene verificata **prima** di eseguire le istruzioni.`,
                    `**do-while** (condizione in coda):`,
                    `do {`,
                    `    istruzioni;`,
                    `} while (espressione);`,
                    `Le istruzioni vengono eseguite **almeno una volta**, poi si verifica la condizione.`,
                    `**Uso Tipico di do-while**: Validazione input dell'utente.`,
                    `**4.4.4 Costrutto for**`,
                    `Ciclo a condizione iniziale, ideale per iterazioni a conteggio:`,
                    `for (inizializzazione; condizione; incremento) {`,
                    `    istruzioni;`,
                    `}`,
                    `**Esempio**:`,
                    `for (i = 0; i < N; i++) {`,
                    `    printf("%d", array[i]);`,
                    `}`,
                    `**Note sul for**:`,
                    `● È equivalente a un while con contatore`,
                    `● Non dichiarare variabili locali nel for (usare variabili globali)`,
                    `● Si possono usare più inizializzazioni e condizioni: for(i=0, j=0; i<N && j<M; i++, j--)`,
                    `**4.4.5 Ricorsione**`,
                    `Metodo in cui una funzione richiama **se stessa**:`,
                    `**Ricorsione Diretta**:`,
                    `int fattoriale(int n) {`,
                    `    if (n <= 1) return 1;`,
                    `    return n * fattoriale(n - 1);`,
                    `}`,
                    `**Ricorsione Indiretta**: La funzione A chiama B, che chiama A.`,
                    `**Requisiti per la Ricorsione**:`,
                    `● Caso base che interrompe la ricorsione`,
                    `● Chiamata ricorsiva con parametro modificato verso il caso base`
                ]
            },
            {
                title: "Lezione 4.5 --> Strutture Dati",
                content: [
                    `**4.5.1 Array Monodimensionali (Vettori)**`,
                    `Struttura dati che permette di memorizzare più valori **omogenei** con un unico nome.`,
                    `**Dichiarazione**:`,
                    `#define DIM 50`,
                    `int numeri[DIM];`,
                    `float prezzi[30];`,
                    `**Caratteristiche**:`,
                    `● L'indice parte da **0**: array[0] è il primo elemento`,
                    `● L'ultimo elemento è array[DIM-1]`,
                    `● La dimensione deve essere nota a tempo di compilazione (nello standard ANSI C89)`,
                    `**Esempio di Popolazione**:`,
                    `for (i = 0; i < DIM; i++) {`,
                    `    scanf("%d", &numeri[i]);`,
                    `}`,
                    `**4.5.2 Array Multidimensionali (Matrici)**`,
                    `Struttura a più dimensioni (es: tabelle, immagini).`,
                    `**Dichiarazione**:`,
                    `int matrice[N_RIGHE][N_COLONNE];`,
                    `**Accesso**: matrice[i][j] dove i = riga, j = colonna.`,
                    `**Linearizzazione della Memoria**: La memoria è monodimensionale; le matrici vengono memorizzate riga per riga (row-major order).`,
                    `**4.5.3 Strutture (struct)**`,
                    `Permettono di raggruppare dati di **tipi diversi** in un'unica entità.`,
                    `**Sintassi**:`,
                    `typedef struct {`,
                    `    int giorno;`,
                    `    int mese;`,
                    `    int anno;`,
                    `} data_t;`,
                    `**Uso**:`,
                    `data_t nascita;`,
                    `nascita.giorno = 15;`,
                    `nascita.mese = 3;`,
                    `scanf("%d", &nascita.anno);`,
                    `**Accesso con Puntatori**:`,
                    `● (*ptr).campo equivale a ptr->campo`,
                    `**4.5.4 Stringhe**`,
                    `Array di caratteri terminato dal carattere **'\\0'** (terminatore nullo).`,
                    `**Dichiarazione**:`,
                    `#define LMAX 100`,
                    `char stringa[LMAX + 1]; // +1 per il terminatore`,
                    `**Acquisizione**:`,
                    `● scanf("%s", stringa); // Si ferma allo spazio`,
                    `● gets(stringa); // Legge l'intera riga (inclusi spazi)`,
                    `**Funzioni della Libreria string.h**:`,
                    `● **strlen(s)**: Restituisce la lunghezza della stringa`,
                    `● **strcmp(s1, s2)**: Confronta due stringhe (0 se uguali)`,
                    `● **strcpy(dest, src)**: Copia src in dest`,
                    `**4.5.5 Allocazione Dinamica**`,
                    `Permette di allocare memoria a runtime con la libreria **<stdlib.h>**.`,
                    `**malloc()** (Memory Allocation):`,
                    `int *v = (int*)malloc(n * sizeof(int));`,
                    `**Verifica dell'Allocazione**:`,
                    `if (v != NULL) {`,
                    `    // utilizzo della memoria`,
                    `    free(v); // liberazione della memoria`,
                    `}`,
                    `**free()**: Libera la memoria allocata dinamicamente. **Obbligatorio** quando la memoria non serve più.`,
                    `**4.5.6 Liste Concatenate (Linked List)**`,
                    `Struttura dati dinamica per memorizzare elementi senza conoscere a priori il numero.`,
                    `**Struttura del Nodo**:`,
                    `typedef struct nodo_s {`,
                    `    int valore;`,
                    `    struct nodo_s *next;`,
                    `} nodo_t;`,
                    `**Operazioni Fondamentali**:`,
                    `● **push()**: Inserimento in testa`,
                    `● **append()**: Inserimento in coda`,
                    `● **find()**: Ricerca di un valore`,
                    `● **delete()**: Eliminazione di un elemento`,
                    `● **list_length()**: Calcolo della lunghezza`,
                    `**Scorrimento della Lista**:`,
                    `for (nodo_t *p = head; p != NULL; p = p->next) {`,
                    `    printf("%d ", p->valore);`,
                    `}`,
                    `**4.5.7 File**`,
                    `Il carattere **EOF** (End Of File) indica la fine del file.`,
                    `**Apertura**:`,
                    `FILE *fp = fopen("nome_file", "modalità");`,
                    `// "r" = lettura, "w" = scrittura, "rb" = lettura binaria`,
                    `**Verifica Apertura**:`,
                    `if (fp != NULL) { ... fclose(fp); }`,
                    `**Lettura/Scrittura**:`,
                    `● **fscanf(fp, "%d", &var)**: Lettura formattata`,
                    `● **fprintf(fp, "%d", var)**: Scrittura formattata`,
                    `● **fgets(str, n, fp)**: Lettura di una riga`,
                    `● **feof(fp)**: Restituisce vero se fine file`,
                    `**File Binari**:`,
                    `● **fread(ptr, size, count, fp)**: Lettura binaria`,
                    `● **fwrite(ptr, size, count, fp)**: Scrittura binaria`,
                    `**4.5.8 Variabili Globali**`,
                    `Variabili dichiarate **fuori da tutte le funzioni**, visibili in tutto il programma.`,
                    `Vengono dichiarate dopo #define e typedef, ma prima del main.`
                ]
            },
            {
                title: "Lezione 4.6 --> Algoritmi non immediati",
                content: [
                    `**Rotazione di una Matrice**`,
                    `Per ruotare una matrice quadrata in senso orario:`,
                    `\`\`\`c
/* inserire dimensione array bidimensionale quadrato di dim_max(M)=10
crea e visulaizza matrice ruotata in senso orario*/
#include <stdio.h>
#define MAX 10
int main(int argc, char*argv[]){
    int dim, i, j, mat[MAX][MAX], mat_r[MAX][MAX];
    do scanf("%d",&dim); while (!(dim >= 2 && dim <= 10));
    for(i=0; i<dim; i++){
        for(j=0; j<dim; j++) scanf("%d",&mat[i][j]);
    }
    for(i=0; i<dim; i++){
        for(j=0; j<dim; j++)
            mat_r[i][j] = mat[dim-j-1][i];
    }
    printf("\\n");
    for(i=0; i<dim; i++){
        for(j=0; j<dim; j++) printf("%d ", mat_r[i][j]);
        printf("\\n");
    }
    printf("\\n");
    return 0;
}
\`\`\``,
                    `**Ricerca di elemento di un vettore in un altro vettore**`,
                    `\`\`\`c
/* programma che conta vocali, utente inserisce solo carartteri minuscoli*/
#include <stdio.h>
#include <string.h> 
#define MAX 100
#define INIZIO 'a'
#define VOC 5
#define FINE 'z'
int main(int argc, char *argv[]){
    char frase[MAX+1], set[VOC+1];
    int i, j, num, trovato;
    gets(frase);
    num = 0;
    for(i=0; frase[i]!='\\0'; i++){
        trovato = 0;
        for(j=0; set[j]!='\\0' && trovato==0; j++)
            if(frase[i]==set[j]) trovato = 1;
        num += trovato;
    }
    printf("vocali: %d\\n", num);
    return 0;
}
\`\`\``
                ]
            }
        ]
    },
    {
        id: "esercitazioni",
        title: "Lezione 5: Esercitazioni",
        subsections: [
            {
                title: "Esercitazione 5.1 --> Esercizi di Approfondimento",
                content: [
                    `**Esercizio 1 - Padding**`,
                    `Si vuole rappresentare a video un valore naturale \`num\` utilizzando un numero a scelta di cifre \`k\` inserendo \`0\` nelle posizioni più significative.`,
                    `\`\`\`c
/* ## Esercizio 1 - Padding */
#include <stdio.h>
#define BASE 10
#define CAR 0
int main(int argc, char *argv[]){
    int numi, numf, cifre, i;
    do scanf("%d",&numi); while(numi<=0);
    do scanf("%d",&cifre); while(cifre<=0);
    numf = numi;
    i = 0;
    while(numf>0){
        i++;
        numf /= BASE;
    }
    cifre -= i;
    for(i=0; i<cifre; i++) printf("%d", CAR);
    printf("%d\\n", numi);
    return 0;
}
\`\`\``,
                    `**Esercizio 2 - Piramidi di Super Mario**`,
                    `Disegnare una doppia piramide di caratteri '#' con spazio centrale di 2 caratteri.`,
                    `\`\`\`c
/* ## Esercizio 2 - Super Mario */
#include <stdio.h>
#define MAX 16
#define MIN 1
#define ARIA_CENTRO 2
#define BLOCCHI '#'
#define ARIA ' '
int main (int argc, char *argv[]){
    int piani, i, j, nAria, nBlocchi;
    do scanf("%d",&piani); while (piani <MIN || piani >MAX);
    for (i = 1; i <= piani; i++){
        nAria = piani - i;
        nBlocchi = piani - nAria;
        for (j = 0; j <nAria; j++) printf("%c", ARIA);
        for (j = 0; j <nBlocchi; j++) printf("%c", BLOCCHI);
        for (j = 0; j <ARIA_CENTRO; j++) printf("%c", ARIA);
        for (j = 0; j <nBlocchi; j++) printf("%c", BLOCCHI);
        printf("\\n");
    }
    return 0;
}
\`\`\``,
                    `**Esercizio 3 - Troncabile Primo a Destra**`,
                    `Un numero si dice troncabile primo a destra se il numero stesso e tutti i numeri che si ottengono eliminando una alla volta la cifra meno significativa sono numeri primi.`,
                    `\`\`\`c
/* ## Esercizio 3 - Troncabile primo a destra */
#include <stdio.h>
#define BASE 10
int primo(int val){
    int i, ris, meta;
    if(val>0){
        ris = 1;
        if(val%2 == 0) ris = 0;
        else{
            meta = val/2;
            for(i=3; i<meta && ris != 0; i += 2)
                if(val%i== 0) ris = 0;
        }
    } else ris = -1;
    return ris;
}
int main(int argc, char*argv[]){
    int num, tpd;
    do scanf("%d",&num); while(num<=0);
    tpd = 1;
    num /= BASE;
    while(num>0 && tpd==1){
        if(primo(num) != 1) tpd = 0;
        num /= BASE;
    }
    printf("%d\\n", tpd);
    return 0;
}
\`\`\``,
                    `**Esercizio 4 - Triangolo di Tartaglia**`,
                    `Generare il triangolo di Tartaglia di dimensione chiesta all'utente.`,
                    `\`\`\`c
/* ## Esercizio 4 -- Tartaglia */
#include <stdio.h>
#define MAX 10
int main(int argc, char *argv[]){
    int i, j, dim, trng[MAX][MAX];
    do scanf("%d",&dim); while(dim<=0);
    for(i=0; i<dim; i++){
        for(j=0; j<=i; j++){
            if(j==0 || j==i) trng[i][j]=1;
            else trng[i][j]=trng[i-1][j-1]+trng[i-1][j];
        }
    }
    for(i=0; i<dim; i++){
        for(j=0; j<=i; j++) printf("%d ", trng[i][j]);
        printf("\\n");
    }
    return 0;
}
\`\`\``,
                    `**Esercizio 5 - Rotazione Stringa**`,
                    `Crea una nuova stringa che contiene la rotazione verso destra di una stringa input di n posizioni.`,
                    `\`\`\`c
/* ## Esercizio 5 -- Rotazione stringa */
#include <stdio.h>
#include <string.h>
#define LEN 50
int main (int argc, char *argv[]){
    char frase[LEN + 1], reverse[LEN + 1];
    int i, len, ruota, j;
    gets(frase);
    scanf("%d",&ruota);
    len = strlen(frase);
    for (i = 0; i <len; i++){
        j = i - ruota;
        if(j<0) j = i - ruota + len;
        reverse[i] = frase[j];
    }
    reverse[len] = '\\0';
    printf("%s\\n", reverse);
    return 0;
}
\`\`\``,
                    `**Esercizio 6 - Trading Ottimale**`,
                    `Individuare il giorno in cui acquistare e quello in cui vendere per massimizzare il guadagno.`,
                    `\`\`\`c
/* ## Esercizio 6 - Trading Ottimale */
#include <stdio.h>
#define GIORNI 20
#define OPZ_1 "perdita"
#define OPZ_2 "capitale insufficente"
int main (int argc, char *argv[]){
    int cambi[GIORNI], iTemp, guadagno, guadagnoTemp, capI, preI, iStart, iFinish, i, found;
    scanf("%d",&preI);
    for (i = 0; i <GIORNI; i++) scanf("%d",&cambi[i]);
    scanf("%d",&capI);
    found = 0;
    for (i = 0; i <GIORNI && !found; i++){
        if (preI <= capI){
            iStart = i; iFinish = i;
            guadagno = cambi[i]; guadagnoTemp = cambi[i];
            iTemp = i; found = 1;
        }
        preI += cambi[i];
    }
    for (; i <GIORNI; i++){
        guadagnoTemp += cambi[i];
        if (cambi[i] > guadagnoTemp && preI <= capI){
            guadagnoTemp = cambi[i]; iTemp = i;
        }
        if (guadagnoTemp > guadagno){
            guadagno = guadagnoTemp; iStart = iTemp; iFinish = i;
        }
        preI += cambi[i];
    }
    if (found)
        if (guadagno > 0) printf("%d %d", iStart, iFinish);
        else printf(OPZ_1);
    else printf(OPZ_2);
    printf("\\n");
    return 0;
}
\`\`\``
                ]
            },
            {
                title: "Esercitazione 5.2 --> Esercizi del Laboratorio",
                content: [
                    `**27/09/2022 - Operazioni Base**`,
                    `**Esercizio 1: Calcolatrice Polacca**`,
                    `\`\`\`c
#include <stdio.h>
#define INV 999999
int main(int argc,char*argv[]){
    int a,b; float ris; char operatore;
    scanf("%c\\n",&operatore);
    switch(operatore){
        case '+': ris=a+b; break;
        case '-': ris=a-b; break;
        case '*': ris=a*b; break;
        case '/': ris=a/b; break;
        default: ris=INV;
    }
    printf("%f",ris);
    return 0;
}
\`\`\``,
                    `**Esercizio 2: Data in Anni**`,
                    `\`\`\`c
#define M_A 12
#define G_A 365
#include <stdio.h>
int main(int argc, char*argv[]){
    int ggp, mmp, aap, gga, mma, aaa, ris;
    float p1,p2;
    scanf("%d\\t %d\\t %d\\n %d\\t %d\\t %d\\n",&ggp, &mmp, &aap, &gga, &mma, &aaa);
    p1=ggp/G_A+mmp/M_A+aap;
    p2=gga/G_A+mma/M_A+aaa;
    ris=p2-p1;
    printf("%d\\n",ris);
    return 0;
}
\`\`\``,
                    `**Esercizio 3: Ordinamento 3 Numeri**`,
                    `\`\`\`c
#include <stdio.h>
int main(int argc,char*argv[]){
    int a, b, c, var;
    scanf("%d %d %d",&a, &b, &c);
    if(a<b){ var=a; a=b; b=var; }
    if(a<c){ var=a; a=c; c=var; }
    if(b<c){ var=b; b=c; c=var; }
    printf("%d %d %d\\n",c,b,a);
    return 0;
}
\`\`\``,
                    `**Esercizio 4: Pari o Dispari**`,
                    `\`\`\`c
#include <stdio.h>
#define PARI 0
#define DISPARI 1
int main(int argc, char*argv[]){
    int num, ris;
    scanf("%d",&num);
    if(num%2==0) ris=PARI; else ris=DISPARI;
    printf("%d\\n",ris);
    return 0;
}
\`\`\``,
                    `**Esercizio 5: Profitto**`,
                    `\`\`\`c
#include <stdio.h>
#define POS '+'
#define NEG '-'
#define PAR 'x'
int main(int argc,char*argv[]){
    float costo, vendita, profitto;
    char out;
    scanf("%f\\n%f",&costo,&vendita);
    profitto=vendita-costo;
    if(profitto>0) out=POS;
    else if(profitto<0) out=NEG;
    else out=PAR;
    if(profitto<0) profitto=-profitto;
    printf("%c\\n%f\\n",out,profitto);
    return 0;
}
\`\`\``,
                    `**03/10/2022 - Cicli**`,
                    `**Esercizio 1: Somma Cifre**`,
                    `\`\`\`c
#include <stdio.h>
#define BASE 10
int main(int argc,char*argv[]){
    int num, sum;
    scanf("%d",&num);
    if(num<0) num = -num;
    sum = 0;
    while(num!=0){
        sum += num%BASE;
        num /= BASE;
    }
    printf("%d\\n",sum);
    return 0;
}
\`\`\``,
                    `**Esercizio 4: Palindromo**`,
                    `\`\`\`c
#include <stdio.h>
#define PAL 's'
#define NO_PAL 'n'
#define BASE 10
int main(int argc,char*argv[]){
    int num, ris, supp, cifra, inverso;
    do{ scanf("%d",&num); }while(num<=0);
    supp = num; inverso = 0;
    if(supp%BASE == 0) ris = NO_PAL;
    else {
         while(supp>0){
            inverso = inverso*BASE + supp%BASE;
            supp /= BASE;
        }
        if(inverso==num) ris = PAL; else ris = NO_PAL;
    }
    printf("%c\\n",ris);
    return 0;
}
\`\`\``,
                    `**Esercizio 6: MCD e MCM**`,
                    `\`\`\`c
#include <stdio.h>
int main (int argc, char*argv[]){
    int num1, num2, tmp1, tmp2, resto, mcd, mcm;
    do scanf("%d",&num1); while (num1<=0);
    do scanf("%d",&num2); while (num2<=0);
    if (num1 >num2){ tmp1 =num1; tmp2 =num2; }
    else { tmp1 =num2; tmp2 =num1; }
    resto =tmp1 %tmp2;
    while (resto != 0){
        tmp1 =tmp2; tmp2 =resto; resto =tmp1 %tmp2;
    }
    mcd =tmp2;
    mcm =num1 *num2 /mcd;
    printf("%d\\t%d\\n", mcd, mcm);
    return 0;
}
\`\`\``,
                    `**13/10/2022 - Array e Stringhe**`,
                    `● Eliminazione del valore più frequente`,
                    `● Calcolo del fattoriale`,
                    `● Verifica assenza duplicati`,
                    `● Massimizzazione prodotti acquistabili`,
                    `● Verifica diagonale crescente`,
                    `● Verifica matrice simmetrica`,
                    `● Compressione stringa (run-length encoding)`,
                    `● Individuazione sequenze di cifre`,
                    `**20/10/2022 - Funzioni e Matrici**`,
                    `● Somme minime di righe e colonne`,
                    `● Validazione password`,
                    `● Acquisizione array con terminatore`,
                    `● Conversione maiuscole/minuscole`,
                    `● Array di somme cumulative`,
                    `● Conteggio coppie di elementi uguali`
                ]
            }
        ]
    }
];
