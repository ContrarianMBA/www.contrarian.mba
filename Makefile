## help - Display help about make targets for this Makefile
help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

## install - install dependency packages
install:
	npm install

## dev - starts the Next.js development server on port 3000
dev: install
	npm run dev

## run - run the Next.js app server
run: install
	npm run build && npm run start

## sync_data - Download data used to power site from Airtable
sync_data:
	python3 scripts/sync_data.py

## clean - clean previous builds
clean:
	rm -rf docs/*

## build - build the app for release
build: clean install
	npm run build
	cp CNAME docs/
	touch docs/.nojekyll

## deploy - build and deploy the app
deploy: build
	git add docs
	git commit -m "Deploy `git rev-parse --verify HEAD`"
	git push origin master
