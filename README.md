# Rick and Morty API Test Suite

![Postman Collection](https://img.shields.io/badge/Postman-Collection-orange)
![Newman](https://img.shields.io/badge/Newman-CI%2FCD-blue)
![Docker](https://img.shields.io/badge/Docker-Supported-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Enabled-green)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-HTML%20Report-green)

Comprehensive API test suite for the [Rick and Morty API](https://rickandmortyapi.com/) using Postman and Newman.

## 📋 Features

- **Extensive Test Coverage**: 25+ test cases covering Characters, Locations, and Episodes endpoints
- **Well Organized**: Structured folders with clear naming conventions
- **Multiple Execution Methods**: Local (npm), Docker, or GitHub Actions
- **Beautiful HTML Reports**: Visual test results with Newman HTML reporter
- **GitHub Pages Integration**: Automatic deployment of test reports
- **Local Installation**: Dependencies installed locally in the project (no global packages)

## 🗂️ Project Structure

```
postman-newman-gh/
├── .github/
│   └── workflows/
│       └── newman.yml          # GitHub Actions workflow
├── .gitignore
├── Dockerfile                  # Docker image definition
├── docker-compose.yml          # Docker Compose services
├── Makefile                   # Make commands for easy execution
├── README.md                  # This file
├── package.json               # NPM dependencies
├── rick-and-morty-api.json   # Postman collection
└── rick-and-morty-env.json   # Environment configuration
```

## 🧪 Test Coverage

### Characters Endpoint (9 test cases)
- ✅ List all characters with pagination
- ✅ Get character by ID
- ✅ Get character by invalid ID (404)
- ✅ Filter characters by name
- ✅ Filter characters by status
- ✅ Filter characters by species
- ✅ Filter characters by gender
- ✅ Pagination (page 2)
- ✅ Get multiple characters by IDs

### Locations Endpoint (6 test cases)
- ✅ List all locations
- ✅ Get location by ID
- ✅ Get location by invalid ID (404)
- ✅ Filter locations by name
- ✅ Filter locations by type
- ✅ Filter locations by dimension

### Episodes Endpoint (6 test cases)
- ✅ List all episodes
- ✅ Get episode by ID
- ✅ Get episode by invalid ID (404)
- ✅ Filter episodes by name
- ✅ Filter episodes by episode code
- ✅ Get multiple episodes by IDs

### Error Handling (1 test case)
- ✅ Invalid endpoint returns 404

**Total: 25+ test cases**

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (for local execution)
- Docker & Docker Compose (for containerized execution)
- GitHub account (for CI/CD)

### Option 1: Local Execution

1. Install dependencies:
   ```bash
   npm install
   # or
   make install
   ```

2. Run tests:
   ```bash
   npm test
   # or
   make test
   ```

3. View HTML report:
   ```bash
   make reports
   ```

### Option 2: Docker Execution

1. Build the Docker image:
   ```bash
   make docker-build
   ```

2. Run tests with Docker:
   ```bash
   make docker-test
   ```

3. Run tests and generate report:
   ```bash
   make docker-test-report
   ```

### Option 3: GitHub Actions

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update to use local npm packages"
   git remote add origin https://github.com/YOUR_USERNAME/postman-newman-gh.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages

3. The workflow will automatically:
   - Run all tests on every push/PR
   - Generate HTML reports
   - Deploy to GitHub Pages

## 📖 Make Commands

| Command | Description |
|---------|-------------|
| `make install` | Install dependencies locally (npm install) |
| `make test` | Run tests with Newman (CLI output) |
| `make test-verbose` | Run tests with verbose output |
| `make docker-build` | Build Docker image |
| `make docker-test` | Run tests using Docker |
| `make docker-test-report` | Run tests with Docker and generate HTML report |
| `make reports` | Open HTML report in browser |
| `make clean` | Clean up reports and temporary files |
| `make help` | Show help message |

## 📦 NPM Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run tests with Newman |
| `npm run test:verbose` | Run tests with verbose output |

## 🔧 Configuration

### Environment Variables

Edit `rick-and-morty-env.json` to customize:

- `baseUrl`: API base URL (default: `https://rickandmortyapi.com/api`)
- `characterId`: Default character ID for tests
- `locationId`: Default location ID for tests
- `episodeId`: Default episode ID for tests
- `characterName`: Name to filter characters by
- `locationName`: Name to filter locations by
- `episodeCode`: Episode code to filter by (e.g., "S01E01")

### GitHub Actions Configuration

Edit `.github/workflows/newman.yml` to customize:

- Node.js version
- Test execution parameters
- Report retention days
- Deployment settings

## 📊 Sample Test Output

```
→ Get All Characters
  ✓ Status code is 200
  ✓ Content-Type is application/json
  ✓ Response has info object
  ✓ Response has results array
  ✓ First character has required properties
  ...

→ Get Character by ID
  ✓ Status code is 200
  ✓ Character has all required properties
  ...

→ Filter Characters by Name
  ✓ Status code is 200
  ✓ Results contain the searched name
  ...

Collections:      1  |  ✓ Passed: 25 |  ✗ Failed: 0
Iterations:      25  |  ✓ Passed: 25 |  ✗ Failed: 0
```

## 🔨 Development

### Adding New Tests

1. Open `rick-and-morty-api.json` in Postman
2. Add new requests under appropriate folders
3. Add test scripts in the "Tests" tab
4. Export collection (JSON format)
5. Replace `rick-and-morty-api.json`

### Running Specific Tests

```bash
# Run specific collection
./node_modules/.bin/newman run rick-and-morty-api.json -e rick-and-morty-env.json

# Run specific folder
./node_modules/.bin/newman run rick-and-morty-api.json -e rick-and-morty-env.json --folder "Characters"
```

## 📝 License

MIT License - feel free to use this project for learning or as a template.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

<p align="center">Made with ❤️ using Postman & Newman</p>
