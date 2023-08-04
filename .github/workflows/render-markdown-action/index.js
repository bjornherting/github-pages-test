const core = require('@actions/core');
const github = require('@actions/github');

try {
  const markdownFile = core.getInput('markdown-file');
  console.log(`File name is ${markdownFile}!`);
} catch (error) {
  core.setFailed(error.message);
}
