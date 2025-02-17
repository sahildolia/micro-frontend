# React Micro-Frontend Architecture POC for Bluebash Assignment

This is a Proof of Concept (POC) for a Micro-Frontend Architecture using React and Module Federation. It includes a Host Application and two Micro-Frontends (Chat App and Email App), with shared components, Redux-based state management, and dynamic communication between apps.

## Folder Structure
```
mfe-main/
│
├── main-app/     # Host application
│   ├── src/      # Source code
│   ├── public/   # Static files
│   └── ...
│
├── chat-app/     # Micro-frontend for chat functionality
│   └── ...
│
└── email-app/    # Micro-frontend for email functionality
    └── ...
```

## Tools and Technologies Used
- **React 18** – Frontend library for building UI.
- **Webpack Module Federation** – For micro-frontend architecture and sharing code between apps.
- **Redux Toolkit** – For global state management and communication between micro-frontends.
- **React-Bootstrap** – For reusable components and styling.
- **Concurrently** – To run all three apps with a single command.

## Key Features Implemented
- **Micro-Frontend Architecture** using Module Federation.
- **Reusable Components** (`Header`, `Footer`, `Notification`, `Button`).
- **Redux-based Communication** between micro-frontends.
- **Single Command to Start All Apps** using `concurrently`.
- **Dynamic Import and URL Configuration** for micro-apps.
- **Interactive Chat App with real-time messaging** in chat-app.
- **Email App with compose form and inbox** in email-app.

## How to Set Up and Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sahildolia/micro-frontend.git
   ```

2. **Install Dependencies for All Apps:**
   ```bash
   cd mfe-main
   npm install --force
   cd main-app && npm install --force
   cd ../chat-app && npm install --force
   cd ../email-app && npm install --force
   ```

3. **Start All Apps Together:**
   ```bash
   npm start
   ```

4. **Access Applications:**
   - **Main App:** [http://localhost:3001](http://localhost:3001)
   - **Chat App:** [http://localhost:3002](http://localhost:3002)
   - **Email App:** [http://localhost:3003](http://localhost:3003)

## Architectural Decisions and Trade-offs
- **Module Federation** was chosen for its simplicity in creating micro-frontends and sharing code dynamically.
- **Redux Toolkit** was used for managing shared state across apps, ensuring seamless communication.
- **React-Bootstrap** was implemented for consistent design and reusable UI components.
- **Dynamic URLs** were set to allow flexibility in changing micro-frontend deployment paths.

## Challenges Faced and Solutions
- **Challenge:** Managing state between independently running micro-apps.
  - **Solution:** Used Redux shared from the Host app to ensure all apps communicate smoothly.
- **Challenge:** Running all apps separately during development.
  - **Solution:** Implemented `concurrently` to start all apps with a single command.

## Future Improvements
- Add more micro-frontends dynamically.
- Enhance the UI for better user experience.
- Implement lazy loading for better performance.