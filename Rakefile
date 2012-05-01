require 'rake-pipeline'

def build
  Rake::Pipeline::Project.new("Assetfile")
end

desc "Build Spader"
task :dist do
  puts "Building Spader..."
  build.invoke
  puts "Done"
end

desc "Clean build artifacts from previous builds"
task :clean do
  puts "Cleaning build..."
  build.clean
  puts "Done"
end

desc "commit and push to heroku"
task :push => :dist do
  system "git add -u"
  system "git commit -m 'added new packages'"
  system "git push origin master"
  system "git push heroku master"
end