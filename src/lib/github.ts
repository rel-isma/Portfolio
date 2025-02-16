import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getGithubProjects(username: string) {
  try {
    const response = await octokit.request("GET /users/rel-isma/repos", {
      username,
      sort: "updated",
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return response.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      updatedAt: repo.updated_at,
      topics: repo.topics || [],
    }));
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
}

export async function getProjectDetails(username: string, repo: string) {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: username,
      repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const readme = await octokit.request("GET /repos/{owner}/{repo}/readme", {
      owner: username,
      repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return {
      ...response.data,
      readme: atob(readme.data.content),
    };
  } catch (error) {
    console.error("Error fetching project details:", error);
    return null;
  }
}
