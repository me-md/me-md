<p align="center">
  <img src="https://i.ibb.co/rkRkYMS/github-banner.png" /><br>
</p>
# MeMD

**MeMD** is a mobile platform that allows users to self diagnosis potential medical conditions and find the closest specialists that accept their insurance plan. MeMD can help you have a more informed conversation with your doctor.

## Table of Contents

<!--ts-->

- [Table of Contents](#table-of-contents)
- [Set Up](#set-up)
- [Screenshots](#screenshots)
- [Focuses](#focuses)
- [Tech Stack and Team](#tech-stack)
- [Agile Workflow](#project-board)

<!--te-->

## Set Up

**Before you get too far...**

#### 1. Apply for an API key and App ID

with the [Infermedica API](https://developer.infermedica.com/signup). This can take **24-36 hours**.

You will also need to apply for a MapQuest API key [here](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register).
This normally doesn't take long and you should receive your API key within the hour.

#### 2. Clone the repository

```
https://github.com/me-md/me-md.git
```

#### 3. Install dependencies

```
npm install
```

#### 4. Create an `.env` file in the root directory of the repository.

#### 5. You will need to declare three **environmental variables**:

```
REACT_APP_ID=yourAppIdHere
REACT_APP_KEY=yourAppKeyHere
MAPQUEST_KEY=yourMapQuestAPIKeyHere
```

#### 6. To start the server:

```
npm start
```

#### To run this on your computer:

1. Set up `expo cli` using:
   `sudo npm i expo-cli -g`

2. Have Xcode installed for IOS simulator, or an iPhone

#### To run this on your phone:

1. Download XCode from the App Store and open it
2. From the bar at the top of your screen when in XCode, click "XCode" and then "Preferences"
   a. Go to "locations" and then for Command Line Tools, select the XCode Command Line Tools
   b. Go back to the top bar, click "Xcode" and then "Open Developer Tool," then "Simulator"
   c. Will launch a simulator. To change the device, click on it (top bar should now say "Simulator"), then select "Hardware" and under "iOS" you can choose another phone
3. "i" in terminal to run project on iOS simulator
   [Reference](https://nandovieira.com/setting-up-react-native-on-macos-mojave)

## Screenshots

<img width="535" alt="Screen Shot 2020-01-09 at 11 35 53 AM" src="https://user-images.githubusercontent.com/25589695/72379016-775cea00-370a-11ea-9c20-4501c88bc2e2.png">
<img width="535" alt="Screen Shot 2020-01-09 at 11 35 40 AM" src="https://user-images.githubusercontent.com/25589695/72379018-788e1700-370a-11ea-862f-2ce72fc3e0f2.png">
<img width="535" alt="Screen Shot 2020-01-09 at 11 35 34 AM" src="https://user-images.githubusercontent.com/25589695/72379021-79bf4400-370a-11ea-8dfa-fc9dc33e0c1e.png">

## Tech Stack

### Front End

[Vanessa Randall](https://github.com/vrandall66) and [Pol Sieira](https://github.com/polsieira)

- React Native
- Expo
- React Navigation
- Tested with Jest/Enzyme

### Back End

[Tylor Schafer](https://github.com/tylorschafer), [Evette Telyas](https://github.com/evettetelyas) and [Nathan Thomas](https://github.com/nathangthomas)

- Elixir/Phoenix
- Pyhton/Django
- Python/Flask
- Ruby/Rails

## Goals

- Use an agile process to turn well defined requirements into deployed and production ready software
- Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams
- Explore and implement brand new frameworks/technologies (React Native, hooks)
- Practice an advanced, professional git workflow
- Gain more experience using continuous integration tools to build and automate the deployment of features in various environments
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between front end and back end teams in order to complete and deploy features


## Project Board

The MeMD organization follows an agile workflow by utilizing the kanban board template on GitHub projects.

Over 120 tickets (user stories, bugs, new feature and testing tickets) were converted into issues, and tracked by the entire team throughout the four week build.

A PR template was utilized for both the front end and back end repositories to encourage code reviews and conversations on GitHub.

To see the process, check out the project board **[here](https://github.com/orgs/me-md/projects/1)**

## Image Credits

Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts" title="Icon Pond">Icon Pond</a>, <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a>, <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> and <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
