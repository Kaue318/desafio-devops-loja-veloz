# Modernização Cloud DevOps - Loja Veloz 🚀

Projeto prático do desafio de modernização da infraestrutura da "Loja Veloz". O foco principal foi criar uma arquitetura resiliente e escalável para o microsserviço de Estoque, garantindo que rotinas críticas de auditoria e assistência entre lojas não sofram indisponibilidade.

## 🛠️ Tecnologias Utilizadas
* **Node.js & Express:** API REST para o serviço de estoque.
* **Docker & Docker Compose:** Conteinerização segura (multi-stage, non-root) e ambiente local.
* **Kubernetes (K8s):** Orquestração para produção (Deployments, Services, ConfigMaps, Secrets).
* **HPA (Horizontal Pod Autoscaler):** Escalabilidade automática baseada em CPU.
* **GitHub Actions:** Pipeline automatizado de CI/CD (Build, testes e segurança).

## 🚀 Como rodar o projeto localmente (Ambiente Dev)
1. Clone o repositório.
2. Na raiz do projeto, suba os contêineres:
  ```bash
   docker compose up -d --build

   ## 🎬 Vídeo Pitch

[**Assista ao vídeo de apresentação da arquitetura clicando aqui!**](https://youtu.be/IgzKKzhtQ8A)

---