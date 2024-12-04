[![Coverage Status](https://coveralls.io/repos/github/Danielevaccari/SoftwareTesting-Group/badge.svg)](https://coveralls.io/github/Danielevaccari/SoftwareTesting-Group)

# SoftwareTesting-Group

## Instructions for Running Unit Tests and Generating Coverage Reports Locally

### Prerequisites
- Ensure **Node.js 16.x or higher** is installed on the test machine.

### Clone the Repository
```bash
git clone <repository-url>
cd SoftwareTesting-Group
```

### Install Dependencies
Navigate to your project folder and run the following command:
```bash
npm install
```

### Run Unit Tests
Execute the unit tests with the following command:
```bash
npm run test
```

### Generate and View Coverage Report
1. Generate the coverage report:
   ```bash
   npm run test:coverage
   ```
2. The above command will create a coverage report in the `coverage` directory.

3. To view the report:
   - Open the `index.html` file located in the `coverage/lcov-report` directory in a web browser.

---

### Continuous Integration and Coveralls Integration
Our GitHub Actions workflow runs tests and generates a coverage report for both pushes and pull requests targeting the `main` branch. The coverage report is uploaded to Coveralls for analysis and visibility

You can view the **Coveralls report** here: [Coveralls - SoftwareTesting-Group](https://coveralls.io/github/Danielevaccari/SoftwareTesting-Group)

---
Happy Testing! 🚀
