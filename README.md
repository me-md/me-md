# MeMD

MeMD is a React Native App allowing a user to self diagnosis medical conditions and find the closest specialists.

### Table of Contents

<!--ts-->
   * [Table of Contents](#table-of-contents)
   * [Set Up](#set-up)
   * [Focuses](#focuses)
   * [Screenshots](#screenshots)
   * [Tech Stack](#tech-stack)
   * [Team](#team)
   * [Project Board](#project-board)
   
<!--te-->

### Set Up

To fetch all information, you will have to apply for an API key and App ID with the Infermedica API [here](https://developer.infermedica.com/signup). This can take 24-36 hours, so plan accordingly.

You will also need to apply for a MapQuest API key [here](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register). This normally doesn't take long and you should receive your API key within the hour.

Clone repo.
```
https://github.com/me-md/me-md.git
```
Install dependencies.
```
npm install
```

Create an `.env` file in the root directory of the repository.
  You will need to declare three environmental variables:
    ```
    REACT_APP_ID=yourAppIdHere
    REACT_APP_KEY=yourAppKeyHere
    MAPQUEST_KEY=yourMapQuestAPIKeyHere
    ```

Run browser.
```
npm start
```

Note you will need to set up expo cli using:
```
sudo npm i expo-cli -g
```

And have Xcode installed for IOS simulator, or a IPhone.

For iOS Simulator:
1. Download XCode from the App Store and open it
2. From the bar at the top of your screen when in XCode, click "XCode" and then "Preferences"
  a. go to "locations" and then for Command Line Tools, select the XCode Command Line Tools
  b. Go back to the top bar, click "Xcode" and then "Open Developer Tool," then "Simulator"
  c. Will launch a simulator. To change the device, click on it (top bar should now say "Simulator"), then select "Hardware" and under "iOS" you can choose another phone
3. "i" in terminal to run project on iOS simulator

For reference: https://nandovieira.com/setting-up-react-native-on-macos-mojave


### Focuses

The primary learning goals for this project are:

- Use an agile process to turn well defined requirements into deployed and production ready software
- Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams. -  - Service oriented architecture concepts and patterns are highly encouraged.
- Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
- Practice an advanced, professional git workflow (see whole-team expectations)
- Gain more experience using continuous integration tools to build and automate the deployment of features in various environments
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between front-end and back-end teams in order to complete and deploy features that have been outlined by the project spec

### Screenshots

<img width="535" alt="Screen Shot 2020-01-09 at 11 35 53 AM" src="https://user-images.githubusercontent.com/25589695/72379016-775cea00-370a-11ea-9c20-4501c88bc2e2.png">
<img width="535" alt="Screen Shot 2020-01-09 at 11 35 40 AM" src="https://user-images.githubusercontent.com/25589695/72379018-788e1700-370a-11ea-862f-2ce72fc3e0f2.png">
<img width="535" alt="Screen Shot 2020-01-09 at 11 35 34 AM" src="https://user-images.githubusercontent.com/25589695/72379021-79bf4400-370a-11ea-8dfa-fc9dc33e0c1e.png">


### Tech Stack

#### Front End
- React Native
- React Navigation
- Tested with Jest/Enzyme

#### Back End
- Elixir/Phoenix
- Pyhton/Django
- Python/Flask
- Ruby/Rails


### Team
- [Vanessa Randall](https://github.com/vrandall66)
- [Tylor Schafer](https://github.com/tylorschafer)
- [Pol Sieira](https://github.com/polsieira)
- [Evette Telyas](https://github.com/evettetelyas)
- [Nathan Thomas](https://github.com/nathangthomas)

### Project Board
- [MeMD Project Board](https://github.com/orgs/me-md/projects/1)

#### Image Credits

Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts" title="Icon Pond">Icon Pond</a>, <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a>, <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> and <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
