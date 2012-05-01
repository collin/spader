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