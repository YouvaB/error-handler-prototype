# Docker command to start Mongo

```powershell
docker volume create --name="mongodata"
docker run -d -p 27017:27020 -v mongodata:/data/db mongo
```
