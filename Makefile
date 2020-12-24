setup:
	npm install
	cdk bootstrap --profile $(AWS_PROFILE)
.PHONY: build
build:
	npx tsc
.PHONY: test
test:
	npx jest
