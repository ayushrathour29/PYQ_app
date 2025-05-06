# Question Papers App

## Description
Question Papers App is a React-based web application that allows users to browse, search, and filter question papers by subject and title. It provides an intuitive interface for users to find relevant question papers easily. The app also includes an admin page where new question papers can be uploaded (currently simulated).

## Features
- **User Page:** Browse a collection of question papers with search and filter functionality by subject.
- **Admin Page:** Upload new question papers by providing title, year, subject, and PDF file (upload is simulated).

## Installation

### Prerequisites
- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd question-papers-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Run the development server
Start the app locally with hot reloading:
```bash
npm run dev
```
Open your browser and go to `http://localhost:5173` (or the URL shown in the terminal).

### Available Pages
- **User Page:** Accessible at `/` - browse and search question papers.
- **Admin Page:** Accessible at `/admin` - upload new question papers.

### Build for production
To create a production build:
```bash
npm run build
```

### Preview production build
To preview the production build locally:
```bash
npm run preview
```

## Project Structure
- `src/` - Source code including components and main app files.
- `public/` - Static assets.
- `package.json` - Project metadata and scripts.
- `vite.config.js` - Vite configuration.

## License
This project is licensed under the MIT License.
