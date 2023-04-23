## Lessons
1. Introduction to the course
2. Install development tools
3. Create Angular App
    1. Create Project's folder
    2. Install @angular/cli
    3. Create APp as frontend
4. Add Header
    1. Generate Component
    2. Add Html
    3. Add CSS
5. List Foods
    1. Create Food model
    2. Create data.ts
        1. Add sample foods
    3. Add images to assets
    4. Create Food Service
    5. Create Home component
        1. Add ts
        2. Add html
        3. Add css
6. Search
    1. Add Method to Food Service
    2. Add Search Route
    3. Show Search result in Home component
    4. Generate search component
        1. Add to home component
        2. add ts
        3. Add html
        4. Add css
7. Tags Bar
    1. Create Tag model
    2. Add sample tags to data.ts
    3. Food service
        1. Add get all tags method
        2. Add get all foods by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Tags component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css
    
8. Food Page
    1. Add method to food service
    2. Generate Food Page component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add css

9. Cart Page
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate Cart service
    4. Add to Cart Button in Food Page
    5. Generate Cart page component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add css
    
10. Not Found!
    1. Generate Component
        1. Add ts
        2. Add html
        3. Add css
    2. Add To Pages
        1. Home Page
        2. Food Page
        3. Cart Page

11. Connect To Backend
    1. Create backend folder
    2. npm init
    3. npm install typescript
    4. Create tsconfig.json
    5. Create .gitignore
    6. Copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        1. install @types
        2. Add Apis
    9. npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service

12. Login Page

    1. Generate Component
        1. Add to routes
        2. Add ts
        3. Add html
            1. Import Reactive Forms Module
        4. Add Css
    2. Add Login Api
        1. Use json
        2. Add jsonwebtoken
        3. Test Using Postman
    3. Generate User Service
        1. Generate User model
        2. Add User Subject
        3. Add Login Method
            1. Add User Urls
            2. Generate IUserLogin interface
            3. Add ngx-toastr
                1. Import Module
                2. Import BrowserAnimationsModule
                3. Add styles in angular.json
            4. Add to Header
        4. Add Local Storage methods
        5. Add Logout Method
            1. Add to Header

13. Make Components For Login Page

    Input Container
    Input Validation
    Text Input
    Default Button

14. Connect Login API To MongoDB Atlas

    Moving Apis into routers
    Create MongoDB Atlas
    Create .env file
    Install
    mongoose
    dotenv
    bcryptjs
    express-async-handler
    Connect to MongoDB Atlas
    Use MongoDB instead of data.ts in apis

15. Register User

    Add Register api
    Add Register service method
    Add Register link
    Add Register Component

16. Loading!

    Add Image
    Add Component
    Add Service
    Add Interceptor

17. Checkout Page

    Create Order Model
    Create Checkout Page Component
    Add To Router
    Add User to User Service
    Add Cart to Cart Service
    Create Order Items List Component
    Adding Map To The Checkout Page
    Add Leaflet npm package
    Add @types/leaflet
    Add Css to angular.json
    Add AddressLatLng to Order Model
    Create Map component
    Add to checkout page
    Add TS
    Change app-map selector to map
    Add Html
    Add CSS
    Add Auth Guard
    Save Order
    Add Order Model
    Add Order Status Enum
    Add Auth Middleware
    Add Order Router
    Add create API
    Add Order Urls to urls.ts
    Add Order Service
    Add create Method
    Add Auth Interceptor

18. Payment Page

    Generate Component
    Add 'getOrderForCurrentUser' api
    Add Order Service method
    Connect Component to Service
    Make the map component readonly

19. Adding Paypal

    Generate Component
    Add to payment page
    Get Paypal client Id
    Add Paypal JS to index.html
    Set up Paypal button
    Add Pay api to order router
    Get Paypal sandbox account

20. Order Track Page

    Generate Component
    Add to routes
    Add API
    Add to urls.ts
    Add method to order.service
    Add HTML
    Add CSS

21. Deploy On Heroku

    OutputPath in angular.json
    package.json
    frontend
    backend
    root
    BASE_URL in urls.ts
    Public folder config in server.ts
    Run commands
    Add built folder to .gitignore
    Commit and Push

22. Updating Packages (Optional)

    Install npm-check-upates as a global package
    Run ncu -u in the frontend folder
    Downgrade typescript to version ~4.8.2
    Run npm install --force
    Run npm start
    Run ncu -u in the backend folder
    Run npm install
    Run npm start