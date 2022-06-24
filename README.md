<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Patrick-Sherlund/MCSWF">

![logo.png](src/assets/readme-logo.png)

  </a>

<h2 align="center">U.S. Marine Corps Software Factory Static Site</h2>

  <p align="center">
    An informational static site for Marines to gather details about the U.S. Marine Corps Software Factory, and apply to join the team.
    <br />
    <a href="https://github.com/Patrick-Sherlund/MCSWF"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary style="font-size: 23px; border:.01rem solid #a9a9a9; max-width: fit-content; padding: 0 1rem; border-radius: 5px">
Table of Contents
</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#building--deploying-website">Building & Deploying Website</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#steps">Steps</a></li>
      </ul>
    </li>
    <li>
      <a href="#app-folder-structure">App Folder Structure</a>
      <ul>
        <li><a href="#app">App</a></li>
        <li><a href="#components">Components</a></li>
        <li><a href="#global">Global</a></li>
        <li><a href="#models">Models</a></li>
        <li><a href="#modules">Modules</a></li>
        <li><a href="#utils">Utils</a></li>
        <li><a href="#assets">Assets</a></li>
      </ul>
    </li>
    <li>
      <a href="#test-driven-development">Test Driven Development</a>
      <ul>
        <li><a href="#integration-testing-through-cypress">Integration Testing Through Cypress</a></li>
        <li><a href="#unit-testing-through-jest">Unit Testing Through Jest</a></li>
        <li><a href="#manual-regression-testing">Manual Regression Testing</a></li>
      </ul>
    </li>
    <li>
      <a href="#feature-branching">Feature Branching</a>
      <ul>
        <li><a href="#steps">Steps</a></li>
        <li><a href="#pull-the-latest-from-the-master-branch">Pull the latest from the master branch</a></li>
        <li><a href="#checkout-the-feature-branch">Checkout the feature branch</a></li>
        <li><a href="#validate-branch-status-before-coding">Validate branch status before coding</a></li>
        <li><a href="#optional-rebase-with-originmaster-daily">(Optional) Rebase with origin/master daily</a></li>
        <li><a href="#merge-the-feature-branch-into-master">Merge the feature branch into master</a></li>
      </ul>
    </li>
    <li><a href="#important-links">Important Links</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

# About The Project

The U.S. Marine Corps Software Factory is a static informational site built in the React Framework.
<br/>
The goal of the website is to disseminate information about the Software Factory to the Fleet Marine Force
<br>
and provide an opportunity for Marines to apply to our team.

<p align="right">(<a href="#top">back to top</a>)</p>

# Built With

* [React.js (Typescript Template)](https://reactjs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->

# Getting Started

We recommend having a good Integrated Development Environment installed on your machine... Some examples are:
<br/>

* [Visual Studio Code (Free)](https://code.visualstudio.com/)
* [JetBrains WebStorm (Free 30-Day Trial)](https://www.jetbrains.com/webstorm/download/#section=windows)
* [JetBrains IntelliJ Idea (Free)](https://www.jetbrains.com/idea/download/#section=windows)
* [xCode (MacOS) (Free)](https://developer.apple.com/xcode/)

## Prerequisites

Download the Current or LTS version of Node.JS and Git

* Node.JS
  ```sh
  https://nodejs.org/en/download/current/
  ```
* Git
  ```sh
  https://git-scm.com/downloads
  ```

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Patrick-Sherlund/MCSWF.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

# Building & Deploying Website

## Prerequisites

1. Clone the MCSWF static site repo
   ```sh
   git clone https://github.com/Patrick-Sherlund/MCSWF.github.io.git
   ```
2. Validate the public URL in the <b>.env</b> at the root direcetory
    * _This is required because when the application is compiled into js, the public url variable is used when
      referencing all assets._

   </br>_<b>.env PUBLIC_URL</b>_
   ```sh
   PUBLIC_URL=https://patrick-sherlund.github.io/MCSWF.github.io
   ```

## Steps

1. From the MCSWF repository (This repository, not the static site repo) build the React application
   ```sh
   npm run build
   ```
2. Copy the contents from the MCSWF -> build folder and overwrite the content of the MCSWF.github.io repository
   ```sh
   Copy the contents of the 'build' folder -> paste contents into MCSWF.github.io repository and overwrite
   ```
3. From the 'MCSWF.github.io' repository add, commit and push the changes
   ```sh
   git add -A
   git commit -m "COMMIT MESSAGE"
   git push
   ```
4. View changes at the [Marine Corps Software Factory Static Site](https://patrick-sherlund.github.io/MCSWF.github.io/)

# App Folder Structure
_The folder structure logically separates different areas of the application, to help organize development._
    
```
MCSWF
├── src
│   ├── app
│   │   ├── components
│   │   ├── global
│   │   │   ├── enums
│   │   │   └── types
│   │   ├── models
│   │   │   ├── classes
│   │   │   └── interfaces
│   │   ├── modules
│   │   └── utils
└   └── assets
```
* ### 'app' 
    _This section encapsulates the 'components', 'global', 'models', 'modules' and 'utils'. 
    It also serves as the root directory for the app component_
* ### 'components' 
    _This section contains all reusable components, all components within this section are built with reusability in mind._

* ### 'global'
    _This section contains any type of global declaration, we use this for enums and types._
* ### 'models' 
    _This section contains any type of object model, whether it's an Interface, or a Class._
* ### 'modules' 
    _This section contains all the pages the app uses, for example 'Home', 'About', 'Contact' etc._
* ### 'utils' 
    _This section contains any utility function that could be reused across different components._
* ### 'assets' 
    _This section contains any assets (i.e. images, svg, videos, downloads etc) that would be used across the application._

# [Test Driven Development](https://www.agilealliance.org/glossary/tdd/)

* ### [Integration Testing Through Cypress](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
* ### [Unit Testing Through Jest](https://jestjs.io/docs/tutorial-react)
* ### [Manual Regression Testing](https://smartbear.com/learn/automated-testing/what-is-regression-testing/)

# Feature Branching
_The process that the MCSWF uses for feature branching is pretty simple. Below you'll find the steps we take throughout the workflow_

## Steps

### Pull the latest from the master branch 
```sh
    git checkout master
    git pull origin master
```
_The process will reduce the amount of conflicts dealt with when the feature branch is merged back in to the master branch._

### Checkout the feature branch
_The naming convention for feature branches will be: 'MCSWF-STORY#', i.e. 'MCSWF-1'_

```sh
    git checkout -b MCSWF-#
```
### Validate branch status before coding
_This is just insurance that the branch was created successfully and that git is pointed towards that branch_

```sh
    git status
```
### (Optional) Rebase with origin/master daily
_In order to reduce the amount of conflicts dealt with when the feature branch is ready to be merged in to master, we will rebase the feature branch with the latest code from origin/master._

```sh
    git checkout master
    git pull origin master
    git checkout MCSWF-STORY#
    git rebase -i master
```
If there are several commits that need to be picked / squashed, we will always pick the commit at the TOP of the list, and squash the rest via VIM
<br/>
<br/>
_Example:_
```sh
    pick 0253dc894f WIP
    squash 5a1e86933c remove dependency
    squash bffoffb395 Added some more tests
    squash 222fabf5e0 Removed unneeded logic
    squash 726a2f9a10 MCSWF-1: Create Homepage
```
_There may be some conflicts when rebasing with master, you can resolve those conflicts and continue the rebasing_
<br/>
_Example: (After all conflicts are resolved)_
```sh
    git rebase --continue
```
Once all conflicts are resolved, your feature branch has successfully been rebased with origin/master! You can then push your new code to remote.

### Merge the feature branch into master
_Important: In order to reduce conflicts, ensure the above step (Rebasing origin/master into the feature branch) has been completed._
<br/>
#### 1. Checkout origin/master and pull the latest code
```sh
    git checkout master
    git pull origin/master
```
#### 2. Merge the feature branch into master
```sh
    git merge MCSWF-#
```
_If there are any merge conflicts, you'll be asked to resolve. This should not happen if you've completed the rebasing step required before step 1._
<br/>
<br/>
#### 3. Re-run all test suites
Re-running all test suites will ensure that there were no undiscovered issues during the merge, and that everything still performs appropriately. 

#### 4. Push local master to origin/master
The final step is to push the tested (local) master branch to origin/master.
```sh
    git push
```

# Important Links

* [Agile Board <b>(Pivotal Tracker)</b>](https://www.pivotaltracker.com/n/projects/2575870)
* [Figma Design](https://www.figma.com/file/26FduvNae6jlmGjJie37AL/Marine-Corps-Software-Factory?node-id=0%3A1)
* [Jenkins Pipeline <b>(Dev)</b>](#)
* [Jenkins Pipeline <b>(Stage)</b>](#)
* [Jenkins Pipeline <b>(Prod)</b>](#)
* [AWS S3 Bucket <b>(Dev)</b>](#)
* [AWS S3 Bucket <b>(Stage)</b>](#)
* [AWS S3 Bucket <b>(Prod)</b>](#)

_To request access to Pivotal Tracker or Figma, please contact Patrick Sherlund
at [patrick.sherlund@usmc.mil](mailto:patrick.sherlund@usmc.mil)_
<br/>
_For issues with any of the other services, please submit a trouble ticket to MCBOSS via
the [MCBOSS Support service Desk](https://jira.adts.usmc.mil/servicedesk/customer/user/login?destination=portals)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

# License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->

# Contact

* Email: [patrick.sherlund@usmc.mil](mailto:patrick.sherlund@usmc.mil)
* Project Link: [https://github.com/Patrick-Sherlund/MCSWF](https://github.com/Patrick-Sherlund/MCSWF)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

# Acknowledgments

* [N/A]()

<p align="right">(<a href="#top">back to top</a>)</p>
