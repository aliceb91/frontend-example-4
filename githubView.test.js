/**
 * @jest-environment jsdom
 */

const GithubView = require('./githubView');
const GithubModel = require('./githubModel');
const GithubClient = require('./githubClient');
const fs = require('fs');

describe('GithubView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('adds the repo data to the page when the button is clicked', () => {
    const model = new GithubModel();
    const mockClient = {
      getRepoInfo: (repoName, callback) => {callback({name: "sinatra", description: "Classy web-development dressed in a DSL (official / canonical repo)"})}
    }
    const view = new GithubView(model, mockClient);
    const button = document.querySelector('#submit-button');
    const input = document.querySelector('#repo-name-input');
    input.value = "sinatra/sinatra";
    button.click()
    expect(document.querySelector('#repo-name').textContent).toBe("sinatra");
    expect(document.querySelector('#repo-description').textContent).toBe("Classy web-development dressed in a DSL (official / canonical repo)");
  });
});