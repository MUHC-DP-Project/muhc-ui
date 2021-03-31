# ensure you heroku login and heroku container:login before

docker build -t pbrn-ui:v0.0.1 .
docker tag pbrn-ui:v0.0.1 registry.heroku.com/pbrn-ui/web
docker push registry.heroku.com/pbrn-ui/web                  
heroku container:release web -a pbrn-ui