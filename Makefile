.PHONY: help install test docker-build docker-test docker-docs clean

help:
	@echo "Rick and Morty API Test Suite"
	@echo ""
	@echo "  make install         - Install dependencies"
	@echo "  make test           - Run tests"
	@echo "  make docker-build   - Build Docker image"
	@echo "  make docker-test    - Run tests in Docker"
	@echo "  make docker-docs    - Serve docs in Docker"
	@echo "  make clean          - Clean reports"

install:
	npm install --legacy-peer-deps --no-package-lock

test:
	@mkdir -p reports
	npm test

docker-build:
	docker build -t rick-morty-newman .

docker-test:
	docker compose up test --remove-orphans

docker-docs:
	docker compose up docs --remove-orphans

clean:
	rm -rf reports/*
