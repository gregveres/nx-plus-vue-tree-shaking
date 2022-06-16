

# Shows that Nx-plus/vue isn't tree shaking the production code


The code was created using the steps outlined on nx-plus/vue's github page.
I created the app 'main' and a library called 'shared'.
In shared, there are two vue components, HelloWorld and GoodByeWorld. HelloWorld is used and GoodByeWorld is not. 
GoodByeWorld should be removed from the production build since it isn't used. But it is still present in the final
bundled JS files according to Bundle Analyzer. 