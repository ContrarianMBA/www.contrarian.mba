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

## clean - clean previous builds
clean:
	rm -rf out/*

## build - build the app for release
build: clean install
	npm build
	cp CNAME out/
	touch out/.nojekyll

## deploy - build and deploy the app
deploy: clean build
	rm -rf docs/
	mv out docs
	git add docs
	git commit -m "Deploy `git rev-parse --verify HEAD`"
	git push origin master
