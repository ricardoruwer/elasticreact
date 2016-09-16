setup-es:
	docker build -t es-image:0.2 . 
	docker run -d -p 9200:9200 --name es-container -v `pwd`:/home/application/current es-image:0.2

setup-data:
	docker exec -it es-container curl -H "Content-Type: application/json" --data @/home/application/current/resource/post.json http://localhost:9200/my_custom_index_name/posts
