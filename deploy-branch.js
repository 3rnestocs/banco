const { execSync } = require('child_process');

// Get the commit message from command-line arguments
const commitMessage = process.argv.slice(2).join(' ');
if (!commitMessage) {
  console.error("Please provide a commit message.");
  process.exit(1);
}

try {
  console.log("Switching to develop branch...");
  execSync('git checkout develop', { stdio: 'inherit' });

  console.log("Pushing changes to develop branch...");
  execSync(`git add .`, { stdio: 'inherit' });
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  execSync('git push', { stdio: 'inherit' });

  console.log("Switching to main branch and merging...");
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git merge develop', { stdio: 'inherit' });
  execSync('git push', { stdio: 'inherit' });

  console.log("Deploying to GitHub Pages...");
  execSync('npm run deploy', { stdio: 'inherit' });

  console.log("Switching back to develop branch...");
  execSync('git checkout develop', { stdio: 'inherit' });

  console.log("Deploy process complete!");
} catch (error) {
  console.error("An error occurred during the deployment process:", error.message);
  process.exit(1);
}
