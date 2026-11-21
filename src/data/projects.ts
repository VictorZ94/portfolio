import paylipsDashboard from '../assets/projects/paylips/dashboard.webp';
import paylipsEarnings from '../assets/projects/paylips/earnings.webp';
import paylipsHours from '../assets/projects/paylips/hours.webp';
import paylipsPayslips from '../assets/projects/paylips/payslips.webp';
import paylipsUpload from '../assets/projects/paylips/upload.webp';
import type { Localized } from '../i18n/locales';

/**
 * A screenshot slot. Leave `src` out to render a labelled placeholder; to fill
 * it, save the image at `file`, import it at the top of this module and set `src`.
 */
export interface Shot {
  src?: string;
  alt: Localized<string>;
  caption: Localized<string>;
  file: string;
}

export interface ProjectLink {
  kind: 'live' | 'source';
  href: string;
}

interface Point {
  title: Localized<string>;
  body: Localized<string>;
}

export interface Project {
  slug: string;
  name: string;
  status: 'live' | 'wip';
  tagline: Localized<string>;
  summary: Localized<string>;
  overview: Localized<string[]>;
  /** Hostname shown in the screenshot frame's address bar. */
  host?: string;
  links: ProjectLink[];
  stack: string[];
  cover: Shot;
  steps: Point[];
  highlights: Point[];
  screens: Shot[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'paylips-aus',
    name: 'Paylips AUS',
    status: 'live',
    tagline: {
      en: 'Turns Australian payslip PDFs into a personal income dashboard.',
      es: 'Convierte los recibos de pago australianos en PDF en un panel personal de ingresos.',
    },
    summary: {
      en:
        'Drop in a payslip PDF and a vision model reads it into structured rows. You review ' +
        'them, and the dashboard tracks income and hours across employers and the financial year.',
      es:
        'Sube el PDF de un recibo de pago y un modelo de visión lo convierte en filas ' +
        'estructuradas. Tú las revisas, y el panel muestra ingresos y horas por empleador y por ' +
        'año fiscal.',
    },
    overview: {
      en: [
        'Payslips arrive as PDFs in a different layout from every employer, which makes it hard ' +
          'to see what you actually earned and worked over a month or a financial year.',
        'Paylips AUS reads them for you. The PDF is rendered in the browser, a vision model ' +
          'extracts nine fields per pay period, and you confirm the rows before they are saved ' +
          'to your account. The dashboard then answers the questions a pile of PDFs can’t.',
      ],
      es: [
        'Los recibos de pago llegan en PDF y cada empleador usa un formato distinto, así que es ' +
          'difícil saber cuánto ganaste y trabajaste realmente en un mes o en un año fiscal.',
        'Paylips AUS los lee por ti. El PDF se renderiza en el navegador, un modelo de visión ' +
          'extrae nueve campos por periodo de pago y tú confirmas las filas antes de guardarlas ' +
          'en tu cuenta. Luego el panel responde las preguntas que una pila de PDF no puede.',
      ],
    },
    host: 'paylips-aus.vercel.app',
    links: [
      { kind: 'live', href: 'https://paylips-aus.vercel.app/' },
      { kind: 'source', href: 'https://github.com/VictorZ94/paylips_aus' },
    ],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'MUI',
      'Firebase Auth',
      'Firestore',
      'pdf.js',
      'Ollama Cloud',
      'ApexCharts',
    ],
    cover: {
      src: paylipsDashboard,
      alt: {
        en: 'Paylips AUS dashboard with total earned, tax after refunds, hours worked and super.',
        es:
          'Panel de Paylips AUS con total ganado, impuestos tras reembolsos, horas trabajadas y ' +
          'super.',
      },
      caption: {
        en: 'Dashboard: earnings, tax, hours and super for any window, with trends.',
        es: 'Panel: ingresos, impuestos, horas y super en cualquier rango, con tendencias.',
      },
      file: 'src/assets/projects/paylips/dashboard.webp',
    },
    steps: [
      {
        title: { en: 'Render in the browser', es: 'Renderizado en el navegador' },
        body: {
          en:
            'pdf.js rasterises up to six pages to images on the device. The PDF itself is never ' +
            'uploaded.',
          es:
            'pdf.js convierte hasta seis páginas en imágenes en el propio dispositivo. El PDF ' +
            'nunca se sube.',
        },
      },
      {
        title: { en: 'Extract with a vision model', es: 'Extracción con un modelo de visión' },
        body: {
          en:
            'A Next.js route handler sends the pages to an Ollama Cloud vision model, with a ' +
            'JSON schema as the structured-output format.',
          es:
            'Un route handler de Next.js envía las páginas a un modelo de visión de Ollama ' +
            'Cloud, con un esquema JSON como formato de salida estructurada.',
        },
      },
      {
        title: { en: 'Parse defensively', es: 'Lectura defensiva' },
        body: {
          en:
            'The reply is read as raw JSON, then a fenced block, then the first balanced ' +
            'object. Rows are normalised and the bad ones are dropped and reported.',
          es:
            'La respuesta se interpreta como JSON puro, luego como bloque de código y luego ' +
            'como el primer objeto balanceado. Las filas se normalizan y las inválidas se ' +
            'descartan y se reportan.',
        },
      },
      {
        title: { en: 'Review and merge', es: 'Revisión y fusión' },
        body: {
          en:
            'You check the rows before saving. They are upserted by pay period into a per-user ' +
            'Firestore collection.',
          es:
            'Revisas las filas antes de guardar. Se insertan o actualizan por periodo de pago en ' +
            'una colección de Firestore por usuario.',
        },
      },
    ],
    highlights: [
      {
        title: { en: 'The Australian financial year', es: 'El año fiscal australiano' },
        body: {
          en:
            'Year to date starts on 1 July. Filter by date preset and employer, with a delta ' +
            'against the previous window.',
          es:
            'El acumulado del año empieza el 1 de julio. Filtra por rango de fechas y empleador, ' +
            'con la variación frente al periodo anterior.',
        },
      },
      {
        title: { en: 'Hours against a threshold', es: 'Horas frente a un límite' },
        body: {
          en:
            'Hours re-bucket by week, fortnight or month, and the 24 h/week line scales with ' +
            'the bucket.',
          es:
            'Las horas se agrupan por semana, quincena o mes, y la línea de 24 h/semana se ' +
            'ajusta a cada agrupación.',
        },
      },
      {
        title: {
          en: 'Optimistic, offline-ready store',
          es: 'Store optimista y listo para trabajar sin conexión',
        },
        body: {
          en:
            'A small external store on useSyncExternalStore, backed by Firestore’s persistent ' +
            'multi-tab cache.',
          es:
            'Un pequeño store externo con useSyncExternalStore, respaldado por la caché ' +
            'persistente multipestaña de Firestore.',
        },
      },
      {
        title: { en: 'A painless migration', es: 'Una migración sin fricción' },
        body: {
          en:
            'Existing users’ data moved from IndexedDB to Firestore automatically, once, on ' +
            'their first load.',
          es:
            'Los datos de los usuarios existentes pasaron de IndexedDB a Firestore ' +
            'automáticamente, una sola vez, en su primera carga.',
        },
      },
    ],
    screens: [
      {
        src: paylipsEarnings,
        alt: {
          en:
            'Weekly earnings bar chart beside a donut splitting the total into net, tax, super ' +
            'and laundry.',
          es:
            'Gráfico de barras de ingresos semanales junto a una dona que divide el total en ' +
            'neto, impuestos, super y lavandería.',
        },
        caption: {
          en: 'Weekly earnings, and where each dollar went.',
          es: 'Ingresos semanales y a dónde fue cada dólar.',
        },
        file: 'src/assets/projects/paylips/earnings.webp',
      },
      {
        src: paylipsHours,
        alt: {
          en: 'Hours worked per fortnight against a dashed 48-hour threshold line.',
          es: 'Horas trabajadas por quincena frente a una línea discontinua de 48 horas.',
        },
        caption: {
          en: 'Hours per fortnight against the 48 h threshold.',
          es: 'Horas por quincena frente al límite de 48 h.',
        },
        file: 'src/assets/projects/paylips/hours.webp',
      },
      {
        src: paylipsPayslips,
        alt: {
          en: 'Table of pay periods with hours, gross, laundry, tax, super and net, plus totals.',
          es:
            'Tabla de periodos de pago con horas, bruto, lavandería, impuestos, super y neto, ' +
            'más totales.',
        },
        caption: {
          en: 'Every pay period in one table, with totals.',
          es: 'Todos los periodos de pago en una tabla, con totales.',
        },
        file: 'src/assets/projects/paylips/payslips.webp',
      },
      {
        src: paylipsUpload,
        alt: {
          en: 'Paylips AUS upload screen with a drop zone for a payslip PDF.',
          es: 'Pantalla de carga de Paylips AUS con una zona para soltar el PDF de un recibo.',
        },
        caption: {
          en: 'Upload: drop a PDF and a vision model reads it.',
          es: 'Carga: suelta un PDF y un modelo de visión lo lee.',
        },
        file: 'src/assets/projects/paylips/upload.webp',
      },
    ],
  },
  {
    slug: 'fincoai',
    name: 'FincoAI',
    status: 'wip',
    tagline: {
      en: 'AI-assisted personal bookkeeping in Colombian pesos.',
      es: 'Contabilidad personal asistida por IA, en pesos colombianos.',
    },
    summary: {
      en:
        'Describe a purchase in plain words and FincoAI records it as a balanced double-entry ' +
        'journal entry against a PUC-style chart of accounts.',
      es:
        'Describe una compra con tus palabras y FincoAI la registra como un asiento contable de ' +
        'partida doble, cuadrado, sobre un plan de cuentas tipo PUC.',
    },
    overview: {
      en: [
        'Double-entry bookkeeping is the most reliable way to know where your money goes, and ' +
          'the most tedious to keep up by hand.',
        'FincoAI keeps the rigour and drops the tedium. You tell a chat agent what happened (“I ' +
          'paid 80,000 for petrol with my Nubank card”) and it saves a balanced entry against ' +
          'your own chart of accounts, asking when something is missing instead of guessing.',
      ],
      es: [
        'La contabilidad de partida doble es la forma más confiable de saber a dónde va tu ' +
          'dinero, y la más tediosa de llevar a mano.',
        'FincoAI conserva el rigor y elimina lo tedioso. Le cuentas a un agente de chat qué pasó ' +
          '(«Pagué 80.000 de gasolina con mi tarjeta Nubank») y guarda un asiento cuadrado sobre ' +
          'tu propio plan de cuentas, preguntando cuando falta algo en lugar de adivinar.',
      ],
    },
    links: [],
    stack: ['Django', 'Firebase Auth', 'LangChain', 'Ollama Cloud (Gemma 4)'],
    cover: {
      alt: {
        en: 'FincoAI chat agent turning a sentence into a journal entry.',
        es: 'Agente de chat de FincoAI convirtiendo una frase en un asiento contable.',
      },
      caption: {
        en: 'Chat agent: a sentence becomes a balanced entry.',
        es: 'Agente de chat: una frase se convierte en un asiento cuadrado.',
      },
      file: 'src/assets/projects/fincoai/chat.png',
    },
    steps: [
      {
        title: { en: 'Describe the movement', es: 'Describe el movimiento' },
        body: {
          en: 'Write it the way you would say it: the amount, what it was for and how you paid.',
          es: 'Escríbelo como lo dirías: el monto, en qué fue y cómo pagaste.',
        },
      },
      {
        title: { en: 'The agent asks what’s missing', es: 'El agente pregunta lo que falta' },
        body: {
          en:
            'If the amount, category or payment method is unclear, it asks. It never assumes ' +
            'how you paid.',
          es:
            'Si el monto, la categoría o el medio de pago no están claros, pregunta. Nunca asume ' +
            'cómo pagaste.',
        },
      },
      {
        title: {
          en: 'The model picks accounts through tools',
          es: 'El modelo elige cuentas mediante herramientas',
        },
        body: {
          en:
            'LangChain tools check every rule. A new account is only proposed when nothing ' +
            'fits, and only created when you tap Create account.',
          es:
            'Las herramientas de LangChain validan cada regla. Solo propone una cuenta nueva ' +
            'cuando ninguna encaja, y solo la crea cuando tocas Crear cuenta.',
        },
      },
      {
        title: { en: 'The server builds the entry', es: 'El servidor arma el asiento' },
        body: {
          en:
            'Balanced lines are built server-side, never by the model, and each entry links ' +
            'back to the message that created it.',
          es:
            'Las líneas cuadradas se construyen en el servidor, nunca en el modelo, y cada ' +
            'asiento enlaza al mensaje que lo creó.',
        },
      },
    ],
    highlights: [
      {
        title: { en: 'Balanced, enforced three times', es: 'Cuadrado, validado tres veces' },
        body: {
          en:
            'Every line is a debit or a credit, and debits must equal credits, checked in the ' +
            'UI, the API and the database.',
          es:
            'Cada línea es un débito o un crédito, y los débitos deben igualar a los créditos: ' +
            'se valida en la interfaz, la API y la base de datos.',
        },
      },
      {
        title: { en: 'A chart of accounts per user', es: 'Un plan de cuentas por usuario' },
        body: {
          en:
            'Clase → Grupo → Cuenta → Subcuenta, PUC-style. Every new user gets a default chart ' +
            'of 43 accounts.',
          es:
            'Clase → Grupo → Cuenta → Subcuenta, al estilo PUC. Cada usuario nuevo recibe un ' +
            'plan por defecto de 43 cuentas.',
        },
      },
      {
        title: { en: 'Conversation memory', es: 'Memoria de conversación' },
        body: {
          en: '“Same as the first one, but 30,000” works. Long chats are summarised automatically.',
          es:
            '«Igual que el primero, pero de 30.000» funciona. Las conversaciones largas se ' +
            'resumen automáticamente.',
        },
      },
      {
        title: {
          en: 'Firebase everywhere, even the admin',
          es: 'Firebase en todo, incluso en el admin',
        },
        body: {
          en:
            'Every API call verifies the ID token, and Django admin signs in through Firebase ' +
            'behind an allow-list.',
          es:
            'Cada llamada a la API verifica el token de ID, y el admin de Django inicia sesión ' +
            'con Firebase tras una lista de acceso permitido.',
        },
      },
      {
        title: { en: 'Your colour, accessible', es: 'Tu color, accesible' },
        body: {
          en: 'Pick a preset or any colour. The scale is generated with WCAG contrast guaranteed.',
          es:
            'Elige un color predefinido o cualquier otro. La escala se genera con contraste WCAG ' +
            'garantizado.',
        },
      },
      {
        title: { en: 'Monthly dashboard', es: 'Panel mensual' },
        body: {
          en:
            'Net worth, income, expenses and net for any month, plus six months of income ' +
            'against expenses.',
          es:
            'Patrimonio, ingresos, gastos y neto de cualquier mes, más seis meses de ingresos ' +
            'frente a gastos.',
        },
      },
    ],
    screens: [
      {
        alt: {
          en: 'FincoAI dashboard with monthly net worth, income and expenses.',
          es: 'Panel de FincoAI con patrimonio, ingresos y gastos del mes.',
        },
        caption: {
          en: 'Dashboard: the month at a glance, compared with the last.',
          es: 'Panel: el mes de un vistazo, comparado con el anterior.',
        },
        file: 'src/assets/projects/fincoai/dashboard.png',
      },
      {
        alt: {
          en: 'FincoAI ledger form with debit and credit lines.',
          es: 'Formulario del libro diario de FincoAI con líneas de débito y crédito.',
        },
        caption: {
          en: 'Ledger: entries can’t be saved until they balance.',
          es: 'Libro diario: los asientos no se guardan hasta que cuadran.',
        },
        file: 'src/assets/projects/fincoai/ledger.png',
      },
      {
        alt: {
          en: 'FincoAI chart of accounts as a nested tree.',
          es: 'Plan de cuentas de FincoAI como un árbol anidado.',
        },
        caption: {
          en: 'Chart of accounts: Clase → Grupo → Cuenta → Subcuenta.',
          es: 'Plan de cuentas: Clase → Grupo → Cuenta → Subcuenta.',
        },
        file: 'src/assets/projects/fincoai/accounts.png',
      },
      {
        alt: {
          en: 'FincoAI appearance settings with colour presets.',
          es: 'Ajustes de apariencia de FincoAI con colores predefinidos.',
        },
        caption: {
          en: 'Appearance: eight presets or a custom colour.',
          es: 'Apariencia: ocho colores predefinidos o uno personalizado.',
        },
        file: 'src/assets/projects/fincoai/appearance.png',
      },
    ],
  },
];

export const findProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
