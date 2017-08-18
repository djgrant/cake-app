# Cake App

[![Edit djgrant/cake-app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/djgrant/cake-app/tree/master/?module=)

## Requirements

- Render list of cakes (https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json)
- Make UI render nicely on iPad and Nexus 5
- Add ability to search cakes
- Add basic ability to edit/add cakes

## Plan

- Higher order component to pass data in from remote source, transform based on incoming props (for search) and run mutations against (for add/edit)
- Filter data array by words matching a search term
- Highlight words matching search term. Try to avoid using `dangerouslySetInnerHTML`.
- Base form component that can be composed to an new and edit view
- react-router to render new/edit screens
