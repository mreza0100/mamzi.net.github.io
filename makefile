publish:
	npm run out
	cp -p ./root_content/* ./out
	cp -p ./root_content/.nojekyll ./out
	npm run deploy
	git add -A
	git commit -m "update - publish - format"
	git push origin react-gh-pages