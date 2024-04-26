# Drawing Tool

This is a simple drawing tool built using MERN stack with Next.js, Socket.IO for real-time collaboration, Redux Toolkit for state management, and React Redux for binding. It allows users to draw using the HTML canvas element and provides tools for different drawing actions.

## Installation

To install the dependencies, run:

```bash
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Features

- **Real-time Collaboration**: Utilizes Socket.IO for real-time collaboration, allowing multiple users to draw simultaneously.
- **State Management**: Uses Redux Toolkit for managing state across three main components.
- **Canvas Drawing**: Utilizes the Canvas API for drawing and creating lines.
- **FontAwesome Icons**: Integrates FontAwesome for scalable vector icons.
- **Classnames**: Utilizes classnames for conditional rendering of CSS classes.

## Folder Structure

The project structure is organized as follows:

- **`store.js`**: Contains the Redux store configuration. All three components share resources through this file.
- **`_app.js`**: Wraps the application, providing a centralized location for setting up Redux.
- **`slice`**: Contains logic related to the toolbox and menu components. Actions and reducers are organized within this folder.

## State Management

The state is managed using Redux Toolkit. The `toolbox` and `menu` components store their respective states within the Redux store. Changes in the toolbox are stored in the `toolbox` slice, while changes in the menu are stored in the `menu` slice. These states include visual states and actionable states.

## Dependencies

- `@fortawesome/fontawesome-svg-core`: FontAwesome for scalable vector icons.
- `classnames`: For conditional rendering of CSS classes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
