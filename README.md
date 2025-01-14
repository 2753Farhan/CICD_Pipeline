# CI/CD Pipeline with Express.js, GitHub Actions, and Vercel

## Overview

This repo demonstrates a Simple Continuous Integration and Continuous Deployment (CI/CD) pipeline for an Express.js application.

###  Goals

The primary objectives are to:
- Create a  Express.js server
- Implement comprehensive unit testing
- Set up automated continuous integration
- Configure seamless continuous deployment

## 🛠 Technologies Used

- **Backend**: Express.js
- **Testing**: Jest, Supertest
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel
- **Version Control**: Git, GitHub

##  Features

### 1. Express.js Server
- Minimal, clean Express.js application
- Multiple endpoints demonstrating basic routing
- Environment-based configuration

### 2. Comprehensive Testing
- Unit tests covering all server endpoints
- Automated test execution in CI pipeline
- Multiple Node.js version compatibility checks

### 3. Continuous Integration
- Automated testing on every push and pull request
- Runs tests across multiple Node.js versions (18.x, 20.x, 22.x)
- Ensures code quality and compatibility

### 4. Deployment Strategy
- Preview deployments for pull requests
- Automatic production deployments on main branch merge
- Seamless integration with Vercel

## 📦 Folder Structure

```
project-root/
│
├── .github/
│   └── workflows/
│       └── node.js.yml      # GitHub Actions workflow
│
├── app.js                   
│
├── server.js                    # Main Express.js application
│
├── test/
│   └── app.test.js               # Jest test suite
│
├── vercel.json                   # Vercel deployment configuration
│
├── package.json
└── README.md
```

## 🔧 Local Setup

### Prerequisites
- Node.js (v18 or later)
- npm
- Vercel CLI (optional)

### Installation Steps
```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git

# Navigate to project directory
cd your-repo-name

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev
```

## 🌐 Deployment Workflow

### Continuous Integration
1. Push code to GitHub
2. GitHub Actions triggers
3. Runs tests across multiple Node.js versions
4. Generates test reports

### Deployment Workflow
- **Pull Requests**: 
  - Automatic preview deployment to Vercel
  - Allows testing changes before merging

- **Main Branch**:
  - Automatic production deployment
  - Instant availability of latest changes

## 🔐 Required GitHub Secrets

Configure the following secrets in your GitHub repository:
- `VERCEL_TOKEN`: Your Vercel access token
- `VERCEL_ORG_ID`: Vercel Organization ID
- `VERCEL_PROJECT_ID`: Vercel Project ID




## 📞 Contact
Md Farhan Islam Shuvro - bsse1303@iit.du.ac.bd

Live Link: [https://ci-cd-pipeline-demo.vercel.app/]