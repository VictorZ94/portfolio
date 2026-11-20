import paylipsUpload from '../assets/projects/paylips/upload.png';
import paylipsLogin from '../assets/projects/paylips/login.png';

/**
 * A screenshot slot. Leave `src` out to render a labelled placeholder; to fill
 * it, save the image at `file`, import it at the top of this module and set `src`.
 */
export interface Shot {
  src?: string;
  alt: string;
  caption: string;
  file: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  status: 'Live' | 'In progress';
  tagline: string;
  summary: string;
  overview: string[];
  /** Hostname shown in the screenshot frame's address bar. */
  host?: string;
  links: ProjectLink[];
  stack: string[];
  cover: Shot;
  steps: { title: string; body: string }[];
  highlights: { title: string; body: string }[];
  screens: Shot[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'paylips-aus',
    name: 'Paylips AUS',
    status: 'Live',
    tagline: 'Turns Australian payslip PDFs into a personal income dashboard.',
    summary:
      'Drop in a payslip PDF and a vision model reads it into structured rows. You review them, ' +
      'and the dashboard tracks income and hours across employers and the financial year.',
    overview: [
      'Payslips arrive as PDFs in a different layout from every employer, which makes it hard to ' +
        'see what you actually earned and worked over a month or a financial year.',
      'Paylips AUS reads them for you. The PDF is rendered in the browser, a vision model extracts ' +
        'nine fields per pay period, and you confirm the rows before they are saved to your ' +
        'account. The dashboard then answers the questions a pile of PDFs can’t.',
    ],
    host: 'paylips-aus.vercel.app',
    links: [
      { label: 'Live site', href: 'https://paylips-aus.vercel.app/' },
      { label: 'Source', href: 'https://github.com/VictorZ94/paylips_aus' },
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
      src: paylipsUpload,
      alt: 'Paylips AUS upload screen with a drop zone for a payslip PDF.',
      caption: 'Upload: drop a PDF and the pages are read by a vision model.',
      file: 'src/assets/projects/paylips/upload.png',
    },
    steps: [
      {
        title: 'Render in the browser',
        body:
          'pdf.js rasterises up to six pages to images on the device. The PDF itself is never ' +
          'uploaded.',
      },
      {
        title: 'Extract with a vision model',
        body:
          'A Next.js route handler sends the pages to an Ollama Cloud vision model, with a JSON ' +
          'schema as the structured-output format.',
      },
      {
        title: 'Parse defensively',
        body:
          'The reply is read as raw JSON, then a fenced block, then the first balanced object. ' +
          'Rows are normalised and the bad ones are dropped and reported.',
      },
      {
        title: 'Review and merge',
        body:
          'You check the rows before saving. They are upserted by pay period into a per-user ' +
          'Firestore collection.',
      },
    ],
    highlights: [
      {
        title: 'The Australian financial year',
        body:
          'Year to date starts on 1 July. Filter by date preset and employer, with a delta ' +
          'against the previous window.',
      },
      {
        title: 'Hours against a threshold',
        body:
          'Hours re-bucket by week, fortnight or month, and the 24 h/week line scales with the ' +
          'bucket.',
      },
      {
        title: 'Optimistic, offline-ready store',
        body:
          'A small external store on useSyncExternalStore, backed by Firestore’s persistent ' +
          'multi-tab cache.',
      },
      {
        title: 'A painless migration',
        body:
          'Existing users’ data moved from IndexedDB to Firestore automatically, once, on their ' +
          'first load.',
      },
    ],
    screens: [
      {
        alt: 'Paylips AUS dashboard with income KPIs and weekly charts.',
        caption: 'Dashboard: income, hours and breakdown by employer.',
        file: 'src/assets/projects/paylips/dashboard.png',
      },
      {
        alt: 'Table of rows extracted from a payslip, ready for review.',
        caption: 'Review: confirm the extracted rows before saving.',
        file: 'src/assets/projects/paylips/review.png',
      },
      {
        src: paylipsLogin,
        alt: 'Paylips AUS sign-in card with email, password and Google sign-in.',
        caption: 'Sign in with email or Google.',
        file: 'src/assets/projects/paylips/login.png',
      },
    ],
  },
  {
    slug: 'fincoai',
    name: 'FincoAI',
    status: 'In progress',
    tagline: 'AI-assisted personal bookkeeping in Colombian pesos.',
    summary:
      'Describe a purchase in plain words and FincoAI records it as a balanced double-entry ' +
      'journal entry against a PUC-style chart of accounts.',
    overview: [
      'Double-entry bookkeeping is the most reliable way to know where your money goes, and the ' +
        'most tedious to keep up by hand.',
      'FincoAI keeps the rigour and drops the tedium. You tell a chat agent what happened (“I paid ' +
        '80,000 for petrol with my Nubank card”) and it saves a balanced entry against your own ' +
        'chart of accounts, asking when something is missing instead of guessing.',
    ],
    links: [],
    stack: ['Django', 'Firebase Auth', 'LangChain', 'Ollama Cloud (Gemma 4)'],
    cover: {
      alt: 'FincoAI chat agent turning a sentence into a journal entry.',
      caption: 'Chat agent: a sentence becomes a balanced entry.',
      file: 'src/assets/projects/fincoai/chat.png',
    },
    steps: [
      {
        title: 'Describe the movement',
        body: 'Write it the way you would say it: the amount, what it was for and how you paid.',
      },
      {
        title: 'The agent asks what’s missing',
        body:
          'If the amount, category or payment method is unclear, it asks. It never assumes how ' +
          'you paid.',
      },
      {
        title: 'The model picks accounts through tools',
        body:
          'LangChain tools check every rule. A new account is only proposed when nothing fits, ' +
          'and only created when you tap Create account.',
      },
      {
        title: 'The server builds the entry',
        body:
          'Balanced lines are built server-side, never by the model, and each entry links back to ' +
          'the message that created it.',
      },
    ],
    highlights: [
      {
        title: 'Balanced, enforced three times',
        body:
          'Every line is a debit or a credit, and debits must equal credits, checked in the UI, ' +
          'the API and the database.',
      },
      {
        title: 'A chart of accounts per user',
        body:
          'Clase → Grupo → Cuenta → Subcuenta, PUC-style. Every new user gets a default chart of ' +
          '43 accounts.',
      },
      {
        title: 'Conversation memory',
        body:
          '“Same as the first one, but 30,000” works. Long chats are summarised automatically.',
      },
      {
        title: 'Firebase everywhere, even the admin',
        body:
          'Every API call verifies the ID token, and Django admin signs in through Firebase ' +
          'behind an allow-list.',
      },
      {
        title: 'Your colour, accessible',
        body:
          'Pick a preset or any colour. The scale is generated with WCAG contrast guaranteed.',
      },
      {
        title: 'Monthly dashboard',
        body:
          'Net worth, income, expenses and net for any month, plus six months of income against ' +
          'expenses.',
      },
    ],
    screens: [
      {
        alt: 'FincoAI dashboard with monthly net worth, income and expenses.',
        caption: 'Dashboard: the month at a glance, compared with the last.',
        file: 'src/assets/projects/fincoai/dashboard.png',
      },
      {
        alt: 'FincoAI ledger form with debit and credit lines.',
        caption: 'Ledger: entries can’t be saved until they balance.',
        file: 'src/assets/projects/fincoai/ledger.png',
      },
      {
        alt: 'FincoAI chart of accounts as a nested tree.',
        caption: 'Chart of accounts: Clase → Grupo → Cuenta → Subcuenta.',
        file: 'src/assets/projects/fincoai/accounts.png',
      },
      {
        alt: 'FincoAI appearance settings with colour presets.',
        caption: 'Appearance: eight presets or a custom colour.',
        file: 'src/assets/projects/fincoai/appearance.png',
      },
    ],
  },
];

export const findProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
