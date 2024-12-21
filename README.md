# cloud-native-node

This project is a cloud-native Node.js application that uses Express.js, PostgreSQL, Docker, and Kubernetes.

## Features

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **PostgreSQL**: Powerful, open-source object-relational database system.
- **Docker**: Platform for developing, shipping, and running applications in containers.
- **Kubernetes**: System for automating the deployment, scaling, and management of containerized applications.

## Project Structure
- .dockerignore
- .gitignore
- app.js
- cicd.yml
- client/
- Dockerfile
- k8s/
- pd-depl.yaml
- package.json
- README.md
- server.js
- src/
- db/
- setup.js
- models/
- Post.js



## Getting Started

### Prerequisites

- Node.js
- Docker
- Kubernetes
- PostgreSQL

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/cloud-native-node.git
    cd cloud-native-node
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the application:
    ```sh
    npm run dev
    ```

### Docker

To build and run the Docker container:

1. Build the Docker image:
    ```sh
    docker build -t cloud-native-node .
    ```

2. Run the Docker container:
    ```sh
    docker run -p 8082:8082 cloud-native-node
    ```

### Kubernetes

To deploy the application to a Kubernetes cluster:

1. Apply the Kubernetes deployment and service configuration:
    ```sh
    kubectl apply -f k8s/pd-depl.yaml
    ```

## Usage

The application provides a simple API to interact with the [Post](http://_vscodecontentref_/9) model.

- **GET /**: Retrieve all posts.

## License

This project is licensed under the ISC License.