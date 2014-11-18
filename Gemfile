source 'https://rubygems.org'

gem "sinatra", "~>1.4"
gem "haml", "~>4.0"
gem "coffee-script"
gem "sass"
gem "thin", "~>1.6"
gem "tilt", "~>1.4"
gem "sinatra-contrib"
#gem "bootstrap-sass"

# Search
gem 'elasticsearch'
gem 'hashie'

# Background Jobs
gem 'backburner'

# Custom Gems
gem 'date_time_precision', :git => 'https://github.com/Spokeo/date_time_precision'
gem 'museum_provenance', :path => "../museum_provenance"


group :documentation do
  gem 'rack-jekyll', :git => 'https://github.com/adaoraul/rack-jekyll.git'
end

group :development do
  gem 'guard'
  gem 'guard-sass'
  gem 'guard-livereload'
  gem "rack-livereload"
  gem 'guard-bundler', require: false
  gem 'guard-shell'
  gem 'guard-coffeescript'
  gem 'minitest'
  gem 'minitest-reporters'
  gem 'rake'
  gem 'uglifier'
  gem 'guard-sprockets'
  gem "rerun"
  gem "rb-fsevent"
end
