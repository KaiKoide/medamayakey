# Recipe Search Web Application

This application is a recipe search web app built with Next.js. It fetches recipes from an API and allows users to filter, favorite, and explore recipe details. User login is securely managed using OAuth.

## Key Features

- **Recipe Search**: Search for various recipes using an external API.
- **Filter Functionality**: Narrow down recipes based on categories or ingredients.
- **Favorite Feature**: Save favorite recipes for easy access later.
- **Detail View**: View detailed information about a selected recipe, such as ingredients and instructions.
- **Recipe Saving**: Save selected recipes to a database for user management.
- **User Login**: Secure user login with OAuth, keeping user information safe.

## Technologies Used

- Next.js
- API integration
- OAuth authentication
- Database

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/KaiKoide/medamayakey.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables (for OAuth and API keys).

    Create a `.env.local` file in the root directory of your project and add the following environment variables:

    ```bash
    # spoonacular API
    SPOONACULAR_API_KEY=

    # firebase config
    FIREBASE_API_KEY=
    FIREBASE_AUTH_DOMAIN=
    FIREBASE_PROJECT_ID=
    FIREBASE_STORAGE_BUCKET=
    FIREBASE_MESSAGING_SENDER_ID=
    FIREBASE_APP_ID=

    # clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Visit http://localhost:3000 in your browser to access the application.

