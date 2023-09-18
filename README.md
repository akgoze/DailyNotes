# DailyMind

DailyMind is a web application that allows users to create and manage their own daily journal. Users can create entries, view past entries, and edit or delete entries. Users can also view their entries in a calendar view.

## Table of Contents

- [Project Title](#project-title)
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Commit Message Format

I follow the [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) format for commit messages.
According to this format, a commit message consists of a **header**, **body**, and **footer**.
The header has a **type**, **scope**, and **subject**. The header is mandatory and the scope of the header is optional.
The body and footer are optional.

## Branch Naming

Branch naming is based on the [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) workflow.

```
<type>/<description>
```

According to the Gitflow, the **type** can be one of the following:
**feature** is a new feature,
**bugfix** is a bug fix,
**docs** is documentation only changes,
**hotfix** is a hotfix,
**release** is a release,
**support** is a support branch,

## Commit Naming
Commit naming is based on the [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) format. 
According to this format, a commit message consists of a **type**, **scope**, and **description**. The scope of the commit is optional.

```
<type>[optional scope]: <description>
```

The **type** can be one of the following:
**feat** is a new feature,
**fix** is a bug fix,
**docs** is documentation only changes,
**style** is changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc),
**refactor** is a code change that neither fixes a bug nor adds a feature,
**perf** is a code change that improves performance,
**test** is adding missing tests or correcting existing tests,
**chore** is changes to the build process or auxiliary tools and libraries such as documentation generation.

The **scope** is optional and can be anything specifying the place of the commit change. For example, **init**, **runner**, **watcher**, **config**, **web-server**, **proxy**, **etc**.

The **description** should be clear and concise.



Write a commit message in the following format:
