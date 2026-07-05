# Topic plan: Dokploy deployment

## End goal

Angeal can deploy this site to Dokploy, inspect logs, understand the container path from source to served page, and perform basic rollback/debugging.

## Progression

1. Static app deployment mental model.
2. Dockerfile stages: deps, build, runtime.
3. Nginx serving static files.
4. Dokploy project/app setup.
5. Domains, TLS, env vars, logs.
6. Rollback and troubleshooting.

## Achievements

- [ ] Explain why this repo uses nginx runtime instead of Node runtime.
- [ ] Build the Docker image locally.
- [ ] Deploy through Dokploy.
- [ ] Read logs and identify a failed deploy cause.
