.PHONY: help install test test-verbose docker-build docker-test docker-test-report clean reports docs-start docs-build docs-serve

# Default target
help:
	@echo "Rick and Morty API Test Suite - Make Commands"
	@echo ""
	@echo "=== Newman Tests ==="
	@echo "  make install            - Install all dependencies"
	@echo "  make test              - Run Newman tests with HTML report"
	@echo "  make test-verbose      - Run tests with verbose output"
	@echo ""
	@echo "=== Docker ==="
	@echo "  make docker-build      - Build Docker image"
	@echo "  make docker-test      - Run tests in Docker"
	@echo "  make docker-test-report - Run tests in Docker with report"
	@echo ""
	@echo "=== Documentation ==="
	@echo "  make docs-start        - Start Docusaurus dev server"
	@echo "  docs-serve          - Serve built docs"
	@echo "  make docs-build       - Build Docusaurus static site"
	@echo ""
	@echo "=== Utilities ==="
	@echo "  make reports          - Open HTML test report"
	@echo "  make clean            - Clean up reports"

# Install all dependencies
install:
	@echo "Installing all dependencies..."
	npm install
	@echo "Installation complete!"

# Run Newman tests
test:
	@echo "Running Newman tests..."
	mkdir -p reports
	npm run test

# Run tests with verbose output
test-verbose:
	@echo "Running Newman tests (verbose)..."
	mkdir -p reports
	npm run test:verbose

# Build Docker image
docker-build:
	@echo "Building Docker image..."
	docker build -t rick-morty-newman:latest .

# Run tests with Docker
docker-test:
	@echo "Running tests with Docker..."
	docker-compose up newman

# Run tests with Docker and generate report
docker-test-report:
	@echo "Running tests with Docker and generating report..."
	docker-compose up newman-with-report
	@echo "Report generated at: reports/newman-report.html"

# Start Docusaurus dev server
docs-start:
	@echo "Starting Docusaurus development server..."
	cd docs && npm run start

# Serve built docs locally
docs-serve:
	@echo "Serving built documentation..."
	cd docs && npm run serve

# Build Docusaurus static site
docs-build:
	@echo "Building Docusaurus static site..."
	cd docs && npm run build

# Open HTML report
reports:
	@if [ -f reports/newman-report.html ]; then \
		xdg-open reports/newman-report.html 2>/dev/null || open reports/newman-report.html 2>/dev/null || echo "Report saved at: reports/newman-report.html"; \
	else \
		echo "No report found. Run 'make test' first."; \
	fi

# Clean up
clean:
	@echo "Cleaning up..."
	@if [ -d reports ]; then \
		sudo rm -rf reports/* 2>/dev/null || rm -rf reports/*; \
	fi
	@rm -f newman-report.json 2>/dev/null || true
	@echo "Cleanup complete!"
