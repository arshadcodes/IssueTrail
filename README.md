# IssueTrail

[![Issues](https://img.shields.io/github/issues/arshadcodes/IssueTrail)](https://github.com/arshadcodes/IssueTrail/issues)
[![Stars](https://img.shields.io/github/stars/arshadcodes/IssueTrail)](https://github.com/arshadcodes/IssueTrail/stargazers)
[![Forks](https://img.shields.io/github/forks/arshadcodes/IssueTrail)](https://github.com/arshadcodes/IssueTrail/network/members)

## <a name="overview"></a>Overview

**IssueTrail** is an open-source project aimed at helping students, developers, mentors, and organizations manage issues, tasks, and progress for Google Summer of Code (GSOC) projects efficiently. It tracks issues, deadlines, and allows collaboration in an intuitive way. We invite developers from all around the world to contribute and help improve the project.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)

## <a name="features"></a>Features

- **Issue Tracking**: Create, update, assign issues for GSOC projects.
- **Task Prioritization**: Set priority levels for tasks and assign them to team members.
- **Milestone Management**: Organize tasks into milestones with deadlines.
- **Commenting**: Collaborate by adding comments and discussions on individual issues.
- **Search and Filter**: Quickly find issues based on status, assignee, priority, or labels.
- **Notifications**: Receive notifications on issue changes or updates.
- **User Roles**: Manage permissions for contributors, mentors, and admins.

## <a name="tech-stack"></a>Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Version Control**: Git & GitHub for collaboration
- **Authentication**: OAuth2 (Google Authentication)
- **Deployment**: Docker & Kubernetes (optional)

## <a name="installation"></a>Installation

### <a name="prerequisites"></a>Prerequisites

- Node.js (v14 or above)
- MongoDB
- Git

### <a name="setup"></a>Setup

1. Clone the repository:

```bash
   git clone https://github.com/arshadcodes/IssueTrail.git
   cd issue-trail
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file with the following variables:

```
MONGODB_URI=<your-mongodb-connection-string>
OAUTH_CLIENT_ID=<your-google-oauth-client-id>
OAUTH_CLIENT_SECRET=<your-google-oauth-client-secret>
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser at http://localhost:3000.

## <a name="usage"></a>🚀 Usage

Once the server is running, you can:

- Create a new issue
- Assign issues to team members
- Comment and collaborate on issues
- Mark issues as completed
- View and manage milestones
  To log in, use your Google account via OAuth2.

## <a name="maintainers"></a>Maintainers

### 👥 Meet the team!

We're a passionate group of contributors dedicated to making this project awesome! 🎉 Feel free to connect with us on GitHub, Twitter, or LinkedIn!

| Maintainer                                                                                    | GitHub                                                                                                                                              | Twitter                                                                                                                                          | LinkedIn                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Avatar](https://avatars.githubusercontent.com/u/183396171?s=64&v=4) **Arshad Khan**         | [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/arshadcodes)      | [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/arshadcodes)      | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thearshadkhan/)                   |
| ![Avatar](https://avatars.githubusercontent.com/u/105539123?s=64&v=4) **Aditya Kumar Mishra** | [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/adityakmrmishra/) | [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/adityakmrmishra) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aditya-kumar-mishra-6a025b216) |
| ![Avatar](https://avatars.githubusercontent.com/u/91797653?s=64&v=4) **Abdul Mannan**         | [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Abdul-365)        | [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/Abdul_365m)      | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abdulmannan365/)               |
| ![Avatar](https://avatars.githubusercontent.com/u/124447041?s=64&v=4) **Kapil Singh Negi**    | [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kapilsinghnegi)   | [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/kapilsinghnegi_) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/kapil-singh-negi/)                 |
| ![Avatar](https://avatars.githubusercontent.com/u/121952213?s=64&v=4) **Aqib Ansari**         | [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mohdaqibansari)   | [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/mohdaqibansari_) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mohdaqibansari)                    |
| ![Avatar](https://avatars.githubusercontent.com/u/118008566?s=64&v=4) **Harsh Singh**         | [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/harshsingh69)     | [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/harshlitcode)    | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harshs-code/)                  |
| ![Avatar](https://avatars.githubusercontent.com/u/118688453?s=64&v=4) **Arish Malik**         | [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mohdarish4)       | [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/mohdarish24)     | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohd-arish-8a874a221/)         |

## <a name="contributing"></a>Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding new features, improving documentation, or simply reporting issues, your help is greatly appreciated. To contribute:

1. Fork the repository: Click the "Fork" button at the top right of this repository page.
2. Clone your fork:

```bash
git clone https://github.com/your-username/gsoc-issue-tracker.git

```

3. Create a new branch: Make sure you create a feature branch for your contributions:

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and commit: Implement your feature or fix the issue. Ensure that all tests pass and the application works as expected before committing:

```bash
git commit -m 'Add some feature'
```

5. Push to your branch:

```bash
git push origin feature/your-feature-name
```

6. Create a Pull Request: Open a pull request (PR) to the main repository and describe your changes. Link any relevant issues.
   Make sure your code adheres to our Code of Conduct and Contributing Guidelines.

We would love for you to join us! If you want to contribute to the project, please check the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information on how to do so. Any contributions are welcome and appreciated. Thank you for being a part of IssueTrail!

We’re excited to see your contributions!
