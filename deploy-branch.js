const { execSync } = require('child_process');

// Get the commit message from command-line arguments
const commitMessage = process.argv.slice(2).join(' ');
if (!commitMessage) {
  console.error("Please provide a commit message.");
  process.exit(1);
}

try {
  // Step 1: Store the current branch name
  const currentBranch = execSync('git branch --show-current').toString().trim();

  console.log(`You are currently on branch: ${currentBranch}`);

  // Step 2: Ensure the working directory is clean
  const status = execSync('git status --porcelain').toString().trim();
  if (status) {
    console.log("You have uncommitted changes. Committing them before switching branches...");
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  }

  // Step 3: Checkout develop branch and merge the current branch
  console.log("Switching to develop branch...");
  execSync('git checkout develop', { stdio: 'inherit' });

  console.log(`Merging ${currentBranch} into develop...`);
  execSync(`git merge ${currentBranch}`, { stdio: 'inherit' });

  // Step 4: Check if there is anything to commit in develop
  const developStatus = execSync('git status --porcelain').toString().trim();
  if (developStatus) {
    console.log("Committing merged changes in develop...");
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  }

  console.log("Pushing changes to develop branch...");
  execSync('git push', { stdio: 'inherit' });

  // Step 5: Switch to main branch and merge develop into main
  console.log("Switching to main branch and merging...");
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git merge develop', { stdio: 'inherit' });

  console.log("Pushing changes to main branch...");
  execSync('git push', { stdio: 'inherit' });

  // Step 6: Deploy to GitHub Pages
  console.log("Deploying to GitHub Pages...");
  execSync('npm run deploy', { stdio: 'inherit' });

  // Step 7: Return to original branch
  console.log(`Switching back to ${currentBranch} branch...`);
  execSync(`git checkout ${currentBranch}`, { stdio: 'inherit' });

  console.log("Deploy process complete!");
} catch (error) {
  console.error("An error occurred during the deployment process:", error.message);
  process.exit(1);
}
