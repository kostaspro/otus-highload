FROM python:3.8
WORKDIR /home/app/

RUN apt-get -y update
RUN apt-get -y install python3-pip
RUN pip install --upgrade pip

ADD requirements.txt .
RUN pip install -r ./requirements.txt
ADD . .

CMD python insert_continuously.py