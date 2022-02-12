<?php

/*
 * This file is part of fof/oauth.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Adarsh\Firebase;

use Flarum\Http\RouteCollection;
use Flarum\Http\RouteHandlerFactory;
use Illuminate\Contracts\Container\Container;
use Illuminate\Support\ServiceProvider;

class OAuthServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->tag([
            // Providers\Discord::class,
            Providers\Facebook::class,
            Providers\GitHub::class,
            // Providers\GitLab::class,
            Providers\Twitter::class,
            Providers\Google::class,
            // Providers\LinkedIn::class,
        ], 'fof-firebase.providers');

        // Add OAuth provider routes
        // $this->app->resolving('flarum.forum.routes', function (RouteCollection $collection, Container $container) {
        //     /** @var RouteHandlerFactory $factory */
        //     $factory = $container->make(RouteHandlerFactory::class);

        //     $collection->addRoute('GET', new OAuth2RoutePattern(), 'fof-firebase', $factory->toController(Controllers\AuthController::class));
        // });

        $this->app->singleton('fof-firebase.providers.forum', $this->map(function (Provider $provider) {
            if (!$provider->enabled()) {
                return null;
            }

            return [
                'name' => $provider->name(),
                'icon' => $provider->icon(),
            ];
        }));

        $this->app->singleton('fof-firebase.providers.admin', $this->map(function (Provider $provider) {
            return [
                'name'   => $provider->name(),
                'icon'   => $provider->icon(),
                'link'   => $provider->link(),
            ];
        }));
    }

    protected function map(callable $cb)
    {
        return function () use ($cb) {
            $providers = $this->app->tagged('fof-firebase.providers');

            return array_map(function ($provider) use ($cb) {
                return $cb($provider);
            }, iterator_to_array($providers));
        };
    }
}
