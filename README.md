# 🔍 DeeepStar Search

**A modern, AI-powered research assistant that helps you search, read, and connect information from across the web.**

DeeepStar Search is a beautiful, minimal web application that leverages the [Tavily API](https://tavily.com/) to perform deep web searches with AI-powered context understanding. It goes beyond surface answers to deliver comprehensive research results with citations, images, and intelligent filtering.

![DeeepStar Search Banner](https://img.shields.io/badge/Built%20with-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
<img width="1440" height="696" alt="Banner" src="https://github.com/user-attachments/assets/fac2368a-6579-4305-8a61-7634b3200720" />

---

## ✨ Features

### 🎨 **Beautiful Modern UI**
- Clean, brutalist design with smooth animations
- Responsive layout that works on all devices
- Dark mode optimized color scheme
- Elegant loading states with shimmer animations

### 🔎 **Advanced Search Capabilities**
- **Deep Search**: Advanced web crawling with content extraction
- **AI-Powered Answers**: Get concise summaries powered by AI
- **Image Search**: Find and display relevant images from search results
- **Domain Filtering**: Include or exclude specific domains
- **Time Range Filtering**: Filter results by recency (day, week, month, year)
- **Customizable Results**: Adjust the number of results (1-20)

### 💬 **Chat Interface**
- Interactive chat-style interface for queries
- Real-time search with typing indicators
- Suggestion chips for quick searches
- Reset functionality to start fresh
- URL query parameters for shareable searches

### 🎯 **Progressive Disclosure**
- Advanced options hidden by default
- Clean, focused search experience
- Easy access to powerful features when needed

### 🔗 **Source Attribution**
- Clear source citations for every result
- Domain chips with visual hierarchy
- Clickable links to original sources
- Content previews for context

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- A **Tavily API Key** (get one at [tavily.com](https://tavily.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vrun-design/agent-search.git
   cd agent-search
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Tavily API key:
   ```env
   TAVILY_API_KEY=tvly-your-api-key-here
   PORT=3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 📖 Usage

### Basic Search

1. Navigate to the homepage
2. Enter your search query in the input field
3. Press Enter or click the send button
4. View comprehensive results with AI-generated answers, sources, and images

### Advanced Search Options

Click **"Advanced Options"** to access:

- **Max Results**: Number of search results (1-20, default: 4)
- **Time Range**: Filter by recency (Any, Day, Week, Month, Year)
- **Include Domains**: Whitelist specific domains (e.g., `github.com`)
- **Exclude Domains**: Blacklist specific domains

*Note: Search depth, content per result, and image/answer inclusion are enabled by default for optimal results.*

### Chat Interface

Navigate to `/chat.html` or click suggestions to enter chat mode:

- Ask follow-up questions
- Use suggestion chips for quick searches
- Click "Reset" to clear conversation history
- Use emoji buttons to add sources (📎) or adjust settings (⚙️)

### URL Parameters

Share searches with URL parameters:

```
/chat.html?q=AI%20agents&max_results=10&time_range=week&include_domains=github.com
```

**Supported parameters:**
- `q` - Search query
- `depth` - Search depth (`basic` or `advanced`)
- `max_results` - Number of results (1-20)
- `max_content_per_result` - Content snippets per result (1-3)
- `time_range` - Filter by time (`day`, `week`, `month`, `year`)
- `include_images` - Include images (`true`/`false`)
- `include_answer` - Include AI answer (`true`/`false`)
- `include_domains` - Comma-separated domains to include
- `exclude_domains` - Comma-separated domains to exclude

---

## 🏗️ Project Structure

```
agent-search/
├── index.html          # Homepage with search form
├── chat.html           # Chat interface for interactive queries
├── styles.css          # All styling (brutalist design system)
├── server.js           # Express server with API proxy
├── package.json        # Dependencies and scripts
├── .env.example        # Environment variables template
├── .env               # Your environment variables (not tracked)
└── assets/
    ├── logo.svg        # Application logo
    ├── github-logo.svg # GitHub icon
    └── placeholder.svg # Image fallback
```

### Key Files

**`index.html`**
- Homepage with hero section
- Search form with progressive disclosure
- Advanced options panel
- Suggestion chips
- "How it works" section

**`chat.html`**
- Chat-style interface
- Floating composer with actions
- Suggestion chips
- Sources and advanced panels
- Real-time search results

**`styles.css`**
- Complete design system
- CSS variables for theming
- Responsive layouts
- Animation keyframes
- Component styling

**`server.js`**
- Express server setup
- API proxy to Tavily
- Static file serving
- CORS configuration
- Health check endpoint
- Environment variable validation

---

## 🛠️ API Reference

### Server Endpoints

#### `POST /api/search`

Perform a web search with Tavily API.

**Request Body:**
```json
{
  "query": "AI agents research",
  "topic": "general",
  "search_depth": "advanced",
  "max_results": 4,
  "include_answer": true,
  "include_images": true,
  "max_content_per_result": 2,
  "published_after": "week",
  "include_domains": ["github.com"],
  "exclude_domains": ["example.com"]
}
```

**Response:**
```json
{
  "answer": "AI agents are...",
  "query": "AI agents research",
  "results": [
    {
      "title": "Result title",
      "url": "https://example.com",
      "content": "Result content...",
      "score": 0.95
    }
  ],
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ]
}
```

#### `GET /api/health`

Health check endpoint.

**Response:**
```json
{
  "ok": true,
  "hasKey": true
}
```

---

## 🎨 Design System

### Typography

- **Primary Font**: Figtree (sans-serif) - Body text
- **Display Font**: Instrument Serif - Headings
- **UI Font**: Archivo - Buttons and labels

### Colors

```css
--blue: #306bff        /* Primary accent */
--blue-hover: #2757e6  /* Hover state */
--ink: #1c2024         /* Text/borders */
--paper: #fcfcfd       /* Light backgrounds */
--dot-bg: #f9f9fb      /* Page background */
--dot: #DEDEDE         /* Grid dots */
```

### Shadows

```css
--shadow-press: 0px 2px 0px 0px    /* Default button */
--shadow-lift: 0px 6px 0px 0px     /* Hover state */
```

### Components

- **Buttons**: Pill-shaped with hard shadows (brutalist style)
- **Cards**: Bordered with shadow, hover lift effect
- **Bubbles**: Chat message containers with animations
- **Chips**: Small pill buttons for suggestions/tags
- **Panels**: Floating panels with backdrop blur

---

## 🔒 Security & Privacy

### API Key Protection

- Tavily API key stored in `.env` (not tracked by git)
- Server-side API calls only
- No client-side key exposure
- CORS configuration for production

### Best Practices

- Environment variables for sensitive data
- `.gitignore` includes `.env`
- No hardcoded secrets
- Secure headers recommended for production

---

## 🚢 Deployment

### Environment Setup

For production deployment:

1. Set environment variables:
   ```env
   TAVILY_API_KEY=your-api-key
   PORT=3000
   NODE_ENV=production
   ```

2. Start production server:
   ```bash
   npm start
   ```

### Deployment Platforms

**Vercel / Netlify**
- Add environment variables in dashboard
- Deploy from GitHub repository
- Set build command: `npm install`
- Set start command: `npm start`

**Heroku**
```bash
heroku create agent-search-app
heroku config:set TAVILY_API_KEY=your-api-key
git push heroku main
```

**Railway / Render**
- Connect GitHub repository
- Add environment variables
- Auto-deploy on push

**Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Bugs

Open an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/OS information

### Feature Requests

Open an issue with:
- Clear description of the feature
- Use case and benefits
- Proposed implementation (optional)

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use semantic HTML
- Follow existing CSS patterns
- Comment complex logic
- Keep functions small and focused
- Use meaningful variable names

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **[Tavily](https://tavily.com/)** - Powerful search API
- **[Google Fonts](https://fonts.google.com/)** - Typography
- **Design Inspiration** - Brutalist web design movement

---

## 📚 Resources

- [Tavily API Documentation](https://docs.tavily.com/)
- [Express.js Documentation](https://expressjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## 📧 Contact

**Project Link**: [https://github.com/Vrun-design/agent-search](https://github.com/Vrun-design/agent-search)

---

## 🗺️ Roadmap

### Current Features ✅
- [x] Basic web search
- [x] Advanced search options
- [x] Chat interface
- [x] Image results
- [x] AI-powered answers
- [x] Domain filtering
- [x] Time range filtering
- [x] Responsive design

### Planned Features 🎯
- [ ] Visual knowledge map of concepts
- [ ] Search history
- [ ] Bookmark results
- [ ] Export to PDF/Markdown
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts
- [ ] Voice search
- [ ] Result caching
- [ ] Analytics dashboard

---

## ❓ FAQ

**Q: Do I need to pay for Tavily API?**  
A: Tavily offers a free tier with limited requests. Check their pricing page for details.

**Q: Can I use this without a Tavily API key?**  
A: No, the Tavily API key is required for search functionality.

**Q: Is my search data stored?**  
A: No, searches are not stored. All data flows through the Tavily API.

**Q: Can I customize the design?**  
A: Yes! Edit `styles.css` and modify the CSS variables to match your brand.

**Q: Does this work offline?**  
A: No, an internet connection is required for search functionality.

**Q: What browsers are supported?**  
A: All modern browsers (Chrome, Firefox, Safari, Edge). IE11 is not supported.

---

<div align="center">

**Made with ❤️ by the Vee**

⭐ Star this repo if you find it useful!

[Report Bug](https://github.com/Vrun-design/agent-search/issues) · [Request Feature](https://github.com/Vrun-design/agent-search/issues) · [Documentation](https://github.com/Vrun-design/agent-search/wiki)

</div>
