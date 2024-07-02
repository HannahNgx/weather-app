# Dummy API

## Overview

An API with static mock responses to use for development. Not the smartest of its kind.

## Background
NASA's [InSight API](https://api.nasa.gov/#insight) seems to currently be lacking quite a bit of data.
That makes it less than ideal to work with for the purposes of the app.
This API was created for development, so that it can be run locally and return mock endpoints with static responses matching the ones that NASA’s API would return.

## Getting Started

### Local Setup

1. `cd dummy_api`
1. Make sure you have [rmv](https://rvm.io) or your version manager of choice installed
1. `rvm install 3.3.3`
1. `gem install bundler`
1. `bundle install`
1. `bundle exec rackup --host 0.0.0.0 -p 4567`
1. Visit http://localhost:4567
1. Celebrate!

### Docker

1. See the Docker running instructions under the root README.md file
1. Visit http://localhost:4567
1. Celebrate!

## Troubleshooting

### I'm not seeing the changes I made to the API

**Solution**: The current API is very slim and does not use any auto-reload. When `main.rb` is changed, you need to stop and restart the server.


