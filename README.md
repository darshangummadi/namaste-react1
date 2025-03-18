Hello guys this is learning project of ReactJS
start by "npm init"
a package.json will be generated once you initiate the project
package.json - Configuration file for npm
               These are aslo called dependencies
               npm will manage all the packages and their versions
               npm install -g <package-name> - install package globally


The main package we need in this react application is BUNDLER
Bundler is a tool that bundles all the code in your application into a single file
webpack
vite
parcel are some of the popular bundlers in the market 

>>>>>>>>>>>
when installing we give npm install -D parcel
-D means development dependency
parcel is a zero-config bundler
>>>>>>>>>>>
Just like how we have npm we have npx.
npx is a package runner tool i.e it execute the package 
npx parcel index.html - it executes the parcel parcel package 
parcel 
Dev build
Local Server
HMR - Hot Module replacement 
parcel uses file watching algorithm in C++
caching - Faster Builds
Image Optimization
CSS Minification
bunlde Optimization
>>>>>>>>>>>
there are other ways of getting React and ReactDom into your workspace
one way is CDN links - Which is not right way and its a costliest operation as it makes a network call 
another way is npm install react react-dom - This is the right way
This way it gets installed and downloaded into node_modules and easy to access
npm install react or npm i react is same -> i means install
once its done go ahead and comment out the cdn links code in your html and test
>>>>>>>>>>>
