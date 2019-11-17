#!/bin/bash
echo "welcome server..."
npm install
if [ $(docker container ls -a -q --filter name=my_app_backend_container) != '']; then
 docker container stop my_app_backend_container
 docker container rm my_app_backend_container 
fi

if [ $(docker image ls -a -q --filter reference=my_app_backend) != '' ];then
  docker image rm my_app_backend
fi


docker build -t my_app_backend .

docker  run -itd -p 4000:4000 --name my_app_backend_container my_app_backend