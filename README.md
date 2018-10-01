# Laravel 5.7 - Private real-Time notifications with Socket.io and Redis 

This app works along with [Socket.io], [Redis], [Predis], [Laravel Notifications], [Laravel Events], [Laravel Listeners], [Laravel Channels], [Laravel Form Requests], [Laravel Middleware], [Laravel Echo], [Laravel Validation Rules] class and etc.

In addition to the repository [Laravel-Real-time_Socket-io], this app implements private notifications using the Notification resourse of Laravel. 

The app simulates a cryptocurrency exchanging platform and uses Laravel's Notification to store in database new notifications as well as broadcast it. The system has a real time resource that shows in real time the total amount a user have, a facebook like notifications menu that increase while the user receives new transfers as well as a modal message to alert about new transfers. The app makes use of Laravel events, listeners, channels and notifications to implement the real-time notification as well as the control of unread notifications.

### How it works:

Once you register a user in the platform, the user receives 15 in cryptocurrency that can be transfered to other registered users, the app has validations for the transfer form that checks the existence of the other user as well as if the total transfer amount is available in the emitter's account.

### The customization of the User Registration includes:

- replaced 'name' to 'username'
- added a Request Class to deal with the user registration form validation and error message
- adding a get route to the logout
- segregating layout and public files in 'front' and 'dashboard'

### Installation

**You will need the Redis installed and running in your environemnt;**

```
$ npm install -g laravel-echo-server;
$ mv laravel-echo-server.json.example laravel-echo-server.json 
$ composer install
$ npm install && npm run dev
$ php artisan migrate
```

On your .env file replace fill with your environment data:
```
BROADCAST_DRIVER=redis

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null # if you have configured a password 
REDIS_PORT=6379

DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

### Running the application

```
$ laravel-echo-server start
```

License
----

MIT

**by [Thiago Mallon]**

 [Socket.io]: <https://socket.io/>
 [Vue.js]: <https://vuejs.org/>
 [Redis]: <https://redis.io/>
 [Predis]: <https://github.com/nrk/predis>
 [Laravel Events]: <https://laravel.com/docs/5.7/events>
 [Laravel Listeners]: <https://laravel.com/docs/5.7/events#queued-event-listeners>
 [Laravel Notifications]: <https://laravel.com/docs/5.7/notifications>
 [Laravel Channels]: <https://laravel.com/docs/5.7/broadcasting#defining-channel-classes>
 [Laravel Validation Rules]: <https://laravel.com/docs/5.7/validation#custom-validation-rules>
 [Laravel Form Requests]: <https://laravel.com/docs/5.7/validation#creating-form-requests>
 [Laravel Middleware]: <https://laravel.com/docs/5.7/middleware>
 [Laravel Echo]: <https://laravel.com/docs/5.7/broadcasting#installing-laravel-echo>
 [laravel-echo]: <https://www.npmjs.com/package/laravel-echo>
 [laravel-echo-server]: <https://www.npmjs.com/package/laravel-echo-server>
 [Thiago Mallon]: <https://www.linkedin.com/in/thiago-mallon/>
 [Laravel-Real-time_Socket-io]: <https://github.com/jamesmallon/Laravel-Real-time_Socket-io>
