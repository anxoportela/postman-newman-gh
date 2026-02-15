.PHONY: help install test docker-build docker-test docker-docs clean

help:
	@echo "Rick and Morty API Test Suite"
	@echo ""
	@echo "  make install         Install dependencies"
	@echo "  make test           Run tests locally"
	@echo "  make docker-build   Build Docker image"
	@echo "  make docker-test    Run tests in Docker"
	@echo "  make docker-docs    Serve docs in Docker"
	@echo "  make docs:build     Build Docusaurus docs"
	@echo "  make clean          Clean reports"

install:
	npm ci --legacy-peer-deps || npm install --legacy-peer-deps

test:
	mkdir -p reports
	npm test

docker-build:
	docker build -t rick-morty-newman .

docker-test:
	docker compose up test --remove-orphans

docker-docs:
	docker compose up docs --remove-orphans

docs:build:
	npm run docs:build

clean:
	rm -rf reports/*
