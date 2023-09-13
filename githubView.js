class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const name = repoData.name;
    const description = repoData.description;
    const imgUrl = repoData.organization.avatar_url;
    const repoName = document.querySelector('#repo-name');
    repoName.append(name);
    const repoDescription = document.querySelector('#repo-description');
    repoDescription.append(description);
    const img = document.querySelector('img');
    img.src = imgUrl;
  }
}

module.exports = GithubView;