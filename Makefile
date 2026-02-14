.PHONY: help install test docker-build docker-test docker-docs-serve clean docs-build docs-serve

help:
	@echo "Rick and Morty API Test Suite"
	@echo ""
	@echo "=== Tests ==="
	@echo "  make install              - Install dependencies"
	@echo "  make test                - Run Newman tests"
	@echo ""
	@echo "=== Docker ==="
	@echo "  make docker-build        - Build Docker image"
	@echo "  make docker-test         - Run tests in Docker"
	@echo "  make docker-docs-serve   - Serve docs in Docker"
	@echo ""
	@echo "=== Docs ==="
	@echo "  make docs-build          - Build Docusaurus"
	@echo "  make docs-serve          - Serve docs locally"
	@echo ""
	@echo "=== Clean ==="
	@echo "  make clean               - Clean reports"

install:
	npm install --legacy-peer-deps

test:
	@mkdir -p reports
	npm test

docker-build:
	docker build -t rick-morty-newman .

docker-test:
	docker compose up test --remove-orphans

docker-docs-serve:
	docker compose up docs-serve --remove-orphans

docs-build:
	npm run docs:build

docs-serve:
	npm run docs:serve

clean:
	rm -rf reports/*
