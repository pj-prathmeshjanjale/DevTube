# DevTube 📺

**DevTube** is a scalable video sharing platform built with the MERN stack (MongoDB, Express, Node.js) and EJS, designed to deliver a high-performance video streaming experience. It leverages modern cloud infrastructure for media handling and authentication.

## 🚀 Live Demo
[Check out DevTube on Render](https://devtube.onrender.com) *(Replace with your actual URL)*

## ✨ Key Features

*   **Authentication & Security**: Secure login via Google OAuth 2.0 (Passport.js) and session management using MongoDB (`connect-mongo`).
*   **Video Management**: Seamless video upload with automatic CDN integration for optimized streaming.
*   **Media Optimization**:
    *   **ImageKit** integration for real-time image optimization (thumbnails, channel banners).
    *   **BunnyCDN** for high-speed, low-latency video delivery.
*   **Social Interactions**:
    *   Subscribe to channels.
    *   Like and comment on videos.
    *   Real-time notifications (Socket.io).
*   **Channel Analytics**: Dashboard for creators to track video performance.
*   **Responsive UI**: Mobile-first design using custom CSS and EJS templating.

## 🛠️ Technology Stack

*   **Backend**: Node.js, Express.js for RESTful APIs.
*   **Database**: MongoDB (Atlas) with Mongoose for schema modeling.
*   **Frontend**: EJS (Embedded JavaScript) for server-side rendering, Vanilla CSS.
*   **Authentication**: Passport.js (Google Strategy).
*   **Storage & CDN**: ImageKit (Images), BunnyCDN (Videos).
*   **Real-time**: Socket.io.
*   **Deployment**: Render (Web Service).

## 🗂️ System Architecture

1.  **Client**: Browser requests are handled by the Express server using EJS views.
2.  **Server**: Node.js handles API logic, authentication, and database interactions.
3.  **Media**: Uploads are processed not by the server disk but streamed directly to external storage providers (ImageKit/BunnyCDN) to ensure scalability and statelessness.
4.  **Database**: Metadata (users, video links, comments) is stored in MongoDB.

## 📦 Local Installation

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/pj-prathmeshjanjale/DevTube.git
    cd DevTube
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory and add the following keys:
    ```env
    NODE_ENV=development
    SERVER_PORT=3000
    HOST_URL=http://localhost:3000
    MONGODB_URI=your_mongodb_connection_string
    SESSION_SECRET=your_random_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    IMAGEKIT_PUBLIC_KEY=your_key
    IMAGEKIT_PRIVATE_KEY=your_key
    IMAGEKIT_URL_ENDPOINT=your_endpoint
    BUNNY_API_KEY=your_key
    BUNNY_LIBRARY_ID=your_id
    BUNNY_CDN_HOSTNAME=your_hostname
    BUNNY_TOKEN_KEY=your_token
    ```

4.  **Run the App**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` in your browser.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 👤 Author

**Prathamesh Janjale**
*   [GitHub](https://github.com/pj-prathmeshjanjale)
*   [LinkedIn](https://linkedin.com/in/prathmeshjanjale) *(Add your LinkedIn URL if you have one)*

---
*Built with ❤️ for the developer community.*
