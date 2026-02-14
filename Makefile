.PHONY: help install test test-verbose docker-build docker-test docker-test-report clean reports

# Default target
help:
	@echo "Rick and Morty API Test Suite - Make Commands"
	@echo ""
	@echo "Available commands:"
	@echo "  make install            - Install dependencies locally (npm install)"
	@echo "  make test              - Run tests with Newman (CLI output)"
	@echo "  make test-verbose      - Run tests with verbose output"
	@echo "  make docker-build      - Build Docker image"
	@echo "  make docker-test       - Run tests using Docker"
	@echo "  make docker-test-report - Run tests with Docker and generate HTML report"
	@echo "  make reports           - Open HTML report in browser"
	@echo "  make clean             - Clean up reports and temporary files"

# Install dependencies locally
install:
	@echo "Installing dependencies locally..."
	npm install
	@echo "Installation complete!"

# Run tests with Newman
test:
	@echo "Running Newman tests..."
	mkdir -p reports
	./node_modules/.bin/newman run rick-and-morty-api.json \
		-e rick-and-morty-env.json \
		--reporters cli,htmlextra \
		--reporter-htmlextra-export reports/newman-report.html

# Run tests with verbose output
test-verbose:
	@echo "Running Newman tests (verbose)..."
	mkdir -p reports
	./node_modules/.bin/newman run rick-and-morty-api.json \
		-e rick-and-morty-env.json \
		--verbose \
		--reporters cli,htmlextra,json \
		--reporter-htmlextra-export reports/newman-report.html \
		--reporter-json-export reports/newman-report.json

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

# Open HTML report
reports:
	@if [ -f reports/newman-report.html ]; then \
		xdg-open reports/newman-report.html 2>/dev/null || open reports/newman-report.html 2>/dev/null || echo "Report saved at: reports/newman-report.html"; \
	else \
		echo "No report found. Run 'make test' or 'make docker-test-report' first."; \
	fi

# Clean up (use sudo for docker-created files)
clean:
	@echo "Cleaning up..."
	@if [ -d reports ]; then \
		sudo rm -rf reports/* 2>/dev/null || rm -rf reports/*; \
	fi
	@rm -f newman-report.json 2>/dev/null || true
	@echo "Cleanup complete!"
