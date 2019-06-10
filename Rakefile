require 'opal'
require 'opal-sprockets'

desc "Build our app to rubycanvas.js"
task :build do
  env = Opal::Environment.new
  env.append_path "app"

  File.open("rubycanvas.js", "w+") do |out|
    out << env["rubycanvas"].to_s
  end
end