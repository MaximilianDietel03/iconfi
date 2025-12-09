# iCoFi

**Bestehe deine TK-Prüfung mit System.**

iCoFi is a modern flashcard application designed to help you prepare for your TK-Prüfung (German exam) using spaced repetition and an intuitive study interface.

## Features

- 🎯 **Spaced Repetition**: Powered by the FSRS (Free Spaced Repetition Scheduler) algorithm for optimal learning retention
- 📚 **Topic-Based Learning**: Organize flashcards by topics for structured study sessions
- 🎨 **Multiple Question Types**:
  - Multiple choice questions
  - Single choice questions
  - Order questions (drag and drop)
  - Match questions
- 🔐 **Authentication**: Secure user authentication with Supabase Auth
- 📊 **Progress Tracking**: Monitor your learning progress with detailed statistics
- 🌓 **Dark Mode**: Built-in dark/light theme support
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Backend**: [Supabase](https://supabase.com/)
  - Authentication
  - PostgreSQL Database
  - Real-time capabilities
- **Spaced Repetition**: [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs)
- **Drag & Drop**: [@dnd-kit](https://dndkit.com/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase project (get one free at [supabase.com](https://supabase.com))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd icofi
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
icofi/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── topics/            # Topics and flashcards pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── question-card/     # Question card components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility libraries
│   └── supabase/         # Supabase client configuration
└── .cursor/               # Cursor IDE rules and guidelines
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Schema

The application uses the following main tables:
- `topic` - Study topics
- `examination` - Exam sessions
- `question` - Flashcard questions
- `option` - Answer options for questions
- User progress and spaced repetition data

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your license here]
