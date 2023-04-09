import chalk from "chalk";
import { cosmiconfigSync  } from "cosmiconfig";

const configLoader = cosmiconfigSync('tool');

function getConfig() {
  const result = configLoader.search(process.cwd());
  console.log(result);
  if (!result) {
    console.log(chalk.yellow('Could not find configuration, using default'));
    return { port: 1234 };
  } else {
    console.log('Found configuration', result.config);
    return result.config;
  }
}

export default getConfig