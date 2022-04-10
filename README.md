# App Description

This app provides a simple forecast for predicting the chances to see the Northern Lights from anywhere in the world.
By clicking on any spot on the map, the client will be provided with all the information he needs to plan his journey to see the the Aurora.
Alternativly, the client can pick a location from a predefined list of locations to get all the information he needs for those specific locations.

# 🌍 Northern nights Task

## Story

- The client is a travel agency, specializing in trips to view the northern lights all over the world.
- They require a platform To help them see whether or not an aurora is likely to be happening in a certain location.
- The platform is needed urgently, and should work as requested, anything beyond that ( other features, style ) would be appreciated within they time constraints but is secondary.

## Task

- Your task wil be creating a user interface for the platform, allowing the user to check out locations around the world for information about northern lights activity.
- The design team has provided a rudimentary [layout](./src/assets/layout.png), please follow it (.

### Resources

- [Aurora api](http://auroraslive.io/#/api/v1) - provides all sorts of data related to the northern lights
- Image of world map provided.
- https://hello-aurora.com/news/aurora-forecast information about some of the data you can get from the api, not neccessary for primary requirements but can help if you want to add more things.

### Requirements

1. The interface shows a map of the world, provided [here](./src/assets/map.jpg)
2. When clicking on the map, a cursor will appear marking the selected location
3. When clicking on the map, longtitude and latitude values of the selected location will be displayed on the screen in the appropriate location
4. Interface should allow for selecting predefined locations (available from the api) instead of selecting on the map
5. interface should show the **probability** in % for the selected location
6. Legal says we need to put "Information via Auroras.live" somewhere, so please include it.

### Further tasks

If you manage to finish the required tasks within the time frame, here are some ideas for other features you can add:

- Include more aurora/other informations from the api
- Use the archive model of the api to show past information

## Instructions

### Starting

- To start working, fork the repository to your account
- Clone it to your machine
- Run `npm i` to install the dependencies, `npm start` to start the CRA development server
- Please stick to proper git management- separate you work into small, sensible commits with proper messages, work on feature branchesand not on the main, etc.
- You may use libraries as you see fit, but not any that implement the map feature, please create that by yourself.

### Submission

- Add to this .md file a short overview of your site and how it works, if anything needs explaining.
- Submit your work in the form of a pull request to master. You may also deploy it, i.e. to vercel or another platform of your choice.
- Your priorities should be:
  1. Primary tasks
  2. Performant, readable and maintainable code
  3. Proper git practices.
  4. Basic look and feel
  5. Extra features
