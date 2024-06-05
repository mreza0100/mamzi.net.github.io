publish:
	npm run out
	cp ./root_content/* ./out/
	npm run deploy
	git add -A
	git commit -m "update - publish"
	git push origin react-gh-pages