# Deployment Guide

This document explains how to set up automated CI/CD deployment for this Next.js application.

## Prerequisites

1. **Server Setup**
   - Node.js v22.21.0 installed
   - PM2 installed globally: `npm install -g pm2`
   - SSH access configured
   - Deployment directory created: `/var/www/next-lottery`

2. **GitHub Secrets Configuration**

   Go to your GitHub repository → Settings → Secrets and variables → Actions, and add the following secrets:

   ### Required Secrets

   | Secret Name | Description | Example |
   |------------|-------------|---------|
   | `SSH_HOST` | Your server IP address |
   | `SSH_USER` | SSH username for server access | `root` |
   | `SSH_PRIVATE_KEY` | Private SSH key for authentication | See [SSH Key Setup](#ssh-key-setup) |
   | `SSH_PORT` | SSH port (optional, defaults to 22) | `22` |
   | `NEXT_PUBLIC_HOST` | Your production URL | `https://yourdomain.com` |

   ### Optional Secrets (if needed)

   | Secret Name | Description |
   |------------|-------------|
   | `DB_HOST` | Database host (if needed during build) |
   | `DB_USER` | Database user (if needed during build) |
   | `DB_PASSWORD` | Database password (if needed during build) |
   | `DB_NAME` | Database name (if needed during build) |

## SSH Key Setup

### Step 1: Generate SSH Key Pair (if you don't have one)

```bash
ssh-keygen -t rsa -b 4096 -C "github-actions-deploy" -f ~/.ssh/github_actions_deploy
```

This creates two files:
- `~/.ssh/github_actions_deploy` (private key)
- `~/.ssh/github_actions_deploy.pub` (public key)

### Step 2: Add Private Key to GitHub Secrets

1. Go to GitHub → Repository → Settings → Secrets → Actions
2. Click "New repository secret"
3. Name: `SSH_PRIVATE_KEY`
4. Value: Paste the entire private key content (including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`)

## Server Initial Setup

### 1. Create Environment File

Create `/var/www/next-lottery/.env.production` with your production environment variables:

```env
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_HOST=https://yourdomain.com

# Database
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

# JWT Secrets
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

### 2. Initial PM2 Setup

```bash
cd /var/www/next-lottery
npm install
npm run build
pm2 start npm --name "next-lottery-app" -- start
pm2 save
pm2 startup  # Follow instructions to enable PM2 on system boot
```

## How It Works

1. **Trigger**: When code is pushed to the `main` branch, GitHub Actions automatically triggers the workflow.

2. **Build**: The workflow:
   - Checks out the code
   - Installs dependencies
   - Builds the Next.js application
   - Creates a deployment package

3. **Deploy**: The workflow:
   - Uploads the deployment package to the server via SCP
   - Extracts the package on the server
   - Installs production dependencies
   - Restarts the PM2 application

4. **Backup**: Before deploying, the current deployment is automatically backed up.

## Troubleshooting

### PM2 Issues

- Check PM2 status: `pm2 status`
- View logs: `pm2 logs next-lottery-app`
- Restart manually: `pm2 restart next-lottery-app`

### Permission Issues

- Ensure deployment directory has correct permissions
- Check PM2 user permissions
- Verify file ownership: `ls -la /var/www/next-lottery`

## Security Notes

- Never commit SSH private keys or `.env` files to the repository
- Use GitHub Secrets for all sensitive information
- Regularly rotate SSH keys and secrets
- Keep PM2 and Node.js updated on the server
- Use strong passwords and secrets
