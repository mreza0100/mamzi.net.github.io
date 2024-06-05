publish:
	npm run out
	cp -p ./root_content/* ./out
	npm run deploy
	git add -A
	git commit -m "update - publish"
	git push origin react-gh-pages