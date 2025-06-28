# BlueChat

BlueChat is a modern, responsive chat interface built with React. It features a sidebar for chat navigation and segmentation, a main chat window for real-time messaging, and a user profile panel with detailed information and actions. The UI is styled with Tailwind CSS and leverages Material UI and Heroicons for a polished look.

![image](https://github.com/user-attachments/assets/41954c7a-cfc6-44c8-843d-3db9014e5f8e)

## Features

- **Sidebar**
  - Switch between "Messages" and "Segments" tabs.
  - View recent chats with avatars, message previews, and platform indicators (Messenger, WhatsApp, Instagram).
  - Segment users by behavior (e.g., Abandoned Cart, First Time Visitors, Regular Customers).
- **Chat Window**
  - Conversational message display.
  - Fixed header with chat participant info and status.
  - Scrollable message area.
  - Input area with attachment, emoji, and send options.
- **User Profile**
  - User avatar, name, location, and local time.
  - Action buttons for call, video, and more.
  - Stats cards for revenue and web visits.
  - Information section (segment, email, phone, last visited).
  - Tag management.

## Tech Stack

- React (Create React App)
- Tailwind CSS
- Material UI
- Heroicons
- React Router

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts
- `npm start` – Run the app in development mode.
- `npm test` – Launch the test runner.
- `npm run build` – Build for production.
- `npm run eject` – Eject configuration (not recommended for most users).

## File Structure

- `src/components/Sidebar.jsx` – Sidebar navigation and segmentation.
- `src/components/ChatWindow.jsx` – Main chat interface.
- `src/components/UserProfile.jsx` – User profile and details panel.
- `src/App.js` – Main layout combining all components.

## License

This project is for demonstration and educational purposes.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
