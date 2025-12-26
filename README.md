# PSN Taraba State Chapter Welfare Registry

Welcome to the Pharmaceutical Society of Nigeria (PSN) Taraba State Chapter Welfare Registry project. This web application is designed to facilitate member registration, profile management, and administrative functions while ensuring compliance with NDPR/NDPA regulations.

## Features

- **Member Registration**: New members can easily register and create their profiles.
- **Profile Management**: Members can view and edit their profiles.
- **Admin Dashboard**: Admins can manage members and events efficiently.
- **Automated Email Reminders**: The system sends automated reminders for upcoming events and deadlines.
- **Compliance**: The application adheres to NDPR/NDPA regulations to protect user data.

## Project Structure

The project is organized into several directories:

- **web**: Contains the front-end application built with React.
  - **public**: Holds the main HTML file and manifest.
  - **src**: Contains the source code, including components, pages, and styles.
- **api**: Contains serverless functions for handling backend logic.
- **server**: The Express server setup for handling API requests.
- **db**: Database schema and migration files.
- **scripts**: Scripts for sending reminders and generating compliance reports.
- **docs**: Documentation related to compliance and policies.
- **tests**: Contains test cases for both the web and API components.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```
   git clone https://github.com/yourusername/psn-taraba-welfare-registry.git
   ```

2. **Install Dependencies**:
   Navigate to the `web` and `api` directories and run:
   ```
   npm install
   ```

3. **Run the Application**:
   - For the web application:
     ```
     npm start
     ```
   - For the server:
     ```
     npm run start
     ```

4. **Access the Application**:
   Open your browser and go to `http://localhost:3000` to view the application.

## Compliance

This project is committed to protecting user data and ensuring compliance with NDPR/NDPA regulations. Please refer to the documentation in the `docs` directory for more information on our privacy policy and data retention practices.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.