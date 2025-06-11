# 🧠 Virtual Assistant (MERN Stack + Voice)

A voice-powered virtual assistant built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Speech Recognition**, **Text-to-Speech**, and **Gemini API integration**. Ask questions by speaking, and the assistant will respond by voice and text.

## 🚀 Features

- 🎙️ Voice Input (SpeechRecognition API)
- 🗣️ Voice Output (Text-to-Speech)
- 🧠 Gemini AI Response Integration
- 💬 Chat History (stored in MongoDB)
- 👤 User Authentication (JWT-based)
- 🧾 Responsive UI with animated avatars
- 🌐 Deployable to Vercel + Render + MongoDB Atlas

---

## 📂 Project Structure

/client # React frontend
/server # Node.js/Express backend
.env # Environment variables
README.md


---

## 🧰 Tech Stack

| Part       | Technology                   |
|------------|------------------------------|
| Frontend   | React, TailwindCSS           |
| Voice      | Web Speech API               |
| Backend    | Node.js, Express             |
| Database   | MongoDB (Mongoose)           |
| Auth       | JWT, bcrypt                  |
| AI         | Gemini API (or GPT/OpenAI)   |
| Hosting    | Vercel (Frontend), Render (Backend), MongoDB Atlas |

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/virtual-assistant.git
cd virtual-assistant

2. Set Up the Backend

cd server
npm install

🔑 Create .env in server/

PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key

npm run dev

3. Set Up the Frontend

cd ../client
npm install

🌐 Create .env in client/

VITE_SERVER_URL=http://localhost:5000

npm run dev

💻 Usage

    Start the backend and frontend.

    Visit http://localhost:5173

    Click mic 🎤 button and speak.

    The assistant will:

        Listen

        Get AI response

        Speak it aloud

        Show it in chat

    History is saved for logged-in users.

📦 Deployment

    Frontend (React) → Deploy on Vercel

    Backend (Node) → Deploy on Render

    Database (MongoDB) → Use MongoDB Atlas

    Make sure to update .env files and CORS URLs when deploying.

📸 Screenshots
Feature	Preview
Chat UI	
Voice Interaction	
🧠 AI Model Used

    Gemini Pro via Google AI SDK (can also be replaced with OpenAI)

    Works with any AI that supports a prompt-response pattern

