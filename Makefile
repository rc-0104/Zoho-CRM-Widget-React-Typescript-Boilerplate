build:
	cd client && pnpm build 

	rm -f -R app/assets
	mkdir app/assets

	cd client && node update-index-html.js

	cp client/dist/assets/*.js app/assets
	cp client/dist/assets/*.css app/assets
	cp client/dist/index.html app/index.html
	
	zet validate
	zet pack

.PHONY: build