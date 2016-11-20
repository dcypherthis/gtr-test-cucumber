# Contributing to QUARTS

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the test suite.
These are just guidelines, not rules, use your best judgment and feel free to
propose changes to this document in a pull request.

If you need to get the attention of the owners of this repo,
simply add the `@dcypherthis` tag.

## What should I know before I get started?

### Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.
Please report any unacceptable behavior to a project maintainer.

### Technology Overview

The regression test suite is based heavily on
[WebdriverIO](http://webdriver.io/),
[Selenium](http://www.seleniumhq.org/),
[Cucumber](/docs/write-some-tests.md#cucumber-overview),
[Chai](http://chaijs.com/),
and the [Page Object Pattern](../docs/page-object-pattern.md#the-page-object-pattern).
We recommend giving yourself a brief overview of these tools to better understand the mechanics.
These will be your primary resources for extending and troubleshooting the test suite.

## How Can I Contribute?

- [Get Set Up](/readme.md#setup)
- [Tracking our Work](#tracking-our-work)
- [GitHub Issues](#github-issues)
    - [Issue Types](#issue-types)
    - [Issue Labels](#issue-labels)
    - [Reporting Bugs](/docs/reporting-bugs.md#reporting-bugs)
    - [Suggesting Enhancements](/docs/suggest-enhancement.md#suggesting-enhancements)
- [Branching](#branching)
- [Write Some Tests](/docs/write-some-tests.md#write-some-tests)
- [Documentation](#documentation)
- [Commit Messages](#commit-messages)
    - [Emoji Decorators](#emoji-decorators)
- [Testing The Test Suite](#testing-the-test-suite)
- [Submitting Pull Requests](#submitting-pull-requests)
    - [Linting your Files](#linting-your-files)
- [Managing CI Builds](#managing-ci-builds)
    - [Setting up Travis CLI Tools](#setting-up-travis-cli-tools)
    - [Useful Travis Commands](#useful-travis-commands)
- [Deploying](#deploys)
- [Releasing](#releasing)
    - [Tagging a Release](#tagging-a-release)
- [How did we do?](#how-did-we-do)

## Tracking our Work

We have a [WaffleIO](https://waffle.io/dcypherthis/gtr-test-cucumber)
integration with fancy Drag and Drop capabilities.

## GitHub Issues

[Issues](https://github.com/dcypherthis/gtr-test-cucumber/issues?q=)

If there is already a GitHub issue for the task you are working on,
assign it to yourself or leave a comment to let people know that you are working on it.
If there isn't already an issue and it is a non-trivial task,
it's a good idea to create one (and note that you're working on it).
This prevents contributors from duplicating effort.

### Issue Types

Use these Emjoi Decorators in the title of any issues you create:

| Issue       | Emoji      | Text         | Description |
| :---------- | :-------:  | :----------  | :---------- |
| Feature     | :moneybag: | `:moneybag:` | Value created for the customers & stakeholders, often for the UI Tests |
| Enhancement | :sparkles: | `:sparkles:` | Improvements to quality and performance of the test suite |
| Bug         | :bug:      | `:bug:`      | Problems with tooling, systems, or test code as it executes against production/shared environments |
| Docs        | :books:    | `:books:`    | Information, guides, best practices, etc around automated testing |
| Discussion  | :mega:     | `:mega:`     | Ongoing discussions or questions about anything |

### Issue Labels

Other labels are used in GitHub to distinguish the status of the issue/PR

* Templates - These are issue templates, for reference only and only useful when using Waffle.IO
* Ready - These issues have been groomed, estimated, and prioritized by the QUARTS Team.
* In Progress - These issues are actively being worked on
* Testing - These issues are being reviewed by other team members or stakeholders prior to merge into master.
* Blocked - These issues have external factors preventing them from being completed
* Wontfix - These issues will not be worked on due to incompatibility, obsoletion, or because it was abandoned.

Each issue will have a corresponding label once it has been verified by
a repository owner or core-contributor.

## Branching

We follow a feature branch workflow,
when starting work you should create a new feature branch from `master`,
and keep it up to date.

## Write Some Tests
See [write-some-tests.md](/docs/write-some-tests.md#write-some-tests) for guidance
on writing Cucumber tests.

## Documentation
When writing new features, but sure to add comments and descriptions as
[appropriate](/docs/write-some-tests.md#descriptions-and-comments).
When contributing to page objects and utilities, be sure to document each
function using the [JSDoc notation](http://usejsdoc.org/about-getting-started.html#adding-documentation-comments-to-your-code).

## Commit Messages

Consider using these grammar rules when writing a commit message

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Include `[ci skip]` in the commit description when you want to prevent the build CI from running
* Include a subject and a body when you can in your commit messages to describe intent
    * See [documentation](https://github.com/blog/926-shiny-new-commit-styles)
    * [Why good commit messages matter](http://chris.beams.io/posts/git-commit/)
* Reference issues and pull requests liberally
    * Simply reference the issue or PR by leading the number with the hash (#)
    * The hash cannot be the first character of the line though, as the git cli reads that as a comment.

### Skipping CI builds

Travis executes builds on each pull request
and subsequent builds for each push made to an open pull request.
Travis will these builds if the commit message contains `[ci skip]` in the subject or body.
Merged Pull Requests against `master` will run even if the merge commit message includes `[ci skip]`

### Emoji Decorators

We argue for the use of emoji decorators at the beginning of your commit
for these reasons:

- The contributor is forced to decide on the intent of their contribution
- The contributor often ends up making smaller, more intentional changes
- The commits messages, and thus pull requests, are easier to understand

Please use these emoji when writing commit messages in contribution to this project

| Emoji                 | Text                  | When to Use |
| :-------------------: | :-------------------- | :---------- |
| :white_check_mark:    | `:white_check_mark:`  | adding tests |
| :fire:                | `:fire:`              | removing code or files |
| :shirt:               | `:shirt:`             | removing linter warnings |
| :art:                 | `:art:`               | improving the format/structure of code |
| :bug:                 | `:bug:`               | fixing a bug |
| :green_heart:         | `:green_heart:`       | fixing the CI build |
| :racehorse:           | `:racehorse:`         | improving performance |
| :non-potable_water:   | `:non-potable_water:` | plugging memory leaks|
| :lock:                | `:lock:`              | dealing with security |
| :books:               | `:books:`             | writing docs |
| :wrench:              | `:wrench:`            | config updates |
| :arrow_up:            | `:arrow_up:`          | upgrading dependencies |
| :arrow_down:          | `:arrow_down:`        | downgrading dependencies |
| :boom:                | `:boom:`              | introducing breaking changes |
| :penguin:             | `:penguin:`           | fixing something on Linux |
| :apple:               | `:apple:`             | fixing something on Mac OS |
| :checkered_flag:      | `:checkered_flag:`    | fixing something on Windows |

Need to express a little more feeling? Checkout out this sweet
[Emoji Cheat Sheet](http://www.webpagefx.com/tools/emoji-cheat-sheet/).

## Testing The Test Suite

We do not currently test this test suite.

## Submitting Pull Requests

Pull requests for features should be made into `master`.
Travis is used to build and run the test branches and is integrated into your PR.

Before you open a pull request, [you should](PULL_REQUEST_TEMPLATE.md#have-you)
- Search step files and feature files for test code you can reuse
- [Lint your files](#linting-your-files)
- Verify that existing tests still run as expected
- Update the docs
    - [Update Version Number](#versioning)
- If adding dependencies, include them in the package.json
    - Avoid global dependencies as much as possible and prefer packaged dependencies in the `package.json`.
    - If new dependencies require additional installation or build steps upon setup, include a postInstall script in the `package.json`.
    - If new dependencies require the use of executables of binaries, add a grunt or npm task to execute them and document this in the `readme.md`.
    - Add proper documentation about if they need to be built or sym-linked?

If your pull request addresses an existing issue,
please tag that issue number in the body of your
[pull request](PULL_REQUEST_TEMPLATE.md#affected-issues) or commit message.
For example, if your pull request addresses issue number 52, please include "Closes #52".

If you make changes after you have opened your pull request,
please add them as separate commits and avoid squashing or rebasing.
Squashing and rebasing can lead to a tidier git history,
but they can also be a hassle if somebody else has done work based on your branch.
Also be considerate of our Sauce Labs and Travis availability.
If the change does not merit a full rerun of the test suite, be sure to
include `[ci skip]` in the subject or body of your commit message.

### Linting your Files

You can run the linter by running this command in the base directory:
```bash
npm run lint
```

Some things are just the way they are with cucumber,
so you may need to add single line exclusions for your Given/When/Then statements
with  `eslint-line-disable new-cap`.

With page objects, we want all our selectors to be in line so we can see them easier,
so you will want to disable the lint on those lines as well with `eslint-disable-line key-spacing`.

### Versioning

This project follows the versioning guidelines set by
[Semantic Versioning](http://semver.org/) to determine
release versions. That translates roughly to
- Major.Minor.Patch
- Breaking.Feature.Enhancement

If you are uncertain about what version number to use, go ahead
and use what you think is right. We aren't too strict on using the perfect
version number. You can also ask the [owners](/OWNERS.yaml) to review
the version number in your Pull Request.

When updating the version number, make you update these 3 files:
- [changelog](/changelog.md#changelog)
- [package.json](/package.json)

## Managing CI Builds

You can use the interface provided in GitHub and the Travis website to
manage your builds, but Travis provides CLI tools that can do this too.

### Setting up Travis CLI Tools

1. First, make sure you have ruby installed in your home directory. `which ruby && ruby -v`.  Tou will need a minimum version of ruby 2.0.0.
2. Next, install the gem `gem install travis --no-rdoc --no-ri`.
  - If you get a permissions error when trying to install this gem, try using: `sudo gem install travis --no-rdoc --no-ri -n /usr/local/bin`
3. Verify it was installed correctly with `travis version`.
4. Log in to travis with `travis login`.

Official Travis CLI setup instructions are found in their [readme](https://github.com/travis-ci/travis.rb#installation).

You now will have access to the repositories that have Travis enabled.
Sauce Labs credentials are stored as encrypted variables in the .travis.yml file.
These are decrypted by travis when launching Sauce Labs.
If these need to be replaced, delete the existing `secure:kjfhgkajsdhgkljhkglhkdlshfksdhfkasd`
variables under `env` and run
`travis encrypt SAUCE_USERNAME="username" --add && travis encrypt SAUCE_ACCESS_KEY="accessToken"`.

### Useful Travis Commands

```bash
# shows you all available commands
travis help
# monitors travis logs
travis monitor
# shows current/most recent logs in your terminal (in real time)
travis logs
#restarts last build
travis restart
```

Further documentation on using travis is found in the
[Travis Documentation](https://docs.travis-ci.com).

Documentation on using Travis with WebdriverIO and Sauce Labs is found in the
[WebdriverIO Documentation](http://webdriver.io/guide/usage/cloudservices.html).

## Deploys

No deployment is required for this test suite. You can run the test suite
locally or in Sauce Labs with these [instructions](../readme.md#run-some-tests)

## Releasing

Once your PR has been tested, code reviewed, and verified in a by a Travis build,
it can be merged to `master`. After merging in with the master, be sure to
[tag the release](#tagging-a-release) so that the release can be found by Travis

### Tagging a Release

After merging a pull request, be sure to tag the release by following these steps:

1. Go to the [Create a new release page](https://github.com/dcypherthis/gtr-test-cucumber/releases/new)
2. Name the release with the corresponding [version number](#versioning)
3. List the changes made in this release
    * You can often just copy the items in the [changelog](./../changelog.md#changelog)
4. Hit that fancy `Publish release` button

## How did we do?

It may take a while to familiarize yourself with this document,
but if we are doing our job right,
you shouldn't have to spend months poring over the project source code
before you feel comfortable contributing.
In fact, if you encounter any confusion or frustration during the contribution process,
please create a GitHub issue and we'll do our best to improve the process.
