# 3D Portfolio

A modern, interactive 3D portfolio website built with React, Three.js, and React Three Fiber.

## ✨ Features

- **Interactive 3D Models**: Immersive 3D environments with animated models
- **Responsive Design**: Optimized for all device sizes
- **Modern Tech Stack**: Built with latest React 18, Vite 6, and Three.js
- **Email Integration**: Contact form powered by EmailJS
- **Performance Optimized**: Code splitting and asset optimization
- **Clean Architecture**: Well-structured components and modern practices

## 🚀 Tech Stack

- **Frontend**: React 18, Three.js, React Three Fiber/Drei
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 6
- **Email**: EmailJS
- **Deployment**: Cloudflare Pages
- **Development**: ESLint 9 (Flat Config)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajivranjanmars/3D_portfolio.git
   cd 3D_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your EmailJS credentials:
   - `VITE_APP_EMAILJS_SERVICE_ID`
   - `VITE_APP_EMAILJS_TEMPLATE_ID`
   - `VITE_APP_EMAILJS_PUBLIC_KEY`

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. **Using Wrangler CLI**
   ```bash
   npm run build
   npx wrangler pages deploy dist
   ```

2. **Using GitHub Actions**
   - Fork this repository
   - Add secrets to your GitHub repository:
     - `CLOUDFLARE_API_TOKEN`
     - `CLOUDFLARE_ACCOUNT_ID`
     - `VITE_APP_EMAILJS_SERVICE_ID`
     - `VITE_APP_EMAILJS_TEMPLATE_ID`
     - `VITE_APP_EMAILJS_PUBLIC_KEY`
   - Push to main branch for automatic deployment

### Manual Deployment
   ```bash
   npm run build
   # Upload the 'dist' folder to your hosting provider
   ```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── models/            # 3D model components
├── pages/             # Main page components
├── assets/            # Static assets (images, 3D models, audio)
├── constants/         # Configuration and data
├── hooks/             # Custom React hooks
└── index.css          # Global styles
```

## 🎨 Customization

- **3D Models**: Replace GLB files in `src/assets/3d/`
- **Styling**: Modify Tailwind classes or `src/index.css`
- **Content**: Update data in `src/constants/index.js`
- **Components**: Customize components in respective folders

## 📱 Performance

- **Code Splitting**: Automatic chunk splitting for vendors and Three.js
- **Asset Optimization**: Optimized 3D models and images
- **Lazy Loading**: Components loaded on demand
- **CDN Delivery**: Fast global delivery via Cloudflare

## 🔧 Development

- **Linting**: `npm run lint`
- **Development**: `npm run dev`
- **Preview**: `npm run preview`
- **Build**: `npm run build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Rajiv Ranjan**
- GitHub: [@rajivranjanmars](https://github.com/rajivranjanmars)
- Email: rajivranjanmars@gmail.com

---

⭐ Star this repository if you find it helpful!

## Repository overview

Interactive personal portfolio built with React, Three.js, React Three Fiber, and Vite. Visitors can explore an animated 3D island, browse projects and experience, and send messages through EmailJS.

## Author

Author: [rajivranjanmars](https://rajivranjana.in).
