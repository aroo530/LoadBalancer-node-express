
# Step 1: Delete the Docker image named "server" if found
# Step 2: Create a new Docker image named "server"
# Step 3: Delete containers named "server3002" and "server3001" if they exist
# Step 4: Create a new container for PORT=3002
# Step 5: Create another container for PORT=3001

docker docker image rm -f server & docker build -t server .

docker rm -f server3001 
docker rm -f server3002

docker create -e PORT=3001 -p 3001:3001 --name server3001 server
docker create -e PORT=3002 -p 3002:3002 --name server3002 server 
