# GitHub Actions Workflow

## Quick Test Steps

### 1. Check GitHub Actions Tab

1. Go to: `https://github.com/KwaHash/next-lottery/actions`
2. You should see "Deploy to VPS" workflow listed
3. If you see it, the workflow file is recognized by GitHub

### 2. Test with a Small Commit

Make a small change and push to trigger the workflow:

```bash
# Make a small change (e.g., update a comment)
echo "# Test deployment" >> README.md
git add README.md
git commit -m "test: trigger deployment workflow"
git push origin main
```

### 3. Monitor the Workflow Run

1. Go to: `https://github.com/KwaHash/next-lottery/actions`
2. Click on the latest workflow run
3. Watch it execute in real-time

## Common Issues and Solutions

### Issue: Workflow doesn't trigger
**Solution:**
- Ensure you're pushing to `main` branch
- Check workflow file is in `.github/workflows/` directory
- Verify file has `.yml` or `.yaml` extension
- Check GitHub Actions is enabled in repository settings

### Issue: "Secret not found" error
**Solution:**
- Go to: `https://github.com/KwaHash/next-lottery/settings/secrets/actions`
- Verify all required secrets are set:
  - `SSH_HOST`
  - `SSH_USER`
  - `SSH_PRIVATE_KEY`
  - `NEXT_PUBLIC_HOST`

### Issue: SSH connection fails
**Solution:**
1. Test SSH manually:
   ```bash
   ssh -i ~/.ssh/your_private_key username@hostname
   ```
2. Verify SSH key is in GitHub Secrets correctly (include full key with headers)
3. Check server firewall allows SSH (port 22)
4. Verify SSH user has correct permissions

### Issue: Build fails
**Solution:**
- Check build logs for specific errors
- Verify `NEXT_PUBLIC_HOST` secret is set
- Test build locally: `npm run build`
- Check for missing environment variables

### Issue: PM2 restart fails
**Solution:**
- Verify PM2 is installed: `pm2 --version`
- Check if app exists: `pm2 list`
- Verify app name matches: `next-lottery-app`
- Check PM2 logs: `pm2 logs next-lottery-app`

## Next Steps After Verification

Once verified:
1. Remove any test commits
2. Monitor first few deployments closely
3. Set up notifications (optional) for workflow failures
4. Consider adding deployment notifications (Slack, email, etc.)
