# OmnigonSocial
Mobile app assignment for Omnigon

Installing/running the app on macOS

We'll assume, for getter or worse, that you have node already installed
if not, please go to this link https://nodejs.org/en/ for instructions 
also, if you don't have Homebrew installed please click here: https://docs.brew.sh/Installation.html

To clone this repository copy this link: git@github.com:TheoGit/OmnigonSocial.git
and from the command line enter "git clone git@github.com:TheoGit/OmnigonSocial.git"

This will create folder omnigonSocial
enter "cd OmnigonSocial" to put you into the omnigonSocial folder

Now we'll need to install the various React Native packages and Yarn (used for installing)
I choose not to upload the node_modules director to github due to size

brew install yarn --ignore-dependencies
brew install watchman

npm install --save react-native
npm install --save react
npm install --save react-navigation

npm i -g react-native-cli react-devtools eslint babel-cli

npm install 

yarn (this will install any missing packages)

Running on simulator via command line
from the omnigonSocial folder enter: react-native run-ios

Running app via XCode for your physical device, or a simuator

Open XCode

Open Project omnigonSocial/ios/omnigonSocial.xcodeproj

Once on the landing screen of the app click the 'Enter' button.
This will take you to the configurations page.
Here you can enter the number of feeds you wish to view, the url, and the interval at which to refesh
Click the 'View List' button to see the list of social feeds.

