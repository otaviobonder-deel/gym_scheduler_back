# How to use this backend

To use the backend, you need to set a `.env` file at the root dir with these parameters:
> ENVIRONMENT=production \
> MONGO_DB_USERNAME=username \
> MONGO_DB_PASSWORD=password \
> MONGO_DB_IP=mongoIp \

You need a `MongoDB` instance running at port `27017`. Set the `username`, `password` and `IP` of the mongo instance.

Then run `node start` to start the server. It will be listening at `localhost:3000`.
