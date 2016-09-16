FROM elasticsearch:2.4.0

RUN apt-get update
RUN apt-get install curl

VOLUME `pwd` /home/application/current
ADD confs/elasticsearch.yml config/elasticsearch.yml
