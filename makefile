publish:
	npm run out
	touch ./out/.nojekyll
	cp ./CNAME ./out/CNAME
	npm run deploy
	git add -A
	git commit -m "update - publish"
	git push origin react-gh-pages